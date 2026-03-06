// ============================================================
//  MOKURI — Print Engine
//  Renders the SVG composition into a textured woodblock print
// ============================================================

const PrintEngine = (() => {

  const PAPER_BASE = { r: 245, g: 240, b: 230 };

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
  //  PAPER TEXTURE — Canvas base layer (washi fiber structure)
  // ============================================================

  function drawPaperTexture(ctx, w, h) {
    ctx.fillStyle = '#f5f0e6';
    ctx.fillRect(0, 0, w, h);

    // Prominent fiber bundles — thick, visible strands
    const bundleCount = Math.floor(w * h / 2000);
    for (let i = 0; i < bundleCount; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const len = 30 + Math.random() * 80;
      const angle = (Math.random() - 0.5) * 0.4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      const a = (0.06 + Math.random() * 0.08).toFixed(3);
      ctx.strokeStyle = `rgba(185,170,140,${a})`;
      ctx.lineWidth = 1.5 + Math.random() * 3;
      ctx.stroke();
    }

    // Fine individual fibers
    const fineCount = Math.floor(w * h / 400);
    for (let i = 0; i < fineCount; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const len = 8 + Math.random() * 30;
      const angle = (Math.random() - 0.5) * 0.6;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      const a = (0.03 + Math.random() * 0.04).toFixed(3);
      ctx.strokeStyle = `rgba(200,185,155,${a})`;
      ctx.lineWidth = 0.3 + Math.random() * 1;
      ctx.stroke();
    }

    // Tonal warmth patches — soft color variation across the sheet
    for (let i = 0; i < 15; i++) {
      const cx = Math.random() * w;
      const cy = Math.random() * h;
      const r = 60 + Math.random() * 180;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, Math.random() > 0.5 ? 'rgba(215,200,170,0.05)' : 'rgba(235,228,215,0.04)');
      grad.addColorStop(1, 'rgba(245,240,230,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }
  }

  // ============================================================
  //  RENDER COLORED SVG — organic edges, ink pooling, misregistration
  // ============================================================

  function renderColoredSvg(elements, palette, paperW, paperH, scale) {
    const w = paperW * scale;
    const h = paperH * scale;
    const seed = Math.floor(Math.random() * 10000);

    // feTurbulence makes every edge slightly wobbly/hand-carved
    const defs = `<defs>
      <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%"
              color-interpolation-filters="sRGB">
        <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3"
                      seed="${seed}" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5"
                          xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>`;

    let svgContent = '';

    elements.forEach(el => {
      const def = MOKURI_ELEMENTS.find(d => d.id === el.defId);
      if (!def) return;
      const carve = def.carveLevels[Math.min(el.carveLevel, def.carveLevels.length - 1)];
      const isBlock = el.carveLevel === 0;
      const vb = def.viewBox.split(' ').map(Number);
      const offX = -vb[2] / 2;
      const offY = -vb[3] / 2;

      // Per-element spatial misregistration (like separate block pressing)
      const misX = (Math.random() - 0.5) * 3;
      const misY = (Math.random() - 0.5) * 3;

      const xform = `translate(${el.x + misX},${el.y + misY}) rotate(${el.rotation}) scale(${el.scaleX},${el.scaleY})`;
      const inner = `translate(${offX},${offY})`;

      svgContent += `<g transform="${xform}" filter="url(#wobble)"><g transform="${inner}">`;

      const zoneColor = (zoneId) => {
        const z = def.colorZones.find(c => c.id === zoneId);
        return (el.colorOverrides && el.colorOverrides[zoneId])
          || (z ? palette.colors[z.defaultPaletteSlot % palette.colors.length] : palette.colors[0]);
      };

      // Render fill paths: dark edge behind (ink pooling) + semi-transparent ink
      const renderFills = (fillPaths) => {
        fillPaths.forEach(p => {
          if (p.type !== 'fill') return;
          const col = zoneColor(p.zone);
          // Ink pooling at carved boundaries
          svgContent += `<path d="${p.d}" fill="none" stroke="${darken(col, 0.35)}" stroke-width="2.5" stroke-linejoin="round" stroke-opacity="0.45"/>`;
          // Main ink — slightly transparent so paper fiber shows through
          svgContent += `<path d="${p.d}" fill="${col}" fill-opacity="0.92" stroke="none"/>`;
        });
      };

      if (isBlock) {
        renderFills(carve.paths);
      } else {
        // Base silhouette from block level
        renderFills(def.carveLevels[0].paths);
        // Carved detail overlays
        carve.paths.forEach(p => {
          const col = zoneColor(p.zone);
          if (p.type === 'fill') {
            svgContent += `<path d="${p.d}" fill="${col}" fill-opacity="0.92" stroke="${darken(col, 0.3)}" stroke-width="0.8" stroke-opacity="0.4" stroke-linejoin="round"/>`;
          } else if (p.type === 'stroke') {
            svgContent += `<path d="${p.d}" fill="none" stroke="${darken(col, 0.45)}" stroke-width="${p.strokeWidth || 1.5}" stroke-opacity="0.85" stroke-linecap="round" stroke-linejoin="round"/>`;
          }
        });
      }

      // Custom carve strokes — graduated paper reveal via shared helper
      if (el.carveStrokes && el.carveStrokes.length) {
        el.carveStrokes.forEach(stroke => {
          if (stroke.points.length < 2) return;
          const items = (typeof carveStrokeRenderData === 'function')
            ? carveStrokeRenderData(stroke, '#f5f0e6', 'rgba(0,0,0,0)')
            : []; // fallback if helper unavailable
          items.forEach(item => {
            if (item.c === 'rgba(0,0,0,0)') return; // skip groove shadow in print
            svgContent += `<path d="${item.d}" fill="none" stroke="${item.c}" stroke-width="${item.w}" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="${(item.a * 0.95).toFixed(3)}"/>`;
          });
        });
      }

      svgContent += '</g></g>';
    });

    // Transparent background — paper texture is on the canvas beneath
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${paperW} ${paperH}">
      ${defs}
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
  function applyBarenPressure(ctx, w, h) {
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;
    const waves = [
      { fx: 0.0012 + Math.random() * 0.002, fy: 0.0008 + Math.random() * 0.001,
        ph: Math.random() * Math.PI * 2, amp: 16 },
      { fx: 0.003 + Math.random() * 0.002, fy: 0.002 + Math.random() * 0.002,
        ph: Math.random() * Math.PI * 2, amp: 10 },
    ];
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        // Skip paper-colored pixels
        if (Math.abs(px[i] - PAPER_BASE.r) < 18 &&
            Math.abs(px[i + 1] - PAPER_BASE.g) < 18 &&
            Math.abs(px[i + 2] - PAPER_BASE.b) < 18) continue;
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
  function applyFineNoise(ctx, w, h) {
    const d = ctx.getImageData(0, 0, w, h);
    const px = d.data;
    for (let i = 0; i < px.length; i += 4) {
      const n = (Math.random() - 0.5) * 7;
      px[i]     = Math.min(255, Math.max(0, px[i] + n + 0.5));
      px[i + 1] = Math.min(255, Math.max(0, px[i + 1] + n));
      px[i + 2] = Math.min(255, Math.max(0, px[i + 2] + n - 0.5));
    }
    ctx.putImageData(d, 0, 0);
  }

  // ============================================================
  //  MAIN PRINT PIPELINE
  // ============================================================

  async function print(elements, paletteId, paperW, paperH) {
    const palette = PALETTES[paletteId];
    const scale = 2;
    const w = Math.round(paperW * scale);
    const h = Math.round(paperH * scale);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Step 1 — Paper texture base layer
    drawPaperTexture(ctx, w, h);

    // Step 2 — Render SVG (turbulence + edge darkening + misregistration)
    const svgStr = renderColoredSvg(elements, palette, paperW, paperH, scale);
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        // Multiply blend — ink absorbs into paper, fiber texture modulates ink
        ctx.globalCompositeOperation = 'multiply';
        ctx.drawImage(img, 0, 0, w, h);
        ctx.globalCompositeOperation = 'source-over';
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = reject;
      img.src = url;
    });

    // Step 3 — Post-processing
    applyColorMuting(ctx, w, h);
    applyBarenPressure(ctx, w, h);
    applyWoodGrain(ctx, w, h);
    applyFineNoise(ctx, w, h);

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
