# Mokuri Element Design Guide

> Reusable spec for designing and redesigning SVG elements in Mokuri.
> Paste this into a Copilot session when working on element definitions.

---

## 1. Element Data Model

Every Mokuri element is a JavaScript object with this shape:

```javascript
{
  id: 'kebab-case-id',          // unique, used for lookup
  name: 'Display Name',         // shown in gallery UI
  category: 'flora',            // see Category list below
  viewBox: '0 0 W H',          // SVG viewBox (design canvas)
  suggestedLayer: 'foreground', // background | midground | foreground
  colorZones: [
    { id: 'zone-name', defaultPaletteSlot: 0 },  // slot 0–4
    // 2–4 zones typical
  ],
  carveLevels: [
    { name: 'block',  paths: [ /* ... */ ] },  // level 0
    { name: 'shape',  paths: [ /* ... */ ] },  // level 1
    { name: 'detail', paths: [ /* ... */ ] },  // level 2
  ],
}
```

**Categories** (must match exactly): `'landscape'`, `'flora'`, `'fauna'`, `'figures'`, `'objects & patterns'`, `'basic forms'`, `'hanko'`

**Path object:**
```javascript
{ d: 'M...', type: 'fill', zone: 'zone-id' }                    // fill path
{ d: 'M...', type: 'stroke', zone: 'zone-id', strokeWidth: 1 }  // stroke path
```

Every `zone` value in a path MUST reference an `id` that exists in `colorZones`.

---

## 2. The Accumulation Rule (Critical)

This is the single most important rule. Every carve level MUST include ALL paths from the level before it, plus new additions:

```
block  = { base fills }
shape  = { ALL of block } + { new structural strokes/fills }
detail = { ALL of shape } + { new fine detail strokes/fills }
```

In other words: **block ⊂ shape ⊂ detail**.

If you remove a path at a higher level, that carved area disappears — the element breaks visually. Paths from lower levels are carried forward **verbatim** (identical `d`, `type`, `zone`, `strokeWidth`).

### Block Level Rules
- **Fills ONLY** — no strokes at block level, ever.
- These are solid silhouette shapes — what you'd see if the element were a flat rubber stamp.
- Each meaningful visual region gets its own fill path tagged with the appropriate zone.
- Separate fills per zone — don't combine zones into one path.

### Shape Level Rules
- Includes ALL block fills (copied verbatim).
- Adds: outlines, structural divisions, major feature strokes.
- This is where the element's form becomes recognizable.
- Stroke widths typically 0.8–2.0 px.

### Detail Level Rules
- Includes ALL shape paths (fills + strokes, copied verbatim).
- Adds: fine texture, hatching, veins, bark marks, tiny accent fills.
- Stroke widths typically 0.3–0.7 px.
- Tiny accent fills (buds, dots, stamens) also appear here.

### Quick Accumulation Check
Path counts should always increase: block < shape < detail.
A typical well-designed element: block 3–9, shape 5–11, detail 8–16.

---

## 3. Design Philosophy — The Mokuri Aesthetic

Mokuri elements should feel **hand-carved from a woodblock**, not computer-generated. Every design choice should favor organic warmth over geometric precision.

### Core Principles

**Organic over precise.** No perfect circles, no ruler-straight lines, no mechanical symmetry. Even symmetric subjects (like blossoms) should have subtle asymmetry — slightly different petal sizes, imperfect curves, natural wobble.

**Economy of paths.** Each path should earn its place. Prefer one multi-segment stroke path (using M moves) over many single-segment strokes. Fewer paths = cleaner rendering + better performance.

**Tapered fills for structure.** Branches, stems, trunks, and any elongated structural forms should be **fill shapes**, not strokes. This allows natural taper (wide at base, narrow at tip) using Q-curve outlines. Strokes have uniform width — fills can taper organically.

**Implied detail over explicit detail.** A few well-placed hatch marks suggest bark texture better than covering every surface. Leave breathing room. The carve tool and print engine add their own texture.

**Respect the printmaker's process.** Think in terms of woodblock carving: block level = rough silhouette gouge; shape level = defining cuts; detail level = fine chisel work. Each level is a distinct phase of physical craft.

---

## 4. SVG Path Craft

### Use Q-curves (quadratic Bézier), not L-lines

**Bad** — angular, mechanical:
```
M10,80 L30,60 L50,40 L70,20 L90,10
```

