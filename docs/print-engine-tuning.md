# Print Engine Tuning — Learnings & Direction

## Overview

The Print Engine (`print-engine.js`) transforms SVG compositions into authentic-looking mokuhanga (Japanese woodblock) prints via a multi-stage Canvas pipeline. In May 2025, a focused tuning effort was undertaken to make Forge-era elements look more like authentic woodblock prints rather than "comic book" flat vector art.

This document captures the learnings, current state, design principles, and future direction.

---

## Design Principles

1. **Water-based ink absorbed into paper** — prints should look like pigment soaked into washi fiber, not digital vectors sprayed onto a screen.
2. **Organic over precise** — imperfection is the point. Perfect alignment and crisp edges are the enemy.
3. **Profile-based, not slider-heavy** — users shouldn't need to understand 16 parameters. Three meaningful profiles rooted in real traditions is the right abstraction.
4. **Wobble is essential** — the feTurbulence displacement filter is the single biggest contributor to "this looks printed, not drawn."
5. **Less is more for small elements** — aggressive effects that work on large compositions overwhelm small Forge elements. Scale effects by element size where possible.

---

## Rendering Pipeline

The print engine processes in this order:

1. **Paper texture** — Washi fibers, tonal warmth patches. Varies by paper type (Hosho, Kozo, Torinoko, Gampi, Unryu, Kakishibu).
2. **Atmosphere layer** — Sky gradients, ground fills, horizon edge (organic wobble or smooth), mist bands. Rendered with wobble filter applied. Sits behind all elements.
3. **Background carve strokes** — Freeform carve marks on the paper itself, between atmosphere and elements.
4. **SVG element render with feTurbulence** — Wobble filter on all elements (reduced for hanko). Organic edge displacement.
5. **Path perturbation** — Seeded coordinate noise per element instance. Amount scales by carve level (block < shape < detail). Deterministic (same seed = same result).
6. **Ink bleed** — Gaussian blur halo around ink edges. Simulates ink spreading into paper fibers.
7. **Edge darkening** — Ink pooling at element boundaries. Heavier = more "printed" look.
8. **Color muting** — Saturation reduction + warm/cool shift. Water-based inks are never as vivid as screen colors.
9. **Misregistration** — Tiny per-element offset simulating imperfect block alignment in multi-color printing.
10. **Multi-impression** — 1–3 passes with slight offsets. Builds richer color with edge doubling.
11. **Multiply composite** — Ink absorbs into paper rather than sitting on top.
12. **Post-processing** — Color muting → ink absorption variation → baren pressure → wood grain → fine noise.

---

## Tunable Parameters

All parameters have defaults in `_defaultTuning` (print-engine.js, line 16). Overridden via the Print Tuning Console (dev tool, Ctrl+Shift+P) or style profiles.

| Group | Parameter | Default | Range | Effect |
|-------|-----------|---------|-------|--------|
| **Ink Bleed** | `bleedRadius` | 1.5 | 0–4 | Gaussian blur radius for ink spread |
| | `bleedOpacity` | 0.15 | 0–0.5 | Strength of bleed halo |
| | `bleedWarmth` | 0.3 | 0–1 | Color temperature of bleed (warmer = more ochre) |
| **Color Muting** | `saturation` | 0.82 | 0.5–1 | Overall saturation multiplier |
| | `warmShift` | 2.5 | 0–5 | Hue shift toward warm tones |
| | `coolShift` | 1.5 | 0–3 | Hue shift toward cool tones |
| **Brush Variation** | `brushVariation` | 0.12 | 0–0.3 | Opacity variation across ink areas |
| | `dryBrushChance` | 0.15 | 0–0.5 | Probability of dry-brush texture |
| | `dryBrushOpacity` | 0.08 | 0–0.4 | Visibility of dry-brush marks |
| **Perturbation** | `blockPerturb` | 0.8 | 0–3 | Path wobble at carve level 0 (block) |
| | `shapePerturb` | 1.2 | 0–3 | Path wobble at carve level 1 (shape) |
| | `detailPerturb` | 1.8 | 0–4 | Path wobble at carve level 2 (detail) |
| **Wood Grain** | `grainOpacity` | 0.15 | 0–0.3 | Visibility of wood grain texture |
| | `grainInInk` | 0.08 | 0–0.2 | Grain showing through inked areas |
| **Edge Darkening** | `edgeWeight` | 2.8 | 0–5 | Thickness of ink pooling at edges |
| | `edgeOpacity` | 0.5 | 0–1 | Darkness of edge pooling |
| **Wobble** | `wobbleScale` | 3.5 | 0–8 | feTurbulence displacement magnitude |

