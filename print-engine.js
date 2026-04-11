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
  // seed: element-specific seed for deterministic variation
  // Uses coordinate-value-based noise so the same coordinate always gets
  // the same offset — keeps concentric/overlapping paths aligned
  function perturbPath(d, amount, seed) {
    if (!amount || amount < 0.1) return d;
    // Arc paths (circles/ellipses): skip all perturbation.
    // The M start point and A endpoint together define the arc center.
    // Perturbing either shifts the computed center, causing visible offset
    // for concentric arcs (e.g., moon glow vs body circle).
    // The wobble filter (feTurbulence + feDisplacementMap) already provides
    // sufficient organic edge distortion to arc shapes.
    if (/[Aa]/.test(d)) return d;
    // Deterministic hash: same value + same seed + same axis = same offset
    function noise(val, axis) {
      let h = (Math.round(val * 100) ^ (axis * 0x55555555) ^ seed) | 0;
      h = Math.imul(h ^ (h >>> 16), 0x9E3779B9);
      h = Math.imul(h ^ (h >>> 13), 0x45d9f3b);
      h = h ^ (h >>> 16);
      return ((h & 0x7FFFFFFF) / 0x7FFFFFFF - 0.5) * 2 * amount;
    }
    let cmd = '';
    let paramIdx = 0;
    let isX = true; // alternates X/Y for noise axis differentiation
    return d.replace(/([A-Za-z])|(-?\d+\.?\d*)/g, (match, letter, num) => {
      if (letter) {
        cmd = letter.toUpperCase();
        paramIdx = 0;
        isX = true;
        return match;
      }
      paramIdx++;
      const axis = isX ? 0 : 1;
      isX = !isX;
      const val = parseFloat(match);
      return (val + noise(val, axis)).toFixed(1);
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

    // Long dramatic fibers (Unryu-style cloud dragon fibers)
    if (paperType.longFibers) {
      for (let i = 0; i < paperType.longFibers; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const len = paperType.longFiberLen * (0.5 + Math.random());
        const angle = (Math.random() - 0.5) * 0.6;
        const curve = (Math.random() - 0.5) * 60;
        ctx.beginPath();
        ctx.moveTo(x, y);
        const mx = x + Math.cos(angle) * len * 0.5;
        const my = y + Math.sin(angle) * len * 0.5 + curve;
        const ex = x + Math.cos(angle) * len;
        const ey = y + Math.sin(angle) * len;
        ctx.quadraticCurveTo(mx, my, ex, ey);
        const a = (paperType.fiberOpacity * 0.6 + Math.random() * paperType.fiberOpacity * 0.8).toFixed(3);
        ctx.strokeStyle = `rgba(210,195,165,${a})`;
        ctx.lineWidth = 0.8 + Math.random() * 2.5;
        ctx.stroke();
      }
    }
  }

  // ============================================================
  //  RENDER COLORED SVG — organic edges, ink pooling, misregistration
  // ============================================================

  function renderColoredSvg(elements, palette, paperW, paperH, scale, inkLoad, impOffset, atmosphere, backgroundCarveStrokes, paperBase) {
    inkLoad = inkLoad || { opacityMul: 1.0, edgeMul: 1.0, turbScale: 3.5, misreg: 3 };
    impOffset = impOffset || { x: 0, y: 0 };
    atmosphere = atmosphere || {};
    paperBase = paperBase || '#f5f0e6';
    const w = paperW * scale;
    const h = paperH * scale;
    const seed = Math.floor(Math.random() * 10000);
    const inkOpacity = Math.min(1, 0.92 * inkLoad.opacityMul);
    const edgeWeight = 2.5 * inkLoad.edgeMul;
    const edgeOpacity = Math.min(0.7, 0.45 * inkLoad.edgeMul);

    // feTurbulence makes every edge slightly wobbly/hand-carved
    // Hanko get a gentler filter — stamps are applied separately with more control
    const hankoTurbScale = Math.max(1, inkLoad.turbScale * 0.3);
    const defs = `<defs>
      <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%"
              color-interpolation-filters="sRGB">
        <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3"
                      seed="${seed}" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="${inkLoad.turbScale}"
                          xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <filter id="wobble-hanko" x="-5%" y="-5%" width="110%" height="110%"
              color-interpolation-filters="sRGB">
        <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="2"
                      seed="${seed + 7}" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="${hankoTurbScale}"
                          xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>`;

    let svgContent = '';
    let bokashiDefs = '';
    let bokashiCount = 0;

    // Helper: generate SVG pattern def for freehand pattern strokes in print output
    const _printPatDefs = new Set();
    function getStrokePatternFill(stroke, elKey) {
      if (stroke.tool !== 'pattern' || !stroke.pattern) return null;
      const patId = stroke.pattern;
      const density = stroke.density || 0.5;
      const rotation = stroke.rotation || 0;
      const press = stroke.pressure !== undefined ? stroke.pressure : 50;
      const patternOpacity = (0.4 + 0.5 * (press / 100)).toFixed(2);
      const dKey = Math.round(density * 100);
      const rKey = Math.round(rotation);
      const pKey = Math.round(press);
      const pid = `pe-sp-${elKey}-${patId}-${dKey}-r${rKey}-p${pKey}`;
      if (!_printPatDefs.has(pid) && typeof generateCarvePatternSvg === 'function') {
        const svg = generateCarvePatternSvg(patId, pid, paperBase, paperBase, { density, rotation, bg: 'none', opacity: patternOpacity });
        if (svg) { bokashiDefs += svg; _printPatDefs.add(pid); }
      }
      return _printPatDefs.has(pid) ? `url(#${pid})` : null;
    }

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
        if (atmosphere.smoothHorizon) {
          skyPath += ` L0,${horizonY}`;
        } else {
          for (let i = segs; i >= 0; i--) {
            const x = (i / segs) * paperW;
            const wb = Math.sin(i * 1.3 + 2.7) * paperH * 0.015 + Math.sin(i * 2.9) * paperH * 0.008;
            skyPath += ` L${x.toFixed(1)},${(horizonY + wb).toFixed(1)}`;
          }
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
        if (atmosphere.smoothHorizon) {
          gPath += ` L0,${horizonY}`;
        } else {
          for (let i = segs; i >= 0; i--) {
            const x = (i / segs) * paperW;
            const wb = Math.sin(i * 1.3 + 2.7) * paperH * 0.015 + Math.sin(i * 2.9) * paperH * 0.008;
            gPath += ` L${x.toFixed(1)},${(horizonY + wb).toFixed(1)}`;
          }
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
        const spFill = getStrokePatternFill(stroke, 'bg');
        const items = carveStrokeRenderData(stroke, paperBase, 'rgba(0,0,0,0)', { forPrint: true });
        items.forEach(item => {
          if (item.c === 'rgba(0,0,0,0)' && !spFill) return;
          const fc = (spFill && item.fill) ? spFill : item.c;
          if (fc === 'rgba(0,0,0,0)') return;
          if (item.fill) {
            svgContent += `<path d="${item.d}" fill="${fc}" fill-opacity="${(item.a * 0.95).toFixed(3)}" stroke="none"/>`;
          } else {
            svgContent += `<path d="${item.d}" fill="none" stroke="${item.c}" stroke-width="${item.w}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${(item.a * 0.95).toFixed(3)}"${item.dashArray ? ` stroke-dasharray="${item.dashArray}"` : ''}/>`;
          }
        });
      });
    }

    const getCarvePathKey = (path) => [
      path && path.type || 'fill',
      path && path.zone || '',
      path && path.strokeWidth || '',
      path && path.d || '',
    ].join('|');
    const hasDeltaCarveLevels = (def) => {
      if (!def || !Array.isArray(def.carveLevels)) return false;
      if (def.carveLevelMode === 'delta') return true;
      const seen = new Set();
      for (const level of def.carveLevels) {
        const paths = level && Array.isArray(level.paths) ? level.paths : [];
        for (const path of paths) {
          const key = getCarvePathKey(path);
          if (seen.has(key)) return false;
        }
        for (const path of paths) seen.add(getCarvePathKey(path));
      }
      return true;
    };
    const getBlockPaths = (def) => def && def.carveLevels && def.carveLevels[0] && Array.isArray(def.carveLevels[0].paths)
      ? def.carveLevels[0].paths
      : [];
    const getOverlayPaths = (def, carveLevel) => {
      if (!def || !Array.isArray(def.carveLevels) || !def.carveLevels.length) return [];
      const levelIndex = Math.min(Math.max(carveLevel || 0, 0), def.carveLevels.length - 1);
      if (levelIndex === 0) return [];
      if (hasDeltaCarveLevels(def)) {
        const paths = [];
        for (let i = 1; i <= levelIndex; i++) {
          const level = def.carveLevels[i];
          if (level && Array.isArray(level.paths)) paths.push(...level.paths);
        }
        return paths;
      }
      const blockKeys = new Set(getBlockPaths(def).map(getCarvePathKey));
      const level = def.carveLevels[levelIndex];
      return (level && Array.isArray(level.paths) ? level.paths : [])
        .filter(path => !blockKeys.has(getCarvePathKey(path)));
    };

    elements.forEach(el => {
      const def = MOKURI_ELEMENTS.find(d => d.id === el.defId);
      if (!def) return;
      const blockPaths = getBlockPaths(def);
      const overlayPaths = getOverlayPaths(def, el.carveLevel);
      const isBlock = el.carveLevel === 0;
      const vb = def.viewBox.split(' ').map(Number);
      const offX = -vb[0] - vb[2] / 2;
      const offY = -vb[1] - vb[3] / 2;

      // Procedural variation — seeded per element instance
      // Uses coordinate-value-based noise so concentric paths stay aligned
      const isHanko = def.hanko;
      const perturbAmt = isHanko ? 0.06 : (isBlock ? 0.6 : (el.carveLevel === 1 ? 0.9 : 1.3));
      const elemSeed = el.variationSeed || el.id * 31;
      const perturb = (d) => perturbPath(d, perturbAmt, elemSeed);

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

      const wobbleId = isHanko ? 'wobble-hanko' : 'wobble';
      const elClipId = `pe-clip-${el.id}`;
      bokashiDefs += `<clipPath id="${elClipId}"><rect x="${vb[0]}" y="${vb[1]}" width="${vb[2]}" height="${vb[3]}"/></clipPath>`;
      svgContent += `<g transform="${xform}" filter="url(#${wobbleId})"><g transform="${inner}" clip-path="url(#${elClipId})">`;

      const HANKO_VERMILLION = '#c23b22';
      const resolveOv = (ov) => {
        if (ov === undefined || ov === null) return null;
        if (typeof ov === 'number') return palette.colors[ov % palette.colors.length];
        return ov;
      };
      const zoneColor = (zoneId) => {
        if (isHanko && zoneId === 'char') return atmosphere.paperBase || '#f5f0e6';
        const ov = resolveOv(el.colorOverrides && el.colorOverrides[zoneId]);
        if (isHanko) return ov || HANKO_VERMILLION;
        const z = def.colorZones.find(c => c.id === zoneId);
        return ov || (z ? palette.colors[z.defaultPaletteSlot % palette.colors.length] : palette.colors[0]);
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
      // Hanko 'char' zone: paper-colored carved character — no ink edge, full opacity
      const renderFills = (fillPaths) => {
        fillPaths.forEach(p => {
          if (p.type !== 'fill') return;
          const col = zoneColor(p.zone);
          const fill = zoneFillAttr(p.zone);
          const pd = perturb(p.d);
          const isCharZone = isHanko && p.zone === 'char';
          const fr = p.fillRule ? ` fill-rule="${p.fillRule}"` : '';
          if (!isCharZone) {
            svgContent += `<path d="${pd}" fill="none" stroke="${darken(col, 0.35)}" stroke-width="${edgeWeight}" stroke-linejoin="round" stroke-opacity="${edgeOpacity.toFixed(2)}"/>`;
          }
          svgContent += `<path d="${pd}" fill="${fill}"${fr} fill-opacity="${isCharZone ? '0.95' : inkOpacity.toFixed(2)}" stroke="none"/>`;
        });
      };

      if (isBlock) {
        renderFills(blockPaths);
      } else {
        renderFills(blockPaths);
        overlayPaths.forEach(p => {
          const col = zoneColor(p.zone);
          const pd = perturb(p.d);
          const isCharZone = isHanko && p.zone === 'char';
          if (p.type === 'fill') {
            const fill = zoneFillAttr(p.zone);
            const fr = p.fillRule ? ` fill-rule="${p.fillRule}"` : '';
            if (isCharZone) {
              svgContent += `<path d="${pd}" fill="${fill}"${fr} fill-opacity="0.95" stroke="none"/>`;
            } else {
              svgContent += `<path d="${pd}" fill="${fill}"${fr} fill-opacity="${inkOpacity.toFixed(2)}" stroke="${darken(col, 0.3)}" stroke-width="0.8" stroke-opacity="${(0.4 * inkLoad.edgeMul).toFixed(2)}" stroke-linejoin="round"/>`;
            }
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
        const blockFill = blockPaths.find(p => p.type === 'fill');
        if (blockFill) {
          svgContent += `<path d="${perturb(blockFill.d)}" fill="${printPatternFill}" fill-opacity="0.45" stroke="none"/>`;
        }
      }

      // Custom carve strokes
      if (el.carveStrokes && el.carveStrokes.length) {
        el.carveStrokes.forEach(stroke => {
          if (stroke.points.length < 2) return;
          const spFill = getStrokePatternFill(stroke, el.id);
          const items = (typeof carveStrokeRenderData === 'function')
            ? carveStrokeRenderData(stroke, paperBase, 'rgba(0,0,0,0)', { forPrint: true })
            : [];
          items.forEach(item => {
            if (item.c === 'rgba(0,0,0,0)' && !spFill) return;
            let sc = item.c;
            if (spFill && item.fill) {
              sc = spFill;
            } else if (strokePatternFill && item.c === paperBase) {
              sc = strokePatternFill;
            }
            if (sc === 'rgba(0,0,0,0)') return;
            if (item.fill) {
              svgContent += `<path d="${item.d}" fill="${sc}" fill-opacity="${(item.a * 0.95).toFixed(3)}" stroke="none"/>`;
            } else {
              svgContent += `<path d="${item.d}" fill="none" stroke="${sc}" stroke-width="${item.w}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${(item.a * 0.95).toFixed(3)}"${item.dashArray ? ` stroke-dasharray="${item.dashArray}"` : ''}/>`;
            }
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
    // Scale frequencies relative to canvas size so baren pattern looks
    // consistent regardless of screen/canvas resolution
    const ref = Math.sqrt(w * h);
    const fScale = 1200 / ref;
    const waves = [
      { fx: (0.0012 + Math.random() * 0.002) * fScale, fy: (0.0008 + Math.random() * 0.001) * fScale,
        ph: Math.random() * Math.PI * 2, amp: 16 * intensity },
      { fx: (0.003 + Math.random() * 0.002) * fScale, fy: (0.002 + Math.random() * 0.002) * fScale,
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
  //  SVG-TO-CANVAS RENDERING (with blank detection + fallback)
  // ============================================================

  // Check if an SVG Image has visible content (not all-transparent).
  // Scales the image to a tiny canvas and checks for non-zero alpha.
  function svgImageHasContent(img) {
    const tc = document.createElement('canvas');
    tc.width = 16; tc.height = 16;
    const tctx = tc.getContext('2d');
    if (!tctx) return true; // assume content if we can't check
    tctx.drawImage(img, 0, 0, 16, 16);
    const d = tctx.getImageData(0, 0, 16, 16).data;
    for (let i = 3; i < d.length; i += 4) {
      if (d[i] > 10) return true;
    }
    return false;
  }

  // Draw an SVG string to canvas via Image + blob URL.
  // Returns true if content was drawn, false if SVG rendered blank.
  async function drawSvgImpression(ctx, svgStr, w, h, opacity) {
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve(false); // treat timeout as blank
      }, 10000);

      const img = new Image();
      img.onload = () => {
        clearTimeout(timer);
        const hasContent = svgImageHasContent(img);
        if (hasContent) {
          ctx.globalCompositeOperation = 'multiply';
          ctx.globalAlpha = opacity;
          ctx.drawImage(img, 0, 0, w, h);
          ctx.globalAlpha = 1.0;
          ctx.globalCompositeOperation = 'source-over';
        }
        URL.revokeObjectURL(url);
        resolve(hasContent);
      };
      img.onerror = () => {
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        resolve(false); // treat error as blank — caller will retry
      };
      img.src = url;
    });
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
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas 2D context unavailable');

    // Step 1 — Paper texture base layer (varies by paper type)
    drawPaperTexture(ctx, w, h, paperType);

    // Step 2 — Render SVG with ink/baren pass settings
    for (let imp = 0; imp < impressions; imp++) {
      const impOffset = imp === 0 ? { x: 0, y: 0 } : {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
      };
      const impOpacity = impressions === 1 ? 1.0 : (imp === 0 ? 0.92 : 0.35);

      const svgStr = renderColoredSvg(elements, palette, paperW, paperH, scale, inkLoad, impOffset, atmosphere, bgStrokes, paperType.base);

      // Draw SVG to canvas; detect blank render (mobile SVG filter failure)
      // and retry without the wobble filter if needed
      const drew = await drawSvgImpression(ctx, svgStr, w, h, impOpacity);
      if (!drew) {
        console.warn('Print: SVG filters rendered blank — retrying without wobble filter');
        const simpleSvg = svgStr.replace(/ filter="url\(#wobble(?:-hanko)?\)"/g, '');
        await drawSvgImpression(ctx, simpleSvg, w, h, impOpacity);
      }
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

  // ============================================================
  //  PRESENTATION WRAPPER — margins, edges, title, hanko, deckle
  // ============================================================

  // Seeded PRNG for presentation effects (reproducible per-pull)
  function presRng(seed) {
    let s = seed | 0;
    return function() {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * applyPresentation — wraps a print canvas with margins, organic edge,
   * embossed title, deckle edge, hanko, and edition numbering.
   *
   * @param {HTMLCanvasElement} printCanvas — the rendered print from print()
   * @param {Object} opts
   *   margins: { top, sides, bottom } — fractions of print size
   *   paperType: PAPER_TYPES entry
   *   title: string (or empty)
   *   deckle: boolean
   *   edition: string (or empty)
   *   hankoSvg: string (rendered SVG string) or null
   *   hankoPos: 'bottom-right' | 'bottom-left' | 'right-edge'
   *   matColor: string (hex)
   * @returns {HTMLCanvasElement}
   */
  function applyPresentation(printCanvas, opts) {
    opts = opts || {};
    const margins = opts.margins;
    if (!margins || (margins.top === 0 && margins.sides === 0 && margins.bottom === 0)) {
      return printCanvas; // no-op for 'none'
    }
    const paperType = opts.paperType || { base: '#f5f0e6', fiberDensity: 1, fiberOpacity: 0.08, warmPatches: 6, barenIntensity: 1, noiseAmt: 7 };
    const matColor = opts.matColor || '#d8d3cb';

    const pw = printCanvas.width;
    const ph = printCanvas.height;

    // Margin pixel sizes — use geometric mean so margins look balanced
    // regardless of aspect ratio (panoramic, tall scroll, etc.)
    const ref = Math.sqrt(pw * ph);
    const mTop = Math.round(ref * margins.top);
    const mBottom = Math.round(ref * margins.bottom);
    const mSide = Math.round(ref * margins.sides);

    // Deckle margin adds extra space for torn paper edge + mat visibility
    const deckleExtra = opts.deckle ? Math.round(Math.min(pw, ph) * 0.02) : 0;

    // Full canvas dimensions
    const fullW = pw + mSide * 2 + deckleExtra * 2;
    const fullH = ph + mTop + mBottom + deckleExtra * 2;

    const canvas = document.createElement('canvas');
    canvas.width = fullW;
    canvas.height = fullH;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return printCanvas; // fall back to raw print

    // ── Mat background ──
    ctx.fillStyle = matColor;
    ctx.fillRect(0, 0, fullW, fullH);

    // ── Paper area ──
    // Use simple rect clips during heavy rendering (texture, composite,
    // post-processing). Complex deckle clip is applied as a final mask
    // to avoid mobile Chromium bugs with polygon clips + multiply composite.
    const paperX = deckleExtra;
    const paperY = deckleExtra;
    const paperW = pw + mSide * 2;
    const paperH = ph + mTop + mBottom;

    ctx.save();
    ctx.beginPath();
    ctx.rect(paperX, paperY, paperW, paperH);
    ctx.clip();

    // Draw paper texture on full paper area
    drawPaperTexture(ctx, fullW, fullH, paperType);

    ctx.restore();

    // ── Composite print onto paper at margin offset (multiply blend) ──
    const printX = deckleExtra + mSide;
    const printY = deckleExtra + mTop;
    ctx.save();
    ctx.beginPath();
    ctx.rect(paperX, paperY, paperW, paperH);
    ctx.clip();
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(printCanvas, printX, printY);
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore();

    // ── Organic edge — soft ink-to-paper transition at print boundary ──
    applyOrganicEdge(ctx, printX, printY, pw, ph, paperType);

    // ── Embossed title (karazuri) — pre-flipped for mirror correction ──
    let titleFontSize = 0;
    if (opts.title) {
      titleFontSize = drawEmbossedTitle(ctx, opts.title, printX, printY + ph, pw, mBottom, paperType);
    }

    // ── Edition numbering (below title) ──
    if (opts.edition) {
      drawEditionNumber(ctx, opts.edition, printX, printY + ph, pw, mBottom, titleFontSize);
    }

    // ── Light paper effects on full presentation ──
    // Wrapped in try/catch: on mobile, large getImageData can fail;
    // the print is still valid without these subtle margin effects.
    try {
      ctx.save();
      ctx.beginPath();
      ctx.rect(paperX, paperY, paperW, paperH);
      ctx.clip();
      applyBarenPressure(ctx, fullW, fullH, (paperType.barenIntensity || 1) * 0.3, paperBaseFromType(paperType));
      applyFineNoise(ctx, fullW, fullH, (paperType.noiseAmt || 7) * 0.5);
      ctx.restore();
    } catch (e) {
      console.warn('Print: presentation post-processing skipped:', e.message);
    }

    // ── Deckle edge mask — trim paper to irregular torn boundary ──
    // Applied as a final cosmetic step (evenodd clears outside the path)
    if (opts.deckle) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, fullW, fullH);          // outer boundary (whole canvas)
      buildDecklePath(ctx, paperX, paperY, paperW, paperH);  // inner deckle shape
      ctx.clip('evenodd');                     // clips to area OUTSIDE deckle
      ctx.fillStyle = matColor;                // repaint mat over paper edges
      ctx.fillRect(0, 0, fullW, fullH);
      ctx.restore();
    }

    // ── Deckle fiber wisps (drawn on top of everything, outside clip) ──
    if (opts.deckle) {
      drawDeckleFibers(ctx, paperX, paperY, paperW, paperH, paperType);
    }

    return canvas;
  }

  // Organic edge — soft ink-to-paper transition around the print boundary.
  // Paints semi-transparent paper color OVER the composited print at the margins,
  // so the effect is outside the artwork, not eating into it.
  function applyOrganicEdge(ctx, printX, printY, pw, ph, paperType) {
    const depth = Math.round(Math.min(pw, ph) * 0.008); // tighter than before
    if (depth < 2) return;
    const rng = presRng(42);
    const pb = paperBaseFromType(paperType);

    ctx.save();
    for (let pass = 0; pass < 2; pass++) {
      // Two passes for naturalistic layered effect
      const baseAlpha = pass === 0 ? 0.55 : 0.3;
      for (let i = 0; i < depth; i++) {
        const t = i / depth; // 0 = outermost (fully paper), 1 = innermost (fully transparent)
        const alpha = baseAlpha * (1 - t * t);
        const noise = 0.7 + rng() * 0.6;
        const a = Math.min(1, alpha * noise);
        ctx.fillStyle = `rgba(${pb.r},${pb.g},${pb.b},${a.toFixed(3)})`;
        // Top edge
        const yTop = printY + i * (rng() * 0.3 + 0.85);
        ctx.fillRect(printX, printY - 1, pw, Math.max(1, depth - i) * (0.3 + rng() * 0.4));
        // Bottom edge
        ctx.fillRect(printX, printY + ph - (depth - i) * (0.3 + rng() * 0.4), pw, Math.max(1, depth - i) * (0.3 + rng() * 0.4));
        // Left edge
        ctx.fillRect(printX - 1, printY, Math.max(1, depth - i) * (0.3 + rng() * 0.4), ph);
        // Right edge
        ctx.fillRect(printX + pw - (depth - i) * (0.3 + rng() * 0.4), printY, Math.max(1, depth - i) * (0.3 + rng() * 0.4), ph);
      }
    }
    ctx.restore();
  }

  // Deckle edge — build the irregular paper boundary path (deterministic via seed)
  function buildDecklePath(ctx, x, y, w, h) {
    const rng = presRng(137);
    const step = 8;
    const amp = 1.5;
    const tearChance = 0.015;
    const tearAmp = 4;

    // Top edge (left to right)
    for (let px = 0; px <= w; px += step) {
      const dy = (rng() - 0.5) * amp * 2 + (rng() < tearChance ? (rng() - 0.5) * tearAmp * 2 : 0);
      if (px === 0) ctx.moveTo(x + px, y + dy);
      else ctx.lineTo(x + px, y + dy);
    }
    // Right edge (top to bottom)
    for (let py = 0; py <= h; py += step) {
      const dx = (rng() - 0.5) * amp * 2 + (rng() < tearChance ? (rng() - 0.5) * tearAmp * 2 : 0);
      ctx.lineTo(x + w + dx, y + py);
    }
    // Bottom edge (right to left)
    for (let px = w; px >= 0; px -= step) {
      const dy = (rng() - 0.5) * amp * 2 + (rng() < tearChance ? (rng() - 0.5) * tearAmp * 2 : 0);
      ctx.lineTo(x + px, y + h + dy);
    }
    // Left edge (bottom to top)
    for (let py = h; py >= 0; py -= step) {
      const dx = (rng() - 0.5) * amp * 2 + (rng() < tearChance ? (rng() - 0.5) * tearAmp * 2 : 0);
      ctx.lineTo(x + dx, y + py);
    }
    ctx.closePath();
  }

  // Clip to deckle path (convenience wrapper)
  function drawDeckleClip(ctx, x, y, w, h) {
    ctx.beginPath();
    buildDecklePath(ctx, x, y, w, h);
    ctx.clip();
  }

  // Fiber wisps at deckle edges — tiny strokes extending past the paper boundary
  function drawDeckleFibers(ctx, paperX, paperY, paperW, paperH, paperType) {
    const rng = presRng(291);
    const fiberCount = Math.round((paperW + paperH) * 0.04); // subtler (was 0.08)
    ctx.save();
    for (let i = 0; i < fiberCount; i++) {
      // Choose a random edge
      const edge = Math.floor(rng() * 4);
      let sx, sy, angle;
      if (edge === 0) { // top
        sx = paperX + rng() * paperW; sy = paperY;
        angle = -Math.PI / 2 + (rng() - 0.5) * 0.6;
      } else if (edge === 1) { // right
        sx = paperX + paperW; sy = paperY + rng() * paperH;
        angle = 0 + (rng() - 0.5) * 0.6;
      } else if (edge === 2) { // bottom
        sx = paperX + rng() * paperW; sy = paperY + paperH;
        angle = Math.PI / 2 + (rng() - 0.5) * 0.6;
      } else { // left
        sx = paperX; sy = paperY + rng() * paperH;
        angle = Math.PI + (rng() - 0.5) * 0.6;
      }
      const len = 3 + rng() * 8;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + Math.cos(angle) * len, sy + Math.sin(angle) * len);
      const a = (0.06 + rng() * 0.1).toFixed(3);
      ctx.strokeStyle = `rgba(185,170,140,${a})`;
      ctx.lineWidth = 0.3 + rng() * 0.8;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Embossed title — karazuri (blind embossing) effect.
  // Uses canvas shadow API to create realistic pressed-into-paper appearance.
  // Right-justified under the print. Pre-flipped for mirror correction.
  // Font size scales with bottom margin so it's consistent across all paper sizes.
  function drawEmbossedTitle(ctx, title, printX, printBottom, printW, marginBottom, paperType) {
    const fontSize = Math.max(14, Math.min(Math.round(marginBottom * 0.18), 30));
    ctx.save();
    ctx.font = `italic ${fontSize}px "Segoe UI", "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = 'top';

    const ty = printBottom + marginBottom * 0.18;

    // Pre-flip around print center for mirror correction
    const cx = printX + printW / 2;
    ctx.translate(cx, 0);
    ctx.scale(-1, 1);
    ctx.translate(-cx, 0);
    ctx.textAlign = 'left';
    const flippedX = printX + printW * 0.02;

    // Paper base color — text drawn in this blends into paper background
    const pb = paperBaseFromType(paperType);
    const lum = (pb.r * 0.299 + pb.g * 0.587 + pb.b * 0.114) / 255;
    const isDark = lum < 0.45;
    const paperFill = `rgb(${pb.r},${pb.g},${pb.b})`;

    const blur = fontSize * 0.15;
    const offset = Math.max(1, fontSize * 0.08);

    // Shadow pass — depression shadow (lower-right), stronger for readability
    ctx.shadowColor = isDark ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = blur;
    ctx.shadowOffsetX = offset;
    ctx.shadowOffsetY = offset;
    ctx.fillStyle = paperFill;
    ctx.fillText(title, flippedX, ty);

    // Highlight pass — light catching raised edge (upper-left)
    ctx.shadowColor = isDark ? 'rgba(255,255,255,0.40)' : 'rgba(255,255,255,0.30)';
    ctx.shadowBlur = blur;
    ctx.shadowOffsetX = -offset;
    ctx.shadowOffsetY = -offset;
    ctx.fillStyle = paperFill;
    ctx.fillText(title, flippedX, ty);

    ctx.shadowColor = 'transparent';
    ctx.restore();
    return fontSize;
  }

  // Edition numbering — pencil-style with subtle emboss, below the title.
  // Font size scales with bottom margin. Pre-flipped for mirror correction.
  function drawEditionNumber(ctx, edition, printX, printBottom, printW, marginBottom, titleFontSize) {
    const fontSize = Math.max(10, Math.min(Math.round(marginBottom * 0.15), 24));
    ctx.save();
    ctx.font = `italic ${fontSize}px "Segoe UI", "Helvetica Neue", Arial, sans-serif`;
    ctx.textBaseline = 'top';

    const titleY = printBottom + marginBottom * 0.18;
    const gap = (titleFontSize || fontSize) * 1.3;
    const ey = titleY + gap;

    // Pre-flip around print center
    const cx = printX + printW / 2;
    ctx.translate(cx, 0);
    ctx.scale(-1, 1);
    ctx.translate(-cx, 0);
    ctx.textAlign = 'left';
    const flippedX = printX + printW * 0.02;

    // Pencil graphite color — subtle grey with emboss shadow
    const blur = fontSize * 0.1;
    const offset = Math.max(0.8, fontSize * 0.05);
    const rng = presRng(edition.length * 7 + 13);

    for (let i = 0; i < edition.length; i++) {
      const alpha = 0.35 + rng() * 0.15;
      const prefixW = ctx.measureText(edition.substring(0, i)).width;
      const charX = flippedX + prefixW;

      // Shadow pass
      ctx.shadowColor = `rgba(0,0,0,0.18)`;
      ctx.shadowBlur = blur;
      ctx.shadowOffsetX = offset;
      ctx.shadowOffsetY = offset;
      ctx.fillStyle = `rgba(138,133,128,${alpha.toFixed(3)})`;
      ctx.fillText(edition[i], charX, ey);
    }

    ctx.shadowColor = 'transparent';
    ctx.restore();
  }

  return { print, exportPng, applyPresentation };
})();
