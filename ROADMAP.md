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

### Phase 11A: Pattern Carving Enhancements ✅ (Partial — Core Complete)

Density and rotation controls, freehand pattern tool, and UX polish shipped. Per-zone patterns and library expansion deferred.

- **Pattern density slider**: Sparse→dense tonal control in Carving Workbench. Stored per-element in save data.
- **Pattern rotation**: 0°/45°/90° angle control for directional patterns. Persisted in localStorage.
- **Freehand pattern tool**: New "pattern" carve tool — paint pattern fills along brush strokes. Uses existing pressure/tilt pipeline with pattern fill instead of solid cut. Strokes store pattern, density, and rotation per-stroke.
- **Live swatch preview**: Pattern swatches in Carving Workbench reflect current density and rotation settings in real-time. ViewBox-based scale matching (SWATCH_VB=35 in SWATCH_CSS=52) so swatch preview matches actual carved appearance.
- **Wood-tone swatch backgrounds**: Pattern swatches use wood tones instead of black for authentic preview.

Remaining 11A items (deferred):
- Per-zone patterns (Inking Workbench zone editor)
- Expanded pattern library (parallel lines, arcs, cloud swirls, rain dots)

### Phase 12-P0: PWA Reliability Foundations ✅

- **Service worker** (`sw.js`): Cache-first with background update. Caches full app shell. Version-stamped cache name (`mokuri-v5`).
- **Global error handler**: `window.onerror` + `window.onunhandledrejection` → status bar message.
- **Storage quota UI**: Warning when localStorage is full.
- **Print pipeline protection**: try/catch around `pullPrint()` with clean animation dismissal on failure.
- **Canvas context guard**: Null-check on `getContext('2d')` in print engine.

### Mobile & Small-Screen Improvements ✅

Full compose→carve→ink→print workflow now usable on phone (landscape) and tablets.

- **Zoom-compensated handles**: Handle sizes multiply by viewBox-to-viewport ratio (`svgPerPx`), maintaining constant screen size at any zoom. Touch devices (pointer: coarse) get 2× base size. `vector-effect: non-scaling-stroke` on selection UI.
- **Elements panel toggle**: 🏞️ Compose button toggles Elements panel open/closed (matching workbench pattern). Auto-closes on narrow screens (<850px) when a workbench opens. CSS width + opacity transition.
- **Pinch-to-zoom**: Two-finger gesture on workspace — zoom centered on pinch midpoint with simultaneous pan. Cancels in-progress carve strokes. Pointer events for cross-device support. Includes pointercancel handling.
- **Mobile print fix**: Deckle edge complex polygon clip (~600 vertices) + multiply composite caused blank canvas on mobile Chromium. Refactored to simple rect clips during rendering with final cosmetic deckle mask via evenodd clip. Also added `willReadFrequently: true` on presentation canvas and try/catch around post-processing.
- **Print preview zoom**: Removed fit-to-workspace clamping in `positionPrintCanvas()`. Canvas tracks paper rect directly, allowing zoom-in for proofing before PNG save.

## Phase 11B — The Wood Block Experience ✅

The workspace now feels like working with a physical block of cherry wood. In compose and carve modes, the surface is a warm wood block with subtle grain texture. In ink mode, it reverts to paper (the "proof pull" preview). The transition is instant.

#### 11B-1: Wood Block Surface ✅
- **Wood surface color** (`WOOD_SURFACE`): Mid wood tone (`#7a6955`) as base fill for the workspace in compose/carve modes.
- **SVG wood grain pattern**: `<pattern id="wood-grain-surface">` — large tile (120×120), 6 horizontal curves at varying opacity for subtle organic grain.
- **Wood texture filter**: `<filter id="wood-texture">` — elongated feTurbulence (horizontal bias `0.008 0.05`, 3 octaves) for warm brown surface.
- **Surface mode switcher**: `updateWorkspaceSurface()` toggles paper fill/filter/grain between wood and paper based on viewMode.
- **Atmosphere gating**: `renderAtmosphere()` only renders in ink mode — compose/carve show the wood block, not the scene.