---

## Style Profiles

Three profiles based on authentic mokuhanga traditions. Each sets all parameters to curated values.

### 浮世絵 Ukiyo-e — "Bold, vivid, clean edges"

The commercial woodblock tradition (Edo period, 1603–1868). Characterized by:
- Strong, flat color with minimal gradation
- Clean outlines with confident carving
- High saturation — pigments applied generously
- Higher wobble — bold displacement reads as hand-printed energy

Key settings: `saturation: 0.93`, `wobbleScale: 5.5`, `edgeWeight: 2.0`, `bleedRadius: 0.6`

### 新版画 Shin-hanga — "Soft, atmospheric, refined"

The "new prints" movement (1915–1960s, Watanabe publisher). Characterized by:
- Atmospheric depth, soft gradations
- Refined registration, subtle color shifts
- Paper texture visible through lighter ink areas
- Western perspective influence, photographic sensibility

Key settings: `saturation: 0.78`, `wobbleScale: 3.5`, `edgeWeight: 2.8`, `bleedRadius: 1.8`, `warmShift: 2.8`

### 創作版画 Sōsaku-hanga — "Raw, textured, visible hand"

The "creative prints" movement (1900s onward). Artist does everything: design, carve, print. Characterized by:
- Visible wood grain, heavy texture
- Stronger perturbation — deliberate imprecision
- Muted, earthy colors
- The hand of the artist is the point

Key settings: `saturation: 0.68`, `wobbleScale: 3.5`, `edgeWeight: 3.8`, `grainOpacity: 0.25`, `blockPerturb: 1.6`

---

## Key Learnings

### What Works

- **Wobble (feTurbulence)** is the single most impactful parameter. Even a small amount transforms flat vectors into something that reads as "printed."
- **Edge darkening** at moderate levels creates the ink-pooling effect that's unmistakably mokuhanga.
- **Perturbation** makes identical elements look like different impressions from the same block — essential for authenticity.
- **Color muting + warm shift** instantly moves prints away from "screen" look toward "paper" look.
- **Paper type affects everything** — Kozo fibers, Unryu long fibers, and Kakishibu dark base all dramatically change the final result without touching any tuning parameter.

### What Doesn't Work

- **Brush variation creates diagonal vignettes** — at higher values, the randomized opacity variation produces visible diagonal banding that looks like a digital artifact, not a hand-printed effect. All three profiles now have brush variation set to 0.
- **Brush variation is per-element, not per-block** — In real mokuhanga, the brush inks an entire woodblock at once (which may contain multiple carved subjects). Applying variation per-element creates artificial boundaries between adjacent elements that wouldn't exist in a real print. The solution is to group elements by depth layer (foreground/midground/background) and apply a coherent brush pattern across each layer as a unit. Each element already carries a `suggestedLayer` property that maps to this concept.
- **Wood grain competes with paper texture** — when both are visible, the print looks "doubly textured" in an unnatural way. Sōsaku pushes grain; Ukiyo-e minimizes it. Shin-hanga uses moderate grain only in ink areas.
- **High perturbation on small elements** — Forge elements are often physically small on the page. Perturbation that looks organic on a large landscape element makes a small bird look drunk. The engine scales perturbation by element size, but aggressive profiles still need care.
- **Dry brush at any visible level looks fake** — the current implementation produces streaks that don't match how real dry-brush marks look in mokuhanga (which are fibrous and follow the baren path, not random). Disabled in all profiles pending a better implementation.

### Key Decisions Made

