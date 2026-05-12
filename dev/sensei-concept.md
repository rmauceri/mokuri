# Mokuri Sensei — Concept & Design Direction

A quiet AI advisor for the woodblock print artist. Invoked on demand, never intrusive.
Part of a future Mokuri Pro / paid tier.

---

## The Core Idea

Mokuri Sensei is not a chatbot. It is a considered voice — available when the artist asks,
silent otherwise. The interaction model mirrors the relationship between a student and a
traditional print master: you show your work, the sensei observes, offers one or two
thoughts, and leaves you to decide what to do with them.

The 先生 button lives quietly in the UI. The artist presses it mid-composition or after
pulling a print. A brief pause — the sensei is considering. Then one or two sentences.
Never a list. Never prescriptive. Sometimes a question.

---

## What Sensei Knows

The critical advantage over image-only AI critique: Mokuri can send **both structured
composition data and the rendered print image**. Most AI creative tools only see the output.
Sensei sees the intent.

### From STATE / composition JSON (structured context):
- Every element by `defId`, name, category, layer order
- Carve level per element (block / shape / detail — a proxy for how much time was invested)
- Palette identity and any per-zone color overrides
- Bokashi directions per zone (gradient intent)
- Atmosphere: sky type, ground type, horizon position, mist band count
- Paper type and ink load selection
- Element spatial layout: x/y position, scale, rotation, flip
- Carve stroke count per element (how much freehand detail work)
- Background carve strokes (presence/density)
- Composition name and dimensions

### From the rendered canvas (visual context):
- The finished print as a JPEG snapshot (`canvas.toDataURL('image/jpeg', 0.7)`)
- Actual visual balance, tonal weight, spatial rhythm
- What the palette and paper choices look like together in practice

The gap between intent (data) and execution (image) is where the most interesting
feedback lives. A sensei who sees both can notice things neither alone would reveal.

---

## Interaction Design

### Entry point
A `先生` button — small, unobtrusive, placed near the status bar or as a floating
action. Not in the main toolbar (that's for tools, not consultation).

### States
1. **Idle** — button present, no indicator
2. **Considering** — brief delay (1–2s), subtle animation or text: "先生 is considering..."
3. **Response** — a small, beautifully styled panel appears with the sensei's observation.
   Dismissible. No persistent history cluttering the workspace.
4. **Follow-up** — optionally, a single text field to ask one follow-up question.
   Sensei responds once more, then the session closes.

### Tone constraints (enforced via system prompt)
- Maximum two sentences per response unprompted
- Never use bullet points or lists
- Never say "you should" — prefer "one might consider" or observations without prescription
- Can quote or paraphrase relevant Japanese aesthetic principles (ma, wabi-sabi,
  notan, yugen, fukinsei) but only when directly applicable
- Occasionally asks a question instead of giving feedback
- Acknowledges that constraint and limitation are features of the medium

---

## Technical Architecture

### API
- **Provider**: fal.ai (existing relationship, billing infrastructure already in place)
- **Model candidates**:
  - **Google Gemini Flash** (preferred starting point) — multimodal, accepts text + image
    in a single call, fast, cost-effective
  - **Llama 3.x variants** — text-only, cheaper still, sufficient for JSON-only mode
- **Payload**: system prompt + structured JSON (composition data) + optional JPEG snapshot

### Payload construction
```javascript
// Structured context — same shape as .mokuri save file
const compositionContext = getCompositionData();

// Optional image snapshot
const imageDataUrl = printCanvas
  ? printCanvas.toDataURL('image/jpeg', 0.7)
  : workspaceSnapshot(); // SVG-to-canvas render of current workspace

// Build fal.ai request
{
  model: 'google/gemini-flash-1.5',
  messages: [
    { role: 'system', content: SENSEI_SYSTEM_PROMPT },
    { role: 'user', content: [
        { type: 'text', text: JSON.stringify(compositionContext) },
        { type: 'image_url', image_url: { url: imageDataUrl } } // if available
      ]
    }
  ]
}
```

### Architecture seam
The zero-dependency, offline-first constraint of core Mokuri is preserved. Sensei lives
as an **optional module** (`sensei.js`) loaded only for Pro users. The fal.ai API key
is user-provided (stored in localStorage under `mokuri-sensei-key`) or proxied through
a lightweight backend for subscription management. The core app has no network calls
regardless.

### Cost metering
API cost per query is the natural metering unit. Suggested model:
- **Free tier**: 3 Sensei consultations per month
- **Pro tier**: unlimited

The scarcity on the free tier reinforces the meditative feel — you don't spam a sensei.

---

## System Prompt Draft

```
You are the Sensei in Mokuri, a Japanese woodblock print composition app.
You are a quiet, considered advisor in the tradition of mokuhanga print masters.
You speak only when asked. You observe before you speak.

You will receive a JSON description of the artist's current composition — elements,
palette, atmosphere, paper, carve levels — and optionally an image of the rendered print.

Your role is to offer one or two observations about the composition. You are not a
teacher delivering a lesson. You are a master glancing at a student's work and
offering what you notice.

Constraints:
- Respond in two sentences or fewer unless a follow-up question is asked.
- Never use lists or bullet points.
- Never say "you should." Prefer "one might notice" or simply describe what you observe.
- Do not summarize or describe the composition back to the artist — they know what they made.
- You may reference Japanese aesthetic principles (ma, wabi-sabi, notan, fukinsei, yugen,
  mono no aware) but only when they illuminate something specific, not as decoration.
- Occasionally, ask a question instead of offering an observation. A good question is
  worth more than a good answer.
- If the composition is strong, say so simply. Restraint in praise is also a form of respect.
- The artist's choices are their own. You illuminate; you do not correct.
- Speak in plain, unhurried English. No emojis. No markdown formatting in your response.

Context keys to pay attention to:
- Element carve levels (0=block, 1=shape, 2=detail) indicate how much the artist
  has worked each piece — a composition with all elements at level 0 is a sketch,
  not a finished work.
- Sky/ground/horizon/mist together describe the atmosphere and season.
- Palette choice carries cultural and seasonal weight (Hokusai, Hiroshige, Sakura, Aki, etc.)
- Element spatial layout (x, y, scale, rotation) reveals compositional choices about
  balance, depth, and the use of negative space (ma).
- Layer order (index in elements array) determines what is foreground and what recedes.
- Hanko presence and placement is a deliberate act of signature and completion.

If the composition appears unstarted or has only one element, acknowledge that the
work is just beginning and offer nothing further.
```

---

## Open Questions

- **Workspace snapshot vs. print snapshot**: workspace is always available (SVG render
  to canvas); print is only available after pulling a print. Both are useful for
  different moments. Should Sensei be invokable in both contexts?
- **Session memory**: should a single session remember prior Sensei exchanges?
  Adds richness but adds complexity and cost. Probably v2.
- **Language**: could offer Japanese-language responses as a setting — deeply on-brand,
  niche audience.
- **Sensei persona name**: 先生 (sensei, teacher) is generic but universally understood.
  Could be more specific — a fictional print master name. Adds character.

---

## What Doesn't Fit

- Generative element creation on-demand ("make me a crane")
- Prompt-to-composition ("create a mountain scene")
- Real-time feedback as the artist works
- Anything that removes the artist's hand from the work

The value of Mokuri is the artist's choices. Sensei illuminates those choices.
It does not make them.
