# Vector-Friendly Woodblock Illustration Spec (for SVG / Carving Workflows)

## Goal

Generate illustrations that:

* Preserve the aesthetic of traditional woodblock prints (e.g., kacho-e / mokuhanga)
* Are optimized for **clean vectorization into SVG paths**
* Support **layered carving workflows** (e.g., 2–4 discrete carve levels)
* Avoid post-processing complexity (node explosion, messy traces)

---

## Core Principles

### 1. Shape-First Design

* Every visual element should be a **closed, fillable shape**
* Avoid reliance on strokes/lines to define structure
* Prefer **bold silhouettes and internal regions** over fine linework

---

### 2. Limited and Intentional Complexity

* Target **~8–20 total shapes** for the primary subject
* Each shape should be:

  * Visually meaningful
  * Structurally independent
* Eliminate micro-detail that does not contribute to form at a distance

---

### 3. Carve-Level Thinking (Layered Composition)

Design as if each region will be carved separately:

#### Base Layer (Level 1)

* Primary silhouette
* Largest continuous shape
* Defines overall form

#### Mid Layer(s) (Level 2)

* Secondary masses
* Major internal divisions (e.g., limbs, wings, large pattern areas)

#### Detail Layer (Level 3)

* Small accents
* High-contrast features
* Focal details

> Rule: Every shape should plausibly correspond to a separate “block” in a printmaking workflow.

---

### 4. Fill Over Line

**Do:**

* Use solid filled regions
* Define boundaries with shape edges

**Avoid:**

* Thin strokes
* Sketch lines
* Hatching / cross-hatching
* Decorative contour lines

> Lines should only exist if they can be safely expanded into shapes.

---

### 5. High-Contrast Region Separation

* Ensure adjacent regions have **clear visual boundaries**
* Avoid gradients and soft transitions
* Prefer:

  * Hard edges
  * Distinct tonal blocks

---

### 6. Controlled Abstraction

Favor:

* Stylized forms
* Simplified anatomy
* Rhythmic, repeating shapes

Avoid:

* Hyper-realism
* Dense texture
* Irregular, noisy edges

> Think “designed shapes,” not “observed detail.”

---

### 7. Vectorization-Aware Geometry

Shapes should:

* Be **closed paths**
* Avoid tiny gaps or overlaps
* Minimize:

  * Sharp micro-zigzags
  * Extremely thin features
* Maintain:

  * Smooth curves
  * Moderate node counts

---

### 8. Eliminate Non-Essential Elements

Avoid:

* Background textures (paper grain, noise)
* Environmental detail (unless essential and simplified)
* Fine decorative elements that won’t survive tracing cleanly

If included:

* Keep them as **large, simple shapes**

---

### 9. Consistent Region Hierarchy

* Group related forms into unified shapes
* Avoid fragmenting a single conceptual region into many pieces
* Maintain clear parent-child relationships between shapes

---

### 10. Chroma-Key Background (Required)

* Use a **solid `#00FF00` (pure green) background**
* The subject must be the ONLY non-green content in the image
* No green (`#00FF00`) should appear anywhere in the subject itself
* This enables automatic background removal and silhouette extraction during tracing

> The green background acts as a chroma key — the tracing tool removes it automatically to isolate the subject silhouette.

---

### 11. Color Strategy (Optional but Recommended)

* Use a **limited palette** (3–5 colors max, excluding the green background)
* Assign colors by carve level:
  * **Lightest tone** — block layer (the body/silhouette fill)
  * **Mid tones** — shape layer (internal divisions, secondary masses)
  * **Darkest tone** — detail layer (accents, fine features, focal points)
* Avoid:

  * Gradients
  * Transparency
* Prefer:

  * Flat fills
  * Reusable color regions

---

## Output Characteristics

A well-formed image should:

* Convert cleanly via vectorization tools (e.g., Image Trace, Potrace)
* Produce:

  * Low node counts
  * Minimal cleanup
* Result in:

  * Clearly separable SVG paths
  * Logical grouping for interaction or recoloring

---

## Anti-Patterns to Avoid

* Photorealistic rendering
* Excessive feathering, hair, or texture detail
* Stroke-based illustration styles
* Noisy or textured backgrounds
* Overlapping semi-transparent regions
* Extremely thin or fragile geometry

---

## Mental Model

> “Design this as if it will be carved into 3 physical blocks, inked separately, and assembled—then converted into editable vector paths. Place it on a pure green (#00FF00) background so the silhouette can be automatically extracted.”

---

## Optional Next Step

For fully optimized workflows:

* Skip raster entirely
* Generate **direct SVG path data**
* Pre-group shapes by carve level

---
