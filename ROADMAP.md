# Mokuri — Roadmap

## Completed: Quality & Creativity Improvements (Phases 1–5)

### Phase 1 — Background & Atmosphere ✅
Added sky (6 types: dawn, day, dusk, night, overcast), ground (6 types: earth, grass, snow, sand, water), horizon slider (20–85%), and 0–3 mist bands. Organic wobble edges, not hard lines. Renders in both workspace and print output. Biggest single impact — compositions went from floating objects on blank paper to scenes with depth and mood.

### Phase 2 — Element Library Expansion ✅
Added `scene-elements.js` with 11 new elements: bamboo grove, rock formation, temple roof, distant village, stone path, wooden bridge, rain curtain, snowfall, cloud wisp, maple branch, iris cluster. Total library grew from ~25 to ~36 elements across 4 files.

### Phase 3 — Procedural Variation ✅
Each element instance gets a `variationSeed` (mulberry32 PRNG) that subtly perturbs SVG paths, with amount scaling by carve level. Two copies of the same element now look slightly different — kills the digital copy-paste feel.

### Phase 4 — Scene Presets ✅
6 curated starting compositions accessible from the file menu: Mountain Dawn, Garden Pond, Ocean Night, Snow Village, Bamboo Forest, Autumn Valley. Each sets palette, atmosphere, paper type, and places elements with intentional carve levels and scales.

### Phase 5 — Ink Absorption ✅
Ink absorption variation in print engine post-processing — subtle per-region opacity variation so large inked areas don't look perfectly uniform, mimicking how paper absorbs ink unevenly.

---

### Phase 6 — Carving Experience ✅
Four features deepening the carving workflow:
- **Carve Focus Mode**: F key or Focus button zooms smoothly into a selected element with floating toolbar. Dimmed non-focused elements. Escape exits. Smooth viewBox animation.
- **Carve Pattern Fills**: 6 patterns (crosshatch, woodgrain, diagonal, stipple, wave) replace flat paper reveals on carved areas. Per-element `el.carvePattern`, renders in both workspace and print.
- **Background Carving**: Paper background is now carveable. Click empty space in carve mode to carve the paper itself. Strokes render between atmosphere and elements.
- **Hanko Stamps**: 6 pre-made seal shapes (circle, square, gourd, oval, diamond, cloud) + custom initials generator (1–3 characters → procedural brush-stroke seal). Hanko elements get reduced misregistration in print.

### Phase 7 — Carve Tool Naturalness ✅
Three tiers of pen input and rendering improvements:
- **Input smoothing**: EMA filter on position/pressure/tilt, coalesced pointer events for full digitizer resolution (~240Hz on Surface Pen).
- **Catmull-Rom curves**: Replaced polyline rendering (M L L L) with smooth cubic Bezier curves through all stroke points.
- **Variable-width pressure ribbons**: Per-point pressure maps to ribbon width via filled path outlines (not constant-width strokes). Entry/exit taper, organic noise.
- **Tilt-based gouge asymmetry**: Pen tilt shifts ribbon half-widths for calligraphic variation (V-gouge: 0.5, U-gouge: 0.35).
- **Pressure curve presets**: Soft/Medium/Firm configurable response curves in Carving Workbench.
- **Print fidelity**: Fiber ghosts in shallow cuts, ink edge pooling on deep cuts, pressure-dependent edge noise, tilt feathering on shallow wall side.

### Phase 8 — Paper Type Expansion ✅
Three new papers added (total: 6):
- **Gampi** (雁皮) — ultra-smooth, cool-toned, luminous. Cleanest prints.
- **Unryu** (雲龍) — dramatic long sweeping fibers via quadratic curves.
- **Kakishibu** (柿渋) — persimmon-tanned warm brown. Unique darker aesthetic.
Paper selector updated to 3-column grid. Print engine now uses actual paper base color for carve grooves (not hardcoded).

---

### Phase 10 — Interaction Polish ✅
- **Resize cursor fix**: Directional arrow cursor now stays visible throughout resize drag (previously reverted to crosshair mid-drag).
- **Anchor-based resize**: Opposite corner/edge stays pinned during resize for true 1:1 pointer-to-handle tracking. Rotation-aware — projects pointer deltas into element's local coordinate frame.
- **Move dead zone**: 6px screen-pixel threshold before element move commits, preventing accidental displacement during select/tap with pen and touch.
- **Multi-selection**: Ctrl/Cmd+click for additive selection. Group operations: move, delete, flip, duplicate, lock/unlock, layer reorder all work on full selection set. Ctrl+A selects all. Per-element dashed bounding boxes in multi-select mode. Carve/ink workbenches show "N elements selected" message; carve focus requires single selection.

