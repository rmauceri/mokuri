# Mokuri Block Plan

**Status:** Proposed for implementation
**Date:** September 15, 2026
**Initial target:** Dev-only workshop prototype

## Purpose

Mokuri currently supports the complete digital creative path from composition
through carving, inking, and a simulated finished print. The Block Plan feature
extends that work into physical mokuhanga.

It allows an artist to use a Mokuri composition as the design for real carved
woodblocks by producing:

- A separate production master for each proposed ink block
- Clear diagrams of the wood that remains and the wood that is removed
- Shared traditional kento registration geometry
- Exact physical dimensions
- Hanshita and carbon/graphite transfer masters with the correct orientation
- Bokashi and atmosphere reference guides
- A documented printing sequence

The goal is not to automate every judgment made by a printmaker. Mokuri should
make a strong initial block-separation proposal, explain it clearly, and let the
artist revise the proposal before producing workshop-ready files.

## Product Definition

> **Block Plan translates a Mokuri composition into editable, deterministic,
> registration-ready production masters for carving and printing physical
> mokuhanga blocks.**

The feature has two equally important responsibilities:

1. Interpret Mokuri's digital geometry as physical printing surfaces.
2. Package that interpretation so it can be printed, transferred, carved, and
   referenced without ambiguous scaling or orientation.

## Relationship to the Existing Print Workflow

Block Plan is not another Print Engine style.

### Pull Print

The existing Print Engine creates an expressive digital proof. It intentionally
adds effects such as:

- Paper texture
- Ink absorption
- Edge bleed and pooling
- Path perturbation
- Block-edge character
- Paper-influenced inking
- Baren-pressure variation
- Simulated misregistration
- Multiple passes and other impression effects

These effects answer:

> What might this composition feel like as a finished mokuhanga print?

### Prepare Physical Blocks

Block Plan uses the composition's underlying geometry without simulated print
artifacts. It creates stable, repeatable production masks at known dimensions.

It answers:

> What should remain raised on each physical block, what should be carved away,
> and how will the paper register consistently across the blocks?

The digital proof remains an essential companion to the production masters, but
it is not used as the source raster for block separation.

## First-Version Physical Format

The initial version deliberately supports a small, practical set of dimensions.
This reduces setup complexity and allows the workflow to be tested in the
studio before a general-purpose sizing system is built.

### Woodblock

Default and only first-version woodblock size:

| Dimension | Value |
|-----------|-------|
| Width | 9 inches |
| Height | 12 inches |
| Metric display | 228.6 × 304.8 mm |

The block may be used in portrait or landscape orientation. Mokuri rotates the
physical plan as a unit rather than treating the rotated block as a different
size.

### Paper presets

| Preset | Inches | Metric display | Best fit |
|--------|--------|----------------|----------|
| 8 × 10 | 8 × 10 in | 203.2 × 254 mm | Portrait or landscape compositions |
| 8 × 8 | 8 × 8 in | 203.2 × 203.2 mm | Square compositions |
| 7 × 5 | 7 × 5 in | 177.8 × 127 mm | Smaller landscape or portrait compositions |

Both inches and millimeters should be displayed. Inches are canonical for these
initial presets; metric values are exact conversions.

### Preset recommendation

Mokuri should recommend a paper preset from the composition aspect ratio:

- Near-square compositions: 8 × 8
- Medium portrait or landscape compositions: 8 × 10
- Smaller 7:5 or 5:7 compositions: 7 × 5

This is a recommendation only. The artist can choose any of the three presets
and preview the resulting image placement.

### Image area

The paper size and image area are not the same thing. Block Plan must show:

- Physical block boundary
- Paper boundary when registered
- Printable image boundary
- Clear paper margin around the image
- Kento locations
- Available wood around the paper and image

The existing Mokuri composition should be fitted proportionally inside the
selected image area. It must never be stretched to match a paper preset.

The first version may provide a centered default image area derived from the
existing Mokuri paper aspect ratio. The review screen must allow the image area
to be repositioned within safe bounds, because its relationship to the kento
and paper edge is a physical production decision.

## Entry Point and User Flow

