# First-Run Experience (FRE)

## Status: Phases 1–4 Complete · Phases 5–6 Remaining

The core FRE engine is fully implemented with two connected guided journeys ("Your First Print" and "Evening Scene"). Hint system, journey engine, audio cues, celebration toasts, persistence, and responsive layout are all working and tested on Windows Edge, iPad mini, and Android.

---

## Design Philosophy

Mokuri's FRE feels like a **sensei quietly guiding your hands** — not a tutorial wizard. Short contextual whispers near the action, creative framing over feature training, always skippable.

**Principles:**
- **Show, don't explain** — visual cues over text walls
- **Creative context first** — "Choose an element to begin your scene" not "Click the Elements panel"
- **Minimal interruption** — hints float near the target, don't block interaction
- **Progressive** — features revealed as the user naturally encounters them
- **One-time** — each hint shows once per journey, persisted across sessions via IndexedDB

---

## Architecture (Implemented)

### Hint System

Floating hint bubbles that point at UI targets with directional arrows:

```
┌──────────────────────────────┐
│  Drag to position        ✕   │
│  your element                │
│  [Skip guide]                │  ← first hint only
└─────────────▼────────────────┘
              ↓ arrow points at target
```

- **Style**: pale blue background (`#e8f0fa`), border `#b8c8d8`, italic system sans-serif font, 13px text
- **Position**: anchored near target element, directional arrow (top/bottom/left/right)
- **Appear**: gentle fade-in (300ms) after 500ms delay; extra 350ms if target needs scroll-into-view
- **Dismiss**: click hint body, ✕ button, or perform the hinted action
- **Skip all**: "Skip guide" link on first hint of each journey
- **Pulse glow**: target element gets blue pulsing glow (`fre-pulse` / `fre-pulse-svg`)
- **Z-index**: 1200 (above gallery modal at 1100, above all panels)
- **Responsive**: viewport-aware positioning, flips arrow if near edge, panel scroll-into-view for targets inside scrollable workbench panels

### Hint Definitions (21 hints)

```js
const FRE_HINTS = {
  'place':         { text: 'Choose an element to begin your scene', target: '#element-list',          arrow: 'right' },
  'move':          { text: 'Drag to position your element',        target: selectedElement(),          arrow: 'left' },
  'resize':        { text: 'Pull corners to resize',               target: selectedElement(),          arrow: 'left' },
  'palette':       { text: 'Try a different palette',              target: '#btn-phase-ink',           arrow: 'bottom' },
  'carve':         { text: 'Carve to reveal the wood beneath',     target: '#btn-phase-carve',         arrow: 'bottom' },
  'carve-level':   { text: 'Add more carve detail',                target: '.cs-carve-level-row',      arrow: 'left' },
  'carve-detail':  { text: 'Press C to carve deeper detail',       target: selectedElement(),          arrow: 'left' },
  'carve-pattern': { text: 'Try a carve pattern',                  target: selectedElement(),          arrow: 'left' },
  'atmosphere':    { text: 'Set the mood of your scene',           target: '#btn-phase-ink',           arrow: 'bottom' },
  'bokashi':       { text: 'Add a gradient fade to a zone',        target: selectedElement(),          arrow: 'left' },
  'color-zones':   { text: 'Click a zone to change its color',     target: selectedElement(),          arrow: 'left' },
  'elements':      { text: 'Browse the element library',           target: '#element-list',            arrow: 'right' },
  'print':         { text: 'Pull your first print',                target: '#btn-phase-print',         arrow: 'bottom' },
  'open-ink':      { text: 'Open the Inking Workbench',            target: '#btn-phase-ink',           arrow: 'bottom' },
  'atmosphere-bg': { text: 'Change the background',                target: '#is-atmo-bg-chips',        arrow: 'left' },
  'print-2':       { text: 'Pull a print of your evening scene',   target: '#btn-phase-print',         arrow: 'bottom' },
  'edit-title':    { text: 'Give your print a title',              target: '#ps-title-input',          arrow: 'left' },
  'pull-print':    { text: 'Pull your print',                      target: '#ps-pull-print',           arrow: 'left' },
  'open-gallery':  { text: 'Open the Gallery to see your prints',  target: '#btn-print-gallery',       arrow: 'top' },
  'exit-gallery':  { text: 'Close the gallery to continue',        target: '#pgallery-close',          arrow: 'right' },
};
```

