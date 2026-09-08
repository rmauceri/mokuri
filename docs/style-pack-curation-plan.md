# Kacho-e and Ikebana Style Pack Curation Plan

**Status:** Proposed for review  
**Date:** September 8, 2026  
**Target:** Dev-only refinement before either style is enabled on `mokuri.art`

## Purpose

Kacho-e and Ikebana are implemented and available for testing in the dev
experience, but neither is ready for production release. The Active Style
infrastructure works; the remaining problem is curation.

The current tag-overlap algorithm is too simple to represent the creative
grammar of both styles:

- **Kacho-e is under-selected.** Its current affinity finds birds, animals, and
  plants, but omits much of the habitat, weather, season, and poetic setting
  that historically accompanies those subjects.
- **Ikebana is over-selected.** Generic tags such as `organic`, `minimal`, and
  `structural` admit unrelated fauna, figures, landscapes, and basic forms.

This plan defines the desired creative scope, recommended element sets,
ordering, data-model changes, implementation sequence, release criteria, and
curation questions that require a product decision.

## Release Status Clarification

The Kacho-e and Ikebana source files are present in the repository and loaded by
the application, including on `main`. They are not, however, exposed in the
production experience:

- The style selector is hidden unless the dev-style flag is enabled.
- Production forces `STATE.activeStyle` to Core Mokuri.
- The production element picker filters out non-Core pack elements.

The correct product status is therefore **implemented but not released**.

## Shared Curation Principles

### 1. A style is a creative grammar, not a file ownership boundary

The pack's own elements provide its distinctive vocabulary, but Core elements
may be equally important to the style. Selection should answer:

> Does this element help the artist make work in this tradition?

It should not answer only:

> Was this element authored in this pack's JavaScript file?

### 2. Nothing is prohibited; Featured is deliberately selective

The Active Style principle remains:

> Nothing hidden, just prioritized.

Elements outside the style's curated vocabulary remain available under **All
Elements**. Featured should be small enough to communicate intent and broad
enough to support varied compositions.

### 3. Generic descriptive tags must not qualify an element by themselves

Tags such as `organic`, `minimal`, `structural`, and `intimate` are useful for
ranking. They are too broad to establish style membership.

Every featured Core companion should have at least one tag representing a
meaningful role in that style.

### 4. Ordering is part of the creative guidance

Falling back to category size produces unstable, unintuitive ordering. Each
style should define:

- Section order
- Element order within each section
- Which variants are prominent
- Which secondary material belongs only under All Elements

The picker should quietly teach the style's compositional vocabulary.

### 5. Use a hybrid selection model

Pure tag affinity is scalable but imprecise. Pure companion lists are precise
but require maintenance. Use both:

- **Role-based affinity rules** select the normal case.
- **Explicit includes** admit historically appropriate exceptions.
- **Explicit excludes** remove misleading matches or inferior variants.

## Recommended Affinity Model

Replace the flat tag list and fixed "two overlaps" rule with a backward-
compatible rule object.

```js
affinityRules: {
  requiredAny: [],
  weightedTags: {},
  minScore: 1,
  excludeTags: [],
  includeIds: [],
  excludeIds: [],
}
```

Suggested behavior:

1. Pack-owned elements are included unless explicitly excluded.
2. A Core candidate must match at least one `requiredAny` tag.
3. Its score is the sum of matching `weightedTags`.
4. It is featured when its score meets `minScore`.
5. `includeIds` overrides tag qualification.
6. `excludeIds` wins over every automatic rule.
7. Results use the pack's picker section and element ordering, not score order,
   after qualification.

The current `affinity: [...]` format can remain supported until every pack has
migrated.

## Recommended Role Tags

Add a small set of reusable tags that describe compositional function:

| Tag | Meaning |
|-----|---------|
| `habitat` | A localized natural setting that supports a subject |
| `seasonal-setting` | Weather, sky, or environmental material conveying season |
| `branch` | A cut or branch-scale linear botanical element |
| `flower` | A bloom or floral mass suitable as a focal subject |
| `foliage` | Leaves, grasses, shoots, or secondary botanical material |
| `arrangement-support` | Kenzan, exposed water, pods, or other arrangement mechanics |
| `display-accent` | A restrained object that stages an arrangement |

Existing tags such as `fauna`, `flora`, `water`, `intimate`, `minimal`, and
`structural` remain useful as secondary ranking signals.

