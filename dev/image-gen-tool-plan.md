# Element Image Generation Tool — Plan

## Goal

Build a local Python script that generates element source PNGs from the prompts in `element-prompts-kacho-moribana.md` (and future prompt files), saving them ready for import into the Element Forge. Replaces the unreliable ChatGPT/Gemini chat UI workflow with a direct, programmatic API call.

---

## Why fal.ai + Flux

- **Reliability**: REST API with no chat UI toolchain — no broken image generation steps
- **Quality**: Flux.1 (especially `flux/dev` and `flux/schnell`) produces high-quality flat illustration output that handles the stencil/flat-color prompts well
- **Speed**: Flux Schnell is 1–4 seconds per image
- **Cost**: ~$0.003–$0.01 per image — negligible at our scale (21 elements × 3 variations = 63 images ≈ $0.20–$0.63 per pack rebuild)
- **API simplicity**: Single REST call with `prompt`, `image_size`, returns a URL to download
- **Docs**: https://fal.ai/models/fal-ai/flux/dev

### Alternative: Stability AI (SDXL / SD3)
Equally reliable, good at flat color illustration. Slightly more setup. Worth trying if Flux output needs tuning for the flat-color stencil aesthetic.

---

## Proposed Script: `dev/generate_elements.py`

### Usage

```bash
# Generate all 3 variations for one element
python dev/generate_elements.py --element "heron" --out dev/generated/

# Generate all elements in a pack
python dev/generate_elements.py --pack kacho --out dev/generated/kacho/

# Generate a single variation with a custom prompt
python dev/generate_elements.py --prompt "Japanese woodblock print..." --out dev/generated/test.png

# Dry run (print prompts without calling API)
python dev/generate_elements.py --pack moribana --dry-run
```

### What it does

1. Reads prompts from `dev/element-prompts-kacho-moribana.md` (parsed by element name / variation)
2. Calls fal.ai `fal-ai/flux/dev` endpoint with the prompt + size parameters
3. Downloads the returned image PNG to the specified output directory
4. Saves with a predictable filename: `{pack}-{element-id}-{variation}.png`
   - e.g. `kacho-heron-a.png`, `kacho-heron-b.png`, `kacho-heron-c.png`
5. Prints a summary: element name, variation, output path, API cost estimate

### Output naming convention

```
dev/generated/
  kacho/
    kacho-heron-a.png
    kacho-heron-b.png
    kacho-heron-c.png
    kacho-warbler-a.png
    ...
  moribana/
    moribana-suiban-a.png
    ...
```

---

## Setup Required

1. **fal.ai account**: https://fal.ai — free signup, pay-as-you-go
2. **API key**: Set as environment variable `FAL_KEY`
3. **Python dependencies**: `fal-client` (official fal.ai Python client), `requests`
4. **Install**: `pip install fal-client requests`

```bash
# Set API key (add to .env or shell profile)
$env:FAL_KEY = "your-fal-api-key-here"

# Install dependencies
pip install fal-client requests
```

---

## Prompt Parsing Strategy

The prompts in `element-prompts-kacho-moribana.md` follow a consistent format:
- `### N. Element Name (kanji Name)` — element header
- `#### Variation A/B/C — Description` — variation header
- `> [prompt text]` — the actual prompt (blockquote)

Parse with a simple regex/line scanner — no external markdown parser needed.

---

## Forge Integration Workflow

```
generate_elements.py
    ↓ saves PNG to dev/generated/kacho/
Open Element Forge (dev/element-forge.html)
    ↓ File → Import PNG → select file
    ↓ Potrace traces flat color zones
    ↓ Assign zone names, carve levels
    ↓ Save to library
    ↓ Export pack as kacho-elements.js
```

No changes to the Forge required — this script just automates the PNG sourcing step.

---

## Post-Generation Quality Check

Before importing to the forge, visually verify each generated PNG:
- [ ] Background is solid green (#00FF00) or transparent
- [ ] 3–5 clearly distinct flat colors (no gradients)
- [ ] No outlines around subjects
- [ ] Subject fills ~60% of canvas
- [ ] Darkest color covers less than 8% of pixels

If a variation fails these checks, re-run with a refined prompt. The prompt doc is the source of truth — edit prompts there, then re-run.

---

## Future Extensions

- **Batch retry**: Auto-detect failed/low-quality images and re-run
- **Color validation**: Python script that counts distinct color clusters in a generated PNG and warns if count is outside 3–5 range
- **Prompt library expansion**: Add prompts for Tsukiyo, Machi packs using same format
- **Variation picker**: Generate 3× variations, display side by side for visual selection before forge import

---

## Notes

- The `dev/` folder is the right home for this — it's a dev tool, not part of the app
- `.gitignore` `dev/generated/` to avoid committing large PNG batches
- The script should be idempotent — skip files that already exist unless `--force` is passed
- fal.ai models may update; pin to a specific model version for reproducibility (`fal-ai/flux/dev` vs `fal-ai/flux-pro`)
