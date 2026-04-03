# Kacho-e Style Pack — Design Document

## 花鳥画 — "Birds and Flowers"

### Vision

Kacho-e shifts Mokuri's creative mode from **"compose a landscape"** to **"compose a study."** Inspired by the *kacho-ga* (花鳥画, bird-and-flower painting) tradition — from Hokusai's *Small Flowers* series to Hiroshige's intimate nature studies and Utamaro's insect and plant books — this pack introduces close-framed nature subjects where a single bird or bloom commands the composition, seasonal pairing carries meaning, and quiet motion replaces panoramic sweep.

Where Core Mokuri celebrates nature at distance — mountains, water, sky — Kacho-e celebrates nature **at arm's length**. A heron's patient stance. The weight of a peony in full bloom. A kingfisher's dagger beak poised above still water. These are not landscape elements; they are portraits of living things rendered with the printmaker's vocabulary of flat color, carved texture, and deliberate simplification.

### Key Characteristics

- **Close framing** — subjects fill their viewBox. No tiny figures in vast landscapes; the bird or flower *is* the composition
- **Seasonal pairing** — bird + flower combinations carry cultural meaning (warbler + plum = spring, swallow + wisteria = early summer)
- **Quiet motion** — a cocked tail, a turned head, a drooping petal. Movement is implied through posture, not action
- **Rich zone coloring** — 3–4 zones per element enable nuanced palette expression (body vs wing vs breast vs accent)
- **Carve accumulation** — block silhouettes read as bold shapes; detail level reveals feather texture, petal veins, and biological specificity
- **Intimate scale** — elements are designed for foreground placement at generous scale, not as distant staffage

### Artistic Tradition

**Hokusai — *Small Flowers* Series (c. 1832)**
Hokusai's flower prints are perhaps the purest expression of kacho-e as a printmaking tradition. Each composition is a single botanical subject — morning glory, chrysanthemum, peony — rendered with startling specificity yet unmistakably woodblock in technique:
- Flat color fields with no gradation within a petal
- Bold outlines that define form through silhouette
- Leaves and stems as structural lines, not afterthoughts
- The flower fills the frame — there is no "background scene"

**Hiroshige — Bird and Flower Series**
Hiroshige brought his landscape sensibility to kacho-e, placing birds in minimal environmental context:
- **Kingfisher and Iris** — a single bird perched above water, one cluster of iris below. Two subjects, one season, complete composition.
- **Swallows and Peach Blossoms** — birds in dynamic flight against a branch. Motion and stillness in tension.
- **Heron in Rain** — the bird's patience is the subject. Rain is atmosphere, not scenery.
- His kacho-e prints prove that bird + flower + atmosphere = a complete print. No mountains needed.

**Utamaro — *Ehon Mushi Erami* (Picture Book of Selected Insects, 1788)**
Utamaro's insect-and-plant studies pioneered the close-observation aesthetic:
- Multiple subjects at different scales sharing a composition
- Leaves and stems rendered with as much care as the featured creature
- Empty space as compositional breath
- The page edge crops the subject — nature extends beyond the frame

**Jakuchū Itō (1716–1800)**
Though primarily a painter, Jakuchū's obsessive biological detail influenced later woodblock kacho-e:
- Each feather zone distinct in color and texture
- Plumage rendered as overlapping zones, not uniform surfaces
- Attitude and personality in bird poses — pride, alertness, rest
- His approach validates the zone-per-material model: body, wing, breast, crown are different colors

### What Makes Great Kacho-e Prints (Design Principles)

1. **The subject has personality** — a heron isn't a bird-shaped outline. It has an S-curved neck that conveys patience, long legs that convey elegance, a dagger beak that conveys purpose. Every element should have *attitude* in its silhouette alone.
2. **Zones map to biology, not geometry** — a bird's zones are body, wing, breast, accent (crown/beak). A flower's zones are petal, center, leaf, stem. These reflect how the subject is actually colored, not arbitrary divisions.
3. **Carving reveals structure** — block level is a bold silhouette. Shape level adds anatomical divisions (wing edge, petal boundaries). Detail level adds biological texture (feather lines, petal veins, leaf serration). Each level tells you more about what the creature *is*.
4. **Less context, more presence** — a kacho-e composition with one bird, one flower, and empty space is more powerful than a crowded scene. The pack's elements are designed to be *sufficient* — you don't need ten elements to make a print.
5. **Seasonal awareness** — traditional pairings (warbler + plum for spring, swallow + wisteria for early summer, kingfisher + lotus for high summer, heron + autumn grasses) create prints that carry cultural resonance.

---

## Existing Mokuri Elements — Crossover Companions

Kacho-e elements work best with a light touch of environmental context. Core elements provide the branches to perch on, the water to wade in, and the atmosphere that sets the season.

### High-Affinity Companions

