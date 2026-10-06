# Mokuri Block Plan

**Status:** Production integration in progress
**Date:** September 15, 2026
**Updated:** October 5, 2026
**Initial target:** Dev-only workshop prototype

## Implementation Status

### Phase 0 physical-output spike — implemented; physical validation pending

The first dependency-free development harness is implemented:

- `block-plan-engine.js`
- `dev/block-plan-harness.html`

The spike currently demonstrates:

- A 9 × 12-inch portrait or 12 × 9-inch landscape block
- 8 × 10-inch paper positioned from the selected print margins
- Selectable 5 × 7 and 6 × 6 print areas
- Balanced print margins with equal left/right margins, top kept close to the
  side margins where aspect ratios permit, and only a modest bottom bias
- Kento recalculated from the resulting paper and image placement
- Aspect-preserved placement of an actual Mokuri Basic Forms composition
- Exact resolved-color grouping
- Foreground knockout
- A normal-reading hanshita master
- A mirrored carbon/graphite master
- Shared kagi-kento and hikitsuke geometry
- Long-edge registration by default: the bottom edge for landscape and square
  paper, or the right edge for portrait paper
- One-inch and 25 mm calibration marks
- 300 DPI PNG generation
- Orientation-aware US Letter and A4 browser printing
- Visible Auto, Portrait, and Landscape Block Plan orientation controls
- Coordinated rotation of block, paper, print area, kento, guides, preview, and
  export dimensions
- Live Letter/A4 page-count feedback before opening the browser print dialog
- Printer-page orientation matched to the resolved physical Block Orientation
- Single-page transfer output when the paper, image, and kento fit at 100%
- Exact-size tiling only when the transferable crop cannot fit on one page
- Balanced overlapping tiles when a master only slightly exceeds the usable
  printer area, avoiding a full first page followed by an impractical sliver
  page. For example, 8 × 8 paper plus its external kento geometry is wider
  than the 8-inch usable width of Standard-margin US Letter.

The harness intentionally remains outside the production application while its
physical behavior is evaluated.

### Phase 1 production geometry — in progress

The development engine and harness now also support:

- Loading direct composition JSON, gallery-entry JSON, or Mokuri's native
  `.mokuri` composition and backup files
- Core, Kacho-e, and Ikebana/Moribana element definitions and palettes
- Custom element definitions embedded in composition data
- Saved pressure-curve values for deterministic freehand stroke geometry
- Element-local Fine, V-gouge, U-gouge, and Pattern stroke subtraction
- Pattern density and rotation in production masks
- Explicit raised-surface keep maps
- Explicit inverse carve-away maps
- Conservative warnings for very fine printable and carved details
- Grouped element/zone/type diagnostics instead of listing hundreds of raw SVG
  paths for complex Forge elements
- Namespaced SVG masks and patterns so on-screen and browser-print masters
  cannot resolve one another's hidden resources
- Element- and color-run knockout masks instead of one mask per SVG path,
  avoiding quadratic output growth on complex Forge elements
- Bounded physical-detail measurement so warnings do not dominate generation
  time on compositions containing hundreds of paths
- Idle-warmed, cached 300 DPI raster masters for browser printing, preventing
  Edge print preview from rerasterizing complex SVG knockout masks
- One coordinated multi-block browser print job, with all ordinary ink blocks
  selected by default, the optional Atmosphere block initially unselected,
  and per-block inclusion for partial reprints
- Aggregate Letter/A4 page counts and ordered per-block page labels
- Sequential 300 DPI raster preparation with visible block-by-block progress
  before opening the browser print dialog
- Browser print pages reproduce the two-line block footer outside the
  transferable master crop, preserving exact artwork scale while retaining the
  kento guidance, ink swatches, block name, and hex references
- Printer-safe browser print layouts with None and Standard ¼-inch output
  margin presets
- Reserved portrait annotation bands and a rotated landscape annotation rail,
  keeping labels, calibration marks, swatches, and block identity inside the
  selected printer-safe rectangle
- Transfer-bound raster crops for browser printing that include the physical
  paper and complete kento construction marks, with no arbitrary external
  padding or scaling to compensate for annotation space
- Mokuri-compatible None, Narrow, Standard, and Wide margin placement using
  the same geometric-mean proportions as Pull Print
