# Carving Calm: How I Built a Japanese Woodblock Print Maker

*An introduction to Mokuri Studio — a free, offline-capable web app that brings the meditative craft of mokuhanga to anyone with a browser.*

<!-- VISUAL: Hero image — your single best finished Mokuri print.
     Aim for something atmospheric with strong composition: mountain scene, crane, or
     night/dusk palette. Landscape orientation preferred. This is the reader's first
     impression; it should be beautiful enough to make them want to know how it was made.
     Caption: "Made with Mokuri Studio · mokuri.art" -->

---

There is a moment in traditional Japanese woodblock printing— mokuhanga — that I keep returning to. You have spent hours carving a block of cherry wood. You lay paper over it, press a bamboo baren across the surface in slow circles, and then you lift.

The print reveals itself.

Whatever you carved away is gone — that negative space is now light, paper, breath. Whatever you left becomes ink, color, presence. It is a medium of subtraction. Of deliberate removal. And there is something about that constraint — that you can only take away, never add back — that produces a particular quality of attention.

That moment is what I wanted to build.

---

## Why I Made This

I spend my career creating software. Like most people who build software, I spend a lot of time in front of screens doing things that feel urgent. Move fast, ship fast, iterate fast. Creative tools in this world tend to reflect those values. Infinite canvas. Infinite undo. Infinite options. The blank page stares back and the tyranny of choice begins.

I wanted something different. Something calm.

I have long admired the great prints of the Edo period — Hokusai's waves, Hiroshige's rain-blurred landscapes, the quiet intensity of a Utamaro figure study. What struck me wasn't just the beauty of the images. It was the *constraint* embedded in the process. The woodblock printmaker works within a vocabulary: the blocks they have prepared, the pigments they have mixed, the paper under their hand. There is no going back once ink touches wood. Each decision is real.

I started wondering: what would it feel like to have a digital creative tool with that same quality? Not a simulation of mokuhanga exactly — but something that borrowed its spirit. Deliberate. Constrained. Calm.

Mokuri Studio is my answer to that question — and honestly, a personal learning journey as much as a product. I built it in partnership with AI, pair-programming my way through canvas rendering, SVG path math, ink bleed algos, and procedural audio. That collaboration is part of what made it possible. But the goal, always, was to create something that feels unmistakably *human* — a tool for human attention, human choice, and human expression.

---

## What Mokuri Is (and Isn't)

<!-- VISUAL: Screenshot of the Mokuri workspace in carve mode — wood-block surface visible,
     an element selected with handles, Carving Workbench panel open on the right.
     Shows the "working with a physical block" aesthetic before a single word of explanation.
     Caption: "The Mokuri workspace in carve mode — warm cherry wood, real tools." -->

Mokuri Studio is a woodblock print composer for everyone.It's a free web app, it runs entirely offline, and you don't need to know how to draw to use it.

That last point matters. Mokuri is not a drawing app. You won't find a blank canvas and a brush tool waiting for you. Instead, you work with a curated library of woodblock-style elements — mountains, waves, cranes, pine boughs, lanterns, human figures, architectural details — each one designed as a hand-craftable SVG form with the aesthetic sensibility of Edo-period printmaking.

You compose by placing and arranging. You carve by deciding how much detail to reveal. You ink by choosing from historically-inspired palettes and assigning colors to the zones of each element. And then you print — watching the composition transform into a textured, imperfect, beautiful thing that looks like it came off a real block.

The constraint is the point. When you can only choose from what the vocabulary offers, the creative decisions that remain — *what* to include, *where* to place it, *what* colors to choose, *how much* to leave as empty space — those become the art.

---

## The Four Phases of Making a Print

Working in Mokuri Studio follows the same rhythm as the traditional craft.

**Compose (景)** — You choose elements and arrange them on the paper. Mountains in the distance, a pine bough reaching into the frame, a solitary figure on a path. The element library spans landscape, flora, fauna, figures, and objects. Drag, scale, rotate, layer. The composition takes shape.

**Carve (彫)** — Every element begins as an uncarved block — a solid silhouette. You carve it by cycling through levels of detail, revealing outlines, internal structure, hatching, and texture. With the gouge tools you can carve freehand, adding your own marks to the block's surface. The process feels physical, even through a screen.

