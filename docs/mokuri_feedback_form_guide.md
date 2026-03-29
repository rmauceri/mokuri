# Mokuri Studio — Feedback Form (Google Forms) Guide

## Overview

This document provides ready-to-use copy and UX guidance for creating a
simple, on-brand feedback form for Mokuri Studio using Google Forms.

---

## Goals

- Keep the form lightweight and easy to complete
- Encourage honest, thoughtful responses
- Capture both bugs and general feedback
- Maintain Mokuri's calm, minimal aesthetic
- Collect app context automatically via URL pre-fill parameters

---

## Form Copy (Ready to Paste)

### Title

Mokuri Studio Feedback

---

### Description

Thank you for taking a moment to share your thoughts.

Mokuri is still evolving, and your feedback helps shape what it becomes.

---

### Section 1: What happened

### Question 1 — Feeling (Optional)

**Type:** Multiple choice (single row)\
**Title:** How's your experience so far?

- 😊 Enjoying it
- 🙂 It's okay
- 😐 Needs work

*Gives a trackable sentiment metric over time. Optional so it doesn't
feel like a gate. Placed first to set a reflective tone.*

---

### Question 2 — Category (Required)

**Type:** Multiple choice\
**Title:** What would you like to share?

- I have feedback or ideas
- I found a bug
- Something confused me
- Just general thoughts

*Ideas first — bug reporters are motivated regardless of order; leading
with the positive/creative option signals you want ideas, not just
complaints.*

---

### Question 3 — Details (Required)

**Type:** Paragraph\
**Title:** Tell me more

**Description:** What were you trying to do? What happened? Anything you
noticed — big or small.

---

### Section 2: Context

*Add a section break here. This makes the form feel lighter — "What
happened" is done, now optional context.*

### Question 4 — Where

**Type:** Multiple choice\
**Title:** Where were you when this happened?

- Composing a scene
- Adding elements
- Changing colors or palette
- Carving details
- Printing
- Viewing the Gallery
- Using the Workshop
- First-time experience (guided tour)
- Just exploring
- Not sure

---

### Question 5 — Device

**Type:** Multiple choice\
**Title:** What device were you using?

- iPad with Apple Pencil
- iPad (touch only)
- iPhone
- Windows tablet / Surface with pen
- Desktop (Mac or Windows)
- Android phone or tablet
- Not sure

*Pen vs. touch is a major UX difference in a carving/drawing app.*

---

### Question 6 — Screenshot (Optional)

**Type:** Paragraph\
**Title:** Screenshot or link (optional)

**Description:** If you have a screenshot, you can paste a link here
(Dropbox, Google Drive, etc.)

---

### Question 7 — Follow-up (Optional)

**Type:** Multiple choice\
**Title:** Can I follow up with you if needed?

- Yes
- No

---

### Question 8 — Email (Conditional on Q7 = Yes)

**Type:** Short answer\
**Title:** Your email

**Description:** Only if you're open to a quick follow-up.

---

### Question 9 — App Context (Pre-filled, read-only)

**Type:** Short answer\
**Title:** App context (auto-filled)

**Description:** Technical details sent automatically — no need to edit.

*This field is pre-filled via URL parameters when the feedback link is
opened from within Mokuri. The user can see it (transparency) but
doesn't need to touch it. See "URL Pre-fill Parameters" section below.*

---

### Submit Button

Change label to: **Share feedback**

---

### Confirmation Message

Thank you — this helps make Mokuri better.

I read every response.

---

## URL Pre-fill Parameters

When Mokuri opens the feedback form, it appends a pre-filled context
string to the Google Form URL. This gives rich debugging context in
every response without the user having to think about it.

### Format

All context is bundled into a single "App context" field as a compact,
human-readable string:

```
v71 | tablet-landscape | 810x1080 | session:12 | 8 elements | core | ink
```

### Fields included

| Token | Source | Example | Why |
|-------|--------|---------|-----|
| Version | SW cache version constant | `v71` | Know which build they're on |
| Layout | Viewport class detection | `phone-portrait` | More precise than self-reported device |
| Viewport | `window.innerWidth x innerHeight` | `412x915` | Exact screen dimensions for repro |
| Session | Session count from IndexedDB | `session:12` | New user (2) vs power user (50) |
| Elements | `STATE.elements.length` | `8 elements` | Complexity of what they're working on |
| Style | `STATE.activeStyle` | `core` | Which content pack they're using |
| Phase | Current mode | `ink` | What they were doing when they clicked |

### Layout class logic