**Good** — flowing, organic:
```
M10,80 Q25,65 40,50 Q55,35 70,22 Q80,15 90,10
```

Q-curves use a single control point to create smooth arcs. They're the workhorse of organic SVG path design. Use them for:
- Branch contours (paired Q-curves forming tapered fill outlines)
- Leaf edges and petal scallops
- Hill silhouettes and terrain contours
- Any curved natural form

### Tapered Fill Pattern (Branches & Stems)

A branch is two Q-curve edges that converge from wide to narrow:

```javascript
// Branch: wide at M start, narrow at tip
{ d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z',
  type: 'fill', zone: 'branch' }
```

The path traces one edge up (Q-curves), crosses at the narrow tip (L), then traces the other edge back down (Q-curves), closing with Z. The gap between the two edges is the branch width, which naturally tapers.

### Multi-Segment Strokes (M-move technique)

Pack multiple short strokes into one path using M (moveTo) jumps:

```javascript
// 5 bark hatch marks in one path object
{ d: 'M58,90 L62,88 M56,100 L60,98 M54,110 L58,108 M52,70 L56,68 M50,50 L54,48',
  type: 'stroke', zone: 'branch', strokeWidth: 0.7 }
```

This is more efficient than 5 separate path objects and keeps the element definition compact.

### Scalloped Edges (Blossoms & Leaves)

For flower petals and leaf lobes, alternate inward dips and outward bumps using Q-curves:

```javascript
// 5-petal scalloped blossom
{ d: 'M52,28 Q48,30 45,34 Q41,33 38,36 Q40,41 43,44 Q40,48 38,52 Q40,56 45,55 Q48,59 52,62 Q56,59 59,55 Q64,56 66,52 Q64,48 61,44 Q64,41 66,36 Q64,33 59,34 Q56,30 52,28 Z',
  type: 'fill', zone: 'petal' }
```

Each Q-curve pair creates one petal lobe. The alternating control points (inward between petals, outward at petal tips) produce the scalloped effect.

### Tiny Accent Fills (Buds, Dots, Berries)

Use arc commands for small circular fills at detail level:

```javascript
// 2px radius circle at (155,11)
{ d: 'M155,11 A2,2 0 1,1 153,11 Z', type: 'fill', zone: 'bud' }
```

Or teardrop shapes for buds:
```javascript
// Teardrop bud
{ d: 'M84,58 Q83,54 84,51 Q85,54 84,58 Z', type: 'fill', zone: 'petal' }
```

---

## 5. Designing by Subject

### Flora (branches, blossoms, leaves)

- **2–4 zones**: typically `branch`/`stem`, `petal`/`leaf`/`needle`, `center`/`detail`/`bud`
- **Block**: branch fill(s) as tapered shapes + blossom/leaf silhouette fills + center dot fills
- **Shape**: + petal division strokes (radiating from center), calyx connections, secondary twig strokes
- **Detail**: + fine petal veins (thinner parallel to divisions), bark hatching, stamen accents, bud fills at tips
- Branch should feel like it grew — asymmetric, gently curving, thicker near base

#### Distinguishing Similar Subjects

When a pack has related elements (e.g., lotus AND lily), differentiate them by their natural behavior:

| Subject | Behavior | Visual Approach |
|---------|----------|----------------|
| Lotus | Rises above water | Cup-shaped upward petals, round seed pod center, single large pad, tall curved stem |
| Water Lily | Sits flat on water | Star-shaped radiating petals, small golden center, multiple pads with V-notch |
| Cherry | Spring canopy | Branch structure with clustered 5-petal blossoms |
| Wisteria | Hanging cascades | Vine with dangling flower clusters, compound leaves |

#### Cluster/Compound Elements

Some flora work best as **multi-part compositions** combining several sub-elements into one placement:

- **Vary sizes** — large, medium, and small versions of repeated parts (e.g., 3 lily pads of different sizes)
- **Overlap naturally** — sub-elements should partially overlap, not be arranged in a grid
- **Include lifecycle** — open blossom + closed bud + spent flower tells a story
- **Distinct from solo version** — if a solo flower exists, the cluster should differ in character (e.g., lily cluster vs lotus single bloom)

Reference: `lily-cluster` in `kacho-elements.js` — star blossom + 3 pads + bud (8 block fills, 4 zones).

### Landscape (hills, water, terrain)

