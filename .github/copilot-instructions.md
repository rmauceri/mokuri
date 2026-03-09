# Mokuri — Copilot Instructions

Mokuri (墨栗) is a Japanese woodblock print creator app. Users compose scenes from curated SVG elements, apply traditional color palettes, carve detail with freeform tools, and render prints with authentic mokuhanga texture effects. Multi-file structure, zero dependencies, runs entirely in the browser.

## Running

Open `index.html` directly in a browser, or serve the directory (e.g. via GitHub Pages). No build step, no server required.

## File Structure

```
mokuri/
  index.html              — App shell, CSS, HTML, all UI + interaction JS (~5400 lines)
  elements.js             — Core element library (landscape, flora, fauna, objects)
  extended-elements.js    — Extended elements (flora, patterns, objects)
  fauna-elements.js       — Fauna elements (koi, dragonfly, turtle, crane, rabbit, frog, butterfly, sparrow + variant poses)
  scene-elements.js       — Scene elements (bamboo, rocks, temple, village, bridge, rain, snow, clouds, maple, iris)
  forms-elements.js       — Basic Forms (12 geometric/organic shapes for hand carving)
  hanko-elements.js       — Hanko seal stamps (6 shapes: circle, square, gourd, oval, diamond, cloud)
  print-engine.js         — Canvas-based print renderer (paper texture, ink effects, post-processing)
  audio-engine.js         — Procedural audio (ambient soundscape + activity sounds, Web Audio API)
  concept.md              — Full vision document — READ THIS for design intent
  plan.md                 — Original implementation plan (6 phases)
  ROADMAP.md              — Completed work and future plans
  README.md               — Project link
```

## Architecture

### Workspace
- Main SVG element (`#workspace-svg`) serves as the composition canvas
- Each placed element is an SVG `<g>` group with transforms (translate, scale, rotate)
- Pan/zoom via viewBox manipulation (alt+click pan, scroll wheel zoom)
- Hit testing via native SVG pointer events on `data-id` groups

### State
Single `STATE` object holds all app state:
```
elements[]               — placed elements with position, scale, rotation, carveLevel, colorOverrides, carveStrokes
nextId                   — auto-incrementing element id counter
selectedId               — currently selected element id (or null)
activeZone               — active color zone id for editing

viewBox                  — { x, y, w, h } current viewport
paperW, paperH           — paper dimensions
zoom                     — current zoom level

paletteId                — active palette key
viewMode                 — 'carve' (wood tones) | 'ink' (palette colors)
mode                     — 'select' | 'carve' | 'erase' (tool mode)
carveTool                — active carve tool id ('fine' | 'vgouge' | 'ugouge')
carving                  — active carve stroke in progress (or null)

carveFocus               — element id when in carve focus mode (or null)
preFocusViewBox          — saved viewBox before entering focus
preFocusZoom             — saved zoom before entering focus
backgroundCarveStrokes   — freeform carve strokes on paper background
strokeRedoBuffer         — quick stroke undo buffer (Z key in carve mode)

printPreview             — boolean, inline print canvas visible
printStudioOpen          — boolean, Print Studio panel open
carveStudioOpen          — boolean, Carve Studio panel open
inkStudioOpen            — boolean, Ink Studio panel open

paperType                — 'hosho' | 'kozo' | 'torinoko'
inkLoad                  — 'light' | 'standard' | 'heavy'
impressions              — 1-3

sky                      — 'none' | 'dawn' | 'day' | 'dusk' | 'night' | 'overcast'
ground                   — 'none' | 'earth' | 'grass' | 'snow' | 'sand' | 'water'
horizon                  — 0-1, fraction from top (default 0.62)
mist                     — 0-3 mist bands

activeCompositionId      — current composition id in gallery (or null)
compositionName          — display name for current composition

undoStack, redoStack     — undo/redo command stacks
```

### Rendering Pipeline
`renderElementSvg(el, layerIndex)` renders elements differently based on `STATE.viewMode`:
- **Carve mode**: wood tones (WOOD_TONES), carved areas reveal PAPER_COLOR, strokes in CARVED_STROKE
- **Ink mode**: palette colors via zone mapping, carved strokes reveal paper through ink

