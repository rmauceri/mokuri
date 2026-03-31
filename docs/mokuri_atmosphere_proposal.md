# Mokuri — Atmosphere System Redesign Proposal

## Problem Statement

The Inking Workbench atmosphere controls present 8 backgrounds × 7 foregrounds × horizon slider × 4 mist options as independent flat controls. This creates several issues:

1. **Cognitive overload** — 56+ combinations with no guidance on what works together
2. **Pack-irrelevant options** — A Tsukiyo user sees Dawn/Day/Golden alongside Night; a Moribana user sees landscape weather options for still-life compositions
3. **Names don't convey combinations** — "Night" + "Water" = "moonlit lake" but the user must discover this through trial
4. **Workhorse default dominance** — 7 of 9 gallery presets use Day background; other options are underused because users don't know what they're for
5. **Interior vs landscape conflation** — Golden and Pink were created as monochromatic interior backdrops (e.g., Moribana's table-and-wall) but sit alongside landscape sky options with no distinction

---

## Current State Audit

### Background Types (8)

| ID | Name | Opacity Range | Used In Presets | Assessment |
|----|------|--------------|-----------------|------------|
| none | None | — | 0 | Essential. Rename to "Paper" for clarity. |
| dawn | 暁 Dawn | 0.30–0.85 | 1 (Mountain Shrine) | Strong. Distinct purple→orange morning transition. Keep. |
| day | 昼 Day | 0.15–0.60 | 9 of 15 total | The safe default. Overused because alternatives aren't well-surfaced. Keep. |
| dusk | 夕 Dusk | 0.30–0.90 | 2 (Lantern Garden, Autumn Crossing) | Strong. Rich dramatic transitional lighting. Keep. |
| golden | 金 Golden | 0.18–0.55 | 0 | Identity problem. Overlaps with Dawn for landscapes. Real purpose: warm interior/studio backdrop for Moribana. Rename. |
| night | 夜 Night | 0.60–0.92 | 1 (Moonlit Shore) | Essential for Tsukiyo. Works well. Keep. |
| overcast | 曇 Overcast | 0.15–0.40 | 1 (Snow Rabbit) | Useful neutral muted option. Keep. |
| pink | 桃 Pink | 0.15–0.50 | 2 (Kacho-e gallery) | Works for spring/sakura season. Name doesn't communicate purpose. Rename. |

### Foreground Types (6)

| ID | Name | Used In Presets | Assessment |
|----|------|-----------------|------------|
| none | None | 7 | Essential. Most used with Kacho-e and Moribana. |
| earth | 土 Earth | 3 | Brown ground plane. Core landscape staple. Keep. |
| grass | 草 Grass | 2 | Green meadow. Keep. |
| snow | 雪 Snow | 1 | Winter ground. Keep. |
| sand | 砂 Sand | 0 | Warm tan beach/desert. Valid but unused. Keep. |
| water | 水 Water | 3 | Blue water plane. Essential for many compositions. Keep. |

### Key Gaps

- **No atmospheric haze** — For barely-there outdoor warmth (Kacho-e morning garden, light diffuse sky). Different from Golden (which is more opaque, interior-feeling).
- **No cool gray surface** — Earth is warm brown, Snow is cold white. No neutral cool gray for temple courtyards, stone surfaces, or Moribana's "cool table." Needed for Moribana "Cool Studio" and future Machi (urban surfaces).
- **Moribana's horizon problem** — The organic wobble on the horizon edge looks natural for landscapes but wrong for interior/still-life contexts where the horizon represents a table edge or clean compositional division.

---

## Proposal

### 1. Rename Existing Options

Small naming changes to better communicate purpose:

| Current | Proposed | Rationale |
|---------|----------|-----------|
| None (bg) | **紙 Paper** | Communicates you're seeing the paper itself |
| 金 Golden | **暖 Warm** | Shifts identity from "gold sky" to "warm interior light" — matches its actual best use as a studio backdrop |
| 桃 Pink | **桜 Sakura** | Communicates spring season and cherry blossom context, not just a color |

### 2. Add New Options

| New Option | Type | Stops | Purpose |
|------------|------|-------|---------|
| **霞 Haze** | Background (#9) | Warm cream `#c8b890` → near-transparent. Opacity: 0.12–0.20. | Barely-visible outdoor atmospheric warmth. For Kacho-e morning gardens, soft diffuse light. Much lower opacity than Warm — a breath of color, not an envelope. |
| **石 Stone** | Foreground (#7) | Cool gray `#6a6a72` → `#8a8a90`. Opacity: 0.35–0.45. | Neutral cool ground plane. Temple courtyards, stone surfaces, Moribana's cool display table, future Machi urban ground. |

Gradient specs:

```javascript
// New background
haze: { name: '霞 Haze', stops: [
  { offset: 0, color: '#b8a878', opacity: 0.20 },
  { offset: 0.4, color: '#c8b890', opacity: 0.15 },
  { offset: 0.7, color: '#d8c8a0', opacity: 0.10 },
  { offset: 1, color: '#e8d8b0', opacity: 0.05 },
]},

// New foreground
stone: { name: '石 Stone', stops: [
  { offset: 0, color: '#6a6a72', opacity: 0.40 },
  { offset: 0.4, color: '#7a7a80', opacity: 0.35 },
  { offset: 1, color: '#8a8a90', opacity: 0.25 },
]},
```

### 3. Atmosphere Presets (New Feature)

Each pack defines named mood presets — one-tap combinations that set background, foreground, horizon, and mist together. Presets are the primary interface; raw controls are secondary.

#### Core Presets (6)

| Preset | Kanji | BG | FG | Horizon | Mist | Scene |
|--------|-------|----|----|---------|------|-------|
| Mountain Dawn | 山暁 | dawn | earth | 0.55 | 1 | Misty morning landscape — mountains at mid-height, sky for depth |
| Clear Day | 晴昼 | day | grass | 0.65 | 0 | Bright landscape — ground-dominant, meadow |
| Coastal | 海辺 | day | water | 0.38 | 0 | Sea or lake — low horizon opens sky/water drama |
| Golden Hour | 夕映 | dusk | earth | 0.62 | 0 | Warm evening — ground-dominant, light falling on landscape |
| Snowscape | 雪景 | overcast | snow | 0.55 | 2 | Winter scene — mist creates depth layers |
| Open Paper | 白紙 | paper | none | 0.62 | 0 | Pure negative space — paper only |

#### Kacho-e Presets (4)

| Preset | Kanji | BG | FG | Horizon | Mist | Scene |
|--------|-------|----|----|---------|------|-------|
| Spring Air | 春風 | sakura | none | 0.80 | 0 | Cherry blossom sky — high horizon, mostly sky behind branches |
| Pond Edge | 池畔 | day | water | 0.35 | 0 | Low horizon — water dominant, herons and koi in open space |
| Morning Haze | 朝霞 | haze | grass | 0.70 | 1 | Warm diffuse garden — barely-there atmospheric warmth |
| Empty Space | 間 | paper | none | 0.62 | 0 | Pure *ma* (間) — flower or bird on empty paper |

#### Moribana Presets (4)

| Preset | Kanji | BG | FG | Horizon | Mist | Scene |
|--------|-------|----|----|---------|------|-------|
| Clean Paper | 白紙 | paper | none | 0.62 | 0 | Pure arrangement — negative space |
| Warm Studio | 暖室 | warm | sand | 0.50 | 0 | Golden wall + warm table surface |
| Cool Studio | 冷室 | overcast | stone | 0.50 | 0 | Cool neutral wall + gray stone table |
| Display Niche | 床間 | night | water | 0.50 | 0 | Dark tokonoma — deep backdrop, dark polished surface |

**Moribana note**: 0.50 horizon on these presets is intentional — it represents a **table edge**, not a landscape horizon. In Moribana, the horizon divides "wall" (backdrop) from "surface" (table), and 50/50 is a natural table-level viewpoint. On some paper sizes (tall scroll), 0.60–0.66 may work better — users can adjust via the slider.

#### Tsukiyo Presets (4)

| Preset | Kanji | BG | FG | Horizon | Mist | Scene |
|--------|-------|----|----|---------|------|-------|
| Moonlit Lake | 月湖 | night | water | 0.40 | 1 | Big night sky, moon high, water reflection — low horizon for drama |
| Shrine Path | 社道 | night | earth | 0.65 | 0 | Ground-dominant — lanterns along a receding path |
| Frost Silence | 霜夜 | night | snow | 0.55 | 2 | Winter night — cold, sparse, mist for depth |
| Summer Stream | 夏川 | dusk | water | 0.38 | 0 | Warm twilight, low horizon — fireflies in open sky |

### 4. Smooth Horizon Option

The atmosphere renderer applies organic wobble (feTurbulence displacement) to the horizon boundary. This is ideal for landscapes where the horizon *should* feel like a natural hand-printed edge. For interior/still-life contexts (Moribana, potentially Machi), the wobble reads as messy rather than organic — a table edge should be clean.

**Proposed**: A `smoothHorizon` flag on atmosphere presets:
- `smoothHorizon: false` (default) — current organic wobble. Used by Core, Kacho-e, Tsukiyo presets.
- `smoothHorizon: true` — gradient transition without feTurbulence displacement. Clean, soft edge. Used by Moribana presets.

When a user applies a Moribana preset with `smoothHorizon: true`, the horizon renders as a soft gradient transition. If they switch to raw controls and change settings manually, the smooth/rough horizon follows the last preset's setting (or could be an explicit toggle in the raw controls section).

**Implementation**: The atmosphere rendering function already checks `STATE.background` and `STATE.foreground`. Adding a `STATE.smoothHorizon` boolean and gating the wobble filter on it is a small, contained change.

---

## UI Layout

### Inking Workbench — Atmosphere Section

```
┌─ Atmosphere ─────────────────────────────┐
│                                          │
│  [Mountain Dawn] [Clear Day] [Coastal]   │  ← Preset chips (one row, wrap)
│  [Golden Hour] [Snowscape] [Open Paper]  │    Pack presets shown first if
│                                          │    not Core active; then Core
│  ▶ Adjust...                             │  ← Collapsed by default
│    Background  [紙][暁][昼][夕]...       │    Expands to show raw controls
│    Foreground  [None][土][草][雪]...      │
│    Horizon     [=======●========] 55%    │
│    Mist        [0] [1] [2] [3]           │
│                                          │
└──────────────────────────────────────────┘
```

**Interaction flow:**
1. User opens Ink workbench → sees preset chips. One may be highlighted if current settings match a preset exactly.
2. User taps a preset → all 4 values update, workspace re-renders immediately. Preset chip highlights.
3. User wants to tweak → expands "Adjust..." → raw controls appear, reflecting the preset's values.
4. User changes any raw control → preset chip deactivates (no preset matches custom settings).
5. User taps a preset again → overrides custom settings, re-collapses to preset view.

**Preset matching on panel open:** Check current `STATE.background`, `STATE.foreground`, `STATE.horizon`, `STATE.mist` against all presets for the active pack + Core. If an exact match exists, highlight that preset. This avoids persisting a "current preset" field — it's derived. Horizon comparison uses a small tolerance (±0.02) for slider rounding.

### Inking Workbench — Palette Section

Smaller enhancement — visual grouping:

```
┌─ Palette ─────────────────────────────────┐
│  [月夜 Tsukiyo ●●●●●] [夜道 Yomichi ●●●●●]  │  ← Pack palettes (if not Core)
│  [霜夜 Shimoyo ●●●●●]                        │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │  ← Subtle divider
│  [Sumi 墨 ●●●●●]  [Edo ●●●●●]  [Hokusai]   │  ← Core palettes
│  [Hiroshige ●●●●●] [Sakura 桜 ●●●●●]  ...   │
└───────────────────────────────────────────┘
```

Pack palettes above the divider signals "these are designed for this creative context." Core palettes remain accessible but visually secondary. When Core is the active style, no divider — all 10 shown normally.

---

## Preset Data Model

Presets live in the pack manifest alongside journeys and prompts:

```javascript
registerPack({
  id: 'tsukiyo',
  // ...existing fields...

  atmospherePresets: [
    {
      id: 'moonlit-lake',
      name: 'Moonlit Lake',
      nameJa: '月湖',
      background: 'night',
      foreground: 'water',
      horizon: 0.40,
      mist: 1,
      smoothHorizon: false,
    },
    {
      id: 'shrine-path',
      name: 'Shrine Path',
      nameJa: '社道',
      background: 'night',
      foreground: 'earth',
      horizon: 0.65,
      mist: 0,
      smoothHorizon: false,
    },
    // ...
  ],
});
```

Moribana's presets set `smoothHorizon: true`:

```javascript
{
  id: 'warm-studio',
  name: 'Warm Studio',
  nameJa: '暖室',
  background: 'warm',    // renamed from 'golden'
  foreground: 'sand',
  horizon: 0.50,
  mist: 0,
  smoothHorizon: true,   // clean table-edge horizon
},
```

---

## Migration

### Golden → Warm rename

Save/load migration maps `golden` → `warm` in atmosphere data, identical to the existing `sky` → `background` pattern:

```javascript
// In applyCompositionData or migration code:
if (data.background === 'golden') data.background = 'warm';
```

Scene presets, gallery presets, and BACKGROUND_TYPES all update `golden` → `warm`.

### New options (Haze, Stone)

Purely additive — no migration needed. They're new options that don't conflict with existing saved data.

### smoothHorizon

New STATE field, default `false`. Existing compositions have no `smoothHorizon` in saved data → defaults to `false` (current behavior). No migration needed.

---

## Future Considerations

### Paper size × horizon

Some presets may benefit from horizon values that adapt to paper aspect ratio. A 0.50 horizon on square paper creates an equal split; the same 0.50 on a tall scroll creates a long backdrop above a long table. For now, fixed values per preset are fine — users adjust via slider. A future enhancement could make presets aspect-aware.

### Pack-specific background types

Future packs might want backgrounds that don't exist today — e.g., a "Starlit" variant of Night (darker, with subtle brightness variation suggesting stars), or an "Interior" background specifically tuned for Machi's architecture scenes. These could be added as pack-specific background types that only appear when that pack is active. The preset system makes this less urgent since presets compose existing options.

### Per-element non-uniform scale gradient (atmosphere depth)

Per our earlier discussion: distant elements could be rendered with reduced saturation and increased paper-tone blending based on their Y-position relative to horizon. This "atmospheric perspective" would work synergistically with the atmosphere presets — a "Mountain Dawn" preset with atmospheric perspective on distant elements would create Hasui-like depth without any manual per-element adjustment.

---

## Implementation Order

1. **Rename options** — Golden→Warm, Pink→Sakura, None→Paper in BACKGROUND_TYPES display names and IDs. Add save/load migration.
2. **Add Haze + Stone** — New entries in BACKGROUND_TYPES and FOREGROUND_TYPES.
3. **Add smoothHorizon to STATE** — Boolean, default false. Gate wobble filter in atmosphere renderer.
4. **Add atmospherePresets to pack manifests** — Core, Kacho-e, Moribana, Tsukiyo presets.
5. **Build preset UI** — Chip row above collapsed raw controls in Inking Workbench.
6. **Palette visual grouping** — Divider between pack and core palettes.
7. **Test across all packs** — Verify presets feel right, smooth horizon works for Moribana, raw controls still functional.

Steps 1-3 are foundation (can ship independently). Steps 4-6 are the UX feature. Step 7 validates the whole system.
