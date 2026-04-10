#!/usr/bin/env python3
"""
Mokuri Element Image Generator
Generates source PNGs for the Element Forge using fal.ai Flux.

Usage:
    python dev/generate_elements.py --element heron
    python dev/generate_elements.py --pack kacho
    python dev/generate_elements.py --pack moribana --out dev/generated/moribana/
    python dev/generate_elements.py --pack kacho --dry-run
    python dev/generate_elements.py --list

Requires: FAL_KEY in dev/.env or environment variable
"""

import argparse
import os
import re
import sys
import time
from pathlib import Path

# Load .env from dev/ directory (or project root as fallback)
try:
    from dotenv import load_dotenv
    _script_dir = Path(__file__).parent
    _env_file = _script_dir / ".env"
    if _env_file.exists():
        load_dotenv(_env_file)
    else:
        load_dotenv()  # fallback: search cwd and parents
except ImportError:
    pass  # dotenv optional; FAL_KEY can be set as a real env var

import fal_client
import requests

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

PROMPTS_FILE = Path(__file__).parent / "element-prompts-kacho-moribana.md"
DEFAULT_OUT_BASE = Path(__file__).parent / "generated"

# Recraft v3 — purpose-built for illustration/vector styles
MODEL = "fal-ai/recraft-v3"

# colored_stencil = flat color regions, hard edges, no gradients — perfect for mokuhanga
RECRAFT_STYLE = "vector_illustration/colored_stencil"

# Background chroma-key green — exclude from the colors hint we pass to the model
CHROMA_GREEN = "#00FF00"

# Pack name → section header prefix in the prompts file
PACK_SECTIONS = {
    "kacho":    "## Kacho-e Pack",
    "moribana": "## Moribana Pack",
}

# ---------------------------------------------------------------------------
# Color utilities
# ---------------------------------------------------------------------------

def hex_to_rgb(hex_color: str) -> dict:
    """Convert '#RRGGBB' to {'r': R, 'g': G, 'b': B}."""
    h = hex_color.lstrip('#')
    return {"r": int(h[0:2], 16), "g": int(h[2:4], 16), "b": int(h[4:6], 16)}


def extract_colors(prompt: str) -> list[dict]:
    """Extract hex color codes from prompt text, excluding chroma-key green."""
    hexes = re.findall(r'#([0-9A-Fa-f]{6})', prompt)
    seen = set()
    result = []
    for h in hexes:
        full = f"#{h.upper()}"
        if full not in seen and full != CHROMA_GREEN:
            seen.add(full)
            result.append(hex_to_rgb(full))
    return result

# ---------------------------------------------------------------------------
# Prompt parsing
# ---------------------------------------------------------------------------

def parse_prompts(md_path: Path) -> list[dict]:
    """
    Parse element-prompts-kacho-moribana.md into a list of:
      { pack, element_id, element_name, variation, prompt, width, height }
    """
    text = md_path.read_text(encoding="utf-8")
    results = []

    current_pack = None
    current_element_id = None
    current_element_name = None
    current_variation = None

    for line in text.splitlines():
        # Pack section header: ## Kacho-e Pack 花鳥画
        for pack_key, prefix in PACK_SECTIONS.items():
            if line.startswith(prefix):
                current_pack = pack_key
                break

        # Element header: ### 1. Heron Standing (鷺 Sagi)
        m = re.match(r'^### \d+\. (.+?)(?:\s*[\(（].*)?$', line)
        if m and current_pack:
            raw = m.group(1).strip()
            # Derive id: lowercase, spaces→hyphens, strip em-dash suffixes and parens
            raw_id = re.sub(r'\s*[—–].*$', '', raw).strip()  # drop " — subtitle" part
            element_id = re.sub(r'[^\w\s-]', '', raw_id).strip().lower().replace(' ', '-')
            current_element_id = element_id
            current_element_name = raw
            current_variation = None

        # Variation header: #### Variation A — Patient Stance
        m = re.match(r'^#### Variation ([A-C]) —', line)
        if m and current_element_id:
            current_variation = m.group(1).lower()  # 'a', 'b', 'c'

        # Prompt blockquote: > Japanese woodblock print...
        if line.startswith('> ') and current_variation:
            prompt_text = line[2:].strip()
            # Remove backtick hex codes (e.g. `#A8B5C0`) — keep the rest
            prompt_clean = re.sub(r'`([^`]+)`', r'\1', prompt_text)

            # Detect image size from "PNG 1024×768" or "PNG 1024x768"
            size_match = re.search(r'PNG\s+(\d+)[x×](\d+)', prompt_clean, re.IGNORECASE)
            if size_match:
                w, h = int(size_match.group(1)), int(size_match.group(2))
            else:
                w, h = 1024, 768  # sensible default

            results.append({
                "pack": current_pack,
                "element_id": current_element_id,
                "element_name": current_element_name,
                "variation": current_variation,
                "prompt": prompt_clean,
                "width": w,
                "height": h,
            })
            current_variation = None  # reset — next variation header needed

    return results


# ---------------------------------------------------------------------------
# Generation
# ---------------------------------------------------------------------------

def generate_image(prompt: str, width: int, height: int) -> tuple[bytes, str]:
    """Call Recraft v3 via fal.ai. Returns (content_bytes, extension)."""
    colors = extract_colors(prompt)
    result = fal_client.subscribe(
        MODEL,
        arguments={
            "prompt": prompt,
            "image_size": {"width": width, "height": height},
            "style": RECRAFT_STYLE,
            "colors": colors,
        },
    )
    image_url = result["images"][0]["url"]
    content_type = result["images"][0].get("content_type", "")

    response = requests.get(image_url, timeout=60)
    response.raise_for_status()

    # vector_illustration styles return SVG — save directly
    if "svg" in content_type or image_url.endswith(".svg"):
        return response.content, "svg"

    # Raster styles (webp/jpeg) — convert to PNG via Pillow
    from PIL import Image
    import io
    img = Image.open(io.BytesIO(response.content)).convert("RGBA")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue(), "png"


