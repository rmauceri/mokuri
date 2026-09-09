# Kacho-e and Ikebana Style Pack Curation Plan

**Status:** Proposed for review  
**Date:** September 8, 2026  
**Target:** Dev-only refinement before either style is enabled on `mokuri.art`

## Purpose

Kacho-e and Ikebana are implemented and available for testing in the dev
experience, but neither is ready for production release. The Active Style
infrastructure works. The remaining work is to define a clear, intentional
Featured library for each style and present it in a useful order.

The current tag-overlap algorithm does not provide enough control:

- **Kacho-e is under-selected.** It finds fauna and flora but misses much of the
  habitat, water, weather, and seasonal setting appropriate to the tradition.
- **Ikebana is over-selected.** Broad tags such as `organic`, `minimal`, and
  `structural` admit unrelated landscapes, fauna, figures, and basic forms.

Adding weighted affinity rules and a larger role-tag taxonomy would make the
result more configurable, but not necessarily easier to understand or
maintain. Mokuri's element library is finite, curated, and visual. Membership
in a style's Featured library should therefore be an explicit product and
creative decision.

This plan replaces automatic affinity-based release curation with
manifest-defined picker sections containing ordered element IDs.

## Release Status

The Kacho-e and Ikebana source files are present in the repository and loaded by
the application, including on `main`. They are not exposed in production:

- The style selector is hidden unless the dev-style flag is enabled.
- Production forces `STATE.activeStyle` to Core Mokuri.
- The production element picker filters out non-Core pack elements.

The correct status is **implemented but not released**.

## Goals

1. Give Kacho-e and Ikebana clear, appropriate Featured categories.
2. Combine each pack's strongest elements with explicitly selected Core
   companions.
3. Make Featured membership and ordering deterministic.
4. Keep every allowed element available under **All Elements**.
5. Allow each pack to be reviewed and released independently.
6. Keep the implementation small enough to understand directly from the pack
   manifest.

## Non-Goals

- Kacho-e must not reference Ikebana-owned elements.
- Ikebana must not reference Kacho-e-owned elements.
- Enabling one style must not automatically enable another.
- Tags will not determine production Featured membership for these packs.
- This work will not introduce weighted affinity scoring.
- This work will not create a generalized dependency or deferred-loading
  system.
- This work will not redefine the global category of each element.
- This work will not hide non-Featured elements from All Elements.

## Curation Principles

### 1. A style is a creative grammar, not a file boundary

Pack-owned elements provide the distinctive vocabulary, but selected Core
elements may be equally important. Selection should answer:

> Does this specific element help the artist make work in this tradition?

It should not be inferred only from where the element is defined or which broad
descriptive tags it carries.

### 2. Featured is selective; All Elements remains complete

The Active Style principle remains:

> Nothing hidden, just prioritized.

Only reviewed elements belong in Featured. Pack-owned elements are not
automatically entitled to Featured placement: weaker, redundant, or specialized
variants may remain under All Elements.

### 3. Explicit membership is intentional maintenance

When a new Core element is added, it should not silently appear in either style
because its tags overlap. Adding it to a style should require:

1. Visual review at all carve levels.
2. Confirmation that its scale and visual mass fit the style.
3. An explicit manifest change placing it in a section and display position.

This maintenance cost is desirable because it preserves creative intent.

### 4. Ordering is part of the guidance

The picker should quietly teach the style. Each manifest defines:

- Section order
- Element membership
- Element order within each section
- Which variants are primary
- Which variants remain under All Elements

Source-file order, affinity score, and category population must not affect the
Featured presentation.

### 5. Existing tags remain descriptive metadata

Existing tags may continue to support diagnostics, future search, or
experimental pack discovery. They are not the release authority for Kacho-e or
Ikebana.

## Deterministic Manifest Model

Add an optional `pickerSections` field to a pack manifest:

```js
pickerSections: [
  {
    id: 'birds',
    label: 'Birds',
    elementIds: [
      'bushwarbler-flight',
      'swallow-flight',
      'kingfisher-crouch',
      'heron-wading',
      'sparrow',
      'crane-standing',
    ],
  },
  {
    id: 'flowers-branches',
    label: 'Flowers & Branches',
    elementIds: [
      'peony',
      'morning-glory',
      'matsu-branch',
      'cherry-branch',
      'ume-blossom',
      'iris-cluster',
    ],
  },
]
```

### Selection behavior

For a pack with `pickerSections`:

1. Render sections in manifest order.
2. Render elements in each section's `elementIds` order.
3. Permit references only to:
   - Elements owned by the active pack
   - Elements owned by Core
   - Custom user elements, using the existing custom-element behavior
4. Ignore and warn about missing element IDs.
5. Ignore and warn about IDs owned by another expansion pack.
6. Ignore and warn about duplicate IDs; the first declaration wins.
7. Place all other allowed elements under **All Elements**.
8. Render All Elements using the existing global categories.

For a pack without `pickerSections`, preserve the current affinity behavior as a
backward-compatible fallback:

```js
if (pack.pickerSections) {
  return getCuratedPackElements(pack, allElements);
}

return getAffinityElements(pack.id, allElements);
```

No `requiredAny`, `weightedTags`, `minScore`, include/exclude rule engine, or
new qualification taxonomy is required.

### Ownership validation

The manifest's existing `elementIds` remains the declaration of pack ownership.
`pickerSections` controls presentation, not ownership.

An element referenced by a section is valid when:

```js
element.pack === 'core' || element.pack === activePack.id
```

Elements with no `pack` field may be treated as Core for compatibility until
all definitions are normalized.

## Kacho-e

### Creative definition

> **Close observation of living nature, shaped by season, habitat, weather,
> and poetic association.**

Kacho-e should not be limited to isolated fauna and flora. Birds, fish,
insects, and selected small animals may be paired with flowers, branches,
water, rocks, moonlight, rain, snow, and other seasonal signs.

The living subject should remain dominant. Supporting material should provide
context without turning the composition into a broad landscape or genre scene.

### Recommended Featured sections

Use four sections for the initial release. This is enough structure to
communicate the style without producing an overly fragmented picker on phones
and tablets.

#### 1. Living Subjects

Purpose: the primary observed subject.

Pack candidates:

- Bush warbler
- Swallow
- Kingfisher
- Heron and egret
- Koi
- Dragonfly and butterfly
- Cicada, cricket, and beetle

Core candidates requiring visual and variant review:

- `koi`
- `koi-leaping`
- `koi-overhead`
- `dragonfly`
- `butterfly`
- `swallow-soaring`
- `sparrow`
- `sparrow-alert`
- `frog`
- `frog-leaping`
- `turtle`
- `rabbit`
- `rabbit-laying`
- `crane-standing`
- `crane-flying`
- `crane-landing`

Not every pose should be Featured. Select the strongest and most compositionally
useful variants; keep secondary poses under All Elements.

#### 2. Flowers & Branches

Purpose: botanical subjects and seasonal pairings.

Pack candidates:

- Peony variants
- Morning glory variants
- Wisteria
- Iris
- Lilypad and lotus variants
- Susuki
- Pine branch

Core candidates:

- `cherry-branch`
- `sakura-blossom`
- `ume-blossom`
- `chrysanthemum`
- `ginko-branch`
- `pine-bough`
- `bare-branch`
- `maple-branch`
- `iris-cluster`
- `susuki-grass`
- `lotus-cluster`

Full trees, groves, and treelines should remain under All Elements unless an
actual preset demonstrates that they can stay subordinate to the living
subject.

#### 3. Water & Habitat

Purpose: localized natural context that supports close observation.

Core candidates:

- `tranquil-pond`
- `pond-edge`
- `water-ripples`
- `gentle-waves`
- `flowing-stream`
- `shore-waves`
- `river-rocky`
- `rock-formation`