### Journey Engine

State machine in `index.html`:
- `_activeJourney`: current journey object (or null)
- `_hintIndex`: current step index into `featureHints` array
- `_freSkipped`: set true if user clicks "Skip guide"
- `_freEditTitleTimer`: 5s auto-advance fallback for edit-title hint

**Key functions:**
- `freStartJourney(journeyId)` — loads journey from pack registry, applies starting preset if workspace is empty, selects last element, shows first hint
- `freAdvance(triggerId)` — if trigger matches current hint ID, advances to next step (800ms delay) or completes journey
- `freResumeJourney()` — reads in-progress journey from IndexedDB on app init, resumes at saved step
- `freCompleteJourney()` — persists completion to IDB, shows celebration toast
- `freSkipJourney()` — persists skip status, hides all hints
- `_freShowCurrentHint()` — per-hint setup logic (element selection for carve hints, title naming for print step, auto-advance timer for edit-title)
- `freShowHint(hintId, opts)` — builds and positions the hint DOM element, handles scroll-into-view
- `freHideHint()` — removes hint, clears pulse glow

**Pre-hint setup** (in `_freShowCurrentHint`):
- Carve hints → auto-select last unlocked element
- Print hint → set composition name to "My First Mokuri Print"
- Edit-title → start 5s auto-advance timer

### Trigger Points (25+ locations)

`freAdvance()` calls wired at action points throughout `index.html`:

| Action | Trigger IDs |
|--------|-------------|
| Element placed (tap-to-place) | `place` |
| Element moved (pointerup) | `move` |
| Element resized | `resize` |
| Carve mode entered | `carve` |
| Carve level pip clicked | `carve-level` |
| Carve stroke completed | `carve-detail`, `carve-pattern` |
| Ink studio opened | `open-ink` |
| Palette changed | `palette` |
| Zone color changed | `color-zones` |
| Bokashi direction set | `bokashi` |
| Sky/ground chip clicked | `atmosphere`, `atmosphere-bg` |
| Print studio opened | `print`, `print-2` |
| Title input typed | `edit-title` |
| Print pulled | `print`, `pull-print` |
| Gallery opened | `open-gallery` |
| Gallery closed | `exit-gallery` |

Some actions fire multiple trigger IDs so different journeys can use the same user action.

### Journeys (defined in `assets/pack-registry.js`)

**"Your First Print" (初摺)** — 7 steps:
1. `move` → "Drag to position your element"
2. `resize` → "Pull corners to resize"
3. `carve` → "Carve to reveal the wood beneath"
4. `carve-level` → "Add more carve detail"
5. `palette` → "Try a different palette"
6. `print` → "Pull your first print"
7. `pull-print` → "Pull your print"
→ Celebration + offer "Evening Scene"

**"Evening Scene" (夕景)** — 7 steps:
1. `open-ink` → "Open the Inking Workbench"
2. `atmosphere-bg` → "Change the background"
3. `print-2` → "Pull a print of your evening scene"
4. `edit-title` → "Give your print a title"
5. `pull-print` → "Pull your print"
6. `open-gallery` → "Open the Gallery to see your prints"
7. `exit-gallery` → "Close the gallery to continue"
→ Celebration: "Great job! You are on the Mokuri path." + "Visit the Workshop to create new or work on existing prints"

**"Weather Study" (天候)** — 3 steps (defined but not yet wired to activation flow):
1. `atmosphere` → "Set the mood of your scene"
2. `elements` → "Browse the element library"
3. `carve-pattern` → "Try a carve pattern"

### Celebration Toast

Ensō (◯) circle with journey's `titleJa` overlaid, subtitle, and optional completion message. "Try next?" button when `suggestedNext` is set. Persistent — stays until user closes it.

### Audio

Two dedicated sounds in `audio-engine.js`:
- **`playFreHint()`**: D4 + A4 pentatonic fifth (sine + triangle oscillators), 1.8s decay, gain 0.14 — subtle two-tone chime in spirit of ambient soundtrack
- **`playFreCelebration()`**: D4 → G4 → A4 → D5 ascending motif (0.22s spacing), final note has bell shimmer (inharmonic partial at 2.76×), 3s decay — ascending resolution from ambient scale

