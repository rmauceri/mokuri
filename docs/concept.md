# Mokuri — Japanese Woodblock Print Creator

> A calm, creative web app for composing beautiful images in the style of Japanese woodblock prints (mokuhanga). The artist chooses from curated elements, colors from traditional palettes, "carves" the design, and creates prints that can be shared or printed.

---

## Vision

The magic of mokuhanga (木版画) isn't just the visual output — it's the **process**: deliberate, layered, subtractive. You carve away what you *don't* want. Each color is a separate block. A limited palette forces creative choices. And there's that satisfying reveal moment when the paper lifts from the block.

Mokuri translates this craft into a digital experience that is **accessible, expressive, and meditative**. It is not a general-purpose drawing app. It is a composition tool built around the constraints and vocabulary of woodblock printing — and those constraints are what make it creatively rewarding.

---

## Core Concept: Composition + Craft, Not Free Drawing

The artist works by **arranging a scene from a curated vocabulary of forms**, the way a printmaker works within the constraints of what they can carve. That constraint is what makes it creative and calming rather than intimidating.

The creative decisions ARE the art — what to include, where to place it, what colors, what to leave as empty space (ma, 間). The tool handles the craft of making it look like a woodblock print.

---

## Workflow — Mirroring Real Printmaking

### 1. Choose Your Paper
- Size and orientation (portrait, landscape, square)
- Paper texture: smooth hosho, fibrous kozo, warm torinoko
- Sets the mood before a single element is placed

### 2. Compose
- Place elements from the library onto the scene
- Drag, scale, rotate, layer
- Elements are designed in the woodblock aesthetic — bold outlines, flat interior areas ready for color
- Optional depth layers (foreground / middle / background) to guide pleasing compositions

### 3. Color
- Choose from historically-inspired palettes
- Assign colors to element regions
- Each color is conceptually a separate block/layer
- Changing the palette recolors the whole composition — instant mood shift

### 4. Carve (Detail & Refinement)
- Elements arrive as "uncarved blocks" — solid silhouettes; tap/click to "carve" them, revealing detailed interior lines
- Eraser-as-chisel: carve away parts of placed elements, creating custom shapes; edges have a slightly rough, carved quality
- Detail stamps: smaller decorative elements (texture patterns, hatching, dots) you "carve into" larger areas — like adding wood grain to a tree trunk or wave foam texture

### 5. Print — The Payoff
A satisfying moment where the composition transforms into a print:
- Slight **ink density variation** across large filled areas (not perfectly uniform, like real ink on wood)
- Subtle **wood grain texture** bleeding through (direction varies per "block")
- **Paper texture** overlay — fiber visible in light areas
- Tiny **misregistration** between color layers (1-2px shifts) for authenticity
- Colors slightly **muted/warmed** as if absorbed into paper
- Optional **bokashi** (gradient fade) on selected regions
- Perhaps a brief animation of the baren pressing down

### 6. Share
- Export as high-res PNG for sharing or physical printing
- Export as SVG for vector use
- Shareable URL (composition encoded in hash) — someone opens the link and sees your print
- Save to device gallery

---

## Element Library — The Heart of It

Elements need to be **beautiful enough to compose something expressive** but **constrained enough to feel like woodblock**. Each element is an SVG with defined regions — the **outline (key block)** and **fill zones** that accept color independently. One wave element can look completely different depending on the palette chosen.

### Categories

| Category | Elements |
|----------|----------|
| **Landscape** | Mountains (distant/near), waves (Hokusai-style, gentle, crashing), hills, fields |
| **Sky & Atmosphere** | Clouds, mist, rain, snow, moon phases, sun, stars, lightning |
| **Trees & Plants** | Pine, bamboo, cherry blossom branches, willow, maple, lotus, iris, chrysanthemum, wisteria |
| **Water** | Rivers, waterfalls, still ponds, ocean |
| **Structures** | Torii gate, arched bridge, pagoda, thatched roof, stone lantern, boat, fence |
| **Fauna** | Crane, koi, rabbit, cat, deer, dragonfly, butterfly, songbird |
| **Figures** | Simplified human forms — traveler, geisha silhouette, fisherman, monk |
| **Decorative** | Borders, cartouche frames (for text/titles), seal/stamp marks (hanko) |

