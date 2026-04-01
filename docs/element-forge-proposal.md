# Element Forge — Mokuri Element Design Tool

## Problem

Mokuri elements feel "cartoony" — outlines are too smooth and uniform, interior detail is sparse, forms lack the proportion and character of skilled woodblock art. The Element Design Guide establishes principles but can't bridge the skill gap between LLM-generated SVG paths and authentic mokuhanga aesthetics.

The current workflow (describe element → AI generates path data → manual iteration) produces elements that are structurally correct but artistically flat. Each element requires many revision cycles, and the results still lack the density, confidence, and organic character of traditional woodblock prints.

## Vision: AI-Curated Reference → Human-Drawn Element Pipeline

**Describe → Curate → Trace → Refine → Export**

Start from the style pack's element description. Copilot searches the web for candidate reference images of the actual subject — a real crane, a paper lantern, a mountain silhouette, a temple gate. The reference isn't necessarily a woodblock print; it's whatever best captures the subject's form, proportions, and character. The mokuhanga aesthetic emerges from *how you trace* in the Forge, not from the source material.

This creates a collaborative pipeline where AI handles curation (understanding descriptions, finding images, suggesting candidates) and humans handle artistry (drawing organic paths with Apple Pencil, making aesthetic judgments about simplification and detail).

## Proposed Workflow

### Step 0: Reference Curation (AI-assisted, outside the tool)
- Style pack document describes the element (subject, mood, key features)
- Copilot searches the web for candidate reference images matching that description
- Presents options: photos, illustrations, traditional art — whatever shows the subject clearly
- User selects the best candidate(s) — good angle, clear silhouette, appropriate detail level
- Multiple references can be useful (one for silhouette, another for surface detail)

### Step 1: Reference Import
- Paste a URL or drop an image file (photo, illustration, sketch, print — any source)
- Image displays as a background layer at reduced opacity
- User crops/positions to the desired element bounds
- Sets the target viewBox dimensions
- Can swap/add reference images at any point (e.g., switch to a detail reference for Level 2)

### Step 2: Auto-Trace (Block Level)
- One-click trace extracts major silhouette regions from the reference image
- Uses edge detection + path simplification to produce fill paths
- User assigns each traced region to a color zone (body, detail, accent, etc.)
- Adjustable threshold for trace sensitivity (fewer regions = simpler block, more = more zones)
- Output: block-level fill paths in Mokuri format

### Step 3: Shape Level — Structural Strokes
- Toggle to shape level view (block fills shown, strokes overlay)
- **Draw strokes by hand**: pen/touch drawing directly on the canvas over the reference image
- Stroke smoothing with Q-curve fitting (convert freehand polylines to clean quadratic Béziers)
- Adjustable curve fidelity (fewer control points = simpler, more = closer to hand-drawn line)
- Assign strokes to zones, set stroke widths
- Strokes automatically inherit all block paths (accumulation rule enforced by tool)

### Step 4: Detail Level — Fine Texture
- Toggle to detail level (block + shape shown, detail strokes overlay)
- Same hand-drawing tools, with thinner default stroke width
- **Hatching helper**: draw a single guide line, tool generates parallel hatch strokes along it (adjustable angle, spacing, length variation)
- **Texture stamp**: click to place common texture patterns (grass tufts, bark marks, scale pattern) that generate appropriate path data
- Accumulation from shape level automatic

### Step 5: Preview & Export
- Side-by-side preview: block / shape / detail at actual Mokuri rendering scale
- Preview with different palettes (ink mode simulation)
- Preview at different scales (how it looks small vs large on paper)
- Validation: path counts, zone coverage, accumulation check
- **Export**: generates the complete JavaScript element definition (copy to clipboard or append to file)

## Tool Architecture

### Browser-based (`dev/element-forge.html`)

Single HTML file in the `dev/` folder, matching the element-harness pattern. No build step, no dependencies beyond what's needed for tracing.

**Canvas layers (bottom to top):**
1. Reference image (adjustable opacity)
2. Block fills (colored by zone)
3. Shape strokes
4. Detail strokes
5. Active drawing layer (current stroke in progress)

