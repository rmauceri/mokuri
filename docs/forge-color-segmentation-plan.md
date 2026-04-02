# Element Forge: Color Segmentation Pipeline

## Problem

The current forge trace pipeline converts images to grayscale and applies brightness thresholds to produce carve levels. This destroys color information that maps directly to Mokuri's multi-zone ink system. A 4-color koi image (white body, orange markings, dark outlines, gray fins) becomes 2-3 overlapping brightness fills in a single zone — incompatible with the ink and carve systems.

## Observation

The AI-generated source images are actually well-suited for Mokuri elements:
- 3-5 distinct flat color regions
- Clean chroma-key backgrounds
- Clear semantic boundaries (body vs marking vs fin vs outline)

The information needed for multi-zone elements **exists in the source image**. The forge just ignores it.

## Proposed Pipeline

### Phase 1: Color Quantization

After chroma-key background removal, analyze the remaining pixels:

1. **Convert to perceptual color space** (Lab or OKLab) for meaningful distance metrics
2. **K-means clustering** with k=3-5 (user-configurable, default 4)
   - Seed initial centroids using median-cut or Wu's quantization for fast convergence
   - Exclude background/transparent pixels
3. **Produce a quantized image** where each pixel is assigned to its nearest cluster
4. **Display color swatches** for each cluster so user can see/adjust the segmentation

### Phase 2: Per-Cluster Tracing

For each color cluster:

1. **Build a binary mask** — pixels belonging to this cluster = black, others = white
2. **Trace the mask** using Potrace (already integrated) — produces a fill path for that color region
3. **Assign to a zone** — each cluster becomes a colorZone with a default palette slot
4. **Scale and simplify** using existing processTracePath pipeline

### Phase 3: Zone-Aware Carve Levels

Map the traced color clusters to carve levels:

- **Block (level 0)**: Full silhouette (union of all clusters) — single fill path, `body` zone. This is what the chroma-key silhouette already produces.
- **Shape (level 1)**: All color-cluster fills as separate zone paths. This gives the element its multi-zone color structure. Each region is independently inkable.
- **Detail (level 2)**: Shape content + edge strokes extracted from cluster boundaries. Where two color regions meet, extract the boundary as a stroke path for fine carved detail.

### Phase 4: Boundary Edge Extraction (Detail Level)

The boundaries between color clusters are natural candidates for carved detail lines:

1. For each pair of adjacent clusters, find the shared boundary pixels
2. Trace these boundary pixels as stroke paths (thin lines)
3. Assign to a `detail` zone for independent inking
4. These become the carved grooves that separate color regions — exactly like hand-crafted elements

### Phase 5: User Controls

#### Cluster Count Slider
- Range: 2-6 clusters
- Default: 4 (body, marking, accent, outline is a common pattern)
- Live preview updates as slider moves

#### Cluster Merge/Split
- Click two swatches to merge clusters (reduce zone count)
- Click a swatch to split it (re-cluster that region into 2)

#### Zone Assignment UI
- Each detected cluster gets a swatch + zone name
- User can rename zones, change palette slot, reorder
- Drag to reorder layer stacking

#### Threshold Refinement (Per-Cluster)
- After initial k-means, allow per-cluster threshold adjustment
- Expand/contract each cluster's color range

### Architecture

```
Source Image
    ↓
Chroma Key Removal (existing)
    ↓
Color Quantization (k-means in Lab space)
    ↓
┌───────────────────────────────────────┐
│  Cluster 1    Cluster 2    Cluster 3  │  ...
│  (white)      (orange)     (dark)     │
│     ↓            ↓            ↓       │
│  Binary       Binary       Binary     │
│  Mask         Mask         Mask       │
│     ↓            ↓            ↓       │
│  Potrace      Potrace      Potrace    │
│     ↓            ↓            ↓       │
│  Fill path    Fill path    Fill path  │
│  zone:body    zone:marking zone:dark  │
└───────────────────────────────────────┘
    ↓
Boundary Edge Extraction → stroke paths (detail zone)
    ↓
Carve Level Assembly:
  Block  = silhouette fill
  Shape  = per-zone fills
  Detail = per-zone fills + boundary strokes
    ↓
Export as Mokuri Element
```

