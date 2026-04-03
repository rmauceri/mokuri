# Machi Style Pack — Design Document

## 街 — "The Town"

### Vision

Machi shifts Mokuri's creative mode from **"compose a landscape"** to **"compose a place."** Inspired by the *meisho-e* (名所絵, famous-place pictures) tradition — from Hiroshige's *One Hundred Famous Views of Edo* to Kawase Hasui's architectural studies and Yoshida Hiroshi's temple and street scenes — this pack introduces built environments where architecture tells a story, human activity gives scale, and the relationship between structure and sky creates drama.

Where Core Mokuri celebrates nature's breadth and Tsukiyo celebrates its transformation by night, Machi celebrates the **human imprint on landscape** — the way a roofline breaks the sky, a narrow lane draws the eye, and weathered wood and tile accumulate the patina of time. These are not modern cityscapes; they are the wooden towns, stone approaches, and tiled rooftops of Japan's artistic imagination.

### Key Characteristics

- **Architecture as subject** — buildings are not background scenery but the compositional focus
- **Perspective through drawing** — the same baked-in-perspective approach as Tsukiyo's landscape elements, applied to streets, walls, and rooflines
- **Material texture through carving** — tile patterns, wood grain, plaster walls, stone joints emerge at shape and detail carve levels
- **Human scale** — figures (existing and new) are essential companions that give architecture meaning and proportion
- **Weather as character** — rain on tile roofs, snow on eaves, dusk light on plastered walls. Atmosphere presets and Core weather elements transform the same street scene completely
- **Asymmetry and cropping** — following Hiroshige's radical compositions, elements are designed for dramatic placement: a roof edge cutting across the top third, a wall receding into depth, a gate framing a distant view

### Artistic Tradition