- Exact-size placement retained as a separate 4 × 6, 5 × 7, or 6 × 6 mode
- Composition rotation controlled independently from physical block
  orientation, with as-composed, clockwise, and counterclockwise choices
- Auto block orientation derived from the composition's effective orientation
  after any selected rotation
- Viewing-only preview zoom with Mokuri-style Zoom In, Zoom Out, Fit, keyboard,
  and cursor-centered mouse-wheel controls; output geometry is unaffected
- Isolated responsive SVG-document center previews, avoiding both inline-SVG
  mask conflicts and fixed-surface image resampling artifacts without paying
  the cost of print-resolution rasterization
- Read-only grab panning with left or middle mouse drag, a top-centered Fit
  position, and independently scrolling desktop source, preview, and output
  panes
- Production paper choices for 8 × 10, 5 × 7, 4 × 6, 6 × 6, and 8 × 8
  inches, plus validated Custom dimensions
- Editable Ink and Paper Reveal proposal roles
- Paper Reveal masks that preserve visual stacking while generating no
  physical block
- One authoritative dark-gray Block Surface master using native area edges and
  native detail strokes, without generated contour expansion
- Hanshita and Carbon output profiles derived from the same Block Surface
  geometry, differing only in orientation and production instructions
- A two-line production footer that separates the kento carving-practice note
  from block identity and shows the suggested ink swatch with exact hex
  reference
- A separate dark-gray Carve Away inverse reference
- Subject-aware block names derived from each block's resolved color and
  contributing element names
- Canonical exact-hex names shared by all current Core, Kachō-e, and Moribana
  palette tiles
- A fallback color-family classifier with light/deep qualifiers for arbitrary
  literal colors that are not present in the canonical catalog
- A proposed physical printing sequence with Atmosphere first, followed by
  ordinary ink blocks from lightest to darkest
- A calm Arrange Blocks mode for overriding the proposed printing sequence
  without confusing structural order with print-job inclusion
- Reversible whole-block combining for selectively inking multiple colors on
  one carved block, with segmented swatches and generated subject names
- Separation of combined blocks back into their original automatic proposals
- Reset Arrangement restores both the suggested sequence and unmerged block
  proposal without changing Paper Reveal decisions
- Near-paper color suggestions based on the selected paper type
- One optional first Atmosphere block containing separate background and
  foreground fields with their own colors and bokashi instructions
- A normal-reading Physical Proof composed only from proposed ink blocks

Current spike limitations:

- Kento placement is generated consistently across blocks, while final carved
  notch width and depth remain workshop decisions based on paper and carving
  practice.
- Light-to-dark printing order is currently a relative-luminance heuristic.
  Pigment opacity, transparency, and intentional overprinting are not yet
  modeled, so the artist may override the proposed sequence.
- The first canonical color-name set is implemented but remains under artistic
  review in `dev/palette-name-review.html`. The review page links exact hex
  matches, persists edits locally, and exports only corrections from the
  initial proposal.
- Block merges currently persist across layout and output changes within the
  active harness session, but assignment overrides are not yet serialized into
  composition data.
- Legacy element-wide carve-pattern assignments still require review; current
  freehand Pattern-tool strokes are represented in production masks.
- Physical-detail analysis currently covers narrow strokes and pattern marks;
  isolated fill islands and narrow negative gaps are not yet measured.
- Detailed bokashi guides, mist blocks, background-carve subtraction,
  key-block proposals, persistence, PDF packaging, and ZIP packaging remain
  later phases.
- Exact print scaling, tiled-page assembly, carbon transfer, and face-down
  hanshita behavior still require manual Edge and workshop testing.

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
| 5 × 7 | 5 × 7 in | 127 × 177.8 mm | Medium compositions and common precut paper |
| 4 × 6 | 4 × 6 in | 101.6 × 152.4 mm | Small studies and postcard-scale work |
| 6 × 6 | 6 × 6 in | 152.4 × 152.4 mm | Compact square compositions |
| 8 × 8 | 8 × 8 in | 203.2 × 203.2 mm | Square compositions |
| Custom | User-defined | User-defined | Other paper cut to fit the 9 × 12 block and kento |

Both inches and millimeters should be displayed. Inches are canonical for these
initial presets; metric values are exact conversions.

### Initial print-area presets

The Phase 0 harness initially exercises two finished print sizes on 8 × 10-inch
paper:

| Print area | Left/right margins | Top/bottom margins |
|------------|--------------------|--------------------|
| 5 × 7 in | 1.5 / 1.5 in | 1.25 / 1.75 in |
| 6 × 6 in | 1 / 1 in | 1.75 / 2.25 in |

These use the same modest bottom-weighting already present in Mokuri's digital
print presentation. The print rectangle remains centered on the woodblock, and
the paper placement is derived from the selected margins.

The development harness also supports a **Mokuri Margins** placement mode using
the production application's existing None, Narrow, Standard, and Wide
presets. These presets are proportional rather than fixed-inch measurements:
the side, top, and bottom values are fractions of the artwork's geometric-mean
dimension. Block Plan solves that relationship in reverse, finding the largest
aspect-preserved image whose complete margin wrapper fits the selected physical
paper. This preserves Mokuri's larger bottom margin while expressing the final
placement in measurable inches.

The composition's saved `presentationMargin` is selected when a composition is
loaded. Artists can switch back to **Exact Image Size** when validating a
specific 4 × 6, 5 × 7, or 6 × 6 production area.

### Composition rotation

Composition rotation is independent from physical Block Plan orientation:

- As composed
- 90° clockwise
- 90° counterclockwise

Auto Block Plan orientation follows the effective composition aspect ratio
after rotation. Explicit Portrait or Landscape selection keeps the physical
block and paper fixed while rotating and refitting only the composition. This
avoids the earlier prototype behavior in which every landscape block
implicitly rotated its artwork.

The right-angle **corner kento** (`kagi-kento`) remains anchored to the
resulting paper corner. The **side kento** (`hikitsuke-kento`) remains on the
same registered paper edge but shifts laterally with the print area so it stays
usefully positioned relative to the composition. Its one-inch edge line has a
centered 180-degree construction circle drawn outward from the paper.

### Preset recommendation

Mokuri should recommend a paper preset from the composition aspect ratio:

- Near-square compositions: 8 × 8
- Medium portrait or landscape compositions: 8 × 10
- Medium rectangular compositions: 5 × 7
- Small rectangular compositions: 4 × 6
- Compact square compositions: 6 × 6
- Other proportions: Custom, after physical-fit validation

This is a recommendation only. The artist can choose any preset or enter
custom dimensions and preview the resulting image placement.

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

Add **Edit Block Plan** to the Inking Workbench.

The Inking Workbench is the appropriate entry point because block separation
depends on resolved ink choices, zone overrides, and bokashi decisions. The
command immediately generates or refreshes the automatic proposal and opens a
dedicated Block Plan review workspace. There is no separate Prepare and Review
phase because proposal generation is effectively immediate.

The first production integration provides a responsive full-screen workspace
that follows Mokuri's existing Gallery and workbench adaptation patterns:

- Three-column Block Plan, preview, and Physical Output panes in landscape
- Preview above a compact two-pane control deck when a tablet or window becomes
  portrait
- Two internal columns in the portrait Block Plan pane for the block list and
  selected-block details
- Two internal columns in portrait Physical Output for Layout and Block
  Preparation, following the Ink Workbench's compact column treatment
- Preview-first stacked controls on narrow portrait screens
- Compact three-column operation retained on short landscape screens
- Gallery-style navigation with the workspace title at left and Exit at right

The left Block Plan pane contains the scrollable block list and the selected
block descriptor at its bottom. Block identity, color, source regions, and
inking notes stay with the block-manipulation surface rather than appearing in
Physical Output. Fine-detail warnings remain available in the plan data for
future tooling, but are not shown in the streamlined production workspace
because they do not currently offer actionable corrections.

Block rows follow the same quiet rounded-rectangle control language as the
other Mokuri workbenches. Every row uses stable columns for inclusion, color,
name, and print order. Generated block names remain left-aligned and may use
two lines; source-color and region metadata stays directly beneath the name.

The Ink Workbench entry and all Block Plan option buttons reuse Mokuri's shared
panel border, background, text, selection, accent, and radius tokens. Block
Plan does not introduce a separate brown button palette or pill-shaped control
language.

The right Physical Output inspector is configuration-only. Its Layout section
contains, in order, Block Orientation, Print Size, and Margins. Print Size
offers 8 × 10, 5 × 7, 4 × 6, 6 × 6, 8 × 8, and Custom. Custom accepts inches
or millimeters through an inline expansion directly below the Print Size row;
it does not open a modal or change the preview when expanded. The custom size
becomes active only after Apply Size validates it. The paper must leave enough
surrounding room for complete kento construction marks. None, Narrow, Standard,
and Wide composition margins share Mokuri's existing `presentationMargin`
state and regenerate the plan immediately.

