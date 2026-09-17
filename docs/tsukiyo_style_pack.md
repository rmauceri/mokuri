# Tsukiyo — Nocturne Creative Lens

**Status:** Reframed proposal for future implementation
**Date:** September 17, 2026
**Japanese:** 月夜 — "Moonlit Night"

## Decision Summary

Tsukiyo remains a valuable creative direction for Mokuri, but it should not be
implemented as a peer element-based Creative Style like Fūkei-ga or Kacho-e.

The earlier proposal treated night as a subject domain and defined ten
Tsukiyo-owned elements. Exploratory image generation showed that this was the
wrong abstraction:

- Trees, gates, grasses, lanterns, foxes, and owls overlap heavily with the
  existing Fūkei-ga and Kacho-e vocabulary.
- Stars, fireflies, glow, and reflections lose their meaning when enlarged or
  detached from the atmosphere that makes them visible.
- A movable moon reflection is not naturally related to the moon, water, or
  viewpoint that should produce it.
- The strongest existing Mokuri nocturnes already use the current element
  library. Their nocturnal character comes from palette, atmosphere, bokashi,
  silhouette, scale, and selective light.

The revised direction is:

> **Tsukiyo is Mokuri's nocturne lens: a way of transforming compositions
> through darkness, moonlight, restricted color, atmosphere, and silence.**

Tsukiyo should initially expand Mokuri's atmosphere and palette systems, then
use named presets, guidance, materials, audio, and a very small number of
supporting elements. It should transform Fūkei-ga, Kacho-e, and potentially
future Creative Styles rather than own a separate general-purpose library.

No Tsukiyo application implementation has begun. The generated PNG candidates
under `dev/generated/tsukiyo/` are research material, not an approved element
backlog.

---

## Why the Original Model Changed

### Night is a treatment across traditions

Moonlit and nocturnal prints appear across Japanese print traditions:

- Hiroshige used night in landscapes, famous-place views, seasonal scenes, and
  bird-and-flower compositions.
- Hasui Kawase used moonlight, snow, rain, water, and artificial light to
  transform the modern landscape tradition.
- Yoshitoshi used the moon to connect historical, literary, supernatural, and
  figure subjects in *One Hundred Aspects of the Moon*.
- Koitsu and Kiyochika explored stronger artificial illumination, urban
  darkness, reflections, and dramatic light-and-shadow relationships.

These works do not share a unique inventory of "night objects." They share a
way of organizing luminance, color, atmosphere, scale, and attention.

### The element experiment exposed the mismatch

The original proposal called for:

1. Chōchin Row
2. Tōrō Lit
3. Hotaru
4. Fukurō
5. Kitsune
6. Kodama
7. Tsuki Reflection
8. Hoshi
9. Yūkaku Gate
10. Suzumushi

Three generated candidates for each subject produced a mixed set:

- The owl, fox, trees, grasses, and gates could become usable elements after
  curation, but they are not uniquely nocturnal.
- The trees, grasses, gates, and lanterns were close to existing Fūkei-ga/Core
  material.
- The owl belongs naturally with Kacho-e's living subjects.
- The fox can support both intimate nature and landscape compositions without
  becoming Tsukiyo-owned.
- Star fields became decorative patterns rather than convincing atmosphere.
- Enlarged fireflies became illustrated insects rather than small points of
  light in darkness.
- Reflections became detached graphic objects rather than consequences of
  moonlight on water.

The generation quality was not the primary problem. The prompts were trying to
turn relational atmospheric effects into standalone gallery objects.

---

## Product Model: Creative Style × Creative Lens

Mokuri's current Creative Styles define subject vocabulary and compositional
grammar:

| Creative Style | Primary grammar |
|----------------|-----------------|
| **Fūkei-ga** | Terrain, water, atmosphere, architecture, weather, and human scale |
| **Kacho-e** | Living subjects, flowers, branches, habitat, and season |
| **Ikebana** | Vessel, structural line, floral mass, balance, and empty space |
| **Machi** | Built places, streets, architecture, weather, and human activity |