Add **Prepare Physical Blocks** to the Inking Workbench.

The Inking Workbench is the appropriate entry point because block separation
depends on resolved ink choices, zone overrides, and bokashi decisions. The
command opens a dedicated Block Plan review workspace rather than downloading
files immediately.

### Step 1: Production setup

The setup screen establishes:

- 9 × 12-inch block orientation
- Paper preset
- Image placement
- Kagi-kento position
- Hikitsuke-kento position
- Transfer method: face-down hanshita or carbon/graphite
- Printer sheet size
- Transfer orientation, derived from the selected method

The Block Plan is saved as part of the composition so the same production files
can be regenerated later.

### Step 2: Automatic separation

Mokuri resolves the actual final ink used by every printable zone and proposes:

- One block for each exact resolved ink color
- An optional key block containing suitable dark line and detail work
- Atmosphere reference guides rather than atmosphere blocks
- No hanko block by default

The proposal is a starting point, not a locked result.

### Step 3: Block review

The artist can:

- Rename blocks
- Merge blocks
- Split selected regions into a new block
- Move zones or paths between blocks
- Accept, edit, or dissolve the proposed key block
- Include or exclude individual regions
- Change the proposed printing order
- Review bokashi instructions
- Inspect warnings about physically small details

### Step 4: Registration and transfer preview

The review workspace shows:

- The finished print orientation
- The mirrored block orientation
- The selected transfer master orientation
- The paper boundary
- The image boundary
- Shared kento geometry
- Block and paper dimensions
- Page tiling when required

The first version supports two transfer profiles:

- **Hanshita:** normal-reading geometry intended to be pasted printed-face-down
  onto the block
- **Carbon/graphite:** mirrored block geometry intended to be traced directly
  onto the block

Hanshita is the traditional default. Choosing a transfer profile changes only
the production-master orientation and presentation; it does not change the
underlying block geometry.

### Step 5: Export

Mokuri generates a ZIP package containing exact-size PDF sheets, PNG masters,
reference guides, and a manifest.

## Color Resolution and Block Grouping

### Resolve actual ink colors

Block grouping cannot rely only on palette slot numbers. A placed element may
use:

- Its color zone's default palette slot
- A numeric palette-slot override
- A literal color override
- A cross-palette accent color

The Block Plan Engine must resolve the final displayed ink color for every zone
before grouping it.

### Exact colors are separate by default

Two regions should join the same proposed block only when their resolved color
values are identical.

Mokuri should not automatically merge merely similar colors. A subtle
difference may represent an intentional pigment or printing decision. The
artist can merge similar colors explicitly in the review workspace.

### Paper-colored and transparent areas

Paper, transparent regions, and carved openings are not ink blocks.

They contribute negative space to the relevant block masks and remain visible
in the final proof.

### Hybrid grouping model

The first proposal is one block per exact color, followed by manual review.

The artist may:

- Merge colors onto one block when separated areas can be inked independently
- Split one color across multiple blocks
- Move linework into or out of a key block
- Exclude a region from physical production

This preserves a simple default without assuming that one screen color must
always equal one physical block.

## Mask and Guide Views

Each block should expose three explicit views.

### 1. Raised surface / keep map

Black represents wood that remains raised and receives ink.

White represents wood that does not print.

This is the clearest geometric source for production output. It may be used
directly for carbon/graphite transfer. A dedicated hanshita master derives from
the same geometry but uses contours and light keep-area indications so the
carving information remains legible after the paper is pasted to the block.

### 2. Carve-away map

Black or hatched material represents wood to remove.

White represents the retained printing surface.

This view is useful as a carving reference but should not be visually
confusable with the transfer master.

### 3. Annotated block guide

The guide includes:

- Block name and sequence number
- Ink color swatch and color value
- Transfer method and orientation warning
- Block boundary
- Paper boundary
- Image boundary
- Kento labels
- Bokashi instructions
- Dimensions
- Calibration marks
- Mask-polarity legend
- Any detail or registration warnings

### Isolated impression preview

The review workspace should also show an isolated flat-color preview of the
impression expected from each block. This helps the artist understand the
separation, but it does not need to be a separate exported file in the first
version.

