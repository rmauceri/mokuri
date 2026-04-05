# Element Forge — Path Quality & Cleanup Improvements

## Problem

The ImageTracer pipeline in Element Forge produces reasonable color-separated traces from PNGs, but three issues prevent it from being a practical element creation workflow:

1. **Jaggy paths**: ImageTracer outputs polygonal line segments (L/M commands), not curves. The result looks pixelated rather than the organic, hand-carved quality Mokuri elements need.

2. **Artifact cleanup**: Small unwanted paths (outline residue, color bleed fragments) require manual removal. The forge has click-to-select and erase-tool-delete on the main canvas, but it's not discoverable, has no hover feedback, and the preview thumbnails don't support interaction.

3. **Cluttered UI**: The forge mixes manual-drawing controls with trace-workflow controls, making the interface confusing for the primary use case (PNG → trace → export).

## Approach

Three phases, each independently useful. Phase 0 declutters the UI. Phase 1 makes every trace look better automatically. Phase 2 makes artifact cleanup fast.

---

## Phase 0: UI Cleanup — Context-Aware Controls

The forge has two workflows: **trace** (PNG → quantize → trace → export) and **manual** (freehand drawing). Most users will use trace. Show only relevant controls for the active workflow.

### 0A. Hide manual-only controls in trace mode

These controls are only useful for freehand drawing and should be hidden (or collapsed) when a trace image is loaded:

| Control | ID | Purpose |
|---|---|---|
| Stroke Width slider | `stroke-width` | Sets freehand stroke width |
| Curve Fidelity slider | `curve-fidelity` | Simplifies hand-drawn paths |
| Draw Stroke (S) button | `tool-stroke` | Freehand stroke tool |
| Draw Fill (F) button | `tool-fill` | Freehand fill tool |

**Implementation**: When `STATE.traceImageData` exists (image loaded), add a CSS class to the sidebar that hides these controls. When cleared, show them again. Keep Select and Erase tools visible — they're useful for post-trace cleanup.

### 0B. Group trace controls more clearly

Currently the trace controls (engine toggle, epsilon, turd, mono/color, quantize, thresholds) are interspersed with other UI. Consider:
- A clear "Trace Settings" group header
- Disable trace controls when no image is loaded
- Show the ImageTracer-specific controls only when ImageTracer engine is selected

### 0C. Inspector panel context

The Inspector's "Stroke Width" and "Curve Fidelity" are global drawing settings. The "Selected Path" inspector (type, zone, d string, apply/delete) is useful for both workflows. Consider:
- Always show the Selected Path inspector when a path is selected
- Only show Stroke Width / Curve Fidelity when in manual drawing mode

---

## Phase 1: Path Smoothing

Convert ImageTracer's polygonal output into smooth Bézier curves using the forge's existing curve-fitting infrastructure.

### 1A. Post-trace smoothing pass

After ImageTracer paths are classified into Shape/Detail zones, apply smoothing to each path:

1. Parse the path `d` string into point sequences (one per M-delimited subpath)
2. Run RDP simplification (existing `rdpSimplify()`) with appropriate epsilon
3. Convert simplified polylines to quadratic Béziers via existing `polylineToQBezier()`
4. Rebuild the `d` string from smooth curves

Create a function `smoothTracedPath(d, epsilon)` and apply it to all Shape and Detail paths from ImageTracer. Block silhouette (from Potrace) already produces decent curves via `processTracePath()`.

**Key existing functions to reuse:**
- `rdpSimplify(points, epsilon)` — Ramer-Douglas-Peucker simplification (line ~1286)
- `polylineToQBezier(points)` — converts polyline to quadratic Bézier curves (line ~1312)
- `processTracePath(d, srcW, srcH, dstW, dstH, epsilon)` — scale + simplify (line ~1766)

### 1B. Smoothing control

Add a "Smoothing" slider to the trace controls (near existing epsilon slider):
- Range: 0 (no smoothing, raw polygons) to 10 (aggressive smoothing)
- Default: 5 (moderate — removes pixel stepping while preserving shape)
- Affects the epsilon passed to `smoothTracedPath()`
- Applied on trace — re-trace to see the effect

### 1C. ImageTracer parameter tuning

Review ImageTracer's native parameters that affect output quality:
- `ltres` (line threshold): currently 0.5 — lower values produce smoother native output
- `qtres` (quadratic threshold): currently 0.5 — same
- `pathomit`: currently 4 — minimum path size, helps filter tiny artifacts at source
- These interact with post-trace smoothing, so tune them together

---

## Phase 2: Artifact Cleanup UX

Make it fast and intuitive to identify and remove unwanted paths from any carve level.

### 2A. Path hover highlight

When in select or erase mode, hovering over a path in the main canvas should:
- Highlight the path with a distinct outline (blue glow or dashed border)
- Show a small tooltip: zone name, type (fill/stroke), approximate size
- Uses the existing SVG path elements that already have pointer events (line ~3016-3030)

### 2B. Multi-select and bulk delete

Extend the existing single-path select/delete:
- Click to select a path (existing behavior — verify it works for traced paths)
- Shift+click to add/remove from selection
- Delete/Backspace removes all selected paths
- Visual indication of selected paths (highlight color or selection outline)

### 2C. Preview thumbnail click-to-locate

Click a path in the Block/Shape/Detail preview thumbnails to:
- Switch to that carve level
- Select/highlight the corresponding path in the main canvas
- Makes it easy to target specific artifacts visible in the small previews

Currently previews have no click handlers (line ~3432-3468). Would need to add pointer events to the SVG paths in `updatePreviews()`.

### 2D. "Clean" quick action

A button that removes paths below a configurable area threshold from the active level:
- Small area slider or input field
- "Remove Small Paths" button
- Preview count of paths that would be removed before confirming
- Quick way to strip tiny fragments without clicking each one
- Essentially user-controlled version of the automated filtering

---

## Current State (What Works Today)

- **Semantic zone naming**: ImageTracer traces auto-assign body/marking/accent/detail zones by cluster role (pixel count + lightness heuristic)
- **Zone rename**: Double-click zone chips to override names; known names auto-assign palette slots
- **Block silhouette**: Potrace produces clean block-level paths
- **Shape/Detail classification**: Heuristic separation by area, aspect ratio, and zone role
- **Select + Erase tools**: Click paths in main canvas to select, erase tool deletes on click
- **Path Inspector**: Edit type, zone, stroke width, raw d string for selected paths

## What Doesn't Work Well

- **Outline residue**: PNG outlines trace as darkest-zone paths hugging the silhouette. Dimension-based and erosion-based filtering both failed — the paths wrap around the element giving them large bounding boxes.
- **Color matching edge cases**: ImageTracer sometimes matches feature colors to wrong clusters (e.g., eye outline to fin color instead of detail zone).
- **Jaggy traced shapes**: No curve fitting applied to ImageTracer output.

## Notes

- All changes are in `dev/element-forge.html` only — no impact on the main Mokuri app
- The existing `polylineToQBezier()` is proven (used for manual carve strokes). Reusing it for traced paths is low-risk.
- Phase 1 is highest impact: smooth paths make elements look like woodblock prints instead of pixel art
- Phase 2 accepts that no algorithm is perfect and gives users efficient tools for the last 10%
- Combined workflow: trace → auto-smooth → click away artifacts → export. That's a usable pipeline.