Tsukiyo is orthogonal to those grammars:

| Creative Lens | Primary transformation |
|---------------|------------------------|
| **Tsukiyo** | Darkness, selective luminance, nocturnal atmosphere, compressed color, and quiet |

This allows combinations such as:

- **Fūkei-ga × Tsukiyo** — moonlit waterfalls, snowy villages, shrine paths,
  dark forests, and boats on still water.
- **Kacho-e × Tsukiyo** — night ponds, owl and branch compositions, autumn
  grasses, insects, lotus, and koi under moonlight.
- **Machi × Tsukiyo** — lantern streets, illuminated windows, bridges,
  embankments, rain, and reflected city light.
- **Ikebana × Tsukiyo** — potentially a restrained interior arrangement
  illuminated from one side, if composition testing demonstrates value.

The term **Creative Lens** is a planning concept, not yet a committed UI label.
Tsukiyo can first ship through atmosphere presets and guidance without adding a
second permanent top-level selector.

---

## Canonical Mokuri References

Three prints created with the existing Fūkei-ga/Core library establish a
stronger design brief than the proposed element inventory.

### Falling Moon

**Archetype:** Moonlit solitude
**Style relationship:** Fūkei-ga × Tsukiyo

The composition uses a tall vertical sequence:

1. Moon and quiet sky
2. Distant birds and pine silhouettes
3. Waterfall and enclosing cliffs
4. A small seated human figure

Its nocturnal character comes from compressed blue-gray and brown tones, dark
silhouettes, one restrained warm figure, atmospheric distance, and a muted
moon. The waterfall functions as a convincing axis of reflected light because
it belongs physically to the landscape.

### Lantern Glow

**Archetype:** Artificial illumination
**Style relationship:** Fūkei-ga × Tsukiyo

The stone lantern is an existing subject. The composition becomes nocturnal
through:

- A single warm luminous center
- Bokashi in the lantern window and light pools
- Dark pine silhouettes
- A subdued sky and ground
- A large ratio of darkness to warmth

This print suggests that Tsukiyo needs a light-source grammar and better
atmospheric illumination controls more than it needs additional lantern
silhouettes.

### Night Pond

**Archetype:** Autumn moon viewing
**Style relationship:** Kacho-e × Tsukiyo

Koi, lotus, grasses, and small animals remain familiar living subjects. Night
changes their relationships through subdued water, a small moon, warm autumn
grass, pale flowers, and a quiet center of ripples.

The composition is relatively rich in elements but still feels quiet. This
corrects the earlier assumption that nocturnes must always contain only three
to six elements. **Compositional quiet matters more than literal emptiness.**

The central reflection works because it is embedded in the pond and its ripple
structure. It is not a detachable reflection object.

These three prints should remain the reference set for evaluating future
Tsukiyo work.

---

## Nocturne Design Principles

### 1. Darkness has visual weight

Night is not an empty black background. Large dark areas should retain tonal
variation, print texture, subtle bokashi, and enough differentiation to hold
the composition together.

### 2. Establish a luminance hierarchy

A nocturne should normally have one primary luminous statement:

- Moon
- Waterfall
- Lantern or illuminated window
- Snow
- Pale flower
- Water reflection

Secondary highlights should support that statement rather than compete with
it.

### 3. Restrict warm color

Warmth becomes meaningful because it is rare. A lantern, window, garment,
fox, autumn grass, or small architectural surface can become the focal point
against a much larger cool field.

### 4. Compress color and interior contrast

Familiar elements should lose some internal contrast at night and read more
strongly as silhouettes or broad tonal masses. Carve level remains an
expressive choice: block-level simplicity may be the finished nocturnal form,
not merely a step toward detail.

### 5. Use bokashi as structure

Bokashi should organize the scene rather than decorate it. It can establish:

- A dark zenith and luminous horizon
- A moonlit wash
- Lantern illumination
- Mist depth
- Snow or water luminosity
- A transition between visible and obscured forms

### 6. Seek compositional quiet, not an element quota

A composition may be sparse or relatively rich. Quiet can come from:

- Repetition grouped into one mass
- Restricted palette
- Low contrast
- Large uninterrupted fields
- A clear focal hierarchy
- Subordinate detail

### 7. Let atmosphere connect the elements

Moonlight, fog, darkness, and reflection should feel continuous across the
composition. Effects that depend on another subject should not be modeled as
unrelated movable stickers unless actual use demonstrates that the abstraction
works.

---

## Primary Product Opportunity: Atmosphere

### Current atmosphere system

Mokuri currently provides:

- Named sky gradients
- Named ground gradients
- Horizon position
- Zero to three mist bands
- Per-zone directional bokashi

This is enough to establish basic scene conditions, but not enough to shape
air and illumination with the same nuance available in the element and print
systems. Mist bands are especially rigid: they vary primarily by count and
remain visually similar horizontal divisions.

Tsukiyo should use the existing atmosphere system as its main integration
point. The improvements should benefit every Creative Style rather than being
locked behind a Tsukiyo mode.

### Organic mist and fog

Replace or evolve the numeric mist-band concept into a small family of
visually distinct treatments:

| Treatment | Purpose |
|-----------|---------|
| **None** | Preserve clean paper and unobscured silhouettes |
| **Low Fog** | Concentrated around the horizon, valley, or shoreline |
| **Drifting Mist** | Uneven overlapping forms crossing the composition |
| **Deep Veil** | Broad translucent coverage that obscures distant elements |
| **Water Haze** | Thin luminous atmosphere immediately above water |

Useful internal variation may include:

- Amount
- Vertical position
- Thickness and spread
- Opacity
- Edge softness
- Organic edge wobble
- Overlap
- Procedural seed

The UI should remain compact. Named treatments plus one or two intuitive
controls such as **Amount** and **Height** are preferable to exposing every
render parameter.

Existing saved compositions using `mist: 0–3` must remain loadable. A future
data migration can map the numeric value to an equivalent default treatment.

### Nocturnal illumination fields

Mokuri does not need a physically based lighting engine. A small set of
woodblock-compatible illumination treatments would provide most of the value:

| Treatment | Purpose |
|-----------|---------|
| **Horizon Glow** | Pale bokashi rising from the horizon |
| **Moon Wash** | Cool restrained illumination across part of the scene |
| **Lantern Pool** | Low warm illumination beneath or around a light source |
| **Ambient Darkness** | Deepened edge or upper-sky tone around a focal area |
| **Water Sheen** | Broken subdued luminance across a water surface |

These treatments should feel printed:

- Flat color and bokashi rather than digital bloom
- Organic boundaries rather than perfect geometry
- Restrained opacity
- Visible relationship to paper and ink
- Enough variation to avoid a reusable filter appearance

The first implementation should be preset-driven or manually positioned.
Automatic light projection, element-aware shadows, and physically calculated
reflections would add substantial complexity and are not required to validate
the concept.

### Greater sky depth

Existing sky types can gain more expressive variation through:

- Zenith darkness versus horizon luminosity
- Gradient strength
- Irregular transition boundaries
- Optional wash or veil
- Distinct moonlit, starlit, overcast-night, and twilight recipes

The moon remains an element because its size and placement are compositional.
The surrounding illumination belongs to atmosphere.

### Water response

Water should initially use atmosphere-level sheen and existing ripple elements.
A later experiment may derive a broken reflection from the placement of a moon
or light source, but this should not be a prerequisite for Tsukiyo.

---

## Preset-Led Experience

Atmosphere controls should not turn the Inking Workbench into a technical
lighting editor. Named presets should provide the expressive starting point,
with the ordinary controls remaining available for adjustment.

Recommended initial presets:

| Preset | Character | Suggested reference |
|--------|-----------|---------------------|
| **Falling Moon** | Cool moon wash, distant mist, dark forest tones | `Falling Moon` |
| **Lantern Night** | Deep sky, restrained warm light pool, minimal mist | `Lantern Glow` |
| **Night Pond** | Water haze, subdued surface, autumn warmth, small moon | `Night Pond` |
| **Frost Silence** | Cold horizon glow, deep veil, almost no warm color | Winter landscape |
| **Moonlit Lake** | Dark zenith, waterline mist, broken surface sheen | Lake or river scene |