## Orientation and Transfer

The first version supports both traditional face-down hanshita and direct
carbon/graphite transfer. The transfer method determines the master orientation.

### Hanshita transfer

A hanshita master is printed in the intended finished print's **normal reading
orientation**. The printed face is pasted against the wood. That face-down
placement reverses the design on the block, so the carved surface is mirrored
and its impression returns to normal reading orientation.

The hanshita page must state:

> HANSHITA — NORMAL READING ORIENTATION<br>
> Paste the printed face down onto the block

Mokuri should generate one color-specific hanshita for each accepted block. It
should show:

- Clean boundaries for the printing surface
- Light shading or hatching identifying wood to retain
- Kento carving outlines in the same coordinate system as the image
- The block identifier outside the pasted design area
- No opaque solid fill that hides important internal carving boundaries
- No instructional graphics over geometry intended to be pasted

The exact visual convention for retained areas should be tested with physical
printing, pasting, paper thinning, and carving. It must remain readable on the
chosen thin paper without being mistaken for carved-away material.

### Carbon or graphite transfer

A carbon/graphite master uses **mirrored block orientation** because the image
is traced directly rather than reversed by face-down pasting.

The carbon/graphite page must state:

> BLOCK VIEW — MIRRORED<br>
> Transfer in this orientation; the impression will read oppositely

Its keep map may use stronger solid-black geometry because the master remains a
reference sheet rather than becoming part of the block surface.

### Shared orientation rule

Kento and image geometry must always undergo the same orientation transform.
Labels, calibration marks, and assembly instructions outside the transferable
geometry remain readable in both profiles.

The Block Plan Engine should retain one canonical normal-reading geometry set
and derive the selected transfer master from it:

- Hanshita: no pre-mirroring; face-down placement performs the reversal
- Carbon/graphite: mirror before export

This avoids double reversal and ensures both methods describe the same physical
block.

### Reference orientation

The export package includes the final proof in normal reading orientation and a
mirrored block preview. These provide immediate checks during transfer,
carving, and printing.

### Future transfer methods

The transfer-profile model may later support printed transfer media, projector
workflows, tracing, or other techniques without changing the block-separation
model.

## Occlusion and Overprinting

### Default: visual knockout

The first proposal should match the visible digital composition:

- Foreground geometry hides covered lower geometry.
- Hidden portions are removed from the lower block's proposed printing surface.
- The isolated block preview therefore reconstructs the current digital proof
  when all proposed blocks are composited in order.

### Editable underprinting

The data model should allow selected regions to restore lower geometry for
physical overprinting. This need not be a highly granular editing experience in
the first prototype, but the separation model must not make knockout geometry
irreversible.

### Color mixing limitation

Mokuri's resolved screen colors describe the intended visible design. They do
not yet describe pigment transparency, wetness, or the new color produced by
two physical inks overprinting.

The manifest should identify deliberate underprinted regions and avoid claiming
that their physical mixed color is simulated precisely.

## Existing Carving Decisions

The Block Plan must represent the composition as edited by the artist, not the
untouched source element.

### Element carve level

Only paths present at the placed element's current carve level contribute to
the production plan.

### Freehand carved strokes

Existing freehand carve strokes subtract from every affected printing region in
element-local coordinates before the element transform is applied.

This ensures that cuts made in Mokuri move, scale, rotate, and flip with their
element in the production masters exactly as they do in the composition.

### Background carving

Background carve strokes affect atmosphere in the digital application.
Because atmosphere is a guide-only feature in the first Block Plan version,
background carving should appear on the atmosphere guide rather than creating
an independent block.

### Carve patterns

Carve patterns remove printable surface and must be represented geometrically
in the relevant block masks. Their density and scale must be evaluated at
physical output size so very fine pattern work can be flagged.

## Bokashi

Bokashi should not become grayscale carving depth.

The full assigned shape remains raised on its ink block. Mokuri communicates
the inking operation through annotations.

### Block annotation

The annotated block guide should show:

- Bokashi direction
- Fully inked edge
- Fade direction
- Approximate fade extent
- Ink color