After a section break, Block Preparation contains Transfer, Output Sheet, and
Output Margins. Output Margins offers None and Standard, with Standard as the
default. Every choice group stays on one row.

### Step 1: Automatic plan and paper choice

Opening the workspace generates the initial separation using the current
composition and its resolved inks. The Print Size control establishes:

- 9 × 12-inch block orientation
- Paper preset or validated custom dimensions
- Image placement
- Kagi-kento position
- Hikitsuke-kento position
- Composition placement from Mokuri's current presentation margins

Block Preparation belongs in the persistent Physical Output inspector rather
than an interstitial print modal. The workspace provides:

- Hanshita or Carbon / Graphite transfer orientation
- Block Surface or Carve Away master polarity through the main preview modes
- US Letter or A4 printer sheets
- Portrait or landscape source-page layout follows the resolved Block
  Orientation. Auto resolves from the composition, with square compositions
  resolving to portrait; explicit Portrait or Landscape is preserved for the
  Letter/A4 printer sheets. Mokuri writes that physical width and height into
  CSS `@page`.
- None or Standard ¼-inch output margins
- A summary that labels the resolved Block orientation and confirms that
  Printer Sheets follow it, alongside included-block count and live page-count
  feedback
- Exact-size 300 DPI preparation with automatic overlap tiling

The **Print Block Plan** action sits at the bottom of Physical Output, mirroring
Pull Print in the Printing Workbench. It uses the visible settings immediately
and opens the browser print dialog without another Mokuri confirmation screen.
Both Print Block Plan and the Ink Workbench's Edit Block Plan entry retain the
standard Pull Print action width when their responsive containers grow, while
remaining full-width when the available pane is narrower.
Letter/A4 and Output Margins remain Mokuri settings because browser print
choices are not exposed back to page JavaScript and therefore cannot drive
pre-dialog tiling or annotation placement.

Print preparation uses the status area only while masters are rasterized and
the browser dialog opens. It clears after the print lifecycle instead of
leaving browser-specific orientation caveats in the production workspace.

The Block Plan is saved as part of the composition so the same production files
can be regenerated later.

### Step 2: Automatic separation

Mokuri resolves the actual final ink used by every printable zone and proposes:

- One block for each exact resolved ink color
- An editable Paper Reveal role for regions intended to expose the selected
  paper rather than print a pale pigment
- An optional key block containing suitable dark line and detail work
- Broad physical background and foreground atmosphere proposals, retaining
  their full raised fields and describing the digital gradients as bokashi
  instructions
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

### Step 4: Registration and master preview

The review workspace shows:

- The finished print orientation
- The mirrored block orientation
- The selected Hanshita or Carbon master orientation
- The paper boundary
- The image boundary
- Shared kento geometry
- Block and paper dimensions
- Page tiling when required

The first version supports two output profiles derived from the same Block
Surface geometry:

- **Hanshita:** normal-reading geometry intended to be pasted printed-face-down
  onto the block
- **Carbon/graphite:** mirrored block geometry intended to be traced directly
  onto the block

Hanshita is the traditional default. Choosing an output profile changes only
the production-master orientation and instructions; it does not change the
underlying block geometry.

### Step 5: Print Block Plan

Print Block Plan directly prepares the included physical ink blocks
sequentially as 300 DPI rasters, places them on printer-safe Letter or A4
pages, and opens the browser print dialog. There is no intermediate Mokuri
modal. Masters remain at Actual Size / 100%; if the transferable paper and
complete kento geometry do
not fit the selected safe rectangle, Mokuri adds overlapping pages instead of
reducing scale.

Each page keeps its composition, block name, page number, transfer method,
crop coordinates when tiled, calibration marks, kento note, suggested ink
swatch, and exact hex value inside the selected printer-safe allowance. Ink
swatches are inline SVG so they survive browser printing when background
graphics are disabled.

Downloadable PNG/SVG masters, a manifest, and ZIP packaging remain later
workshop-package enhancements.

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

### Canonical palette color names

