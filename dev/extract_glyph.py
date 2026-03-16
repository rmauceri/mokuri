"""Extract 墨 glyph outline from Yu Gothic Bold as SVG fill path for hanko element."""
from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
import re

font = TTFont("C:/Windows/Fonts/yugothb.ttc", fontNumber=0)
cmap = font.getBestCmap()
glyph_name = cmap.get(0x58A8)  # 墨
glyphset = font.getGlyphSet()
glyf = font["glyf"]
glyph = glyf[glyph_name]

rpen = RecordingPen()
glyphset[glyph_name].draw(rpen)

xMin, yMin, xMax, yMax = glyph.xMin, glyph.yMin, glyph.xMax, glyph.yMax
gw = xMax - xMin
gh = yMax - yMin

# Target: fit in seal area (15,12)-(45,48) = 30x36
tw, th = 30, 36
scale = min(tw / gw, th / gh)
aw = gw * scale
ah = gh * scale
ox = 15 + (tw - aw) / 2
oy = 12 + (th - ah) / 2

def tx(x):
    return round((x - xMin) * scale + ox, 1)

def ty(y):
    return round((yMax - y) * scale + oy, 1)

parts = []
for op, args in rpen.value:
    if op == "moveTo":
        pt = args[0]
        parts.append(f"M{tx(pt[0])},{ty(pt[1])}")
    elif op == "lineTo":
        pt = args[0]
        parts.append(f"L{tx(pt[0])},{ty(pt[1])}")
    elif op == "qCurveTo":
        # TrueType quadratic splines - may have multiple on-curve implied points
        for j in range(len(args) - 1):
            cp = args[j]
            ep = args[j + 1]
            parts.append(f"Q{tx(cp[0])},{ty(cp[1])} {tx(ep[0])},{ty(ep[1])}")
    elif op == "curveTo":
        c1, c2, ep = args[0], args[1], args[2]
        parts.append(f"C{tx(c1[0])},{ty(c1[1])} {tx(c2[0])},{ty(c2[1])} {tx(ep[0])},{ty(ep[1])}")
    elif op in ("closePath", "endPath"):
        parts.append("Z")

path_d = " ".join(parts)

# Stats
num_subpaths = path_d.count("M")
coords = re.findall(r"[-+]?[0-9]*\.?[0-9]+", path_d)
xs = [float(coords[i]) for i in range(0, len(coords), 2)]
ys = [float(coords[i]) for i in range(1, len(coords), 2)]

print(f"Glyph: {gw}x{gh}, scale={scale:.6f}")
print(f"Rendered size: {aw:.1f}x{ah:.1f}, offset=({ox:.1f},{oy:.1f})")
print(f"Subpaths: {num_subpaths}")
print(f"X range: {min(xs):.1f} to {max(xs):.1f}")
print(f"Y range: {min(ys):.1f} to {max(ys):.1f}")
print(f"Path length: {len(path_d)} chars")
print()
print("PATH DATA:")
print(path_d)
