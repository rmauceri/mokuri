# Moribana Style Pack — Design Document

## 盛花 — "Piled-Up Flowers"

### Vision

Moribana shifts Mokuri's creative mode from **"compose a scene"** to **"compose an arrangement."** Inspired by the ikebana tradition of structured flower arrangement in shallow vessels, this pack introduces intimate still-life compositions where negative space is structural, every element earns its place, and the vessel is as important as the flowers it holds.

Where Kacho-e celebrates birds and flowers in nature, Moribana celebrates the **human act of arranging nature** — a deeply meditative art form with centuries of tradition in Japanese culture.

### Key Characteristics

- Minimal elements (3–7 per composition)
- Strong use of negative space (ma 間)
- Emphasis on line, balance, and asymmetry
- The vessel grounds the composition — it is not background, it is structure
- Seasonal awareness drives element and palette choices

---

## Existing Mokuri Elements — Crossover Companions

Several core and Kacho-e elements work naturally in ikebana-style compositions. The Moribana pack should **recommend** these as companions alongside its new elements, creating a richer vocabulary without redundancy.

### Direct Ikebana Companions (High Relevance)

| Element | Source | Why It Works for Moribana |
|---------|--------|---------------------------|
| **iris-cluster** | scene-elements.js | Classic ikebana subject — iris (*kakitsubata*) is one of the most celebrated arrangement flowers. Vertical blade leaves provide strong line. |
| **chrysanthemum** | extended-elements.js | The imperial flower (*kiku*). Already exists as a single bloom. Could be used as-is for simpler arrangements, or the new Moribana kiku could offer a more refined, multi-layered variant. |
| **susuki-grass** | extended-elements.js | Miscanthus plumes — essential autumn ikebana accent. Feathered seed heads on arching stems provide movement and seasonal grounding. |
| **pine-bough** | extended-elements.js | Pine (*matsu*) is a foundational ikebana material representing longevity. Provides strong structural line with needle cluster texture. |
| **bare-branch** | extended-elements.js | Winter structural element — angular bare wood is a staple of minimalist arrangements, especially *chabana* (tea ceremony flowers). |
| **cherry-branch** | elements.js | Spring structural branch with blossoms. Iconic in seasonal arrangements — provides both line and floral accent in one element. |
| **peony** | kacho-elements.js | Lush layered bloom (*botan*). A prestige flower in ikebana — works beautifully as a focal flower in vessel arrangements. |
| **wisteria** | kacho-elements.js | Cascading flower clusters (*fuji*). Ideal for tall vase (tsubo) arrangements where the flowers drape downward. |

### Supporting Companions (Moderate Relevance)

| Element | Source | How It Supports Moribana |
|---------|--------|--------------------------|
| **maple-branch** | scene-elements.js | Autumn color accent — *momiji* branches add seasonal warmth and angular structure to arrangements. |
| **weeping-willow** | elements.js | Cascading graceful curves — could represent *yanagi* (willow) in spring/summer arrangements, though it's a full tree rather than a cut branch. |
| **ume-blossom** | extended-elements.js | Single plum blossom — useful as a floating accent, but the new ume-branch element will provide the full angular branch structure ikebana needs. |
| **bamboo-grove** | scene-elements.js | Bamboo reference — though designed as a landscape grove, individual stalks could inspire arrangement compositions. The new hanaire vessel draws from bamboo aesthetics. |
| **morning-glory** | kacho-elements.js | Vine flower (*asagao*) — used in summer ikebana, particularly in tall vessels where the vine can trail. |
| **lotus** | kacho-elements.js | Sacred water flower — while typically shown in ponds, lotus in a suiban evokes classical Buddhist arrangement. |

### Design Implication

The pack manifest (`moribana-pack.js`) should list these companion element IDs alongside the new Moribana elements, so the UI can surface them together when the pack is active. Users get a curated vocabulary of ~18–20 elements (10 new + 8–10 companions) without any being created twice.

---

## New Elements (10)

### Vessels (3) — *Entirely New to Mokuri*

No existing Mokuri elements depict containers. These are the pack's most distinctive contribution — they transform compositions from scenes into arrangements.

#### 1. Suiban (水盤) — Shallow Moribana Basin

The quintessential moribana vessel. A wide, low ceramic basin where the kenzan sits and water is visible.