**Ink (墨)** — Color from traditional palettes: the indigo and rust of Edo, the Prussian blue of Hiroshige's rain, the maple reds of an autumn palette. Each element has zones — body, accent, detail — that accept color independently. A crane can have one wing in shadow. A wave can be inked in three different blues. Bokashi, the gradient fade beloved by Japanese printmakers, is a single click.

**Print (摺)** — Press the baren. The paper lays over the block. The image comes alive with washi fiber texture, ink variation, the subtle misregistration of color layers, the warmth of pigment absorbed into paper. This is the moment the digital becomes something that looks real, handmade, present.

<!-- VISUAL: 2×2 image grid — the SAME composition shown at each phase.
     Top-left: Compose — flat silhouettes arranged on paper (ink mode, uncarved).
     Top-right: Carve — same scene on the wood-block surface, elements carved to detail level.
     Bottom-left: Ink — composition with palette colors applied, bokashi visible.
     Bottom-right: Print — final rendered output with washi texture, ink variation.
     This sequence is the single most powerful thing you can show in this post.
     Caption: "One composition, four phases: Compose · Carve · Ink · Print" -->

Mokuri is meant to be immersive and meditative. Audio is part of the experience. Quietly running beneath all of this is a generative ambient soundscape: Japanese pentatonic chimes, a distant temple bell, the texture of wind. It adjusts to the mood of your scene — the sound of a dawn composition differs from a night one. Carving tools make satisfying gouge sounds. The baren has its moment. None of it is recorded audio; it's all synthesized in the browser, procedural and alive. You can turn it off. Many people leave it on.

---

## Rooted in a Real Tradition

Mokuhanga has a 400-year history in Japan. The Edo period (1603–1868) produced some of the most recognized art in human history — Hokusai's *The Great Wave*, Hiroshige's *One Hundred Famous Views of Edo*, the actor portraits of Sharaku. These weren't fine-art objects for the wealthy. They were popular media, sold at markets, collected by ordinary people. A good print cost about as much as a bowl of soba.

<!-- VISUAL: A public-domain Hiroshige or Hokusai print — "Sudden Shower over Shin-Ohashi"
     (Hiroshige, 1857) or "The Great Wave off Kanagawa" (Hokusai, c.1831) are both strong.
     Both are in the public domain and freely available from the MET or Wikimedia Commons.
     Place this image here to give readers the cultural reference point before your next paragraph.
     Caption: "Sudden Shower over Shin-Ohashi, Hiroshige, 1857 — the mood Mokuri aspires to." -->

That accessibility was part of the art form's power. The constraints of the process — limited colors, bold forms, the reductive vocabulary of the carved block — created an aesthetic that was democratic and deeply human. Mokuri tries to inherit that spirit.

The name comes from 木 (*moku*, wood) and 栗 (*kuri*, chestnut — the traditional wood of the block). The brand mark is 墨, the kanji for ink and for painting itself. Fitting, I think.

---

## Why This Matters Right Now

We are swimming in generated imagery. Diffusion models can produce a thousand images in the time it used to take a master printmaker to prepare a single block. The images are technically astonishing and aesthetically... a little exhausting. Everything is possible. Nothing costs anything.

Mokuri is a small argument for the other direction.

A print made in Mokuri takes time. You have to choose. The palette limits you. The vocabulary of elements limits you. The carving process requires you to decide what to leave in and what to take away. And at the end, you have something that is genuinely *yours* — assembled, considered, composed by you.

There is growing evidence that slow, deliberate creative work has real value for wellbeing. Crafts — pottery, weaving, woodworking, bookbinding — have seen enormous resurgence precisely because people need activities that demand presence without demanding performance. Mokuri is trying to be that for digital making.

No account required. No subscription. No AI prompting. No social feed. Just paper, ink, and the block.

---

## An Invitation

Mokuri runs entirely in your browser, on any device, with no installation. It works offline. There is nothing to sign up for.

