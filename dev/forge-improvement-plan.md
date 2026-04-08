# Element Forge — Path Quality & Cleanup Improvements

## Problem

The ImageTracer pipeline in Element Forge produces reasonable color-separated traces from PNGs, but three issues prevent it from being a practical element creation workflow:

1. **Jaggy paths**: ImageTracer outputs polygonal line segments (L/M commands), not curves. The result looks pixelated rather than the organic, hand-carved quality Mokuri elements need.

2. **Artifact cleanup**: Small unwanted paths (outline residue, color bleed fragments) require manual removal. The forge has click-to-select and erase-tool-delete on the main canvas, but it's not discoverable, has no hover feedback, and the preview thumbnails don't support interaction.

3. **Cluttered UI**: The forge mixes manual-drawing controls with trace-workflow controls, making the interface confusing for the primary use case (PNG → trace → export).

## Approach

Three phases, each independently useful. Phase 0 declutters the UI. Phase 1 makes every trace look better automatically. Phase 2 makes artifact cleanup fast.

---

## Phase 0: UI Cleanup — Context-Aware Controls ✅

The forge has two workflows: **trace** (PNG → quantize → trace → export) and **manual** (freehand drawing). Most users will use trace. Show only relevant controls for the active workflow.

### 0A. Hide manual-only controls in trace mode

These controls are only useful for freehand drawing and should be hidden (or collapsed) when a trace image is loaded:

| Control | ID | Purpose |
|---|---|---|
| Stroke Width slider | `stroke-width` | Sets freehand stroke width |
| Curve Fidelity slider | `curve-fidelity` | Simplifies hand-drawn paths |
| Draw Stroke (S) button | `tool-stroke` | Freehand stroke tool |
| Draw Fill (F) button | `tool-fill` | Freehand fill tool |

**Implementation**: When `STATE.traceImageData` exists (image loaded), add a CSS class to the sidebar that hides these controls. When cleared, show them again. Keep Select and Erase tools visible — they're useful for post-trace cleanup.

### 0B. Group trace controls more clearly

Currently the trace controls (engine toggle, epsilon, turd, mono/color, quantize, thresholds) are interspersed with other UI. Consider:
- A clear "Trace Settings" group header
- Disable trace controls when no image is loaded
- Show the ImageTracer-specific controls only when ImageTracer engine is selected

### 0C. Inspector panel context

The Inspector's "Stroke Width" and "Curve Fidelity" are global drawing settings. The "Selected Path" inspector (type, zone, d string, apply/delete) is useful for both workflows. Consider:
- Always show the Selected Path inspector when a path is selected
- Only show Stroke Width / Curve Fidelity when in manual drawing mode

---

## Phase 1: Path Smoothing ✅

Convert ImageTracer's polygonal output into smooth Bézier curves using the forge's existing curve-fitting infrastructure.

### 1A. Post-trace smoothing pass

After ImageTracer paths are classified into Shape/Detail zones, apply smoothing to each path:

1. Parse the path `d` string into point sequences (one per M-delimited subpath)
2. Run RDP simplification (existing `rdpSimplify()`) with appropriate epsilon
3. Convert simplified polylines to quadratic Béziers via existing `polylineToQBezier()`
4. Rebuild the `d` string from smooth curves

Create a function `smoothTracedPath(d, epsilon)` and apply it to all Shape and Detail paths from ImageTracer. Block silhouette (from Potrace) already produces decent curves via `processTracePath()`.

**Key existing functions to reuse:**
- `rdpSimplify(points, epsilon)` — Ramer-Douglas-Peucker simplification (line ~1286)
- `polylineToQBezier(points)` — converts polyline to quadratic Bézier curves (line ~1312)
- `processTracePath(d, srcW, srcH, dstW, dstH, epsilon)` — scale + simplify (line ~1766)

### 1B. Smoothing control