A focused set of **40–50 great elements** is better than 200 mediocre ones. Quality and expressiveness over quantity.

---

## Traditional Color Palettes

Real mokuhanga used mineral and plant pigments. Named palettes evoke mood. Each palette provides 5–7 colors, matching how real printmakers worked with limited blocks.

| Palette | Mood | Colors |
|---------|------|--------|
| **Sumi** (墨) | Monochrome ink wash | 5 values from deep black to pale grey |
| **Edo** | Classic ukiyo-e | Indigo, vermillion, ochre, soft green, warm black |
| **Hiroshige** | Rain & mist | Prussian blue gradients, grey, muted rose, pale green |
| **Hokusai** | Bold & iconic | Deep indigo, sky blue, cream, rust, charcoal |
| **Sakura** | Spring | Pink, pale green, warm white, soft brown, blush |
| **Aki** (秋) | Autumn | Maple red, gold, burnt orange, deep green, umber |
| **Yoru** (夜) | Night | Deep navy, silver, moonlight yellow, shadow purple |

---

## UX & Mood

The interface itself should feel like a quiet creative space:

- **Washi paper texture** as the app background
- **Minimal UI** — lots of breathing room, inspired by Japanese design's use of empty space (ma)
- **Slow transitions** — panels slide gently, nothing snaps
- **Optional ambient sound** — soft rain, distant wind chime, brush on wood (toggleable, off by default)
- **No undo anxiety** — generous undo stack, non-destructive editing, auto-save
- Tool palette could evoke a **woodworker's bench** — warm wood, organized tools
- Typography: clean, with selective use of Japanese characters for aesthetic and cultural context

---

## Technical Direction

### Architecture
- **SVG** for the element library and composition (scalable, crisp, small file size, color-swappable via CSS/JS)
- **Canvas** overlay for print texture effects (grain, paper, ink variation)
- **Single HTML file** is achievable if elements are inline SVG (verbose but works), or a small handful of files
- **LocalStorage** for saving works in progress
- **Canvas.toBlob()** for PNG export; serialize SVG for vector export
- Touch-friendly for iPad/phone — this is a natural tablet app
- No server needed — everything client-side
- Deployable on GitHub Pages

### PWA
- Installable as a standalone app on mobile
- Offline-capable via service worker
- Full-screen immersive experience

---

## Open Questions

Things worth exploring before implementation:

- **Element count**: How many is enough to feel expressive but not overwhelming? Start with a focused MVP set?
- **Depth layers**: Should scenes enforce foreground/middle/background layering, or leave it freeform? Auto-layering could help beginners compose pleasing scenes
- **Guided experiences**: "Create a moonlit mountain scene" — gentle creative prompts with suggested elements and palettes for when you don't know where to start
- **Seasonal rotation**: Traditional prints were deeply seasonal. The app could surface seasonally-appropriate elements and palettes
- **Gallery / community**: Even without a server, compositions could be encoded as shareable URL hashes
- **Element creation**: Could advanced users contribute or modify elements?
- **Text / poetry**: Integration of haiku or calligraphy elements — many traditional prints included poetry
- **Animation**: Subtle animated prints (falling petals, flowing water) as an optional mode

---

## What Makes This Different

This is not another drawing app. The closest tools (Canva, etc.) don't capture the *craft* feeling. Mokuri is differentiated by:

1. **Constraint as creativity** — a curated vocabulary forces meaningful choices
2. **Process as experience** — the workflow mirrors real printmaking, not digital illustration
3. **The print effect** — the final transformation from clean digital to textured print is the payoff
4. **Calm by design** — every interaction is deliberate, nothing is urgent
5. **Cultural depth** — rooted in a real artistic tradition with centuries of history
6. **Accessibility** — you don't need to know how to draw to create something beautiful