A preset may recommend:

- Sky
- Ground
- Horizon
- Mist treatment
- Illumination treatment
- Palette
- Paper
- Ink load
- Impression count

These remain editable recommendations, not locked scene modes.

---

## Palettes

The original Tsukiyo palette direction remains useful. The palettes should
become normal built-in Mokuri palettes available across released Creative
Styles. Tsukiyo presets may recommend them but should not own or restrict them.

### Tsukiyo 月夜 — Classic Moonlit

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Deep indigo | `#0f1428` | Night sky, deep shadows, dominant dark |
| 1 | Slate blue | `#3a4a6a` | Architecture, forest, and mid-distance |
| 2 | Moon silver | `#c8ccd8` | Moonlight, water, snow, and pale subjects |
| 3 | Warm glow | `#d4a050` | Lanterns and restrained warm focus |
| 4 | Paper cream | `#e8e0d0` | Brightest reserve and lit surfaces |

Slots 0–1 should dominate. Slots 2 and 4 establish luminance. Slot 3 should be
used sparingly.

### Yomichi 夜道 — Night Road

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Black brown | `#1a1410` | Deep shadow and dark wood |
| 1 | Warm charcoal | `#4a3a2a` | Architecture, trunks, and earth |
| 2 | Amber | `#c48a30` | Lantern glow and illuminated grass |
| 3 | Rust orange | `#a05a2a` | Warm surfaces and roof tones |
| 4 | Pale gold | `#e8d8b0` | Lantern paper and lit openings |

This is an inhabited night dominated by artificial warmth rather than
moonlight.

### Shimoyo 霜夜 — Frost Night

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Blue-black | `#0a1020` | Sky and deepest tone |
| 1 | Frost blue | `#5a6a8a` | Snow shadows and mid-distance |
| 2 | Ice white | `#d8e0e8` | Frost, snow, and moonlit surfaces |
| 3 | Pale lavender | `#9a8aaa` | Mist, cloud, and distant forms |
| 4 | Warm amber | `#c49a50` | One small inhabited accent |

This palette should remain almost entirely cool. Its emotional effect depends
on using slot 4 very rarely.

Palette values must still be tested through the print engine on Hosho, Kozo,
Kakishibu, and other papers before release.

---

## Element Direction

Tsukiyo does not require a dedicated ten-element file.

### Recommended Fūkei-ga/Core additions

Moon variants fill a genuine compositional gap and remain useful outside
Tsukiyo:

- Crescent moon
- Half moon
- Gibbous moon

The existing full moon remains the primary circular moon. Clouds should remain
separate elements so artists can create partial occlusion without multiplying
nearly identical moon-and-cloud variants.

### Recommended Kacho-e or shared additions

- **Owl** — a strong Kacho-e living subject with obvious nocturnal use.
- **Fox** — useful in intimate nature and landscape compositions. It may be
  owned by Kacho-e or Fūkei-ga and explicitly Featured in both after release
  review.

These elements must meet the normal Mokuri quality bar at block, shape, and
detail levels. They should not contain baked-in moonlight or night backgrounds.

### Do not treat these as normal standalone elements

| Earlier proposal | Revised direction |
|------------------|------------------|
| **Hoshi star field** | Atmosphere treatment if needed; not a decorative element pattern |
| **Tsuki Reflection** | Water sheen or future relational reflection behavior |
| **Hotaru cluster** | Defer; consider a very sparse procedural overlay only after composition testing |
| **Chōchin Row** | Review existing lantern vocabulary before adding another variant |
| **Tōrō Lit** | Improve light-source zones or atmosphere behavior around existing lanterns |
| **Kodama tree** | Review existing twisted pine, bare branch, and tree silhouettes first |
| **Yūkaku Gate** | Revisit as part of Machi or a demonstrated Fūkei-ga architectural gap |
| **Suzumushi grasses** | Existing susuki and Kacho-e insect vocabulary may already cover the need |