### Separate bokashi guide

The export package should also contain a normal-reading and/or clearly oriented
bokashi guide showing all gradients together. This guide supports brush
application and comparison with the intended final proof.

### Clean transfer master

The carbon/graphite transfer master remains strictly black and white. The
hanshita master may use a light, clearly documented tone or hatch to identify
retained areas. Gradient shading and instructional graphics must not overlap
geometry intended for transfer in either profile.

## Atmosphere

Sky, ground, mist, and other procedural atmosphere remain **guides only** in
the first version.

An atmosphere guide may show:

- Coverage boundary
- Horizon location
- Gradient direction
- Resolved colors
- Mist-band positions
- Relevant background carve marks
- Relationship to the final proof

This avoids presenting procedural full-page gradients as if they were carved
tonal relief. Future studio testing may justify converting selected atmosphere
fields into editable physical blocks.

## Key Block

The key block is optional and is distinct from registration.

- **Kento** aligns the paper consistently across every block.
- **A key block** carries selected printed outlines, contours, and fine detail.

Mokuri should inspect dark strokes and small detail shapes and propose a key
block where the result appears useful.

The artist can:

- Accept the proposal
- Remove paths from it
- Add paths to it
- Change its ink color
- Dissolve it and return its geometry to the original color blocks

No key block should be created solely because the project needs registration
marks.

## Hanko

Hanko elements are excluded from physical block separation by default.

The final proof and manifest should retain their intended location so the artist
can apply a separate physical seal after printing.

A future option may convert a hanko into a dedicated vermillion block, but that
is not part of the initial workshop workflow.

## Registration System

The first version supports traditional carved kento:

- One right-angle **kagi-kento**
- One straight **hikitsuke-kento**
- Identical placement and geometry on every block

### Shared source of truth

Kento geometry must be defined once in the Block Plan and inserted into every
block master. It must never be independently calculated for each exported
color.

### Physical layout validation

The selected paper must fit on the 9 × 12-inch block with:

- Space for both registration guides
- A safe edge around the paper
- No collision between kento and printable image geometry
- No clipping at the block boundary

The 8 × 10-inch paper leaves comparatively limited clearance on a 9 × 12-inch
block. The setup preview should therefore validate the exact registration
layout and prevent an invalid export rather than silently shrinking or moving
the artwork.

### Kento settings

The initial implementation can provide a carefully chosen default placement,
but the setup should retain explicit values for:

- Kagi-kento corner
- Hikitsuke side and position
- Paper origin
- Registration offset

These values make later refinement possible without changing the save format.

### Future registration options

Possible later additions:

- Reusable registration jig templates
- External registration boards
- Alternate kento corners
- Custom paper offsets
- Multiple paper placements on one block

## Printing Order

Mokuri should propose, but not enforce, a printing order based on:

1. Broad fields before small details
2. Lighter inks before darker inks
3. Background forms before foreground accents
4. A key block near the end, when one is used

The artist can reorder every block. Sequence numbers update in:

- Block cards
- Filenames
- Guide sheets
- Manifest

The proposed sequence is practical guidance, not a claim that there is one
correct printing order.

## Physical Detail Warnings

Moving from abstract SVG coordinates to a known physical size makes feature
dimensions measurable.

Block Plan should detect and warn about:

- Extremely thin raised lines
- Extremely narrow carved gaps
- Tiny isolated printing islands
- Small enclosed recesses
- Dense carve patterns
- Details that may disappear at the chosen image size
- Geometry too close to the image or block boundary

The first version should not automatically thicken, simplify, or remove these
features. Silent alteration would make the production master differ from the
composition. Warnings should identify the block and affected region so the
artist can decide how to respond.

Threshold values should remain configurable during dev testing because useful
minimum dimensions depend on wood, tools, carving style, and the artist's
intent.

## Printer and Page Handling

### PDF as the primary print format

PDF is the preferred bench-ready format because it can describe an exact
physical page size. Every printable sheet should include:

- **Print at Actual Size / 100%**
- A warning not to use **Fit to page**
- A labeled 1-inch calibration line
- A labeled 25 mm calibration line
- A verification square
- Page and tile numbers