Large waterfalls, oceans, mountains, villages, and broad terrain should not be
Featured in the initial release.

#### 4. Season & Weather

Purpose: poetic atmosphere and seasonal context.

Core candidates:

- `full-moon`
- `cloud-wisp`
- `rain-curtain`
- `snow-fall`

`cloud-bank`, `farmland`, and `terrace` should remain under All Elements unless
composition testing establishes a clear need.

### Initial Kacho-e picker shape

```js
pickerSections: [
  { id: 'subjects', label: 'Living Subjects', elementIds: [] },
  { id: 'botanical', label: 'Flowers & Branches', elementIds: [] },
  { id: 'habitat', label: 'Water & Habitat', elementIds: [] },
  { id: 'season', label: 'Season & Weather', elementIds: [] },
]
```

The final ID lists must be filled only after the visual inventory review.

### Kacho-e presets

Create at least three compositions before release:

1. **Heron at Pond Edge** — heron, lotus or iris, pond edge, restrained water
2. **Autumn Insects** — cricket or beetle, susuki, warm seasonal atmosphere
3. **Moonlit Branch** — bird or cicada, pine or maple branch, moon, open paper
4. Optional: **Koi and Rain** — koi, water ripples, rain curtain, minimal flora

The presets should verify that habitat and atmosphere remain supporting actors.

### Kacho-e cleanup

- Normalize all `pack: 'kacho_e'` values to `pack: 'kacho-e'`.
- Correct `initimate` on `wisteria-vine`.
- Review all 30 pack-owned elements and select primary variants.
- Review proposed Core companions at all carve levels and in print output.
- Confirm whether the displayed name should be `Kacho-e` or `Kachō-e`.
- Review the four palettes and their order.
- Update stale counts and affinity descriptions in related documentation.

## Ikebana

### Name and scope

The user-facing style is **Ikebana**, not Moribana.

Moribana was the original inspiration, but the pack should support a broader
arrangement vocabulary:

- Shallow-vessel arrangements
- Upright and slanting forms
- Tall-vessel arrangements
- Restrained seasonal arrangements
- Formal branch compositions
- Arrangements presented in a minimal display environment

Recommended description:

> **Vessels, flowers, branches, and seasonal materials composed through line,
> balance, asymmetry, and empty space, inspired by the way Japanese prints
> capture the art of arrangement.**

### Creative definition

> **The deliberate arrangement of natural materials, where vessel, structural
> line, floral mass, supporting foliage, and empty space form one composition.**

An element should be Featured because it serves an arrangement role, not merely
because it is organic or visually minimal.

### Recommended Featured sections

#### 1. Vessels

Pack candidates:

- `vessel-suiban`
- `vessel-oval`
- `vessel-rectangle`
- `vessel-bamboo`
- `vessel-tsubo`

Core candidates:

- `vessel-tall`
- `tsubo-jar`

Review every vessel for a clear stem opening, distinct silhouette, appropriate
default scale, and useful glaze color zones.

#### 2. Branches & Line

Pack candidates:

- `branch-ume-crooked`
- `matsu-branch-upright`
- `bamboo-branch`
- `bamboo-shoots`

Core candidates:

- `cherry-branch`
- `pine-bough`
- `bare-branch`
- `maple-branch`
- `ginko-branch`

Full trees, groves, and landscape-scale plants should remain under All
Elements. `twisted-pine`, `weeping-willow`, and `wisteria-vine` may be reviewed
but should not be included automatically.

#### 3. Flowers & Foliage

Pack candidates:

- `blossum-kiku`
- `blossum-ran`
- `blossum-suisen`
- `blossom-kacho`
- `blossum-chrysanthemum`
- `tsubaki-single`
- `tsubaki-cluster`
- `lotus-pod`

Core candidates:

- `chrysanthemum`
- `iris-cluster`
- `sakura-blossom`
- `ume-blossom`
- `susuki-grass`
- `lotus-cluster`