---

# Kacho-e

## Creative Definition

> **Close observation of living nature, shaped by season, habitat, weather,
> and poetic association.**

The style should not be limited to isolated fauna and flora. Kacho-e commonly
places birds, fish, insects, and animals in relationship with branches, water,
rocks, fields, shorelines, moonlight, rain, snow, and other seasonal signs.

The primary living subject should still dominate. Supporting material should
create context without turning the composition into a broad landscape or genre
scene.

## Current State

- 30 pack-owned elements
- 18 automatically selected Core companions
- Current affinity: `['fauna', 'flora', 'intimate']`
- Current Featured content contains only fauna and flora
- No declared `categoryOrder`
- Categories therefore fall back to population size
- Element order is inherited indirectly from `elementIds`

The narrowed affinity successfully prevents figures and structures from
polluting Featured, but it omits legitimate habitat and atmospheric supports.

## Recommended Creative Roles

### Living Subjects

Birds, fish, insects, amphibians, reptiles, and small animals that can carry the
composition.

Current pack strengths:

- Bush warbler
- Swallow
- Kingfisher
- Heron and egret
- Koi
- Dragonfly and butterfly
- Cicada, cricket, and beetle

Core candidates for review:

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

Not every pose needs to be Featured. Variant selection should favor visual
quality and compositional usefulness over completeness.

### Botanical Companions

Flowers, branches, grasses, and aquatic plants that pair with living subjects
or establish season.

Strong existing Core companions:

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

Candidates requiring scale/quality review:

- `wisteria-vine`
- `twisted-pine`
- `bamboo-grove`
- `treeline-pines`
- `treeline-mixed`

Full trees and treelines should qualify only if they can remain subordinate to
the living subject.

### Habitat Supports

These broaden the creative space without overwhelming it:

- `tranquil-pond`
- `pond-edge`
- `water-ripples`
- `gentle-waves`
- `flowing-stream`
- `shore-waves`
- `river-rocky`
- `rock-formation`

Candidates should be tagged `habitat` and reviewed for whether their default
scale and visual mass support close observation.

Large waterfalls, oceans, mountains, villages, and broad terrain should remain
under All Elements unless a specific composition proves they belong.

### Seasonal and Poetic Setting

Strong candidates:

- `full-moon`
- `cloud-wisp`
- `rain-curtain`
- `snow-fall`

Possible candidates:

- `cloud-bank`
- `farmland`
- `terrace`

The last two are historically plausible settings for birds but may pull the
composition toward landscape. They should require explicit curation rather than
automatic selection.

### Human-Made Setting

Architecture and objects should not qualify automatically. Garden lanterns,
bridges, fences, boats, and paths can support some Kacho-e-adjacent scenes, but
they shift the emphasis toward designed landscape or genre imagery.

Recommendation:

- Keep them in All Elements by default.
- Add only proven exceptions through `includeIds`.
- Do not add `structural` or `objects` to Kacho-e affinity.

## Proposed Kacho-e Affinity

```js
affinityRules: {
  requiredAny: ['fauna', 'flora', 'habitat', 'seasonal-setting'],
  weightedTags: {
    fauna: 4,
    flora: 3,
    habitat: 3,
    'seasonal-setting': 3,
    intimate: 2,
    water: 1,
    atmospheric: 1,
    minimal: 1,
  },
  minScore: 3,
  excludeTags: ['figure', 'vessel', 'signing'],
  includeIds: [
    'full-moon',
    'rain-curtain',
    'snow-fall',
    'cloud-wisp',
  ],
  excludeIds: [],
}
```

This is a starting policy, not final tuning. A habitat or seasonal-setting tag
must be assigned deliberately; generic `water` or `atmospheric` tags should not
qualify an element alone.

## Proposed Picker Sections

```js
pickerSections: [
  { id: 'birds', label: 'Birds', role: 'kacho-bird' },
  { id: 'water-life', label: 'Fish & Water Life', role: 'kacho-water-life' },
  { id: 'insects', label: 'Insects', role: 'kacho-insect' },
  { id: 'animals', label: 'Animals', role: 'kacho-animal' },
  { id: 'flowers', label: 'Flowers & Branches', tags: ['flower', 'branch'] },
  { id: 'habitat', label: 'Habitat', tags: ['habitat'] },
  { id: 'season', label: 'Season & Weather', tags: ['seasonal-setting'] },
]
```