### Standard inkjet printers

A 9 × 12-inch block master is larger than the printable area of a typical US
Letter or A4 printer. The first version must therefore support tiled output.

Initial printer sheet presets:

- US Letter: 8.5 × 11 inches
- A4: 210 × 297 mm

Each tile should include:

- Configurable overlap, with a conservative default
- Alignment crosses outside the transferable geometry
- Trim or assembly guides
- Row and column labels
- Repeated block name, transfer method, and orientation warning

The tiling algorithm should avoid scaling. Every tile remains at exactly 100%.

### Hanshita page assembly

Hanshita output should use a single printer sheet whenever the transferable
image and kento geometry fit at exact size. It does not need to print the entire
9 × 12-inch block boundary when a smaller crop can preserve all transferable
geometry and reference measurements.

When tiling is unavoidable:

- Prefer seams through nonprinting or low-detail areas.
- Keep alignment marks outside retained printing surfaces where possible.
- Include a full-size assembly reference.
- Never place labels or opaque alignment graphics over the pasted design.
- Warn that the assembled sheet should be stabilized at exact size before it is
  pasted to the block.

Physical testing should determine whether particular paper presets and kento
layouts can reliably use a single Letter or A4 sheet.

### Printable-area uncertainty

Inkjet printers have different unprintable margins. Block Plan should:

- Use a conservative printable-area default
- Allow borderless mode when the printer supports it
- Preview whether all required marks fit
- Fall back to additional tiles rather than reducing scale

### PDF implementation constraint

Mokuri is dependency-free and offline-first. Direct PDF generation therefore
requires an implementation decision.

Viable approaches include:

1. A purpose-built, limited PDF writer for raster or vector page content.
2. A print-optimized browser document using CSS page sizing and the browser's
   Print/Save as PDF flow.
3. A small reviewed implementation vendored into the repository, if the
   no-dependency policy is deliberately revised.

The first engineering phase should prototype exact-size output from the target
browsers before the UI is built. Browser printing must be tested with Microsoft
Edge and at least one physical inkjet printer.

The product requirement is exact, low-friction printing. The internal PDF
implementation is secondary to that outcome.

## PNG Masters

PNG files provide lossless raster masters for archival use and other software.

Each filename and manifest entry should identify:

- Block sequence and name
- Keep or carve-away polarity
- Pixel dimensions
- Intended physical dimensions
- DPI
- Transfer method and orientation

### Initial resolution

A 300 DPI PNG is an appropriate first-version default:

- 9 × 12 inches becomes 2700 × 3600 pixels.
- It provides clear transfer geometry without the much larger browser memory
  cost of a 600 DPI full-block RGBA canvas.

The exact-size PDF remains the preferred path to the printer. Higher PNG
resolutions can be considered after memory and output quality are tested across
desktop and tablet devices.

## Export Package

The primary deliverable is a ZIP package.

Example:

```text
composition-name-block-plan/
  00-final-proof.pdf
  00-block-manifest.pdf
  01-blue-block-hanshita.pdf
  01-blue-block-carbon-transfer.pdf
  01-blue-block-keep.png
  01-blue-block-carve.png
  01-blue-block-guide.pdf
  02-red-block-hanshita.pdf
  02-red-block-carbon-transfer.pdf
  02-red-block-keep.png
  02-red-block-carve.png
  02-red-block-guide.pdf
  atmosphere-guide.pdf
  bokashi-guide.pdf
  block-plan.json
```

Tiled PDF pages may be stored in per-block folders or named with explicit row
and column suffixes.

### Human-readable manifest

The manifest documents:

- Composition name
- Export date
- 9 × 12-inch block size and orientation
- Selected paper preset
- Image dimensions and placement
- Kento arrangement
- Block names and assigned inks
- Zones and paths assigned to each block
- Printing order
- Bokashi instructions
- Atmosphere treatment
- Hanko exclusion
- Selected transfer method and master orientation
- Knockout or restored-underprint decisions
- Physical-detail warnings
- Printer sheet and tiling settings

### Machine-readable Block Plan