| Element | Source | Why It Works for Kacho-e |
|---------|--------|--------------------------|
| **cherry-branch** | elements.js | Spring blossom branch — classic perch for bush warbler. Bird + cherry = *uguisu to sakura*, the essential spring pairing. |
| **pine-tree** | elements.js | Structural evergreen — cranes and herons near pine. Provides vertical structure for bird compositions. |
| **twisted-pine** | elements.js | Dramatic angular branch — more intimate than full pine tree. Good perch element. |
| **tranquil-pond** | elements.js | Still water surface — context for heron, kingfisher, egret, lotus compositions. |
| **flowing-stream** | elements.js | Moving water — kingfisher hunting context, swallow flyover. |
| **iris-cluster** | scene-elements.js | Classic kacho-e pairing — kingfisher + iris is one of Hiroshige's most famous compositions. |
| **maple-branch** | scene-elements.js | Autumn color — seasonal context for late-year bird studies. |
| **bamboo-grove** | scene-elements.js | Bamboo backdrop — warbler and bamboo is a traditional painting subject (*take ni uguisu*). |
| **rock-formation** | scene-elements.js | Stone and water — grounding element for wading bird compositions. |
| **rain-curtain** | scene-elements.js | Weather as atmosphere — "heron in rain" is a classic kacho-e mood. |
| **water-ripples** | scene-elements.js | Surface disturbance — beneath wading birds, around lily pads. |
| **cloud-wisp** | scene-elements.js | Minimal sky — light atmospheric touch without full landscape. |

### Moderate-Affinity Companions

| Element | Source | How It Supports Kacho-e |
|---------|--------|--------------------------|
| **sakura-blossom** | extended-elements.js | Single blossom accent — scattered petals around a spring bird composition. |
| **ume-blossom** | extended-elements.js | Plum blossom — paired with warbler for the most traditional spring subject. |
| **chrysanthemum** | extended-elements.js | Autumn focal flower — can pair with birds for autumn studies. |
| **susuki-grass** | extended-elements.js | Autumn grass plumes — atmospheric accent for late-year compositions. |
| **pine-bough** | extended-elements.js | Close-up pine branch — tighter framing than full pine tree. |
| **bare-branch** | extended-elements.js | Winter structure — stark angular lines for winter bird studies. |
| **full-moon** | elements.js | Night accent — moon behind wisteria, above a night heron. |
| **snow-fall** | scene-elements.js | Winter atmosphere — transforms any bird study into a winter scene. |

### Core Fauna as Companions

| Element | Source | How It Pairs |
|---------|--------|--------------|
| **dragonfly** | fauna-elements.js | Summer accent near lotus, lily pads. |
| **butterfly** | fauna-elements.js | Spring/summer accent near flowers — small scale complement. |
| **frog** | fauna-elements.js | Water companion — near lotus, lily pads, with heron or egret. |

### Design Implication

With 20+ companion elements, Kacho-e's own 11 elements create a vocabulary of 30+ without redundancy. The pack provides birds and detailed flowers that don't exist in Core; companions provide the branches, water, weather, and atmospheric elements that give subjects their seasonal context.

---

## New Elements (11)

### Quality Aspiration — The Element Quality Challenge

The user has acknowledged that hand-crafted elements, particularly fauna, are "pretty far off the mark." The Kacho-e elements represent the most ambitious subject matter in Mokuri — birds with distinct anatomical zones, flowers with layered petals — and the gap between what the current SVG path definitions achieve and what Hiroshige or Hasui achieved in print is significant.

The current elements are *structurally sound* — they follow the zone model correctly, carve levels accumulate properly, and the rendering pipeline handles them well. What they lack is the **design quality** — the proportional elegance, the attitude in posture, the confidence of line — that comes from either skilled human illustration or high-quality AI-generated source art processed through the Element Forge's color segmentation pipeline.

The element definitions below document the *design intent*. The SVG paths are functional first drafts. As the Element Forge's AI-to-element pipeline matures (see `docs/forge-color-segmentation-plan.md` and `dev/Vector-Friendly Woodblock Illustration.md`), these elements are prime candidates for replacement with higher-quality versions that maintain the same zone structure and carve level semantics.

---

### Birds (5) — *The Focal Subjects*

Birds are the primary subjects of kacho-e. Each follows a consistent anatomical zone pattern: body, wing, breast/accent, detail (beak, legs, eye). The "sparrow pattern" — separate fills for head, body, beak, wing, tail — ensures each anatomical part is independently colored.

#### 1. Heron Standing (鷺)

A patient wading bird with an S-curved neck, watching water. The largest bird element — tall and imposing. Hasui's and Hiroshige's favorite kacho-e subject.

