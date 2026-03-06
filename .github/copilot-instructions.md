# Mokuri — Copilot Instructions

Mokuri (墨栗) is a Japanese woodblock print creator app. Users compose scenes from curated SVG elements, apply traditional color palettes, carve detail with freeform tools, and render prints with authentic mokuhanga texture effects. Multi-file structure, zero dependencies, runs entirely in the browser.

## Running

Open `index.html` directly in a browser, or serve the directory (e.g. via GitHub Pages). No build step, no server required.

## File Structure

```
mokuri/
  index.html              — App shell, CSS, HTML, all UI + interaction JS (~2000 lines)
  elements.js             — Core element library (8 elements: landscape, flora, fauna, objects)
  extended-elements.js    — Extended elements (9: flora, patterns, objects)
  fauna-elements.js       — Fauna elements (8: koi, dragonfly, turtle, crane, rabbit, frog, butterfly, sparrow)
  print-engine.js         — Canvas-based print renderer (paper texture, ink effects, post-processing)
  concept.md              — Full vision document — READ THIS for design intent
  plan.md                 — Original implementation plan (6 phases)
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
elements[]       — placed elements with position, scale, rotation, carveLevel, colorOverrides, carveStrokes
viewMode         — 'carve' (wood tones) | 'ink' (palette colors)
mode             — 'select' | 'carve' | 'erase' (tool mode)
paletteId        — active palette key
printPreview     — boolean, inline print canvas visible
```

### Rendering Pipeline
`renderElementSvg(el, layerIndex)` renders elements differently based on `STATE.viewMode`:
- **Carve mode**: wood tones (WOOD_TONES), carved areas reveal PAPER_COLOR, strokes in CARVED_STROKE
- **Ink mode**: palette colors via zone mapping, carved strokes reveal paper through ink

### Print Engine (`print-engine.js`)
Multi-stage Canvas pipeline:
1. Paper texture (washi fibers, tonal warmth patches)
2. SVG render with feTurbulence (wobbly edges), edge darkening (ink pooling), per-element misregistration
3. Multiply composite (ink absorbs into paper)
4. Post-processing: color muting, baren pressure, wood grain, fine noise

Uses `carveStrokeRenderData()` from index.html (global function) for graduated carve stroke rendering.

## Element Data Model

```javascript
{
  id: 'koi',
  name: 'Koi',
  category: 'fauna',              // landscape | flora | fauna | objects | patterns
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

## Carve Tool System

Three freeform carve tools with graduated gouge profiles:
- **Fine** (╱): 2px width, single layer, clean line
- **V Gouge** (∨): 4px width, 3 layers with graduated opacity (shallow at edges)
- **U Gouge** (∪): 8px width, 5 layers with smooth rounded cross-section

Strokes are stored in element-local coordinates (`el.carveStrokes[]`) and move/scale/rotate with the element. Each stroke has entry/exit taper and per-segment organic variation (deterministic noise).

`carveStrokeRenderData(stroke, paperColor, grooveColor)` is the shared rendering helper used by the workspace, live preview, AND print engine.

## Color System

- 5 palettes: Sumi, Edo, Hokusai, Sakura, Aki (5 colors each)
- Global palette selection via `STATE.paletteId`
- Per-element zone overrides via `el.colorOverrides[zoneId]`
- Zone editor visible in Ink mode when element is selected
- Palette switching in ink mode re-renders all elements immediately

## Save/Load

- **Auto-save**: every mutation (undo push, redo) saves to `localStorage` key `mokuri-autosave`
- **3 named slots**: `mokuri-slots` key stores array of slot data
- **Serialization**: `getCompositionData()` / `applyCompositionData()` — elements, nextId, paletteId, paper dimensions
- File menu (📁) in toolbar with New, Save 1-3, Load 1-3

## Key Keyboard Shortcuts

| Key | Action |
|-----|--------|
| V | Toggle select ↔ carve mode |
| E | Toggle select ↔ erase mode |
| I | Toggle carve ↔ ink view |
| P | Toggle print preview |
| C | Carve selected element (cycle level) |
| 1/2/3 | Select carve tool (in carve mode) |
| Delete/Backspace | Delete selected element |
| Ctrl+Z / Ctrl+Y | Undo / Redo |
| [ / ] | Layer order |
| +/- | Zoom |
| 0 | Fit to view |
| Arrows | Nudge selected (Shift = 10px) |
| Escape | Exit print preview / ink mode / return to select |

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