#### 11B-2: Carved Recess Treatment ✅
- **Recess tones** (`WOOD_RECESS_TONES`): 5 tones 8–12% lighter than surface — fresh-cut wood appearance in element recesses.
- **Carved detail**: PAPER_COLOR fills for carved areas read naturally as cuts through wood into paper beneath.

#### 11B Cursor & Interaction Fixes ✅
- **Tool cursor scoped to paper**: Carve/erase tool cursors (gouge shapes, eraser) only show when hovering over the paper canvas. Crosshair cursor outside paper. `.over-paper` class toggled in pointermove via SVG coordinate bounds check. Carve ring indicator also hidden off-paper.
- **Pan from outside paper**: Clicking empty space outside the paper in carve/erase mode now starts a pan drag (previously did nothing). Background carving/erasing still works within paper bounds.
- **Print studio cursor cleanup**: `openPrintStudio()` calls `setMode('select')` before switching view mode, clearing carve cursor when entering print.
- **Post-print view restore**: `closePrintStudio()` properly restores wood block view mode when returning from print.
- **Compose button fix**: Compose button now reliably closes Print studio on all screen sizes. Previously gated on `composePanelOpen` state, which was false on narrow screens where the compose panel auto-closes. `closePrintStudio()` accepts `restorePanel=false` to suppress panel restoration when switching directly to compose.

### About Screen Redesign ✅

Landscape two-column layout replacing the vertical scrolling makimono.

- **Vermillion hanko seal**: Single 墨 kanji in `#c23b22` square seal, matching the favicon brand mark. Consistent single-character brand identity across favicon, toolbar, about screen, and splash.
- **Two-column layout**: Left column: seal + MOKURI title + philosophy text. Right column: 2×2 grid of step cards (景 Compose, 彫 Carve, 墨 Ink, 摺 Make Print). No scroll needed on desktop/tablet.
- **Toolbar brand**: Red 墨 kanji + "Mokuri Studio" in toolbar, clickable to open About. On narrow screens collapses to just the red kanji. Replaced gallery About link.
- **Responsive**: Compact two-column at ≤500px height (landscape phone), single column with scroll at ≤700px width (portrait phone), philosophy hidden at ≤400px height (very small landscape).

### Element Library Quality & Expansion ✅

Systematic quality pass across the element library guided by a new Element Design Guide (`ELEMENT-GUIDE.md`), plus two new element categories.

#### Element Design Guide ✅
Established a reusable design spec (`docs/ELEMENT-GUIDE.md`) codifying the Mokuri element aesthetic: block→shape→detail carve level accumulation, fill-only block level, organic hand-drawn geometry, zone-based coloring, and woodblock-appropriate detail density. Used as the reference for all subsequent element work.

#### Element Fixes & Redesigns ✅
- **Lantern fixes**: Kasuga Grand Lantern, Yukimi Lantern, Oribe Lantern — fixed carve level accumulation so block⊂shape⊂detail, split single-blob fills into proper zones.
- **Great Peak fix**: Corrected inconsistent snow cap geometry between levels, carried forward ridge strokes.
- **Flora redesigns**: Cherry Blossom, Pine Bough, Maple Branch redesigned with organic hand-drawn aesthetic following the Element Design Guide — richer detail, proper hatching, form-following texture lines.
- **Wooden Bridge redesign**: Rebuilt as arched soribashi (4→7→11 paths), fill-only block, proper level accumulation. Served as the test case for the Element Design Guide.

#### New Landscape & Flora Elements ✅
Rolling Hills, Farmland, Tranquil Pond, Waterfall, Chrysanthemum, Susuki Grass, Bare Winter Branch — organic silhouettes with woodblock-appropriate detail at each carve level.

#### New Objects ✅
Fishing Boat — hull, cabin, and sail zones with plank detail at level 2.

#### Human Figures Category ✅
New `figures-elements.js` with 8 staffage figures in the ukiyo-e tradition: Traveler, Umbrella Figure, Fisherman, Field Worker, Two Travelers, Seated Figure, Boatman, Woman with Bundle. Small-scale figures designed as compositional accents — simplified forms, expressive silhouettes, 2–3 color zones each.

