# Mokuri — Session Plan

## Working Principles

**Branching workflow (mokuri.art is live):**
- Default: develop on `dev` branch. Never push directly to `main` unless explicitly told.
- Local testing first → push to `dev` when user approves → merge `dev` → `main` only on explicit instruction.
- `dev.mokuri.art` is for multi-device testing before promoting to production.

---

## Active Work: Carving Performance Optimization

### Problem Statement

Carving is laggy on iPad Mini (and likely other mid-range devices), especially with the pattern tool. The issue is compounded by Forge-generated elements which have 50-200+ SVG paths compared to 3-10 for hand-authored elements. The carving system was designed before Forge elements became the norm, and the architecture hasn't scaled to accommodate the added complexity.

### Analysis Summary

**The hot path (every pointermove during active carve stroke):**
1. `getCoalescedEvents()` — collects high-frequency digitizer events (120-240Hz on Apple Pencil)
2. For each event: `clientToSvg` → `svgToElementLocal` → EMA smoothing → push to points[]
3. `renderCarvePreview(el, points)` — called on every pointermove, no throttling
   - `clearCarvePreview()` — removes entire SVG `<g>` from DOM
   - `carveStrokeRenderData(fakeStroke, ...)` — recomputes ALL ribbon geometry from scratch
     - `computeRibbonD()` called 2-6 times (groove + profile layers)
     - Each call iterates ALL accumulated points, builds Catmull-Rom curves, produces path string
   - Creates new SVG `<path>` elements (2-6), sets attributes, appends to DOM

**On stroke completion (pointerup):**
4. `simplifyStroke()` — RDP simplification (cheap, good)
5. `rerenderAll()` — tears down and rebuilds ENTIRE scene DOM
   - Every element: creates new `<g>`, resolves paths, creates `<path>` elements, handles patterns/gradients
   - All background carve strokes re-rendered
   - Atmosphere re-rendered
   - With Forge elements: potentially 1000+ DOM nodes destroyed and recreated
6. `autoSave()` — serializes full state, generates thumbnail, writes IndexedDB

**Audio:** Not a factor — `playCarveStart()` and `playCarveEnd()` fire once each at stroke start/end. No per-frame audio. Web Audio scheduling is non-blocking (~0.1ms overhead).

### Root Causes (Ranked by Impact)

| # | Bottleneck | Impact | Where |
|---|-----------|--------|-------|
| 1 | No rAF throttling on preview | Renders faster than display refresh (wasted work) | pointermove handler, line ~11004 |
| 2 | Full ribbon recomputation every frame | O(n) per point × layers, growing cost as stroke lengthens | `carveStrokeRenderData` → `computeRibbonD` |
| 3 | Full DOM teardown/rebuild on every frame | Layout thrash, GC pressure from discarded nodes | `renderCarvePreview` → `clearCarvePreview` |
| 4 | `rerenderAll()` on stroke end | Rebuilds ALL elements, not just the one being carved | pointerup handler, line ~11248 |
| 5 | `autoSave()` immediate on stroke end | Serialization + thumbnail + IndexedDB write in event chain | pointerup handler, line ~11249 |
| 6 | Pattern tool: wide ribbon (20px base) | Larger path strings, more DOM surface area | `patternStrokeRenderData` |

### Implementation Plan

#### Phase 1: Frame Throttling (High impact, low risk)

**Goal:** Never render preview faster than display refresh rate.

**Change:** Gate `renderCarvePreview` behind `requestAnimationFrame`. Accumulate points in pointermove, but only render on next animation frame.

```javascript
// In pointermove handler, replace direct renderCarvePreview call:
if (!STATE.carving._rafPending) {
  STATE.carving._rafPending = true;
  requestAnimationFrame(() => {
    STATE.carving._rafPending = false;
    renderCarvePreview(el, STATE.carving.points);
  });
}
```

**Expected improvement:** 2-4× fewer renders on high-refresh devices. Zero visual quality loss.

**Risk:** Very low. Points still accumulate at full digitizer rate (important for stroke quality). Only the visual preview is throttled.

#### Phase 2: Incremental Preview Rendering (High impact, medium complexity)

**Goal:** Avoid recomputing the entire ribbon from scratch every frame.

**Approach:** During active carving, use a simplified centerline stroke for the preview instead of full ribbon geometry. Switch to full-fidelity rendering only on stroke completion.