This may require subject-role tags or an explicit section-to-element mapping.
The current single `fauna` category cannot distinguish birds, fish, insects,
and other animals.

If new tags feel excessive, define section membership explicitly in the pack
manifest instead.

## Recommended Element Order

Within each section:

1. Strongest, most versatile element
2. Alternate poses
3. Specialized or dramatic poses
4. Secondary Core companions

Example fauna progression:

1. Birds: bush warbler, swallow, kingfisher, heron, egret, sparrow, crane
2. Water life: koi, frog, turtle
3. Insects: dragonfly, butterfly, cicada, cricket, beetle
4. Other animals: rabbit and future subjects

This is preferable to preserving source-file order.

## Kacho-e Presets to Create

Create at least three curated compositions before release:

1. **Heron at Pond Edge** — heron, lotus or iris, pond edge, restrained water
2. **Autumn Insects** — cricket or beetle, susuki, warm seasonal atmosphere
3. **Moonlit Branch** — bird or cicada, pine/maple branch, moon, open paper
4. Optional: **Koi and Rain** — koi, water ripples, rain curtain, minimal flora

Presets should demonstrate that habitat and atmosphere are supporting actors,
not the subject.

## Kacho-e Data Cleanup

- Add a deliberate category/section order.
- Review all 30 pack elements for final quality and redundant variants.
- Review the 18 current Core companions individually.
- Correct stale affinity examples in `docs/kachoe_style_pack.md`.
- Correct tag typo `initimate` on `wisteria-vine`.
- Confirm whether the displayed name should use `Kacho-e` or `Kachō-e`.
- Verify palette ordering and whether all four palettes are release-ready.

## Kacho-e Questions for Curation

1. Should frogs, turtles, and rabbits be Featured, or should the style remain
   centered on birds, fish, insects, and flowers?
2. Which Core crane and koi variants are strong enough to show alongside the
   pack-authored versions?
3. Should farmland or terraces appear as habitat, or do they make the style
   feel too much like landscape?
4. Are garden objects such as lanterns ever appropriate in Featured, or only
   under All Elements?
5. Should sections be Birds / Water Life / Insects / Animals, or should all
   living subjects remain in one Fauna section?
6. Should pack-owned variants all appear, or should weaker/redundant variants
   be demoted to All Elements?
7. What should the first visible category be: Birds or Flowers & Branches?
8. Are the existing Spring Air, Pond Edge, Morning Haze, and Empty Space
   atmosphere presets the right release set?
9. Which three compositions best communicate the breadth of Kacho-e for the
   Workshop?

---

# Ikebana

## Name and Scope

The user-facing style is **Ikebana**, not Moribana.

Moribana was the original inspiration for the library, but it is one subset of
the broader art form. The pack should support the visual vocabulary of ikebana
as represented through mokuhanga:

- Shallow-vessel Moribana
- Upright and slanting arrangements
- Tall-vessel and Nageire-like arrangements
- Restrained Chabana-like arrangements
- Formal seasonal branch compositions
- Arrangements situated in a minimal display environment

Recommended description:

> **Vessels, flowers, branches, and seasonal materials composed through line,
> balance, asymmetry, and empty space, inspired by the way Japanese prints
> capture the art of arrangement.**

## Current State

- Internal ID: `moribana`
- User-facing selector already displays `Ikebana`
- 19 pack-owned elements
- 38 automatically selected Core companions
- Current affinity:
  `['flora', 'vessel', 'minimal', 'structural', 'organic', 'intimate']`
- Current category order: `objects`, then `flora`

The current affinity admits unrelated material because:

- `organic + intimate` selects fauna and a figure.
- `organic + minimal` selects landscape and basic forms.
- `structural + minimal` selects fences and forms.
- `flora + organic` selects full trees, treelines, and landscape-scale plants.

## Creative Definition

> **The deliberate arrangement of natural materials, where vessel, structural
> line, floral mass, supporting foliage, and empty space form one composition.**

An element should be featured because it serves an arrangement role, not merely
because it is natural or visually minimal.

## Recommended Creative Roles

### Vessels

Current pack elements:

- `vessel-suiban`
- `vessel-oval`
- `vessel-rectangle`
- `vessel-bamboo`
- `vessel-tsubo`