- **ViewBox**: ~200×80 (wide and low)
- **ColorZones** (3): `body` (exterior glaze), `rim` (lip accent), `water` (interior/water surface)
- **Suggested Layer**: foreground
- **Carve Levels**:
  - Block: vessel silhouette fill (body), rim band fill, water surface fill
  - Shape: + rim stroke, foot ring stroke, body contour
  - Detail: + glaze crackle marks, water ripple lines, subtle reflection strokes
- **Design Notes**: Slight asymmetry in the rim profile. The water zone is key — it can take bokashi beautifully (gradient suggesting depth/reflection). Low profile means it anchors without dominating.

#### 2. Tsubo (壺) — Tall Ceramic Vase

A tall vase with narrow neck for *nageire*-style arrangements where branches and flowers are inserted at angles.

- **ViewBox**: ~100×160 (tall and narrow)
- **ColorZones** (3): `body` (main glaze), `neck` (upper section), `accent` (glaze drip/band)
- **Suggested Layer**: foreground
- **Carve Levels**:
  - Block: vessel body fill, neck fill, accent band fill
  - Shape: + body contour stroke, neck ring stroke, shoulder curve
  - Detail: + glaze texture, kiln marks, foot detail
- **Design Notes**: Elegant S-curve profile. The accent zone allows a contrasting glaze drip or decorative band — a hallmark of Japanese ceramics.

#### 3. Hanaire (花入) — Bamboo Cylinder Vase

A rustic split-bamboo vase used in tea ceremony flower arrangements (*chabana*).

- **ViewBox**: ~80×150 (tall, narrow)
- **ColorZones** (3): `bamboo` (main body), `node` (joint band), `interior` (dark opening)
- **Suggested Layer**: foreground
- **Carve Levels**:
  - Block: cylinder body fill, node band fill, dark interior fill
  - Shape: + vertical grain strokes, node ring stroke, rim stroke
  - Detail: + fine grain texture, split marks, aging patina strokes
- **Design Notes**: Natural, unglazed character. The node band is structurally distinctive. Narrower than tsubo — suggests restraint and wabi-sabi aesthetic.

### Flowers (4) — Refined Botanical Studies

Each flower has a distinct silhouette, petal structure, and seasonal association. Designed to be more refined than existing floral elements — these are arrangement-grade blooms.

#### 4. Kiku (菊) — Chrysanthemum

The imperial flower. A dome of narrow radiating petals — more refined and complex than the existing `chrysanthemum` element (which is simpler/flatter).

- **ViewBox**: ~140×130
- **ColorZones** (4): `outer-petal` (outer ring), `inner-petal` (inner dome), `center` (golden heart), `stem` (stem and leaves)
- **Suggested Layer**: foreground
- **Season**: Autumn
- **Carve Levels**:
  - Block: outer petal mass fill, inner petal dome fill, center dot fill, stem fill, 1–2 leaf fills
  - Shape: + individual petal division strokes (radiating), leaf midrib strokes, stem contour
  - Detail: + fine petal veins, stamen dots, leaf serration, calyx detail
- **Design Notes**: Two petal zones (outer/inner) allow subtle two-tone coloring — characteristic of cultivated chrysanthemums. The dome shape should read clearly at block level.

#### 5. Tsubaki (椿) — Camellia

Round, structured bloom with thick waxy petals and a prominent golden stamen cluster. A winter/early spring flower.

- **ViewBox**: ~120×120
- **ColorZones** (3): `petal` (main petals), `stamen` (golden center cluster), `leaf` (glossy leaves)
- **Suggested Layer**: foreground
- **Season**: Winter / Early Spring
- **Carve Levels**:
  - Block: 4–5 overlapping petal fills (round, cupped), stamen cluster fill, 2–3 glossy leaf fills
  - Shape: + petal edge strokes, stamen radiating strokes, leaf midrib, stem
  - Detail: + petal vein marks, individual stamen dots, leaf gloss highlights, bud accent
- **Design Notes**: The camellia's defining feature is its round, bowl-shaped petal arrangement with visible golden stamens at center. Thick, waxy petals should feel substantial — not delicate like cherry.

#### 6. Ran (蘭) — Orchid Spray

An arching spray of 3–4 orchid blooms on a graceful curving stem. Each bloom has a distinctive labellum (lip petal).