- **2–3 zones**: `hill`/`water`/`terrain` layers, often by depth (near/mid/far)
- **Block**: large smooth fill silhouettes defining the terrain profile (Q-curves for organic hillsides/shorelines)
- **Shape**: + contour strokes following terrain forms, water ripple lines, terrace edges
- **Detail**: + fine texture (grass tufts, wave hatching, pebble dots, soil lines)
- Silhouettes should overlap naturally (foreground hills over background ones)

### Fauna (birds, fish, insects)

#### The Sparrow Pattern (Critical for Birds)

Study `sparrow` in `assets/fauna-elements.js` (lines 542–614). This is the gold standard for bird design. The key breakthrough: every bird must have **separate fill paths for each anatomical part** at block level. A single amorphous body blob creates an unrecognizable shape. Separate parts create recognizable bird anatomy even at block level.

**Block fills for a typical bird (6–10 fills):**

| Part | Zone | Notes |
|------|------|-------|
| Body (torso) | body | Core mass — oval, torpedo, or S-curved depending on species |
| Head | body | Round/oval, overlaps body at neck junction (same zone = same color) |
| Beak | detail or accent | Species-defining triangle — **always separate, always distinct color** |
| Wing (folded or swept) | wing | On the back or extended — different shade from body |
| Tail | body or wing | Species-specific: fan, fork, cocked-up, stubby |
| Breast | breast | Pale belly overlay (lighter tone, optional) |
| Legs | detail | Thin triangle fills using M-move sub-paths |

Additional species-specific fills as needed: crown patch (accent), occipital plumes (detail), hackle plumage (body), throat patch (accent), trailing plumes (plume).

#### Beak as Species Identifier

The beak is the most important detail for bird identification. It MUST be:
- A **separate fill path** (never merged with head)
- In a **contrasting color zone** (detail or accent — gets a different color)
- **Proportionally accurate** to the species:

| Species Type | Beak Shape | Proportion (relative to head) |
|-------------|-----------|-------------------------------|
| Wader (heron, egret) | Long sharp dagger | 1.0–1.5× head width |
| Songbird (warbler) | Tiny stub | 0.3× head width |
| Aerial hunter (swallow) | Very short point | 0.2× head width |
| Fisher (kingfisher) | Massive dagger | 1.0× head diameter |
| Seed eater (sparrow) | Small conical triangle | 0.4× head width |

#### Species-Specific Signature Features

Each bird should have 1–2 features that make it instantly recognizable at block level:

- **Heron**: S-curved neck+body, occipital plumes swept back from crown, hackle feathers drooping from lower neck, long dagger beak
- **Egret**: Trailing aigrette plumes (3 wisps), yellow beak in accent zone, S-neck
- **Swallow**: Forked tail (2 separate prong fills), scythe wings, torpedo body
- **Kingfisher**: Oversized head (~equal to body size!), massive beak (1× head)
- **Warbler**: Plump round body, cocked-up tail, tiny stub beak
- **Sparrow**: Separate head+body+wing+tail+beak+breast+legs (7 fills)
- **Crane**: Tall wading posture, long legs, red crown accent

#### Proportional Accuracy

Wings, tails, and beaks must be proportionally correct relative to the body:

- **Measure the body** first (length × width), then size other parts as ratios
- **Wings**: for perching birds, roughly body length; for in-flight birds, just slightly longer than the tail (not 5× longer)
- **Beaks**: refer to the proportion table above — undersized beaks make species unrecognizable
- **Legs**: wading birds (heron, egret) need long legs reaching ~40% of total element height
- **ViewBox**: fit the content with 2–4px padding — don't leave large empty areas (e.g., a 200px viewBox for content that only reaches 125px)

#### Reference Elements for Fauna

| Element | File | Lines | Key Learning |
|---------|------|-------|-------------|
| sparrow | fauna-elements.js | 542–614 | 7 block fills, the anatomy template for all birds |
| heron-standing | kacho-elements.js | 15–100 | 10 block fills, S-neck, hackle + occipital plumes, long beak |
| kingfisher | kacho-elements.js | 266–340 | Oversized head, massive beak ratio |
| koi | fauna-elements.js | 1–80 | Flowing body curve, fin separation |
| crane | fauna-elements.js | 300–400 | Tall wading posture, minimal but expressive |

### Objects & Structures (lanterns, boats, buildings)