| Condition | Label |
|-----------|-------|
| Width ≤ 500 and portrait aspect | `phone-portrait` |
| Width ≤ 920 and height ≤ 500 | `phone-landscape` |
| Width ≤ 1024 and portrait aspect | `tablet-portrait` |
| Width ≤ 1024 | `tablet-landscape` |
| Else | `desktop` |

### Implementation

```javascript
function buildFeedbackUrl(baseUrl) {
  const ver = 'v71'; // or read from SW constant
  const w = window.innerWidth, h = window.innerHeight;
  const portrait = h > w;
  let layout = 'desktop';
  if (w <= 500 && portrait) layout = 'phone-portrait';
  else if (w <= 920 && h <= 500) layout = 'phone-landscape';
  else if (w <= 1024 && portrait) layout = 'tablet-portrait';
  else if (w <= 1024) layout = 'tablet-landscape';

  const session = '?'; // from MokuriDB.getSessionCount()
  const els = STATE.elements.length;
  const style = STATE.activeStyle || 'core';
  const phase = STATE.printStudioOpen ? 'print'
    : STATE.inkStudioOpen ? 'ink'
    : STATE.carveStudioOpen ? 'carve' : 'compose';

  const context = `${ver} | ${layout} | ${w}x${h} | session:${session} | ${els} elements | ${style} | ${phase}`;

  // entry.XXXXXXXXXX is the Google Forms entry ID for the "App context" field
  // Replace with the actual entry ID after creating the form
  return `${baseUrl}&entry.1359547312=${encodeURIComponent(context)}`;
}
```

### Google Forms setup

1. Create the form with all questions above
2. Add a final "App context" short answer field
3. Go to ⋮ → "Get pre-filled link"
4. Fill in a sample value for the App context field
5. Copy the generated URL — extract the `entry.XXXXXXXXXX` parameter ID
6. Use that ID in `buildFeedbackUrl()` above

---

## Branding Guidelines

### 1. Header Image

Use a Mokuri-created print:
- Minimal composition
- Soft palette (Sakura, Sumi, or Yoru)
- Plenty of negative space

Layout tip:
- Artwork on the left
- Empty space on the right for title

---

### 2. Theme Color

Choose:
- Warm off-white / beige
- Soft gray
- Muted indigo

Avoid:
- Bright or saturated colors
- Default Google blue

---

### 3. Fonts

Use: Basic or Elegant

Avoid: Playful styles

---

### 4. Tone & Microcopy

Use:
- Short, calm phrasing
- Natural language
- Slightly reflective tone

Avoid:
- Corporate language
- Technical jargon

Examples:
- "Share feedback" instead of "Submit"
- "Tell me more" instead of "Describe issue"

---

## In-App UX Integration

### Permanent placement: Makimono / About screen

A `💬 Send Feedback` link below the "Begin Creating" button, near the
version text. This is the always-findable home — users who go looking
for "how do I report a bug" will find it here. Small, unobtrusive.

### High-signal moment: FRE celebration toast

After completing the final journey (evening-scene), add a soft secondary
link below the completion message: `How was this experience? 💬` in
muted text. The user just succeeded at something, they're engaged, and
they have an opinion forming.

### One-time gentle nudge

After the user's 3rd or 4th session (they've invested enough time to
have opinions), show a subtle toast in the status hint area:

> *Enjoying Mokuri? We'd love your feedback →*

Fades after 8 seconds and never shows again (tracked via localStorage
key `mokuri-feedback-nudge`). Respects the "organic over precise"
philosophy — a whisper, not a demand.

### Tone in app

Use:
- "Help shape Mokuri"
- "Tell me how this felt"
- "Share feedback"

Avoid:
- "Submit ticket"
- "Report issue"

---

## Response Quality Tips

To increase meaningful responses:

- Keep total questions to 5–7 required/visible at once (sections help)
- Avoid required email field
- Keep form completion under 1 minute
- Ask open-ended questions
- Pre-fill context so users don't have to describe their setup

---

## What to Look For in Responses

### High-value signals

- Repeated confusion ("I didn't understand...")
- Repeated bugs from similar device/layout combos (check App context)
- Feature requests ("I wish I could...")
- Sentiment trends (track 😊/🙂/😐 ratio over time)
- New user vs power user feedback differences (check session count)

---

## Iteration Strategy

After 2–3 weeks:
- Remove unused questions
- Add targeted prompts if needed
- Refine wording based on real responses
- Check if any App context tokens aren't useful — simplify

---

## Summary

A good Mokuri feedback form should feel:

- Calm
- Respectful of time
- Thoughtful
- Human

The goal is not to collect data — it's to invite reflection and
insight.
