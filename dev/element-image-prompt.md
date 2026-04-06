# Mokuri Element SVG Generation Guide
## Recraft.ai — Fauna Elements

This guide defines how to generate SVG source files for Mokuri elements using Recraft.ai. The output SVGs are imported into the Element Forge which segments color zones and exports Mokuri-compatible elements.

---

## Recraft Settings (apply to every generation)

- **Output format**: SVG (vector)
- **Style**: Vector illustration → **Icon** or **Flat vector**
- **Canvas**: 1024×768 (landscape) or 768×1024 (portrait as appropriate)
- **Background**: solid flat color, clearly distinct from all subject colors (teal `#00AAAA` works well)
- **Prompt upsampling**: OFF

---

## Critical SVG Constraints

These are the most important rules. Violating them causes poor import quality.

### Shape Rules
- **Each color zone is ONE solid non-overlapping shape** — the body is a single filled path, not multiple layered shapes
- **Fins and tails are solid opaque fills** — NOT layered translucent strands, NOT feathered edges, NOT multiple overlapping shapes
- **Total path count: 4–10 shapes** — the entire subject should be expressible as a handful of bold fills
- **No decorative sub-division within a zone** — scale texture, fur texture, feather detail are NOT represented as separate shapes; they are added later by the user with carving tools
- **Non-overlapping** — shapes for different zones sit next to each other with hard edges; they do not overlap

### Style Rules
- **Stencil / mon / family crest aesthetic** — think Japanese kamon (family crest) silhouettes, not illustration
- **Bold, simplified forms** — exaggerate proportions for graphic impact; eliminate anatomical complexity
- **Flat opaque fills only** — no gradients, no shading, no highlights, no transparency
- **No outlines** — color zone boundaries ARE the visual edges; no drawn outlines around or between shapes
- **Mokuhanga kacho-e spirit** — Ohara Koson, Kōno Bairei nature studies; elegant and reduced

### What to AVOID
- ❌ Fins as overlapping strands or rays (common Recraft interpretation — explicitly exclude)
- ❌ Body fur as textured or gradient fill
- ❌ Sub-shapes within a zone (e.g., individual scales as separate paths)
- ❌ Drop shadows, glows, or any layer effects
- ❌ More than ~10 total shapes in the composition

---

## Color Zones

Each subject uses 4 named zones. Hex values are guidance — Recraft approximates colors, which is fine; the forge handles color detection automatically.

### Koi (ornamental carp)
| Zone | Hex | Shape description |
|------|-----|-------------------|
| body | `#F0E8D0` | ONE solid C-curve or S-curve body fill — the largest shape |
| marking | `#D4622B` | 1–2 solid orange patches on head and back — distinct non-overlapping blobs |
| fin | `#8A8A8A` | All fins and tail as SOLID fills — dorsal fin = 1 shape, tail = 1 shape, pectoral = 1 shape |
| accent | `#3A2A1A` | Single dot for eye only |

### Rabbit (usagi / Japanese hare)
| Zone | Hex | Shape description |
|------|-----|-------------------|
| body | `#E8DDD0` | ONE solid body+head fill — the largest shape |
| inner | `#D4A88C` | Inner ear fills (1–2 shapes), small belly patch |
| marking | `#A08870` | Back/rump marking (1 shape), ear tips |
| accent | `#3A2A1A` | Single dot for eye only |

### Turtle (kame / freshwater turtle)
| Zone | Hex | Shape description |
|------|-----|-------------------|
| shell | `#5A6B4A` | ONE solid oval shell fill — dominant shape |
| plate | `#8A9A6A` | 3–5 distinct non-overlapping plate highlights on shell surface |
| skin | `#6B5B3A` | Head (1 shape), each visible leg (1 shape each), tail |
| accent | `#2D2D2D` | Single dot for eye only |

---

## Poses

### Koi — 3 poses

**Koi 1 — Swimming (side view)**
Gentle S-curve body gliding left to right. 1 orange head cap, 1 orange back patch. Dorsal fin pointing up (1 solid triangle shape). Fan tail (1 solid fan shape). 2 small pectoral fins (each 1 solid teardrop shape). Classic koi profile, ~8 total shapes.

**Koi 2 — Turning (three-quarter view)**
C-curve body as fish turns, head angled toward viewer. 1 large orange head marking. Tail sweeping to one side. Fins foreshortened. ~7 total shapes.

**Koi 3 — Overhead (top-down view)**
Symmetrical body viewed from above. Fins spread wide as simple solid shapes left and right. Tail fan at one end. Orange marking on broad back. ~8 total shapes.

---

### Rabbit — 3 poses

**Rabbit 1 — Seated (profile)**
Upright on haunches, facing right. 2 tall ears (outer = body color, inner = pink fill). Round body. Tucked front paws as a single shape. Small tail. ~7 total shapes.

**Rabbit 2 — Resting (three-quarter)**
Lying down, legs tucked under, head turned slightly toward viewer. 2 relaxed ears. Compact oval body form. ~6 total shapes.

**Rabbit 3 — Leaping**
Body stretched in arc, hind legs back, front paws forward. Ears streaming behind as 2 elongated shapes. ~7 total shapes.

---

### Turtle — 3 poses

**Turtle 1 — Walking (side view)**
Shell slightly tilted. Head extended (1 teardrop shape). 2 visible legs (each 1 stubby oval). Tail (1 small shape). 3–4 plate highlights on shell. ~9 total shapes.

**Turtle 2 — Swimming (three-quarter, from above)**
Shell seen from slightly above. 4 legs extended as simple paddle shapes. Head forward. ~9 total shapes.

**Turtle 3 — Resting (three-quarter)**
Legs splayed, head raised. Shell prominent. ~9 total shapes.

---

## Short Prompt Template

Use this pattern for each image. Keep it concise — Recraft responds better to constraint-first short prompts.

```
Japanese woodblock print [SUBJECT], [POSE DESCRIPTION]. Solid teal background.
Exactly [N] flat opaque non-overlapping shapes: [zone descriptions].
STENCIL STYLE — each zone is ONE solid fill, fins are solid shapes not strands,
no overlapping paths, no gradients, no outlines. Kamon / mon aesthetic.
Bold simplified forms. Mokuhanga kacho-e.
```

**Example — Koi Swimming:**
> Japanese woodblock print koi fish, S-curve swimming left to right. Solid teal background. 8 flat opaque shapes: cream body (1 shape), orange head cap + back patch (2 shapes), gray dorsal fin + tail fan + 2 pectoral fins (4 shapes), dark eye dot. STENCIL STYLE — each zone is ONE solid fill, fins are solid not stranded, no overlapping, no gradients, no outlines. Kamon / mon aesthetic. Mokuhanga kacho-e.

---

## Import Checklist (verify before importing to forge)

- [ ] SVG output (not PNG)
- [ ] Subject has 4–10 total path shapes
- [ ] Each zone is a single non-overlapping fill
- [ ] Fins/tail are solid opaque shapes (not strands)
- [ ] No gradient fills, no semi-transparency
- [ ] Background is a solid flat color visually distinct from subject
- [ ] Subject centered, ~60% of canvas area