### Phase 10.5 — UI Refinement & Authentic Print Process ✅
- **Kanji toolbar icons**: Replaced colorful emoji with muted kanji characters — 景 Compose, 彫 Carve, 墨 Ink, 摺 Make Print, 帖 Gallery — each in a distinct earth-tone color for visual association (ochre, wood, indigo, brick, sage).
- **About/Makimono refresh**: Inline kanji+label layout, colored step names, accurate feature descriptions reflecting full app capabilities (10 palettes, 6 papers, 3 gouges, carve patterns, hanko seals, atmosphere, scene presets).
- **Baren burnishing animation**: Replaced Western roller with authentic circular baren (馬連) — bamboo-sheath radial gradient with conic coil pattern, sweeping arcs with circular sub-motions, alternating direction per pass. Three synchronized sound moments: paper lay (thud + rustle), baren friction (rhythmic bandpass noise), paper peel (noise sweep).
- **Paper texture in animation**: Animation sheet generates canvas-based paper texture matching the print engine's `drawPaperTexture` — fiber bundles, fine fibers, warm patches, and Unryu's long dramatic fibers all visible during the paper lay-down.
- **Baren passes** (renamed from "Impressions"): Multi-pass offset reduced from ±1.2px to ±0.3px, opacity retuned (0.92/0.35) — richer ink depth without blur. UI label updated to "Baren Passes."
- **Print studio no light dismiss**: Requires explicit close (P key, Escape, Back to Edit, or switching workbench) — prevents accidental print loss.

---

## Phase 11 — The Woodblock (Planned)

Two interconnected areas deepening the physical material metaphor and expanding carving as a creative tool.

### 11A: Pattern Carving — From Decoration to Tone

Current carve patterns (crosshatch, woodgrain, diagonal, stipple, wave) are all-or-nothing per element. In real mokuhanga, pattern carving is the primary tool for creating **tonal range** — the density of carved lines determines how much ink transfers, giving everything from solid black to barely-there whisper tones. This is the missing expressive dimension.

#### Per-Zone Patterns
Apply different patterns to different color zones within an element. A koi's body might get woodgrain while its fins get stipple. This leverages the existing zone system — each zone in `el.colorOverrides` would gain an optional `pattern` and `patternDensity` field. The Inking Workbench zone editor would add pattern controls alongside the existing color picker and bokashi direction.

#### Pattern Density & Scale
A density slider (sparse → dense) controls the tonal value. At 20% density, crosshatch lines are far apart — the area prints mostly as paper. At 80%, it's nearly solid ink. This is the single most important control — it turns pattern carving from a texture effect into a tonal tool. Scale controls the physical size of the pattern repeat. Rotation controls the angle of directional patterns.

