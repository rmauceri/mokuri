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
| Unryu | Dramatic fibers disrupt ink | High isotropic bleed, most muted, softest edges |
| Kakishibu | Tanned, partially resistant | Uneven absorption, strong warmth, subdued ink |

##### Implementation Plan (v1)

**Scope:** Uniform canvas-wide post-processing. Elements, atmosphere (sky/ground/mist), and carve stroke boundaries all respond to paper properties through the same pipeline — no per-element branching needed. Carve strokes create ink-to-paper boundaries; paper-influenced bleed/edge sharpness naturally affects those boundaries at zero additional cost.

**New PAPER_TYPES properties** (added to each paper definition in index.html):

| Property | Purpose | Range |
|----------|---------|-------|
| `bleedMul` | Multiplier on ink bleed radius and opacity | 0.3–1.5 |
| `saturationMul` | Multiplier on color saturation retention | 0.85–1.1 |
| `edgeSharpness` | Multiplier on edge darkening weight | 0.5–1.5 |
| `absorptionRate` | Scales absorption patch density and strength | 0.4–1.6 |
| `warmthMul` | Multiplier on warm color shift in muting | 0.7–1.6 |

Proposed values (start conservative, tune by eye):

| Paper | bleedMul | saturationMul | edgeSharpness | absorptionRate | warmthMul |
|-------|----------|---------------|---------------|----------------|-----------|
| Hosho | 0.5 | 1.05 | 1.2 | 0.6 | 0.8 |
| Kozo | 1.3 | 0.92 | 0.7 | 1.4 | 1.2 |
| Torinoko | 0.7 | 1.0 | 1.0 | 0.8 | 1.4 |
| Gampi | 0.3 | 1.1 | 1.5 | 0.4 | 0.7 |
| Unryu | 1.5 | 0.88 | 0.5 | 1.6 | 1.0 |
| Kakishibu | 0.9 | 0.85 | 0.8 | 1.2 | 1.6 |

Kozo (the default paper) has multipliers closest to current behavior to minimize surprise for existing compositions.

**Code changes required:**

1. **Fix unused `inkOpacity`** — Replace hardcoded `0.92 * inkLoad.opacityMul` with `paperType.inkOpacity * inkLoad.opacityMul`. Paper's `inkOpacity` becomes the base, ink load multiplies on top.

2. **`applyInkBleed`** — Scale blur radius and composite opacity by `paperType.bleedMul`.

3. **`applyColorMuting`** — Scale saturation factor by `paperType.saturationMul`, warm shift by `paperType.warmthMul`.

4. **`applyInkAbsorption`** — Scale patch count and per-patch strength by `paperType.absorptionRate`.

5. **Edge darkening (in SVG render)** — Scale `edgeWeight` by `paperType.edgeSharpness`.

6. **Wobble reduction for sized papers** — Slight wobble reduction when `edgeSharpness > 1.0` (reinforces "clean print" feel for Gampi/Hosho).

**Explicitly deferred (not v1):**

- **Directional fiber bleed** — CSS `blur()` is isotropic only. Anisotropic blur requires stretch-blur-unstretch or two-pass convolution. Adds complexity for uncertain visual payoff. Unryu and Kozo both have fiber orientation but we model this as higher isotropic bleed for v1. Revisit if uniform bleed doesn't capture enough of the fibrous character.
- **Carve stroke seepage** — Ink actively creeping into carved grooves on absorbent papers. Distinct from edge bleed at carved boundaries (which v1 gets for free). Would require modifying `carveStrokeRenderData()` which is performance-sensitive.
- **Impression-specific paper behavior** — e.g., second impression on absorbent paper sits differently. The baren/impression system needs broader rethinking before adding paper interaction to it.
- **Print style profiles in the multiplier chain** — Paper × ink load are the two creative knobs for now. If profiles are exposed later, they layer on top. Paper alone should produce satisfying differentiation without profiles.

##### Evaluation Tests

1. **Same composition, six papers** — Pull identical print on all six. Gampi should look noticeably sharper/more saturated than Kozo; Unryu should be softest; Kakishibu warmest.