Mokuri now maintains one proposed canonical name for each exact color value
used by the current production palettes. The initial inventory contains 85
palette tiles representing 80 unique hex colors across Core, Kachō-e, and
Moribana. Exact hex matches share one name automatically. The initial proposals
remain subject to artist review before they are treated as final terminology.

The naming voice favors distinctive one-word terms drawn from pigments,
materials, plants, ceramics, and atmosphere. All current canonical names use
one word, including `Konjo`, `Abyss`, and `Nori` for the final three colors that
previously required compound labels.

The source of truth is `assets/palette-catalog.js`. It contains the Core palette
definitions, the canonical exact-hex name catalog, normalization helpers, and
palette validation. Keeping the names keyed by color rather than duplicating
five-entry name arrays prevents identical colors from drifting to different
labels in different styles.

The visual review surface is `dev/palette-name-review.html`. It provides:

- All palettes grouped by Creative Style
- Large swatches on selectable light or dark surrounds
- Stable style, palette, and slot references
- Linked editing for exact duplicate colors
- A focused list of names that deserve extra artistic review
- Local review persistence
- Correction export containing only names changed from the proposal

Canonical swatch metadata has broader application:

- Tooltips and accessible labels for swatches in the Ink Workbench
- Deliberate Block Plan block names
- Clearer saved color overrides and production manifests
- Future pigment, transparency, and overprint guidance

Runtime palette code derives the effective five slot names from the canonical
catalog and exposes them as each palette's `colorNames` array without changing
the existing `colors` arrays. Block Plan resolves names in this order:

1. Canonical exact-hex name
2. Known procedural atmosphere name
3. Nearest-family fallback for literal or custom colors
4. Light/deep qualifier when distinct resolved inks remain ambiguous

Ink Workbench palette previews, zone swatches, and cross-palette accents expose
the canonical names through tooltips and accessible labels. New palettes must
add names for previously unseen hex values; validation reports any missing
entries. The nearest-family classifier remains deliberately secondary so
custom literal colors still receive useful Block Plan names.

Palette IDs must also be unique across Creative Styles. The original Core and
Kachō-e autumn palettes both used `aki`; legacy `aki` remains the Kachō-e ID,
while the previously shadowed Core palette now uses `core-aki`.

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

## Block and Guide Views

Each block exposes two geometric views plus the Physical Proof reference.

### 1. Block Surface

Black represents wood that remains raised and receives ink.

White represents wood that does not print.

This is the authoritative geometry for production output. Hanshita and
carbon/graphite masters both derive directly from it. The chosen method changes
orientation and instructions, not the rendering or block geometry.

### 2. Carve-away map

Black or hatched material represents wood to remove.

White represents the retained printing surface.

This view is an inverse carving reference, not a second production geometry.

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
The first physical atmosphere proposal does not yet subtract those strokes
from atmosphere blocks. Until that geometry is implemented, the plan must warn
that background carving remains reference-only.

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

### Block Surface master

Block Surface is the single production rendering. It uses a dark-gray retained
area whose native edge is the carve boundary, with native detail strokes shown
directly. It does not synthesize contours with SVG morphology or outline every
source fill. Hanshita presents this master in normal reading orientation;
Carbon mirrors the same master for direct tracing. Carve Away is the inverse
bench reference. Instructional graphics must not overlap geometry intended for
transfer in either output profile.

## Paper Reveal

Paper Reveal is ordered negative geometry, not white ink and not a physical
paper block.

When a proposed exact color is assigned the Paper Reveal role:

- Its records stay in composition order and knock out earlier ink geometry.
- Later ink geometry may print over it, preserving Mokuri's visual stacking.
- It receives a normal-reading Paper Mask reference where black means
  “must remain unprinted.”
- It is excluded from physical block numbering, transfer masters, raster
  warmup, page totals, PNG masters, and multi-block print jobs.
- Near-paper colors are suggested for review but are never converted
  automatically, because pale pigment may be intentional.

Paper Reveal has visual stacking order but no physical printing order. The
Physical Proof composites only Ink-role proposals on the selected paper base,
making the intended exposed-paper regions visible before workshop output.

## Atmosphere

Background and foreground atmosphere become two disjoint raised fields on one
optional physical Atmosphere block. This is necessary for Paper Reveal
geometry to cut openings from a dark wash, as in a pale moon intended to expose
paper, without requiring separate background and foreground blocks.

