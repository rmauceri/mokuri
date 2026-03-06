# Mokuri — Implementation Plan

## Context

Mokuri is a Japanese woodblock print creation app. The user composes scenes from curated SVG elements, applies traditional color palettes, "carves" detail into elements, then renders a final print with authentic woodblock texture effects. See `concept.md` for full vision.

**V1 scope decisions (from brainstorm):**
- Desktop & tablet first, phone-safe architecture
- Traditional Japanese scenes (landscape, nature, seasons) — extensible for future theme packs
- Carving interaction is essential — the core differentiator
- 4–5 traditional color palettes, central to the experience
- Full print effect from day one (wood grain, paper texture, ink variation, misregistration)
- No sound in v1, but architecture supports it
- Procedural SVG elements to start, hand-crafted replacements over time
- GitHub Pages deployment, minimal file structure

---

## Architecture

### File Structure
```
mokuri/
  index.html          — App shell, CSS, UI, interaction logic
  elements.js         — SVG element library (procedural definitions)
  print-engine.js     — Canvas-based print effect renderer
  manifest.json       — PWA manifest
  sw.js               — Service worker
  concept.md          — Design concept document
  plan.md             — This file
```

Separating elements and the print engine into their own files keeps index.html manageable and allows the element library to grow independently. All files are static — no build step, direct GitHub Pages deploy.

### Element Data Model
Each element is a JS object defining its SVG structure at multiple carve levels:
```javascript
{
  id: 'mountain-distant',
  name: 'Distant Mountain',
  category: 'landscape',
  viewBox: '0 0 200 120',
  suggestedLayer: 'background',
  carveLevels: [
    { name: 'block', paths: [...] },      // level 0: solid silhouette
    { name: 'shape', paths: [...] },      // level 1: outline + major forms
    { name: 'detail', paths: [...] },     // level 2: interior detail, texture
  ],
  colorZones: [
    { id: 'body', pathIndex: 0, defaultPaletteSlot: 0 },
    { id: 'snow-cap', pathIndex: 1, defaultPaletteSlot: 4 },
  ],
}
```

### Workspace
- Main SVG element serves as the composition canvas
- Each placed element is an SVG `<g>` group with transforms (translate, scale, rotate)
- Hit testing via native SVG pointer events
- Pan/zoom via viewBox manipulation
- Undo/redo via command stack (each action is a reversible command object)

### Print Rendering
- Serialize the composition SVG → render to Canvas via `drawImage`
- Apply layered Canvas post-processing: paper texture, wood grain, ink variation, misregistration
- Output as downloadable PNG via `canvas.toBlob()`

---

## Implementation Phases

### Phase 1: Workspace Foundation
Get something visual on screen as fast as possible.

- [ ] **Project scaffolding** — HTML shell with CSS layout: workspace area (center), element picker (side panel), toolbar (top)
- [ ] **Paper workspace** — SVG canvas with washi paper background texture (CSS gradient/pattern), pan and zoom (mouse wheel + touch pinch)
- [ ] **First 3 procedural elements** — Mountain, wave, moon. Simple SVG path generators. Silhouette only (carving comes in Phase 3)
- [ ] **Element picker panel** — Thumbnail grid of available elements, organized by category
- [ ] **Place elements** — Click/tap element in picker → appears on workspace → drag to position
- [ ] **Selection** — Click element to select, show bounding box, click away to deselect

### Phase 2: Manipulation + Color
Make composition feel creative and expressive.

- [ ] **Resize handles** — Corner/edge handles on selected element for proportional scaling
- [ ] **Rotate** — Rotation handle or gesture for selected element
- [ ] **Layer ordering** — Bring forward / send back controls for selected element
- [ ] **Delete** — Remove selected element
- [ ] **4–5 color palettes** — Define Sumi, Edo, Hokusai, Sakura, Aki palettes with 5–7 colors each
- [ ] **Palette picker UI** — Visual palette selector (maybe bottom bar or panel)
- [ ] **Apply palette** — Switching palette recolors all elements globally via color zone mapping
- [ ] **Per-element color override** — Tap a color zone on a selected element to assign a specific palette color
- [ ] **Undo/redo** — Command stack for all composition actions

### Phase 3: Carving
The interaction that makes Mokuri unique.

- [ ] **Expand elements to 8–10** — Add pine tree, cherry blossom branch, cloud/mist, crane, torii gate. Each with 3 carve levels
- [ ] **Carve level data** — Each element defines silhouette → outline → detail SVG layers
- [ ] **Carving interaction** — Select element, then tap/click to cycle carve levels. Visual transition: layers fade/reveal with a subtle animation
- [ ] **Carve level indicator** — Small UI showing current carve state (1/2/3) on selected element
- [ ] **Mixed carve levels** — Different elements in the same composition can be at different carve levels (some detailed, some still silhouettes — this is a creative choice)
- [ ] **Chisel cursor/tool** — Visual feedback: cursor changes when hovering over carveable element

