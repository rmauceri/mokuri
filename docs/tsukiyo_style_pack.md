# Tsukiyo Style Pack — Design Document

## 月夜 — "Moonlit Night"

### Vision

Tsukiyo shifts Mokuri's creative mode from **"compose a scene"** to **"compose a mood."** Inspired by the night scene tradition across ukiyo-e (Hiroshige's meisho), shin-hanga (Hasui Kawase's moonlit landscapes), and the lunar poetics of Yoshitoshi's *One Hundred Aspects of the Moon*, this pack introduces nocturnal compositions where darkness is an active element, light sources create drama, and silence has visual weight.

Where Core Mokuri celebrates the breadth of landscape, Tsukiyo celebrates the **transformation of familiar scenes by night** — a temple at dusk is architecture, but the same temple under moonlight is poetry. The pack's elements, palettes, and atmosphere presets work together to make darkness feel rich, not empty.

### Key Characteristics

- **Darkness as positive space** — large dark areas are compositional features, not absence
- **Selective luminance** — moon glow, lantern warmth, and reflected light draw the eye
- **Sparse compositions** — night scenes typically use fewer elements (3–6), each with purpose
- **Silhouette and bokashi** — elements read as dark shapes against graduated sky, or as lit objects against deep backgrounds
- **Emotional register** — contemplative, mysterious, serene; the mood of *yūgen* (幽玄, profound mystery)
- **Heavy ink, dark paper** — best results with heavy ink load on Kakishibu or Kozo paper

### Artistic Tradition

Night scenes appear across centuries of Japanese printmaking. These are Tsukiyo's primary references:

**Hiroshige — *One Hundred Famous Views of Edo* (1856–58)**
The 100 Views series includes ~15 nocturnal or twilight prints. Key references for Tsukiyo:
- **Fox Fires at Ōji** (#118) — The series' most famous night scene and Tsukiyo's signature inspiration. Deep indigo sky, full moon, kitsune gathering beneath an ancient tree with supernatural foxfire lights. Compositionally: a massive vertical tree as central axis, warm foxfire dots against cool night, vast dark space with rhythmic small figures. Directly inspires our Kitsune element and the warm-vs-cool tension at the heart of Tsukiyo palettes.
- **Saruwaka-chō by Night** (#90) — Theatre district at twilight, full moon illuminating a receding street with tiny figures. Demonstrates how a single light source (moon) can structure an entire composition through shadow and reflection.
- **Fireworks at Ryōgoku** (#98) — Summer night festival on the Sumida River, fireworks bursting against dark sky. Demonstrates warm light explosions against deep blue-black — the extreme version of Tsukiyo's light-source drama.
- **Moon Pine, Ueno** (#89) — Gnarled pine silhouetted against moonlit sky. The pine frames a view of the landscape beyond — directly inspires our Kodama (ancient tree) as a framing/silhouette element.
- **Suijin Shrine and Massaki** (#35) — Moon reflecting on the Sumida River, shrine architecture in silhouette. Reference for our Tsuki Reflection element.

**Hasui Kawase — Shin-hanga Night Prints (1920s–50s)**
Hasui perfected the atmospheric night landscape. His techniques map directly to Mokuri's print engine:
- **Bokashi layering for depth in darkness** — Hasui's printers used graduated inking to create smooth tonal transitions in dark areas, avoiding flat black. Multiple passes (sometimes 15–20 color blocks per print) built rich, complex darks. → Maps to Mokuri's multiple baren passes + ink absorption variation.
- **Reserve printing for luminance** — Areas meant to glow (windows, reflections, moon) were printed lightly or left unprinted, letting paper show through. → Maps to Mokuri's carving system: carved areas reveal paper through ink. High carve levels on light-source zones = luminance.
- **Cool/warm contrast** — Deep indigo and blue-gray for night, with tiny warm orange/yellow accents for lanterns and lit windows. The emotional power comes from the ratio — vast cool darkness with minimal warm light. → Directly encoded in Tsukiyo's palettes (slots 0–2 cool, slot 3 warm, used sparingly).
- **Water reflections via bokashi** — Moonlight on water rendered as vertical bokashi fade, not literal mirror image. → Maps to our Tsuki Reflection element + per-zone bokashi.
- Key prints: *Moonlit Night, Miyajima* (torii in water under moon), *Starlit Night, Miyajima* (starfield over shrine), *Magome at Night* (snow village with lit windows).

**Koitsu Tsuchiya (1870–1949)**
Vivid night streetscapes — more saturated and dramatically lit than Hasui. Warm amber/orange lantern light dominates over cool moonlight. The Yomichi (夜道) palette draws directly from Koitsu's color world.

**Yoshitoshi — *One Hundred Aspects of the Moon* (1885–92)**
100 prints unified by the moon motif across myth, history, and folklore. Shows the range of what "moonlit" can mean — from subtle atmospheric presence to dramatic full-moon compositions. Demonstrates that night scenes carry emotional and narrative weight beyond landscape.

### What Makes Great Night Prints (Design Principles for Tsukiyo)

From studying these masters, the principles that should guide Tsukiyo element design and compositions:

1. **Darkness is not empty** — Large dark areas in great night prints have tonal variation, subtle texture, and visual weight. In Mokuri: heavy ink + Kakishibu paper + ink absorption variation achieves this.
2. **Light sources earn their place** — Every light element (lantern, moon, firefly) is a compositional decision. Sparse use of warm light against vast cool dark creates the emotional impact.
3. **Silhouettes tell stories** — At night, elements are known by their outline. Block-level carve (silhouette only) is *the correct aesthetic* for many night elements, not a starting point to carve past.
4. **Bokashi is essential** — Graduated tonal transitions (sky gradients, glow fades, water reflections) are the primary technique that separates a night print from a dark print.
5. **Scale contrast creates depth** — Small, bright elements (distant lit window, single lantern) against large dark masses (mountain, sky, tree) create dramatic depth.
6. **Less is more** — Night scenes typically have fewer elements than daytime. The darkness itself is a compositional element that needs space.

---

## Existing Mokuri Elements — Crossover Companions

Tsukiyo benefits enormously from Core elements. Night transforms familiar subjects — a pine tree becomes a silhouette, a torii gate becomes a threshold between worlds. The affinity system should surface these naturally.

### High-Affinity Companions

| Element | Source | Why It Works for Tsukiyo |
|---------|--------|--------------------------|
| **full-moon** | elements.js | The literal subject of the pack. Moon + night background = anchor for every composition. |
| **cloud-bank** | elements.js | Clouds drifting across the moon is a classic motif. Low carve level = dark mass. |
| **cloud-wisp** | scene-elements.js | Thin atmospheric clouds streaking across night sky. |
| **pine-tree** | elements.js | Silhouetted against moonlit sky — iconic Hasui composition. |
| **twisted-pine** | elements.js | More dramatic silhouette — angular branches against night. |
| **torii-gate** | elements.js | Moonlit shrine entrance — spiritual and compositional anchor. |
| **pagoda** | scene-elements.js | Multi-story silhouette against night sky. Classic meisho subject. |
| **tea-house** | scene-elements.js | Warm interior glow against dark exterior. |
| **wooden-bridge** | scene-elements.js | Bridge over moonlit water — depth and reflection. |
| **paper-lantern** | extended-elements.js | Light source. Warm glow in dark scenes. |
| **lantern-kasuga-premium** | extended-elements.js | Stone lantern as compositional anchor. |
| **rain-curtain** | scene-elements.js | Rain at night — classic shin-hanga subject. |
| **snow-fall** | scene-elements.js | Snow under moonlight — Hasui's specialty. |
| **bare-branch** | extended-elements.js | Winter night silhouette — stark and dramatic. |
| **umbrella-figure** | figures-elements.js | Solitary figure in night rain — deeply evocative. |
| **traveler** | figures-elements.js | Lone figure on a moonlit road. |
| **fishing-boat** | extended-elements.js | Boat on moonlit water — classic night subject. |
| **tranquil-pond** | elements.js | Still water for moon reflections. |

### Moderate-Affinity Companions

| Element | Source | How It Supports Tsukiyo |
|---------|--------|--------------------------|
| **bamboo-grove** | scene-elements.js | Dense silhouette with moonlight filtering through gaps. |
| **mountain-distant** | elements.js | Dark mountain mass against indigo sky. |
| **stone-path** | scene-elements.js | Moonlit path leading into darkness. |
| **susuki-grass** | extended-elements.js | Autumn moon over susuki grass — *tsukimi* tradition. |
| **maple-branch** | scene-elements.js | Autumn night — colored leaves by moonlight. |
| **distant-village** | scene-elements.js | Tiny lit windows in distant darkness. |
| **water-ripples** | scene-elements.js | Moon reflection breaking on water surface. |
| **koi** / **koi-leaping** | fauna-elements.js | Fish in moonlit pond — visible by moonlight. |
| **crane-standing** | fauna-elements.js | Solitary crane in moonlit shallows. |

### Design Implication

The affinity tag system means we don't need to duplicate these elements. Tsukiyo's `affinity: ['landscape', 'atmospheric', 'structural', 'water', 'minimal']` will automatically surface the right companions. The pack's own elements provide what Core lacks: night-specific subjects that don't make sense in daytime scenes.

---

## New Elements (10)

### Quality Bar — Inspired by Hiroshige and Hasui

The 100 Views of Edo and Hasui's shin-hanga set a high bar for what Tsukiyo should feel like. Key implications for element design:

- **Silhouettes must be immediately readable** — At block level (carve 0), every element should be recognizable by outline alone. Night scenes depend on silhouette clarity more than any other genre. Test every element against a dark background at block level.
- **Detail emerges through carving, not color** — In night prints, color range is compressed (mostly dark). The carving system carries more weight than color zones. Shape-level and detail-level carving should reveal texture and character that the dark palette can't convey through color alone.
- **Glow zones need bokashi to work** — The `glow` zone on light-source elements (chōchin, tōrō, hotaru) is designed for bokashi fade. Without bokashi applied, these elements will look flat. The journey system should guide users to discover bokashi on their first Tsukiyo composition.
- **Organic hand-drawn quality is critical** — Following Hiroshige's calligraphic line quality, all paths should use Q-curves with organic variation. No geometric precision. The slight irregularity of hand-carved blocks is what makes mokuhanga feel alive.
- **ViewBox sizes should encourage proper scale relationships** — A lit stone lantern should feel substantial but not dominate like a pagoda. The ancient tree should feel *massive*. ViewBox proportions guide initial placement scale.

### Light Sources (3) — *The Pack's Most Distinctive Contribution*

Night scenes need light sources. These elements create the warm-vs-cool tension that defines moonlit prints.

#### 1. Chōchin Row (提灯列) — Paper Lantern String

A row of 3–4 paper lanterns on a horizontal cord, each with a warm glow halo. Festival or shrine approach lighting.

- **ViewBox**: ~220×80 (wide, horizontal string)
- **ColorZones** (3): `lantern` (paper body — warm white/cream), `frame` (bamboo ribs and cord), `glow` (halo around each lantern)
- **Suggested Layer**: midground
- **Tags**: `atmospheric`, `structural`, `minimal`
- **Carve Levels**:
  - Block: 3–4 lantern body fills (rounded rectangles), cord fill (thin horizontal band), glow fills (larger soft ovals behind each lantern)
  - Shape: + bamboo rib strokes (vertical on each lantern), cord sag curve stroke, top/bottom ring strokes
  - Detail: + kanji character strokes on lanterns, cord knot marks, glow gradient strokes (radiating lines)
- **Design Notes**: The glow zone is key — with bokashi (radial direction), it can fade from warm yellow at center to transparent at edges, creating the illusion of cast light. Lanterns should diminish slightly in size toward one end (perspective). This is the pack's signature "place-making" element.

#### 2. Tōrō Lit (灯籠明) — Lit Stone Lantern

A stone lantern with its fire window actively glowing. Distinct from Core's unlit kasuga/yukimi/oribe lanterns — this one has visible flame and cast light.

- **ViewBox**: ~80×160 (tall, narrow)
- **ColorZones** (3): `stone` (body and cap), `fire` (flame window — warm orange/yellow), `glow` (cast light on surrounding area)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `atmospheric`, `landscape`
- **Carve Levels**:
  - Block: lantern body fill (stacked geometric shapes — cap, fire box, pillar, base), fire window fill, glow fill (larger area around fire box)
  - Shape: + cap edge strokes, fire box window frame strokes, pillar contour, base detail
  - Detail: + flame flicker strokes inside window, stone texture marks, moss strokes on base, light ray strokes emanating from window
- **Design Notes**: The fire zone in warm orange against surrounding cool stone creates the warm/cool tension central to night prints. The glow zone with downward bokashi suggests light falling on the ground. Deliberately different silhouette from the Core lanterns.

#### 3. Hotaru (蛍) — Firefly Cluster

A loose scatter of 5–7 fireflies, each a tiny body with a luminous tail. Organic, floating arrangement.

- **ViewBox**: ~160×120 (loose scatter)
- **ColorZones** (3): `body` (tiny dark insect bodies), `light` (bioluminescent glow spots), `trail` (faint glow trails)
- **Suggested Layer**: foreground
- **Tags**: `fauna`, `atmospheric`, `intimate`, `organic`
- **Carve Levels**:
  - Block: 5–7 small glow spot fills (irregularly spaced), small body dot fills
  - Shape: + body detail strokes (tiny wing marks), glow halo strokes (soft rings around each light)
  - Detail: + trailing path strokes (dotted/dashed flight paths), leg detail, antenna strokes
- **Design Notes**: Fireflies are the quintessential summer night element. The glow spots should be irregularly spaced to feel natural, not grid-like. At block level they're just warm dots floating in space — simple but evocative. The trail zone adds movement when carved to detail. Works beautifully over dark backgrounds and near water.

### Night Nature (3) — *Dark-Adapted Subjects*

These are subjects that belong specifically to night — they don't work in daylight compositions.

#### 4. Fukurō (梟) — Owl

A round-bodied owl perched on a branch stub, with large forward-facing eyes. Compact, recognizable silhouette.

- **ViewBox**: ~100×120
- **ColorZones** (3): `body` (feathered body and wings), `face` (facial disc and eyes), `perch` (branch stub)
- **Suggested Layer**: foreground
- **Tags**: `fauna`, `organic`, `intimate`
- **Carve Levels**:
  - Block: body silhouette fill (rounded owl shape with ear tufts), face disc fill, branch stub fill
  - Shape: + wing edge strokes, large eye circle strokes (distinctive owl feature), beak stroke, branch bark contour
  - Detail: + feather barb strokes (layered V-marks on breast), pupil detail, ear tuft texture, bark texture strokes, talon marks
- **Design Notes**: The owl's silhouette is unmistakable — round body, ear tufts, forward-facing flat face. The facial disc zone allows a lighter color that catches moonlight. At block level it reads as a dark round shape on a branch — at detail level, the feather texture and piercing eyes emerge. Traditional subject in Japanese art symbolizing wisdom and night.

#### 5. Kitsune (狐) — Fox

A seated fox in profile, bushy tail curled around body. Alert, ears forward, nose slightly raised — as if sensing moonlight.

- **ViewBox**: ~140×120
- **ColorZones** (3): `body` (main fur), `chest` (lighter belly/chest patch), `detail` (ear tips, nose, tail tip — dark accents)
- **Suggested Layer**: foreground
- **Tags**: `fauna`, `organic`, `landscape`
- **Carve Levels**:
  - Block: body silhouette fill (seated profile with tail), chest patch fill, dark accent fills (ear tips, nose)
  - Shape: + body contour stroke, ear detail strokes, leg division, tail curl contour, eye
  - Detail: + fur texture strokes (short directional marks along body), whisker strokes, tail fur texture, paw detail
- **Design Notes**: Foxes (*kitsune*) are deeply embedded in Japanese folklore — they're shapeshifters, tricksters, and messengers of Inari. The seated profile silhouette is clean and reads well at small scale. The bushy tail is the signature feature. The chest zone in a lighter tone creates the classic fox coloring. Perfect companion to fireflies and moonlit shrines.

#### 6. Kodama (古樹) — Ancient Gnarled Tree

A massive, ancient tree trunk with minimal foliage — mostly bare limbs twisting against the sky. Ghost-tree silhouette.

- **ViewBox**: ~180×200 (tall, dominant)
- **ColorZones** (3): `trunk` (massive main trunk and limbs), `bark` (textured bark areas), `moss` (hanging moss or lichen patches)
- **Suggested Layer**: midground
- **Tags**: `flora`, `organic`, `landscape`, `minimal`
- **Carve Levels**:
  - Block: massive trunk fill (thick, twisted form), 3–4 major limb fills branching asymmetrically
  - Shape: + bark plate boundary strokes, hollow/knot hole strokes, branch taper contours, moss patch fills
  - Detail: + deep bark fissure strokes (following form), fine branch tips (reaching, claw-like), hanging moss texture, root surface strokes
- **Design Notes**: Named for tree spirits in Japanese folklore. This is a *presence* element — large, dark, ancient. The twisted silhouette against a moonlit sky is one of the most powerful compositions in night prints. Deliberately much larger and more dramatic than Core's pine-tree and twisted-pine. The hollow/knot holes add character. Pairs naturally with owl (perch), foxes (shelter), and fireflies (dancing around).

### Atmospheric Elements (2) — *Night-Specific Atmosphere*

#### 7. Tsuki Reflection (月映) — Moon Reflection on Water

A broken, shimmering moon reflection on still water — elongated column of light with ripple distortion.

- **ViewBox**: ~60×180 (tall, narrow — vertical reflection column)
- **ColorZones** (2): `reflection` (bright reflected moonlight), `ripple` (darker water-distortion bands)
- **Suggested Layer**: foreground
- **Tags**: `water`, `atmospheric`, `minimal`, `organic`
- **Carve Levels**:
  - Block: single tall oval fill (main reflection column)
  - Shape: + horizontal ripple break strokes dividing the reflection, tapered top and bottom edges
  - Detail: + fine sparkle strokes (small bright dashes), subtle wave distortion strokes, edge shimmer marks
- **Design Notes**: This pairs directly with the Core full-moon — place the moon in the sky and its reflection on the water below. The elongated vertical form creates a strong compositional axis. At block level it's a simple bright column; at detail level, the ripple breaks and sparkle strokes make it feel like moving water. Bokashi from top (bright) to bottom (fading) is essential.

#### 8. Hoshi (星) — Star Field

A scattered pattern of stars — a mix of bright points and faint dots. Not a constellation, but an atmospheric field.

- **ViewBox**: ~200×120 (wide field)
- **ColorZones** (2): `bright` (larger/brighter stars), `faint` (smaller background stars)
- **Suggested Layer**: background
- **Tags**: `atmospheric`, `minimal`, `landscape`
- **Carve Levels**:
  - Block: 8–10 larger star dot fills (irregular scatter), 15–20 tiny faint dot fills
  - Shape: + 4-point twinkle strokes on bright stars (tiny cross shapes), additional faint dots
  - Detail: + fine twinkle rays (longer crosses on 2–3 brightest stars), subtle haze rings around brightest points
- **Design Notes**: Stars rarely appear in traditional ukiyo-e (the night sky is usually empty or cloudy), but shin-hanga artists like Hasui included starfields. This is an atmospheric wash element — place it behind everything, at background layer. The two zones allow bright stars and faint background stars to take different palette colors. Works best with no cloud-bank elements competing.

### Composition Anchors (2) — *Scene-Setting Elements*

#### 9. Yūkaku Gate (夕門) — Twilight Gateway

A simple wooden gateway or entrance frame — two posts with a crossbeam, suggesting a threshold between lit and unlit space. Not a torii (sacred) but a worldly entrance.

- **ViewBox**: ~160×180 (tall, framing)
- **ColorZones** (3): `post` (wooden uprights), `beam` (crossbeam and roof line), `shadow` (cast shadow on ground)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `landscape`, `minimal`
- **Carve Levels**:
  - Block: two post fills (vertical, slightly tapered), crossbeam fill, small roof line fill, ground shadow fill
  - Shape: + post contour strokes, beam joint strokes, roof tile suggestion strokes, shadow edge
  - Detail: + wood grain strokes on posts, weathering marks, roof tile detail, subtle cobblestone marks in shadow area
- **Design Notes**: This is a framing element — place it in the foreground and compose a night scene *through* it. The gateway creates a sense of entering a nocturnal world. The shadow zone at the base grounds it. Lighter and simpler than Core's pagoda or tea-house — it frames rather than dominates. The threshold metaphor is powerful in Japanese aesthetics.

#### 10. Suzumushi (松虫) — Night Grasses with Crickets

A low cluster of autumn grasses with 1–2 tiny crickets perched on stems. Suggests sound — the singing insects of autumn night.

- **ViewBox**: ~180×90 (wide, low)
- **ColorZones** (3): `grass` (blade stems and seed heads), `cricket` (tiny insect bodies), `seed` (seed head accents)
- **Suggested Layer**: foreground
- **Tags**: `flora`, `fauna`, `organic`, `intimate`, `seasonal-autumn`
- **Carve Levels**:
  - Block: grass blade cluster fills (5–7 sweeping arcs), 1–2 tiny cricket body fills, seed head fills
  - Shape: + individual blade strokes (graceful curves), cricket leg strokes, seed head detail, stem joints
  - Detail: + fine blade veins, cricket wing detail, seed wisp strokes, wind-bent blade tips
- **Design Notes**: Autumn moon-viewing (*tsukimi*) traditionally involves listening to singing insects. Susuki grass + crickets = the *sound* of autumn night. This is a foreground grounding element — place it at the bottom of compositions to establish the season and suggest the soundscape. Tiny cricket bodies are almost invisible at block level but emerge at detail. Pairs perfectly with Core's susuki-grass and full-moon.

---

## Palettes (3)

### 1. Tsukiyo 月夜 — Classic Moonlit

The signature palette. Cool indigo night with warm moonlight accents.

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Deep indigo | `#0f1428` | Night sky, deep shadows, dominant dark |
| 1 | Slate blue | `#3a4a6a` | Mid-tone — architecture, distant forms |
| 2 | Moon silver | `#c8ccd8` | Moonlight, reflections, bright accents |
| 3 | Warm glow | `#d4a050` | Lantern light, fire, warm counterpoint |
| 4 | Paper cream | `#e8e0d0` | Highlights, snow, lit surfaces |

**Palette logic**: Slots 0–1 are the dominant dark tones (70%+ of most compositions). Slot 2 is moonlight. Slot 3 is the only warm color — used sparingly for light sources. Slot 4 is near-paper for the brightest highlights.

### 2. Yomichi 夜道 — Night Road

A warmer, earthier night. Amber lantern light dominates over moonlight. Inspired by Koitsu Tsuchiya's vivid night streetscapes.

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Black brown | `#1a1410` | Deepest shadows, dark wood |
| 1 | Warm charcoal | `#4a3a2a` | Architecture, tree trunks, earth tones |
| 2 | Amber | `#c48a30` | Lantern glow, warm light cast |
| 3 | Rust orange | `#a05a2a` | Warm mid-tone — lit surfaces, roof tiles |
| 4 | Pale gold | `#e8d8b0` | Bright lantern paper, lit doorways |

**Palette logic**: This is the "warm night" — dominated by amber and firelight rather than cool moonlight. Creates an intimate, inhabited feeling. Best paired with chōchin-row and lit stone lanterns.

### 3. Shimoyo 霜夜 — Frost Night

A cold, crystalline palette. Winter night — blue-white frost, deep blue-black sky, pale snow.

| Slot | Name | Hex | Use |
|------|------|-----|-----|
| 0 | Blue-black | `#0a1020` | Sky, deepest tone |
| 1 | Frost blue | `#5a6a8a` | Snow shadows, mid-distance |
| 2 | Ice white | `#d8e0e8` | Snow surfaces, frost highlights |
| 3 | Pale lavender | `#9a8aaa` | Atmospheric — mist, clouds, distant trees |
| 4 | Warm amber | `#c49a50` | Tiny warm accents — distant window, lantern |

**Palette logic**: Almost entirely cool. The single warm accent (slot 4) used very sparingly — a lit window in a snowy village, one lantern at a shrine. The contrast of tiny warmth in vast cold is emotionally powerful. Best with Kakishibu paper + heavy ink.

---

## Atmosphere Presets

Tsukiyo should have named atmosphere combinations suggested in the Inking Workbench. These are recommendations, not locked settings.

| Preset | Background | Foreground | Horizon | Mist | Best With |
|--------|------------|------------|---------|------|-----------|
| **Moonlit Lake** | Night | Water | 0.55 | 1 | Moon reflection, bridge, fishing boat |
| **Shrine Path** | Night | Earth | 0.65 | 0 | Torii, stone lanterns, stone path |
| **Frost Silence** | Night | Snow | 0.60 | 2 | Snow-fall, bare-branch, pagoda |
| **Summer Stream** | Dusk | Water | 0.50 | 0 | Fireflies, night grasses, bamboo |

---

## Pack Manifest

```javascript
registerPack({
  id: 'tsukiyo',
  name: 'Tsukiyo Collection',
  nameJa: '月夜',
  icon: '月',
  description: 'Moonlit night scenes — lanterns, silhouettes, and nocturnal mystery',
  affinity: ['landscape', 'atmospheric', 'structural', 'water', 'minimal'],

  elementIds: [
    'chochin-row', 'toro-lit', 'hotaru',
    'fukuro', 'kitsune', 'kodama',
    'tsuki-reflection', 'hoshi',
    'yukaku-gate', 'suzumushi'
  ],

  paletteIds: ['tsukiyo', 'yomichi', 'shimoyo'],

  presetIds: null, // gallery presets defined separately

  journeys: [
    {
      id: 'first-moonlit',
      title: 'Your First Moonlit Scene',
      titleJa: '初月夜',
      prompt: 'A full moon rises over still water',
      promptType: 'scene',
      startingPreset: 0,
      featureHints: ['place', 'atmosphere-bg', 'palette', 'carve', 'print'],
      suggestedNext: 'lantern-night',
    },
    {
      id: 'lantern-night',
      title: 'Lantern Light',
      titleJa: '灯夜',
      prompt: 'Warm lanterns guide the way through darkness',
      promptType: 'scene',
      startingPreset: 1,
      featureHints: ['color-zones', 'bokashi', 'carve-level', 'ink-load'],
      suggestedNext: null,
    },
  ],

  prompts: [
    { id: 'moon-on-water', text: 'A full moon reflected in still water', type: 'scene' },
    { id: 'shrine-at-night', text: 'A shrine entrance under moonlight', type: 'scene' },
    { id: 'firefly-stream', text: 'Fireflies over a summer stream', type: 'scene' },
    { id: 'snow-night', text: 'Snowfall on a silent village', type: 'scene' },
    { id: 'fox-moonlight', text: 'A fox watches the moon', type: 'scene' },
    { id: 'night-solitude', text: 'The sound of nothing', type: 'emotion' },
    { id: 'anticipation-dark', text: 'Something stirs in the dark', type: 'emotion' },
    { id: 'warm-window', text: 'A single warm light in the distance', type: 'emotion' },
    { id: 'only-moonlight', text: 'No light source except the moon', type: 'constraint' },
    { id: 'silhouettes-only', text: 'Everything in silhouette', type: 'constraint' },
    { id: 'add-darkness', text: 'Turn this scene into night', type: 'transformation' },
    { id: 'add-light', text: 'Add one source of light', type: 'transformation' },
  ],
});
```

---

## Gallery Presets (4)

### 1. "Moonlit Shrine" — *First-Journey Preset*

Classic Hasui-style composition. Moon over water with shrine silhouette.

- **Paper**: Tall Scroll (360×540) on Kakishibu
- **Palette**: tsukiyo
- **Atmosphere**: Night background, Water foreground, horizon 0.55, 1 mist band
- **Elements**: full-moon (upper right), cloud-wisp (drifting across moon), torii-gate (left third, on horizon), tsuki-reflection (below moon, on water), stone-path (foreground), toro-lit (right foreground), hanko

### 2. "Lantern Road" — *Second-Journey Preset*

Koitsu-style warm night streetscape.

- **Paper**: Landscape (540×360) on Kozo
- **Palette**: yomichi
- **Atmosphere**: Night background, Earth foreground, horizon 0.62, 0 mist
- **Elements**: chochin-row (upper area, string across scene), pagoda (left background, small), yukaku-gate (right foreground, framing), toro-lit (left midground), umbrella-figure (center path, small), stone-path (foreground), hanko

### 3. "Frost Silence"

Cold winter night — sparse, minimal, mostly empty.

- **Paper**: Square (420×420) on Hosho
- **Palette**: shimoyo
- **Atmosphere**: Night background, Snow foreground, horizon 0.60, 2 mist bands
- **Elements**: full-moon (upper center-left), bare-branch (right, large silhouette extending from edge), snow-fall (full paper), distant-village (left horizon, very small), hanko

### 4. "Fox Fires" — *Homage to Hiroshige #118*

Directly inspired by *Fox Fires on New Year's Eve at Ōji*. Supernatural, dramatic.

- **Paper**: Tall Scroll (360×540) on Kakishibu
- **Palette**: tsukiyo
- **Atmosphere**: Night background, Snow foreground, horizon 0.50, 0 mist
- **Elements**: kodama (center, large — the ancient tree as vertical axis), kitsune (lower left, small), kitsune (lower right, small, flipped), full-moon (upper right, small), hotaru (lower center, between foxes — standing in for foxfire), snow-fall (full paper, light), hanko

**Design note**: This preset demonstrates how Tsukiyo elements combine to create a scene with narrative weight. The ancient tree anchors, the foxes create symmetry (like Hiroshige's gathering), and the firefly/foxfire element provides the supernatural warm light against cold night.

---

## Perspective Landscape Elements (Core Addition)

### The Depth Problem

Mokuri elements are drawn in neutral flat elevation — they can be scaled, rotated, and positioned but not perspectively distorted. In Hiroshige's *100 Famous Views of Edo*, depth comes from elements **drawn with perspective baked into the artwork** — a stream widening toward the viewer, a path narrowing toward the horizon. These new Core elements bring that compositional vocabulary to Mokuri.

All perspective elements are drawn as seen from slightly above and ahead — wider/larger at the bottom of the viewBox (near), narrower/smaller at the top (far). The perspective is in the SVG paths, not in transforms.

### Design Principles

- **Perspective is in the drawing, not the engine** — these are standard Mokuri elements with standard viewBoxes. The perspective effect is achieved through how the paths are drawn.
- **Compositionally opinionated** — unlike the neutral side-view flowing-stream, these elements only work when placed to suggest depth. They're designed to create a depth axis through the composition.
- **Detail follows perspective** — foreground areas have bolder strokes and larger features; background areas have finer, smaller detail. This reinforces the depth illusion at every carve level.
- **Tall viewBoxes** — perspective elements are typically taller than wide, as the depth axis runs bottom-to-top (near-to-far).

### Elements (4)

#### P1. Receding Stream (遠流) — Perspective River/Stream

A stream seen from above, wide and detailed in the foreground, narrowing and simplifying as it curves toward the horizon.

- **ViewBox**: ~120×200 (tall — depth runs bottom to top)
- **ColorZones** (3): `water` (main water surface), `bank` (earth/grass edges), `ripple` (surface detail — white water, reflections)
- **Suggested Layer**: midground
- **Tags**: `landscape`, `water`, `organic`
- **Category**: `landscape`
- **Carve Levels**:
  - Block: water channel fill (wide at bottom, tapering with a gentle S-curve toward top), bank fills on both sides (converging)
  - Shape: + bank edge strokes, major current flow lines (wider-spaced near, tighter far), large foreground rock fills in water
  - Detail: + ripple strokes following current (large near, fine far), small stones in shallows, bank grass tufts, foam marks near rocks
- **Design Notes**: The S-curve is critical — a straight taper looks mechanical. The stream should meander slightly as it recedes. Bank edges are organic (Q-curves), not straight lines. Foreground ripples are 3-4px strokes; background ripples are 1px. This creates Hiroshige's characteristic "leading the eye" into the distance. The `ripple` zone in a lighter color (slot 2 or 4) catches moonlight in Tsukiyo compositions.

#### P2. Receding Path (遠道) — Perspective Stone Path

A stone-paved path from above, wide in the foreground with large detailed flagstones, narrowing toward a vanishing point with tiny stones.

- **ViewBox**: ~100×200 (tall, narrow)
- **ColorZones** (3): `stone` (flagstone surfaces), `gap` (dark mortar gaps between stones), `edge` (path border — earth, grass, or moss)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`
- **Category**: `landscape`
- **Carve Levels**:
  - Block: path surface fill (wide trapezoid, slightly irregular edges), edge fills on both sides
  - Shape: + major flagstone division strokes (larger rectangles near, smaller far), edge contour strokes, 1-2 large foreground stone fills
  - Detail: + individual stone surface texture (fine cracks, weathering), moss in gaps (near stones only), tiny pebble marks at edges, worn-smooth polish marks on foreground stones
- **Design Notes**: The stone size gradient is the key depth cue — foreground stones ~20px wide, background stones ~4px. Stones should be slightly irregular (not a grid). The path can curve slightly to one side. Edges have organic grass/earth borders, not hard lines. Perfect for "path leading into moonlit darkness" (Tsukiyo) or "stone path to a shrine" (Core).

#### P3. Angled Bridge (斜橋) — Three-Quarter View Bridge

A wooden bridge at 3/4 oblique angle, crossing diagonally from near-right to far-left (or mirrored). Shows both the side railing and the deck surface.

- **ViewBox**: ~200×160
- **ColorZones** (3): `deck` (bridge deck planks), `rail` (side railing and posts), `support` (underside structure, pilings)
- **Suggested Layer**: midground
- **Tags**: `structural`, `landscape`, `water`
- **Category**: `landscape`
- **Carve Levels**:
  - Block: deck surface fill (parallelogram, wider at near end), railing fill (near post taller, far post shorter), support fill (visible pilings at near end)
  - Shape: + individual plank strokes on deck (wider-spaced near, compressed far), railing post strokes, cross-beam strokes, deck edge contour
  - Detail: + wood grain on near planks, weathering marks, rope lashing on joints, water line marks on pilings, shadow strokes beneath deck
- **Design Notes**: The diagonal axis creates a powerful compositional line — the bridge leads the eye from foreground to background. The near end should feel close enough to touch (large posts, visible wood grain). The far end reduces to simple silhouette geometry. Can be flipped horizontally to change the direction of recession. This addresses the flat side-view limitation of Core's wooden-bridge.

#### P4. Receding Fence (遠垣) — Perspective Bamboo Fence/Railing

A bamboo or wooden fence/railing extending from foreground to distance. Posts tall and spaced wide at the near end, short and compressed at the far end.

- **ViewBox**: ~160×180 (tall)
- **ColorZones** (2): `post` (vertical posts and top rail), `rail` (horizontal connecting rails, lashing)
- **Suggested Layer**: foreground
- **Tags**: `structural`, `landscape`, `minimal`
- **Category**: `landscape`
- **Carve Levels**:
  - Block: 5-7 post fills (graduated height — tallest near, shortest far), top rail fill connecting all posts, ground line fill
  - Shape: + post contour strokes, horizontal rail strokes (2-3 rails visible), lashing marks at joints, ground detail near base
  - Detail: + bamboo node marks on near posts, fine grain texture, weathering strokes, small vine or moss on near posts, tiny shadow strokes
- **Design Notes**: This is a foreground framing element — place it at the bottom/side of a composition and look *past* it into the scene. The fence creates Hiroshige's signature "near object frames distant view" composition. Works beautifully in both Tsukiyo (fence railing by moonlit pond) and Core (fence along a garden path). The graduated post height is the primary depth cue. Horizontal rails create converging lines.

### Placement in Element Library

These 4 elements join Core's element library (not pack-specific) since perspective depth benefits all creative contexts. They should be tagged to surface via affinity in landscape-heavy packs (Core, Tsukiyo, eventually Machi).

- Added to `scene-elements.js` (or a new `perspective-elements.js` if the file is getting large)
- Added to Core pack's `elementIds` in `pack-registry.js`
- Category: `landscape` for all four

---



Tsukiyo compositions will push the print engine in specific ways. Some items are "nice to have" enhancements that benefit all packs; none are strict blockers.

### Works Well Today
- **Night background atmosphere**: Already renders deep indigo gradients. Opacity 0.92 at top = very dark.
- **Heavy ink load**: Increases opacity and edge weight — exactly what night scenes need.
- **Kakishibu paper**: Dark brown base creates a naturally moody foundation. Ink on dark paper = rich.
- **Bokashi per zone**: Lantern glow can use bokashi to fade light zones. Moon reflection can fade top-to-bottom.
- **Procedural variation**: Seeded path perturbation makes repeat lanterns/stars look hand-carved.
- **Mist bands**: Semi-transparent paper-colored bands create moonlit fog effect over dark atmosphere.

### Potential Enhancements (Future, Not Blocking)

1. **Moonlight wash** — A subtle blue-white overlay on the upper portion of night compositions, simulating scattered moonlight. Could be a new atmosphere option or a post-processing step in the print engine. Affects how elements in the upper half of the composition look slightly luminous.

2. **Ink pooling on large dark areas** — Night scenes have large contiguous dark regions. The print engine's current ink absorption variation helps, but it's subtle. Slightly more pronounced variation in very dark/high-opacity areas would make large night skies feel more hand-printed.

3. **Glow rendering** — The `glow` color zone on lanterns and fireflies renders as a flat color today. A future enhancement could apply a subtle radial gradient or soft-edge rendering to glow zones specifically, making them feel luminous rather than flat. This could work through the existing bokashi system.

4. **Dark paper base awareness** — When using Kakishibu (dark paper), the relationship between ink color and paper base is inverted. Currently the print engine handles this, but very light ink on very dark paper could benefit from slightly reduced perturbation to maintain legibility.

None of these are required for ship. The existing print engine with heavy ink + Kakishibu paper + night atmosphere already produces dramatically different prints from daytime compositions. The enhancements are opportunities to discover as we iterate with real compositions.

---

## Audio Considerations

The existing audio engine already adjusts ambience based on atmosphere. Night backgrounds trigger:
- Lower register chimes
- Wider spacing (more silence)
- Reduced wind intensity
- Occasional water drop sounds

Tsukiyo-specific audio could include:
- Cricket chirp synthesis (filtered noise bursts) when night grasses element is present
- Owl hoot (low sine wave with slight pitch bend) as a rare ambient event at night
- Firefly "sparkle" when placing hotaru element

These are non-blocking polish items. The existing night ambience is already atmospheric.

---

## Implementation Order

### Phase 1: Perspective Elements (Core)
1. Design and implement 4 perspective landscape elements in `scene-elements.js` or `perspective-elements.js`
2. Add to Core pack elementIds
3. Test perspective depth compositions — verify the illusion works at various scales and rotations

### Phase 2: Tsukiyo Foundation
4. Create `assets/tsukiyo-elements.js` with all 10 element definitions
5. Create `assets/tsukiyo-pack.js` with palettes and pack manifest
6. Wire into `index.html` (script tags, palette merge)
7. Bump service worker cache

### Phase 3: Element Design Iteration
8. Test each element at all 3 carve levels — validate accumulation rule
9. Test elements in night atmosphere — do silhouettes read well?
10. Test light source elements (chōchin, tōrō, hotaru) with bokashi
11. Iterate on element design based on visual testing

### Phase 4: Compositions
12. Create 4 gallery presets with curated compositions (using perspective elements where appropriate)
13. Test full compose → carve → ink → print workflow with Tsukiyo
14. Verify prints look distinctive on Kakishibu and Kozo papers

### Phase 5: Polish
15. Tune palettes based on print output
16. Add pack to style selector UI and verify affinity surfacing
17. Update ROADMAP.md and docs/mokuri_style_packs.md
18. Test on phone, tablet, and desktop

---

## Tag Strategy

New tags needed: none. The existing 17-tag vocabulary covers Tsukiyo elements well:
- `atmospheric` — chōchin-row, tōrō-lit, hotaru, tsuki-reflection, hoshi
- `fauna` — fukurō, kitsune, suzumushi, hotaru
- `flora` — kodama, suzumushi
- `structural` — chōchin-row, tōrō-lit, yūkaku-gate
- `landscape` — kitsune, kodama, tōrō-lit, hoshi, yūkaku-gate
- `water` — tsuki-reflection
- `organic` — fukurō, kitsune, kodama, hotaru, suzumushi
- `intimate` — hotaru, fukurō, suzumushi
- `minimal` — tsuki-reflection, hoshi, yūkaku-gate, chōchin-row

### Pack Affinity Tags
`affinity: ['landscape', 'atmospheric', 'structural', 'water', 'minimal']`

This surfaces:
- All landscape/atmosphere Core elements (mountains, clouds, rain, snow)
- Structural elements (torii, pagoda, tea-house, bridges, lanterns)
- Water elements (pond, stream, waves, ripples)
- Minimal elements (basic forms for abstract night compositions)

---

## Scale Relationships

Night scenes have natural depth layering:

| Layer | Typical Elements | Relative Scale |
|-------|-----------------|----------------|
| Background | hoshi, mountain-distant, full-moon | 0.4–0.8× |
| Midground | kodama, pagoda, torii-gate, chōchin-row | 0.7–1.2× |
| Foreground | tōrō-lit, fukurō, kitsune, suzumushi, yukaku-gate | 0.8–1.3× |
| Atmospheric | cloud-bank, rain-curtain, snow-fall, hotaru | 0.6–1.0× (overlay) |

The moon should typically be placed small and high — resist the temptation to make it huge. In traditional prints, the moon is a modest disc that commands attention through brightness contrast, not size. Tsuki-reflection can be taller than the moon itself — reflections elongate on water.

---

## Comparison with Other Packs

| Dimension | Core | Kacho-e | Moribana | **Tsukiyo** |
|-----------|------|---------|----------|-------------|
| **Domain** | Broad landscape | Birds & flowers | Ikebana still-life | Night scenes |
| **Mood** | Varied | Intimate, natural | Contemplative, balanced | Mysterious, serene |
| **Typical count** | 5–10 elements | 3–5 elements | 3–7 elements | 3–6 elements |
| **Key feature** | Breadth | Organic curves | Vessels + space | Darkness + light |
| **Ink load** | Standard | Standard/Light | Light/Standard | **Heavy** |
| **Best paper** | Kozo | Hosho | Gampi | **Kakishibu** |
| **Atmosphere** | All | Day/Dawn/Pink | None/Overcast | **Night/Dusk** |
| **Unique contribution** | Everything | Close-up nature | Container + arrangement | **Light sources + nocturnal fauna** |
| **Affinity crossover** | N/A (base) | Flora, fauna, water | Flora, minimal, vessel | Landscape, atmospheric, structural |