- **ViewBox**: 116×210 (tall, elegant)
- **ColorZones** (4): `body` (slot 2 — gray-blue plumage), `wing` (slot 1 — folded wing), `accent` (slot 3 — red crown patch), `detail` (slot 0 — beak, legs, eye, plumes)
- **Suggested Layer**: foreground
- **Tags**: fauna, organic, water, intimate
- **Carve Levels**:
  - Block (10 paths): S-curved body, round head, dagger beak, folded wing, thin legs, red crown patch, occipital plumes (2), neck hackle feathers (2). All fills — readable silhouette.
  - Shape (+3 paths): eye circle, head outline stroke, S-neck contour stroke, wing edge stroke. Anatomical structure emerges.
  - Detail (+5 paths): breast feather marks, wing feather lines, beak ridge, neck hackle wisps, foot toes. Full biological texture.
- **Design Notes**: The defining features are the S-curved neck (patience), dagger beak (precision), and impossibly thin legs (elegance). The crown patch accent zone enables a pop of red in any palette. Occipital plumes trail behind the head — a sign of breeding plumage that adds visual interest. Pairs naturally with tranquil-pond, water-ripples, rain-curtain.

#### 2. Bush Warbler (鶯 — Uguisu)

A plump perching songbird with a cocked tail — the classic spring companion of plum blossoms. Small, round, full of personality. *Ume ni uguisu* (plum and warbler) is perhaps the single most iconic kacho-e pairing.

- **ViewBox**: 100×80 (small, compact)
- **ColorZones** (4): `body` (slot 2 — olive-green), `breast` (slot 4 — pale underside), `wing` (slot 1 — darker back), `detail` (slot 0 — beak, legs, eye)
- **Suggested Layer**: foreground
- **Tags**: fauna, organic, intimate, seasonal-spring
- **Carve Levels**:
  - Block (7 paths): plump body oval, round head, tiny stubby beak, pale breast, wing on back, cocked-up tail, thin legs.
  - Shape (+2 paths): eye circle, wing edge stroke.
  - Detail (+4 paths): eye ring/stripe, breast feather texture, wing feather lines, tail barb lines, head crown texture.
- **Design Notes**: The warbler is defined by roundness (plump body, round head) and the jaunty cocked-up tail. It's deliberately small — at typical placement scale it should be a fraction of a branch's length. The breast zone gives a lighter belly that contrasts with the darker back/wing. Pairs with cherry-branch, ume-blossom, bamboo-grove.

#### 3. Swallow in Flight (燕 — Tsubame)

A dynamic swept-wing bird in flight with a deeply forked tail. The only Kacho-e bird shown in motion — all others are perched or standing. Swallows signal the arrival of summer.

- **ViewBox**: 125×110 (wide wingspan)
- **ColorZones** (4): `body` (slot 0 — dark blue-black), `breast` (slot 4 — pale belly strip), `wing` (slot 0 — matches body), `accent` (slot 1 — throat mark, beak)
- **Suggested Layer**: foreground
- **Tags**: fauna, organic, intimate
- **Carve Levels**:
  - Block (8 paths): torpedo body, small round head, tiny beak, two swept scythe wings, forked tail (two prongs), narrow belly strip, throat chevron.
  - Shape (+3 paths): eye circle, two wing leading edge strokes.
  - Detail (+4 paths): primary feather lines (upper and lower), tail fork detail, breast texture.
- **Design Notes**: The swallow breaks the kacho-e convention of stillness — it's pure motion captured in silhouette. The deeply forked tail and swept wings create a dramatic shape that works at any rotation. The body and wing share palette slot 0 (dark), creating a unified dark mass broken only by the pale breast strip and accent throat. Place freely — no perch needed. Pairs with wisteria (seasonal), morning-glory (summer vine).

#### 4. Kingfisher (翡翠 — Kawasemi)

A compact perching hunter with a forward lean and massive dagger beak. The beak-to-body ratio is extreme — it's the defining visual feature. Hiroshige's kingfisher-and-iris is one of the most beloved kacho-e compositions.

- **ViewBox**: 120×100
- **ColorZones** (4): `body` (slot 1 — brilliant blue-green), `breast` (slot 3 — orange), `wing` (slot 1 — matches body), `detail` (slot 0 — beak, legs, eye)
- **Suggested Layer**: foreground
- **Tags**: fauna, organic, water, intimate
- **Carve Levels**:
  - Block (7 paths): slim forward-leaning body, smaller oval head, massive dagger beak, orange breast, wing on back, long flat tail, legs.
  - Shape (+4 paths): eye circle, head outline stroke, beak ridge, wing edge stroke.
  - Detail (+5 paths): head feather scales, wing covert feathers, breast feather texture, tail feather lines, foot toes.
- **Design Notes**: The beak is absurdly long — that's correct, that's the kingfisher. The forward lean conveys hunting readiness. The body and wing share slot 1 (brilliant blue) while the breast zone is distinctly orange (slot 3), creating the dramatic two-tone that makes kingfishers so striking. The long flat tail extends well past the body. Pairs with iris-cluster, flowing-stream, water-ripples.

