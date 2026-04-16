#!/usr/bin/env python3
"""
Mokuri Element Image Generator — Skill Script
Generates a single Forge-ready PNG from a short natural-language description.

Usage:
    python generate.py "tortoise crawling"
    python generate.py "tall heron standing" --orientation portrait
    python generate.py "koi fish" --colors "#D4835A #E8B87A #F0D8C0 #1A1A1A"
    python generate.py "mountain peak" --dry-run

Requires: FAL_KEY in dev/.env or environment variable
"""

import argparse
import os
import re
import sys
import time
from pathlib import Path

# ---------------------------------------------------------------------------
# Locate project root and load .env
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
# Skill lives at .github/skills/mokuri-element-gen/ — project root is 3 levels up
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent

try:
    from dotenv import load_dotenv
    env_file = PROJECT_ROOT / "dev" / ".env"
    if env_file.exists():
        load_dotenv(env_file)
    else:
        load_dotenv()
except ImportError:
    pass  # dotenv optional; FAL_KEY can be set as a real env var

import fal_client
import requests

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

DEFAULT_OUT_DIR = PROJECT_ROOT / "dev" / "generated" / "skill"

# Nano Banana (Gemini 2.5 Flash Image)
MODEL = "fal-ai/nano-banana"

CHROMA_KEY = "#FF00FF"

ORIENTATIONS = {
    "landscape": (1024, 768, "4:3"),
    "portrait":  (768, 1024, "3:4"),
    "square":    (1024, 1024, "1:1"),
}

# Grounding preamble — distilled from the full generation guide.
# This is prepended to every prompt to ensure mokuhanga-compatible output.
GROUNDING_PREAMBLE = """\
You are generating color-separation artwork for Japanese woodblock (mokuhanga) printmaking. \
The image will be processed by a tracing pipeline that extracts each flat color region as a \
separate SVG path. The pipeline REQUIRES:

1. BACKGROUND: Solid #FF00FF (pure magenta) filling the entire canvas. \
   No magenta anywhere in the subject. No shadows, halos, or gradients at the edges.
2. FLAT COLORS: Each region of the subject must be a single perfectly uniform flat color — \
   zero gradients, zero shading, zero highlights, zero texture within any region. \
   Paint-bucket-fill flat.
3. EXACTLY 4 COLORS in the subject (excluding background). The darkest color must be used \
   ONLY for small features (eye, beak tip, fine lines) — under 8% of subject pixels.
4. NO OUTLINES: Color regions meet edge-to-edge. No dark border around the subject or \
   between regions. The carved groove is implied by where colors meet, not drawn.
5. HARD EDGES: Stencil-sharp transitions between colors. Minimal anti-aliasing (1–2px OK). \
   No feathered or blended edges.
6. SINGLE SUBJECT: One isolated subject on the magenta background. No environment, no ground, \
   no water, no other elements. Subject fills ~60% of the canvas.
7. COMPLETE BODY: The entire subject must be fully visible from head to foot-tips or \
   wing-tips. No cropping. Feet or claws rest directly on the magenta background. \
   Do not suggest water, ground, soil, or any perching surface.
8. STYLE: Traditional mokuhanga / shin-hanga aesthetic. Elegant simplified forms like \
   Hokusai or Hiroshige kacho-e. NOT logo art, NOT anime, NOT sticker illustration.

Mental model: "Paint this as color separations for a woodblock print. Each color is a \
separate carved block that prints edge-to-edge with no outlines."

Element prompt follows:
"""


# ---------------------------------------------------------------------------
# Prompt construction
# ---------------------------------------------------------------------------

def build_prompt(description: str, colors: list[str] | None = None,
                 width: int = 1024, height: int = 768) -> str:
    """
    Build a full generation prompt from a short description.
    If colors are provided, they're woven into the prompt.
    Otherwise the model chooses appropriate mokuhanga colors.
    """
    # Clean up description
    desc = description.strip().rstrip(".")

    # Build the element-specific prompt
    parts = [f"Japanese woodblock print {desc}."]
    parts.append(f"Solid #FF00FF (magenta) background.")

    if colors:
        hex_list = [c.strip() for c in colors if c.strip()]
        if len(hex_list) >= 4:
            parts.append(
                f"4 flat color zones: {hex_list[0]} (primary/largest area), "
                f"{hex_list[1]} (secondary), {hex_list[2]} (tertiary), "
                f"{hex_list[3]} (small detail features only, under 8% of pixels)."
            )
        else:
            parts.append(f"Use these colors as a starting palette: {', '.join(hex_list)}.")
    else:
        parts.append(
            "Choose 4 harmonious flat colors appropriate to the subject in a "
            "traditional mokuhanga palette. The darkest color is for small detail "
            "features only (under 8% of pixels)."
        )

    parts.append("ZERO outlines. Hard stencil edges between color regions.")
    parts.append(f"Single isolated subject filling ~60% of canvas.")
    parts.append("Mokuhanga / shin-hanga aesthetic.")
    parts.append(f"PNG {width}×{height}.")

    return GROUNDING_PREAMBLE + " ".join(parts)


# ---------------------------------------------------------------------------
# Balance check
# ---------------------------------------------------------------------------

LOW_BALANCE_THRESHOLD = 1.00  # USD — warn if below this