Add a "Smoothing" slider to the trace controls (near existing epsilon slider):
- Range: 0 (no smoothing, raw polygons) to 10 (aggressive smoothing)
- Default: 5 (moderate — removes pixel stepping while preserving shape)
- Affects the epsilon passed to `smoothTracedPath()`
- Applied on trace — re-trace to see the effect

### 1C. ImageTracer parameter tuning

Review ImageTracer's native parameters that affect output quality:
- `ltres` (line threshold): currently 0.5 — lower values produce smoother native output
- `qtres` (quadratic threshold): currently 0.5 — same
- `pathomit`: currently 4 — minimum path size, helps filter tiny artifacts at source
- These interact with post-trace smoothing, so tune them together

---

## Phase 2: Artifact Cleanup UX ✅

Make it fast and intuitive to identify and remove unwanted paths from any carve level.

### 2A. Path hover highlight

When in select or erase mode, hovering over a path in the main canvas should:
- Highlight the path with a distinct outline (blue glow or dashed border)
- Show a small tooltip: zone name, type (fill/stroke), approximate size
- Uses the existing SVG path elements that already have pointer events (line ~3016-3030)

### 2B. Multi-select and bulk delete

Extend the existing single-path select/delete:
- Click to select a path (existing behavior — verify it works for traced paths)
- Shift+click to add/remove from selection
- Delete/Backspace removes all selected paths
- Visual indication of selected paths (highlight color or selection outline)

### 2C. Preview thumbnail click-to-locate

Click a path in the Block/Shape/Detail preview thumbnails to:
- Switch to that carve level
- Select/highlight the corresponding path in the main canvas
- Makes it easy to target specific artifacts visible in the small previews

Currently previews have no click handlers (line ~3432-3468). Would need to add pointer events to the SVG paths in `updatePreviews()`.

### 2D. "Clean" quick action

A button that removes paths below a configurable area threshold from the active level:
- Small area slider or input field
- "Remove Small Paths" button
- Preview count of paths that would be removed before confirming
- Quick way to strip tiny fragments without clicking each one
- Essentially user-controlled version of the automated filtering

---

## Phase 3: UX Layout Rework ✅

Reorganized the forge into a left-to-right **Import → Edit → Export** workflow.

### 3A. Left pane → Import only ✅
- Stripped to three sections: **ViewBox**, **Import** (SVG + image trace), **Reference Overlay**
- Element metadata (ID, Name, Category, Layer, Pack, Tags) moved to right pane

### 3B. Level Preview Bar above canvas ✅
- Horizontal row of 3 clickable SVG thumbnails (Block / Shape / Detail) above the canvas
- Replaces the old toolbar level tabs — clicking switches the active carve level
- Active level highlighted with accent border
- Preview viewBox syncs dynamically with element dimensions

### 3C. Toolbar cleanup ✅
- Removed level-tab buttons (replaced by preview bar)
- Removed old Import/Export buttons from toolbar (Import is in left pane, Export in right)
- Added compact 📥 Import button for importing existing Mokuri elements
- Kept tools (Select, Stroke, Fill, Erase) + Undo/Redo + Zoom

### 3D. Right pane → Element ✅
- Renamed from "Inspector" to "Element"
- Section order: **Color Zones** → **Stroke Width** → **Curve Fidelity** → **Path Inspector** → **Cleanup** (compact) → **Budget** (compact) → **Element Metadata** (collapsible) → **Export**
- Cleanup: button + slider on one line each (Remove Small + threshold, Clean Edges + margin)
- Budget: single-line inline readout (counts + consolidated + KB)
- Metadata: collapsible section, collapsed by default, contains ID, Name, Category, Layer, Pack, Tags
- Category, Layer, Pack, and Tags persisted to `localStorage` (`mokuri-forge-meta`) across sessions
- Export button: full-width primary button at bottom

---

## Phase 4: Zone-Level Assignment & Silhouette ✅

Zone-level assignment system for the SVG import workflow. Assign entire color zones to carve levels (Block/Shape/Detail) instead of manually dragging individual paths.