Core candidates:

- `vessel-tall`
- `tsubo-jar`

Review every vessel for:

- Clear opening where stems can visually enter
- Useful aspect ratio
- Appropriate default scale
- Distinct silhouette from other vessels
- Color zones that support glaze variation without overpowering the plants

### Branches and Structural Line

Pack-owned:

- `branch-ume-crooked`
- `matsu-branch-upright`
- `bamboo-branch`
- `bamboo-shoots`

Strong Core companions:

- `cherry-branch`
- `pine-bough`
- `bare-branch`
- `maple-branch`
- `ginko-branch`

Candidates requiring review:

- `twisted-pine`
- `weeping-willow`
- `wisteria-vine`

Full trees and groves should not qualify automatically. They may depict the
right plant but at the wrong compositional scale.

### Focal Flowers

Pack-owned:

- `blossum-kiku`
- `blossum-ran`
- `blossum-suisen`
- `blossom-kacho`
- `blossum-chrysanthemum`
- `tsubaki-single`
- `tsubaki-cluster`

Strong Core companions:

- `chrysanthemum`
- `iris-cluster`
- `sakura-blossom`
- `ume-blossom`

Cross-pack candidates:

- `peony`
- `peony-open`
- `morning-glory`
- `morning-glory-vine`
- `wisteria-vine-knotted`
- `lotus-cluster-tall`

The current affinity implementation explicitly skips elements owned by other
packs. A policy decision is required before Ikebana can feature Kacho-e floral
material.

Options:

1. Promote broadly useful flowers to Core.
2. Permit explicit cross-pack references.
3. Show cross-pack companions only when both packs are enabled.
4. Duplicate elements between manifests while retaining one source definition.

Recommendation: permit explicit cross-pack references in `includeIds`, but load
the owning pack automatically when needed. Do not duplicate definitions.

### Foliage and Secondary Material

Strong candidates:

- `susuki-grass`
- `lotus-cluster`
- `lotus-pod`
- `bamboo-shoots`
- Leaf-bearing branch elements already selected above

The future `foliage` tag should distinguish supporting plant material from
focal flowers and full landscape flora.

### Arrangement Supports

The original design included a kenzan, but the current production Moribana
element library and manifest do not contain one. A kenzan exists only in the
archived element file.

Recommendation:

- Review the archived kenzan.
- Restore it if its quality meets the current Element Guide.
- Otherwise rebuild it.
- Tag it `arrangement-support`, `structural`, and `minimal`.

Other possible support material:

- Exposed vessel water
- Lotus pods
- Fallen petals or a single fallen blossom
- A future branch rest or simple stand, if historically appropriate

### Display Accents

Current pack-owned:

- `lantern-small`
- `lantern-round`

These are not arrangement materials. They can help stage an arrangement as
depicted in a print, but they should not sit alongside vessels and flowers as
equal primary choices.

Recommendation:

- Place them in a final **Display Accents** section.
- Consider demoting them to All Elements until presets prove their value.
- Do not allow `display-accent` to qualify an element for other styles without
  explicit selection.

## Proposed Ikebana Affinity

```js
affinityRules: {
  requiredAny: [
    'vessel',
    'branch',
    'flower',
    'foliage',
    'arrangement-support',
  ],
  weightedTags: {
    vessel: 5,
    branch: 5,
    flower: 4,
    foliage: 3,
    'arrangement-support': 4,
    intimate: 1,
    structural: 1,
    minimal: 1,
    'seasonal-spring': 1,
    'seasonal-autumn': 1,
    'seasonal-winter': 1,
  },
  minScore: 3,
  excludeTags: ['fauna', 'figure', 'landscape', 'atmospheric', 'signing'],
  includeIds: [
    'vessel-tall',
    'tsubo-jar',
  ],
  excludeIds: [],
}
```

Important:

- `organic` is not a qualification or scoring tag.
- `minimal` and `structural` improve ordering but cannot qualify an element.
- Full-tree or landscape-scale elements should be explicitly excluded if role
  tagging alone does not remove them.

## Proposed Picker Sections