`block-plan.json` allows Mokuri to reopen and regenerate the production package.
It should store semantic assignments and physical dimensions rather than
exported pixel coordinates alone.

## Block Plan Data Model

Conceptual shape:

```js
{
  version: 1,
  blockSize: {
    widthIn: 9,
    heightIn: 12,
    orientation: 'portrait',
  },
  paper: {
    preset: '8x10',
    widthIn: 8,
    heightIn: 10,
    originXIn: 0,
    originYIn: 0,
  },
  imageArea: {
    xIn: 0,
    yIn: 0,
    widthIn: 0,
    heightIn: 0,
  },
  registration: {
    type: 'traditional-kento',
    kagi: {},
    hikitsuke: {},
  },
  transfer: {
    method: 'hanshita-face-down',
    masterOrientation: 'print-reading',
  },
  occlusionDefault: 'knockout',
  blocks: [
    {
      id: 'block-1',
      name: 'Indigo',
      color: '#27445c',
      order: 1,
      assignments: [],
      bokashi: [],
      underprintRestorations: [],
    },
  ],
  keyBlockId: null,
  atmosphereMode: 'guide',
  hankoMode: 'excluded',
  output: {
    printerPaper: 'letter',
    pngDpi: 300,
    tiled: true,
  },
}
```

Exact field names should follow existing Mokuri save-data conventions during
implementation.

### Stable assignments

Assignments should identify source geometry semantically where possible:

- Placed element ID
- Element definition ID
- Color zone ID
- Path or stroke identity

They should not depend only on array position, because paths and blocks may be
reordered.

### Save and migration

Compositions without a Block Plan continue to work unchanged.

The Block Plan is created only when the artist opens the production workflow.
Future schema versions must migrate independently from the main composition
schema where practical.

## Block Plan Engine

A separate deterministic engine, tentatively
`block-plan-engine.js`, should perform the production work.

### Pipeline

1. Resolve every printable zone's actual ink color.
2. Gather active fills and strokes for each placed element.
3. Respect element viewBox clipping.
4. Expand printed strokes into deterministic physical outlines.
5. Apply element-local carve strokes and carve patterns as subtraction masks.
6. Apply scale, rotation, flipping, translation, and composition clipping.
7. Resolve default visual knockout geometry.
8. Apply user block assignments and restored-underprint decisions.
9. Build the optional key-block proposal.
10. Attach bokashi and atmosphere metadata.
11. Add shared kento geometry in physical coordinates.
12. Derive the transfer master orientation from the selected method.
13. Validate physical clearances and minimum feature sizes.
14. Generate previews, PNG masks, printable pages, and manifests.

### Geometry before raster effects

The engine should reuse existing helpers for:

- Color resolution
- Element path selection
- Element transforms
- Carve-stroke geometry
- Pattern geometry

It should not reuse the Print Engine's:

- Paper renderer
- Ink bleed
- Absorption variation
- Perturbation
- Misregistration
- Baren effects
- Post-processing

Production geometry must be deterministic. Re-exporting the same saved Block
Plan should produce the same masks.

### Stroke handling

Element stroke paths represent printable linework. Before mask composition,
they must be expanded consistently to filled geometry at the intended physical
scale.

SVG scaling, `vector-effect`, line caps, and joins must be reviewed carefully.
A screen-space stroke width must not accidentally become a different physical
width in the exported block.

### Occlusion implementation

Knockout should operate on block coverage masks or equivalent geometry after
all element transforms are applied.

The implementation must preserve source ownership so a user can later restore
an underprinted region without reconstructing it from the flattened mask.

## Block Plan Review Workspace

### Layout

A practical desktop/tablet layout:

- **Left:** Block list and print-order controls
- **Center:** Physical block preview
- **Right:** Selected block assignments, warnings, and instructions
- **Top or footer:** Production dimensions, registration, and export action

The center preview should toggle among:

- Final proof
- Raised surface
- Carve-away
- Annotated guide
- All blocks composited

### Block cards

Each card shows:

- Sequence number
- Block name
- Ink swatch
- Region count
- Bokashi indicator
- Key-block indicator
- Warning count
- Include/exclude state