### 4A. Zone-level UI ✅
- Each zone gets a `level` property (0=Block, 1=Shape, 2=Detail), default 0
- Zone chips display a **B/S/D badge** — click the badge to cycle assignment
- Badge styling: color-coded pills (warm=Block, cool=Shape, violet=Detail)
- Canvas and previews update when zone levels change

### 4B. Silhouette auto-generation on SVG import ✅
- On SVG import, the largest fill path is detected **before** subpath splitting
- Preserved as a single path with multi-subpath d string intact (handles intentional holes like crane legs)
- Tagged with `fillRule: 'evenodd'` so holes render correctly regardless of winding direction
- Assigned to body zone, inserted first in Block level (renders behind everything)
- Visible in forge canvas with **dashed outline** for easy identification
- Selectable and deletable like any other path

### 4C. Zone-aware export ✅
- `consolidatePaths()` rewritten to be zone-level-aware when any zone has non-block level
- **Block**: silhouette (body zone, evenodd) + block-zone fills/strokes + body-rezoned fills from higher-level zones (ensures full coverage)
- **Shape**: fills + strokes from shape-assigned zones (real zone IDs)
- **Detail**: fills + strokes from detail-assigned zones (real zone IDs)
- Falls back to original behavior when no zones are assigned above block
- `formatElementJS()` emits `fillRule` property when present

### 4D. Renderer fillRule support ✅
- `renderElementSvg()` in index.html: respects `fillRule` on path data for both block and overlay fills
- `renderFills()` in print-engine.js: same, in SVG string templates
- Total: 4 lines of renderer changes — fully backward-compatible (existing elements have no fillRule)

### 4E. Multi-subpath splitting at import ✅
- `splitImportSubpaths()` splits multi-subpath d strings on SVG import
- Each subpath becomes independently editable/deletable in the forge
- Fixes transparent fill bug from png2svg (opposite winding + nonzero fill-rule)
- Silhouette path exempted from splitting to preserve intentional holes

---

## Completed Work Summary

All phases (0–4) are now implemented. The forge is a functional PNG → trace → cleanup → export pipeline with zone-level carve assignment.

### What works
- **Import**: SVG import, image drag-and-drop, URL paste, auto viewBox detection, chroma key detection
- **Trace**: ImageTracer (default) and Potrace engines, color segmentation (2–6 clusters), mono fallback, smoothing (exponential curve 0–50), semantic zone naming
- **Edit**: Select, draw stroke/fill, erase tools; multi-select (Shift+click, Ctrl+A); path hover highlight (blue glow); move paths between levels; zone reassignment; type/d-string editing in Inspector
- **Cleanup**: Remove Small Paths (area threshold up to 2000), Clean Edges (margin-aware border cleanup), bulk delete
- **Export**: Delta carve levels, path consolidation, clipboard copy with JS format
- **Layout**: Left-to-right Import → Edit → Export workflow, level preview bar, collapsible metadata with localStorage persistence

### Known limitations
- **Outline residue**: PNG outlines trace as darkest-zone paths hugging the silhouette. Dimension-based and erosion-based filtering both failed — the paths wrap around the element giving them large bounding boxes. Manual cleanup still needed.
- **Color matching edge cases**: ImageTracer sometimes matches feature colors to wrong clusters (e.g., eye outline to fin color instead of detail zone).
- **Silhouette detection heuristic**: Uses largest fill by bounding-box area — works well for png2svg output but may need manual adjustment for non-standard SVG sources.

## Notes

- All changes are in `dev/element-forge.html` only — no impact on the main Mokuri app
- The existing `polylineToQBezier()` is proven (used for manual carve strokes). Reusing it for traced paths is low-risk.
- Auto-stroke classification was removed (caused unfilled closed loops) — all traced paths are fills by default, user toggles to stroke via Inspector
- Multi-subpath splitting post-trace prevents winding conflicts under nonzero fill-rule
- Test Collection pack (`assets/test-elements.js` + `assets/test-pack.js`) provides a sandbox for forge-exported elements