```javascript
function renderCarvePreviewFast(el, points) {
  // Update only the d attribute of an existing path — no DOM creation/destruction
  let preview = document.getElementById('carve-preview-path');
  if (!preview) {
    // First frame: create minimal preview structure (once per stroke)
    createPreviewStructure(el);
    preview = document.getElementById('carve-preview-path');
  }
  // Simple centerline — just Catmull-Rom of last N points (not full ribbon)
  const d = pointsToD(points.slice(-Math.min(points.length, 100)));
  preview.setAttribute('d', d);
  // Update stroke-width from current pressure
  const lastP = points[points.length - 1];
  const tool = CARVE_TOOLS[STATE.carveTool];
  const pc = getPressureCurve(STATE.pressureCurve);
  const pw = pc.wBase + Math.pow(lastP.pressure || 0.5, pc.wPow) * pc.wMul;
  preview.setAttribute('stroke-width', tool.width * pw);
}
```

**Expected improvement:** 5-10× faster per frame — single `setAttribute('d', ...)` vs. full ribbon computation + DOM teardown/rebuild. Preview is slightly less pretty during drawing but final result is identical.

**Risk:** Medium. Need to ensure the preview still gives good visual feedback for pressure and tool type. Pattern tool may need a semi-transparent rectangle overlay instead of centerline.

#### Phase 3: Targeted Re-render on Stroke End (High impact, medium complexity)

**Goal:** Don't rebuild the entire scene when only one element changed.

**Approach:** Replace `rerenderAll()` with a targeted update:

```javascript
function rerenderElement(el) {
  const layerIndex = STATE.elements.indexOf(el);
  const oldG = compLayer.querySelector(`g[data-id="${el.id}"]`);
  const newG = renderElementSvg(el, layerIndex);
  if (oldG && newG) {
    compLayer.replaceChild(newG, oldG);
  } else if (newG) {
    compLayer.appendChild(newG);
  }
  updateSelection();
}
```

On stroke completion: call `rerenderElement(el)` instead of `rerenderAll()`.
For background carving: call `renderBackgroundCarveStrokes()` only (already exists).

**Expected improvement:** With 8 Forge elements in a composition, this is ~8× faster on stroke end (re-render 1 element vs. 8). Eliminates the "freeze frame" between strokes.

**Risk:** Low-medium. Must ensure layer ordering is preserved (replaceChild maintains position). Selection highlighting must still work. Carve focus dimming state must persist.

#### Phase 4: Debounced AutoSave (Low-medium impact, very low risk)

**Goal:** Don't serialize/write after every single stroke.

**Change:** Debounce autoSave to fire 800ms after the last stroke end:

```javascript
let _autoSaveTimer = null;
function debouncedAutoSave() {
  if (_autoSaveTimer) clearTimeout(_autoSaveTimer);
  _autoSaveTimer = setTimeout(() => { _autoSaveTimer = null; autoSave(); }, 800);
}
```

**Expected improvement:** Eliminates serialization + IndexedDB write between rapid strokes. Saves still happen reliably (800ms after last stroke).

**Risk:** Very low. If the user closes the tab within 800ms of their last stroke, that stroke is lost. Acceptable tradeoff — this matches standard autosave UX.

#### Phase 5 (Future): SVG Element Caching

**Goal:** Cache rendered `<g>` nodes for elements that haven't changed.

This is more architectural and can be deferred. Phases 1-4 should address the immediate lag. If needed later, the approach would be:
- Maintain a `_renderCache: Map<elementId, { g: SVGGElement, version: number }>` 
- Increment element version on any mutation (carve stroke, color change, etc.)
- In `rerenderAll()`, reuse cached `<g>` if version matches

### Implementation Order & Testing

1. **Phase 1** (rAF throttle) — implement first, test immediately. Safest change.
2. **Phase 4** (debounced save) — implement alongside Phase 1. Trivial and additive.
3. **Phase 3** (targeted re-render) — implement next. Biggest single improvement for stroke-end responsiveness.
4. **Phase 2** (fast preview) — implement last. Most complex, biggest improvement for during-stroke fluidity.

Each phase is independently testable and can be shipped separately.

### Success Metrics

- Carving on iPad Mini feels responsive (no visible lag between pen movement and stroke appearance)
- Pattern tool doesn't noticeably stutter on compositions with 5+ Forge elements
- Rapid short strokes (hatching) don't cause compounding lag
- No visual regressions — final rendered strokes identical to current

---

## Current Status

