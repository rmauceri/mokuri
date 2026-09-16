# Mokuri Creative Style Curation Plan

**Status:** Revised proposal for review
**Date:** September 16, 2026
**Target:** Curate and release built-in Creative Styles to all Mokuri users

## Purpose

Mokuri's element collections were originally framed as optional Style Packs
that might be enabled or acquired independently. The product direction has
changed: these collections should become built-in **Creative Styles** within
Mokuri. Each style is a different way of composing with the shared element
library, palettes, atmosphere, presets, and guidance.

The existing Core collection becomes the first named Creative Style:

> **Fūkei-ga (風景画)** — landscape pictures shaped by terrain, water,
> atmosphere, architecture, and human scale.

Kacho-e and Ikebana are implemented and available for testing in the dev
experience, but neither is ready for production release. Tsukiyo and Machi
remain designed future styles. The Active Style infrastructure works. The
remaining work is to define a clear, intentional Featured library for each
style and present it in a useful order.

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
manifest-defined picker sections containing ordered element IDs. It also
separates three concepts that were previously conflated:

1. **Ownership** — where an element is defined and maintained.
2. **Presentation** — which Creative Styles feature that element and where.
3. **Release status** — whether a Creative Style is available in production.

An element is defined once, but may be explicitly Featured in more than one
released Creative Style when it serves each style's creative grammar.

## Product Model

Mokuri is one product with a growing set of built-in Creative Styles:

- **Fūkei-ga (風景画)** — landscapes and broad scenes; the current Core
  collection and the first Creative Style.
- **Kacho-e (花鳥画)** — close observation of birds, flowers, insects, and
  localized habitat.
- **Ikebana (生け花)** — arrangements structured through vessel, line, floral
  mass, balance, and empty space.
- **Tsukiyo (月夜)** — nocturnal scenes structured by darkness and selective
  light.
- **Machi (街)** — built places, architecture, weather, and human scale.

Once released, a Creative Style is available to every user. Styles may be
released one at a time, but they are not optional add-ons, purchases, or
user-enabled packages.

The selector changes the studio's creative emphasis, not the user's
entitlements. It controls:

- Featured picker sections and ordering
- Suggested palettes
- Atmosphere presets
- Starting compositions
- Creative prompts and guided journeys

It does not prohibit the use of elements associated with another released
style.

## Release Status

The Kacho-e and Ikebana source files are present in the repository and loaded by
the application, including on `main`. They are not yet exposed in production:

- The style selector is hidden unless the dev-style flag is enabled.
- Production forces `STATE.activeStyle` to the current Core collection, which
  will be renamed Fūkei-ga in the user interface.
- The production element picker filters out elements belonging only to
  unreleased styles.

The correct status is **implemented but not released**.

Release should be controlled by a developer-owned list of released styles, not
by user preferences:

```js
const RELEASED_STYLE_IDS = ['core']; // User-facing label: Fūkei-ga
```

Dev may expose unreleased styles for testing. Production should show every
style in `RELEASED_STYLE_IDS` to every user.

## Goals

1. Establish Fūkei-ga as the user-facing name of the current Core style.
2. Give Kacho-e and Ikebana clear, appropriate Featured categories.
3. Combine each style's strongest owned elements with explicitly selected
   companions from the released Mokuri library.
4. Make Featured membership and ordering deterministic.
5. Keep every released element available under **All Elements**.
6. Allow each Creative Style to be reviewed and released independently to all
   users.
7. Keep the implementation small enough to understand directly from the style
   manifest.

## Non-Goals

- Creative Styles will not be sold, installed, or enabled independently by
  users.
- Unreleased style content must not leak into a released style.
- Tags will not determine production Featured membership for these styles.
- This work will not introduce weighted affinity scoring.
- This work will not create a generalized dependency or deferred-loading
  system.
- This work will not redefine the global category of each element.
- This work will not hide non-Featured elements from All Elements.
- This work will not duplicate an element merely because more than one style
  features it.

## Curation Principles

### 1. A style is a creative grammar, not a file or entitlement boundary

Style-owned elements provide distinctive vocabulary, but elements maintained
elsewhere may be equally important. Selection should answer:

> Does this specific element help the artist make work in this tradition?

It should not be inferred only from where the element is defined, whether its
style shipped first, or which broad descriptive tags it carries.

### 2. Featured is selective; All Elements remains complete

The Active Style principle remains:

> Nothing hidden, just prioritized.

Only reviewed elements belong in Featured. Style-owned elements are not
automatically entitled to Featured placement: weaker, redundant, or specialized
variants may remain under All Elements.

All Elements means the complete **released** Mokuri library. Switching Creative
Styles changes prioritization and guidance, not access. Elements belonging only
to unreleased styles remain dev-only.

### 3. Explicit membership is intentional maintenance

When a new element is added to any collection, it should not silently appear in
other Creative Styles because its tags overlap. Adding it to a style should
require:

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
experimental style discovery. They are not the release authority for Kacho-e,
Ikebana, or future Creative Styles.

### 6. Ownership and presentation are separate

The manifest's existing `elementIds` declares which style owns and maintains an
element. `pickerSections` declares where the element is Featured.

A released style may explicitly feature:

- Elements it owns
- Elements owned by Fūkei-ga/Core
- Elements owned by another released Creative Style

Cross-style reuse must be deliberate and visually reviewed. It must never occur
automatically through tags. If the owning style is not released, its elements
cannot appear in a production style unless the element is deliberately moved
to the shared Fūkei-ga/Core collection.

### 7. Fūkei-ga is a style, not a fallback

The current internal ID `core` may remain for compatibility, but the user-facing
name should be **Fūkei-ga**. It receives the same intentional treatment as every
other Creative Style: its own Featured ordering, palettes, atmosphere presets,
starting compositions, and guidance.

## Deterministic Manifest Model

Add an optional `pickerSections` field to a Creative Style manifest:

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

For a Creative Style with `pickerSections`:

1. Render sections in manifest order.
2. Render elements in each section's `elementIds` order.
3. Permit references to elements belonging to any released Creative Style.
4. In dev, permit references to the active unreleased style for testing.
5. Ignore and warn about missing element IDs.
6. Ignore and warn about references to elements that would leak from an
   unreleased style into a released production style.
7. Ignore and warn about duplicate IDs; the first declaration wins.
8. Place all other released elements under **All Elements**.
9. Render All Elements using the existing global categories.
10. Preserve the existing generated custom-hanko behavior outside
    Creative Style curation.

For a style without `pickerSections`, preserve the current affinity behavior as a
backward-compatible fallback:

```js
if (pack.pickerSections) {
  return getCuratedPackElements(pack, allElements);
}

return getAffinityElements(pack.id, allElements);
```

No `requiredAny`, `weightedTags`, `minScore`, include/exclude rule engine, or
new qualification taxonomy is required.

### Ownership and release validation

The manifest's existing `elementIds` remains the declaration of ownership.
`pickerSections` controls presentation, not ownership or release state.

An element referenced by a production section is valid when its owning style is
released:

```js
isStyleReleased(element.pack || 'core')
```

Elements with no `pack` field may be treated as Core/Fūkei-ga for compatibility until
all definitions are normalized.

The application should validate release state separately from section
membership. This allows Kacho-e to feature an Ikebana-owned botanical after
Ikebana is released, while preventing that element from leaking into production
before its owning style is approved.

## Fūkei-ga

### Creative definition

> **Landscape pictures composed through terrain, water, atmosphere,
> architecture, seasonal change, and human scale.**

Fūkei-ga is not a generic bucket for everything Mokuri shipped first. It is the
landscape-centered Creative Style from which the broader product grew. Its
Featured presentation should help artists build scenes with depth, weather,
place, and a deliberate relationship between human-made structures and nature.

### Transition from Core

- Keep the internal ID `core` for save compatibility and to avoid unnecessary
  migration risk.
- Change the user-facing style name from Core Collection to
  **Fūkei-ga 風景画**.
- Use **Fūkei-ga** in compact UI and **Fūkei-ga 風景画** where the interface has
  room for both the romanized and Japanese name.
- Retain the existing Core element ownership model unless a later curation pass
  deliberately reassigns an element.
