# Mokuri Studio — Windows Store Submission Guide

## Store Listing Copy

### App Name
**Mokuri Studio — Japanese Woodblock Print Creator**

### Short Description (max 100 chars)
Compose serene woodblock prints from curated elements with traditional palettes and authentic textures.

### Full Description

Create beautiful Japanese woodblock prints in a calm, meditative digital studio.

Mokuri is not a drawing app. It is a contemplative creative tool built around the art of mokuhanga — the centuries-old Japanese practice of composing images through constraint, subtraction, and deliberate choice. Place curated elements. Choose a palette. Carve detail into the block. Pull your print and watch the paper absorb the ink.

**The process is the art.**

Like real printmaking, Mokuri rewards patience and intention. You work within constraints — a limited palette, a curated vocabulary of forms, the subtractive act of carving. These boundaries aren't limitations. They are what make each composition uniquely yours.

**What you can create:**
- Serene landscapes with mountains, water, and sky
- Delicate nature studies with birds, flowers, and seasonal motifs
- Atmospheric scenes with mist, rain, snow, and moonlight
- Bold compositions inspired by masters like Hokusai and Hiroshige

**A mindful creative experience:**
- Ambient generative soundscape responds to your atmosphere choices
- Gentle transitions and breathing room in every interaction
- No blank-canvas anxiety — start from curated scenes or build from elements
- Generous undo, auto-save, and non-destructive editing throughout

**Authentic mokuhanga craft:**
- 10 traditional color palettes drawn from historical pigments
- 6 paper types with distinct textures (hosho, kozo, torinoko, gampi, unryu, kakishibu)
- Carve detail with pressure-sensitive tools that feel like real gouges
- Pull prints with ink variation, wood grain, paper fiber, and subtle misregistration
- Bokashi gradient fades, atmosphere layers, and multi-impression printing

**Your private gallery:**
- Save compositions and revisit finished prints
- Export high-resolution PNGs to share or frame
- Works entirely offline — your art stays on your device

Mokuri runs entirely in your browser. No account required. No data collected. No internet needed after first visit.

---

### Key Features (bullet points for store listing)

- Compose scenes from 80+ hand-designed SVG elements across nature, fauna, figures, and objects
- 10 traditional Japanese color palettes (Sumi, Edo, Hokusai, Hiroshige, Sakura, and more)
- Pressure-sensitive freehand carving with fine, V-gouge, and U-gouge tools
- Authentic print rendering: ink absorption, wood grain, paper texture, and natural variation
- Generative ambient soundscape (pentatonic chimes, wind, water, temple bell)
- 6 washi paper types with unique visual character
- Atmosphere system: sky gradients, ground textures, mist bands, horizon control
- Bokashi (gradient fade) per color zone for depth and mood
- Works completely offline — no account, no cloud, no tracking
- Guided first-run experience to learn the workflow naturally

---

### Category
**Design & Creativity** (or Multimedia Design if available)

### Age Rating
**Everyone** — no violence, no user interaction, no data collection, no in-app purchases.

### Tags / Keywords
woodblock print, mokuhanga, Japanese art, creative tool, digital art, ukiyo-e, meditation, mindfulness, print studio, composition

---

## Suggested Screenshots

Screenshots should be 1366×768 minimum (16:9). Capture in Edge at full-screen on a 1920×1080 display for best results.

### Screenshot 1 — "Compose"
A composition in progress showing the workspace with several elements placed (mountain, water, crane, pine). The element library panel should be visible on the left showing available pieces. Caption: *"Compose scenes from curated woodblock elements"*

### Screenshot 2 — "Carve"
Carve mode active with an element in focus, showing gouge strokes being applied. The Carving Workbench panel visible on the right with tool selection and pressure slider. Caption: *"Carve detail with pressure-sensitive tools"*

### Screenshot 3 — "Ink & Atmosphere"
Inking Workbench open showing palette selection and zone editor. A dusk atmosphere with warm sky gradient and water ground visible. Caption: *"Choose palettes and set the mood with atmosphere"*

### Screenshot 4 — "Pull a Print"
The finished print rendering showing paper texture, ink variation, and wood grain effects. The slight organic imperfection that makes it look handmade. Caption: *"Pull prints with authentic mokuhanga texture"*