No generated candidate should be promoted merely because it exists.

---

## Existing Element Curation

Tsukiyo should feature explicitly reviewed elements from released Creative
Styles rather than use automatic affinity scoring.

Likely Fūkei-ga companions include:

- Full moon and future moon phases
- Cloud bank and cloud wisp
- Pine tree, twisted pine, and bare branch
- Mountains and cliffs
- Waterfall, pond, stream, water ripples, and waves
- Torii, pagoda, tea house, bridge, stone path, and lanterns
- Rain and snow
- Boat, traveler, umbrella figure, fisher, and other small staffage

Likely Kacho-e companions include:

- Owl when available
- Fox when available
- Crane, heron, sparrow, and other birds
- Koi, frog, turtle, and insects
- Lotus, iris, susuki, maple, pine, and bare branches

Featured membership should follow the explicit `pickerSections` direction in
`docs/style-pack-curation-plan.md`. A future Lens implementation may define
recommended elements separately from Creative Style ownership and
presentation, but it should not restore automatic affinity as the production
authority.

---

## Materials and Print Behavior

Tsukiyo should recommend materials rather than require them:

- **Ink load:** Standard or Heavy
- **Papers:** Kozo, Kakishibu, Torinoko, or other papers validated through
  print testing
- **Impressions:** Multiple impressions for deep dark fields when appropriate
- **Carving:** Lower carve levels for silhouettes; selective higher carving
  for luminous reserve
- **Bokashi:** Central to sky, fog, water, and light-source treatments

Potential print-engine tuning should be evaluated only after the atmosphere
prototype:

- More visible ink variation in large dark fields
- Better preservation of pale ink on dark paper
- Controlled luminance without digital glow
- Subtle variation across broad bokashi regions

These are opportunities, not initial blockers.

---

## Audio

The existing procedural audio already supports the nocturne direction:

- Night lowers the chime register.
- Intervals become wider and quieter.
- Wind changes character.
- Dusk and night reduce birds and introduce crickets.
- Water influences the ambient layer.

Tsukiyo should initially use this existing atmosphere-reactive behavior. New
literal owl or firefly sounds are not required and risk making the soundscape
more illustrative and less meditative.

---

## Journeys and Prompts

Recommended journeys:

### 1. Compose a Moonlit Nocturne

Reference: `Falling Moon`

Guidance:

1. Choose one primary source of luminance.
2. Establish a large dark field.
3. Use silhouettes to structure depth.
4. Add one restrained warm or human focal point.
5. Apply mist, bokashi, and material choices.

### 2. Lantern Light

Reference: `Lantern Glow`

Guidance:

1. Place one lantern or illuminated structure.
2. Restrict warm color to the light source.
3. Use a lantern pool or related bokashi treatment.
4. Keep surrounding elements dark and subordinate.
5. Compare standard and heavy ink.

### 3. Autumn Moon Viewing

Reference: `Night Pond`

Guidance:

1. Begin with a Kacho-e living subject or habitat.
2. Group repeated flora into a calm mass.
3. Add a small moon or pale reflective center.
4. Use water haze and restrained surface contrast.
5. Preserve quiet even with a richer element count.

Useful prompts:

- A full moon above falling water
- One warm light in a dark landscape
- Autumn grasses beside a night pond
- Snowfall on a silent village
- A bird on a branch under moonlight
- No light source except the moon
- Everything in silhouette
- Turn this familiar scene into night
- Add one source of warmth
- Let darkness occupy most of the paper

---

## Non-Goals

- Do not create a ten-element Tsukiyo-owned library.
- Do not duplicate existing trees, gates, grasses, lanterns, or architecture
  merely to label them nocturnal.
- Do not make star fields, generic glow, or moon reflections into ordinary
  gallery stickers.
- Do not introduce physically based lighting or automatic cast shadows in the
  first implementation.
- Do not require a second top-level mode selector before the preset experience
  proves useful.
- Do not hide palettes or atmosphere capabilities from other Creative Styles.
- Do not define Tsukiyo by a fixed element-count rule.
- Do not make audio more literal unless user testing identifies a real need.