### Makimono Integration

- **All launches**: full Makimono welcome → "Begin Creating" button starts `first-print` journey (currently always runs for testing; production should gate on visit count ≤ 1)
- **Return with journey in-progress**: resumes hints via `freResumeJourney()` on app init
- **About screen**: unchanged, accessible via brand click

### Responsive Handling

- Hints reposition to avoid viewport overflow, flip arrow direction at edges
- Targets inside scrollable panels (`.carve-studio-inner`, `.ink-studio-inner`, `.print-studio-inner`) auto-scroll into view with 350ms settle delay before hint positioning
- Toolbar breakpoints: 1180px hides "Studio" label, 1024px hides mode labels — ensures Workshop button visible on iPad mini landscape (1133px CSS width)

---

## Implementation Status

### Phase 1: Hint Overlay Component ✅
- [x] 1a. CSS for hint bubble — pale blue `#e8f0fa`, border, directional arrows, fade animation, pulse glow
- [x] 1b. `freShowHint()` — position near target, 500ms delay, scroll-into-view support
- [x] 1c. `freHideHint()` — fade out, remove, clear pulse
- [x] 1d. Dismiss on click, ✕ button, "Skip guide" link
- [x] 1e. Responsive positioning — viewport overflow detection, arrow flip, panel scroll

### Phase 2: Hint Definitions & Trigger Wiring ✅
- [x] 2a. `FRE_HINTS` map with 21 hint definitions
- [x] 2b. `freAdvance()` calls at 25+ action points in index.html

### Phase 3: Journey Engine ✅
- [x] 3a. Journey state variables
- [x] 3b. `freStartJourney()` — load from registry, apply preset, select element
- [x] 3c. `freAdvance()` — trigger matching, step advance, 800ms delay
- [x] 3d. `freResumeJourney()` — IDB-based resume on reload
- [x] 3e. `freCompleteJourney()` — IDB persistence, celebration toast
- [x] 3f. `freSkipJourney()` — mark skipped, hide hints

### Phase 4: Journey Activation & Celebration ✅
- [x] 4a. Makimono "Begin Creating" wired to `freStartJourney('first-print')`
- [x] 4b. Resume on reload via IDB
- [x] 4c. Celebration toast with ensō, titleJa, completion message
- [x] 4d. "Try next?" button offering `suggestedNext` journey
- [x] 4e. Audio: pentatonic chime on hint show, ascending motif on celebration

### Phase 5: Workshop Journey Cards ⬜
- [ ] 5a. "Guided Journeys" section in Workshop panel below presets
- [ ] 5b. Journey cards: title, titleJa, prompt text, status badge (new / in-progress / complete)
- [ ] 5c. Click to start journey (loads startingPreset, starts hint sequence)
- [ ] 5d. Show journeys from active style pack + core

### Phase 6: Polish & Edge Cases ⬜
- [ ] 6a. Gate FRE on visit count for production (currently always-on for testing)
- [ ] 6b. Handle journey start when workspace has existing content
- [ ] 6c. Third journey wiring: "Weather Study" needs activation path and UI
- [ ] 6d. iPad mini portrait layout (known issues, deferred)
- [ ] 6e. Style-switch activation: offer pack's first journey on first style change
- [ ] 6f. Cross-browser hardening (Edge, Safari, iPad tested; Chrome/Firefox need verification)

---

## What This Does NOT Include

- Pack unlock/purchase gating
- Daily/weekly prompt scheduling
- Retention hooks beyond suggestedNext
- Animated hand/cursor showing gesture
- Status bar journey progress indicator (e.g., "初摺 3/5")

## Resolved Design Decisions

- **Pulse glow**: ✅ Yes — blue pulse on target element
- **Font**: system sans-serif italic (matches app UI, reads as instructional)
- **Color**: pale blue `#e8f0fa` (contrast against warm paper workspace)
- **Audio**: draws from ambient pentatonic scale, not separate sound design
- **Celebration**: ensō mark (◯) over colorful emoji — stays on-brand
- **Element selection**: always last element in preset array (predictable for preset design)
- **Print visibility**: keep print on screen during gallery hint (don't close print studio)
