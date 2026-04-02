# Element Image Generation Batch
## 9 Fauna Elements for Mokuri (Koi × 3, Rabbit × 3, Turtle × 3)

Read the attached **Mokuhanga Element Image Spec** completely before generating any images. Every rule in that spec applies to every image below. This message defines the specific subjects, poses, and color maps.

---

## Global Rules (Apply to ALL 9 images)

- **Format**: PNG, 1024×768, 8-bit RGB
- **Background**: Solid `#00FF00` filling the entire canvas
- **Every color region is PERFECTLY FLAT** — zero gradients, zero shading, zero texture, zero highlights
- **NO outlines whatsoever** — not around the subject, not between color regions, not even thin ones
- **Hard pixel edges** between all color regions — no anti-aliasing, no feathering, no blending
- **Color regions meet edge-to-edge** — the boundary between two colors IS the visual edge
- **Subject centered**, filling ~60% of canvas area
- **Style**: Traditional Japanese woodblock print (mokuhanga / kacho-e). Elegant, simplified, graceful. Think Hasui Kawase or Ohara Koson nature studies. NOT logo art, NOT anime, NOT sticker art.
- **Single subject per image** — no ground, no water, no background elements (only green)

---

## Koi (3 poses)

These are ornamental carp for kacho-e pond compositions. Smooth, flowing forms with decorative color patches.

**Color map (4 zones):**
| Zone | Hex | Where |
|------|-----|-------|
| body | `#F0E8D0` | Main body surface — the largest area |
| marking | `#D4622B` | Color patches on back, head cap — 2-3 distinct patches |
| fin | `#8A8A8A` | All fins and tail — flowing, translucent-looking shapes |
| accent | `#3A2A1A` | Eye, dorsal ridge, tail tip — small focal points |

### Koi 1 — Swimming (side view)
Gentle S-curve body, gliding left to right. Tail trailing softly. Pectoral fins slightly spread. Calm, unhurried movement. The classic koi profile.

### Koi 2 — Turning (three-quarter view)
Body curving in a C-shape as the fish turns. Head angled toward viewer. Tail sweeping around. Shows the rounded belly and dorsal markings. Dynamic but graceful.

### Koi 3 — Overhead (top-down view)
Viewed from directly above, as if looking into a pond. Symmetrical body, fins spread wide to the sides. Tail fan visible. Markings visible on the broad back. Serene, meditative pose.

---

## Rabbit (3 poses)

Japanese hare (usagi) in the tradition of rabbit-themed ukiyo-e. Round, soft body forms. Long ears are a key identifying feature — keep them as simple filled shapes.

**Color map (4 zones):**
| Zone | Hex | Where |
|------|-----|-------|
| body | `#E8DDD0` | Main fur body — warm off-white, the largest area |
| inner | `#D4A88C` | Inner ears, belly shadow area, paw pads — warm pink-tan |
| marking | `#A08870` | Back, ear tips, tail — warm brown-gray |
| accent | `#3A2A1A` | Eye, nose, whisker dots — tiny focal points |

### Rabbit 1 — Seated (profile)
Sitting upright on haunches, facing right. Ears tall and alert. Classic moon-rabbit silhouette. Round body, tucked front paws. Calm, watchful posture.

### Rabbit 2 — Resting (three-quarter)
Lying down with legs tucked under body, head turned slightly toward viewer. Ears relaxed, one slightly forward. Peaceful, settled pose. Compact rounded form.

### Rabbit 3 — Leaping
Mid-hop, body stretched with hind legs extended behind and front paws reaching forward. Ears streaming back. Energetic but still elegant — a flowing arc shape, not cartoonish bouncing.

---

## Turtle (3 poses)

Freshwater turtle (kame) — a symbol of longevity in Japanese art. Domed shell with visible plate pattern as distinct color regions (not drawn lines). Sturdy limbs, small head.

**Color map (4 zones):**
| Zone | Hex | Where |
|------|-----|-------|
| shell | `#5A6B4A` | Carapace (top shell) — muted olive-green, the dominant area |
| plate | `#8A9A6A` | Shell plate highlights — lighter green, 3-5 distinct plates on shell |
| skin | `#6B5B3A` | Head, legs, tail — warm brown |
| accent | `#2D2D2D` | Eye, claw tips, mouth line — dark focal points |

### Turtle 1 — Walking (side view)
Steady stride, one front leg forward, shell slightly tilted. Head extended and alert. Tail visible behind shell. Classic profile showing the full dome of the shell and sturdy legs.

### Turtle 2 — Swimming (three-quarter, from above)
Gliding through water with legs extended as flippers. Shell visible from a slightly elevated angle. Head reaching forward. Graceful, unhurried aquatic movement.

### Turtle 3 — Resting on rock (three-quarter)
Basking with legs slightly splayed, head raised and tilted up. Shell prominent and fully visible. Compact, grounded pose. The timeless "turtle sunning itself" composition.

---

## Delivery

Generate all 9 images as separate PNG files. Name them:
```
koi-swimming.png
koi-turning.png
koi-overhead.png
rabbit-seated.png
rabbit-resting.png
rabbit-leaping.png
turtle-walking.png
turtle-swimming.png
turtle-resting.png
```

After generating each image, verify against the spec checklist:
- [ ] #00FF00 background, no green in subject
- [ ] Exactly 4 flat colors matching the hex values above
- [ ] Zero gradients, shading, or texture within any color region
- [ ] Zero outlines of any kind
- [ ] Hard pixel edges between all color regions
- [ ] Smooth, elegant contours (mokuhanga aesthetic)
- [ ] Subject centered, ~60% of canvas
- [ ] 1024×768 PNG