#### Built Structures ✅
Pagoda, Tea House, Bamboo Fence, Farmhouse added to `scene-elements.js`. Multi-zone architecture with structural detail (roof tiles, lattice screens, bamboo lashing, thatch texture) emerging at higher carve levels. Replaced the non-functional Temple Roof element approach with properly designed structures.

### Print Presentation ✅

Authentic print presentation features wrapping the existing print output — margins, edges, title, and edition numbering matching real woodblock print display conventions.

- **Paper margins**: 4 presets (None, Narrow, Standard, Wide) with asymmetric bottom margin larger than sides and top, matching traditional print mounting. Two-canvas wrapper architecture — existing print canvas composited onto a larger presentation canvas.
- **Organic print edge**: Semi-transparent paper-color overlay at the print boundary, softening the transition between inked area and paper margin. Painted over the composite for authentic edge bleed.
- **Deckle edge**: Subtle irregular paper boundary with torn-edge path and wispy fiber decorations. Configurable on/off.
- **Embossed title (karazuri)**: Title text rendered in paper-base color with canvas shadow API — dark shadow lower-right for depth, light highlight upper-left for raised edge. Pre-flipped for correct reading after the print engine's global mirror. Font scales proportionally to bottom margin height.
- **Edition numbering**: Pencil-style edition text (e.g., "1/25") below the title with matching emboss treatment. Smaller font, right-justified under the print edge.
- **Viewport fitting**: Presentation canvas scales to fit entirely within the workspace regardless of aspect ratio.
- **PNG export**: Save includes full presentation with margins. Filename uses composition name.

---

## Future Work

### Element Fidelity
- **Hand-crafted SVG refinement** — The Element Design Guide established conventions for organic, woodblock-appropriate geometry. Continued iteration on individual elements — especially older ones predating the guide — would further raise visual quality. Hatching density, form-following texture lines, and zone boundary refinement are the main opportunities.

### Composition & Creativity

#### Composition Guides (Planned)

Wire-line overlay showing paper boundaries and rule-of-thirds grid. Helps users compose intentional scenes and see composition edges even when elements extend beyond the paper.

**What renders:**
- 4 border lines at paper edges (x=0, x=paperW, y=0, y=paperH)
- 2 vertical third lines (x=paperW/3, x=2*paperW/3)
- 2 horizontal third lines (y=paperH/3, y=2*paperH/3)
- All 8 lines extend ~20 SVG units beyond paper corners ("wire lines" that overshoot, making borders easy to spot)

**Visual treatment — dual-stroke halo for universal contrast:**
- Inner line: `rgba(255, 255, 255, 0.5)` — white, semi-transparent (~1.5px)
- Outer halo: `rgba(0, 0, 0, 0.15)` — subtle dark edge (~3px behind inner)
- `vector-effect: non-scaling-stroke` — consistent line weight at any zoom
- `pointer-events: none` — never interferes with interaction
- Works against wood tones (carve), light paper (ink), dark atmosphere (night), bright atmosphere (day/snow)

**SVG layer placement:**
- New `#guide-layer` group between `#comp-layer` and `#selection-layer`
- Guides render over elements but under selection handles
- Rendered once in `renderGuides()`, called from `rerenderAll()` and `updateViewBox()` (if line weight needs zoom adjustment)

**Toggle control:**
- Keyboard: `G` key toggles guides on/off
- Toolbar button: in zoom group (right of ⊡ fit-to-view), icon is `⊞` (3×3 grid feel), with `.active` class when on
- STATE field: `guides: false` (off by default)
- Persisted in localStorage (`mokuri-guides`)

**Implementation:**
1. Add `STATE.guides` field + localStorage read at init
2. Add `#guide-layer` SVG group in workspace HTML
3. `renderGuides()` function — creates 8 lines (each as two `<line>` elements for halo effect), or clears group if guides off
4. Add toolbar button after `#btn-zoom-fit`, wire click handler
5. Add `G` keydown handler
6. Call `renderGuides()` from `rerenderAll()`

**Future extensions (not in scope now):**
- Golden ratio overlay option
- Horizon-line guide synced with atmosphere horizon slider
- Diagonal composition lines