#### 5. Egret (白鷺 — Shirasagi)

An elegant white wader with trailing breeding plumes (aigrettes). Similar in structure to the heron but slimmer, taller, and pure white with a yellow beak. The trailing plumes are the signature feature — they cascade from the back like decorative streamers.

- **ViewBox**: 132×230 (very tall)
- **ColorZones** (4): `body` (slot 4 — white/cream), `plume` (slot 3 — delicate trailing feathers), `accent` (slot 1 — yellow beak), `detail` (slot 0 — legs, eye)
- **Suggested Layer**: foreground
- **Tags**: fauna, organic, water, intimate
- **Carve Levels**:
  - Block (8 paths): S-curved body (like heron), head, long needle beak (accent color), 3 trailing aigrette plumes, folded wing, long legs.
  - Shape (+4 paths): eye circle, head outline stroke, S-neck contour, plume trailing edges.
  - Detail (+4 paths): breast feather marks, plume wisps, beak ridge, foot toes.
- **Design Notes**: The egret is distinguished from the heron by (1) the trailing plumes, which are a separate `plume` zone enabling independent coloring, (2) the yellow/accent beak (heron's beak is in the detail zone), and (3) a generally more slender and elegant posture. The three plumes cascade from the lower back — they're the visual reward of the detail carve level. Pairs with tranquil-pond, water-ripples, snow-fall (winter egret).

---

### Flowers & Water Plants (6) — *Seasonal Partners and Solo Subjects*

Flowers serve dual roles in kacho-e: as partners to birds (seasonal pairings) and as solo subjects in their own right (Hokusai's *Small Flowers* approach). Each flower has rich zone structure enabling palette-driven color exploration.

#### 6. Peony (牡丹 — Botan)

A lush layered bloom on a long stem — the "king of flowers" in East Asian art. The most complex flower element, with densely layered petals radiating from a central boss.

- **ViewBox**: 140×200 (tall with long stem)
- **ColorZones** (4): `petal` (slot 1), `center` (slot 3 — golden boss), `leaf` (slot 2), `stem` (slot 0)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, intimate
- **Carve Levels**:
  - Block (4 paths): massive outer bloom mass, center boss, two base leaves, long thin stem.
  - Shape (+4 strokes): petal ring divisions radiating from center, inner petal ring, leaf veins, stem contour.
  - Detail (+4 strokes): fine petal veins (secondary), stamen tufts in center, leaf serration marks, leaf edge nicks, stem thorns.
- **Design Notes**: The peony is defined by abundance — densely packed petals creating a full, round bloom. The radiating petal division strokes at shape level are what make it read as "many petals" rather than a solid blob. The center boss (golden) provides a bright focal point. The long stem grounds it and provides compositional line. Pairs with any bird for a luxurious composition, or stands alone as a solo botanical study.

#### 7. Lotus Pod (蓮の実 — Hasu no Mi)

A seed pod on a slim S-curved stem — the sculptural aftermath of lotus bloom. Minimalist and architectural, with visible seed holes on the flat dome top.

- **ViewBox**: 80×200 (tall, narrow)
- **ColorZones** (3): `pod` (slot 2 — green/brown dome), `seed` (slot 3 — dark seed holes), `stem` (slot 0)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, water, intimate, minimal
- **Carve Levels**:
  - Block (3 paths): broad dome pod, 5 seed hole circles on flat top, slim S-curved stem.
  - Shape (+3 strokes): pod dome outline, pod rim line, stem contour.
  - Detail (+3 strokes): seed dimple rings (larger circles around seed holes), pod surface vertical ribs, stem fiber line.
- **Design Notes**: The lotus pod is an elegant minimalist subject — its flat-topped dome with visible seed holes is immediately recognizable. The S-curved stem provides graceful line. Only 3 zones (no leaf) keeps it clean. Works beautifully as a supporting element alongside lotus-cluster or as a solitary wabi-sabi subject.

#### 8. Lotus Cluster (蓮 — Hasu)

A complex multi-part composition: 2 lotus blossoms with wide-base, sharp-tipped petals on short stems, plus 3 lily pads at different scales. The most complex element in the pack.

- **ViewBox**: 170×150 (wide)
- **ColorZones** (4): `petal` (slot 1 — pink/white bloom), `center` (slot 3 — golden boss), `pad` (slot 2 — green lily pads), `stem` (slot 0)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, water, intimate
- **Carve Levels**:
  - Block (24+ paths): large bloom (12 petal fills in back/middle rows + center boss), small bloom (5 petals + center), 3 lily pads at different scales, 2 short stems.
  - Shape (+block fills + 7 strokes): petal edge strokes, pad V-notch strokes, pad outlines.
  - Detail (+shape content + 7 strokes): petal center veins, center stamens, small bloom petal veins, large pad radial veins, medium pad veins, small pad veins, stem fiber.
- **Design Notes**: This is a composition-in-an-element — the two blooms and three pads create a complete lotus pond vignette. The individual lotus petals are wide at the base and taper to sharp tips, packed tightly with slight overlap (not the open bowl-shape of a water lily). The V-notch on each pad is a key identifying feature. Scale variety (large pad, medium pad, small pad) creates depth. Pairs with heron, egret, kingfisher, frog, dragonfly.

#### 9. Morning Glory (朝顔 — Asagao)

A trumpet flower on a curling vine with a lobed leaf. Morning glory (asagao) is one of Hokusai's great subjects — the trumpet shape and twining vine create beautiful compositional line.

- **ViewBox**: 130×160
- **ColorZones** (4): `petal` (slot 1 — deep blue/purple trumpet), `center` (slot 4 — white/pale star), `vine` (slot 2 — green curling tendrils), `leaf` (slot 3 — lobed leaf)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, intimate
- **Carve Levels**:
  - Block (5 paths): large trumpet bloom (round, scalloped edge), center star, S-curving vine with tendril, one lobed leaf, small bud.
  - Shape (+3 strokes): petal vein lines radiating from center (6 spokes), leaf outline, vine tendril curls.
  - Detail (+4 strokes): fine secondary petal veins, leaf internal veins, vine fiber, center stamen tufts.
- **Design Notes**: The morning glory's defining features are the trumpet shape (round bloom opening to a star-shaped center), the twining vine (which spirals and curls — not a straight stem), and the deeply lobed leaf. The 6 radiating petal veins at shape level create the characteristic "folded umbrella" pattern visible in the bloom. The vine provides compositional S-curves. Pairs with swallow (summer seasonal), bamboo.

#### 10. Wisteria (藤 — Fuji)

Hanging flower clusters on thin S-curved tendrils drooping from a thick gnarled vine. The most vertically expansive flora element — designed to hang from the top of a composition.

- **ViewBox**: 150×220 (tall, cascading)
- **ColorZones** (3): `flower` (slot 1 — purple/lavender clusters), `vine` (slot 3 — brown gnarled branches), `leaf` (slot 2 — green scattered leaves)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, intimate, seasonal-spring
- **Carve Levels**:
  - Block (15+ paths): thick horizontal main vine, 3 thin S-curved hanging tendrils (left/center/right), 6 flower clusters along tendrils (each a group of small teardrop shapes), 4 leaf pairs along top vine, 5 scattered leaves among flowers.
  - Shape (+block fills + 5 strokes): vine bark contour, 3 tendril S-curve strokes, leaf vein strokes.
  - Detail (+shape content + 6 strokes): vine bark knots, flower petal veins (per cluster), leaf veins among flowers, leaf edge serrations, tendril tip curls.
- **Design Notes**: Wisteria is designed to cascade downward — place it at the top of a composition and let the tendrils drape. The thick gnarled vine at top provides a visual anchor; the thin S-curved tendrils create rhythm; the flower clusters provide color mass. Only 3 zones (no separate stem — vine covers both structural and connecting elements). The cascading form pairs with tall scroll paper format. Seasonal partner to swallow (early summer).

#### 11. Lily Pad (蓮の葉 — Hasu no Ha)

A single floating pad with V-notch and radial veins. The simplest element in the pack — a minimal accent for water compositions.

- **ViewBox**: 100×80
- **ColorZones** (2): `pad` (slot 2 — green surface), `detail` (slot 0 — vein marks)
- **Suggested Layer**: foreground
- **Tags**: flora, organic, water, intimate, minimal
- **Carve Levels**:
  - Block (1 path): broad elliptical pad, slightly angled.
  - Shape (+3 strokes): pad outline, V-notch opening, 4 main radial veins from center.
  - Detail (+3 strokes): full radial veins (6 additional), fine texture veins between mains, center dimple.
- **Design Notes**: Only 2 zones — lily pads are monochromatic. The V-notch is the identifying feature that distinguishes it from a simple oval. The radial vein pattern at detail level is what makes it read as "leaf" rather than "blob." Use multiples at different scales and rotations to create a pond surface. Companion to lotus-cluster, lotus-pod, heron, kingfisher, frog, dragonfly.

---

## Palettes (2) — Seasonal Character

### 1. Haru 春 — Spring

Soft pastels evoking cherry blossom season — pink blooms, fresh green, gentle blue.

| Slot | Role | Hex | Character |
|------|------|-----|-----------|
| 0 | Detail/stem | `#FFB3D9` | Warm pink |
| 1 | Petal/wing | `#A8D5A8` | Soft green |
| 2 | Body/pad | `#B3D9FF` | Gentle blue |
| 3 | Center/accent | `#FFB3C6` | Light rose |
| 4 | Breast/highlight | `#D4E8A8` | Yellow-green |

Haru is deliberately pastel — spring prints should feel light and delicate. The colors are desaturated enough to work well on Hosho (bright white) and Kozo (warm cream) papers. On print, the ink absorption variation will give these pastels the slight unevenness that makes them feel hand-printed rather than digital.

**Best pairings**: Bush warbler + cherry-branch, peony solo, lotus cluster with dragonfly.

### 2. Natsu 夏 — Summer

Deep saturated tones — midnight blue, warm pink, forest green, bright water blue. Summer prints carry more weight and contrast than spring.

| Slot | Role | Hex | Character |
|------|------|-----|-----------|
| 0 | Detail/body | `#1A365D` | Deep indigo |
| 1 | Petal/wing | `#E88BA8` | Warm pink |
| 2 | Leaf/pad | `#2D6A4F` | Deep forest green |
| 3 | Center/vine | `#4A90E2` | Bright water blue |
| 4 | Breast/highlight | `#D4A574` | Warm sand |

Natsu provides dramatic contrast — deep indigo bodies against bright pink petals, forest green pads against warm highlights. Works particularly well on Kozo and Torinoko papers where the warm base adds richness. Heavy ink load with Natsu creates prints that feel saturated and bold.

**Best pairings**: Kingfisher + iris, morning glory solo, swallow + wisteria.

### Palette Expansion Opportunity

Future palettes could cover the remaining seasons:
- **Aki 秋** (Autumn) — exists in Core, but a kacho-e-specific version emphasizing warm ochres, deep reds, and dark greens could pair with maple and chrysanthemum compositions.
- **Fuyu 冬** (Winter) — muted grays, pale blue, bare brown. For winter bird studies (egret in snow, heron by frozen pond).

---

## Seasonal Pairing Guide

Traditional kacho-e pairings carry cultural meaning. These pairings are not enforced by the system but suggested through journeys and prompts:

| Season | Bird | Flower/Plant | Cultural Name |
|--------|------|-------------|---------------|
| Early Spring | Bush Warbler | Plum (ume-blossom) | 梅に鶯 *ume ni uguisu* |
| Spring | Bush Warbler | Cherry (cherry-branch) | 桜に鶯 *sakura ni uguisu* |
| Late Spring | Swallow | Wisteria | 藤に燕 *fuji ni tsubame* |
| Early Summer | Kingfisher | Iris (iris-cluster) | 菖蒲に翡翠 *shobu ni kawasemi* |
| Summer | Heron | Lotus (lotus-cluster) | 蓮に鷺 *hasu ni sagi* |
| Late Summer | Swallow | Morning Glory | 朝顔に燕 *asagao ni tsubame* |
| Autumn | Egret | Maple (maple-branch) | 紅葉に白鷺 *momiji ni shirasagi* |
| Winter | Heron | Bare Branch (bare-branch) | 枯枝に鷺 *kareeda ni sagi* |

These pairings demonstrate that with 5 birds, 6 flora elements, and Core/Extended companions, the pack supports compositions across all four seasons.

---

## Atmosphere Considerations

Kacho-e compositions benefit from *less* atmosphere than landscape compositions. The subject itself carries the scene. Recommended atmosphere settings:

| Mood | Sky | Ground | Horizon | Mist | When |
|------|-----|--------|---------|------|------|
| Open Study | None | None | — | 0 | Pure subject against paper — Hokusai-style botanical study |
| Pond Scene | None | Water | 0.75 | 0 | Water surface for waders and lotus. High horizon = more water. |
| Rain Mood | Overcast | None | 0.80 | 0 | Subtle gray sky for "heron in rain" compositions |
| Dawn Garden | Dawn | Grass | 0.70 | 1 | Soft morning light, one mist band for depth |
| Night Garden | Night | None | — | 0 | Dark background for moon + wisteria compositions |

**Key insight**: Many kacho-e compositions work best with **no atmosphere at all** — the subject on blank paper is a complete print. This is unlike landscape compositions where atmosphere is essential.

---

## Creative Journeys (2)

### 1. "Your First Kacho-e" (hajimete-kacho)

Guided composition building a classic bird-and-flower study:
1. Place a heron (foreground, generous scale)
2. Add tranquil-pond as water context (background)
3. Switch to Natsu palette
4. Carve the heron to detail level (reveal feather texture)
5. Apply bokashi to the body zone (gradient from wing to belly)
6. Pull a print

### 2. "Seasonal Pairing" (kisetsu no kumi)

A more nuanced journey exploring seasonal meaning:
1. Place a bush warbler (upper center)
2. Add cherry-branch as perch (midground, angled)
3. Switch to Haru palette
4. Set Dawn atmosphere (subtle morning light)
5. Carve both elements to shape level
6. Explore zone color overrides — try different petal/body combinations
7. Pull a print

---

## Creative Prompts (10)

```javascript
prompts: [
  { id: 'ke-heron-rain', text: 'A heron in the rain', type: 'scene' },
  { id: 'ke-moonlit-wisteria', text: 'Wisteria by moonlight', type: 'scene' },
  { id: 'ke-kingfisher-dive', text: 'Kingfisher above the water', type: 'scene' },
  { id: 'ke-morning-dew', text: 'Morning glory with dew drops', type: 'scene' },
  { id: 'ke-swallows-spring', text: 'Swallows returning in spring', type: 'scene' },
  { id: 'ke-peony-wind', text: 'Peonies swaying in wind', type: 'scene' },
  { id: 'ke-one-color', text: 'Use only one color for everything', type: 'constraint' },
  { id: 'ke-no-ground', text: 'A bird with no ground beneath', type: 'constraint' },
  { id: 'ke-night-garden', text: 'Transform a garden scene to night', type: 'transformation' },
  { id: 'ke-close-intimate', text: 'The closest possible view', type: 'emotion' },
],
```

---

## Pack Manifest

```javascript
registerPack({
  id: 'kacho-e',
  name: 'Kacho-e Collection',
  nameJa: '花鳥画',
  icon: '花',
  description: 'Birds and flowers in the intimate kacho-e tradition',
  affinity: ['fauna', 'flora', 'water', 'organic', 'intimate'],
  elementIds: [
    'heron-standing', 'bush-warbler', 'swallow-flight', 'kingfisher', 'egret',
    'peony', 'lotus-pod', 'lotus-cluster', 'lily-pad', 'morning-glory', 'wisteria',
  ],
  paletteIds: ['haru', 'natsu'],
  presetIds: null,
  journeys: [...],
  prompts: [...],
});
```

---

## Gallery Presets

Gallery presets are not yet defined for Kacho-e (`MOKURI_KACHOE_PRESETS = []`). Recommended presets to curate:

### 1. "Heron and Lotus" — *First-Journey Preset*

Classic wading bird composition.

- **Paper**: Portrait (360×540) on Kozo
- **Palette**: natsu
- **Atmosphere**: None sky, Water ground, horizon 0.75, 0 mist
- **Elements**: heron-standing (right of center, large), lotus-cluster (lower left, at water level), lily-pad (right foreground, small), water-ripples (beneath heron), hanko

### 2. "Spring Warbler" — *Second-Journey Preset*

The essential seasonal pairing.

- **Paper**: Landscape (540×360) on Hosho
- **Palette**: haru
- **Atmosphere**: Dawn sky, Grass ground, horizon 0.70, 1 mist
- **Elements**: bush-warbler (center-right, on branch), cherry-branch (diagonal from lower-left to upper-right), sakura-blossom (scattered, small), hanko

### 3. "Kingfisher and Iris"

Hiroshige's most famous composition, reinterpreted.

- **Paper**: Tall Scroll (360×540) on Kozo
- **Palette**: natsu
- **Atmosphere**: None sky, None ground
- **Elements**: kingfisher (upper center, perched), iris-cluster (lower, rising from bottom), water-ripples (bottom third, subtle), hanko

### 4. "Wisteria Cascade"

A dramatic vertical composition with hanging flower clusters.

- **Paper**: Tall Scroll (360×540) on Torinoko
- **Palette**: haru
- **Atmosphere**: Night sky, None ground
- **Elements**: wisteria (hanging from top third), full-moon (upper right, small), swallow-flight (mid-left, small, in motion), hanko

---

## Scale Relationships

Kacho-e elements are designed for intimate, close-framed compositions. Relative scales:

| Element | Relative Scale | Typical Placement |
|---------|---------------|-------------------|
| heron-standing | 1.2× | Center or right, dominant |
| egret | 1.3× | Center, very dominant (tallest element) |
| bush-warbler | 0.4× | On a branch, small but present |
| swallow-flight | 0.6× | Mid-air, any position |
| kingfisher | 0.5× | Perched, medium-small |
| peony | 1.0× (reference) | Center or lower, generous |
| lotus-cluster | 1.2× | Lower half, water surface |
| wisteria | 1.3× | Upper half, cascading down |
| morning-glory | 0.8× | Center, vine provides line |
| lotus-pod | 0.7× | Accent, beside lotus or solo |
| lily-pad | 0.3× | Small, water surface accent |

**Key principle**: In kacho-e, one subject dominates. A heron should be large enough that its feather texture is visible. A warbler can be small because its character is in its round silhouette and cocked tail. Flowers fill generously — a peony should feel abundant.

---

## Comparison with Other Packs

| | Core | **Kacho-e** | Moribana | Tsukiyo | Machi |
|---|---|---|---|---|---|
| **Mode** | Compose a scene | **Compose a study** | Compose an arrangement | Compose a mood | Compose a place |
| **Subject** | Nature panorama | **Bird & flower close-ups** | Still life | Night landscape | Built environment |
| **Key innovation** | Foundation | **Detailed fauna/flora, seasonal pairing** | Vessels, negative space | Light sources, darkness | Architecture, materials |
| **Atmosphere** | Day landscapes | **Minimal or none** | Interior/studio | Night + moon | Urban weather, dusk |
| **Figure use** | Optional staffage | **None — nature subjects ARE the figures** | None | Rare, small | Essential for scale |
| **Carve emphasis** | Landscape texture | **Biological detail** | Minimal, refined | Silhouette, glow | Material texture |
| **Companion leverage** | — | **Core branches, water, weather** | Core branches + kacho-e flora | Core structures | Core structures + figures |
| **Unique vocabulary** | Mountains, water | **Birds, detailed flowers, lily pads** | Vessels, kenzan | Lanterns, owls, foxes | Buildings, walls, gates |
| **Palette character** | Earthy/neutral | **Seasonal: pastel spring, deep summer** | Ceramic glazes | Night tones | Architectural materials |

---

## Tag Strategy

No new tags needed. The existing vocabulary covers all Kacho-e elements:

- `fauna` — heron-standing, bush-warbler, swallow-flight, kingfisher, egret
- `flora` — peony, lotus-pod, lotus-cluster, lily-pad, morning-glory, wisteria
- `organic` — all 11 elements
- `water` — heron-standing, kingfisher, egret, lotus-pod, lotus-cluster, lily-pad
- `intimate` — all 11 elements
- `minimal` — lotus-pod, lily-pad
- `seasonal-spring` — bush-warbler, wisteria

### Pack Affinity Tags
`affinity: ['fauna', 'flora', 'water', 'organic', 'intimate']`

This surfaces:
- All Core fauna (koi, dragonfly, turtle, crane variants, rabbit, frog, butterfly, sparrow)
- All Core flora (cherry, pine, willow, plus extended flora)
- Water elements (pond, stream, waves, ripples)
- Organic elements (natural forms, branches)

---

## Implementation Status

Kacho-e is Mokuri's first completed expansion pack. All code is shipped:

- **Elements**: `assets/kacho-elements.js` — 11 elements with full 3-level carve definitions
- **Pack manifest**: `assets/kacho-pack.js` — palettes, journeys, prompts, affinity tags
- **Runtime integration**: Script tags in `index.html`, elements merged into `MOKURI_ELEMENTS`, palettes into `PALETTES`
- **Gallery presets**: Not yet curated (`MOKURI_KACHOE_PRESETS = []`)

### Known Quality Gaps

As noted in the Vision section, the hand-crafted SVG paths are functional but lack the design quality of reference ukiyo-e prints. Priority improvements:

1. **Bird anatomy** — proportions, posture, and attitude need refinement. The current paths define correct zones and carve structure but lack the confidence of line that makes a Hiroshige bird feel alive.
2. **Flower complexity** — peony and lotus-cluster are the most complex elements and would benefit most from higher-quality source art. The petal layering is structurally correct but geometrically simple.
3. **Gallery presets** — curated compositions would demonstrate the pack's potential and serve as starting points for new users.

The Element Forge's color segmentation pipeline (`docs/forge-color-segmentation-plan.md`) and AI image generation spec (`dev/Vector-Friendly Woodblock Illustration.md`) provide a path to higher-quality element versions that maintain the same zone structure.

---

## Audio Considerations

Kacho-e compositions could trigger nature-specific ambient sounds:
- Bird call synthesis when placing a bird element (species-specific chirps via filtered sine waves)
- Water drip/splash when placing water elements near birds
- Wind through leaves when placing wisteria or morning glory

These are polish items. The existing ambient engine already provides appropriate nature atmosphere.

---

## Future Directions

### Variant Poses
Each bird currently has one pose. Future versions could add:
- Heron — fishing strike (neck extended, beak in water)
- Kingfisher — diving (compact, beak-first descent)
- Bush Warbler — singing (head tilted up, beak open)
- Egret — preening (neck curved back, beak in plumes)
- Swallow — perched (tail folded, resting on wire/branch)

### Additional Subjects
The kacho-e tradition encompasses more than the current 5 birds:
- **Owl** (fukurō) — planned for Tsukiyo pack, but also a classic kacho-e subject
- **Plover** (chidori) — small shorebird, often depicted in groups
- **Mandarin Duck** (oshidori) — symbol of conjugal love, brightly colored
- **Pheasant** (kiji) — dramatic tail, mountain bird
- **Sparrow** (suzume) — already in Core fauna, could get a kacho-e-quality variant

### Additional Flora
- **Camellia** (tsubaki) — planned for Moribana, but equally valid as kacho-e subject
- **Plum Branch** (ume) — the essential warbler perch. Ume-blossom exists but a full branch would be stronger.
- **Bamboo** (take) — close-up bamboo stalks and leaves as kacho-e framing element