- **ViewBox**: ~180×140
- **ColorZones** (3): `petal` (sepals and petals), `lip` (labellum — contrasting center), `stem` (stem and roots)
- **Suggested Layer**: foreground
- **Season**: Spring / Year-round
- **Carve Levels**:
  - Block: 3–4 bloom fills (each ~20px), stem fill (tapered arc), 1–2 leaf fills (long, blade-like)
  - Shape: + individual petal strokes per bloom, lip detail strokes, stem contour, leaf midrib
  - Detail: + fine vein marks on petals, spotted pattern on lip, aerial root strokes, bud accents
- **Design Notes**: The orchid represents refinement and nobility. The arching stem provides natural line — it almost arranges itself. The labellum (lip) zone in a contrasting color is the species signature. Blooms should diminish in size toward the stem tip (largest at bottom, bud at top).

#### 7. Suisen (水仙) — Narcissus

Clean, upright blooms with trumpet corona, rising from blade-like leaves. Pure and architectural.

- **ViewBox**: ~120×150
- **ColorZones** (3): `petal` (white/cream outer tepals), `corona` (yellow trumpet center), `leaf` (blue-green blades)
- **Suggested Layer**: foreground
- **Season**: Late Winter
- **Carve Levels**:
  - Block: 2 bloom fills (6-pointed star silhouette each), corona fills, leaf blade fills (3–4 upright), stem fills
  - Shape: + tepal division strokes, corona rim stroke, leaf midrib strokes
  - Detail: + fine tepal veins, corona ruffle marks, leaf tip taper strokes, small bud accent
- **Design Notes**: Narcissus is valued in ikebana for its clean vertical line and seasonal meaning (late winter purity). The star-shaped blooms with contrasting trumpet coronas should be immediately recognizable. Leaves are as important as flowers — their upright blade form is structural.

### Structural Branches & Accents (3)

#### 8. Ume Branch (梅枝) — Angular Plum Branch

The most iconic ikebana structural element. Dramatic angular turns with sparse blossoms on aged wood.

- **ViewBox**: ~200×160
- **ColorZones** (3): `branch` (dark aged bark), `blossom` (5-petal plum flowers), `detail` (buds, stamens)
- **Suggested Layer**: midground
- **Season**: Late Winter / Early Spring
- **Carve Levels**:
  - Block: main branch fill (tapered, angular with 2–3 dramatic direction changes), 3–5 blossom fills, 2–3 bud fills
  - Shape: + bark contour strokes, blossom petal divisions, twig strokes
  - Detail: + bark texture hatching, stamen dots, bud calyx marks, lichen accents
- **Design Notes**: Distinguished from existing `ume-blossom` (which is a single flower). This is a full branch — the primary structural line of the arrangement. The angular character of plum wood is its essence: dramatic direction changes that create visual tension. Blossoms are sparse (3–5), not abundant — implying early spring, just beginning to open.

#### 9. Matsu Branch (松枝) — Pine Branch

A horizontal spreading pine branch with needle clusters. Evergreen strength and permanence.

- **ViewBox**: ~200×120
- **ColorZones** (3): `branch` (reddish-brown bark), `needle` (dark green clusters), `detail` (cone, new growth)
- **Suggested Layer**: midground
- **Season**: Year-round (evergreen)
- **Carve Levels**:
  - Block: main branch fill (gently curving, horizontal emphasis), 4–6 needle cluster fills (fan-shaped masses)
  - Shape: + branch bark strokes, needle cluster outline strokes, twig divisions
  - Detail: + individual needle strokes within clusters, bark plate texture, small cone accent, bud tips
- **Design Notes**: Distinguished from existing `pine-bough` by being designed specifically for arrangement composition — more horizontal, fewer needle clusters but more refined. Pine represents longevity and is often the *shin* (primary/heaven) branch in formal ikebana.

#### 10. Kenzan (剣山) — Pin Frog Holder

The metal pin holder that sits in the suiban, holding stems in place. A functional object elevated to aesthetic element.

- **ViewBox**: ~60×30 (small, low)
- **ColorZones** (2): `base` (metal disc), `pins` (pin points)
- **Suggested Layer**: foreground
- **Season**: N/A (tool/accessory)
- **Carve Levels**:
  - Block: disc base fill, pin surface fill
  - Shape: + disc edge stroke, grid pattern strokes suggesting pin rows
  - Detail: + individual pin point dots, metal sheen marks, base weight ring
