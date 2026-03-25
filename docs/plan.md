# Mokuri — Plan

## Active: Style Pack Experience (Active Style Model)

### Problem

Style packs should be **distinct aesthetic lenses** that shape the entire creative environment — not just content filters. When a user chooses Moribana, the whole studio should reconfigure: featured elements, palette defaults, atmosphere presets, and creative prompts should all align to that intent.

### Approach

An "Active Style" model where one pack (or Core Mokuri) sets the creative context. Core elements remain accessible as supporting material. The system uses **tag-based affinity** rather than hand-curated companion lists, scaling naturally as new packs and elements are added.

---

### Phase 1 — Data Foundations ✅

- [x] **tags-taxonomy** — 17-tag vocabulary: `landscape`, `flora`, `fauna`, `water`, `structural`, `atmospheric`, `vessel`, `minimal`, `organic`, `geometric`, `figure`, `intimate`, `seasonal-spring`, `seasonal-autumn`, `seasonal-winter`, `decorative`, `signing`
- [x] **tags-core** — Tags on all 90 core elements (7 files)
- [x] **tags-packs** — Tags on all 22 pack elements (Kacho-e + Moribana)
- [x] **affinity-packs** — `affinity: [...]` in pack manifests
- [x] **affinity-core** — Core Mokuri treated as proper pack with affinity in pack-registry.js
- [x] **affinity-api** — `getAffinityElements(packId, allElements)` returns `{ featured, rest }` sorted by tag overlap (2+ threshold)
- [x] **rename-atmosphere** — `sky` → `background`, `ground` → `foreground` throughout (STATE, UI, save/load migration, gallery presets, audio engine)

### Phase 2 — Active Style Model ✅

- [x] **state-active-style** — `STATE.activeStyle` (single string) replaces `STATE.activePacks` (Set). Persisted as `mokuri-activeStyle`
- [x] **picker-two-tier** — Featured section (pack + 2+ tag affinity) / "All Elements ▶" accordion
- [x] **picker-ui** — Featured categories sorted by element count (largest group first)
- [x] **style-selector** — Style chips at top of Elements panel
- [x] **palette-ordering** — Active style palettes + core palettes shown; others hidden
- [x] **prompt-filtering** — Workshop prompts from active style + core only
- [x] **smart-defaults** — Auto-select pack palette on style switch
- [x] **companion-migration** — Removed `companionElements`, replaced by computed affinity

### Phase 3 — Atmosphere Enrichment

- [ ] **atmosphere-presets** — Add `atmospherePresets` array to pack manifests. Named scene combinations: `{ id, name, nameJa, background, foreground, horizon, mist }`. Examples:
  - Core: "Mountain Dawn" (dawn + earth), "Ocean Night" (night + water)
  - Kacho-e: "Garden Close-up" (none + none), "Pond Edge" (day + water)
  - Moribana: "Clean Studio" (none + none), "Soft Light" (overcast + none)
- [ ] **atmosphere-preset-ui** — Preset chips above the raw background/foreground toggles in Inking Workbench. Clicking a preset sets all 4 values at once. Raw toggles remain for fine adjustment.
- [ ] **atmosphere-labels** — Ensure preset UI uses Background/Foreground terminology throughout.

### Phase 4 — Polish & Onboarding

- [ ] **journey-activation** — On first switch to a style, offer the pack's first journey prompt. Dismissible, tracked in localStorage.
- [ ] **pack-gallery-presets** — 2-3 curated starting compositions per pack, shown in Composition Gallery when that style is active.
- [ ] **refine-affinities** — Tune tag assignments and affinity weights through real use. Consider weighted affinities (some tags matter more to a pack than others).

---

### Design Principles

- **Nothing hidden, just prioritized.** Every element is always reachable. The active style determines what's *featured*, never what's *allowed*.
- **Pack switching is non-destructive.** Elements already placed stay. Only the environment (picker, palettes, prompts, atmosphere presets) changes.
- **Core is a style, not a default.** "Mokuri" (landscape/nature) is a first-class style with its own affinity, not "everything with no filter."
- **Tags > companion lists.** Affinity is computed from tags, not hand-maintained. New elements automatically sort into the right packs.
- **Smart defaults are suggestions.** Applied on style *switch*, not reload. User overrides are respected.

---

## Future

See [ROADMAP.md](../ROADMAP.md) for full history and backlog.

### Style Pack Ideas

- Shin-hanga (new prints movement)
- Wabi-sabi (imperfection aesthetic)
- Additional packs to validate the Active Style model with contrasting creative contexts