### Assignment editing

The first implementation should prioritize zone-level reassignment because
Mokuri's color system already has stable zones.

Path-level editing can be used for:

- Proposed key-block detail
- Exceptional split regions
- Fine corrections

The interface should avoid presenting every SVG path as the primary workflow.
Forge elements may contain hundreds of paths.

### Preview clarity

Registration marks, paper boundaries, and instructions should be shown as
non-printing overlays in the review workspace. The transfer master preview must
make it obvious which graphics will actually appear in the exported transferable
geometry.

## Relationship to Print Engine 2.0

Block Plan and per-block Print Engine rendering share a useful conceptual
foundation but produce different results.

### Shared concepts

- Block membership
- Color resolution
- Geometry coverage
- Printing order
- Independent block identity

### Different outputs

- **Print Engine 2.0** simulates separately inked blocks to improve the digital
  impression.
- **Block Plan** creates physically accurate carving and registration masters.

The physical feature should not wait for Print Engine 2.0. A well-designed
separation model may later become a shared internal service, but simulated
inking must never modify the production masks.

## Implementation Plan

### Phase 0: Physical-output spike

Before building the full UI:

- Render a known composition into deterministic monochrome color masks.
- Map one existing Mokuri paper size onto a 9 × 12-inch block.
- Add sample kento geometry.
- Derive normal-reading hanshita and mirrored block orientations from the same
  canonical geometry.
- Produce a 300 DPI PNG.
- Produce exact-size Letter and A4 tiled output.
- Print the calibration page on a standard inkjet printer.
- Measure the verification square and assembled block boundary.
- Test carbon or graphite transfer from the output.
- Produce a normal-reading hanshita master from the same geometry.
- Paste the hanshita printed-face-down and verify the resulting block
  orientation.

**Exit criterion:** The printed and assembled master measures correctly and is
usable for both carbon/graphite and face-down hanshita transfer without manual
scaling or orientation correction.

### Phase 1: Exact production geometry

- Physical block and paper coordinate systems
- Three paper presets
- Portrait and landscape block orientation
- Actual resolved-color inventory
- One proposed block per exact color
- Keep and carve-away masks
- Existing carve-stroke and pattern subtraction
- Visual knockout
- Shared traditional kento
- Normal-reading hanshita output
- Mirrored carbon/graphite output
- Physical-detail warnings

**Exit criterion:** A saved Mokuri composition produces stable, correctly sized
per-color masks matching its visible geometry.

### Phase 2: Block Plan review

- Dedicated review workspace
- Block list and previews
- Rename and reorder
- Zone-level merge, split, and reassignment
- Include and exclude
- Editable key-block proposal
- Block Plan persistence
- Regeneration after composition changes

**Exit criterion:** The artist can turn the automatic proposal into an
intentional physical block set without editing source SVG files.

### Phase 3: Workshop package

- Exact-size printable PDF or equivalent browser print flow
- US Letter and A4 tiling
- Calibration marks
- Color-specific hanshita masters
- Mirrored carbon/graphite masters
- Keep and carve-away PNGs
- Annotated block guides
- Bokashi guide
- Atmosphere guide
- Final proof
- Human-readable manifest
- `block-plan.json`
- ZIP packaging

**Exit criterion:** The complete package can be printed, assembled, transferred,
and used at the carving bench.

### Phase 4: Physical testing and refinement

Use real blocks and paper to evaluate:

- Kento size and location
- Image placement
- Carbon/graphite transfer readability
- Hanshita printing, pasting, thinning, and carving readability
- Correct orientation after face-down hanshita placement
- Tiled-page assembly
- Minimum useful line and gap warnings
- Key-block proposal quality
- Bokashi guide usefulness
- Knockout behavior
- Printing-order recommendations

Changes from this phase should be based on observed workshop friction rather
than speculative controls.

### Phase 5: Deferred advanced features

- Per-region knockout and underprint editor
- Trapping and overlap allowances
- Multiple colors hand-inked on one block
- Custom block and paper sizes
- External registration systems
- Additional transfer profiles
- Vector SVG export
- Pigment transparency and overprint planning
- Atmosphere converted into physical blocks
- Optional physical hanko block