- **Design Notes**: Small but meaningful — the kenzan is visible in moribana arrangements and is part of the aesthetic. Its metallic character (lead-gray base, silver pin points) contrasts with organic flowers and ceramic vessels. Optional element — some compositions show it, others hide it behind stems.

---

## Palettes (3) — Named for Ceramic Glazes

Each palette evokes a different ceramic tradition and seasonal mood, distinct from Kacho-e's garden-and-sky palettes.

### Seiji 青磁 (Celadon)

Cool elegance inspired by celadon-glazed ceramics.

| Slot | Color | Role |
|------|-------|------|
| 0 | `#4A6B5A` | Deep celadon green (vessels, branches) |
| 1 | `#F5EFE0` | Warm cream (petals, paper) |
| 2 | `#8BA888` | Sage green (leaves, accents) |
| 3 | `#D4A0A0` | Soft blush pink (flowers) |
| 4 | `#3D3D3D` | Warm charcoal (detail, stems) |

**Mood**: A cool morning in a ceramic studio. Meditative, restrained. Works beautifully with suiban arrangements where water reflects celadon tones.

### Shino 志野 (Shino Ware)

Warm earth tones inspired by Shino ceramic glaze — milky white with orange-rust accents.

| Slot | Color | Role |
|------|-------|------|
| 0 | `#C17845` | Rust orange (warm accents, autumn flowers) |
| 1 | `#F0E6D3` | Warm cream/milk (vessel glaze, petals) |
| 2 | `#6B7F4A` | Moss green (leaves, stems) |
| 3 | `#8B5E6B` | Plum/mauve (flowers, accents) |
| 4 | `#5C5047` | Warm gray-brown (branches, structure) |

**Mood**: Autumn arrangement by a window. Wabi-sabi warmth. The rust-and-cream combination echoes Shino glaze's characteristic *hi-iro* (fire color) showing through milky white.

### Raku 楽 (Raku Ware)

Dramatic contrast inspired by Raku tea bowls — deep black with vivid accents.

| Slot | Color | Role |
|------|-------|------|
| 0 | `#1A1A1A` | Deep black (vessels, dramatic ground) |
| 1 | `#C23B3B` | Vermillion red (focal flowers) |
| 2 | `#2D5A3D` | Forest green (leaves, pine) |
| 3 | `#C9A84C` | Antique gold (stamens, accents) |
| 4 | `#F0E8D8` | Warm cream (petals, contrast) |

**Mood**: A formal arrangement in a tokonoma alcove, lit by candlelight. Intense, ceremonial. The black-and-vermillion combination is quintessentially Japanese — think lacquerware and tea ceremony.

---

## Creative Journeys (2)

### 1. "Your First Arrangement" (hajimete-ikebana)

> *"A single flower rises from a shallow vessel"*

- **Type**: scene
- **Feature Hints**: `['place', 'palette', 'carve', 'print']`
- **Teaching Goal**: Learn the basic workflow through the lens of ikebana — vessel first, then flower, then print. Emphasizes that placement and negative space matter more than filling the composition.
- **Next Journey**: `seasonal-harmony`

### 2. "Seasonal Harmony" (kisetsu-no-wa)

> *"Combine elements that share a season's spirit"*

- **Type**: scene
- **Feature Hints**: `['color-zones', 'bokashi', 'atmosphere']`
- **Teaching Goal**: Explore color zone editing and bokashi gradients to create depth. Use atmosphere (sky/ground) to set seasonal context behind the arrangement.
- **Next Journey**: null (terminal)

---

## Creative Prompts (10)

| Type | Prompt |
|------|--------|
| scene | *"A single branch reaches upward from a shallow basin"* |
| scene | *"Winter narcissus in morning light"* |
| scene | *"Chrysanthemums arranged for the emperor's viewing"* |
| scene | *"An orchid spray cascading from a bamboo vase"* |
| scene | *"Camellias fallen beside their vessel"* — tsubaki placed beside/below the vase, evoking the flower's habit of dropping whole |
| constraint | *"An arrangement using no flowers"* — branch + vessel + kenzan only |
| constraint | *"Three elements, three seasons"* — one spring, one summer, one autumn element |
| transformation | *"Transform a spring arrangement into winter"* — swap palette and elements |
| emotion | *"The space between the stems"* — emphasize ma (negative space) |
| emotion | *"A vessel, waiting"* — suiban alone with perhaps one fallen petal |