- **More scene presets** — Seasonal themes, time-of-day variations, genre-specific starters (seascape, garden, urban, spiritual).
- **Border & corner elements** — Corner ornaments, edge repeaters as a new element category with edge-snapping behavior.
- **Frame presets** — Pre-composed corner+edge combinations for one-click decorative borders.

### Platform & Polish
- **Responsive layout** — Further phone refinements (bottom sheet panels, modal panels for very small screens).
- **Keyboard shortcuts expansion** — More shortcuts for power users.

### User Feedback Collection
Phased approach — start simple, layer on richer options as distribution expands.

**Phase A: Google Form link (immediate, pre-Capacitor)**
- Create a short Google Form (structured: what were you doing, what happened, satisfaction rating, free text).
- Add a 💬 "Send Feedback" button in the About/Makimono screen.
- Button opens the form URL in a new tab. Pre-fill app version and paper size via URL parameters.
- Free, zero dependencies, structured responses land in a Google Sheet.

**Phase B: In-app feedback modal (post-Capacitor)**
- Build a lightweight modal inside Mokuri: emoji rating (😐🙂😊), category chips (Bug / Idea / Question), free-text textarea.
- Submit via Formspree.io or Formsubmit.co — single `fetch()` POST, no backend needed. Free tier (~50 submissions/month).
- Queue submissions if offline; send when connectivity returns.
- Accessible from About screen and optionally from a subtle status bar icon.

**Phase C: App Store review prompts (Capacitor native builds only)**
- Use `@capacitor/app-review` to prompt for ratings at natural moments (after pulling a print, after saving a composition).
- Apple and Google handle review collection and display. Requires Phase 13 (Capacitor) to be complete.

### Print Engine
- **Advanced bokashi** — Multi-directional gradients, radial fades, more nuanced ink distribution.
- **Registration marks** — Visual guides showing block alignment for multi-color printing authenticity.
- **Seal placement** — Hanko seal stamp positioning on the presentation margin (deferred from Print Presentation).

---

## Phase 12 — PWA Quality & Reliability (Planned)

Architecture assessment identified gaps in offline support, error handling, and data safety. P0 complete; P1–P3 planned.

### 12-P0: Reliability Foundations ✅

See completed section above.

### 12-P1: Export/Import Compositions ✅

Single `.mokuri` JSON file format for both individual and bulk export/import.

- **File format**: `{ mokuri: 1, compositions: [...] }` — name, data, timestamps. Same format for single and bulk. IDs and thumbnails regenerated on import.
- **Export single**: Per-card ↓ download button in gallery. Downloads `{name}.mokuri`.
- **Export all**: "Export All" button in gallery toolbar. Downloads `mokuri-backup-{date}.mokuri`.
- **Import**: "Import" button in gallery toolbar. File picker (`.mokuri`/`.json`). Compositions added with fresh IDs and thumbnails. No gallery size limit enforcement on import. Validation checks mokuri:1 marker and element data.

### 12-P1: Marquee Selection & Group Resize ✅

- **Marquee selection**: Ctrl/Cmd+drag (mouse/pen) or long-press+drag (touch/pen) draws selection rectangle. Elements selected by center point. Additive with Ctrl/Cmd, replaces on touch.
- **Long-press feedback**: Animated progress ring (24 SVG units, 300ms, white) confirms activation on touch/pen.
- **Adaptive selection colors**: White boxes/rect in compose/carve modes (high contrast on wood tones), accent brown in ink mode.
- **Group resize**: Proportional corner-handle resize for multi-selected elements. Group AABB from rotated corners, locked elements excluded, undo/redo supported.

**Deferred (future consideration):**
- Group rotation (rotate all selected around group center)
- Batch ink settings for elements sharing the same definition or color zones

### 12-P1.5: IndexedDB Gallery Migration (Planned)

Gallery compositions stored in localStorage (~5MB browser limit). Heavy carving sessions with many strokes can approach this ceiling, risking silent data loss. Migration to IndexedDB removes the storage cap (~hundreds of MB+) and improves reliability on mobile where localStorage can be evicted under storage pressure.