```js
pickerSections: [
  { id: 'vessels', label: 'Vessels', tags: ['vessel'] },
  { id: 'line', label: 'Branches & Line', tags: ['branch'] },
  { id: 'flowers', label: 'Focal Flowers', tags: ['flower'] },
  { id: 'foliage', label: 'Foliage & Accents', tags: ['foliage'] },
  {
    id: 'supports',
    label: 'Arrangement Supports',
    tags: ['arrangement-support'],
  },
  { id: 'display', label: 'Display Accents', tags: ['display-accent'] },
]
```

This ordering reflects the act of composing an arrangement:

1. Choose an anchor
2. Establish structural line
3. Add focal mass
4. Balance with secondary material
5. Add mechanics or display context only when useful

## Ikebana Presets to Create

Create at least four compositions representing the broader scope:

1. **Basic Upright** — shallow vessel, tall primary branch, shorter secondary
   line, one focal flower
2. **Slanting Arrangement** — horizontal pine or maple, low floral mass,
   asymmetric vessel placement
3. **Tall Vessel** — tsubo or bamboo vessel with a long descending or rising
   line
4. **Seasonal Restraint** — bare branch and narcissus, extensive empty space
5. Optional: **Display Niche** — arrangement plus one carefully selected
   display accent

At least one preset should use no flowers, demonstrating that line and negative
space can carry an arrangement.

## Ikebana Atmosphere Direction

The current presets are:

- Clean Paper
- Warm Studio
- Cool Studio
- Display Niche

Review concerns:

- `Display Niche` currently uses night plus water, which may read as an outdoor
  landscape rather than a tokonoma or interior display.
- Foregrounds such as sand, stone, and water may imply ground planes rather
  than a neutral display surface.
- Smooth horizons help, but a dedicated neutral interior/display treatment may
  eventually be more appropriate.

For release, Clean Paper should remain the default. Other presets should be
tested with actual arrangements rather than judged in isolation.

## Ikebana Data Cleanup

- Change all user-facing references from Moribana to Ikebana.
- Decide whether to migrate the internal ID from `moribana` to `ikebana`.
- Review and correct `blossum-*` ID misspellings before release.
- Add arrangement-role tags to pack and selected Core elements.
- Remove generic automatic matches from Featured.
- Restore or rebuild the kenzan.
- Decide the role of the two lanterns.
- Review vessel openings and default scale relationships.
- Review redundant chrysanthemum and camellia variants.
- Resolve cross-pack floral reuse.
- Update `docs/moribana_style_pack.md` to describe the broader Ikebana scope or
  replace it with an Ikebana document while retaining historical design notes.

## Ikebana Questions for Curation

1. Should the internal ID be renamed from `moribana` to `ikebana` before
   release?
2. Which ikebana modes should the first release explicitly represent:
   Moribana, upright/slanting forms, tall-vessel arrangements, Chabana, or all
   of these?
3. Should Kacho-e flowers be available when only Ikebana is enabled?
4. Should broadly useful flowers be promoted to Core instead of referenced
   across packs?
5. Should `lantern-small` and `lantern-round` remain Featured, move to Display
   Accents, or move to All Elements?
6. Should the archived kenzan be restored or replaced with a new element?
7. Are full-tree elements ever appropriate, or should the picker require
   branch-scale material?
8. Are `vessel-tall` and `tsubo-jar` visually strong enough to join the
   pack-authored vessels?
9. Which duplicate flower variants should be primary, secondary, or hidden
   under All Elements?
10. Does the Display Niche atmosphere feel like an interior arrangement, or
    should it be redesigned?
11. Should the first visible section be Vessels or Branches & Line?
12. Which four presets best communicate the breadth of Ikebana?

---

# Shared Implementation Plan

## Phase 1: Curated Inventory

1. Review every pack-owned element in the dev picker.
2. Mark each as:
   - Release Featured
   - Secondary / All Elements
   - Revise
   - Remove
3. Review every proposed Core companion using the same labels.
4. Record preferred variant order.
5. Correct IDs and obvious tag errors before adding new behavior.

Deliverable: approved element and ordering tables for both packs.

## Phase 2: Affinity Schema

1. Add backward-compatible `affinityRules` support to `pack-registry.js`.
2. Preserve the current flat `affinity` behavior for packs not migrated.
3. Implement required tags, weighted scores, include/exclude IDs, and exclude
   tags.
4. Add a dev diagnostic that reports why each element was featured:
   - Pack-owned
   - Required role match
   - Weighted score
   - Explicit include