## First-Version Defaults

| Setting | Default |
|---------|---------|
| Block | 9 × 12 inches |
| Block orientation | Chosen to match composition |
| Paper | Recommended from 8 × 10, 8 × 8, or 7 × 5 |
| Units | Inches with simultaneous millimeter display |
| Transfer | Face-down hanshita; carbon/graphite also supported |
| Default transfer | Hanshita |
| Hanshita orientation | Normal reading; pasted printed-face-down |
| Carbon/graphite orientation | Mirrored block view |
| Registration | Traditional kagi-kento + hikitsuke-kento |
| Separation | One block per exact resolved color |
| Editing | Merge, split, reorder, include, exclude |
| Occlusion | Visual knockout, editable later |
| Key block | Automatically proposed, optional and editable |
| Bokashi | Block annotation plus separate guide |
| Atmosphere | Guide only |
| Hanko | Excluded |
| Print order | Automatically suggested and editable |
| PNG | 300 DPI |
| Printable output | Exact-size PDF, tiled when necessary |
| Package | ZIP with PDF, PNG, guides, proof, and manifest |

## Release Criteria

The Block Plan feature should remain dev-only until:

- All three paper presets produce valid layouts on a 9 × 12-inch block.
- Portrait and landscape orientation are both physically tested.
- Transfer masters print at measured scale from Microsoft Edge.
- Hanshita masters paste face-down to produce the intended mirrored block.
- The hanshita keep-area convention remains legible after pasting and thinning.
- Carbon/graphite masters transfer with the intended mirrored orientation.
- Letter and A4 tiled masters assemble without scaling drift.
- Keep and carve-away polarity is unmistakable.
- Every block receives identical kento geometry.
- Existing carved strokes and patterns appear correctly.
- Zone overrides and literal colors separate correctly.
- Bokashi is represented as an inking instruction, not carved tone.
- Atmosphere and hanko follow the agreed default treatment.
- A reopened Block Plan regenerates identical masks.
- At least one simple and one complex composition are carved or materially
  evaluated from the exported masters.
- The workflow remains understandable without requiring knowledge of Mokuri's
  internal SVG path structure.

## Deferred Decisions Requiring Studio Evidence

These should remain explicit design questions rather than being answered before
physical testing:

1. Useful default kento dimensions and exact placement for the supported paper
   presets
2. Minimum line, gap, island, and pattern dimensions worth warning about
3. Whether trapping or overlap allowance is useful in normal Mokuri work
4. Whether visual knockout is usually preferable to preserved underprinting
5. How often multiple colors should share one block
6. Whether a proposed key block is useful for typical Mokuri compositions
7. Whether 300 DPI PNG masters are sufficient beyond the PDF workflow
8. Whether direct PDF generation or browser-managed printing is more reliable
9. Whether atmosphere guides eventually need conversion into editable blocks
10. Which additional woodblock and paper dimensions should follow the initial
    9 × 12-inch workflow
11. Which thin papers and printer methods produce the most reliable digital
    hanshita without bleeding, distortion, or handling problems

## Guiding Principles

1. **Physical dimensions are authoritative.** Never silently scale an export to
   fit a page.
2. **The mask must be unambiguous.** Keep and carve-away views are always
   labeled and visually distinct.
3. **Production geometry is deterministic.** Simulated print effects never
   enter a carving master.
4. **Mokuri proposes; the artist decides.** Automatic separation accelerates
   the work without hiding physical printmaking choices.
5. **Warnings do not alter the design.** Fine or difficult geometry is surfaced,
   not silently simplified.
6. **Registration is shared geometry.** Every block receives kento from one
   physical source of truth.
7. **Workshop evidence guides complexity.** Advanced trapping, overprint, and
   transfer controls should follow real carving and printing tests.
8. **The digital proof remains the reference.** Block Plan extends Mokuri into
   physical practice without replacing its creative print experience.
9. **Transfer method determines orientation.** Face-down hanshita begins in
   normal reading orientation; direct carbon/graphite transfer begins mirrored.