**Hiroshige — *One Hundred Famous Views of Edo* (1856–58)**
The greatest source for Machi's sensibility. Hiroshige depicts Edo not as an urban grid but as a collection of distinctive *places* — each defined by a specific architectural or landscape feature:
- **Suruga-chō** (#8) — A broad commercial street receding in perspective, with shop facades on both sides and Mt. Fuji in the distance. The architecture creates a perspective corridor. → Inspires our receding-street element.
- **Kinryūzan Temple at Asakusa** (#99) — The massive Kaminarimon gate fills the foreground, snow-covered roofs beyond, tiny figures below. → Inspires our mon (gate) element and the scale-contrast principle.
- **Nihonbashi** (#1) — The famous bridge as architectural anchor with castle and Fuji beyond. → Validates existing bridge element + new architectural elements.
- **Bikuni Bridge in Snow** (#114) — Snow on wooden architecture, warm windows glowing, figures with umbrellas. → The essential Machi atmosphere: weather + architecture + human presence.
- **Atagoshita and Yabu Lane** (#112) — A dramatic diagonal composition with a daimyō procession seen through tall wooden fences, tile-roofed gatehouses cutting the frame. → Inspires the cropped, framinging use of architectural elements.

**Kawase Hasui (1883–1957)**
Hasui's architectural studies are perhaps the single strongest reference for Machi element design:
- **Zōjōji Temple in Snow** (1922) — Red temple gate against deep snow, single figure, stark contrast. Proves that one building + one figure + weather = a complete composition.
- **Rain at Maekawa** (1932) — Rain falling on thatched roofs, each building a distinct silhouette. Material texture (thatch vs tile vs plaster) is readable even in flat color.
- **Spring in Daigoji Temple** (1936) — Cherry blossoms framing ancient pagoda — the intersection of nature and architecture.
- **Evening at Ushigome** (1930) — Street at dusk, warm windows, moat reflections. The template for Machi's "street at dusk" atmosphere preset.

**Yoshida Hiroshi (1876–1950)**
Traveled widely and brought fresh perspective to Japanese architectural subjects:
- **Sarusawa Pond** — The five-story pagoda reflected in still water, framed by willows. Architecture as contemplative subject, not utilitarian backdrop.
- **Jōshūetsu Temple Gate** — Massive gate in deep shadow with bright sky beyond. The drama of architectural mass and light.

### What Makes Great Architectural Prints (Design Principles for Machi)

1. **Buildings have character, not just shape** — A farmhouse is not a rectangle with a triangle on top. The thatch sags, the posts lean slightly, the eaves extend. Each building should have personality in its silhouette alone.
2. **Material is conveyed through carving** — Tile patterns, wood plank lines, plaster texture, stone joints. These emerge at shape and detail carve levels. Block level reads as mass; detail level reads as material.
3. **Scale contrast creates place** — A massive gate with tiny figures below. A distant castle barely visible behind nearby rooftops. Machi elements need to work across a wide range of scales.
4. **Perspective is compositional, not technical** — Not geometric perspective drawing. Hiroshige's perspective is atmospheric and emotional — things recede, narrow, simplify. The same approach as Tsukiyo's perspective elements.
5. **Weather transforms meaning** — The same tea house in sun, rain, snow, and dusk is four different prints. Machi elements should be designed to work beautifully with all atmosphere combinations.
6. **Negative space between buildings matters** — The slice of sky between rooflines, the gap in a street view, the open courtyard. Space is as composed as structure.

---

## Existing Mokuri Elements — Crossover Companions

Machi benefits enormously from Core and Tsukiyo elements. Architecture needs context — figures give scale, nature softens edges, weather creates mood.

### High-Affinity Companions

| Element | Source | Why It Works for Machi |
|---------|--------|------------------------|
| **pagoda** | scene-elements.js | The quintessential Japanese architectural landmark. Already exists — Machi provides the streetscape context around it. |
| **temple-roof** | scene-elements.js | Broad tiled roof. Works as a background building in street scenes. |
| **tea-house** | scene-elements.js | Small-scale architecture. Companion to Machi's larger structures. |
| **farmhouse** | scene-elements.js | Rural architecture counterpoint to Machi's town structures. |
| **torii-gate** | elements.js | Shrine entrance. Natural partner for temple/shrine compositions. |
| **wooden-bridge** | scene-elements.js | Connects architectural zones across water. Classic meisho subject. |
| **stone-path** | scene-elements.js | Ground plane linking buildings. Foreground anchor. |
| **bamboo-fence** | scene-elements.js | Boundary element between architectural spaces. |
| **distant-village** | scene-elements.js | Depth element — rooftops in the distance behind foreground architecture. |
| **traveler** | figures-elements.js | Scale figure on a town road. Essential. |
| **umbrella-figure** | figures-elements.js | Rain + architecture = classic print subject. |
| **two-travelers** | figures-elements.js | Group scale figures for busier street scenes. |
| **rain-curtain** | scene-elements.js | Weather over rooftops. Transforms any building scene. |
| **snow-fall** | scene-elements.js | Snow accumulating on eaves and roofs. |
| **pine-tree** | elements.js | Trees soften and frame architecture. |
| **cherry-branch** | elements.js | Spring blossoms against temple walls — Hasui's specialty. |
| **paper-lantern** | extended-elements.js | Street lighting, festival atmosphere. |

### Moderate-Affinity Companions

| Element | Source | How It Supports Machi |
|---------|--------|------------------------|
| **cloud-bank** | elements.js | Sky drama behind rooflines. |
| **maple-branch** | scene-elements.js | Autumn color against gray architecture. |
| **full-moon** | elements.js | Moon behind castle or temple silhouette. |
| **fishing-boat** | extended-elements.js | Harbor/waterfront compositions. |
| **water-ripples** | scene-elements.js | Moat or canal reflections. |
| **bare-branch** | extended-elements.js | Winter architectural compositions. |
| **seated-figure** | figures-elements.js | Figure on a bench or temple step. |

### Design Implication

With 17+ companion elements, Machi's own 10–12 new elements create a vocabulary of ~27+ without redundancy. The pack provides architecture that doesn't exist anywhere in Core; companions provide the nature, weather, and human elements that give architecture life.

---

## New Elements (12)

### Quality Bar — Inspired by Hasui and Hiroshige

Machi elements must achieve what the current structural elements don't: **architectural character**. The existing pagoda, tea-house, and farmhouse are serviceable silhouettes but lack the material texture, proportional elegance, and design personality of Hasui's buildings. Machi elements should feel like they were studied from real structures, then simplified with a printmaker's eye.

- **Silhouettes must convey building type** — Castle, machiya, shrine gate, wall, and market stall should each be unmistakable at block level. Architecture is about proportion and profile.
- **Material emerges through carving** — Tile grid patterns, wood plank lines, lattice windows, stone coursing. These are the detail-level features that make a building feel real.
- **Zones map to materials, not parts** — A building's zones should be its *materials*: roof tile, plastered wall, dark timber frame, paper screen. This enables palette-driven material exploration (dark tile + white plaster in Edo palette, warm timber + cream plaster in Hiroshige).
- **Weathering and age** — Slight irregularity in rooflines, sagging eaves, moss on stone. The organic hand-drawn quality that distinguishes mokuhanga from technical architectural drawing.

### Major Structures (3) — *Machi's Compositional Anchors*

These are large, dominant elements that anchor or background a composition. They're the "mountain-distant" equivalent for architecture.

#### 1. Tenshu (天守) — Castle Keep

A multi-tiered Japanese castle tower. Not a full castle complex — just the iconic keep with its stacked roofs, white walls, and stone base. The most recognizable silhouette in Japanese architecture.

- **ViewBox**: ~160×220 (tall, imposing)
- **ColorZones** (4): `wall` (white/cream plastered walls), `roof` (dark tile — stacked tiers), `stone` (massive stone base/foundation), `detail` (window lattice, ornamental features)
- **Suggested Layer**: background
- **Tags**: `structural`, `landscape`
- **Carve Levels**:
  - Block: tiered silhouette fill — stone base, wall sections, roof tiers. Readable as "castle" at a glance.
  - Shape: + wall division strokes, roof edge details, stone coursing pattern fills, shachihoko (dolphin ornaments) on top roof
  - Detail: + tile grid pattern strokes, window lattice, plaster texture marks, stone joint strokes, decorative gable ends
- **Design Notes**: 3–4 roof tiers stacked with diminishing width. The stone base should be ~30% of height — massive, sloped, imposing. White walls contrast with dark roofs. This is a *background* element — designed to look good at 40–60% scale, receding behind closer buildings. Himeji and Matsumoto castles are the primary references.

#### 2. Machiya (町家) — Townhouse Row

A row of 2–3 traditional wooden townhouses with street-facing facades. Lattice windows (*kōshi*), sliding doors, noren curtains, and tiled or low-shingled roofs. This is the signature "Machi street" element.

- **ViewBox**: ~280×140 (wide, street-facing)
- **ColorZones** (4): `timber` (dark wood frame and lattice), `wall` (plastered or board infill), `roof` (tile or shingle), `accent` (noren curtains, shop signs, door panels)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`
- **Carve Levels**:
  - Block: row silhouette — continuous roofline with slight height variation between houses, solid wall plane
  - Shape: + individual house divisions, lattice window fills, door openings, roof edge strokes, post divisions
  - Detail: + lattice grid pattern strokes, roof tile lines, noren curtain drape strokes, wood plank marks, small sign details
- **Design Notes**: The houses should have slightly different heights and roof angles to break the roofline — Hiroshige never draws a perfectly even row. Lattice windows (*kōshi-mado*) are the defining visual feature — a grid of thin horizontal and vertical slats. The noren curtain zone allows a pop of color (dyed fabric) against neutral wood and plaster. Consider a slight perspective recession (nearer house larger, farther one smaller) baked into the drawing.

#### 3. Mon (門) — Temple/Shrine Gate

A large freestanding gate — *sanmon* (three-gate) or *rōmon* (tower gate) style. Not a torii (which is already in Core) — this is a massive wooden gate with heavy posts, a tiled hip-and-gable roof, and deep shadow beneath. Hasui's *Zōjōji Temple in Snow* reference.

- **ViewBox**: ~220×180 (wide, imposing)
- **ColorZones** (4): `timber` (massive structural posts and beams — deep brown/red), `roof` (heavy tiled roof), `shadow` (dark recessed area beneath the roof), `detail` (bracket sets, metal fittings, lanterns)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `landscape`
- **Carve Levels**:
  - Block: gate silhouette — wide hip-gable roof over massive posts with deep shadow void between
  - Shape: + post divisions, roof ridge detail, bracket set fills, transom panel fill
  - Detail: + tile grid pattern, wood grain strokes on posts, metal fitting circles, bracket arm detail, stone threshold marks
- **Design Notes**: The key to this element is the **void** — the dark shadow space beneath the gate through which the viewer glimpses what's beyond (sky, distant pagoda, path). This shadow zone is compositionally powerful. The gate should feel *massive* — posts at least as wide as a figure. Hiroshige's Kaminarimon gate in snow (#99 of 100 Views) is the ideal reference.

### Street-Level Elements (4) — *Machi's Ground Plane*

These elements create the built environment at human scale — the things you walk past, the surfaces beneath your feet.

#### 4. Ishigaki (石垣) — Stone Wall

A section of castle or temple stone wall with fitted or coursed stonework. Can be placed as a ground-level boundary, a retaining wall, or a castle foundation.

- **ViewBox**: ~240×100 (wide, low)
- **ColorZones** (3): `stone` (main stone face), `moss` (green patches on surface and joints), `joint` (dark mortar/shadow lines between stones)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`, `minimal`
- **Carve Levels**:
  - Block: wall silhouette — gently curving top edge (not ruler-straight), solid mass
  - Shape: + major stone block divisions (5–8 large irregular stones), cap stone fills
  - Detail: + stone surface texture strokes, moss cluster fills, fine joint lines between smaller stones, weathering marks
- **Design Notes**: The stones should be irregular polygons fitted together — not a brick grid. Japanese castle stone walls (*nozurazumi* or *kirikomi-hagi*) have a distinctive fitted-puzzle appearance. The top edge should have a natural gentle curve. Moss zone adds organic life to mineral structure.

#### 5. Kawara Yane (瓦屋根) — Tile Roofscape

A section of overlapping tiled rooftops seen from slightly above — 2–3 roofs at different angles creating a rhythmic pattern. Not a complete building — just the roof plane as a compositional surface. For creating depth layers of rooftops receding into distance.

- **ViewBox**: ~260×120 (wide, shallow)
- **ColorZones** (3): `tile` (main tile surface — dark gray), `ridge` (ridge caps and hip ridges — lighter), `shadow` (eave shadows and gaps between roofs)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`
- **Carve Levels**:
  - Block: overlapping roof plane silhouettes (2–3 at different angles)
  - Shape: + ridge line fills, eave bracket strokes, roof plane divisions
  - Detail: + tile row pattern strokes (the key texture — parallel curved lines down the roof slope), ridge ornament details, rain gutter strokes
- **Design Notes**: This element is about creating a *surface of roofs* — the view you get looking across a town. Hiroshige often uses rooftops as a middle-ground texture that fills the space between foreground subjects and distant backgrounds. The tile pattern at detail level is what makes this element architectural rather than abstract.

#### 6. Yatai (屋台) — Market Stall

A small roadside stall or shop front with a half-curtain, display shelf, and simple post-and-beam structure. The human-scale commercial element — ramen carts, teahouses, sweet shops.

- **ViewBox**: ~140×120
- **ColorZones** (3): `frame` (wood posts and beam), `noren` (half-curtain — colorful fabric), `shelf` (display surface and wares)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `figure`, `intimate`
- **Carve Levels**:
  - Block: stall silhouette — posts, crossbeam, angled shade, hanging noren
  - Shape: + noren pleats, shelf contents (simplified vessel/food shapes), post contour
  - Detail: + noren pattern or text strokes, wood grain, shelf item detail, hanging lantern if present
- **Design Notes**: Small and intimate — a foreground accent that places the viewer on the street. The noren (curtain) zone is the color opportunity — traditionally dyed indigo with white patterns or kanji. This element pairs naturally with seated-figure or traveler for a genre scene.

#### 7. Tōrō Michi (灯籠道) — Lantern-Lined Approach

A receding row of stone lanterns (*tōrō*) flanking a shrine or temple approach path. Baked-in perspective — larger lanterns in foreground, smaller toward the back. 3–5 lanterns receding.

- **ViewBox**: ~140×200 (tall, perspective depth)
- **ColorZones** (3): `stone` (lantern bodies), `fire` (lit windows — warm), `path` (gravel/stone path between)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`, `atmospheric`
- **Carve Levels**:
  - Block: lantern silhouettes (diminishing) + path fill
  - Shape: + lantern cap/pillar/base divisions, path border strokes, fire window fills
  - Detail: + stone texture marks (diminishing with perspective), flame detail, moss on bases, gravel texture strokes on path
- **Design Notes**: This is a perspective element like Tsukiyo's — the perspective is in the drawing, not in transforms. The foreground lantern is fully detailed; the background lantern is almost pure silhouette. The path between creates a visual corridor drawing the eye into depth. Lit fire windows connect to Tsukiyo's night scenes — this element bridges both packs beautifully.

### Architectural Details (3) — *Texture and Framing*

Smaller elements that add architectural character and framing without being complete buildings.

#### 8. Engawa (縁側) — Veranda Edge

The edge of a traditional wooden veranda (engawa) with visible floor planks, support post, and partial roof overhang. A framing element — place at the edge of a composition to create a "looking out from inside" viewpoint.

- **ViewBox**: ~200×160
- **ColorZones** (3): `timber` (floor planks and post), `shadow` (under-veranda darkness), `detail` (grain, joints, shoe/sandal shapes)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `intimate`, `minimal`
- **Carve Levels**:
  - Block: floor plane fill, post fill, roof overhang fill, shadow fill
  - Shape: + plank division strokes, post contour, roof edge, a pair of sandals (zōri) on the step
  - Detail: + wood grain texture strokes (following plank direction), sandal detail, floor nail marks, subtle moss on foundation stones
- **Design Notes**: This is a framing/foreground element inspired by Hiroshige's technique of placing the viewer *inside* looking out — through a veranda, from under an umbrella, past a curtain. The veranda gives the composition a vantage point. Place at the bottom or side of a composition, with the scene visible beyond. The pair of sandals adds human presence without a figure.

#### 9. Sudare (簾) — Hanging Bamboo Blind

A half-rolled bamboo blind (sudare) hanging from the top of the composition, partially revealing the scene beyond. Pure framing device — one of Hiroshige's signature compositional techniques.

- **ViewBox**: ~200×100 (wide, shallow — hangs from top)
- **ColorZones** (2): `blind` (bamboo slat surface), `cord` (binding cords and roll-up mechanism)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `minimal`, `intimate`
- **Carve Levels**:
  - Block: blind rectangle fill with rolled section at bottom (cylindrical)
  - Shape: + horizontal slat strokes (the key texture), binding cord verticals, roll detail
  - Detail: + individual slat gap variation, cord knot detail, frayed edge marks, subtle transparency where slats thin
- **Design Notes**: This element goes at the TOP of a composition. The scene is viewed through and beneath the blind. Hiroshige uses this in several of the 100 Views — it creates intimacy and frames the view. The slat texture at detail level should feel woven and organic. 2 zones only — bamboo is monochromatic.

#### 10. Nurigome (塗籠) — Plastered Storehouse Wall

A section of white plastered storehouse (*kura*) wall with heavy tile capping and thick timber-framed fire door. The dramatic contrast of bright white plaster against dark timber and tile.

- **ViewBox**: ~180×160
- **ColorZones** (4): `plaster` (white/cream wall surface — the dominant area), `timber` (dark exposed frame members), `tile` (cap tile along the top), `door` (heavy timber fire door with metal fittings)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`
- **Carve Levels**:
  - Block: wall rectangle with cap tile band and door silhouette
  - Shape: + timber frame divisions, tile course, door panel divisions, ventilation grille fill
  - Detail: + plaster texture (subtle, nearly smooth), tile joint strokes, door metal fitting circles, timber grain, namako-kabe (diamond plaster) pattern if present
- **Design Notes**: The *kura* storehouse is one of the most visually striking building types in Japan — thick white plaster for fireproofing creates a bright, clean surface that contrasts dramatically with weathered wood surroundings. The wall zone takes palette color beautifully (white in Edo palette, cream in Hiroshige, blue-gray in overcast). Heavy foreground element.

### Town Figures (2) — *Machi-Specific Staffage*

Core figures work for Machi, but two additional figures specific to town life add character.

#### 11. Merchant (商人) — Shop Keeper

A standing figure behind or beside a display — arms resting on a counter or gesturing to wares. The quintessential townscape figure.

- **ViewBox**: ~90×155
- **ColorZones** (3): `robe` (main garment), `obi` (sash/apron), `detail` (face, hands, headwrap)
- **Suggested Layer**: foreground
- **Tags**: `figure`, `intimate`, `structural`
- **Carve Levels**:
  - Block: standing figure silhouette with counter/display surface
  - Shape: + garment fold strokes, obi division, face oval, counter detail
  - Detail: + fabric texture, hand gesture detail, headwrap/hairstyle, displayed wares suggestion
- **Design Notes**: Slightly wider stance and more grounded posture than the traveler figure. The counter or display shelf grounds them in place — they belong *here*, unlike the traveler who is passing through. Pairs naturally with the yatai (market stall) element.

#### 12. Pilgrim (巡礼) — Temple Visitor

A figure in sedge hat (*sugegasa*) and white pilgrim robe, walking with a staff. Distinct from the traveler by the conical hat silhouette and upright posture.

- **ViewBox**: ~80×160
- **ColorZones** (3): `robe` (white/cream pilgrim garment), `hat` (wide conical sedge hat), `detail` (staff, sandals, face)
- **Suggested Layer**: foreground
- **Tags**: `figure`, `landscape`, `minimal`
- **Carve Levels**:
  - Block: figure silhouette with distinctive wide hat and staff line
  - Shape: + hat brim stroke, robe fold divisions, staff detail, sandal shapes
  - Detail: + hat weave texture, robe drape strokes, hand/face detail, prayer beads
- **Design Notes**: The conical hat is the key identifier — it creates a distinctive silhouette that reads differently from the traveler's head shape. White robe against dark temple architecture creates strong contrast. Essential for temple approach (tōrō michi) compositions.

---

## Palettes (3) — Named for Urban Associations

### 1. Edo 江戸 — Classic Townscape
The existing Edo palette works beautifully for Machi as-is. Rich browns, dark indigo, warm earth tones. Already in Core — Machi simply adopts it as the primary palette.

However, Machi should also provide two new palettes:

### 2. Kawara 瓦 — Tile and Timber
Named for ceramic roof tiles. Cool-neutral palette emphasizing the material contrast of gray tile, dark timber, and white plaster.

| Slot | Role | Hex | Munsell Approx |
|------|------|-----|----------------|
| 0 | Tile gray | `#6B6B6B` | N 5/0 |
| 1 | Dark timber | `#3A2A1A` | 5YR 2/2 |
| 2 | Warm plaster | `#E8DDD0` | 2.5Y 9/1 |
| 3 | Moss/copper patina | `#5A7A5A` | 5G 5/3 |
| 4 | Warm accent (lantern/noren) | `#C4622B` | 5YR 5/8 |

This palette makes architectural material *the subject* — cool tile against dark wood, bright plaster catching light, with just one warm accent for human touches (lanterns, curtains).

### 3. Yūgure 夕暮 — Town at Dusk
Named for evening twilight. Warm-shifted palette for golden hour on architecture — when plastered walls glow amber, shadows deepen to purple, and lit windows appear.

| Slot | Role | Hex | Munsell Approx |
|------|------|-----|----------------|
| 0 | Amber plaster | `#D4A868` | 10YR 7/6 |
| 1 | Deep shadow | `#2D2438` | 5P 2/2 |
| 2 | Warm roof | `#8A6A4A` | 7.5YR 5/4 |
| 3 | Twilight sky reflected | `#7A6A8A` | 5P 5/3 |
| 4 | Lantern warm | `#E8A040` | 7.5YR 7/10 |

Evening light unifies disparate materials into a warm glow. This palette pairs with Dusk atmosphere for the full *yūgure* experience — Hasui's "Evening at Ushigome" mood.

---

## Atmosphere Presets

Machi compositions thrive on specific atmosphere combinations. Suggested presets (pending atmosphere preset system):

| Preset | Background | Foreground | Horizon | Mist | Mood |
|--------|-----------|------------|---------|------|------|
| Clear Town | Day | Earth | 0.72 | 0 | Bright, detailed, clear architectural study |
| Dusk Street | Dusk | Earth | 0.68 | 1 | Golden hour on buildings, long shadows |
| Rain on Tile | Overcast | Earth | 0.70 | 0 | Gray sky, wet surfaces, rain-curtain companion |
| Snow on Eaves | Overcast | Snow | 0.65 | 1 | Quiet winter town, snow accumulating |
| Night Approach | Night | Earth | 0.70 | 0 | Lit lanterns, deep shadows, Tsukiyo crossover |

**Horizon note**: Machi atmospheres typically use a higher horizon (0.65–0.72) than Core landscapes (0.55–0.62). Architecture sits on the ground and rises — more ground plane, less sky. The element auto-scale and placement system should reflect this.

---

## Creative Journeys (2)

### 1. "Your First Street" (hajimete-machi)

Guided composition building a simple architectural scene:
1. Place a machiya row (midground)
2. Add a figure (foreground, for scale)
3. Switch to Kawara palette
4. Set Dusk atmosphere
5. Carve the machiya to shape level (reveal lattice windows)
6. Pull a print

### 2. "Temple Approach" (sandō)

A more contemplative journey:
1. Place tōrō michi (lantern approach, perspective)
2. Add a mon (gate) at the top/background
3. Add a pilgrim figure on the path
4. Set Night atmosphere (Tsukiyo crossover)
5. Apply bokashi to the lantern fire zones
6. Pull a print on Kakishibu paper

---

## Creative Prompts (10)

```javascript
prompts: [
  { id: 'street-rain', text: 'A quiet street in the rain', type: 'scene' },
  { id: 'gate-snow', text: 'The temple gate after snowfall', type: 'scene' },
  { id: 'market-morning', text: 'A morning market coming to life', type: 'scene' },
  { id: 'castle-distance', text: 'A castle seen over the rooftops', type: 'scene' },
  { id: 'shelter-seeking', text: 'The feeling of seeking shelter', type: 'emotion' },
  { id: 'town-memory', text: 'A place you once knew', type: 'emotion' },
  { id: 'worn-patina', text: 'The beauty of worn wood and old stone', type: 'emotion' },
  { id: 'one-building', text: 'Only one building, nothing else', type: 'constraint' },
  { id: 'no-sky', text: 'Crop so tight there is no sky', type: 'constraint' },
  { id: 'add-rain', text: 'What if it started raining?', type: 'transformation' },
],
```

---

## Pack Manifest

```javascript
registerPack({
  id: 'machi',
  name: '街 Machi',
  subtitle: 'The Town',
  description: 'Architecture and urban scenes in the meisho-e tradition',
  category: 'expansion',
  elementIds: [
    'tenshu', 'machiya', 'mon', 'ishigaki', 'kawara-yane',
    'yatai', 'toro-michi', 'engawa', 'sudare', 'nurigome',
    'merchant', 'pilgrim',
  ],
  paletteIds: ['kawara', 'yugure'],
  affinity: ['structural', 'landscape', 'figure', 'atmospheric'],
  journeys: [...],
  prompts: [...],
});
```

---

## Gallery Presets (4)

### 1. "Suruga Street" — *First-Journey Preset*

Hiroshige-inspired street view with receding machiya.

- **Paper**: Landscape (540×360) on Kozo
- **Palette**: kawara
- **Atmosphere**: Day background, Earth foreground, horizon 0.70, 0 mist
- **Elements**: machiya (center-left, midground), yatai (right foreground), traveler (left, walking), stone-path (foreground), pagoda (left background, small, distant), hanko

### 2. "Snow Gate" — *Second-Journey Preset*

Hasui's *Zōjōji* mood — a massive gate in snow.

- **Paper**: Tall Scroll (360×540) on Hosho
- **Palette**: kawara
- **Atmosphere**: Overcast background, Snow foreground, horizon 0.60, 1 mist
- **Elements**: mon (center, large — fills upper 40%), pilgrim (center foreground, small), snow-fall (full paper), stone-path (foreground), toro-lit (right, from Tsukiyo pack or companion), hanko

### 3. "Evening Market"

Warm dusk light on a market scene.

- **Paper**: Landscape (540×360) on Kozo
- **Palette**: yugure
- **Atmosphere**: Dusk background, Earth foreground, horizon 0.68, 0 mist
- **Elements**: machiya (background), yatai (center-right), merchant (at stall), umbrella-figure (left, walking), paper-lantern (hanging near stall), hanko

### 4. "Castle Town"

Layered depth composition — castle above rooftops.

- **Paper**: Portrait (360×540) on Kozo
- **Palette**: edo (existing Core palette)
- **Atmosphere**: Day background, Earth foreground, horizon 0.65, 2 mist bands
- **Elements**: tenshu (upper background, small), kawara-yane (midground, rooftop texture), machiya (lower midground), ishigaki (lower foreground), two-travelers (foreground), pine-tree (right side, framing), hanko

---

## Scale Relationships

Architecture creates unique scale challenges. These elements span a wider size range than any other pack:

| Element | Relative Scale | Placement |
|---------|---------------|-----------|
| tenshu (castle) | 1.5–2.0× | Background — large but distant |
| mon (gate) | 1.2–1.5× | Foreground — imposing, close |
| machiya (townhouse) | 1.0× (reference) | Midground |
| kawara-yane (rooftops) | 1.0–1.5× | Midground — fills horizontal space |
| nurigome (storehouse) | 0.8–1.0× | Midground |
| ishigaki (stone wall) | 0.8–1.0× | Foreground/midground |
| yatai (stall) | 0.6× | Foreground |
| engawa (veranda) | 0.8× | Extreme foreground |
| sudare (blind) | 0.8× | Top of composition |
| toro-michi (lantern path) | 1.0× | Midground, perspective depth |
| merchant (figure) | 0.4× | Foreground |
| pilgrim (figure) | 0.4× | Foreground/midground |

**Key principle**: Figures should be 1/3 to 1/4 the height of the nearest building. A merchant next to a yatai should reach about 2/3 of the stall height. A pilgrim approaching a mon should be 1/5 the gate height.

---

## Tag Strategy

No new tags needed. The existing 17-tag vocabulary covers Machi well:
- `structural` — tenshu, machiya, mon, ishigaki, kawara-yane, yatai, toro-michi, engawa, sudare, nurigome
- `landscape` — tenshu, machiya, mon, ishigaki, kawara-yane, nurigome, toro-michi, pilgrim
- `figure` — merchant, pilgrim, yatai (implies human presence)
- `intimate` — yatai, engawa, sudare, merchant
- `minimal` — ishigaki, sudare, pilgrim
- `atmospheric` — toro-michi (lit lanterns create mood)

### Pack Affinity Tags
`affinity: ['structural', 'landscape', 'figure', 'atmospheric']`

This surfaces:
- All structural Core elements (pagoda, temple, tea-house, bridges, fences)
- Landscape context elements (mountains, paths, trees)
- All Core figures (travelers, fisherman, etc.)
- Weather elements (rain, snow, clouds)

---

## Comparison with Other Packs

| | Core | Kacho-e | Moribana | Tsukiyo | **Machi** |
|---|---|---|---|---|---|
| **Mode** | Compose a scene | Compose a study | Compose an arrangement | Compose a mood | **Compose a place** |
| **Subject** | Nature panorama | Bird & flower | Still life | Night landscape | **Built environment** |
| **Key innovation** | Foundation | Detailed fauna/flora | Vessels, negative space | Light sources, darkness | **Architecture, materials, street life** |
| **Atmosphere** | Day landscapes | Garden settings | Interior/studio | Night + moon | **Urban weather, dusk** |
| **Figure use** | Optional staffage | Rare | None | Rare, small | **Essential — gives scale** |
| **Carve emphasis** | Landscape texture | Biological detail | Minimal, refined | Silhouette, glow | **Material texture** |
| **Companion leverage** | — | Core fauna/flora | Core branches | Core structures | **Core structures + figures + weather** |
| **Unique vocabulary** | Mountains, water | Birds, detailed flowers | Vessels, kenzan | Lanterns, owls, foxes | **Buildings, walls, gates, stalls** |

---

## Implementation Order

### Phase 1: Core Architecture (3 elements)
1. machiya, mon, ishigaki — establish the architectural design language
2. Test material zone system at all carve levels
3. Validate with existing figures for scale

### Phase 2: Street Scene (3 elements)
4. yatai, kawara-yane, toro-michi
5. Test with rain-curtain and snow-fall overlays
6. Create kawara and yūgure palettes

### Phase 3: Large Structures + Framing (3 elements)
7. tenshu, engawa, sudare
8. Test composition framing techniques (engawa + sudare)
9. Test castle at distance with rooftop layering

### Phase 4: Detail Elements + Figures (3 elements)
10. nurigome, merchant, pilgrim
11. Create pack manifest and gallery presets

### Phase 5: Polish
12. Tune palettes based on print output
13. Test on phone, tablet, desktop
14. Create journeys and prompts
15. Update ROADMAP.md

---

## Audio Considerations

Machi-specific ambient sounds could include:
- Distant crowd murmur (filtered pink noise with envelope modulation)
- Wooden clapper (*hyōshigi*) — the night watchman's signal (two sharp sine pops)
- Temple bell (*bonshō*) — already exists in audio engine, surface more frequently
- Wind chime (*fūrin*) — high sine with gentle decay, summer street sound

These are polish items. The existing ambient engine already creates appropriate mood.

---

## Design Challenges

### Perspective Convention
Existing Mokuri elements are drawn in neutral flat elevation. Machi introduces more architectural elements that benefit from slight perspective (receding rooflines, diminishing lanterns). Following Tsukiyo's approach: **perspective is baked into the SVG paths**, not computed by transforms. This limits each element to one viewpoint but ensures consistency.

### Material Density at Detail Level
Architectural elements have dense repetitive patterns (tile grids, lattice windows, stone coursing). These patterns need to be simplified enough to:
- Trace cleanly (if using the forge)
- Not overwhelm the print engine (too many small paths create noise)
- Read at typical element scales (a tile pattern that's beautiful at 100% may be mud at 40%)

**Rule of thumb**: patterns should have 3–5 repetitions visible at the element's intended scale. A rooftop with 50 tiny tile lines will print as noise. A rooftop with 5 visible tile courses will read as "tile roof."

### Relationship to Existing Structural Elements
The existing pagoda, temple-roof, tea-house, and farmhouse will coexist with Machi elements. They should feel like they belong in the same world — similar line weight, similar level of abstraction. If Machi elements are dramatically more detailed or realistic than Core structures, the mismatch will be jarring. Aim for the same design register, with more material specificity.