### Output Element Structure (Example: Koi)

```javascript
{
  id: 'koi-swim',
  name: 'Koi - swimming',
  category: 'fauna',
  viewBox: '0 0 160 107',
  colorZones: [
    { id: 'body', defaultPaletteSlot: 0 },      // white/cream
    { id: 'marking', defaultPaletteSlot: 1 },    // orange hi
    { id: 'dark', defaultPaletteSlot: 3 },        // black areas
    { id: 'fin', defaultPaletteSlot: 4 },          // gray fins
  ],
  carveLevels: [
    { name: 'block', paths: [
      { d: '...silhouette...', type: 'fill', zone: 'body' },
    ]},
    { name: 'shape', paths: [
      { d: '...silhouette...', type: 'fill', zone: 'body' },
      { d: '...cream region...', type: 'fill', zone: 'body' },
      { d: '...orange patches...', type: 'fill', zone: 'marking' },
      { d: '...dark areas...', type: 'fill', zone: 'dark' },
      { d: '...fin regions...', type: 'fill', zone: 'fin' },
    ]},
    { name: 'detail', paths: [
      // ...shape paths repeated...
      { d: '...body-marking boundary...', type: 'stroke', zone: 'dark', strokeWidth: 1.2 },
      { d: '...fin edge...', type: 'stroke', zone: 'dark', strokeWidth: 0.8 },
    ]},
  ],
}
```

This structure is identical to hand-crafted elements. It plugs directly into the ink system, carve system, and print engine with no renderer changes.

## Implementation Notes

### K-Means in the Browser
- Run on a downsampled version (max 256×256) for speed
- 10-20 iterations is typically sufficient for convergence
- Use Web Workers if >200ms on main thread

### Potrace Integration
- Already embedded in the forge — just need to call it per-cluster mask instead of per-threshold
- turdSize filtering still applies (removes tiny noise regions)

### Boundary Extraction
- Walk the quantized image; where adjacent pixels belong to different clusters, mark as boundary
- Trace boundary pixels with Potrace at high resolution
- Simplify with existing epsilon-based path simplification

### Migration Path
- The existing threshold pipeline stays as a fallback for line art / monochrome input
- Color segmentation becomes the default for color images
- Auto-detect: if image has >2 significant color clusters, use segmentation; otherwise use threshold

### Relationship to Existing Forge Features
- Chroma key removal: unchanged, runs first
- Simplification (epsilon): applies to all traced paths regardless of pipeline
- turdSize: applies per-cluster mask trace
- viewBox scaling: unchanged
- Export / import: unchanged (output format is standard Mokuri element)
- Zone editor UI: auto-populated from detected clusters instead of manual entry

## Open Questions

1. **How to handle gradients/blends** in AI art — soft transitions between colors may create noisy cluster boundaries. May need morphological cleanup (erode/dilate) on cluster masks before tracing.

2. **Cluster ordering / stacking** — which cluster fill draws on top? Probably: largest area first (body), then smaller regions layered on top. User should be able to reorder.

3. **Outline detection** — some AI images have explicit dark outlines. These should be their own cluster (dark/outline zone) rather than absorbed into adjacent regions. K-means typically separates these naturally.

4. **Detail level strategy** — boundary strokes vs. within-zone texture. For traced elements, boundary strokes may be sufficient. Hand-carved texture (hatching, stippling) would still come from the freeform carve tools in Mokuri.

5. **Element quality bar** — even with color segmentation, the traced paths will be rougher than hand-crafted SVG. What level of path simplification produces "good enough" output for the print engine? Need to test with actual prints.