---

## Implementation Plan

### Phase 1: Atmosphere foundation

1. Audit the current sky, ground, horizon, and mist implementation.
2. Prototype organic low fog and drifting mist using the existing atmosphere
   rendering pipeline.
3. Add enough parameterization for amount, height, organic shape, and seed.
4. Preserve compatibility with numeric `mist: 0–3` save data.
5. Verify workspace and final print render the same atmosphere intent.

**Deliverable:** mist and fog that can establish depth without rigid bands.

### Phase 2: Illumination treatments

1. Prototype horizon glow and moon wash.
2. Prototype a low lantern-light field using flat color and bokashi.
3. Prototype restrained water sheen.
4. Avoid element-aware physics in this phase.
5. Test on light and dark papers with standard and heavy ink.

**Deliverable:** a small reusable vocabulary of printed illumination.

### Phase 3: Palettes and presets

1. Add and tune Tsukiyo, Yomichi, and Shimoyo as built-in palettes.
2. Create the five initial atmosphere presets.
3. Rebuild `Falling Moon`, `Lantern Glow`, and `Night Pond` using those presets.
4. Compare the presets across Fūkei-ga and Kacho-e compositions.
5. Remove or revise any preset that only works for one composition.

**Deliverable:** a useful nocturne experience without new element ownership.

### Phase 4: Minimal element additions

1. Design crescent, half, and gibbous moon variants for Fūkei-ga/Core.
2. Develop and review one owl for Kacho-e.
3. Develop and review one fox for shared Fūkei-ga/Kacho-e presentation.
4. Test every element at all carve levels and in daylight as well as night.
5. Do not proceed with other generated candidates without a demonstrated gap.

**Deliverable:** a small set of broadly useful, non-duplicative elements.

### Phase 5: Guidance and presentation

1. Add the three initial journeys.
2. Add curated gallery compositions based on the canonical references.
3. Add Tsukiyo prompts and material recommendations.
4. Confirm the existing audio transitions support each preset.
5. Test on phone, tablet, desktop, and installed PWA.

**Deliverable:** a complete guided nocturne experience.

### Phase 6: Product-model evaluation

After the preset experience is proven:

1. Decide whether **Creative Lens** should become a user-facing concept.
2. Decide whether lenses need their own selector or remain named atmosphere
   collections.
3. Define how a lens recommends elements without conflicting with explicit
   Creative Style picker curation.
4. Evaluate whether future lenses justify the abstraction or whether Tsukiyo
   should remain a singular named atmosphere suite.

**Deliverable:** a product decision based on actual use rather than speculative
architecture.

---

## Recommended First Implementation Slice

The smallest meaningful future implementation is:

1. Prototype **Low Fog** and **Drifting Mist**.
2. Prototype **Moon Wash** and **Lantern Pool**.
3. Create one provisional Tsukiyo palette and three named presets.
4. Rebuild the three canonical reference prints.
5. Compare workspace appearance, print output, performance, and mobile UI.
6. Decide whether the atmosphere model is expressive enough before adding
   elements or permanent Lens infrastructure.

This slice tests the central thesis:

> Can richer atmosphere transform existing Mokuri elements into convincing
> nocturnes?

If the answer is yes, Tsukiyo can grow through atmosphere, palette, guidance,
and selective additions. If the answer is no, the reference compositions will
show which specific capability is still missing.

---

## Relationship to the Creative Style Curation Plan

`docs/style-pack-curation-plan.md` currently lists Tsukiyo beside Fūkei-ga,
Kacho-e, Ikebana, and Machi as a future Creative Style. This document supersedes
that classification for Tsukiyo.

The broader curation plan remains valid for element-based Creative Styles:

- Explicit Featured sections
- Separation of ownership, presentation, and release status
- Complete released library under All Elements
- Deliberate cross-style reuse
- Developer-controlled release

A future revision of the broader plan should identify Tsukiyo as an
atmosphere-led Creative Lens or named nocturne suite rather than an
element-based Creative Style.