**What moves to IndexedDB:**
- `mokuri-gallery` — array of composition objects (elements, carve strokes, atmosphere, materials). This is the only large data blob.
- `mokuri-active-id` — active composition pointer (small, but logically coupled to gallery).

**What stays in localStorage (small preferences, synchronous access fine):**
- `mokuri-pressure`, `mokuri-activePattern`, `mokuri-patternDensity`, `mokuri-patternRotation`
- `mokuri-visits` (FRE counter)
- `mokuri-audio` (audio prefs)

**Implementation plan:**

1. **IndexedDB abstraction layer** — `MokuriDB` object with async methods: `open()`, `loadGallery()`, `saveGallery(gallery)`, `getActiveId()`, `setActiveId(id)`. Uses a single object store (`gallery`) with a well-known key. Opens database lazily on first access; caches the `db` handle. All errors caught and surfaced via status bar message.

2. **Async conversion of gallery functions** — `loadGallery()` and `saveGallery()` become async, returning Promises. Callers updated:
   - `autoSave()` — fire-and-forget (no await), but catches and logs write failures
   - `autoLoad()` — already runs at startup; await before rendering
   - `switchToComposition()`, `deleteComposition()`, `renameComposition()` — await save
   - Gallery UI builders (`buildGalleryUI`) — await load
   - Export/import functions — await load/save

3. **One-time migration** — On first `open()`, check for existing `mokuri-gallery` in localStorage. If found, read it, write all compositions to IndexedDB, verify round-trip, then delete the localStorage key. Migration runs once and is invisible to the user.

4. **Storage persistence request** — Call `navigator.storage.persist()` on startup for installed PWA. Prevents iOS Safari / WebKit from evicting IndexedDB under storage pressure. Fails silently if denied (non-critical).

5. **Error handling & fallback** — If IndexedDB is unavailable (private browsing edge cases, broken browser state), fall back to localStorage with a console warning. Gallery functions detect which backend is active.

6. **Remove MAX_GALLERY_SIZE cap** — Currently 10 compositions. With IndexedDB's generous quota, raise or remove the limit.

**Risks & mitigations:**
- **Async ripple**: Contained to ~15 call sites in gallery-related code. No changes to rendering, interaction, or print engine.
- **iOS storage eviction**: Mitigated by `navigator.storage.persist()`. Installed PWAs almost always get persistent storage.
- **Migration data loss**: Verify round-trip read before deleting localStorage. Keep localStorage copy for one more session if verification fails.
- **Private browsing**: IndexedDB works but data is ephemeral — same as localStorage today, no regression.

**Cross-platform support:** IndexedDB is universally supported in all modern browsers (Chrome, Edge, Firefox, Safari 10+), all PWA webviews, and all platforms (Windows, macOS, iOS, Android). No compatibility concerns.

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

---

## Phase 13 — Native App Distribution via Capacitor (Planned)

Wrap Mokuri in Capacitor to publish on iOS App Store and Google Play while keeping the existing PWA and GitHub Pages deployment intact. Mokuri's zero-dependency, offline-first, pure browser architecture (SVG + Canvas + Web Audio) makes it an ideal Capacitor candidate — no native plugins required for core functionality.

### Why Capacitor

- **~95% code reuse** — Mokuri runs as-is inside a native WebView. No framework migration, no rewrite.
- **Eliminates PWA friction on iOS** — no "Add to Home Screen" dance, no Safari storage eviction, full-screen without address bar.
- **App Store presence** — discoverability, credibility, potential monetization path.
- **Additive** — PWA continues to work. Capacitor is an additional distribution channel, not a replacement.

### Prerequisites

Complete before starting Capacitor work:
- **IndexedDB migration (12-P1.5)** — eliminates localStorage 5MB ceiling. IndexedDB works reliably in Capacitor WebViews.
- **npm init** — Capacitor requires a `package.json`. Mokuri currently has none. This is a lightweight addition (no build step needed).

### Development Environment

All day-to-day development stays on Windows. Mac access is only needed for iOS signing setup.