def output_path(out_dir: Path, entry: dict, ext: str = "png") -> Path:
    filename = f"{entry['pack']}-{entry['element_id']}-{entry['variation']}.{ext}"
    return out_dir / filename


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def cmd_list(prompts: list[dict]):
    """Print all available elements and packs."""
    by_pack = {}
    for p in prompts:
        by_pack.setdefault(p["pack"], {}).setdefault(p["element_id"], p["element_name"])
    for pack, elements in by_pack.items():
        print(f"\n  {pack} ({len(elements)} elements):")
        for eid, ename in elements.items():
            print(f"    {eid}  —  {ename}")
    print()


def run_generation(entries: list[dict], out_dir: Path, dry_run: bool, force: bool):
    """Generate images for the given list of prompt entries."""
    out_dir.mkdir(parents=True, exist_ok=True)

    total = len(entries)
    skipped = 0
    generated = 0
    errors = 0

    for i, entry in enumerate(entries, 1):
        label = f"[{i}/{total}] {entry['element_name']} — Variation {entry['variation'].upper()}"

        # Check if any output format already exists
        existing = next((output_path(out_dir, entry, x) for x in ("svg", "png") if output_path(out_dir, entry, x).exists()), None)
        if existing and not force:
            print(f"  SKIP  {label}  →  {existing.name} (already exists, use --force to overwrite)")
            skipped += 1
            continue

        if dry_run:
            colors = extract_colors(entry["prompt"])
            color_hexes = ['#{:02X}{:02X}{:02X}'.format(c['r'], c['g'], c['b']) for c in colors]
            print(f"  DRY   {label}")
            print(f"        {entry['width']}×{entry['height']}  style={RECRAFT_STYLE}")
            print(f"        colors={color_hexes}")
            print(f"        {entry['prompt'][:120]}...")
            continue

        print(f"  GEN   {label}  ({entry['width']}×{entry['height']})")
        t0 = time.time()
        try:
            img_bytes, ext = generate_image(entry["prompt"], entry["width"], entry["height"])
            dest = output_path(out_dir, entry, ext)
            dest.write_bytes(img_bytes)
            elapsed = time.time() - t0
            print(f"        ✓ saved {len(img_bytes)//1024}KB in {elapsed:.1f}s  [{ext}]")
            generated += 1
        except Exception as e:
            print(f"        ✗ ERROR: {e}")
            errors += 1

    print()
    if dry_run:
        print(f"Dry run — {total} prompts listed, no images generated.")
    else:
        print(f"Done — {generated} generated, {skipped} skipped, {errors} errors.")
    if errors:
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Generate Mokuri element PNGs via fal.ai Flux",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("--pack", choices=["kacho", "moribana"],
                        help="Generate all elements in a pack")
    parser.add_argument("--element", metavar="ID",
                        help="Generate one element by id (e.g. 'heron', 'suiban')")
    parser.add_argument("--variation", choices=["a", "b", "c"],
                        help="Limit to one variation (use with --element)")
    parser.add_argument("--out", metavar="DIR",
                        help="Output directory (default: dev/generated/{pack}/)")
    parser.add_argument("--dry-run", action="store_true",
                        help="Print prompts without calling the API")
    parser.add_argument("--force", action="store_true",
                        help="Overwrite existing files")
    parser.add_argument("--list", action="store_true",
                        help="List all available elements and exit")
    args = parser.parse_args()

    if not PROMPTS_FILE.exists():
        print(f"ERROR: Prompts file not found: {PROMPTS_FILE}")
        sys.exit(1)

    prompts = parse_prompts(PROMPTS_FILE)

    if args.list:
        cmd_list(prompts)
        return

    # Require at least --pack or --element
    if not args.pack and not args.element:
        parser.print_help()
        sys.exit(1)

    # Check API key (skip for dry-run)
    if not args.dry_run:
        if not os.environ.get("FAL_KEY"):
            print("ERROR: FAL_KEY not set.")
            print("  Create dev/.env with: FAL_KEY=your_key_here")
            print("  Or set the environment variable directly.")
            sys.exit(1)

    # Filter prompts
    entries = prompts
    if args.pack:
        entries = [p for p in entries if p["pack"] == args.pack]
    if args.element:
        entries = [p for p in entries if p["element_id"] == args.element]
    if args.variation:
        entries = [p for p in entries if p["variation"] == args.variation]

    if not entries:
        print(f"No prompts matched your filters.")
        sys.exit(1)

    # Determine output directory
    if args.out:
        out_dir = Path(args.out)
    elif args.pack:
        out_dir = DEFAULT_OUT_BASE / args.pack
    elif args.element:
        # Figure out pack from the first matching entry
        out_dir = DEFAULT_OUT_BASE / entries[0]["pack"]
    else:
        out_dir = DEFAULT_OUT_BASE

    print(f"\nMokuri Element Generator")
    print(f"  Model:  {MODEL}  [{RECRAFT_STYLE}]")
    print(f"  Output: {out_dir}")
    print(f"  Tasks:  {len(entries)} image(s)")
    if args.dry_run:
        print(f"  Mode:   DRY RUN\n")
    else:
        print()

    run_generation(entries, out_dir, dry_run=args.dry_run, force=args.force)


if __name__ == "__main__":
    main()