Kacho-e flowers are not candidates. If a botanical element is broadly useful
enough for both packs, it should be evaluated for promotion to Core in a
separate change rather than referenced across expansion packs.

#### 4. Supports & Display

Purpose: arrangement mechanics and optional restrained presentation context.

- Restore or rebuild `kenzan`.
- Review `lantern-small` and `lantern-round`.
- Keep lanterns under All Elements unless composition presets demonstrate that
  they improve the arrangement without competing with it.

### Initial Ikebana picker shape

```js
pickerSections: [
  { id: 'vessels', label: 'Vessels', elementIds: [] },
  { id: 'line', label: 'Branches & Line', elementIds: [] },
  { id: 'flowers', label: 'Flowers & Foliage', elementIds: [] },
  { id: 'supports', label: 'Supports & Display', elementIds: [] },
]
```

The first visible section should be Vessels because it gives the composition an
anchor and matches the current creation workflow.

### Ikebana presets

Create at least four compositions:

1. **Basic Upright** — shallow vessel, tall primary branch, shorter secondary
   line, one focal flower
2. **Slanting Arrangement** — horizontal pine or maple, low floral mass,
   asymmetric vessel placement
3. **Tall Vessel** — tsubo or bamboo vessel with a long descending or rising
   line
4. **Seasonal Restraint** — bare branch and narcissus with extensive empty
   space
5. Optional: **Display Niche** — arrangement plus one approved display accent

At least one preset should use no flowers, demonstrating that line and negative
space can carry the arrangement.

### Ikebana atmosphere direction

Clean Paper should remain the release default.

The current Display Niche preset uses night plus water, which reads more like
an outdoor landscape than a tokonoma or interior display. Warm Studio, Cool
Studio, and Display Niche should be judged with complete arrangements rather
than as isolated gradients. Redesign or remove any preset that introduces a
ground plane competing with the arrangement.

### Ikebana cleanup

- Change all user-facing references from Moribana to Ikebana.
- Decide whether to migrate the internal ID from `moribana` to `ikebana`.
- If renamed, read the existing `mokuri-activeStyle` value through a
  compatibility alias.
- Correct `blossum-*` ID misspellings before release, with save/import
  migration if those IDs have escaped into compositions.
- Restore or rebuild the kenzan.
- Review vessel openings and default scale relationships.
- Review redundant chrysanthemum and camellia variants.
- Decide whether the lanterns remain under All Elements.
- Update or replace `docs/moribana_style_pack.md` to reflect the broader scope.

## Preset Identity Fix

Pack journeys currently use numeric `startingPreset` indexes into the global
gallery preset array. Kacho-e defines an empty preset array while its journeys
reference indexes `0` and `1`; Ikebana also references numeric indexes without
declaring pack presets. These indexes can resolve to unrelated Core presets.

Before adding pack presets:

1. Give every gallery preset a stable ID.
2. Replace `startingPreset` with `startingPresetId`.
3. Resolve a journey's preset by ID.
4. Warn and continue with a blank composition when an ID is missing.
5. Migrate Core journeys at the same time so only one lookup system remains.

## Implementation Plan

### Phase 1: Curated inventory

Review pack-owned elements and proposed Core companions in the dev experience.
For each element, record:

- Featured
- Secondary / All Elements
- Revise
- Remove
- Section
- Preferred display position

Review criteria:

- Visual quality at block, shape, and detail carve levels
- Final print quality
- Distinctiveness from nearby variants
- Default scale and visual mass
- Usefulness in more than one composition
- Whether it communicates the style without explanation

**Deliverable:** approved, ordered section tables for each pack.

Do not implement automatic selection rules before this inventory is approved.

### Phase 2: Data cleanup and stable preset IDs

1. Normalize pack IDs and tag spelling.
2. Remove duplicate manifest references, including the duplicate Core
   `torii-gate` entry.
3. Resolve pack naming and element ID migrations.
4. Add stable preset IDs and migrate journey references.
5. Update stale documentation counts.

**Deliverable:** consistent data suitable for deterministic lookup.