### Phase 4: Print Effect
The payoff moment.

- [ ] **Print button + preview** — "Print" action renders the composition into a full-screen print preview
- [ ] **Paper texture** — Canvas overlay simulating paper fiber (procedural noise, warm tone)
- [ ] **Wood grain** — Subtle directional grain texture bleeding through inked areas
- [ ] **Ink density variation** — Slight opacity variation across large filled areas (not perfectly uniform)
- [ ] **Color misregistration** — 1–2px random offset per color layer for authenticity
- [ ] **Muted color shift** — Colors slightly warmed/desaturated as if absorbed into paper
- [ ] **Bokashi** — Optional gradient fade on selected regions
- [ ] **Print animation** — Brief satisfying animation (baren press, paper peel, or simple fade-reveal)

### Phase 5: Save + Export
Complete the creative loop.

- [ ] **Export PNG** — High-resolution PNG download of the printed result
- [ ] **Export SVG** — Vector export of the composition (pre-print-effect)
- [ ] **Save to LocalStorage** — Auto-save current work, manual save slots
- [ ] **Load saved work** — Gallery of saved compositions
- [ ] **New composition** — Start fresh with paper/palette selection

### Phase 6: Polish + PWA
Production-ready quality.

- [ ] **PWA setup** — manifest.json, service worker, meta tags (same pattern as other apps)
- [ ] **Touch optimization** — Pinch-to-zoom, two-finger pan, touch-friendly handle sizes
- [ ] **Responsive layout** — Panels adapt for desktop (side panel) vs tablet (bottom sheet) vs phone (modal panels)
- [ ] **Keyboard shortcuts** — Delete, undo/redo, arrow nudge, bracket keys for layer order
- [ ] **Smooth transitions** — Panel open/close, element placement, carve reveal animations
- [ ] **Empty state** — Welcoming first-launch experience with guidance
- [ ] **copilot-instructions.md** — Project documentation for future development

---

## V1 Element Library (Procedural)

Starting set of procedurally generated SVG elements, each with 3 carve levels:

| # | Element | Category | Carve Levels |
|---|---------|----------|-------------|
| 1 | Distant Mountain | Landscape | Solid peak → ridgeline + snow cap → rock texture |
| 2 | Great Wave | Water | Solid curl → wave outline + foam → spray detail + hatching |
| 3 | Full Moon | Sky | Solid circle → circle + halo → surface detail + clouds |
| 4 | Pine Tree | Trees | Solid silhouette → trunk + branch forms → needle clusters |
| 5 | Cherry Branch | Trees | Solid mass → branch + flower shapes → petal detail + stamens |
| 6 | Cloud Bank | Sky | Solid band → layered cloud forms → wispy edges + gradation |
| 7 | Crane | Fauna | Solid silhouette → body + wing forms → feather detail |
| 8 | Torii Gate | Structures | Solid shape → structural outline → wood grain + rope detail |

Elements 1–3 for Phase 1. Elements 4–8 added in Phase 3.

---

## V1 Color Palettes

| Palette | Colors (5–7) |
|---------|-------------|
| **Sumi** (墨) | #1a1a1a, #3d3d3d, #6b6b6b, #9e9e9e, #c8c8c8 |
| **Edo** | #1a3a5c, #c23b22, #c49a2a, #5c7a4a, #2a2a2a |
| **Hokusai** | #1b3a6b, #4a90c4, #f5f0e1, #8b4513, #3a3a3a |
| **Sakura** | #e8a0b4, #8fb573, #f5f0e1, #7a5c47, #d4a0a0 |
| **Aki** (秋) | #b33a2a, #d4a030, #c46a20, #3a5c3a, #5c3a2a |

Exact hex values are starting points — will tune for print authenticity.

---

## Development Approach

- Build phase by phase, deploy after each phase for testing
- Each phase should produce a usable (if incomplete) app
- Phase 1 is the critical **"does this feel right?"** checkpoint — composition on a paper workspace with a few elements
- Phase 3 (carving) is the **"is this actually fun?"** checkpoint
- Phase 4 (print effect) is the **"wow"** checkpoint
- Expect significant iteration on the carving mechanic based on how it feels in practice

---

## Notes

- No sound in v1, but keep audio architecture slot open (ZenAudio-style module pattern)
- Element library format is designed for future theme packs (just add new element definitions)
- Palette format supports future user-defined palettes
- Save format should version-stamp for forward compatibility