### Print Engine (`print-engine.js`)
Multi-stage Canvas pipeline:
1. Paper texture (washi fibers, tonal warmth patches — varies by paper type)
2. SVG render with feTurbulence (wobbly edges), edge darkening (ink pooling), per-element misregistration, bokashi gradients, atmosphere layer (sky/ground/mist), background carve strokes
3. Procedural variation: seeded path perturbation per element instance (mulberry32 PRNG, amount scales with carve level)
4. Carve pattern fills rendered per-element if `el.carvePattern` is set
5. Hanko elements get special treatment: vermillion color (#c23b22), reduced perturbation (0.15 vs 0.6–1.3), reduced misregistration (0.2x), pre-flipped transform for correct reading
6. Multi-impression rendering (1–3 passes with tiny offsets)
7. Multiply composite (ink absorbs into paper)
8. Post-processing: color muting → ink absorption variation → baren pressure → wood grain → fine noise

`print(elements, paletteId, paperW, paperH, opts)` — opts: `{ paperType, inkLoad, impressions, atmosphere }`
atmosphere: `{ sky, ground, horizon, mist, paperBase }` — sky/ground are type objects with gradient stops.
Uses `carveStrokeRenderData()` from index.html (global function) for graduated carve stroke rendering.

### Atmosphere System
Background layer rendered behind all elements in both workspace and print:
- **Sky types**: none, dawn, day, dusk, night, overcast — vertical gradient fills with organic wobble horizon edge
- **Ground types**: none, earth, grass, snow, sand, water — gradient from horizon to bottom with organic top edge
- **Horizon**: configurable position (0.2–0.85 from top)
- **Mist bands**: 0–3 semi-transparent paper-colored horizontal bands for depth layering
- Config objects: `SKY_TYPES`, `GROUND_TYPES` in index.html
- STATE fields: `sky`, `ground`, `horizon`, `mist` — persisted in save/load
- UI: atmosphere controls in Ink Studio panel

### Audio System (`audio-engine.js`)
Procedural audio via Web Audio API, exposed as global `MokuriAudio` object:
- **Ambient soundscape**: generative chimes (Japanese pentatonic scales), temple bell, wind texture, water drops — all synthesized, no audio files
- **Atmosphere-reactive**: sky/ground conditions adjust chime register, spacing, volume, and wind character via `setAmbienceForAtmosphere(sky, ground)`
- **Activity sounds**: one-shot procedural synthesis for carving, element placement, deletion, color changes, print pull, focus enter/exit, panel toggles, undo/redo
- **Controls**: 🔊/🔇 ambient toggle, volume slider, 🔔/🔕 activity toggle in status bar
- **Preferences**: persisted in localStorage (`ambientOn`, `ambientVol`, `activityOn`, `activityVol`)

## UI Panels

### Toolbar
Centered phase-based layout with grouped controls:
- **Left**: Composition Gallery button, editing tools (undo/redo, flip, duplicate, lock, delete, layer order)
- **Center**: Phase buttons — 🏞️ Compose, 🪵 Carve, 🎨 Ink, 📜 Print
- **Right**: Zoom controls, paper selector

### Carve Studio (right-side flyout, 260px)
Opens via 🪵 Carve button or V key. Contains:
- **Tool selector**: Fine (╱), V Gouge (∨), U Gouge (∪) — keys 1/2/3
- **Carve pattern selector**: None, Crosshatch, Woodgrain, Diagonal, Stipple, Wave — stored in `el.carvePattern`
- **Element section** (when element selected): carve level pips, Focus button, Clear strokes button
- **Background toggle**: carve on paper background vs. elements

### Ink Studio (right-side flyout, 260px)
Opens via 🎨 Ink button or I key. Contains:
- **Palette selector**: 10 palettes in 2-column grid with color dot previews
- **Zone editor** (when element selected): per-zone color picker (5 palette swatches), bokashi direction (⊘↑↓←→), reset button
- **Atmosphere controls**: sky chips, ground chips, horizon slider, mist band selector

### Print Studio (right-side flyout)
Opens via 📜 Print button or P key. Contains:
- Paper type cards (Hosho / Kozo / Torinoko)
- Ink load toggles (淡 / 中 / 濃)
- Impression count (1× / 2× / 3×)
- Pull Print button + Save PNG + Back to Edit
- Light dismiss: click workspace or Esc to close

### Composition Gallery
Replaces the old file menu. Accessed via gallery button in toolbar:
- **Paper size presets**: 6 sizes (Landscape, Portrait, Square, Panoramic, Tall Scroll, Postcard)
- **Scene presets**: 6 curated starting compositions (Mountain Dawn, Garden Pond, Ocean Night, Snow Village, Bamboo Forest, Autumn Valley)
- **Saved compositions**: grid with SVG thumbnails, inline rename, delete with confirmation
- **Storage**: `mokuri-gallery` localStorage key, up to 10 compositions (`MAX_GALLERY_SIZE`)
- **Functions**: `openGallery()`, `buildGalleryUI()`, `switchToComposition()`, `autoSave()`, `autoLoad()`

### Makimono (巻物) — First-Run Experience
Scroll-style welcome screen with Japanese woodblock print philosophy and 4-step workflow guide:
- **Visits 1–3**: full makimono (scrollable content with Begin Creating button)
- **Visits 4–5**: splash mode (title only, auto-closes after 1.8s)
- **Visit 6+**: not shown
- Also accessible as About screen
- Tracks visits via `mokuri-visits` localStorage counter

## Element Data Model

```javascript
{
  id: 'koi',
  name: 'Koi',
  category: 'fauna',              // landscape | flora | fauna | objects | patterns | basic forms | hanko
  viewBox: '0 0 160 100',
  suggestedLayer: 'foreground',
  colorZones: [
    { id: 'body', defaultPaletteSlot: 0 },
    { id: 'fin', defaultPaletteSlot: 3 },
  ],
  carveLevels: [
    { name: 'block', paths: [{ d: '...', type: 'fill', zone: 'body' }] },
    { name: 'shape', paths: [...] },    // + outlines, major features
    { name: 'detail', paths: [...] },   // + hatching, texture, fine lines
  ],
}
```

**Rules:**
- Level 0 (block): fill paths only (solid silhouettes)
- Level 1 (shape): + outlines and major structural features
- Level 2 (detail): + hatching, texture, fine detail lines
- Every path must have a `zone` that exists in `colorZones`
- `type` is either `'fill'` or `'stroke'`
- Adding new elements: create a new JS file declaring an array, add `<script>` tag to index.html, merge into `MOKURI_ELEMENTS` at runtime (see fauna-elements.js pattern)

**Element files and script load order:**
1. `elements.js` → `MOKURI_CORE_ELEMENTS`
2. `extended-elements.js` → merged into core
3. `fauna-elements.js` → `MOKURI_FAUNA_ELEMENTS`
4. `scene-elements.js` → `MOKURI_SCENE_ELEMENTS`
5. `hanko-elements.js` → `MOKURI_HANKO_ELEMENTS`
6. `forms-elements.js` → `MOKURI_FORMS_ELEMENTS`

All merged into `MOKURI_ELEMENTS` array at startup.

## Carve Tool System

Three freeform carve tools with graduated gouge profiles:
- **Fine** (╱): 2px width, single layer, clean line
- **V Gouge** (∨): 4px width, 3 layers with graduated opacity (shallow at edges)
- **U Gouge** (∪): 8px width, 5 layers with smooth rounded cross-section

Strokes are stored in element-local coordinates (`el.carveStrokes[]`) and move/scale/rotate with the element. Each stroke has entry/exit taper and per-segment organic variation (deterministic noise). Custom cursors show tool profile; pressure sensitivity adjusts stroke width.

`carveStrokeRenderData(stroke, paperColor, grooveColor)` is the shared rendering helper used by the workspace, live preview, AND print engine.

**Quick stroke undo**: Z key (no modifier) undoes last stroke in carve/erase mode; Shift+Z redoes. Uses `STATE.strokeRedoBuffer`.

### Carve Focus Mode
F key (or Focus button in Carve Studio) zooms smoothly into a selected element for detailed carving:
- `STATE.carveFocus` holds the focused element id
- Viewport animates to element bounds (350ms ease-out), non-focused elements dim (opacity 0.15, no pointer events)
- Escape exits focus and restores previous viewport
- Auto-enters carve mode on focus

### Carve Patterns (`CARVE_PATTERNS`)
6 patterns replace flat paper reveals on carved areas:
- None, Crosshatch (╳), Woodgrain (〰), Diagonal (╱), Stipple (∴), Wave (∿)
- Stored per-element in `el.carvePattern`
- Renders in both workspace and print output (dark overlay + paper-colored groove pattern)
- Selected via chips in Carve Studio panel

### Background Carving
Paper background is carveable — click empty space in carve mode:
- Strokes stored in `STATE.backgroundCarveStrokes[]`
- Rendered in `bg-carve-layer` SVG group between atmosphere and elements
- Toggle in Carve Studio panel to switch between element and background carving
- Included in undo/redo and auto-save

### Hanko Stamps
Traditional seal stamps for signing compositions:
- 6 pre-designed seal shapes in `hanko-elements.js` (circle, square, gourd, oval, diamond, cloud)
- **Custom initials generator**: `showHankoCreator()` modal — enter 1–3 characters, choose shape (○□◇), generates procedural brush-stroke seal with 3 carve levels
- Always renders in vermillion (#c23b22) regardless of palette
- Print engine: reduced misregistration (0.2x), reduced perturbation (0.15), pre-flipped transform for correct reading after mirror

## Color System

- 10 palettes: Sumi 墨, Edo, Hokusai, Hiroshige, Sakura 桜, Aki 秋, Yoru 夜, Fuyu 冬, Beni 紅, Matcha 抹茶 (5 colors each)
- Global palette selection via `STATE.paletteId`
- Per-element zone overrides via `el.colorOverrides[zoneId]`
- Zone editor in Ink Studio panel when element is selected
- Palette switching re-renders all elements immediately

## Studio Materials

Creative depth settings that affect the final print output.

### Paper Types (`PAPER_TYPES` in index.html)
Three papers with distinct textures and ink behavior:
- **Hosho** (奉書) — smooth, bright white, clean. Colors pop. Minimal fiber.
- **Kozo** (楮) — warm, fibrous, organic. The default workhorse.
- **Torinoko** (鳥の子) — warm cream, elegant. Ink sits on surface more.

Each defines: `base` (bg color), `fiberDensity`, `fiberOpacity`, `warmPatches`, `inkOpacity`, `barenIntensity`, `noiseAmt`.
Selected in Print Studio panel. Persisted in save data.

### Ink Load (`INK_LOADS` in index.html)
Three levels controlling ink opacity, edge weight, turbulence, and misregistration:
- **Light** (淡) — ethereal, washed out
- **Standard** (中) — default behavior
- **Heavy** (濃) — deep saturated, bold

### Bokashi (per-zone gradient)
Per-zone gradient fade — darker at one side, fading to paper at the other. Direction widget (⊘↑↓←→) in the zone editor (Ink Studio). Stored in `el.zoneBokashi[zoneId]` as `'up'|'down'|'left'|'right'`. Renders as SVG `<linearGradient>` in both workspace and print engine.

### Impression Count
1–3 presses of the same block. Multiple impressions build richer color with slight edge doubling from natural misalignment.

## Element Manipulation

- **Flip Horizontal** (H) / **Flip Vertical** (F) — negates `scaleX`/`scaleY`; carve strokes flip automatically (stored in local coords)
- **Duplicate** (Ctrl+D) — deep-clones selected element with +20px offset, fresh `id` and `variationSeed`
- **Lock/Unlock** (L) — `el.locked` flag prevents move, resize, rotate, carve, delete, nudge, and layer reorder; locked elements show dimmed handles and a 🔒 icon; can still be selected and duplicated
- **Resize handles** — corner handles for proportional scaling, edge midpoint handles for free-form (non-proportional) resize
- **Layer ordering** ([ / ]) — move element forward/backward in render order

## Save/Load

- **Composition Gallery**: replaces old file menu — grid of saved compositions with SVG thumbnails
- **Auto-save**: every state mutation auto-saves to gallery (`mokuri-gallery` localStorage key)
- **Auto-load**: restores last active composition on startup; migrates from old `mokuri-autosave` format
- **Serialization**: `getCompositionData()` / `applyCompositionData()` — elements, nextId, paletteId, paper dimensions, atmosphere, materials, background carve strokes
- **Scene presets**: 6 curated starting compositions accessible from gallery

## Key Keyboard Shortcuts

| Key | Action |
|-----|--------|
| V | Toggle select ↔ carve mode (opens Carve Studio) |
| E | Toggle select ↔ erase mode |
| I | Toggle Ink Studio |
| P | Toggle Print Studio |
| C | Carve selected element (cycle level) / toggle Carve Studio |
| F | Enter carve focus (if element selected in carve mode) |
| H | Flip selected element horizontally |
| L | Lock / unlock selected element |
| Ctrl+D | Duplicate selected element |
| 1/2/3 | Select carve tool (in carve mode) |
| Z | Quick stroke undo (in carve/erase mode, no modifier) |
| Shift+Z | Quick stroke redo (in carve/erase mode) |
| Delete/Backspace | Delete selected element |
| Ctrl+Z / Ctrl+Y | Undo / Redo |
| [ / ] | Layer order |
| +/- | Zoom |
| 0 | Fit to view |
| Arrows | Nudge selected (Shift = 10px) |
| Escape | Context-dependent close: modal → panel → focus → view mode |

## Conventions

- **No external dependencies** — no CDN links, imports, or network calls.
- **No build step** — all files served directly. GitHub Pages deployment.
- **SVG for composition, Canvas for print** — workspace is SVG; print engine renders to Canvas for texture effects.
- **Organic over precise** — visual effects should feel hand-made, not mathematical. Noise, variation, and imperfection are features.
- **Element files are independent** — each declares a global array, merged at runtime. No ES module exports.
- **Config at the top** — PALETTES, WOOD_TONES, PAPER_COLOR, CARVE_TOOLS are top-level constants. Don't scatter magic numbers inline.
- **Writing JS files via PowerShell is fragile** — template literals, backticks, and `${}` cause escaping issues. Use the `create` tool or write to a temp file and move it.
- **Test in Edge** — primary test browser is Microsoft Edge.
- **Offline-first** — no network calls.
- **LocalStorage** — key prefix: `mokuri-`.

## Commits

All commits in this repo include:
```
Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```