**Drawing engine:**
- Pointer events for pen/touch/mouse input
- EMA smoothing on input points (same pipeline as Mokuri's carve tools)
- Ramer-Douglas-Peucker simplification
- Polyline → Q-curve fitting: for each simplified segment, compute optimal quadratic Bézier control point
- Real-time SVG path `d` string generation

**Auto-trace options:**

Option A: **Canvas-based edge detection** (zero dependencies)
- Load image to canvas, extract pixel data
- Canny-style edge detection (gradient magnitude + non-max suppression)
- Contour following → polygon → SVG path
- Simple but limited — works best on high-contrast woodblock prints

Option B: **Potrace via WASM** (~80KB)
- Potrace is the gold standard for bitmap→vector tracing (used by Inkscape)
- Available as a WASM module — runs in-browser, no server
- Produces clean SVG paths with proper curve fitting
- This is one dependency but it's a build tool, not a runtime dependency for Mokuri itself

Option C: **No auto-trace** (manual only)
- Skip tracing, just use the reference as a visual guide
- Draw all paths by hand with the Q-curve drawing tools
- Simplest to build, most manual effort per element

Recommendation: Start with Option C (manual drawing over reference), add Option B (Potrace WASM) as a Phase 2 enhancement. The drawing tools alone are already a major improvement over writing path data by hand.

### Key UI Components

**Zone palette**: Color-coded zone chips (like Mokuri's zone editor). Click to set active zone before drawing. Each zone gets a distinct preview color.

**Tool bar**: 
- Select / Move / Delete (edit existing paths)
- Draw Fill (closed path — draw outline, auto-close)
- Draw Stroke (open path)
- Hatch Helper (draw guide line → parallel strokes generated)
- Eraser (remove path segments)

**Level tabs**: Block / Shape / Detail — switching levels shows accumulated paths below and the current level's paths as editable

**Path inspector**: Click a path to see/edit its raw `d` string, zone assignment, stroke width. For power users who want to tweak coordinates directly.

**Undo/redo**: Full stroke-level undo (Ctrl+Z / Ctrl+Y)

## What This Enables

1. **AI + Human collaboration**: AI curates reference images from element descriptions; human draws paths with artistic judgment. Each does what they're best at.
2. **Real-world proportions**: Tracing from photos/references of actual subjects produces forms that feel authentic, not schematic
3. **Hand-drawn quality**: Pen/touch input with curve fitting produces organic paths that no LLM prompt can match
4. **Rapid iteration**: Visual feedback loop (draw → see result → adjust) is 10x faster than editing path coordinate strings
5. **Hatching at scale**: The hatching helper makes it practical to add the density of detail lines that distinguishes good woodblock art from flat illustration
6. **Consistent output**: Tool enforces accumulation rule, zone assignments, and Mokuri format automatically
7. **iPad-compatible**: Browser-based tool works on iPad with Apple Pencil — the most natural drawing input
8. **Style pack acceleration**: The Describe → Curate → Trace pipeline makes it practical to build entire style packs (10-15 elements) without each element being a multi-hour AI prompt iteration

## Implementation Phases

### Phase 1: Core Drawing Tool
- Reference image import (URL or file drop)
- **Existing element import** (load any Mokuri element definition, render paths for editing)
- Canvas rendering with opacity control
- Pen/touch drawing with smoothing
- Polyline → Q-curve fitting
- Zone assignment (click zone chip, then draw)
- Level switching (block/shape/detail) with accumulation display
- Path selection and deletion
- Export to clipboard (JS element definition)
- Undo/redo

### Phase 2: Refinement Tools
- **Curve-following hatching** (draw guide curve → parallel strokes bend along it)
- Texture stamps (grass, bark, scale patterns)
- Path node editing (drag control points)
- Fill path tool (draw outline, auto-close)
- Stroke width adjustment per-path

### Phase 3: Auto-Trace with Zone Segmentation
- Potrace WASM integration
- Threshold controls for trace sensitivity
- **Color-based auto-segmentation** into zone regions (user confirms/adjusts)
- Traced region → zone assignment UI with drag-to-reassign
- Trace → clean up → refine workflow

### Phase 4: Preview & Validation
- Side-by-side level comparison
- Palette preview (multiple palettes)
- Scale preview (element at various sizes)
- Print simulation (with paper texture)
- Validation warnings (missing zones, accumulation violations)
- Element harness integration (preview in context of existing elements)

## What This Does NOT Include

- Full vector editor (not competing with Inkscape/Illustrator)
- Automatic element generation from text descriptions
- AI-assisted path improvement (future possibility)
- Multi-element scene composition (that's Mokuri's workspace)

## Resolved Design Decisions

1. **Import existing elements**: Yes. Forge can load any existing Mokuri element definition, render its paths on canvas, and allow editing/adding detail. Important for upgrading the current library without starting from scratch. Slotted into Phase 1.

2. **Hatching follows form**: Curve-following hatching from the start. Draw a guide curve, tool generates parallel strokes that bend along it (not just straight lines). This produces the organic, form-following texture authentic to woodblock prints — water lines curving around rocks, wood grain following a trunk. Worth the implementation complexity.

3. **Skeleton mode**: Deferred. Interesting concept (gesture armature → fill) but wait to see how the fill-first-over-reference workflow feels in practice. May revisit if proportions prove difficult to nail with direct tracing.

4. **Auto-trace zone separation**: Auto-segment by color regions with user confirmation. Trace uses color differences in the reference image to propose zone boundaries, user confirms or adjusts assignments. More automated than outline-only tracing, with human override for noisy results.

## Performance & Path Complexity

### The Reality

Mokuri inserts elements at detail carve level by default. There is no "users mostly see block level" safety net — in normal use, every placed element renders its full path count. A composition with 8-10 Forge-designed elements, each with rich hatching and texture strokes, could mean 800-1500+ SVG path nodes in the DOM simultaneously.

SVG DOM performance on iPad (our most constrained target):
- <1,000 nodes: smooth interaction
- 1,000-3,000: noticeable lag during pan/zoom/repaints
- 5,000+: unusable

The print engine (Canvas-based) is less sensitive — SVG→Canvas rasterization handles path count well, and the real bottleneck is post-processing (paper texture, baren, wood grain). But workspace interactivity is the binding constraint.

### Compound Path Consolidation (Critical — Phase 1)

The single most important mitigation. Multiple paths in the same zone, at the same level, with the same type (fill or stroke) and width can be merged into a single `<path>` element with a compound `d` attribute:

```
// Before: 40 DOM nodes
<path d="M10,5 Q15,2 20,8" zone="body" type="stroke" />
<path d="M12,6 Q17,3 22,9" zone="body" type="stroke" />
... (38 more)

// After: 1 DOM node, same visual result
<path d="M10,5 Q15,2 20,8 M12,6 Q17,3 22,9 M..." zone="body" type="stroke" />
```

This can reduce DOM node count by 10-20x for detail-heavy elements with zero visual difference. Forge must auto-consolidate on export. The tool works with individual strokes internally (for editing), but the exported element definition merges compatible paths.

**Consolidation rules:**
- Same zone + same level + same type (fill/stroke) + same stroke-width → merge
- Fill paths: always consolidatable within zone
- Stroke paths: consolidatable when same width
- Hatching strokes from the helper are ideal candidates (same zone, same width, same level)

### Path Budget System (Phase 1)

Forge displays a live complexity gauge while designing:

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| Paths per level (pre-consolidation) | <30 | 30-60 | >60 |
| Paths per level (post-consolidation) | <10 | 10-20 | >20 |
| Total `d` string length | <5KB | 5-10KB | >10KB |
| Estimated DOM nodes at detail level | <15 | 15-30 | >30 |

These are guidelines, not hard limits. A hero element (centerpiece of a composition) can be more complex than a background accent. But the budget keeps awareness high during design.

### Additional Mitigations (Phase 4)

- **Viewport culling**: Elements fully outside the current viewBox skip SVG rendering. Partially implemented today; tighten to path-group level.
- **Zoom-based LOD**: At very low zoom (full scene view), suppress detail-level stroke paths that would be subpixel. Render block+shape only. Re-add detail on zoom-in.
- **Rasterization cache**: For elements not currently selected, cache as a bitmap `<image>` and swap to live SVG paths only on selection. Biggest win for complex scenes but most complex to implement.

### Design Implications

The path budget and consolidation rules mean Forge should actively encourage:
- **Fewer, longer strokes** over many short dashes (one flowing hatch line > ten dash segments)
- **Compound fills** where possible (one path with holes vs. multiple overlapping fills)
- **Strategic detail** — hatching where it matters for form, not uniform coverage everywhere
- **Zone economy** — fewer zones = more consolidation opportunities

This aligns well with authentic mokuhanga, where the carver makes deliberate, economical cuts rather than filling every surface with texture.

## Relationship to Element Design Guide

The guide remains the authoritative reference for *what* good elements look like. Element Forge is the tool for *making* them. The guide's principles (accumulation rule, zone structure, Q-curve preference, tapered fills) are enforced or facilitated by the tool. The guide should be updated to reference the Forge workflow.