- Treat Fūkei-ga palettes, atmosphere presets, gallery presets, prompts, and
  journeys as the first complete Creative Style experience.
- Review its Featured ordering after Kacho-e proves the deterministic section
  model; the Fūkei-ga rename should not block Kacho-e curation.

### Likely Featured structure

Fūkei-ga already declares an intentional category order. Its first curated
section pass may remain close to that vocabulary:

1. Land & Water
2. Trees & Flora
3. Structures & Paths
4. Weather & Atmosphere
5. Figures & Animals

Exact membership and ordering should be reviewed separately. The immediate
goal is to establish the name and product model, not expand the initial
Kacho-e implementation slice.

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

Style-owned candidates:

- Bush warbler
- Swallow
- Kingfisher
- Heron and egret
- Koi
- Dragonfly and butterfly
- Cicada, cricket, and beetle

Fūkei-ga/Core candidates requiring visual and variant review:

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

Style-owned candidates:

- Peony variants
- Morning glory variants
- Wisteria
- Iris
- Lilypad and lotus variants
- Susuki
- Pine branch

Fūkei-ga/Core candidates:

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

Fūkei-ga/Core candidates:

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

Fūkei-ga/Core candidates:

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
- Review all 30 style-owned elements and select primary variants.
- Review proposed Fūkei-ga/Core companions at all carve levels and in print
  output.
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

Style-owned candidates:

- `vessel-suiban`
- `vessel-oval`
- `vessel-rectangle`
- `vessel-bamboo`
- `vessel-tsubo`

Fūkei-ga/Core candidates:

- `vessel-tall`
- `tsubo-jar`

Review every vessel for a clear stem opening, distinct silhouette, appropriate
default scale, and useful glaze color zones.

#### 2. Branches & Line

Style-owned candidates:

- `branch-ume-crooked`
- `matsu-branch-upright`
- `bamboo-branch`
- `bamboo-shoots`

Fūkei-ga/Core candidates:

- `cherry-branch`
- `pine-bough`
- `bare-branch`
- `maple-branch`
- `ginko-branch`

Full trees, groves, and landscape-scale plants should remain under All
Elements. `twisted-pine`, `weeping-willow`, and `wisteria-vine` may be reviewed
but should not be included automatically.

#### 3. Flowers & Foliage

Style-owned candidates:

- `blossum-kiku`
- `blossum-ran`
- `blossum-suisen`
- `blossom-kacho`
- `blossum-chrysanthemum`
- `tsubaki-single`
- `tsubaki-cluster`
- `lotus-pod`

Fūkei-ga/Core candidates:

- `chrysanthemum`
- `iris-cluster`
- `sakura-blossom`
- `ume-blossom`
- `susuki-grass`
- `lotus-cluster`

Kacho-e flowers may become candidates after Kacho-e is released. Cross-style
reuse should be based on arrangement role and visual quality, not file
ownership. Before Kacho-e is released, Ikebana must not depend on its elements
for a production release; broadly shared essentials may instead be deliberately
moved to Fūkei-ga/Core.

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

Style journeys currently use numeric `startingPreset` indexes into the global
gallery preset array. Kacho-e defines an empty preset array while its journeys
reference indexes `0` and `1`; Ikebana also references numeric indexes without
declaring style presets. These indexes can resolve to unrelated Fūkei-ga/Core
presets.

Before adding Creative Style presets:

1. Give every gallery preset a stable ID.
2. Replace `startingPreset` with `startingPresetId`.
3. Resolve a journey's preset by ID.
4. Warn and continue with a blank composition when an ID is missing.
5. Migrate Fūkei-ga/Core journeys at the same time so only one lookup system
   remains.

## Implementation Plan

### Phase 1: Curated inventory

Review style-owned elements and proposed companions from the released Mokuri
library in the dev experience.
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

**Deliverable:** approved, ordered section tables for each Creative Style.

Do not implement automatic selection rules before this inventory is approved.

### Phase 2: Data cleanup and stable preset IDs

1. Normalize ownership IDs and tag spelling.
2. Remove duplicate manifest references, including the duplicate Fūkei-ga/Core
   `torii-gate` entry.
