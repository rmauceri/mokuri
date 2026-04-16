---
name: mokuri-element-gen
description: >
  Generates source PNG images for Mokuri's Element Forge using AI image generation (fal.ai).
  Use this skill when the user wants to generate, create, or make a new Mokuri element image
  from a short description (e.g. "mokuri tortoise crawling", "generate a heron standing in water",
  "create an element of autumn maple leaves"). Produces Forge-ready PNGs with magenta chroma-key
  background and flat mokuhanga color zones.
---

# Mokuri Element Image Generator

This skill generates source PNG images suitable for import into Mokuri's Element Forge.
The Forge converts these PNGs into multi-zone, multi-level SVG elements for the woodblock print compositor.

## When to use this skill

- User asks to "generate", "create", or "make" a new Mokuri element
- User describes a subject they want as a printable element (animal, plant, figure, object, scene piece)
- User wants to experiment with element ideas before committing to the Forge pipeline

## How to generate an element

Run the `generate.py` script from this skill's directory. It accepts a short natural-language description and produces a Forge-ready PNG.

### Basic usage

```shell
python .github/skills/mokuri-element-gen/generate.py "tortoise crawling"
```

### With options

```shell
# Specify orientation (default: landscape 1024x768)
python .github/skills/mokuri-element-gen/generate.py "tall heron standing" --orientation portrait

# Square format
python .github/skills/mokuri-element-gen/generate.py "chrysanthemum bloom" --orientation square

# Suggest specific colors (4 hex codes, darkest last)
python .github/skills/mokuri-element-gen/generate.py "koi fish swimming" --colors "#D4835A #E8B87A #F0D8C0 #1A1A1A"

# Custom output path
python .github/skills/mokuri-element-gen/generate.py "temple gate" --out dev/generated/custom/temple-gate.png

# Dry run (show the full prompt without calling the API)
python .github/skills/mokuri-element-gen/generate.py "mountain peak" --dry-run
```

### Orientations

| Flag | Size | Use for |
|------|------|---------|
| `landscape` (default) | 1024×768 | Horizontal subjects: branches, swimming fish, reclining animals |
| `portrait` | 768×1024 | Vertical subjects: standing figures, trees, tall flowers |
| `square` | 1024×1024 | Symmetric subjects: blooms, seals, round objects |

### Output

- PNGs are saved to `dev/generated/skill/` by default
- Filename is derived from the description (e.g. `tortoise-crawling.png`)
- The script prints the full path on success

### After generation

Tell the user:
1. Open the Element Forge (`dev/element-forge.html`) in a browser
2. Import the generated PNG using the "Import PNG" button
3. The Forge will auto-detect zones from the flat color regions
4. Assign zones, set carve levels, and export to use in Mokuri

### Requirements

- `FAL_KEY` must be set in `dev/.env` or as an environment variable
- Python packages: `fal_client`, `requests`, `python-dotenv` (optional)

### Tips for good descriptions

Help the user craft effective descriptions:
- **Include the subject and pose**: "heron standing on one leg" not just "heron"
- **Mokuhanga aesthetic**: subjects should suit Japanese woodblock style (nature, figures, seasonal motifs)
- **Simple forms**: AI works best with clean silhouettes — avoid complex overlapping subjects
- **Single subject**: one element per generation — the pipeline expects isolated subjects
- **Suggest colors** when you have a specific palette in mind (4 flat colors, darkest for fine details only)