- **2–3 zones**: `body`/`base`/`roof`, `frame`/`accent`, `detail`/`window`
- **Block**: major solid forms as separate fills per zone (don't combine the whole lantern into one path)
- **Shape**: + structural lines (frame edges, panel divisions, rope outlines)
- **Detail**: + surface texture (wood grain, stone marks, rope twist), decorative patterns
- Even man-made objects should have slight organic imperfection — hand-built, not factory-made

### Figures (human staffage)

- **2–3 zones**: `hat`/`garment`/`accessory` or `outer`/`inner`/`accent`
- **Block**: recognizable activity silhouette — robes as tapered Q-curve fills, hat as separate fill, accessory (staff/umbrella/rod) as fill
- **Shape**: + garment fold lines, hat brim edge, sleeve divisions, accessory outlines
- **Detail**: + fabric texture marks, hat weave/straw hatching, sandal strokes, hem details
- **No faces**: hat shadow, turned head, or brim obscures face — identity comes from posture and activity
- Robes define the body — no separate anatomy underneath. Clothing folds imply the figure within
- Walking figures: leading leg slightly forward, trailing robe suggests motion
- Pairs/groups: overlap robes slightly for natural grouping, not side-by-side cutouts
- Accessories (staff, umbrella, fishing rod) should be separate fill paths for independent color
- Slightly elongated proportions (7–8 head-heights) following print tradition

---

## 6. Anti-Patterns to Avoid

### ❌ Strokes at block level
Block is fills only. If you need a branch at block level, make it a tapered fill shape, not a stroke.

### ❌ Missing accumulation
Every path from block must appear in shape; every path from shape must appear in detail. Never drop a path at a higher level.

### ❌ Changed geometry between levels
If a snow cap or leaf has one `d` value at shape level, it must have the SAME `d` value at detail level. Don't redraw shapes with different curves — carry them forward verbatim.

### ❌ Single blob fills
Don't make one giant fill for an entire element at block level. Split into distinct zone fills — the body, the wings, the hat, the base are all separate paths.

### ❌ L-line-only paths
Paths built entirely from `L` (lineTo) commands look angular and mechanical. Virtually every natural form needs Q-curves. Reserve L-commands for short connecting segments and closing lines only.

### ❌ Excessive path count
If block has 15 paths, something's over-designed. Aim for economy. Combine related strokes using M-moves. Let the carve tool provide the rest.

### ❌ Invalid zone references
Every `zone` value in every path must match an `id` in `colorZones`. This is a hard error — the element won't render correctly.

### ❌ Symmetric mirror copies
Don't make left and right perfectly mirrored. Vary sizes, angles, and curve control points slightly. Nature doesn't mirror.

### ❌ Single amorphous body blob (fauna)
Don't create one big fill for the entire body of a bird or animal. Split into anatomically distinct parts: head, body, wing, tail, beak. The sparrow has 7 block fills, not 1. Separate parts = recognizable anatomy.

### ❌ Merged beak
The beak must always be a **separate fill path** in a **contrasting color zone**. Never merge it into the head fill. The beak shape and color are the primary species identifier.

### ❌ Disproportionate anatomy
Wings, beaks, and tails must be proportionally accurate to the species. A heron's beak should be ~1.2× head width, not 0.3×. A swallow's wings should be just past the tail, not 5× longer. Reference real proportions.

### ❌ Oversized viewBox
The viewBox should fit the actual element content with 2–4px padding. A 200px-wide viewBox for content that only reaches 125px wastes space and makes the element look tiny when placed.

---

## 7. Validation Checklist

After designing or modifying an element, verify ALL of these:

- [ ] **Block fills only** — `carveLevels[0].paths` has no `type: 'stroke'`
- [ ] **Accumulation** — every path in block appears verbatim in shape; every path in shape appears verbatim in detail
- [ ] **Path count increases** — block < shape < detail
- [ ] **Zone references valid** — every `zone` in every path exists in `colorZones`
- [ ] **No duplicate zones** — each zone id appears exactly once in `colorZones`
- [ ] **Slot range** — `defaultPaletteSlot` is 0–4
- [ ] **viewBox reasonable** — dimensions match the element's actual content bounds
- [ ] **Category correct** — matches one of the six valid category strings exactly
- [ ] **Parses as JS** — the entire file evaluates without syntax errors

### Node.js Validation Script

```javascript
// Quick validation (run from repo root)
const code = require('fs').readFileSync('FILENAME.js', 'utf8');
const elems = new Function(code + '; return VARIABLE_NAME;')();
for (const el of elems) {
  const zones = new Set(el.colorZones.map(z => z.id));
  const blockPaths = el.carveLevels[0].paths;
  const shapePaths = el.carveLevels[1].paths;
  const detailPaths = el.carveLevels[2].paths;

  // Block fills only
  if (blockPaths.some(p => p.type === 'stroke'))
    console.error(el.id, 'FAIL: stroke at block level');

  // Accumulation: block ⊂ shape
  const shapeDs = new Set(shapePaths.map(p => p.d));
  if (!blockPaths.every(p => shapeDs.has(p.d)))
    console.error(el.id, 'FAIL: block path missing from shape');

  // Accumulation: shape ⊂ detail
  const detailDs = new Set(detailPaths.map(p => p.d));
  if (!shapePaths.every(p => detailDs.has(p.d)))
    console.error(el.id, 'FAIL: shape path missing from detail');

  // Zone references
  for (const lev of el.carveLevels)
    for (const p of lev.paths)
      if (!zones.has(p.zone))
        console.error(el.id, lev.name, 'FAIL: invalid zone', p.zone);

  // Count increasing
  if (!(blockPaths.length < shapePaths.length && shapePaths.length < detailPaths.length))
    console.error(el.id, 'WARN: path counts not strictly increasing',
      blockPaths.length, shapePaths.length, detailPaths.length);

  console.log(el.id, 'OK —',
    `block:${blockPaths.length} shape:${shapePaths.length} detail:${detailPaths.length}`);
}
```

---

## 8. Reference Element: Bare Winter Branch

This element exemplifies the Mokuri aesthetic. Study its structure as the gold standard.

```javascript
{
  id: 'bare-winter-branch',
  name: 'Bare Winter Branch',
  category: 'flora',
  viewBox: '0 0 160 145',
  suggestedLayer: 'foreground',
  colorZones: [
    { id: 'branch', defaultPaletteSlot: 4 },
    { id: 'twig', defaultPaletteSlot: 3 },
    { id: 'bud', defaultPaletteSlot: 1 },
  ],
  carveLevels: [
    {
      name: 'block',
      paths: [
        // Main trunk — tapered fill, wide at base (75,140) narrowing to (45,35)
        { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z',
          type: 'fill', zone: 'branch' },
        // Right branch — tapered fill, wide at fork narrowing upward
        { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z',
          type: 'fill', zone: 'branch' },
        // Left branch — smaller, asymmetric
        { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z',
          type: 'fill', zone: 'branch' },
      ],
      // NOTE: 3 fills, 0 strokes. Clean silhouette.
    },
    {
      name: 'shape',
      paths: [
        // ← All 3 block fills carried forward verbatim
        { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z',
          type: 'fill', zone: 'branch' },
        { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z',
          type: 'fill', zone: 'branch' },
        { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z',
          type: 'fill', zone: 'branch' },
        // NEW: secondary twigs — multi-segment stroke using M-moves (5 segments, 1 path!)
        { d: 'M120,12 Q130,8 140,12 M120,12 Q128,18 138,28 M16,8 Q8,12 5,22 M16,8 Q10,4 5,8 M50,58 Q40,52 30,56',
          type: 'stroke', zone: 'twig', strokeWidth: 1.5 },
      ],
      // NOTE: 3 fills + 1 stroke = 4 paths. Economical.
    },
    {
      name: 'detail',
      paths: [
        // ← All 4 shape paths carried forward verbatim
        { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z',
          type: 'fill', zone: 'branch' },
        { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z',
          type: 'fill', zone: 'branch' },
        { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z',
          type: 'fill', zone: 'branch' },
        { d: 'M120,12 Q130,8 140,12 M120,12 Q128,18 138,28 M16,8 Q8,12 5,22 M16,8 Q10,4 5,8 M50,58 Q40,52 30,56',
          type: 'stroke', zone: 'twig', strokeWidth: 1.5 },
        // NEW: finer twig extensions (thinner, further out)
        { d: 'M140,12 Q148,8 155,12 M138,28 Q142,35 148,32 M5,22 Q2,30 8,35 M5,8 Q0,5 2,0 M30,56 Q22,52 18,58',
          type: 'stroke', zone: 'twig', strokeWidth: 0.7 },
        // NEW: bark texture — short hatch marks along trunk
        { d: 'M58,90 L62,88 M56,100 L60,98 M54,110 L58,108 M52,70 L56,68 M50,50 L54,48',
          type: 'stroke', zone: 'branch', strokeWidth: 0.7 },
        // NEW: tiny bud fills at twig extremities
        { d: 'M155,11 A2,2 0 1,1 153,11 Z M148,31 A2,2 0 1,1 146,31 Z M8,34 A2,2 0 1,1 6,34 Z M18,57 A2,2 0 1,1 16,57 Z',
          type: 'fill', zone: 'bud' },
      ],
      // NOTE: 4 shape paths + 3 new = 7 total. Restraint.
    },
  ],
}
```

### What Makes It Excellent

| Quality | How It's Achieved |
|---------|-------------------|
| **Organic taper** | Fill shapes with paired Q-curve edges converging to a point |
| **Natural asymmetry** | Left branch is shorter, thinner, at a different angle than right |
| **Economy** | 3 fills → 4 paths → 7 paths. Multi-segment M-move strokes pack 5 twigs into 1 path |
| **Progressive revelation** | Block = bare tree silhouette. Shape adds twigs. Detail adds bark and buds. Each level is a meaningful visual step |
| **Textural restraint** | Only 5 bark hatches. Enough to suggest, not enough to overwhelm |
| **Tiny accent fills** | 2px buds at twig tips add life without cluttering |
| **Clean zone separation** | 3 zones map cleanly to visual roles: wood, twigs, spring promise |

---

## 9. Process for Redesigning Existing Elements

When improving an element to meet this standard:

1. **Read the current definition** — note its id, category, viewBox, zones, and what each level contains.
2. **Identify violations** — check against the anti-patterns list. Common issues:
   - Strokes at block level (especially branches drawn as strokes)
   - Missing accumulation (detail level only has new paths, missing base fills)
   - L-line-only geometry (angular, mechanical shapes)
   - Single-blob fills (whole element as one path)
3. **Sketch the redesign mentally** — decide on zones, the visual silhouette at block, what shape adds, what detail adds.
4. **Write block level first** — get the silhouette fills right. These carry through ALL levels.
5. **Copy block into shape, add strokes** — structural features that define form.
6. **Copy shape into detail, add fine work** — texture, hatching, tiny accents.
7. **Validate** — run the checklist and Node.js script above.

### Replacement Approach

When replacing elements in JS files, use a Python script with brace-counting to find element boundaries by id — this is safer than line-number-based replacement. SVG path `d` attributes contain no `{` or `}` characters, so brace counting reliably finds object boundaries.

```python
def replace_element(filepath, element_id, new_text):
    """Find element by id using brace-counting, replace its full object."""
    with open(filepath, 'r') as f:
        lines = f.readlines()
    needle = f"id: '{element_id}'"
    start = None
    for i, line in enumerate(lines):
        if needle in line:
            # Walk backward to find opening {
            for j in range(i, -1, -1):
                if '{' in lines[j]:
                    start = j
                    break
            break
    if start is None:
        raise ValueError(f'{element_id} not found')
    depth, end = 0, start
    for i in range(start, len(lines)):
        depth += lines[i].count('{') - lines[i].count('}')
        if depth == 0:
            end = i
            break
    lines[start:end+1] = [new_text + '\n']
    with open(filepath, 'w') as f:
        f.writelines(lines)
```

---

## 10. Quick Reference Card

```
RULE                     | SUMMARY
-------------------------|------------------------------------------
Block = fills only       | No strokes. Solid silhouettes.
Accumulation             | block ⊂ shape ⊂ detail (verbatim copy)
Curves over lines        | Q-curves for everything organic
Tapered fills            | Branches/stems = fill shapes, not strokes
M-move efficiency        | Pack multiple strokes into one path
Natural asymmetry        | Vary sizes, angles, spacing
Economy                  | block 3–9, shape 5–11, detail 8–16 paths
Zone separation          | Each zone = one visual role
Valid references         | Every path.zone ∈ colorZones[].id
Implied texture          | Suggest, don't cover. 3–6 hatch marks.
Sparrow pattern (fauna)  | Separate fills: head, body, beak, wing, tail
Beak = species ID        | Separate fill, contrasting zone, correct proportion
ViewBox fit              | Fit content with 2–4px padding, no excess
```

---

## 11. Designing Elements for Expansion Packs

This section captures process lessons from the Kacho-e (花鳥画) pack development for AI-assisted element creation across future sessions and style pack domains.

### Reference Study First

Before designing any element in a new session:

1. **Read this guide** — especially §2 (Accumulation Rule), §5 (Designing by Subject), and §6 (Anti-Patterns).
2. **Study 2–3 successful elements** in the same category from `assets/`. Open the JS file and read the actual path data — understand the coordinate space, how many fills, which zones.
3. **Identify the structural pattern** — for birds, it's the sparrow pattern (separate head/body/beak/wing/tail fills). For flora, it's the cherry-branch pattern (tapered branch fills + separate blossom fills). For clusters, study lily-cluster.
4. **Follow the pattern**, don't reinvent. Base your new element's structure on the closest successful reference.

### Key Reference Elements by Category

| Category | Gold Standard | File | Key Insight |
|----------|--------------|------|-------------|
| Small birds | sparrow | fauna-elements.js:542 | 7 separate fills: head, body, wing, tail, beak, breast, legs |
| Wading birds | heron-standing | kacho-elements.js | 10 fills: S-neck body, head, long beak, crown, occipital plumes, wing, legs, hackle |
| Large-beak birds | kingfisher | kacho-elements.js | Oversized head (~equal to body), beak = 1× head diameter |
| Flora (single) | lotus | kacho-elements.js | Rising petals, seed pod center, round pad leaf, tapered stem |
| Flora (cluster) | lily-cluster | kacho-elements.js | Star blossom + 3 pads + bud, 8 block fills, 4 zones |
| Flora (branch) | cherry-branch | elements.js | Tapered branch fill + individual blossom fills |
| Landscape | hills | elements.js | Overlapping terrain silhouettes by depth |
| Structures | lantern | elements.js | Separate fills per structural section |

### The Blind SVG Challenge

Generating SVG path coordinates without visual rendering feedback is difficult. Expect 2–3 rounds of refinement. To mitigate:

1. **Base proportions on existing elements** — if the sparrow body is a ~35×30px oval, a warbler body should be similar scale. Don't guess at proportions.
2. **Use the viewBox as your canvas** — sketch mentally where major parts sit relative to viewBox center and edges before writing paths.
3. **Test with the element harness** — `dev/element-harness.html` renders elements in-browser for visual inspection. Use it between iterations.
4. **Proportions are the #1 issue** — beaks too short, wings too long, bodies too narrow. When the user says something is "off," it's almost always a proportion problem.

### Common Proportion Mistakes

| Issue | Symptom | Fix |
|-------|---------|-----|
| Wings too long | Bird looks like a plane | Scale wing x-extent to just past tail tip |
| Beak too short | Species unrecognizable | Reference the beak proportion table in §5 |
| Single body blob | Amorphous unidentifiable shape | Split into separate head + body + wing + tail fills |
| Empty viewBox space | Element looks tiny when placed | Shrink viewBox to fit content with 2–4px padding |
| Perfectly symmetric | Looks computer-generated | Vary petal sizes, wing angles, branch curves |

### Iterative Refinement Workflow

This is the workflow that produces good results:

1. **Draft v1** following a reference pattern — get the basic anatomy right with correct fill separation and zones
2. **Validate** — run the Node.js validation script (§7). Fix any accumulation or zone errors.
3. **User tests in browser** — the user places the element and evaluates visually
4. **Refine proportions** — adjust beak length, wing span, body shape based on feedback. This is surgical: change specific `d` values, update the same path at all 3 carve levels (verbatim accumulation!).
5. **Add species-specific features** — hackle plumage, occipital plumes, forked tail, etc.
6. **Re-validate and commit**

### Expansion Pack File Structure

Each expansion pack creates two files in `assets/`:

```
assets/
  {pack}-elements.js  — Element definitions (array: MOKURI_{PACK}_ELEMENTS)
  {pack}-pack.js       — Pack manifest (palettes, journeys, prompts, presets)
```

Both are wired into `index.html` via `<script>` tags and merged at startup. Elements use `pack: '{pack-id}'` to identify their source pack. See `kacho-elements.js` and `kacho-pack.js` as the template.

### Writing JS Element Files

**Use the `create` or `edit` tools** — never write element JS via PowerShell echo/redirection. Template literals, backticks, and `${}` in JavaScript cause escaping nightmares in shell commands. The file editing tools handle this correctly.