The Atmosphere block is always the first proposed physical block and is
initially excluded from the print job. The artist may include it when carving
and selectively inking both fields, or omit it when producing the atmosphere
by another process. Each digital gradient becomes a separate bokashi inking
instruction rather than carved tonal relief. An atmosphere guide may show:

- Coverage boundary
- Horizon location
- Gradient direction
- Resolved colors
- Mist-band positions
- Relevant background carve marks
- Relationship to the final proof

Mist remains guide-only. Background carve strokes are not yet subtracted from
the proposed atmosphere fields and must produce an explicit warning.

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

The first version supports the traditional two-part carved kento system:

- One right-angle **corner kento** (`kagi-kento`)
- One long-edge **side kento** (`hikitsuke-kento`) with a centered outward
  180-degree construction circle
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

- Treat the browser and printer driver as unable to report the printer's true
  physical unprintable area.
- Offer explicit output-margin presets: Standard at ¼ inch and None at
  0 inches. Standard is the default.
- Derive a printer-safe page rectangle from the selected preset before testing
  whether a master fits.
- Reserve annotation geometry inside that safe rectangle: compact header and
  footer bands in portrait, or a rotated side rail in landscape.
- Keep the transferable master at exactly 100%. If the master plus required
  annotation space does not fit, fall back to additional overlapping tiles
  rather than reducing scale.
- Install the dynamic CSS `@page` rule in the document head before browser
  pagination. Use explicit physical width and height rather than a named paper
  plus orientation hint, so the source page passed to Chromium has one fixed,
  unambiguous geometry. Chromium may leave its native Orientation control
  visible with misleading state, but that control does not override a
  CSS-fixed source page; the rendered preview is authoritative.
- Derive browser-print raster crops from the union of the physical paper and
  complete kento geometry. Downloaded master formats may independently retain
  additional export padding where useful.
- Draw the kagi-kento with crossed registration lines and a three-quarter
  construction circle around the outside of the paper-facing corner.
- Place the hikitsuke on the same long paper edge as the kagi-kento by default,
  maximizing the registration baseline and rotational stability. Portrait
  paper uses the right edge; landscape and square paper use the bottom edge.
- Draw a 180-degree circle centered on the hikitsuke line, opening away from
  the paper and composition.
- Expand browser-print transfer bounds as needed to retain the complete kento
  construction symbol rather than clipping it at the paper boundary.
- State the selected margin and explain when safe margins force tiling.

The optional printer calibration sheet remains deferred. Physical printer
testing is still required because the presets express an artist-selected
allowance rather than printer hardware discovery.

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
- **Right:** Physical Output layout and block-preparation controls
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
- Responsive desktop, portrait tablet, narrow portrait, and short landscape
  layouts
- Physical Print Size control and validated Custom dimensions
- Shared None, Narrow, Standard, and Wide image-margin controls
- Ink / Paper Reveal role assignment
- Paper Mask and Physical Proof reference views
- Physical background and foreground atmosphere proposals
- Rename and reorder
- Zone-level merge, split, and reassignment
- Include and exclude
- Editable key-block proposal
- Block Plan persistence
- Regeneration after composition changes

**Exit criterion:** The artist can turn the automatic proposal into an
intentional physical block set without editing source SVG files.

### Phase 3: Workshop package

- Exact-size browser print flow
- US Letter and A4 printer-safe tiling
- None and Standard output-margin presets
- Calibration marks and in-safe-area page annotations
- Color-specific hanshita masters
- Mirrored carbon/graphite masters
- Block Surface and Carve Away print masters
- Keep and carve-away PNG downloads
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
| Paper | 8 × 10, 5 × 7, 4 × 6, 6 × 6, 8 × 8, or validated Custom |
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

- All five paper presets and valid Custom dimensions produce correct layouts on
  a 9 × 12-inch block.
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
5. **Diagnostics do not alter the design.** Fine or difficult geometry may be
   retained in plan data for future tooling, but is not silently simplified or
   promoted into the primary workspace without an actionable correction.
6. **Registration is shared geometry.** Every block receives kento from one
   physical source of truth.
7. **Workshop evidence guides complexity.** Advanced trapping, overprint, and
   transfer controls should follow real carving and printing tests.
8. **The digital proof remains the reference.** Block Plan extends Mokuri into
   physical practice without replacing its creative print experience.
9. **Transfer method determines orientation.** Face-down hanshita begins in
   normal reading orientation; direct carbon/graphite transfer begins mirrored.
