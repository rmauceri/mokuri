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

## Future Work

### Element Fidelity
- **Hand-crafted SVG replacements** — Current elements are procedural. Hand-drawn SVGs with hatching, texture lines, and form-following detail would dramatically raise visual quality. This is the single biggest remaining quality gap vs. what AI image generators produce.
- **Pattern fills for carving** — Carved areas currently reveal flat paper. Could instead reveal cross-hatching, wood grain, or decorative patterns for richer texture.

### Composition & Creativity
- **Composition guides** — Rule-of-thirds, golden ratio, and horizon-line overlays to help users compose intentional scenes.
- **More scene presets** — Seasonal themes, time-of-day variations, genre-specific starters (seascape, garden, urban, spiritual).

### Platform & Polish
- **PWA** — manifest.json and service worker for installability and offline use.
- **Touch gestures** — Pinch-to-zoom, two-finger pan for tablet use.
- **Responsive layout** — Panels adapt for desktop (side panel) vs tablet (bottom sheet) vs phone (modal panels).
- **Keyboard shortcuts expansion** — More shortcuts for power users.

### Print Engine
- **Advanced bokashi** — Multi-directional gradients, radial fades, more nuanced ink distribution.
- **Registration marks** — Visual guides showing block alignment for multi-color printing authenticity.
