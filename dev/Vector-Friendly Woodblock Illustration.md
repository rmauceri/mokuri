# Mokuhanga Element Image Spec
## For AI Image Generation → Element Forge → Mokuri

## Purpose

This spec defines how to generate raster images that will be processed by the Mokuri Element Forge into multi-zone SVG elements compatible with the mokuhanga (woodblock print) workflow. The Element Forge traces color regions into separate SVG fill paths, each mapped to an independently inkable color zone.

**The entire pipeline depends on the source image being structured correctly.** A well-formed image produces a 4-zone, 3-level element in minutes. A poorly-formed image produces unusable output regardless of forge settings.

---

## Two Routes into the Forge

Both workflows produce the same forge-compatible SVG paths. The image requirements in this document apply to **Route B** (PNG trace). Route A shares the same color zone model but has additional SVG-specific shape constraints — see `element-image-prompt.md`.

**Route A — SVG Direct**
Generate SVG from Recraft.ai using "Flat vector" or "Icon" style. The forge imports SVG paths directly, skipping raster tracing. Best for: bold stencil-style subjects, kamon aesthetic, strong geometric confidence in the source. Recraft can be less reliable for organic forms (birds, complex flowers) — it often over-geometrizes or adds hidden overlapping strokes.

**Route B — PNG → SVG Trace (this document)**
Generate PNG from any AI image generator (Midjourney, DALL-E, Firefly, Stable Diffusion). The forge's built-in Potrace pipeline converts the PNG to Bezier SVG paths per color zone. Best for: organic contours, natural subjects, when you want the most realistic mokuhanga silhouette. More control over organic form quality at the generation step.

**Why Route B produces better organic results**: Potrace traces each flat color zone as a clean filled Bezier silhouette. Because Bezier curves approximate organic edges naturally, subjects with flowing contours (birds, flowers, fish) trace cleanly when the source image has flat colors and hard edges. The number of Bezier path commands stays low (~8–25 per zone), which is critical — the print engine's ink perturbation applies per-command, so fewer commands = more organic wobble, more commands = high-frequency noise.

---

## How Mokuri Elements Work (Context for Image Design)

A Mokuri element has:
- **Color zones** (3–5): semantic regions like `body`, `marking`, `fin`, `detail` — each gets its own color in the palette
- **Carve levels** (3): progressive detail revelation
  - **Block**: solid silhouette (one fill shape)
  - **Shape**: internal color regions as separate fills per zone
  - **Detail**: shape content + fine boundary strokes between zones
- **Fill paths**: closed shapes filled with a zone color (the colored regions)
- **Stroke paths**: thin lines representing carved grooves (boundaries, texture)

**Critical insight**: In mokuhanga, color regions meet edge-to-edge. The thin groove between them is carved into the wood block — it is NOT drawn as an outline. The image should show the color regions, not the grooves.

---

## Core Requirements

### 1. Background Removal (Required)

Use ONE of these approaches — either works:

**Option A: Chroma-Key Green**
- **Solid `#00FF00` (pure green) background** filling the entire canvas
- No green (`#00FF00`) anywhere in the subject

**Option B: Transparent PNG**
- Fully transparent background (alpha = 0)
- Subject on a transparent field with no semi-transparent edge pixels
- Save as 32-bit PNG with alpha channel

For both options:
- Subject is the ONLY non-background content
- No shadow, glow, or halo around the subject
- Subject should fill roughly 50–70% of the canvas area

### 2. Flat Color Regions (Required)

Each visual region of the subject must be a **single, uniform flat color**:

- ✅ A fin that is entirely one shade of gray (`#9E9E9E`)
- ❌ A fin that gradates from light gray to dark gray
- ✅ An orange marking that is one solid orange (`#E85D2C`)
- ❌ An orange marking with highlights, shadows, or color variation

**Every distinct flat color in the image will become a separate color zone in the element.** This is the fundamental mapping. The number of colors = the number of zones.

### 3. Exactly 3–5 Flat Colors (Required)

The subject must use exactly **3 to 5 distinct flat colors** (excluding the background). **4 is the sweet spot** — it maps cleanly to the forge's semantic zone roles:

| Zones | Zone Roles | Example (Koi) |
|-------|------------|---------------|
| 3 | body, marking, detail | cream, orange, dark gray |
| **4** | **body, marking, accent, detail** | **cream, orange, gray, dark** |
| 5 | body, marking, accent, fin, detail | cream, orange, pale gold, gray, dark |

**How the forge assigns zones automatically:**
- **body** (palette slot 0) = the color covering the largest area
- **detail** (palette slot 3) = the darkest color — used for small features like eyes, tips, gill lines
- **marking / accent** (palette slots 1, 2) = remaining colors, ordered by area

**Rules:**
- No two colors should be close enough to confuse (maintain ΔE > 30 in Lab space)
- No near-black and near-dark-gray as separate colors (hard to segment)
- White/cream counts as a color (it's typically the body zone)
- **The darkest color must be reserved for small accent features** (eye, tips, fine lines) — not large areas. If the darkest color covers a large area, the forge's zone assignment breaks down.

### 4. NO Outlines (Critical)

**This is the single most important rule.** The image must have **zero drawn outlines**.

In mokuhanga printing:
- Color regions are printed from separate carved blocks
- Where two blocks meet, a thin unprinted gap (the carved groove) naturally forms
- This groove IS the "outline" — it is a byproduct of carving, not a drawn element

Therefore:
- ✅ An orange patch directly abutting a cream body — the boundary IS the visual edge
- ❌ A dark outline around the orange patch separating it from the body
- ✅ Color regions sharing precise pixel-level edges
- ❌ A 3–10px dark border around the entire subject

**The forge will extract boundary strokes automatically from where color regions meet.** Any drawn outlines in the source image will be traced as heavy filled regions that blur in the print engine and waste an entire color zone on what should be a carved groove.

### 5. Clean Edges Between Colors (Required)

Where two color regions meet, the transition should be **as sharp as possible**:

- ✅ One pixel is orange (#E85D2C), the adjacent pixel is cream (#F5F0E0) — clean boundary
- ❌ A wide (4px+) feathered gradient between orange and cream
- ✅ Clean, hard-edged boundaries like a stencil or screen print
- ❌ Soft, airbrushed edges like watercolor illustration

**Note on anti-aliasing**: Minor 1–2px anti-aliasing at color boundaries is tolerable — the forge can handle slight edge softness. What destroys output is heavy feathering (4px+) or gradient transitions between regions. Aim for stencil-sharp, accept that slight softening may occur.

### 6. No Gradients, Shading, or Texture (Required)

Within each color region:
- No lighting or shadow gradients
- No noise, grain, or stipple texture
- No soft highlights or specular spots
- No color variation of any kind

The region should look like it was filled with a paint bucket tool — perfectly uniform.

---

## Style and Aesthetic

### 7. Mokuhanga / Ukiyo-e Sensibility (Not Modern Vector/Logo)

The correct visual reference is traditional Japanese woodblock prints:

**DO reference:**
- Hokusai, Hiroshige, Hasui Kawase — flat color areas, simplified forms
- Kacho-e (bird-and-flower prints) — elegant contours, minimal internal detail
- Shin-hanga — simplified naturalism with clear regional color structure

**DO NOT reference:**
- Sports mascot / logo illustration (heavy outlines, aggressive shading)
- Modern flat vector illustration (geometric, outlined)
- Anime / manga (line-dependent illustration)
- Sticker / die-cut art (always has thick outlines)

The aesthetic difference:
- **Mokuhanga**: shapes define the form; color regions meet; beauty in elegant contours
- **Logo art**: outlines define the form; color is secondary; beauty in graphic boldness

### 8. Shape-First Anatomy

Every visual component should be a **fillable closed shape**, not a line:

- A fish fin = one solid gray shape with an elegant curved contour
- A bird's beak = one solid dark shape, possibly two (upper/lower mandible)
- A flower petal = one solid color shape
- An eye = a small solid dark shape (dot or almond)

Features defined by lines in real life (whiskers, individual feathers, gill lines) should either:
- Be omitted entirely (the forge adds carved detail strokes at the boundary level)
- Be represented as narrow filled shapes if they are large enough (>4% of subject area)

### 9. Controlled Abstraction and Simplification

Target **8–20 total shape regions** in the subject (note: shapes, not colors — a single color like orange may form multiple separate shapes such as spots, patches, etc.):

- Fewer shapes = better for clean forge output
- Each region should be visually meaningful at thumbnail size
- Eliminate micro-detail that won't survive tracing (scales, individual feathers, whiskers, fur texture)

**Think in printmaking terms**: each color region will be carved as a separate area on a woodblock. If you wouldn't carve it separately, don't make it a separate region.

### 10. Smooth, Flowing Contours

The outer boundary and internal region boundaries should have:
- Smooth, graceful curves (like brush-drawn shapes)
- No jagged, angular, or geometric edges (unless the subject is architectural)
- No extremely thin features (nothing less than ~3% of subject width)
- No tiny disconnected shapes (specks, dots smaller than ~2% of subject area)

These produce cleaner SVG paths with lower node counts.

---

## Technical Specifications

### 11. Image Dimensions and Format

- **Resolution**: 800×600 to 1200×800 pixels (landscape subjects) or equivalent for portrait
- **Format**: PNG (lossless — JPEG compression creates color artifacts that break segmentation)
- **Bit depth**: 8-bit RGB for chroma-key, or 32-bit RGBA for transparent background

Very large images (2000px+) don't produce better results — they increase tracing time and generate more micro-artifact paths. Very small images (<600px) lose boundary precision between color regions.

### 12. Subject Composition

- Subject centered in frame
- Subject fills 50–70% of canvas area
- No rotation needed — the forge handles element orientation
- Natural pose preferred — swimming, standing, perching, growing (not action poses with extreme foreshortening)
- **Single subject only** — one fish, one bird, one flower, one building

### 13. Color Value Guidelines

Choose colors with high mutual contrast. Example palettes:

**Fauna (koi, crane, butterfly):**
| Zone | Role | Example Hex | Notes |
|------|------|-------------|-------|
| body | largest area | `#F5F0E0` | cream/warm white |
| marking | mid-size accents | `#D4622B` | warm orange or red |
| fin/wing | secondary structure | `#8A8A8A` | neutral mid-gray |
| accent | small focal points | `#2D2D2D` | near-black for eye, tips |

**Flora (flowers, trees, leaves):**
| Zone | Role | Example Hex |
|------|------|-------------|
| petal | primary surface | `#E8A0B0` |
| leaf | secondary structure | `#5A7A4A` |
| stem | connecting structure | `#6B5B3A` |
| center | focal point | `#C4A030` |

**Structures (temple, bridge, house):**
| Zone | Role | Example Hex |
|------|------|-------------|
| wall/body | main mass | `#C4B8A0` |
| roof | dominant feature | `#5A4A3A` |
| beam/frame | structural lines | `#3A3A3A` |
| accent | doors, windows | `#8A4A2A` |

**Vessels and Ceramics (suiban, tsubo, hanaire, kenzan):**
| Zone | Role | Example Hex |
|------|------|-------------|
| body | main glaze surface | `#C4B890` |
| accent | rim, band, or glaze drip | `#7A5830` |
| interior | opening / water surface | `#7A8A9A` |

Vessels typically use only 3 zones. The interior zone — the water surface in a moribana basin, the dark opening of a vase — is often the most expressive zone for bokashi (gradient) treatment. Keep the body glaze color clearly distinct from the accent and interior.

---

## Carve-Level Thinking

Design the image so that color regions naturally group into carve levels:

### Block Level (Silhouette)
- The outermost boundary of the ENTIRE subject
- If you squint and see one shape — that's the block
- The forge extracts this automatically from the chroma-key silhouette

### Shape Level (Color Structure)
- The distinct color regions WITHIN the silhouette
- Body, marking, fin, accent as separate flat fills
- This is what the color segmentation pipeline produces
- Each region becomes independently colorable in Mokuri's ink system

### Detail Level (Carved Grooves)
- The **boundaries between color regions** become thin stroke paths
- The forge extracts these automatically from where clusters meet
- NO detail needs to be drawn in the source image
- Fine carved texture (hatching, stippling) is added by the user in Mokuri's carve tools

**Key insight**: The source image only needs to define block + shape levels. Detail level is derived automatically. Don't try to include carved groove lines in the image — they'll be misinterpreted as filled regions.

---

## Anti-Patterns (What NOT to Generate)

### ❌ Thick Outlines (Logo Style)
The #1 failure mode. A dark outline around the subject or between color regions:
- Gets traced as a wide filled region, consuming an entire zone
- Prints as a blurry, heavy band instead of a crisp carved groove
- Cannot be separated from adjacent colors by the segmentation pipeline

### ❌ Gradients / Shading
Gradients within a color region create continuous color variation that:
- Splits into multiple noisy clusters instead of one clean zone
- Produces jagged, fragmented trace paths
- Creates zones with no clear semantic meaning

### ❌ Anti-Aliased Color Boundaries
Feathered edges between colors create a halo of blended pixels that:
- Don't belong to either adjacent cluster
- Produce extra micro-zones or noisy boundaries
- Result in fuzzy, doubled trace paths

### ❌ Fine Line Detail (Hatching, Feathers, Scales)
Individual strokes or texture marks:
- Are too small to trace reliably
- Create hundreds of tiny fill fragments
- Overwhelm the element with noise paths

### ❌ Multiple Subjects or Scene Context
Background elements, water, ground, sky:
- Should not be in the image (the green background replaces all context)
- Mokuri handles atmosphere and scene composition separately
- Each element image = one subject only

### ❌ Near-Duplicate Colors
Two colors that are visually similar (e.g., #888 and #999):
- Confuse the color segmentation algorithm
- Produce unstable cluster assignments
- Choose colors with obvious, unmistakable differences

---

## Quality Checklist

Before sending an image to the forge, verify:

- [ ] Green (#00FF00) background OR fully transparent PNG
- [ ] Exactly 3–5 flat colors in the subject (4 is ideal)
- [ ] Each color region is perfectly uniform (zero variation)
- [ ] No outlines of any kind (not even thin ones)
- [ ] Clean edges between color regions (minimal anti-aliasing OK, no heavy feathering)
- [ ] No gradients, shading, highlights, or shadows
- [ ] No texture, grain, or noise
- [ ] Smooth, elegant contours (mokuhanga aesthetic)
- [ ] Darkest color used only for small features (eye, tips, fine lines)
- [ ] Subject fills 50–70% of canvas
- [ ] PNG format, 800–1200px wide
- [ ] Single subject, no background elements

---

## Lessons from Practice

These insights come from processing 30+ elements through the forge pipeline. Each one corresponds to a real failure mode encountered.

**The darkest color rule is absolute.** The forge auto-assigns zones by pixel area (body = largest area) and by tone (detail = darkest color). If the darkest color covers a large area — a bird's dark back, a shadow-heavy wing — zone assignment breaks: the body zone gets mapped to a small feature and the dark mass takes the body slot. The result is an element where zones are inverted and palette expression is wrong. Keep the darkest color strictly for eyes, tips, fine lines, and beak ends. It should cover less than 8% of subject pixels.

**Hard edges save hours of forge cleanup.** Feathered edges between color regions produce a ring of ambiguous pixels that K-means assigns inconsistently, creating jagged Potrace artifacts along zone boundaries. Stencil-sharp transitions (one pixel is color A, the adjacent pixel is color B) produce clean single-path zone boundaries with no artifacts. Any anti-aliasing beyond 1–2px creates noticeable noise in the SVG output.

**Fewer zones is always better.** 4 zones is the sweet spot. 5 is manageable. 6+ introduces segmentation instability that requires significant forge cleanup. When considering whether to separate two similar colors into separate zones — don't. Let the carved boundary between them do the work. The user can always carve a groove between regions in Mokuri.

**Subject fill percentage matters for trace quality.** A subject filling less than 40% of the canvas produces coarse Bezier approximations — not enough pixel resolution to capture smooth organic contours. A subject at 60–70% fill produces the best Potrace output. Very large subjects (>85%) create edge-clipping issues.

**Single subject per image, always.** A branch behind a bird, a water surface beneath a heron — these extra elements create zones the forge can't distinguish from the primary subject's zones. The forge will assign a zone to the branch and waste a palette slot on environmental context. All environment is added in Mokuri's composition step.

**Potrace needs binary masks, not the full PNG.** The forge converts each flat color to a white-on-black binary mask and traces that mask with Potrace separately per zone. Background contamination — slightly off-green pixels at edges, anti-aliased halos — gets included in zone masks and creates fringe artifacts. Use exact `#00FF00` chroma-key green (no off-by-one values) or fully transparent alpha PNG.

---

## Mental Model

> "Paint this as if you are preparing color separations for a woodblock print. Each color is a separate carved block. The blocks print edge-to-edge with no outlines. Use 4 flat colors on a green (#00FF00) background. The form should be elegant and simplified, like a Hasui Kawase nature study — not a sports logo or sticker."

---

## Prompt Templates

### Full Template (for models that respond to detailed instruction)

```
Create a [subject] illustration for Japanese woodblock print (mokuhanga) color separation.

CRITICAL REQUIREMENTS:
- Solid #00FF00 green background filling the entire canvas (or fully transparent PNG)
- Exactly [4] flat colors in the subject: [list specific hex colors and their roles]
  - Largest area color = body zone
  - Darkest color = detail zone (use ONLY for small features: eye, tips, fine lines — under 8% of pixels)
  - Remaining colors = marking/accent zones
- Each color region is PERFECTLY UNIFORM — zero gradients, zero shading, zero texture
- NO outlines of any kind — color regions meet edge-to-edge with clean boundaries
- Minimize anti-aliasing between color regions — aim for stencil-sharp edges

STYLE: Traditional mokuhanga / shin-hanga aesthetic. Elegant simplified forms,
smooth flowing contours. NOT logo art, NOT anime, NOT vector illustration with outlines.

COMPOSITION: Single [subject] centered on green background, filling ~60% of canvas.
Natural [pose/orientation]. [Specific anatomical/structural notes for this subject.]

FORMAT: PNG, 1024x768, 8-bit RGB.
```

### Short Template (for models that respond better to concise prompts)

```
Japanese woodblock print [SUBJECT AND POSE]. Solid #00FF00 background.
4 flat zones: [HEX] [zone 0 — largest area, body], [HEX] [zone 1 — marking],
[HEX] [zone 2 — accent], [HEX] [zone 3 — small details only: eye, tips, fine lines].
ZERO outlines. ZERO gradients. Hard stencil edges between zones. Single subject, ~60% of canvas.
Mokuhanga / shin-hanga. PNG 1024×768.
```

---

## Worked Example: Koi Fish

### Target Zone Map
| Zone | Color | Hex | Area |
|------|-------|-----|------|
| body | warm cream | `#F0E8D0` | ~50% — main body surface |
| marking | rich orange | `#D4622B` | ~15% — head cap, back patches |
| fin | cool gray | `#8A8A8A` | ~20% — pectoral, dorsal, tail fins |
| accent | warm dark | `#3A2A1A` | ~15% — back ridge, eye, tail tip |

### What the Image Should Look Like
- Cream body shape — smooth curved outline, perfectly flat fill
- Orange patches ON the body — flat, hard-edged against the cream
- Gray fins — flat shapes extending from body, hard-edged
- Dark accent areas — small flat shapes (eye dot, dorsal ridge, tail tip)
- All shapes share precise boundaries — no gaps, no outlines, no blending
- Green background everywhere the fish isn't

### What the Forge Does With It
1. Chroma key → removes green → extracts full fish silhouette (block level)
2. Color cluster → identifies 4 clusters (cream, orange, gray, dark)
3. Per-cluster trace → 4 separate fill paths, one per zone
4. Boundary extraction → stroke paths where zones meet (detail level)
5. Assembly → 3-level element with 4 independently inkable zones

### What the User Gets in Mokuri
- Place element → adjust carve level to reveal detail
- Switch palette → all 4 zones recolor independently
- Ink workbench → fine-tune each zone's color from the palette
- Carve tools → add personal texture (hatching, gouges) on top
- Print → authentic mokuhanga texture, clean color separation