### Completed This Session
- [x] Dev/prod environment separation (Part 3 of prod-dev-setup)
  - `MOKURI_IS_DEV` constant (file://, localhost, dev.mokuri.art, .vercel.app)
  - Gated: test-elements, Ctrl+Shift+X, Ctrl+Shift+P, long-press brand, SW, version check
  - Kept as power-user: Ctrl+Shift+G (gallery export), Ctrl+Shift+A (purge prints)
  - Fixed ordering bug (MOKURI_IS_DEV must be before element merges — const not hoisted)
  - Fixed leftover localStorage `mokuri-dev-styles` bleeding into production
  - Added DEV indicator (status bar + About screen)
  - Moved backup element files to `assets/archive/`
  - Updated `dev/prod-dev-setup.md` with dev.mokuri.art
- [x] Main → dev branch sync confirmed working
- [x] Vercel deployment verified: mokuri.art (prod), dev.mokuri.art (dev, auth-gated)
- [x] Element library expansion (vessels, treelines, bridges, walls, docks, shrine halls)
- [x] FRE fixes (celebration arrow, center dialogs, choose-paper hint, double-load)
- [x] Privacy page, Windows Store guide

### Still Pending (Part 3.3)
- [ ] Replace binary `mokuri-dev-styles` with per-pack `getEnabledPackIds()` system
  - Nice-to-have cleanup; current system works fine

### Key Technical Decisions
- `dev.mokuri.art` requires Vercel auth — intentional, keeps dev private
- SW disabled on dev for fresh content every reload
- Production ignores `mokuri-dev-styles` localStorage even if present
- Version kept in sync: MOKURI_VERSION in index.html + CACHE_NAME in sw.js

---

## Previous: Workshop Performance

### Problem

Opening the Workshop modal blocks the UI for a noticeable duration with 28+ saved compositions. The modal doesn't appear until ALL work is done — users see a frozen screen.

### Root causes (verified by code study)

1. **`openWorkshop()` calls `buildWorkshopUI()` before showing the modal** (line 6370). The `.visible` class is only added AFTER all synchronous and async work completes. The user sees nothing during computation.

2. **`buildWorkshopUI()` does a full teardown+rebuild on every open:**
   - Rebuilds paper chips (cheap)
   - Rebuilds 8 curated preset cards calling `generateThumbnailSvg(preset)` each time (expensive — 64 total elements, each requiring path resolution via `getElementVisiblePaths`)
   - Awaits `getGallery()` — IndexedDB read of 28 full composition objects
   - Builds 28 recent card DOMs with `thumbDiv.innerHTML = entry.thumbnail` — each stored thumbnail is a large SVG string (potentially 10-100KB) that the browser must parse into DOM nodes

3. **The combination** is ~36 synchronous `innerHTML` SVG parses (8 preset + 28 recent) plus the computation cost of `generateThumbnailSvg` for the 8 presets, all blocking the main thread before the modal is even visible.

4. **Paper chip already fixed** in commit `1f721dc` — just toggles CSS class, doesn't call `buildWorkshopUI()`. This is correct. If user still sees a pause on chip click, it may be a different issue (investigating needed).

### Design principles

- The Workshop DOM should persist between open/close — don't teardown+rebuild on every open
- Thumbnail SVG strings should NOT be parsed into DOM synchronously for all cards at once
- The modal must become visible immediately; content fills in after
- Scale target: 50 compositions without degradation
- In-memory caching only

### Workstream 1: Persistent Workshop DOM

**Problem**: `buildWorkshopUI()` destroys and rebuilds the entire Workshop DOM on every open. This is wasteful because:
- Paper chips never change within a session (only active state toggles)
- Curated preset cards never change within a session
- Recent cards only change when compositions are saved/deleted

**Change**: 
- Build starters (paper chips + presets) on first open only. Cache the DOM — don't rebuild.
- For recents: maintain a generation counter. Only rebuild if gallery has changed since last build (compare count or updatedAt of newest entry).
- On open: show modal immediately, update active highlight and relative timestamps, skip full rebuild if data hasn't changed.

**How to detect change**: Store `_workshopLastBuildTime`. On open, compare against the latest `updatedAt` in gallery. If no newer save exists, skip rebuild — just update active card highlight and timestamps.

### Workstream 2: Deferred thumbnail DOM insertion

**Problem**: Setting `.innerHTML` with large SVG strings is expensive DOM work. Doing it 28+ times synchronously blocks the thread.

**Change**: 
- On build, create card elements with a lightweight placeholder SVG (paper-colored rect).
- Store the thumbnail string as a property on the element (NOT as innerHTML, NOT as a data attribute).
- Use `requestAnimationFrame` to progressively swap placeholders for real thumbnails, one per frame. 28 frames ≈ 470ms at 60fps — imperceptible to the user since the cards are already visible with placeholders.

**Why not `data-thumbHtml`**: Storing 50-100KB strings in DOM data attributes is wasteful and causes the DOM to bloat. Use a JS-side Map or closure-captured reference instead.

### Workstream 3: Cache curated preset SVGs

**Problem**: 8 `generateThumbnailSvg(preset)` calls happen on every Workshop build. These are pure functions over static data — they never change within a session.

**Change**: Compute once on first build, store in a module-level array. On subsequent builds (if they happen due to import/delete), reuse cached strings.

### Workstream 4: Element definition lookup Map

**Problem**: `MOKURI_ELEMENTS.find(d => d.id === X)` is O(n) with ~300 elements. Called per-element in `generateThumbnailSvg` and throughout the app (20 call sites).

**Change**: Build `Map<id, def>` at startup. Replace all `.find()` calls with O(1) lookups. Rebuild map when elements are added dynamically.

### Workstream 5: Version display fix

**Problem**: Version derived from cache API key — unreliable on `file://` and racy in general.

**Change**: Hardcode `const MOKURI_VERSION = '0.91'` in index.html. Keep sw.js CACHE_NAME in sync by convention. Remove the async `initVersionDisplay()` function.

### Implementation order

1. **5** (Version fix) — trivial, independent
2. **4** (Element Map) — foundational for performance of everything else
3. **1** (Persistent Workshop DOM) — biggest structural fix
4. **3** (Cache preset SVGs) — needed by Workstream 1 for first build
5. **2** (Deferred thumbnail insertion) — smooths out the first-build cost

### Risks and mitigations

| Risk | Mitigation |
|------|-----------|
| Stale recents after background autoSave | Generation counter check on open; force rebuild if newer |
| Stale active highlight | Always update active class on open (cheap DOM scan) |
| Stale relative timestamps ("3m ago") | Update timestamp text on each open (cheap) |
| Memory from cached SVG strings | Bounded: 8 preset strings + 50 recent thumbnail strings already exist in IndexedDB entries. No net new storage. |
| Progressive fill visible as "pop-in" | Placeholder is same size/shape, so layout doesn't shift. Visual pop-in at 60fps is barely noticeable. |

---

## Previous: Integrate png2svg Into Element Forge

### Problem

The current workflow for getting AI-generated PNGs into Mokuri requires 3 separate tools:
1. `generate_elements.py` → produces PNGs
2. `png2svg.html` → converts PNG to SVG (adjust colors, noise, smooth)
3. `element-forge.html` → imports SVG, assigns zones/levels, exports JS

Steps 2 and 3 require manual file save/copy between tools. The png2svg conversion produces excellent results — the tool itself is great — but the handoff friction slows the workflow.

### Solution

Integrate png2svg directly into the forge as a modal experience. When importing a PNG file, open a modal with the png2svg controls and live preview. After tuning, "Import to Forge" generates an in-memory SVG string and feeds it directly into the existing `parseSvgPaths()` → `clusterSvgColors()` → `buildStateFromSvgZones()` pipeline.

**Simultaneously**: Remove the old trace infrastructure (ImageTracer, Potrace toggle, mono thresholds, trace sliders) and the Reference Overlay section. Expand the library grid to show 3×3 thumbnails with vertical scroll.

---

## Plan

### Phase 1: Unified Import & Remove Old Trace

**1A. Unified file picker**
- Change the Import section to a single file picker that accepts both `.svg` and `.png/.jpg`
- File type detection: if SVG → existing `loadSvgFile()` path; if PNG/JPG → open png2svg modal
- Also support drag-drop onto the import area (replaces old trace drop zone)
- Remove the "or trace image" divider, drop zone, trace preview, and all trace controls HTML (lines ~803-885)
- Remove the Reference Overlay section (lines ~889-896)

**1B. Remove old trace JS**
- Remove `loadTraceImage()` function and all callers
- Remove ImageTracer/Potrace trace engine code, mono threshold pipeline
- Remove trace-related STATE properties: `traceImageData`, `traceImageEl`, `traceRawPaths`, `hasChromaKey`, `chromaMaskData`, `alphaData`, `bgLab`, `quantizedMap`, `clusters`, `traceEngine`
- Remove `refImageSrc`, `refOpacity` state and the `loadRefImage()` function
- Remove event listeners for trace controls, ref-opacity slider
- Remove vendored `potrace-lib.js` script tag (the png2svg modal will use `esm-potrace-wasm` from CDN instead)
- Keep `btn-ref-url` (Paste URL) adapted for the new unified import or remove if superseded

**1C. Expand library grid**
- Change `.library-grid` CSS from `flex-wrap` to a proper 3-column CSS grid: `grid-template-columns: repeat(3, 1fr)`
- Set `max-height` for ~3 visible rows with `overflow-y: auto` for scrolling
- Adjust thumbnail size to fit 3-across in the ~220px panel width (~64px each, already close)

### Phase 2: PNG→SVG Modal

**2A. Modal HTML/CSS**
- Full-viewport modal overlay with centered content card (~800px wide)
- Left side: source PNG preview (scaled to fit)
- Right side: SVG preview (live-updating)
- Bottom: control bar with sliders
- "Import to Forge" primary button + "Cancel" secondary

**2B. Controls (from png2svg.html)**
Port all png2svg controls into the modal:
| Control | Range | Default | Notes |
|---------|-------|---------|-------|
| Colors | 2-8 | 5 | k-means cluster count |
| Noise | 0-50 | 4 | Potrace turdsize |
| Smooth | 1-20 | 4 | Potrace opttolerance (×0.1) |
| BG Color | color picker | #00ff00 | Background color to exclude |
| Green BG | 0-80 | 30 | Green dominance threshold |
| Posterize | 0-8 | 0 | Discrete levels per channel |

**2C. Pipeline logic**
Port the core pipeline from png2svg.html (lines 133-274):
- `posterize()`, `quantize()`, `assignPixels()`, `createMask()`, `parsePotraceSvg()` — pure functions, copy directly
- `processImage()` adapted to work in-modal: update previews, store last SVG string
- Load `esm-potrace-wasm` CDN module — needs dynamic import since forge is not a module
  - Option A: Add `<script type="module">` block that exposes `init`/`potrace` on `window`
  - Option B: Use dynamic `import()` in an inline module script
- Auto-process on file load (same as png2svg.html behavior)
- Re-process on any slider change (debounced)

**2D. "Import to Forge" action**
- Takes the in-memory SVG string from the modal
- Parses it with `parseSvgPaths()` (existing forge function)
- Runs `clusterSvgColors()` → `buildStateFromSvgZones()` → `refreshAfterImport()`
- Closes the modal
- Same end state as importing an SVG file — zones, silhouette, paths all populated

### Phase 3: Polish & Commit

- Test with generated PNGs from kacho and moribana packs
- Test SVG direct import still works (regression check)
- Verify library expansion looks good with many elements
- Update `forge-improvement-plan.md` with Phase 5
- Bump version, commit, push

---

## Code Locations

| What | Where | Lines |
|------|-------|-------|
| Import section HTML | element-forge.html | 793-896 |
| Trace controls HTML | element-forge.html | 824-885 |
| Reference Overlay HTML | element-forge.html | 889-896 |
| loadTraceImage() | element-forge.html | ~2049 |
| loadRefImage() | element-forge.html | ~4216 |
| Ref opacity listener | element-forge.html | ~5168 |
| Library grid CSS | element-forge.html | 353-358 |
| Library grid HTML | element-forge.html | 773 |
| renderLibraryPanel() | element-forge.html | 1521 |
| parseSvgPaths() | element-forge.html | ~3718 |
| clusterSvgColors() | element-forge.html | (find) |
| buildStateFromSvgZones() | element-forge.html | ~3977 |
| loadSvgFile() | element-forge.html | ~4046 |
| potrace-lib.js script | element-forge.html | 1141 |
| png2svg.html (source) | dev/png2svg.html | 1-277 |

---

## Open Questions (Resolved)

- ✅ Reference Overlay: **Remove** — png2svg modal replaces that validation step
- ✅ Vendored potrace-lib.js: **Remove** — esm-potrace-wasm from CDN replaces it
- ✅ Paste URL button: **Keep** — adapt for loading PNG from URL into the modal
- ✅ Library layout: **3×3 grid** with vertical scroll for overflow