2. **Detail element test** — Highly-carved element (level 2, many fine strokes). On Gampi: strokes crisp and readable. On Kozo/Unryu: strokes soften slightly. Validates `edgeSharpness` magnitude.

3. **Bokashi gradient test** — Element with directional bokashi. On absorbent papers: transition more diffuse. On sized papers: transition stays crisp. Watch for absorption patches disrupting gradients too aggressively.

4. **Light ink + absorbent paper (Unryu)** — Should produce the most "washed out" result. Validates multipliers compound correctly without clipping.

5. **Heavy ink + sized paper (Gampi)** — Should produce the richest, cleanest result. Validates multipliers don't stack above 1.0.

6. **Background carve strokes** — Carve lines on paper background should show edge behavior matching the paper (crisp on Gampi, soft on Kozo).

##### Design Decisions

- **No user toggle** — Paper influence is always on. If you pick a paper, you get its character. This is how materials work.
- **Atmosphere included** — Sky/ground/mist are "the uncarved block being printed." They receive the same paper treatment as elements for consistency.
- **No backward-compatibility versioning** — User base is small enough that changed appearance of existing compositions is acceptable.
- **Tuning approach** — Start with conservative multiplier ranges. Widen only when visual difference isn't perceptible enough. Easier to increase contrast than to walk it back.

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

---

## Known Issue: Asymmetric Block Edge (feDisplacementMap Boundary Artifact)

### Problem

The print's irregular "block edge" — where ink meets paper at the print boundary — only appears on the **top and right** edges. The bottom and left edges are clean/straight. This is visible on rectangular paper; on square paper, the effect is barely detectable at all.

The irregular edge looks authentic and desirable (natural ink-meets-paper feel), but the asymmetry is a cosmetic bug.

### Root Cause

The irregular edge is a **side effect** of the SVG `feDisplacementMap` filter ("wobble") applied to the atmosphere layer. Here's the chain:

1. The atmosphere (sky/ground gradients) is rendered as SVG paths filling the full viewport: `(0, 0)` to `(paperW, paperH)`.
2. The wobble filter (`feDisplacementMap` driven by `feTurbulence`) displaces every pixel by a random offset.
3. At content boundaries, if the displacement lookup points **outside** the `SourceGraphic`, the result is transparent — creating visible gaps that read as the irregular print edge.
4. **Chromium handles this asymmetrically.** At some viewport/content boundaries (top, right) it produces transparent pixels; at others (bottom, left) it clamps to the nearest source pixel. This is implementation-specific behavior — the SVG spec leaves out-of-bounds lookup undefined.

The effect varies by paper aspect ratio because `feTurbulence` pattern distribution interacts differently with the bounding box dimensions. The irregular edge appears on both square and rectangular paper, but only on the top and right sides.

### What Was Tried (and failed)

| Approach | Result |
|----------|--------|
| **Pad atmosphere paths** beyond viewport by `wobble` amount | Eliminates irregular edge on ALL sides (including the desirable top/right). No asymmetry, but no edge at all. |
| **Expand SVG viewport** with atmosphere at original coords (edges interior to viewport) | No change — filter SourceGraphic is bounded by element bbox, not viewport. |
| **Paper-colored frame** (even-odd path) with dedicated lower-frequency wobble filter on top | No visible effect — same asymmetric behavior persists. |
| **Canvas-based alternatives**: random polygon paths, sine-wave noise, pixel-level displacement | All produce a "digital" look — triangle cuts, sinusoidal patterns, or shallow uniform notches. None match the organic quality of feTurbulence. |

### Why It's Hard

- The `feDisplacementMap` boundary behavior is **browser-specific** and not configurable via SVG attributes.
- The authentic look comes specifically from `feTurbulence` at content boundaries — replicating it in Canvas loses the organic character.
- SVG `<mask>` and `<clipPath>` elements don't accept filters on their children in Chromium, ruling out a filtered-mask approach.
- The filter operates on the element's **rendered bounding box**, not the SVG viewport, so viewport expansion has no effect.

### Possible Future Approaches

1. **WebGL/OffscreenCanvas post-processing**: Render the SVG at print size, then apply a custom displacement shader to all 4 edges in a separate pass. Could use the same turbulence algorithm as feTurbulence but with controlled boundary handling.