1. **Pivoted from 16-slider dev console to 3 profiles** — The tuning console remains as a dev tool (Ctrl+Shift+P, gated on `MOKURI_IS_DEV`), but the user-facing interface is just the three profile chips in the Print Studio panel.
2. **Brush variation disabled** — Set to 0 in all profiles. The diagonal vignette artifact is worse than no variation at all. May revisit with a spatially-coherent implementation.
3. **Wobble scales with ink load** — Heavy ink = less displacement (ink fills more), Light ink = more displacement visible. The formula: `wobble = T('wobbleScale') * (inkLoad.turbScale / 3.5)`.
4. **Perturbation skips arc paths entirely** — Arcs (circles, ellipses) are left untouched because perturbing arc endpoints shifts the computed center, causing concentric arcs (e.g., moon glow vs body) to misalign visibly.
5. **Hanko get special treatment** — Reduced perturbation (0.15x), reduced misregistration (0.2x), separate wobble filter with lower scale, pre-flipped transform for correct reading.

---

## Dev Tuning Console

Access: `Ctrl+Shift+P` (dev environments only, gated on `MOKURI_IS_DEV`).

Features:
- All parameters exposed as sliders grouped by category
- Three style profile chips at top — clicking applies all values
- "Copy Values" button — copies current tuning as JS object to clipboard
- "Reset" button — returns to engine defaults
- Tuning persists in `localStorage('mokuri-print-tuning')`
- Changes apply on next print pull (not live preview)
- Long-press Pull Print button on touch devices also opens the console

---

## Print Engine 2.0 Vision

The goal: **every creative choice the user makes should have meaningful impact on the final print.** Paper, ink, profile, composition — these should interact the way real mokuhanga materials interact, so that prints feel genuinely different from each other, not just filtered versions of the same digital rendering.

### Core Principle

In real mokuhanga, the printed image emerges from the interaction of materials — paper absorbs ink differently, moisture controls flow, the baren distributes pressure unevenly, and the wood grain resists the gouge in specific directions. These are not defects to be hidden but the source of the print's character. Print Engine 2.0 should model these interactions, not just simulate their surface appearance.

### The Big Four (highest impact)

#### 1. Paper-Influenced Ink Behavior

Currently paper affects only visual texture (fibers, base color). Ink rendering is identical across all six papers. This is the most significant gap — paper choice should be *felt* in the print quality.

| Paper | Real behavior | Engine effect |
|-------|--------------|---------------|
| Hosho | Smooth, sized, ink sits cleanly | Sharp edges, high saturation, minimal bleed |
| Kozo | Absorbent, fibrous | Softer edges, ink pulled into fibers, slightly muted |
| Torinoko | Warm, lightly sized | Ink sits on surface more, warm color temperature |
| Gampi | Ultra-smooth, sized | Sharpest edges, most saturated, cleanest prints |
| Unryu | Dramatic fibers disrupt ink | Ink bleed follows fiber direction, uneven absorption |
| Kakishibu | Tanned, partially resistant | Uneven absorption, ink pools in untreated areas |

Implementation: extend `PAPER_TYPES` with `bleedRadius`, `saturationMul`, `edgeSharpness`, `impressionFalloff`, `fiberBleedDirection`. Wire into SVG filter generation and post-processing. Honor the existing `inkOpacity` value (currently defined but unused).

#### 2. Moisture / Sizing (integrated into profiles)

In real mokuhanga, paper is dampened before printing. Moisture level is one of the printer's primary controls — it determines how ink flows, bleeds, and saturates. Rather than exposing this as a separate slider, moisture behavior is *encoded into the three style profiles* as a coherent package:

| Profile | Moisture | Rationale | Rendering effect |
|---------|----------|-----------|-----------------|
| 浮世絵 Ukiyo-e | Medium, controlled | Commercial printers needed consistency across hundreds of impressions | Moderate bleed, strong saturation, clean edges |
| 新版画 Shin-hanga | High, deliberate | Watanabe's printers used generous dampening for soft bokashi and atmospheric depth | More bleed, softer edges, colors interact at boundaries |
| 創作版画 Sōsaku-hanga | Low / variable | Artist-printers experimented with drier paper for raw textural effects | Minimal bleed, uneven absorption, paper texture visible through ink |