#### Pattern Library Expansion
Expand beyond the current 6 patterns with traditional mokuhanga textures:
- **Parallel lines** (single-direction hatch — the most basic tonal tool)
- **Concentric arcs** (used for water, sky gradation)
- **Cloud swirls** (traditional cloud/mist rendering)
- **Rain dots** (scattered dot pattern for atmospheric effects)
- **Grain following** (pattern lines that follow the element's form curves)

Each pattern should be parameterized (density, scale, rotation) rather than fixed, making the library combinatorially rich.

#### Freehand Pattern Regions (Future)
A pattern brush tool that paints pattern fill into drawn regions, independent of element zones. This is the most expressive option — the artist draws where tone should be — but also the most complex to implement. Consider as a 11A+ stretch goal after per-zone patterns prove out.

### 11B: The Wood Block Experience

The workspace should feel like working with a physical block of cherry wood, not arranging shapes on paper. In compose and carve modes, the surface is a warm wood block with subtle grain texture. In ink mode, it reverts to paper (the "proof pull" preview). The transition is instant.

#### 11B-1: Wood Block Surface
- **Wood surface color** (`WOOD_SURFACE`): Mid wood tone (~`#7a6955`) as base fill for the workspace in compose/carve modes, replacing the paper-type base color.
- **SVG wood grain pattern**: `<pattern id="wood-grain-surface">` in workspace defs — large tile (~80×80), 3–4 gentle horizontal curves, low opacity (0.08–0.12). Subtle and organic — barely visible grain, emphasis on warm brown color rather than pronounced lines.
- **Wood texture filter**: `<filter id="wood-texture">` alongside existing `paper-texture` — elongated feTurbulence (horizontal bias for grain direction), warm brown feDiffuseLighting, multiply composite.
- **Surface mode switcher**: `updateWorkspaceSurface()` function called from `setViewMode()` and `rerenderAll()`. In non-ink mode: paper rect fill → `WOOD_SURFACE`, filter → `wood-texture`, grain overlay on. In ink mode: restore paper-type base color + `paper-texture` filter.
- **Atmosphere gating**: `renderAtmosphere()` only renders in ink mode. In compose/carve mode, the atmo layer is cleared — you're looking at the wood block, not the scene. Sky/ground/mist appear in ink mode as part of the proof preview.

#### 11B-2: Carved Recess Treatment
- **Recess tones** (`WOOD_RECESS_TONES`): 5 tones 8–12% lighter than `WOOD_SURFACE` — the appearance of fresh-cut wood below the surface patina. Used in `renderElementSvg()` carve-mode branch instead of `WOOD_TONES`, creating subtle depth differentiation between block surface and element recesses.
- **Carved detail**: Existing behavior (PAPER_COLOR fills for carved areas, CARVED_STROKE outlines) reads well against the lighter recess tones — no changes needed.
- **Freehand carve strokes**: Already render as PAPER_COLOR / CARVED_STROKE — naturally read as cuts through wood into paper beneath.

#### View Mode Visual Language
- **Compose mode**: Warm wood block surface with subtle grain. Placed elements appear as lighter recesses in the wood. No atmosphere.
- **Carve mode**: Same wood surface. Carved areas within elements reveal paper color. Freehand carve strokes cut visible grooves. The carve level pips control material removal.
- **Ink mode**: Paper surface (paper-type base color). Atmosphere renders (sky/ground/mist). Elements show palette colors. Carved recesses show paper through ink. This is the "proof pull" preview — what the print will look like.

#### Future (Deferred)
- **Border & corner elements** (11B-3): Corner ornaments, edge repeaters as a new element category with edge-snapping behavior.
- **Frame presets** (11B-4): Pre-composed corner+edge combinations for one-click decorative borders.

### Implementation Sequence

**11A-1**: Per-zone patterns + density slider (Inking Workbench zone editor) ✅
**11A-2**: Pattern scale and rotation controls ✅
**11A-3**: Expanded pattern library (parallel lines, arcs, cloud swirls, rain dots) — deferred
**11B-1**: Wood block workspace surface (grain texture, wood tones for background)
**11B-2**: Carved recess visual treatment for placed elements in compose/carve modes

11A and 11B can proceed in parallel — patterns are about element rendering, woodblock is about workspace chrome.

---

## Future Work

### Element Fidelity
- **Hand-crafted SVG replacements** — Current elements are procedural. Hand-drawn SVGs with hatching, texture lines, and form-following detail would dramatically raise visual quality. This is the single biggest remaining quality gap vs. what AI image generators produce.

### Composition & Creativity
- **Composition guides** — Rule-of-thirds, golden ratio, and horizon-line overlays to help users compose intentional scenes.
- **More scene presets** — Seasonal themes, time-of-day variations, genre-specific starters (seascape, garden, urban, spiritual).

### Platform & Polish
- **Touch gestures** — Pinch-to-zoom, two-finger pan for tablet use.
- **Responsive layout** — Panels adapt for desktop (side panel) vs tablet (bottom sheet) vs phone (modal panels).
- **Keyboard shortcuts expansion** — More shortcuts for power users.

### Print Engine
- **Advanced bokashi** — Multi-directional gradients, radial fades, more nuanced ink distribution.
- **Registration marks** — Visual guides showing block alignment for multi-color printing authenticity.

---

## Phase 12 — PWA Quality & Reliability (Planned)

Architecture assessment identified gaps in offline support, error handling, and data safety. Organized by priority.

### 12-P0: Reliability Foundations

#### Service Worker & Offline Support
No service worker exists — the app is installable (manifest valid, icons present) but not offline-capable. Every load fetches from the network; a cache-first SW would enable true offline use and dramatically improve cold starts.

- **Cache-first service worker** (`sw.js`): Cache app shell (index.html, print-engine.js, audio-engine.js, all element/gallery JS, manifest, icons) on install. Serve from cache, update in background. Version-stamped cache name for clean upgrades.
- **Register SW from index.html**: `navigator.serviceWorker.register('./sw.js')` with feature detection.
- **Offline indicator**: Subtle status bar hint when network is unavailable.

#### Error Handling & Data Safety
13 try/catch blocks exist but critical paths are unprotected. localStorage quota overflow silently loses data. Print pipeline rejects uncaught.

- **Global error handler**: `window.onerror` + `window.onunhandledrejection` → log to console + show non-intrusive status bar message ("Something went wrong — your work is saved").
- **Quota error UI**: Replace silent catch in `saveGallery()` with user-visible warning ("Storage full — delete a composition to save"). Same for other localStorage writes.
- **Print pipeline protection**: Wrap `pullPrint()` async chain in try/catch. On failure, dismiss animation cleanly, show error in status bar, don't leave UI in broken state.
- **Canvas context guard**: Check `getContext('2d')` return value before proceeding in print engine.

### 12-P1: Data & Interaction

#### Export/Import Compositions
Gallery is localStorage-only (max 10, ~5MB ceiling). No way to back up, share, or transfer between devices.

- **Export**: Download composition as `.mokuri` file (JSON with metadata). Button in gallery panel.
- **Import**: File picker or drag-drop to load `.mokuri` files. Validate schema, merge into gallery.
- **Bulk export**: Download all compositions as a single `.mokuri` archive (JSON array).

#### Pinch-to-Zoom
Wheel zoom works but no multi-touch gesture. `touch-action: none` prevents browser zoom but doesn't replace it.

- **Two-finger pinch**: Track touch distance delta → map to zoom level change.
- **Two-finger pan**: Track touch midpoint delta → map to viewBox translation.
- **Gesture discrimination**: Distinguish pinch/pan from single-finger carve/move.

#### Memory Bounds
Carve stroke arrays are unbounded. Heavy sessions could grow to MB, bloating undo snapshots and localStorage.

- **Cap background carve strokes**: Warn user when approaching limit (e.g., 500 strokes). Oldest strokes merged or flattened.
- **Cap per-element strokes**: Similar limit with visual feedback.
- **Undo snapshot size awareness**: Track approximate undo stack memory; shed oldest entries if exceeding threshold.

#### Event Listener Hygiene
`setupInteraction()` registers listeners but never removes them. Modal/panel rebuilds may accumulate handlers.

- **Audit listener registration**: Ensure `setupInteraction()` is called exactly once.
- **Named handler references**: Store handler references for cleanup if needed.
- **Panel rebuild guards**: Ensure `buildCarveStudioUI()` etc. don't accumulate click handlers.

### 12-P2: Accessibility & Performance

#### Basic Accessibility
Zero ARIA attributes, no focus management, no `:focus-visible` styles. Icon buttons unlabeled.

- **ARIA labels**: Add `aria-label` to all icon buttons, `role` to interactive divs.
- **Focus management**: Tab order through toolbar → panels → workspace. `:focus-visible` styles.
- **Live regions**: Status bar as `aria-live="polite"` for screen reader announcements.

#### Targeted SVG Updates
`rerenderAll()` rebuilds the entire SVG tree on every change. Expensive for large compositions.

- **Dirty-element tracking**: Only re-render changed elements instead of full clear+rebuild.
- **Attribute-only updates**: For color/opacity changes, update attributes in place rather than recreating DOM nodes.

#### Print Engine Threading
All print work runs on main thread, blocking UI during the 500–2000ms render.

- **OffscreenCanvas + Worker**: Move post-processing (color muting, ink absorption, baren, wood grain, noise) to a Web Worker. SVG rasterization stays on main thread (requires DOM).

### 12-P3: Build & Optimization

#### Code Optimization
410KB total unminified JavaScript+HTML served directly. No code splitting.

- **Minification**: HTML/CSS/JS minification for production deploy (GitHub Actions workflow).
- **Lazy-load print engine**: Only load print-engine.js when user enters Print phase.
- **IndexedDB migration**: Move gallery storage from localStorage (~5MB limit) to IndexedDB (~unlimited) for compositions with heavy carving.
