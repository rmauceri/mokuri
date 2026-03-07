// ============================================================
//  MOKURI — Print Engine
//  Renders the SVG composition into a textured woodblock print
// ============================================================

const PrintEngine = (() => {

  // Default paper base (Kozo); overridden per-print by paperType.base
  const PAPER_BASE = { r: 245, g: 240, b: 230 };
  function paperBaseFromType(paperType) {
    if (!paperType || !paperType.base) return PAPER_BASE;
    const c = parseColor(paperType.base);
    return c;
  }

  // ============================================================
  //  COLOR UTILITIES
  // ============================================================

  function parseColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function darken(hex, amount) {
    const c = parseColor(hex);
    return `rgb(${Math.round(c.r * (1 - amount))},${Math.round(c.g * (1 - amount))},${Math.round(c.b * (1 - amount))})`;
  }

  // ============================================================
  //  PROCEDURAL VARIATION — seeded RNG + path perturbation
  // ============================================================

  // Simple seeded PRNG (mulberry32)
  function seededRng(seed) {
    let s = seed | 0;
    return function() {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Perturb numeric coordinates in an SVG path `d` string
  // amount: max pixel offset per coordinate (e.g., 1.5)
  // rng: seeded random function returning 0-1
  function perturbPath(d, amount, rng) {
    if (!amount || amount < 0.1) return d;
    // Match numbers (including negatives and decimals) that are coordinates
    return d.replace(/(-?\d+\.?\d*)/g, (match) => {
      const val = parseFloat(match);
      const offset = (rng() - 0.5) * 2 * amount;
      return (val + offset).toFixed(1);
    });
  }

  // ============================================================
  //  PAPER TEXTURE — Canvas base layer (washi fiber structure)
  // ============================================================

  function drawPaperTexture(ctx, w, h, paperType) {
    ctx.fillStyle = paperType.base;
    ctx.fillRect(0, 0, w, h);

    // Prominent fiber bundles — density varies by paper type
    const bundleCount = Math.floor(w * h / 2000 * paperType.fiberDensity);
    for (let i = 0; i < bundleCount; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const len = 30 + Math.random() * 80;
      const angle = (Math.random() - 0.5) * 0.4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      const a = (paperType.fiberOpacity * 0.75 + Math.random() * paperType.fiberOpacity).toFixed(3);
      ctx.strokeStyle = `rgba(185,170,140,${a})`;
      ctx.lineWidth = 1.5 + Math.random() * 3;
      ctx.stroke();
    }

    // Fine individual fibers
    const fineCount = Math.floor(w * h / 400 * paperType.fiberDensity);
    for (let i = 0; i < fineCount; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const len = 8 + Math.random() * 30;
      const angle = (Math.random() - 0.5) * 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      const a = (paperType.fiberOpacity * 0.4 + Math.random() * paperType.fiberOpacity * 0.5).toFixed(3);
      ctx.strokeStyle = `rgba(200,185,155,${a})`;
      ctx.lineWidth = 0.3 + Math.random() * 1;
      ctx.stroke();
    }

    // Tonal warmth patches — number varies by paper type
    for (let i = 0; i < paperType.warmPatches; i++) {
      const cx = Math.random() * w;
      const cy = Math.random() * h;
      const r = 60 + Math.random() * 180;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, Math.random() > 0.5 ? 'rgba(215,200,170,0.05)' : 'rgba(235,228,215,0.04)');
      grad.addColorStop(1, `${paperType.base}00`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }
  }

  // ============================================================
  //  RENDER COLORED SVG — organic edges, ink pooling, misregistration
  // ============================================================

  function renderColoredSvg(elements, palette, paperW, paperH, scale, inkLoad, impOffset, atmosphere, backgroundCarveStrokes) {
    inkLoad = inkLoad || { opacityMul: 1.0, edgeMul: 1.0, turbScale: 3.5, misreg: 3 };
    impOffset = impOffset || { x: 0, y: 0 };
    atmosphere = atmosphere || {};
    const w = paperW * scale;
    const h = paperH * scale;
    const seed = Math.floor(Math.random() * 10000);
    const inkOpacity = Math.min(1, 0.92 * inkLoad.opacityMul);
    const edgeWeight = 2.5 * inkLoad.edgeMul;
    const edgeOpacity = Math.min(0.7, 0.45 * inkLoad.edgeMul);

    // feTurbulence makes every edge slightly wobbly/hand-carved
    const defs = `<defs>
      <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%"
              color-interpolation-filters="sRGB">
        <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3"
                      seed="${seed}" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="${inkLoad.turbScale}"
                          xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>`;

    let svgContent = '';
    let bokashiDefs = '';
    let bokashiCount = 0;

    // Atmosphere layer (sky, ground, mist) — rendered first, behind elements
    if (atmosphere.sky || atmosphere.ground || atmosphere.mist) {
      const horizonY = paperH * (atmosphere.horizon || 0.62);
      let atmoDefs = '';
      let atmoBody = '';

      // Sky
      if (atmosphere.sky && atmosphere.sky.stops) {
        const gid = 'pe-sky';
        atmoDefs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">`;
        atmosphere.sky.stops.forEach(s => {
          atmoDefs += `<stop offset="${s.offset}" stop-color="${s.color}" stop-opacity="${s.opacity}"/>`;
        });
        atmoDefs += `</linearGradient>`;
        const segs = 12;
        let skyPath = `M0,0 L${paperW},0 L${paperW},${horizonY}`;
        for (let i = segs; i >= 0; i--) {
          const x = (i / segs) * paperW;
          const wb = Math.sin(i * 1.3 + 2.7) * paperH * 0.015 + Math.sin(i * 2.9) * paperH * 0.008;
          skyPath += ` L${x.toFixed(1)},${(horizonY + wb).toFixed(1)}`;
        }
        skyPath += ' Z';
        atmoBody += `<path d="${skyPath}" fill="url(#${gid})"/>`;
      }

      // Ground
      if (atmosphere.ground && atmosphere.ground.stops) {
        const gid = 'pe-ground';
        atmoDefs += `<linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">`;
        atmosphere.ground.stops.forEach(s => {
          atmoDefs += `<stop offset="${s.offset}" stop-color="${s.color}" stop-opacity="${s.opacity}"/>`;
        });
        atmoDefs += `</linearGradient>`;
        const segs = 12;
        let gPath = `M0,${paperH} L${paperW},${paperH} L${paperW},${horizonY}`;
        for (let i = segs; i >= 0; i--) {
          const x = (i / segs) * paperW;
          const wb = Math.sin(i * 1.3 + 2.7) * paperH * 0.015 + Math.sin(i * 2.9) * paperH * 0.008;
          gPath += ` L${x.toFixed(1)},${(horizonY + wb).toFixed(1)}`;
        }
        gPath += ' Z';
        atmoBody += `<path d="${gPath}" fill="url(#${gid})"/>`;
      }

      // Mist bands
      if (atmosphere.mist > 0 && atmosphere.paperBase) {
        for (let i = 0; i < atmosphere.mist; i++) {
          const bandY = paperH * (0.25 + i * 0.2 + Math.sin(i * 3.7) * 0.05);
          const bandH = paperH * (0.06 + Math.sin(i * 2.1) * 0.02);
          const mid = `pe-mist-${i}`;
          atmoDefs += `<linearGradient id="${mid}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${atmosphere.paperBase}" stop-opacity="0"/>
            <stop offset="0.3" stop-color="${atmosphere.paperBase}" stop-opacity="0.6"/>
            <stop offset="0.5" stop-color="${atmosphere.paperBase}" stop-opacity="0.75"/>
            <stop offset="0.7" stop-color="${atmosphere.paperBase}" stop-opacity="0.6"/>
            <stop offset="1" stop-color="${atmosphere.paperBase}" stop-opacity="0"/>
          </linearGradient>`;
          const sg = 10;
          let mPath = `M0,${bandY}`;
          for (let s = 0; s <= sg; s++) {
            const x = (s / sg) * paperW;
            const dy = Math.sin(s * 1.7 + i * 2.3) * bandH * 0.3;
            mPath += ` L${x.toFixed(1)},${(bandY + dy).toFixed(1)}`;
          }
          for (let s = sg; s >= 0; s--) {
            const x = (s / sg) * paperW;
            const dy = Math.sin(s * 1.4 + i * 1.8) * bandH * 0.25;
            mPath += ` L${x.toFixed(1)},${(bandY + bandH + dy).toFixed(1)}`;
          }
          mPath += ' Z';
          atmoBody += `<path d="${mPath}" fill="url(#${mid})"/>`;
        }
      }

      if (atmoDefs) bokashiDefs += atmoDefs;
      if (atmoBody) svgContent += `<g filter="url(#wobble)">${atmoBody}</g>`;
    }

    // Background carve strokes (between atmosphere and elements)
    if (backgroundCarveStrokes && backgroundCarveStrokes.length && typeof carveStrokeRenderData === 'function') {
      backgroundCarveStrokes.forEach(stroke => {
        if (!stroke.points || stroke.points.length < 2) return;
        const items = carveStrokeRenderData(stroke, '#f5f0e6', 'rgba(0,0,0,0)');
        items.forEach(item => {
          if (item.c === 'rgba(0,0,0,0)') return;
          svgContent += `<path d="${item.d}" fill="none" stroke="${item.c}" stroke-width="${item.w}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${(item.a * 0.95).toFixed(3)}"/>`;
        });
      });
    }

    elements.forEach(el => {
      const def = MOKURI_ELEMENTS.find(d => d.id === el.defId);
      if (!def) return;
      const carve = def.carveLevels[Math.min(el.carveLevel, def.carveLevels.length - 1)];
      const isBlock = el.carveLevel === 0;
      const vb = def.viewBox.split(' ').map(Number);
      const offX = -vb[2] / 2;
      const offY = -vb[3] / 2;

      // Procedural variation — seeded per element instance
      const rng = seededRng(el.variationSeed || el.id * 31);
      // Hanko stamps: no perturbation (precision-carved, and arcs break with perturbed flags)
      const isHanko = def.hanko;
      const perturbAmt = isHanko ? 0 : (isBlock ? 0.6 : (el.carveLevel === 1 ? 0.9 : 1.3));
      const perturb = (d) => perturbPath(d, perturbAmt, rng);

      // Per-element spatial misregistration + impression offset
      // Hanko: reduced misregistration (stamped separately, more carefully)
      const misScale = isHanko ? 0.2 : 1.0;
      const misX = (Math.random() - 0.5) * inkLoad.misreg * misScale + impOffset.x;
      const misY = (Math.random() - 0.5) * inkLoad.misreg * misScale + impOffset.y;

      // Hanko stamps are pressed after printing — position mirrors with the composition
      // (so it stays near the same elements) but content is pre-flipped so text reads correctly
      const xform = isHanko
        ? `translate(${el.x + misX},${el.y + misY}) rotate(${-el.rotation}) scale(${-el.scaleX},${el.scaleY})`
        : `translate(${el.x + misX},${el.y + misY}) rotate(${el.rotation}) scale(${el.scaleX},${el.scaleY})`;
      const inner = `translate(${offX},${offY})`;

      svgContent += `<g transform="${xform}" filter="url(#wobble)"><g transform="${inner}">`;

      const HANKO_VERMILLION = '#c23b22';
      const zoneColor = (zoneId) => {
        if (isHanko) return (el.colorOverrides && el.colorOverrides[zoneId]) || HANKO_VERMILLION;
        const z = def.colorZones.find(c => c.id === zoneId);
        return (el.colorOverrides && el.colorOverrides[zoneId])
          || (z ? palette.colors[z.defaultPaletteSlot % palette.colors.length] : palette.colors[0]);
      };

      // Bokashi fill — returns solid color or gradient URL
      const zoneFillAttr = (zoneId) => {
        const bokDir = el.zoneBokashi && el.zoneBokashi[zoneId];
        if (!bokDir) return zoneColor(zoneId);
        const gid = `bg${bokashiCount++}`;
        const dirs = { up: [0.5,1,0.5,0], down: [0.5,0,0.5,1], left: [1,0.5,0,0.5], right: [0,0.5,1,0.5] };
        const [x1,y1,x2,y2] = dirs[bokDir] || dirs.down;
        const col = zoneColor(zoneId);
        bokashiDefs += `<linearGradient id="${gid}" gradientUnits="objectBoundingBox" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">
          <stop offset="0%" stop-color="${col}" stop-opacity="1"/>
          <stop offset="100%" stop-color="${col}" stop-opacity="0.08"/>
        </linearGradient>`;
        return `url(#${gid})`;
      };

      // Render fill paths: dark edge behind (ink pooling) + semi-transparent ink
      const renderFills = (fillPaths) => {
        fillPaths.forEach(p => {
          if (p.type !== 'fill') return;
          const col = zoneColor(p.zone);
          const fill = zoneFillAttr(p.zone);
          const pd = perturb(p.d);
          svgContent += `<path d="${pd}" fill="none" stroke="${darken(col, 0.35)}" stroke-width="${edgeWeight}" stroke-linejoin="round" stroke-opacity="${edgeOpacity.toFixed(2)}"/>`;
          svgContent += `<path d="${pd}" fill="${fill}" fill-opacity="${inkOpacity.toFixed(2)}" stroke="none"/>`;
        });
      };

      if (isBlock) {
        renderFills(carve.paths);
      } else {
        renderFills(def.carveLevels[0].paths);
        carve.paths.forEach(p => {
          const col = zoneColor(p.zone);
          const pd = perturb(p.d);
          if (p.type === 'fill') {
            const fill = zoneFillAttr(p.zone);
            svgContent += `<path d="${pd}" fill="${fill}" fill-opacity="${inkOpacity.toFixed(2)}" stroke="${darken(col, 0.3)}" stroke-width="0.8" stroke-opacity="${(0.4 * inkLoad.edgeMul).toFixed(2)}" stroke-linejoin="round"/>`;
          } else if (p.type === 'stroke') {
            // Hanko strokes are carved-away lines — reveal paper, not ink
            const strokeCol = isHanko ? (atmosphere.paperBase || '#f5f0e6') : darken(col, 0.45);
            const strokeOpac = isHanko ? '0.95' : '0.85';
            svgContent += `<path d="${pd}" fill="none" stroke="${strokeCol}" stroke-width="${p.strokeWidth || 1.5}" stroke-opacity="${strokeOpac}" stroke-linecap="round" stroke-linejoin="round"/>`;
          }
        });
      }

      // Carve pattern for this element — texture from the carved block surface
      // For print: transparent bg (no paper rect through multiply), bold dark strokes
      let printPatternFill = null;
      let strokePatternFill = null;
      if (el.carvePattern && el.carvePattern !== 'none' && typeof generateCarvePatternSvg === 'function') {
        // Dark overlay pattern — carving marks visible through ink
        const ppid = `pe-cp-${el.id}-${el.carvePattern}`;
        const patSvg = generateCarvePatternSvg(el.carvePattern, ppid, null, '#1a1510', { bg: 'none', opacity: '0.8' });
        if (patSvg) {
          bokashiDefs += patSvg;
          printPatternFill = `url(#${ppid})`;
        }
        // Paper-colored groove pattern — subtle texture in carved grooves
        const spid = `pe-sp-${el.id}-${el.carvePattern}`;
        const spatSvg = generateCarvePatternSvg(el.carvePattern, spid, '#f5f0e6', 'rgba(60,50,40,0.4)');
        if (spatSvg) {
          bokashiDefs += spatSvg;
          strokePatternFill = `url(#${spid})`;
        }
      }

      // Pattern overlay on block silhouette — carving texture showing through ink
      if (printPatternFill && !isBlock) {
        const blockFill = def.carveLevels[0].paths.find(p => p.type === 'fill');
        if (blockFill) {
          svgContent += `<path d="${perturb(blockFill.d)}" fill="${printPatternFill}" fill-opacity="0.45" stroke="none"/>`;
        }
      }

      // Custom carve strokes
      if (el.carveStrokes && el.carveStrokes.length) {
        el.carveStrokes.forEach(stroke => {
          if (stroke.points.length < 2) return;
          const items = (typeof carveStrokeRenderData === 'function')
            ? carveStrokeRenderData(stroke, '#f5f0e6', 'rgba(0,0,0,0)')
            : [];
          items.forEach(item => {
            if (item.c === 'rgba(0,0,0,0)') return;
            const sc = (strokePatternFill && item.c === '#f5f0e6') ? strokePatternFill : item.c;
            svgContent += `<path d="${item.d}" fill="none" stroke="${sc}" stroke-width="${item.w}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${(item.a * 0.95).toFixed(3)}"/>`;
          });
        });
      }

      svgContent += '</g></g>';
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${paperW} ${paperH}">
      <defs>${defs.replace('<defs>', '').replace('</defs>', '')}${bokashiDefs}</defs>
      ${svgContent}
    </svg>`;
  }

  // ============================================================
  //  POST-PROCESSING EFFECTS
  // ============================================================

  // Warm desaturation — ink absorbed into washi
  function applyColorMuting(ctx, w, h) {
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;
    for (let i = 0; i < px.length; i += 4) {
      const avg = (px[i] + px[i + 1] + px[i + 2]) / 3;
      const s = 0.9;
      px[i]     = Math.min(255, Math.round(px[i] * s + avg * (1 - s) + 2));
      px[i + 1] = Math.min(255, Math.round(px[i + 1] * s + avg * (1 - s)));
      px[i + 2] = Math.max(0,   Math.round(px[i + 2] * s + avg * (1 - s) - 1));
    }
    ctx.putImageData(d, 0, 0);
  }

  // Baren pressure — broad light/dark bands across inked areas
  function applyBarenPressure(ctx, w, h, intensity, paperBase) {
    intensity = intensity || 1.0;
    paperBase = paperBase || PAPER_BASE;
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;
    const waves = [
      { fx: 0.0012 + Math.random() * 0.002, fy: 0.0008 + Math.random() * 0.001,
        ph: Math.random() * Math.PI * 2, amp: 16 * intensity },
      { fx: 0.003 + Math.random() * 0.002, fy: 0.002 + Math.random() * 0.002,
        ph: Math.random() * Math.PI * 2, amp: 10 * intensity },
    ];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        // Skip paper-colored pixels
        if (Math.abs(px[i] - paperBase.r) < 18 &&
            Math.abs(px[i + 1] - paperBase.g) < 18 &&
            Math.abs(px[i + 2] - paperBase.b) < 18) continue;
        let v = 0;
        for (const f of waves) {
          v += Math.sin(x * f.fx + f.ph) * Math.cos(y * f.fy + f.ph * 0.7) * f.amp;
        }
        px[i]     = Math.min(255, Math.max(0, px[i] + v));
        px[i + 1] = Math.min(255, Math.max(0, px[i + 1] + v));
        px[i + 2] = Math.min(255, Math.max(0, px[i + 2] + v));
      }
    }
    ctx.putImageData(d, 0, 0);
  }

  // Wood grain — visible horizontal streaks via multiply blend
  function applyWoodGrain(ctx, w, h) {
    ctx.save();
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = 0.12;
    const spacing = 2.5 + Math.random() * 2;
    ctx.strokeStyle = '#9b8b70';
    ctx.lineWidth = 0.8;
    for (let y = 0; y < h; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      let cx = 0;
      while (cx < w) {
        const dx = 8 + Math.random() * 15;
        const dy = (Math.random() - 0.5) * 2.5;
        cx += dx;
        ctx.lineTo(cx, y + dy);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  // Fine fiber noise — subtle natural variation
  function applyFineNoise(ctx, w, h, noiseAmt) {
    noiseAmt = noiseAmt || 7;
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;
    for (let i = 0; i < px.length; i += 4) {
      const n = (Math.random() - 0.5) * noiseAmt;
      px[i]     = Math.min(255, Math.max(0, px[i] + n + 0.5));
      px[i + 1] = Math.min(255, Math.max(0, px[i + 1] + n));
      px[i + 2] = Math.min(255, Math.max(0, px[i + 2] + n - 0.5));
    }
    ctx.putImageData(d, 0, 0);
  }

  // Ink absorption variation — uneven density within inked areas
  // Creates lighter patches where paper absorbed more ink (drier spots)
  function applyInkAbsorption(ctx, w, h, paperBase) {
    paperBase = paperBase || PAPER_BASE;
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;

    // Generate absorption map: random patches of lighter ink
    const patchCount = Math.floor(w * h / 8000);
    const patches = [];
    for (let i = 0; i < patchCount; i++) {
      patches.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 15 + Math.random() * 40,
        strength: 0.03 + Math.random() * 0.06,
      });
    }

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        // Skip paper pixels
        if (Math.abs(px[i] - paperBase.r) < 18 &&
            Math.abs(px[i + 1] - paperBase.g) < 18 &&
            Math.abs(px[i + 2] - paperBase.b) < 18) continue;

        // Sum influence of nearby patches
        let lighten = 0;
        for (const p of patches) {
          const dx = x - p.x;
          const dy = y - p.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < p.r * p.r) {
            const t = 1 - Math.sqrt(dist2) / p.r;
            lighten += t * t * p.strength;
          }
        }

        if (lighten > 0) {
          // Lighten toward paper base (simulates ink thinning)
          const blend = Math.min(lighten, 0.15);
          px[i]     = Math.round(px[i] + (paperBase.r - px[i]) * blend);
          px[i + 1] = Math.round(px[i + 1] + (paperBase.g - px[i + 1]) * blend);
          px[i + 2] = Math.round(px[i + 2] + (paperBase.b - px[i + 2]) * blend);
        }
      }
    }
    ctx.putImageData(d, 0, 0);
  }

  // ============================================================
  //  MAIN PRINT PIPELINE
  // ============================================================

  async function print(elements, paletteId, paperW, paperH, opts) {
    opts = opts || {};
    const paperType = opts.paperType || PAPER_TYPES.kozo;
    const inkLoad = opts.inkLoad || INK_LOADS.standard;
    const impressions = opts.impressions || 1;
    const atmosphere = opts.atmosphere || {};
    const bgStrokes = opts.backgroundCarveStrokes || [];
    const palette = PALETTES[paletteId];
    const scale = 2;
    const w = Math.round(paperW * scale);
    const h = Math.round(paperH * scale);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Step 1 — Paper texture base layer (varies by paper type)
    drawPaperTexture(ctx, w, h, paperType);

    // Step 2 — Render SVG with ink/impression settings
    for (let imp = 0; imp < impressions; imp++) {
      const impOffset = imp === 0 ? { x: 0, y: 0 } : {
        x: (Math.random() - 0.5) * 1.2,
        y: (Math.random() - 0.5) * 1.2,
      };
      const impOpacity = impressions === 1 ? 1.0 : (imp === 0 ? 0.85 : 0.5);

      const svgStr = renderColoredSvg(elements, palette, paperW, paperH, scale, inkLoad, impOffset, atmosphere, bgStrokes);
      const blob = new Blob([svgStr], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          ctx.globalCompositeOperation = 'multiply';
          ctx.globalAlpha = impOpacity;
          ctx.drawImage(img, 0, 0, w, h);
          ctx.globalAlpha = 1.0;
          ctx.globalCompositeOperation = 'source-over';
          URL.revokeObjectURL(url);
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    }

    // Step 3 — Post-processing (intensity scaled by paper type)
    const paperBase = paperBaseFromType(paperType);
    applyColorMuting(ctx, w, h);
    applyInkAbsorption(ctx, w, h, paperBase);
    applyBarenPressure(ctx, w, h, paperType.barenIntensity, paperBase);
    applyWoodGrain(ctx, w, h);
    applyFineNoise(ctx, w, h, paperType.noiseAmt);

    return canvas;
  }

  // ============================================================
  //  EXPORT
  // ============================================================

  function exportPng(canvas, filename) {
    canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename || 'mokuri-print.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    }, 'image/png');
  }

  return { print, exportPng };
})();