You can try it at **[mokuri.art](https://mokuri.art)**.

<!-- VISUAL: A second finished Mokuri print — different palette and mood from the hero.
     If the hero is atmospheric/dark (night, Yoru palette), use something warm and seasonal here
     (Sakura, Aki). If the hero is landscape, try something with a figure or closer subject.
     Showing range reassures readers that the tool isn't one-trick.
     Caption: "Another composition — same tool, different season." -->

Start with a landscape preset or a blank piece of paper.Place a mountain. Add a pine. Carve the mountain into its ridgeline shape. Choose the Hiroshige palette. Pull a print.

It takes about five minutes to make your first composition. It takes considerably longer to stop.

That, in the end, is what I was trying to build: something that earns a few quiet minutes of your attention and gives them back to you as something beautiful.

I built Mokuri for myself first — as a way to slow down, to learn, to make something with aesthetic intention rather than commercial urgency. But creative tools only come fully alive in other people's hands. If you try it, I'd genuinely love to hear what you think: what resonates, what feels missing, what you'd want to make that you can't yet. This is a beginning, not a finished thing.

You can find me here on Medium or reach out through the [GitHub repository](https://github.com/rmauceri/mokuri). Every reaction, idea, and piece of feedback helps shape where this goes next.

---

*Mokuri is free and open source. Built with zero dependencies, no server, no build step — just HTML, CSS, and JavaScript, the same way the web started. The source is on [GitHub](https://github.com/rmauceri/mokuri).*

---

## Visual Production Notes

| # | Placement | Content | Size | Format | Caption |
|---|-----------|---------|------|--------|---------|
| 1 | Before opening paragraph (Hero) | Best finished Mokuri print — atmospheric, strong composition (mountain/crane/night scene). Landscape orientation. | 1400 × 933px | PNG | "Made with Mokuri Studio · mokuri.art" |
| 2 | Before "What Mokuri Is" | Screenshot of workspace in carve mode — wood-block surface, element selected with handles, Carving Workbench panel open. | 1200 × 800px | PNG | "The Mokuri workspace in carve mode — warm cherry wood, real tools." |
| 3 | After Print (摺) paragraph | **Animated GIF** — baren press and print reveal animation. 3–5 seconds, loops. See notes below. | 800 × 534px | GIF | *(no caption needed — let it speak)* |
| 4 | After four phases, before audio paragraph | 2×2 composite grid — same composition at each phase: Compose / Carve / Ink / Print. Single square image. | 1200 × 1200px (quadrants 600×600) | PNG | "One composition, four phases: Compose · Carve · Ink · Print" |
| 5 | In "Rooted in a Real Tradition" | Public-domain Hiroshige print — "Sudden Shower over Shin-Ohashi" (1857) or Hokusai's Great Wave (c.1831). Source: MET Open Access (CC0). | 1200 × 800px | JPG 85% | "Sudden Shower over Shin-Ohashi, Hiroshige, 1857 — the mood Mokuri aspires to." |
| 6 | In "An Invitation" | Second finished Mokuri print — different palette/mood from hero. If hero is dark/night, use warm seasonal (Sakura, Aki). Shows range. | 1200 × 800px | PNG | "Another composition — same tool, different season." |

### Animated GIF notes (Visual #3)

- **Capture**: Screen recorder (Windows Game Bar `Win+G`, or OBS) — record the print pull animation at full quality
- **Duration**: 3–5 seconds, clean loop
- **Frame rate**: 15fps is sufficient; smoother than it sounds and much lighter than 30fps
- **File size target**: Under 5MB (Medium limit is 25MB but large GIFs stall on mobile)
- **Tools**: [Gifski](https://gif.ski/) for best compression quality; [ScreenToGif](https://www.screentogif.com/) (free, Windows) for easy capture+export in one step
- **Why it works**: The reveal loop is hypnotic — the transformation keeps happening. One good GIF here outweighs all the static images combined.

### General image notes

- All images: upload at full size — Medium handles responsive resizing
- PNG for all Mokuri screenshots and prints (preserves washi texture detail)
- JPG at 85% for the Hiroshige only (already photographic, smaller file)
- 2×2 grid: use a thin `#e8dcc8` (warm paper tone) gap between quadrants — avoids harsh grid lines
- Medium supports animated GIF natively; GIFs autoplay inline, no click required
