# Portrait Mode Support Plan

## Problem

Mokuri's layout assumes a wide viewport — left element panel, central workspace, right workbench flyouts, horizontal toolbar. This works well in landscape but breaks in portrait orientation where width is scarce and height is abundant. iPad users who prefer portrait (especially iPad mini) face cramped workspace, clipped toolbar controls, and panels that steal too much horizontal space.

## Goal

First-class portrait support on all three target iPad sizes, with layouts that also benefit large phones:

| Device | Portrait (CSS px) | Landscape (CSS px) | Edge DevTools |
|--------|-------------------|---------------------|---------------|
| iPad mini (7th gen) | **744 × 1133** | 1133 × 744 | 744 × 1133 |
| iPad Air 11" (M3) | **820 × 1180** | 1180 × 820 | 820 × 1180 |
| iPad Air 13" (M3) | **1024 × 1366** | 1366 × 1024 | 1024 × 1366 |
| Large phone (ref) | ~430 × 932 | 932 × 430 | 430 × 932 |

The iPad Air 13" in portrait (1024px wide) is actually wider than iPad mini in landscape (1133px), so it may not need much change beyond the panels. The real challenges are iPad mini portrait (744px) and Air 11" portrait (820px).

## Design Concept

**"Panels rotate with the device."**

In landscape (current), the layout is horizontal: `[Element Panel ← | Workspace | → Workbench]`

In portrait, the layout flips vertical:
```
┌─────────────────────────┐
│       Command Bar        │
├─────────────────────────┤
│  Element Panel (slides   │
│  down from cmd bar)      │
├─────────────────────────┤
│                          │
│       Workspace          │
│       (canvas)           │
│                          │
├─────────────────────────┤
│  Workbench (slides up    │
│  from status bar)        │
├─────────────────────────┤
│       Status Bar         │
└─────────────────────────┘
```

- **Element panel** becomes a top sheet (below toolbar, slides down)
- **Workbench panels** (Carve/Ink/Print) become bottom sheets (above status bar, slides up)
- **Workspace** fills the space between, always visible
- **No overlap** — panels push the workspace, they don't overlay it

### Panel Height Rules

Panels should not consume more than ~45% of the viewport, leaving at minimum ~55% for workspace + toolbar + status bar. This prevents the canvas from becoming unusably small.

- **Element panel (top)**: capped at ~40% viewport height; scrolls internally. The 2-column element grid is already compact and works well vertically.
- **Workbench panels (bottom)**: height varies by content:
  - Carve Workbench: shorter (tools + pressure + patterns ≈ 35-40%)
  - Ink Workbench: medium (palette + zones + atmosphere ≈ 40-45%)
  - Print Workbench: shorter (paper + ink + impressions + button ≈ 35%)
- At most **one panel visible at a time** (element panel or one workbench) — same as current behavior

### Toolbar in Portrait

The toolbar needs to pack into narrow widths (744px minimum) without wrapping to two rows at iPad sizes. Strategy:

- **744–850px portrait**: icon-only phase buttons, hide "Studio" from Workshop, compact edit group, kanji-only brand
- **850–1024px portrait**: show phase labels, but still compact spacing
- **1024px+ portrait** (Air 13"): near-normal toolbar, may look like current 1024px landscape

The existing breakpoint cascade (1180 → 1024 → 850 → 600) already handles most of this — the main issue is that portrait iPads hit these breakpoints at widths where landscape never does.

## Architecture

### Detection Strategy

Use a combination of CSS `orientation` media query and width thresholds:

```css
/* Portrait mode: panels flip to top/bottom */
@media (orientation: portrait) and (max-width: 1024px) {
  /* iPad mini (744px), Air 11" (820px), Air 13" (1024px) */
  /* Flip .main from flex-row to flex-column */
  /* Convert .panel from left sidebar to top sheet */
  /* Convert studios from right sidebar to bottom sheet */
}
```

Why `max-width: 1024px`? iPad Air 13" portrait is exactly 1024px — this catches all three iPads in portrait. Landscape iPads are all wider than 1024px (mini: 1133, Air 11: 1180, Air 13: 1366), so this won't fire in landscape. And desktop portrait monitors (rare) at 1024px+ won't be affected.

Alternatively, a more defensive query:
```css
@media (orientation: portrait) and (max-width: 1024px) and (pointer: coarse) {
  /* Only touch/tablet devices in portrait */
}
```

### CSS Changes

#### 1. Main Layout Flip

```css
@media (orientation: portrait) and (max-width: 1024px) {
  .main {
    flex-direction: column;  /* was: row (default) */
  }
}
```

This single property change makes `.panel`, `.workspace`, and studios stack vertically instead of side-by-side.

#### 2. Element Panel → Top Sheet

```css
@media (orientation: portrait) and (max-width: 1024px) {
  .panel {
    width: 100% !important;          /* full width, not --panel-w */
    max-height: 40vh;
    border-right: none;
    border-bottom: 1px solid var(--panel-border);
    flex-shrink: 0;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .panel:not(.open) {
    max-height: 0;
    border-bottom-width: 0;
  }
  .panel-inner {
    width: 100%;                      /* not fixed --panel-w */
  }
  .panel-scroll {
    /* Element grid may want 3 or 4 columns in portrait to use full width */
  }
  .element-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
```

#### 3. Workbench Panels → Bottom Sheets

```css
@media (orientation: portrait) and (max-width: 1024px) {
  .carve-studio,
  .ink-studio,
  .print-studio {
    width: 100% !important;
    max-height: 0;
    border-left: none;
    border-top: 1px solid var(--panel-border);
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    order: 2;                         /* push below workspace */
  }
  .carve-studio.open { max-height: 40vh; }
  .ink-studio.open   { max-height: 45vh; }
  .print-studio.open { max-height: 38vh; }

  .carve-studio-inner,
  .ink-studio-inner,
  .print-studio-inner {
    width: 100%;                      /* not fixed --studio-w */
    padding: 12px 16px;
  }
}
```

**Key insight**: the current open/close animation uses `width` transitions. In portrait, we switch to `max-height` transitions. This needs the JS to also switch which CSS property it transitions — or we use CSS custom properties for the direction and let the media query handle it.

#### 4. Workspace Ordering

```css
@media (orientation: portrait) and (max-width: 1024px) {
  .panel     { order: 0; }  /* top */
  .workspace { order: 1; }  /* middle */
  .carve-studio,
  .ink-studio,
  .print-studio { order: 2; }  /* bottom, above status bar */
}
```

#### 5. Workbench Content Layout

In portrait, workbenches get the full viewport width. This is an opportunity to lay out content in 2-3 columns instead of a single narrow column:

- **Carve Workbench**: tool row + pressure could be side-by-side with pattern grid
- **Ink Workbench**: palette grid (left) + zone editor (right) at wider portrait widths
- **Print Workbench**: paper cards could flow into a wider grid

This reduces panel height needed, keeping more workspace visible.

#### 6. Element Panel Content in Portrait

With full viewport width, the element grid can use more columns:
- **744px** (mini): 4 columns of ~170px thumbs
- **820px** (Air 11"): 4–5 columns
- **1024px** (Air 13"): 5–6 columns

The category accordion should stay collapsed by default in portrait to save height.

### JavaScript Changes

#### Panel open/close

Current JS toggles `.open` class which triggers width animation. In portrait, we need the same `.open` toggle to trigger height animation. **The CSS handles this** — the media query overrides `width: var(--studio-w)` with `width: 100%; max-height: Xvh`, so the same JS class toggle should work without changes.

One caveat: `panel-inner` and studio inner divs have a fixed `width` set to `var(--panel-w)` or `var(--studio-w)`. This needs CSS override to `width: 100%` in portrait.

#### Workspace resize

`fitPaperToView()` uses `getBoundingClientRect()` which is already responsive. No JS changes needed — the workspace just measures itself wherever CSS puts it.

#### FRE hints

The hint positioning algorithm (`_frePositionHint`) uses viewport-relative positioning. Main concern:
- Hints targeting the top element panel (now at top) need `arrow: 'bottom'` instead of `arrow: 'right'`
- Hints targeting workbench controls (now at bottom) need `arrow: 'top'` instead of `arrow: 'left'`

Options:
1. Make arrow direction orientation-aware in `freShowHint` — if portrait and target is in a panel, flip arrow
2. Let the existing fallback-flip logic handle it (it already flips if overflow detected)
3. Add `arrowPortrait` to hint definitions

Option 2 (rely on existing flip logic) is the least-invasive starting point.

### Status Bar

The status bar is already full-width and below `.main`. In portrait it stays at the bottom. Touch-friendly sizing from `pointer: coarse` already applies. No structural change needed.

## Implementation Phases

### Phase 1: Core Layout Flip ⬜

The foundational CSS that makes panels stack vertically in portrait.

**1a. Portrait detection media query**
- Add `@media (orientation: portrait) and (max-width: 1024px)` block
- Flip `.main` to `flex-direction: column`
- Override `.panel` width to 100%, add max-height cap, change border direction
- Override studio widths to 100%, add max-height caps, set order

**1b. Panel inner width fix**
- Override `.panel-inner`, `.carve-studio-inner`, `.ink-studio-inner`, `.print-studio-inner` to `width: 100%`

**1c. Element grid columns**
- Widen grid to use available width: `repeat(auto-fill, minmax(100px, 1fr))`

**1d. Workspace keeps flex:1**
- Ensure workspace remains the flexible element between top/bottom panels
- Verify `fitPaperToView()` resizes correctly after panel open/close

**1e. Remove min-width**
- Current `.app { min-width: 640px }` needs lowering or removing for portrait phones

### Phase 2: Toolbar Portrait Adaptation ⬜

**2a. Audit existing breakpoints for portrait widths**
- 744px hits the 850px breakpoint (kanji-only brand, no separators, small tools)
- 820px also hits 850px
- 1024px hits the 1024px breakpoint (icon-only phase buttons)
- These may already be acceptable — test and tune

**2b. Portrait-specific toolbar adjustments**
- If needed: further compact edit group at narrow portrait widths
- Consider hiding less-used edit tools behind a "..." overflow menu
- Ensure Workshop button always visible (the 1180px fix already drops "Studio")

**2c. Touch-target sizing**
- Verify all toolbar buttons meet 44×44px touch target on `pointer: coarse`
- Phase buttons may need slight padding increase

### Phase 3: Workbench Content Reflow ⬜

Optimize panel content layout for wide-but-short portrait orientation.

**3a. Carve Workbench portrait layout**
- Carve level + focus row: stays horizontal
- Tool selector: horizontal row (already is)
- Pressure slider: inline with tool row or below
- Pattern grid: could go wider (3×3 in 260px → maybe 4×3 in 744px)
- Goal: reduce panel height by spreading content horizontally

**3b. Ink Workbench portrait layout**
- Palette chips: could expand to 3-4 columns instead of 2
- Zone editor: can sit beside palette when element selected
- Atmosphere controls: sky/ground chips in wider rows
- Bokashi widget: inline with zone editor

**3c. Print Workbench portrait layout**
- Paper type cards: wider grid (3 across instead of stacked)
- Ink load + impressions: inline row
- Title input + Pull Print button: side by side
- Goal: everything visible without scrolling

### Phase 4: FRE Portrait Support ⬜

**4a. Hint arrow direction awareness**
- Test existing flip-on-overflow behavior in portrait
- If insufficient, add portrait-aware arrow preference to `_frePositionHint`
- May need to reduce hint `max-width` from 240px on very narrow viewports

**4b. Panel scroll-into-view**
- Currently scrolls vertically within panel — still works in portrait
- But panel itself may need to be open before showing hint — verify automation

**4c. Journey step testing**
- Walk through both journeys (first-print, evening-scene) in portrait on all 3 iPad sizes
- Document any steps where the hint doesn't reach its target or canvas becomes too small

### Phase 5: Gallery & Workshop Portrait Polish ⬜

These already adapt reasonably well, but may benefit from tuning:

**5a. Workshop modal**
- Already uses `92vw` + `85vh` + auto-fill grids — should work
- Test preset thumbnails and composition grid at portrait widths

**5b. Print Gallery**
- Full-screen overlay, already responsive
- Verify image sizing and filmstrip at portrait aspect ratios

**5c. Makimono**
- Already has `max-width: 700px` single-column mode — covers all portrait iPads
- Verify scroll behavior on tall portrait viewports

### Phase 6: Orientation Transition Animation (P2) ⬜

Stretch goal — smooth panel relocation when rotating device.

**6a. CSS transitions for panel position change**
- Animate panels from side position to top/bottom on orientation change
- May need `matchMedia` listener in JS to trigger transition class

**6b. Workspace resize animation**
- Smooth viewBox transition as workspace dimensions change during rotation

**6c. State preservation**
- Open panel stays open after rotation (just relocates)
- Selected element, tool state, etc. all preserved

### Phase 7: Testing & Hardening ⬜

**7a. Device matrix testing**
Test all 6 viewport configurations in Edge DevTools:
- iPad mini portrait: 744 × 1133
- iPad mini landscape: 1133 × 744
- iPad Air 11" portrait: 820 × 1180
- iPad Air 11" landscape: 1180 × 820
- iPad Air 13" portrait: 1024 × 1366
- iPad Air 13" landscape: 1366 × 1024
- Bonus: iPhone 15 Pro Max: 430 × 932

**7b. Interaction testing per viewport**
- Element drag & drop (thumb → workspace)
- Pan/zoom in cramped workspace
- Carve stroke drawing with panel open
- Print preview in portrait
- All workbench controls reachable and usable

**7c. FRE walkthrough on each viewport**
- Both journeys end-to-end on all 6 iPad configurations
- Verify hints are visible and arrows point correctly

**7d. Real device testing**
- Physical iPad mini (priority — tightest constraints)
- Physical iPad Air 11" if available

## Risks & Considerations

### Workspace Size

With a 40vh element panel open on iPad mini portrait (1133px tall), the workspace gets ~500px of height minus toolbar (~48px) and status bar (~36px) = ~416px. With paper at 4:3 aspect, that's roughly 555×416 — usable but tight. May need to reduce panel cap to 35vh.

### Panel Open/Close Animation

Switching from width-based to height-based animation via CSS media query should work, but the `transition` property currently targets `width`. We need:
```css
/* Portrait override */
.panel { transition: max-height 0.35s ...; }
```
This means the same `.open` class triggers different animation properties by orientation. Need to verify there's no flash or layout jump.

### Only One Panel at a Time

Currently enforced in JS (opening one closes others). This is even more important in portrait where there's no room for multiple panels. The existing mutual-exclusion logic should suffice.

### Scrolling Within Panels

Panels in portrait are shorter (capped height) but wider. Content needs to scroll vertically within the capped height. The existing `overflow-y: auto` on inner containers handles this.

### Print Preview in Portrait

The print canvas renders into the workspace area. In portrait with a bottom panel open, the canvas could be quite small. Consider auto-closing the Print Workbench panel during the actual print render, or allowing the canvas to expand.

## Sequence

Phase 1 (core flip) → Phase 2 (toolbar) → Phase 3 (content reflow) → Phase 4 (FRE) → Phase 5 (gallery/workshop) → Phase 7 (testing)

Phase 6 (rotation animation) is optional P2 and can be done anytime after Phase 1.

Phases 1-2 give a functional portrait layout. Phase 3 makes it good. Phases 4-5 make it complete. Phase 7 validates everything.

## What This Does NOT Include

- Phone-specific layouts (would benefit naturally but not explicitly targeted)
- Split-screen / multitasking iPad layouts (e.g., 50% width in Split View)
- Keyboard attachment awareness (external keyboard changes available height)
- Pencil hover / Apple Pencil Pro squeeze gestures