Implementation: moisture becomes a set of derived parameters (`bleedRadius`, `absorptionRate`, `edgeSoftness`) that differ per profile. The user picks "Shin-hanga" and gets correct moisture behavior implicitly — no need to understand the underlying physics.

#### 3. Color Overprinting / Transparency

In real mokuhanga, colors are printed sequentially — lightest to darkest, one block per color pass. Where two color areas overlap, the earlier pigment shows through the later layer. Mokuri currently renders all elements simultaneously with no color interaction at overlaps.

This matters most where:
- A foreground element crosses a midground element (e.g., branch over mountain)
- Atmosphere gradients underlie element zones
- Multiple impressions build color density

Implementation direction: model z-order as print-order, apply transparency/blending at overlap regions based on pigment opacity (first pass more transparent, later passes more opaque). Could use the block-layer grouping concept from #4.

#### 4. Layer-Based Brush Variation

In real mokuhanga, the brush applies ink to an entire block, not individual elements. Currently brush variation is per-element, which creates unrealistic boundaries between adjacent elements. The fix: group elements by depth layer and apply a single coherent brush variation pattern across all elements in the same layer.

**Complexity:** `suggestedLayer` alone isn't sufficient. What shares a block depends on z-order, color proximity, and occlusion — not just element type. A composition-aware runtime calculation is needed.

This also connects to moisture: brush ink distribution is affected by how wet the paper is, how much pigment the brush carries, and how the baren distributes pressure. All four of the Big Four interact with each other.

### Supporting Improvements

These are lower-impact individually but contribute to the overall quality:

- **Consistent grain direction** — Wood grain is currently random. Real blocks have directional grain that interacts coherently with carved areas. A per-composition grain angle would unify texture.
- **Baren type as material choice** — Disk baren (circular marks), ball baren (broader pressure), flat baren (even). Could sit alongside paper/ink as a Print Studio material choice.
- **Adaptive perturbation** — More aggressive size-scaling so small elements get less wobble automatically.
- **Luminance bokashi** — Radial fade for light-emitting elements (lanterns, moon, water reflections). Essential for Tsukiyo pack, useful for Core.
- **Spatially-coherent brush** — Replace random opacity with baren-path-aware pressure distribution (circular from center outward).
- **Bokashi + paper interaction** — Per-zone gradient bokashi enhanced with paper-absorption characteristics in the print output.
- **Block wear / edition** — Progressive edge softening across prints in an edition. Connects to presentation layer edition numbering.

### Workspace-to-Print Fidelity

A cross-cutting concern: how close is the workspace preview to the final print? Currently they're very different experiences. Options:
- "Soft proof" mode in the workspace showing approximate ink/paper effects
- Progressive rendering (quick preview → full quality on demand)
- Profile-aware thumbnails in the gallery

### Performance

- **Web Worker threading** — offload rendering for non-blocking print pulls on large compositions
- **Canvas resolution optimization** — ensure output holds up at high-res export
- **Caching** — paper texture and noise can be pre-computed and cached per paper type

### Priority Order

1. Paper-influenced ink behavior + moisture-in-profiles (these are tightly coupled)
2. Layer-based brush variation (fixes the worst current artifact)
3. Color overprinting (makes compositions feel layered, not flat)
4. Supporting improvements (grain, baren, perturbation, luminance bokashi)
5. Performance + workspace fidelity

---

## Future Direction (pre-2.0)

### Near-term
- **Profile user choice** — expose the 3 profiles in the Print Studio panel for production users (currently dev-only). This is the next step once values are fully dialed in.
- **Per-profile icon/visual identity** — help users understand the aesthetic difference without pulling a print.
- **Profile-aware thumbnails** — gallery thumbnails could hint at which profile was used.

---

## File References

- `print-engine.js` — Main rendering pipeline, defaults, perturbation, all post-processing
- `index.html` ~line 12125 — Print Tuning Console UI, profiles, slider builders
- `index.html` ~line 10200 — `pullPrint()` function that invokes the engine
- `ROADMAP.md` — Brief mention under "Print Engine" future section