3. Resolve Creative Style naming and element ID migrations.
4. Add stable preset IDs and migrate journey references.
5. Update stale documentation counts.

**Deliverable:** consistent data suitable for deterministic lookup.

### Phase 3: Manifest-defined picker sections

1. Add optional `pickerSections` support.
2. Render sections and elements in manifest order.
3. Validate missing and duplicate references.
4. Validate that production sections reference only elements owned by released
   Creative Styles.
5. Preserve current affinity behavior only as a fallback for manifests without
   explicit sections.
6. Preserve All Elements as the final accordion containing the complete
   released library.
7. Preserve generated custom hanko behavior outside Creative Style curation.

**Deliverable:** predictable Featured libraries with no affinity tuning.

### Phase 4: Creative Style manifest curation

Populate the approved ID lists:

- Fūkei-ga user-facing identity and intentional ordering
- Four Kacho-e sections
- Four Ikebana sections
- Selected primary variants only
- Explicitly reviewed companions from released styles
- No automatic cross-style inclusion

**Deliverable:** final dev manifests.

### Phase 5: Curated composition presets

1. Create at least three Kacho-e presets.
2. Create at least four Ikebana presets.
3. Test each preset on phone, tablet, and desktop.
4. Use the presets to revise scale, ordering, atmosphere, and element choices.
5. Confirm journeys resolve the intended preset IDs.

**Deliverable:** production-quality starting points and validated inventories.

### Phase 6: Built-in style release control

After curation is stable, replace the binary `mokuri-dev-styles` flag with a
developer-owned released-style list:

- Show Fūkei-ga plus every released Creative Style to every user.
- Allow dev to expose unreleased styles for review.
- Filter production elements and palettes by the release state of their owning
  style.
- Make **All Elements** include all elements from all released styles.
- Keep saved compositions containing unreleased or retired elements loadable
  when their definitions are available.
- Do not expose user-facing install, purchase, enable, or disable controls.

Release control is a product rollout mechanism, not an entitlement system, and
should not be coupled to picker curation.

### Phase 7: Release review

For each Creative Style:

1. Verify every section reference exists.
2. Verify every referenced element's owning style is released.
3. Verify no duplicate IDs appear in Featured.
4. Verify weaker variants remain reachable under All Elements.
5. Verify palettes and atmosphere presets with complete compositions.
6. Verify saved and imported compositions reopen correctly.
7. Verify picker scrolling and thumbnails on low-memory iPad.
8. Verify first-run journeys and style switching.
9. Bump app and service-worker versions.
10. Add the style to the production release list only after explicit visual
    approval.

## Recommended Release Sequence

Fūkei-ga is the first Creative Style and remains available throughout the
transition. Release **Kacho-e next**.

Kacho-e already has a coherent subject vocabulary. Its remaining work is
primarily variant selection, habitat expansion, ordering, and presets.

Ikebana requires deeper content decisions:

- Vessel quality and scale review
- Primary flower and branch selection
- Kenzan restoration or replacement
- Lantern disposition
- Interior atmosphere review
- Moribana-to-Ikebana naming and compatibility work

Creative Styles should not be required to release together. Each is added to
the built-in product for all users when ready.

## Decisions Remaining Before Implementation

### Shared

The following direction is settled:

- **Creative Styles** is the user-facing product concept.
- **Fūkei-ga (風景画)** is the user-facing name of the current Core style.
- The internal ID remains `core` for compatibility.
- Released Creative Styles are built into Mokuri for every user.
- All Elements contains the complete released library.

Remaining shared decisions:

1. Approve explicit `pickerSections` as the authority for Featured membership.
2. Approve four initial sections for Kacho-e and Ikebana.
3. Confirm that All Elements remains
   the destination for secondary variants.
4. Approve explicit cross-style reuse when both owning and presenting styles
   are released.
5. Confirm that generated custom hanko remains outside Creative Style
   curation.

### Kacho-e

1. Select the primary Kacho-e-owned variants.
2. Select the strongest Fūkei-ga/Core fauna variants.
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
applying it to Ikebana. Presets, stable journey preset IDs, and built-in style
release control should follow as separate, bounded changes.