### Phase 3: Manifest-defined picker sections

1. Add optional `pickerSections` support.
2. Render sections and elements in manifest order.
3. Validate missing, duplicate, and cross-pack references.
4. Preserve current affinity behavior only as a fallback for manifests without
   explicit sections.
5. Preserve All Elements as the final accordion.
6. Keep custom user elements available using the current behavior.

**Deliverable:** predictable Featured libraries with no affinity tuning.

### Phase 4: Pack manifest curation

Populate the approved ID lists:

- Four Kacho-e sections
- Four Ikebana sections
- Selected primary variants only
- Explicit Core companions only
- No cross-expansion-pack references

**Deliverable:** final dev manifests.

### Phase 5: Curated composition presets

1. Create at least three Kacho-e presets.
2. Create at least four Ikebana presets.
3. Test each preset on phone, tablet, and desktop.
4. Use the presets to revise scale, ordering, atmosphere, and element choices.
5. Confirm journeys resolve the intended preset IDs.

**Deliverable:** production-quality starting points and validated inventories.

### Phase 6: Independent enablement

After curation is stable, replace the binary `mokuri-dev-styles` flag with an
enabled-pack set:

- Enable Kacho-e and Ikebana independently.
- Show Core plus enabled style chips.
- Filter elements and palettes to enabled packs.
- Keep saved compositions containing disabled elements loadable.
- Do not automatically enable packs because of element references.

Independent enablement is a release mechanism and should not be coupled to
picker curation.

### Phase 7: Release review

For each pack:

1. Verify every section reference exists.
2. Verify every reference belongs to Core or the active pack.
3. Verify no duplicate IDs appear in Featured.
4. Verify weaker variants remain reachable under All Elements.
5. Verify palettes and atmosphere presets with complete compositions.
6. Verify saved and imported compositions reopen correctly.
7. Verify picker scrolling and thumbnails on low-memory iPad.
8. Verify first-run journeys and style switching.
9. Bump app and service-worker versions.
10. Enable the pack on production only after explicit visual approval.

## Recommended Release Sequence

Release **Kacho-e first**.

Kacho-e already has a coherent subject vocabulary. Its remaining work is
primarily variant selection, habitat expansion, ordering, and presets.

Ikebana requires deeper content decisions:

- Vessel quality and scale review
- Primary flower and branch selection
- Kenzan restoration or replacement
- Lantern disposition
- Interior atmosphere review
- Moribana-to-Ikebana naming and compatibility work

The packs should not be required to release together.

## Decisions Required Before Implementation

### Shared

1. Approve explicit `pickerSections` as the authority for Featured membership.
2. Approve four initial sections per pack.
3. Confirm that All Elements remains the destination for secondary variants.
4. Decide whether custom elements appear above or within All Elements.

### Kacho-e

1. Select the primary Kacho-e-owned variants.
2. Select the strongest Core fauna variants.
3. Decide whether frog, turtle, and rabbit belong in Living Subjects.
4. Approve the Water & Habitat candidate list.
5. Approve the Season & Weather candidate list.
6. Confirm the displayed romanization.

### Ikebana

1. Decide whether to rename the internal ID before release.
2. Select the primary vessel, flower, and branch variants.
3. Decide whether `vessel-tall` and `tsubo-jar` meet the quality bar.
4. Decide whether to restore or rebuild the kenzan.
5. Decide whether either lantern belongs in Featured.
6. Approve the revised atmosphere set.

## Recommended First Implementation Slice

The smallest useful implementation session is:

1. Complete and approve the Kacho-e inventory.
2. Normalize the known Kacho-e pack and tag typos.
3. Add `pickerSections` support with validation.
4. Populate the four Kacho-e sections.
5. Compare the old and new Featured inventories.
6. Test the picker on desktop, phone, and iPad.

This validates the deterministic model with the more release-ready pack before
applying it to Ikebana. Presets, stable journey preset IDs, and independent pack
enablement should follow as separate, bounded changes.