---

## Design Considerations

### Scale Relationships

Elements must feel proportionally correct when composed together. Design targets:

| Element Type | Height Range | Width Range | Rationale |
|---|---|---|---|
| Vessels | 50–80px | 100–200px (suiban) / 60–100px (tsubo, hanaire) | Vessels are the anchor — wide or tall but not both |
| Flowers | 80–130px | 80–140px | Focal elements — prominent but not overwhelming |
| Branches | 120–180px | 150–200px | Structural lines — extend beyond the vessel |
| Kenzan | 20–30px | 40–60px | Small functional accent |

Flowers placed "in" a vessel should feel like they could belong there — stems reaching into the vessel opening, not floating above it.

### Vessel Design Challenges

Vessels are new territory for Mokuri. Key considerations:

1. **Interior visibility**: The suiban's water surface and the tsubo/hanaire's dark interior opening are important visual features. The interior zone provides tonal contrast.
2. **Glaze as texture**: Carve detail level should suggest ceramic surface — crackle, drip marks, kiln effects — without overwhelming the form.
3. **Weight and stability**: Vessels should feel grounded. Wider base fills, visible foot rings, and slight asymmetry convey physical presence.
4. **Bokashi opportunity**: Vessel body zones take bokashi gradients beautifully — suggesting light falling across curved ceramic.

### Distinguishing from Existing Elements

| New Element | Existing Element | Distinction |
|---|---|---|
| Kiku (菊) | chrysanthemum | Kiku has 4 zones (outer/inner petal separation for two-tone), more refined layered dome silhouette, designed for arrangement scale |
| Matsu Branch (松枝) | pine-bough | Matsu is horizontal-emphasis, fewer but more refined needle clusters, designed for vessel composition |
| Ume Branch (梅枝) | ume-blossom | Ume-blossom is a single flower; ume-branch is a full angular branch with sparse blossoms — the structural line |
| Ran (蘭) | — | No existing orchid. Entirely new. |
| Tsubaki (椿) | — | No existing camellia. Entirely new. |
| Suisen (水仙) | — | No existing narcissus. Entirely new. |
| Vessels | — | No existing containers of any kind. Entirely new category. |

### The Companion Element Strategy

Rather than duplicating elements that already work, the Moribana pack manifest should list companion element IDs from core and Kacho-e packs:

```javascript
companionElements: [
  // Core & Extended
  'iris-cluster', 'chrysanthemum', 'susuki-grass', 'pine-bough',
  'bare-branch', 'cherry-branch', 'maple-branch',
  // Kacho-e
  'peony', 'wisteria', 'morning-glory', 'lotus'
]
```

When the Moribana pack is active, these companions appear alongside the 10 new elements in the gallery — giving users ~20 elements curated for ikebana composition without any redundancy.

---

## File Structure

```
assets/
  moribana-elements.js   → MOKURI_MORIBANA_ELEMENTS (10 elements)
  moribana-pack.js       → Pack manifest (palettes, journeys, prompts, companions)
```

Both wired via `<script>` tags in `index.html` after `pack-registry.js`. Elements use `pack: 'moribana'`.

---

## Implementation Order

1. **Vessels first** (suiban, tsubo, hanaire) — these are the pack's unique contribution and need iteration
2. **Flowers** (kiku, tsubaki, ran, suisen) — refined botanical studies, each needs 2–3 rounds
3. **Branches & accents** (ume-branch, matsu-branch, kenzan) — structural elements
4. **Palettes** (seiji, shino, raku) — tune after seeing elements in context
5. **Pack manifest** (journeys, prompts, companions) — wire up after elements are stable
6. **Gallery presets** — 2–3 curated compositions showcasing the pack

---

## Atmosphere Pairings

Moribana compositions benefit from minimal or no atmosphere — the arrangement IS the subject. Recommended pairings:

- **No sky + no ground**: Pure still-life on paper. Classic.
- **Overcast sky + no ground**: Soft diffused light suggesting an interior near a window.
- **No sky + earth ground**: Arrangement sitting on a surface (tokonoma shelf).
- **Dawn sky + no ground**: Warm morning light behind the arrangement.

The pack presets should demonstrate these minimal atmosphere uses.