2. **Two-pass SVG trick**: Render atmosphere twice — once with wobble (for interior texture) and once without. Composite them so only the edge area uses the wobble pass. Would require careful masking that may hit the same browser limitations.

3. **Canvas `getImageData` + custom displacement**: After SVG render, read a band of pixels at each print edge and apply displacement using a pre-generated noise texture. The displacement would be the feTurbulence output (extractable via a separate SVG render), applied manually. This avoids Canvas path-drawing and works at the pixel level.

4. **Accept the asymmetry**: In real mokuhanga, the baren direction and print-pulling angle naturally create directional edge character. Two rough edges / two clean edges has physical precedent. Document it as intentional.

5. **Firefox rendering**: Test whether Firefox handles feDisplacementMap boundaries differently. If it produces symmetric edges, could detect browser and adjust approach.

### Current State

The code is reverted to the natural asymmetric behavior. The irregular edge appears on top and right (caused by atmosphere content touching viewport boundary + Chromium's directional clamping). `applyBlockEdge()` in `print-engine.js` is a no-op placeholder. The `applyOrganicEdge()` function provides a subtle fade at all 4 edges (unrelated to this issue).

### Key Code Locations

- `print-engine.js` line ~230: wobble filter definition (`feDisplacementMap`, scale, turbulence params)
- `print-engine.js` line ~270: atmosphere layer paths (sky/ground filling viewport exactly)
- `print-engine.js` line ~360: atmosphere group wrapped in `filter="url(#wobble)"`
- `print-engine.js` line ~1190: `applyBlockEdge()` — no-op placeholder
- `print-engine.js` line ~1200: `applyOrganicEdge()` — subtle paper-color fade at edges

---

## Known Issue: Print Interior vs. Margin Color Mismatch

### Problem

Even with no atmosphere and no elements, the print interior (the `paperW × paperH` area where ink is applied) looks subtly different from the paper margins around it. This is most visible with sparse compositions — a single element on open paper, or a white/near-white zone color.

### Root Cause

Post-processing (color muting, ink absorption, baren pressure, wood grain, fine noise) runs on the **print canvas** before the presentation wrapper is applied. When `applyPresentation()` builds the final output, it draws a fresh paper texture on the full paper + margin area, then composites the post-processed print canvas on top with `multiply` blend.

The margins therefore receive only raw paper texture. The print interior receives paper texture *plus* all post-processing passes. Even in areas with no ink (open paper, white zones), post-processing subtly warms, mutes, and adds absorption variation to those pixels — diverging from the fresh margin paper.

### Why It's There

This is structural: post-processing was designed to run on the ink rendering canvas, not the final presentation. Applying it to the full presentation canvas (margins and all) would require restructuring the pipeline order.

### Reasonable Arguments for Current Behavior

- In real mokuhanga, the printed area *does* look different from the raw paper outside the print — the baren pressure, moisture from the ink, and pigment residue all affect the paper surface even in uncarved areas.
- The effect is subtle and generally desirable: the print area reads as "the block was pressed here," which is correct.
- For most compositions (rich atmosphere, multiple elements), the difference is imperceptible.

### When It Becomes Noticeable

- **Sparse compositions** — single element on open paper with no atmosphere
- **White / near-white zone colors** — white renders as paper showing through (multiply × white = paper), so the warm post-processing on "white" zones is the raw paper, post-processed, against unprocessed margin paper
- **Kakishibu paper** — dark base makes the mismatch more visible

### Possible Fix

Run the full post-processing pass on the final presentation canvas (after compositing the print) rather than on the raw print canvas. Would require:
1. Moving `applyColorMuting`, `applyInkAbsorption`, `applyBarenPressure`, `applyWoodGrain`, `applyFineNoise` from `print()` to `applyPresentation()`
2. Ensuring the presentation canvas context has `willReadFrequently: true`
3. Adjusting any baren pressure logic that skips paper-colored pixels (the margin paper would also pass through it)

Low priority — only worth addressing if sparse / minimalist compositions become a meaningful use case.