### Screenshot 5 — "Gallery"
The composition gallery showing several saved works as thumbnails, demonstrating the range of what's possible (landscape, night scene, nature study). Caption: *"Build a gallery of your own prints"*

### Screenshot 6 — "Paper & Materials"
The Printing Workbench showing paper type selection, ink load, and impression controls. A print preview visible showing the effect of different paper choices. Caption: *"Choose from 6 traditional washi papers"*

---

## Promotional Images

| Asset | Size | Content |
|-------|------|---------|
| Store logo | 300×300 | Mokuri icon (vermillion hanko mark on washi) |
| Hero image | 1920×1080 | A beautiful finished print (Mountain Dawn or Ocean Night) with subtle app UI framing |
| Wide tile | 620×300 | Side-by-side: workspace composition → finished print |
| Poster | 1000×800 | "Mokuri Studio" text over a print, tagline below |

---

## Steps to Publish

### 1. Create a Microsoft Partner Center Account
- Go to https://partner.microsoft.com/
- Register as an individual developer ($19 one-time fee)
- Verify identity (may take 1–2 business days)

### 2. Prepare Privacy Policy
- Create a simple page at `https://mokuri.art/privacy` (or a `/dev/privacy.html`)
- Content: "Mokuri Studio does not collect, store, or transmit any personal data. All compositions are stored locally on your device using browser localStorage and IndexedDB. No analytics, no cookies, no network calls after initial page load."
- Must be publicly accessible at a URL you provide during submission

### 3. Audit PWA with PWABuilder
- Go to https://www.pwabuilder.com/
- Enter `https://mokuri.art`
- Review the audit — fix any warnings (likely: add more icon sizes, add `categories` to manifest)
- Current manifest is solid but may want to add:
  ```json
  "categories": ["creativity", "design"],
  "lang": "en",
  "orientation": "any"
  ```

### 4. Generate Icon Suite
PWABuilder can generate all needed sizes from the 512×512 icon. Sizes needed:
- 44×44 (app list)
- 50×50 (store listing)
- 150×150 (medium tile)
- 310×150 (wide tile)
- 310×310 (large tile)
- 512×512 (already have)
- 620×300 (promotional — create manually)

### 5. Package with PWABuilder
- On PWABuilder, click "Package for stores" → Windows
- Download the generated `.msix` package
- PWABuilder creates a lightweight wrapper that points to mokuri.art
- Test the .msix locally: double-click to install, verify it opens and works offline

### 6. Take Screenshots
- Open mokuri.art in Edge, full-screen (F11) at 1920×1080
- Capture 4–6 screenshots per the suggestions above
- Use Win+Shift+S or a screenshot tool for clean captures
- Consider adding subtle captions/annotations in an image editor

### 7. Reserve App Name
- In Partner Center → Apps → New app
- Reserve "Mokuri Studio" (and/or "Mokuri Studio — Japanese Woodblock Print Creator")

### 8. Create Submission
- Upload .msix package
- Fill in listing: description, screenshots, features, category
- Set age rating (complete the questionnaire — straightforward for creative tools)
- Provide privacy policy URL
- Set pricing: Free
- Submit for review

### 9. Review Process
- Microsoft reviews within 1–3 business days (typically faster for PWAs)
- Common rejection reasons:
  - Missing privacy policy
  - Screenshots don't match app
  - Description makes unsupported claims
  - App crashes or doesn't load offline
- If rejected, fix issues and resubmit (no additional fee)

### 10. Post-Publication
- Updates are automatic — since the MSIX just wraps mokuri.art, any deploy to GitHub Pages updates the Store app immediately
- Monitor reviews in Partner Center
- Respond to user feedback
- Consider Store promotions or feature requests based on feedback

---

## Estimated Effort

| Task | Time |
|------|------|
| Partner Center registration | 15 min + verification wait |
| Privacy policy page | 30 min |
| Manifest enhancements | 15 min |
| PWABuilder audit & package | 30 min |
| Screenshots (6) | 45 min |
| Promotional images | 1 hour |
| Store listing copy (use above) | 15 min |
| Submission form | 30 min |
| **Total active work** | **~4 hours** |

---

## Notes

