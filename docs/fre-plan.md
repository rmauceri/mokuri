# First-Run Experience (FRE)

## Problem

New Mokuri users see a blank workspace with no guidance. The existing Makimono welcome screen explains philosophy but not workflow. There's no path from "I just opened this" to "I pulled my first print." The pack journey data model is fully built but has zero behavioral wiring.

## Design Philosophy

Mokuri's FRE should feel like a **sensei quietly guiding your hands** — not a tutorial wizard. Short contextual whispers near the action, creative framing over feature training, always skippable.

**Principles:**
- **Show, don't explain** — visual cues over text walls
- **Creative context first** — "Choose an element to begin your scene" not "Click the Elements panel"
- **Minimal interruption** — hints float near the target, don't block interaction
- **Progressive** — features revealed as the user naturally encounters them
- **One-time** — each hint shows once per journey, persisted across sessions

## Architecture

### Hint System

A floating hint bubble that points at a UI target:

```
┌─────────────────────────┐
│  Choose an element  ◀───│── points at Elements panel
│  to begin your scene    │
└─────────────────────────┘
```

- **Style**: warm paper background (#f5f0e8), subtle border, calligraphic font feel, 12-16px text
- **Position**: anchored near target element, arrow pointing at it
- **Appear**: gentle fade-in (300ms) after a brief delay (500ms)
- **Dismiss**: click hint, perform the hinted action, or tap ✕
- **Skip all**: "Skip guide" link on first hint dismisses entire journey

### Hint Definitions

Each feature ID from journey `featureHints` maps to a definition:

```js
const FRE_HINTS = {
  'place':        { text: 'Choose an element to begin',    target: elements panel },
  'move':         { text: 'Drag to position your element', target: selected element },
  'resize':       { text: 'Pull corners to resize',        target: selected element },
  'palette':      { text: 'Try a different palette',       target: palette area },
  'carve':        { text: 'Carve to reveal the wood',      target: Carve phase button },
  'carve-detail': { text: 'Press C to carve deeper',       target: carve level pips },
  'carve-pattern':{ text: 'Try a carve pattern',           target: pattern chips },
  'atmosphere':   { text: 'Set the mood of your scene',    target: atmosphere controls },
  'bokashi':      { text: 'Add a gradient fade',           target: bokashi widget },
  'color-zones':  { text: 'Click a zone to change color',  target: zone editor },
  'elements':     { text: 'Browse the element library',    target: elements panel },
  'print':        { text: 'Pull your first print',         target: Print phase button },
};
```

Each also has a **trigger** — the action that satisfies it and advances to the next hint.

### Journey Engine

Simple state machine:
- `_activeJourney`: current journey object (or null)
- `_hintIndex`: which featureHint we're on
- `freAdvance(triggerId)`: called from action points throughout the app; if trigger matches current hint, advance to next
- `freShowHint(hintId)`: displays the hint overlay for the current step
- Persists to `MokuriDB.updateJourneyProgress(journeyId, { step, status })`
- Resumes on reload if journey is in-progress

### Trigger Points

Lightweight `freAdvance('trigger-id')` calls added at key moments:
- Element placed → `freAdvance('place')`
- Element moved → `freAdvance('move')`
- Element resized → `freAdvance('resize')`
- Palette changed → `freAdvance('palette')`
- Carve mode entered → `freAdvance('carve')`
- Carve stroke completed → `freAdvance('carve-detail')`
- Carve pattern set → `freAdvance('carve-pattern')`
- Atmosphere changed → `freAdvance('atmosphere')`
- Bokashi set → `freAdvance('bokashi')`
- Zone color changed → `freAdvance('color-zones')`
- Print pulled → `freAdvance('print')`

### Journey Flow

**"Your First Print" (core, first-time user):**
1. Makimono welcome (existing) → dismiss
2. `place` → "Choose an element to begin" (pulse on Elements panel)
3. `move` → "Drag to position" (near placed element)
4. `palette` → "Try a different palette" (near Ink button)
5. `carve` → "Carve to reveal the wood" (near Carve button)
6. `print` → "Pull your first print" (near Print button)
7. 🎉 Completion celebration + "Try Evening Scene next?"

The `featureHints` array in each journey defines the exact sequence. Some journeys are shorter (Kacho-e: place → palette → carve → print), some introduce advanced features (Evening Scene: atmosphere → bokashi → carve-detail).

### Celebration & Next Journey

On journey completion:
- Brief warm toast: "Your first print! 初摺" with the journey's Japanese title
- `suggestedNext` offered as a card: "Continue with Evening Scene?"
- Accept → loads that journey (with its startingPreset if defined)
- Dismiss → returns to free exploration

### Journey Activation Points

1. **First launch**: auto-start `first-print` journey after Makimono dismiss
2. **Journey completion**: offer `suggestedNext`
3. **Style switch**: on first activation of a pack, offer its first journey
4. **Workshop**: journey cards section — browse and manually start any journey

### Makimono Integration

Rework the visit-counter logic:
- **First visit**: full Makimono → "Begin Your First Print" button starts the journey
- **Return with journey in-progress**: no Makimono, resume hints
- **Return with journey complete**: splash or nothing (keep existing behavior)
- **About screen**: always accessible via brand click (unchanged)

## Implementation Todos

### Phase 1: Hint Overlay Component
- [ ] 1a. CSS for hint bubble (`.fre-hint`): paper bg, border, arrow, fade animation
- [ ] 1b. JS: `freShowHint(hintDef)` — creates/positions hint near target, shows with delay
- [ ] 1c. JS: `freHideHint()` — fade out and remove
- [ ] 1d. Dismiss on click, ✕ button, and "Skip guide" link
- [ ] 1e. Responsive positioning (don't overflow viewport, flip arrow direction)

### Phase 2: Hint Definitions & Trigger Wiring
- [ ] 2a. `FRE_HINTS` map with text, target selector, trigger ID for all ~12 features
- [ ] 2b. Add `freAdvance()` calls at ~10 action points in index.html
- [ ] 2c. Ensure triggers fire reliably (debounce rapid actions)

### Phase 3: Journey Engine
- [ ] 3a. Journey state: `_activeJourney`, `_hintIndex`, `_freSkipped`
- [ ] 3b. `freStartJourney(journeyId)`: load journey from registry, set index 0, show first hint
- [ ] 3c. `freAdvance(triggerId)`: match against current hint's trigger, advance + show next
- [ ] 3d. `freResumeJourney()`: read progress from IDB, resume at saved step
- [ ] 3e. `freCompleteJourney()`: mark done in IDB, show celebration
- [ ] 3f. `freSkipJourney()`: mark skipped, hide hints, don't offer again
- [ ] 3g. Persist progress after each step advance

### Phase 4: Journey Activation & Celebration
- [ ] 4a. First-launch: wire Makimono "Begin" button to `freStartJourney('first-print')`
- [ ] 4b. Resume on reload: check IDB for in-progress journey on app init
- [ ] 4c. Completion toast UI with journey title (Japanese + English)
- [ ] 4d. "Try next?" card offering `suggestedNext` journey
- [ ] 4e. Style-switch activation: offer pack's first journey on first style change

### Phase 5: Workshop Journey Cards
- [ ] 5a. "Guided Journeys" section in Workshop below presets
- [ ] 5b. Journey cards: title, titleJa, prompt text, status badge (new/in-progress/complete)
- [ ] 5c. Click to start journey (loads startingPreset if defined, starts hint sequence)
- [ ] 5d. Show journeys from active style + core

### Phase 6: Polish & Edge Cases
- [ ] 6a. Handle journey start when workspace has existing content (skip startingPreset?)
- [ ] 6b. Ensure hints don't conflict with open workbench panels
- [ ] 6c. Ensure hints work on touch/tablet (larger targets, tap dismiss)
- [ ] 6d. Audio: subtle chime on journey start, gentle tone on step advance, celebration sound on complete
- [ ] 6e. Update Makimono visit logic to integrate with journey state
- [ ] 6f. Bump service worker cache version
- [ ] 6g. Test across Edge, Safari, iPad

## Sequence

Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6

Phases 1-3 are the core engine. Phase 4 makes it work end-to-end for the first-print journey. Phase 5 adds discoverability. Phase 6 hardens it.

## What This Does NOT Include

- Pack unlock/purchase gating
- Daily/weekly prompt scheduling
- Retention hooks beyond suggestedNext (e.g., "try a night version" — future)
- Animated hand/cursor showing gesture (future enhancement)

## Open Questions

- Should the hint have a subtle pulse/glow on the target element, or just the arrow pointing at it?
- Should journey progress show in the status bar? (e.g., "初摺 3/5")
- On completion, should the print be auto-favorited as a milestone marker?