- **Android**: Android Studio runs natively on Windows. Full local build/test/deploy cycle.
- **iOS**: Two options for building without owning a Mac:
  1. **GitHub Actions CI** (recommended) — `macos-latest` runner builds the `.ipa` on push. All development on Windows, CI produces signed artifacts. Free tier includes Mac runner minutes.
  2. **Cloud Mac rental** (one-time) — MacStadium, MacinCloud, or XcodeClub for initial provisioning profile and certificate setup (~1 hour). After that, CI handles ongoing builds.
- **macOS VM on Windows** — technically possible but violates Apple's EULA on non-Apple hardware. Not recommended.

### Implementation Steps

#### 13-1: Project Initialization
- `npm init` to create `package.json` (no dependencies beyond Capacitor)
- Install Capacitor: `@capacitor/core`, `@capacitor/cli`
- `npx cap init` — configure app name ("Mokuri"), app ID (`art.mokuri.app`), web directory (`.`)
- Add `capacitor.config.ts` with WebView preferences (no bounce, status bar style, background color)
- `.gitignore` additions: `node_modules/`, `android/`, `ios/` (native projects are generated, not committed)

#### 13-2: Android Build
- `npm install @capacitor/android && npx cap add android`
- `npx cap copy android && npx cap open android`
- Configure in Android Studio: app icon (existing `icon-512.png`), splash screen, permissions (none needed — Mokuri is offline-only)
- Test on emulator and physical device
- Build signed APK/AAB for Google Play

#### 13-3: iOS Build via CI
- `npm install @capacitor/ios && npx cap add ios`
- **One-time Mac setup** (cloud Mac rental, ~1 hour):
  - Apple Developer account ($99/year)
  - Create App ID, provisioning profile, distribution certificate
  - Export signing credentials for CI use
- **GitHub Actions workflow** (`.github/workflows/ios-build.yml`):
  - Trigger: push to `main` or manual dispatch
  - Runner: `macos-latest`
  - Steps: checkout → npm install → `npx cap copy ios` → `xcodebuild archive` → export `.ipa`
  - Signing via GitHub Secrets (certificate + provisioning profile)
  - Artifact: signed `.ipa` uploaded to workflow artifacts or App Store Connect

#### 13-4: Service Worker Considerations
- Capacitor apps have their own offline model (assets bundled in the native shell)
- **Option A**: Disable service worker registration in Capacitor builds (detect via `window.Capacitor`)
- **Option B**: Keep SW active for caching — harmless but redundant
- Decision: likely Option A for cleaner behavior

#### 13-5: Platform-Specific Enhancements (Optional)
Native features that could enhance Mokuri if desired (none required for launch):
- **Haptic feedback** — subtle vibration on carve strokes (`@capacitor/haptics`)
- **Share sheet** — native share for exported PNGs (`@capacitor/share`)
- **File system** — save/load `.mokuri` files to device storage (`@capacitor/filesystem`)
- **Splash screen** — branded launch screen (`@capacitor/splash-screen`)

#### 13-6: App Store Submission
- **Google Play**: Straightforward — upload AAB, fill metadata, screenshots, submit for review
- **App Store**: Apple scrutinizes "web wrapper" apps, but Mokuri's rich Canvas/SVG interaction, procedural audio, and creative tooling should pass review comfortably (not a thin website wrapper)
- App Store metadata: description, screenshots (phone + tablet), privacy policy (no data collection — easy), age rating

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Apple rejects as "web wrapper" | Mokuri has rich interaction (carving, Canvas rendering, Web Audio) — not a thin wrapper. Add haptic feedback plugin to strengthen native feel if needed. |
| WebView performance for print engine | Canvas rendering is well-optimized in modern WebViews. Test on lower-end devices. OffscreenCanvas Worker (12-P2) would help if needed. |
| iOS signing complexity | One-time setup via cloud Mac. CI handles ongoing builds automatically. |
| Keeping three targets in sync (PWA + Android + iOS) | Single codebase. `npx cap copy` syncs web assets to native projects. CI automates builds. |

### Cost

- **Apple Developer Program**: $99/year
- **Google Play Developer**: $25 one-time
- **Cloud Mac rental**: ~$1–5 for initial 1-hour setup session
- **Ongoing**: $0 (GitHub Actions free tier, development on Windows)