- **Updates are free and instant** — no resubmission needed for app changes since it's still serving from mokuri.art
- **Offline works** — the SW caches everything on first visit; Store reviewers will test this
- **No IAP complexity** — free app with no purchases simplifies review significantly
- **Future**: if the Store listing performs well, the same PWA can be submitted to Google Play (via PWABuilder's Android package) and eventually wrapped for iPad via Safari's Add to Home Screen or a Capacitor wrapper

---

# Part 2: Operating & Development Model for Real Users

Everything below covers what changes once Mokuri has real customers in the Windows Store.

---

## Testing & Quality

- **Cross-browser/device testing** — Edge is the primary test browser, but Store users will have different system configs, screen sizes, and DPI scaling (125%, 150%, 200% are common on Windows laptops). Test at multiple resolutions.
- **Regression testing** — currently bugs are caught via manual testing. Real users will find things faster than they can be fixed. At minimum, maintain a manual test checklist for critical flows: compose → carve → ink → print → save → reload → re-open.
- **Accessibility** — Store reviews may flag issues. Screen reader basics, keyboard navigation, and contrast ratios are the first priorities. Full WCAG compliance isn't required for a free indie app but Microsoft increasingly emphasizes it.
- **Performance on low-end hardware** — the dev machine is capable, but a $300 laptop with integrated graphics and 4GB RAM is a real user scenario. Print rendering is Canvas-heavy and may struggle on low-end GPUs. Test with Chrome/Edge performance throttling.

---

## Update & Deployment

- **Versioning discipline** — sw.js version bumps are currently ad-hoc. With real users, a bad deploy that breaks the cache or causes a double-reload is a real problem. Establish a pre-deploy checklist.
- **Service worker lifecycle** — this has already caused multiple bugs (double-makimono, stale cache). A broken SW deploy can leave users stuck on an old version or in a reload loop. Consider a "force update" escape hatch (e.g., a query parameter that clears caches and re-registers).
- **Rollback plan** — pushing to GitHub Pages is instant and irreversible (every user gets the new version immediately). There's no staged rollout. At minimum, be prepared to quickly revert a commit with `git revert` and push.
- **Cache busting** — users may get stuck on stale cached versions. The version check mechanism helps but isn't foolproof, as we've experienced. Consider adding a visible version indicator in the app (e.g., in the About screen) so users can report what version they're on.

---

## Data & Storage

- **localStorage limits** — compositions are currently stored in localStorage (~5–10MB limit depending on browser). Heavy users with many saved compositions will hit this. The planned IndexedDB migration becomes more urgent with real users.
- **Data loss scenarios** — users who clear browser data, whose IT department pushes browser resets, or who switch devices lose everything. No cloud backup exists. This WILL generate complaints and negative reviews.
- **Migration path** — if the save format changes, existing compositions must still load correctly. Save data needs version fields and migration code that handles older formats gracefully.
- **Export as backup** — users need a way to export/import their entire gallery as a file, not just individual PNGs. A JSON export of all compositions would be a safety net users can rely on.

---

## Support & Feedback

- **Store reviews are public** — a 1-star review saying "lost all my art" is visible to everyone and affects discoverability. Monitor reviews and respond promptly.
- **Feedback channel** — the in-app feedback mechanism exists, but where does it go? A GitHub issue? An email address? Decide on the intake channel and actually monitor it.
- **Bug reports from non-technical users** — expect reports like "it doesn't work" with no details. Consider lightweight error logging (capture last N console errors in localStorage) or a "send diagnostics" option that bundles browser, version, and recent errors into a copyable block.
- **Response time expectations** — Store users expect some level of support. Even "I'm a solo developer and I'll look into this" is better than silence. Set expectations in the app description.

---

## Legal & Compliance

- **Privacy policy** — required for the Store and must be accurate. If analytics or crash reporting are ever added, the policy must be updated before deployment.
- **Terms of use** — not strictly required for a free app, but protects the developer. Standard "no warranty, use at your own risk" language. Can be combined with the privacy policy page.
- **Copyright on elements** — the SVG elements are original work, but if users assume they can use their prints commercially (print-on-demand, book illustrations), usage rights should be clarified. Consider a simple "prints you create are yours" statement.
- **Accessibility compliance** — ADA/WCAG isn't legally mandated for a free indie app, but accessibility complaints to Microsoft could affect Store listing status.
- **COPPA** — if children under 13 could use Mokuri (they can — it's rated Everyone), and any data collection is ever added, COPPA regulations apply. Currently safe since nothing is collected.

---

## Product Direction

- **Feature requests vs. vision** — users will ask for things that don't fit mokuhanga philosophy: free drawing, photo import, AI generation, text overlays, stickers. Mokuri's identity depends on knowing what it is NOT. Have a clear public statement of creative philosophy.
- **Element library growth** — the #1 request will be "more elements." A sustainable pipeline is essential. The Element Forge + fal.ai skill helps with creation, but curation and quality control take real time. Not every generated element meets the mokuhanga standard.
- **Packs as content strategy** — the pack system (Kacho-e, Moribana) is the right model for sustainable growth. New packs are content drops that re-engage existing users and attract new ones. Each pack adds elements, palettes, guided journeys, and creative prompts.
- **Monetization** — free is fine for launch, but if the user base grows, developer time investment grows while hosting costs stay near zero (GitHub Pages). Consider the long game:
  - Premium element packs (paid)
  - A "Pro" tier with advanced features (more paper types, custom palettes, high-res export)
  - Tip jar / "support the artist" model
  - Important: decide on a monetization philosophy BEFORE accumulating users who expect everything free forever

---

## Operational Monitoring

- **Uptime monitoring** — GitHub Pages is reliable but not infallible. A free uptime monitor (UptimeRobot, Freshping) alerts if mokuri.art goes down. Takes 5 minutes to set up.
- **Usage visibility** — without any analytics, there's no visibility into whether people open the app once and leave, or spend hours composing. Privacy-respecting options exist (Plausible, Fathom, simple hit counter) but each adds complexity and privacy policy obligations.
- **Error rates** — currently there's no visibility into JavaScript errors in production. A `window.onerror` handler that saves the last N errors to localStorage (viewable in a hidden dev panel, e.g., Ctrl+Shift+D) would help diagnose issues users report without any external service.
- **Performance monitoring** — no current way to know if print rendering takes 2 seconds or 20 seconds for real users. Consider logging render times to the same dev diagnostics panel.

---

## Development Workflow

- **Branch protection** — currently all changes push straight to main, which is straight to production. At minimum, test changes on a feature branch before merging, even as a solo developer.
- **Staging environment** — a second GitHub Pages deployment (e.g., `staging.mokuri.art` or the default `rmauceri.github.io/mokuri-staging`) to test before going live. Especially important for service worker changes.
- **Automated checks** — the element validation script (`dev/check_elements.js`) exists but doesn't run automatically. A GitHub Action that validates elements and checks for obvious issues on push would catch regressions like the rain-curtain stroke→fill issue.
- **Pre-deploy checklist** — a documented list of things to verify before pushing to main:
  1. All elements render at all carve levels
  2. Print output looks correct for at least 2 compositions
  3. Fresh InPrivate session loads without double-reload
  4. Gallery save/load round-trips correctly
  5. FRE completes both journeys without errors
  6. Service worker version number is incremented if cached files changed

---

## The Big Shift

The fundamental change is: **every commit is a release to real users.**

Right now the development model is fast iteration — break things, fix them in the next commit, test manually in Edge. With Store users, a broken evening means frustrated people who may never come back. The bar for "good enough to push" goes up significantly.

A user who loses their saved compositions will leave a 1-star review. A user who sees a double-reload on first launch may close the app and never return. A user on a low-end laptop who waits 30 seconds for a print to render will conclude the app is broken.

### Minimum Viable Operations (recommended before Store submission)

| Priority | Item | Effort |
|----------|------|--------|
| **Must have** | Privacy policy page on mokuri.art | 30 min |
| **Must have** | Pre-deploy test checklist | 30 min |
| **Must have** | Uptime monitor (UptimeRobot) | 5 min |
| **Must have** | Feedback email or channel | 15 min |
| **Should have** | Visible version number in About screen | 15 min |
| **Should have** | Error capture to localStorage | 1 hour |
| **Should have** | Gallery export/import as file | 2–3 hours |
| **Nice to have** | Staging environment | 1 hour |
| **Nice to have** | GitHub Action for element validation | 1–2 hours |
| **Nice to have** | Basic privacy-respecting analytics | 2 hours |

---

## Test Automation & Regression Prevention

Given Mokuri's architecture (single HTML file, no build step, no framework), these are the recommended automated checks ranked by regression protection per effort invested.

### High Value, Low Effort

**1. Element Structure Validator** (Node script, run as GitHub Action on push)
- All paths have a valid `zone` that exists in the element's `colorZones`
- Block level (level 0) has only `type: 'fill'` paths — no strokes
- Every element has required fields: `id`, `name`, `category`, `viewBox`, at least one carve level
- No duplicate element IDs across all element files
- Path `d` attributes are valid SVG path data
- Color zone slot indices are within palette range (0–4)
- *This would have caught both the rain-curtain and full-moon regressions*

**2. Save/Load Round-Trip Test** (browser-based, Playwright or similar)
- Create a composition programmatically, serialize with `getCompositionData()`, deserialize with `applyCompositionData()`, re-serialize, compare the two serializations
- Verify all STATE fields that are serialized survive the round-trip
- Test with compositions that exercise edge cases: background carve strokes, atmosphere settings, locked elements, bokashi, custom hanko
- *Critical because data loss = 1-star reviews*

**3. Print Engine Smoke Test** (headless browser)
- Call `print()` with a known composition, verify it returns a canvas without throwing
- Run for each print profile (Ukiyo-e, Shin-hanga, Sōsaku) and each paper type
- Doesn't validate visual output (that's the element harness's job), just "does it crash"
- *Would catch undefined tuning parameters, broken filter generation, or missing functions*

### Medium Value, Medium Effort

**4. Service Worker Lifecycle Tests** (Playwright)
- Fresh install: page loads without double-reload (the bug we've fixed twice)
- Update scenario: change SW version, verify a single reload occurs
- Offline: disconnect network after first load, verify app still functions
- Cache recovery: corrupt the cache, verify app self-heals on next visit
- *These are the hardest bugs to reproduce manually and the most user-visible*

**5. State Mutation Coverage**
- Every `STATE` field that appears in `getCompositionData()` output should also be restored in `applyCompositionData()`
- New fields need defaults with fallback values (the `|| fallback` pattern)
- A script that diffs STATE keys vs. serialization/deserialization code would catch missing fields automatically
- *Prevents silent data loss when new features add state that isn't persisted*

**6. FRE Journey Walkthrough** (Playwright)
- Automate both guided journeys end-to-end: start → each hint appears at correct target → advance → celebration dialog appears
- Verify hint targets exist in the DOM (catches renamed/removed element IDs)
- Verify auto-advance timers and skip buttons work
- *Catches hint targeting errors, broken auto-advance, timing regressions*

### Lower Priority, Higher Effort

**7. Visual Regression (screenshot diff)**
- Render a known composition at all 3 carve levels in both ink and carve view modes
- Compare against baseline screenshots using pixel diff
- Threshold for acceptable variation (ink/paper textures have intentional randomness, so exact match isn't possible — use structural similarity)
- Tools: Playwright screenshot comparison, Percy, or BackstopJS
- *High setup cost, but would catch rendering changes instantly*

**8. Performance Budget**
- Measure print render time for a standard composition (e.g., Mountain Dawn preset)
- Alert if it exceeds a threshold (e.g., 5 seconds on a throttled CPU profile)
- Track over time to prevent gradual performance degradation
- Also measure: initial page load time, gallery open time, element library population time
- *Prevents death-by-a-thousand-cuts performance regression*

### Recommended Starting Point

Start with **#1 (element validator)** and **#2 (save/load round-trip)** as a GitHub Action triggered on every push to main. Together they protect against the two most damaging regression categories:

| Test | Protects Against | Effort |
|------|-----------------|--------|
| Element validator | Broken rendering, invisible paths, missing zones | 2 hours |
| Save/load round-trip | Data loss, format migration bugs | 2 hours |

Both run in seconds and require no complex infrastructure. The element validator is pure Node.js (no browser needed). The round-trip test needs a headless browser but Playwright setup is minimal.

### Existing Tools

- **`dev/element-harness.html`** — visual element preview tool for manual review of all elements at all carve levels and color zones. Complements automated validation by catching "does it look right" issues that structural checks cannot.
- **`dev/check_elements.js`** — early diagnostic script (extracts IDs and prints file structure). Would be replaced by the full element validator.