5. Add duplicate-ID and missing-reference warnings.

Deliverable: predictable, explainable Featured membership.

## Phase 3: Role Tags

1. Add shared role tags to the taxonomy.
2. Apply them only to reviewed elements.
3. Run the element validator.
4. Correct the `initimate` typo and any other tag spelling inconsistencies.
5. Avoid mass-tagging all flora or all water elements.

Deliverable: role tags that encode actual compositional use.

## Phase 4: Picker Sections and Stable Ordering

1. Add optional `pickerSections` to pack manifests.
2. Allow section membership through tags or explicit element IDs.
3. Make section order stable and manifest-defined.
4. Make element order stable and manifest-defined.
5. Keep All Elements as the final accordion.
6. Define behavior for elements matching multiple sections.

Recommended rule: first declared matching section wins.

Deliverable: style pickers that teach each style's creative grammar.

## Phase 5: Pack Manifest Curation

### Kacho-e

- Add habitat and seasonal supports.
- Select the strongest Core animal variants.
- Add section ordering.
- Update atmosphere/palette ordering if needed.

### Ikebana

- Rename user-facing metadata.
- Tighten affinity around arrangement roles.
- Resolve internal ID and cross-pack decisions.
- Restore/rebuild kenzan.
- Reclassify lanterns.
- Add section ordering.

Deliverable: final dev manifests.

## Phase 6: Curated Composition Presets

1. Create at least three Kacho-e presets.
2. Create at least four Ikebana presets.
3. Test every preset on phone, tablet, and desktop.
4. Confirm all referenced elements load when the associated pack is enabled.
5. Use presets to validate scale relationships and ordering.

Deliverable: production-quality starting points for each style.

## Phase 7: Independent Pack Enablement

Replace the binary `mokuri-dev-styles` flag with the planned
`mokuri-enabled-packs` set:

- Enable Kacho-e and Ikebana independently.
- Show only Core plus enabled pack chips.
- Filter elements and palettes to enabled packs.
- Handle saved compositions containing elements from a disabled pack.
- Prepare this mechanism for deferred pack loading.

This is important for testing one pack without the other and for eventually
releasing packs independently.

## Phase 8: Validation and Release Review

For each pack:

1. Verify no missing element IDs.
2. Verify no duplicate IDs.
3. Verify every element has valid role tags.
4. Verify Featured contains no accidental categories.
5. Verify All Elements still exposes the complete allowed library.
6. Verify palette switching and atmosphere presets.
7. Verify saved compositions reopen correctly.
8. Verify imported `.mokuri` files containing pack elements.
9. Verify thumbnails and picker scrolling on low-memory iPad.
10. Verify first-run journeys and style switching.
11. Bump app and service-worker versions.
12. Enable the pack on production only after explicit approval.

# Shared Questions Requiring Decisions

1. Is a hybrid tag-plus-explicit-override model acceptable, or should the system
   remain purely tag-driven?
2. Should picker sections be implemented now, or should the first release use
   existing categories with only stable category ordering?
3. Can one pack explicitly feature elements owned by another pack?
4. If cross-pack reuse is allowed, should the owning pack load automatically?
5. Should generally useful pack elements be promoted to Core?
6. Should weaker variants remain under All Elements or be removed entirely?
7. Should custom elements always remain Featured, as they do today?
8. Should affinity diagnostics be visible in a dev UI or only the console?
9. Should Kacho-e and Ikebana release together or independently?
10. Is a curated preset set required for release, or can element curation ship
    first?

# Recommended Decision Order

Resolve decisions in this sequence:

1. Confirm pack scope and naming.
2. Approve pack-owned element inventory.
3. Approve Core and cross-pack companions.
4. Decide role tags versus explicit section lists.
5. Approve section and element ordering.
6. Implement affinity and picker support.
7. Curate presets.
8. Test each pack independently.
9. Release only after a final visual review.

# Recommended First Implementation Slice

The smallest useful implementation session would:

1. Rename Ikebana user-facing metadata.
2. Add role tags (`habitat`, `seasonal-setting`, `branch`, `flower`, `foliage`,
   `arrangement-support`, `display-accent`).
3. Add `affinityRules` with include/exclude overrides.
4. Curate membership without changing picker layout.
5. Compare before/after Featured inventories.

Picker sections and presets can then follow as a second slice once the element
membership is approved.