def check_balance() -> dict | None:
    """Query fal.ai account balance. Returns {'balance': float, 'currency': str} or None on error."""
    fal_key = os.environ.get("FAL_KEY")
    if not fal_key:
        return None
    try:
        resp = requests.get(
            "https://api.fal.ai/v1/account/billing",
            headers={"Authorization": f"Key {fal_key}"},
            timeout=10,
        )
        resp.raise_for_status()
        data = resp.json()
        # Navigate the response — structure may vary
        if "credits" in data:
            return {
                "balance": float(data["credits"].get("current_balance", 0)),
                "currency": data["credits"].get("currency", "USD"),
            }
        # Fallback: try top-level balance field
        if "balance" in data:
            return {"balance": float(data["balance"]), "currency": "USD"}
        return {"balance": 0, "currency": "USD", "raw": data}
    except requests.exceptions.HTTPError as e:
        if e.response is not None and e.response.status_code == 403:
            return {"error": "forbidden"}
        return None
    except Exception:
        return None


def print_balance():
    """Print the current fal.ai account balance."""
    info = check_balance()
    if info is None:
        print("Could not retrieve balance. Is FAL_KEY set?")
        return
    if info.get("error") == "forbidden":
        print("\n  fal.ai Balance: requires admin API key")
        print("  Your key can generate images but can't query billing.")
        print("  Check balance at: https://fal.ai/dashboard/billing")
        print()
        return
    bal = info["balance"]
    cur = info["currency"]
    print(f"\n  fal.ai Balance: ${bal:.2f} {cur}")
    if bal < LOW_BALANCE_THRESHOLD:
        print(f"  ⚠ Low balance — generation may fail")
    else:
        print(f"  ✓ Sufficient for image generation")
    if "raw" in info:
        print(f"  (Raw response: {info['raw']})")
    print()


# ---------------------------------------------------------------------------
# Generation
# ---------------------------------------------------------------------------

def generate_image(prompt: str, aspect_ratio: str) -> tuple[bytes, str]:
    """Call fal.ai and return (png_bytes, extension)."""
    result = fal_client.subscribe(
        MODEL,
        arguments={
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "output_format": "png",
            "num_images": 1,
        },
    )
    image_url = result["images"][0]["url"]
    response = requests.get(image_url, timeout=60)
    response.raise_for_status()
    return response.content, "png"


def slugify(text: str) -> str:
    """Convert description to a filename-safe slug."""
    slug = text.lower().strip()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug[:60]  # cap length


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Generate a Mokuri element PNG from a short description",
    )
    parser.add_argument("description", nargs="?", default=None,
                        help="Short description of the element (e.g. 'tortoise crawling')")
    parser.add_argument("--orientation", choices=list(ORIENTATIONS.keys()),
                        default="landscape",
                        help="Image orientation (default: landscape)")
    parser.add_argument("--colors", metavar="HEXCODES",
                        help='4 hex colors in quotes: "#AA0000 #BB1111 #CC2222 #1A1A1A"')
    parser.add_argument("--out", metavar="PATH",
                        help="Output file path (default: dev/generated/skill/<slug>.png)")
    parser.add_argument("--dry-run", action="store_true",
                        help="Print the full prompt without calling the API")
    parser.add_argument("--balance", action="store_true",
                        help="Check fal.ai account balance and exit")

    args = parser.parse_args()

    # Balance check mode
    if args.balance:
        if not os.environ.get("FAL_KEY"):
            print("ERROR: FAL_KEY not set.")
            sys.exit(1)
        print_balance()
        return

    # Require description for generation
    if not args.description:
        parser.print_help()
        sys.exit(1)

    # Parse colors if provided
    colors = None
    if args.colors:
        colors = re.findall(r'#[0-9A-Fa-f]{6}', args.colors)
        if not colors:
            print(f"WARNING: No valid hex colors found in '{args.colors}', letting model choose.")

    # Build prompt
    width, height, aspect_ratio = ORIENTATIONS[args.orientation]
    prompt = build_prompt(args.description, colors, width, height)

    # Determine output path
    if args.out:
        out_path = Path(args.out)
    else:
        slug = slugify(args.description)
        out_path = DEFAULT_OUT_DIR / f"{slug}.png"

    if args.dry_run:
        print(f"\n{'='*60}")
        print(f"MOKURI ELEMENT GENERATOR — DRY RUN")
        print(f"{'='*60}")
        print(f"  Description:  {args.description}")
        print(f"  Orientation:  {args.orientation} ({width}×{height})")
        print(f"  Aspect ratio: {aspect_ratio}")
        print(f"  Model:        {MODEL}")
        print(f"  Output:       {out_path}")
        if colors:
            print(f"  Colors:       {', '.join(colors)}")
        print(f"\n--- FULL PROMPT ---\n")
        print(prompt)
        print()
        return

    # Check API key
    if not os.environ.get("FAL_KEY"):
        print("ERROR: FAL_KEY not set.")
        print(f"  Create {PROJECT_ROOT / 'dev' / '.env'} with: FAL_KEY=your_key_here")
        print("  Or set the environment variable directly.")
        sys.exit(1)

    # Pre-generation balance check (silent if billing API unavailable)
    bal_info = check_balance()
    if bal_info and "balance" in bal_info and bal_info["balance"] < LOW_BALANCE_THRESHOLD:
        print(f"\n  ⚠ Low fal.ai balance: ${bal_info['balance']:.2f} — generation may fail")

    # Generate
    print(f"\nMokuri Element Generator")
    print(f"  Subject:  {args.description}")
    print(f"  Size:     {width}×{height} ({args.orientation})")
    print(f"  Model:    {MODEL}")
    print(f"  Output:   {out_path}\n")

    t0 = time.time()
    try:
        img_bytes, ext = generate_image(prompt, aspect_ratio)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_bytes(img_bytes)
        elapsed = time.time() - t0
        print(f"  ✓ Saved {len(img_bytes)//1024}KB in {elapsed:.1f}s")
        print(f"  → {out_path}")
        print(f"\n  Next: Open Element Forge and import this PNG")
    except Exception as e:
        print(f"  ✗ ERROR: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
