// Mokuri Block Plan — deterministic physical block separation primitives
(function (root) {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const DEFAULT_PALETTE = ['#25354a', '#b84a3a', '#d2a43c', '#65724a', '#25211e'];
  const PAPER_PRESETS = {
    '8x10': { id: '8x10', name: '8 × 10', widthIn: 8, heightIn: 10 },
    '5x7': { id: '5x7', name: '5 × 7', widthIn: 5, heightIn: 7 },
    '4x6': { id: '4x6', name: '4 × 6', widthIn: 4, heightIn: 6 },
    '6x6': { id: '6x6', name: '6 × 6', widthIn: 6, heightIn: 6 },
    '8x8': { id: '8x8', name: '8 × 8', widthIn: 8, heightIn: 8 },
    // Legacy harness ID retained for saved development plans.
    '7x5': { id: '7x5', name: '7 × 5', widthIn: 7, heightIn: 5 },
  };
  const PRINT_SIZE_PRESETS = {
    '4x6': { id: '4x6', name: '4 × 6', widthIn: 4, heightIn: 6 },
    '5x7': { id: '5x7', name: '5 × 7', widthIn: 5, heightIn: 7 },
    '6x6': { id: '6x6', name: '6 × 6', widthIn: 6, heightIn: 6 },
  };
  const MARGIN_PRESETS = {
    none: { id: 'none', name: 'None', top: 0, sides: 0, bottom: 0 },
    narrow: { id: 'narrow', name: 'Narrow', top: 0.05, sides: 0.05, bottom: 0.10 },
    standard: { id: 'standard', name: 'Standard', top: 0.08, sides: 0.10, bottom: 0.16 },
    wide: { id: 'wide', name: 'Wide', top: 0.12, sides: 0.15, bottom: 0.22 },
  };
  const PAPER_BASES = {
    hosho: '#faf6ee',
    kozo: '#f5f0e6',
    torinoko: '#f0e6d0',
    gampi: '#f2f0ec',
    unryu: '#f3ede1',
    kakishibu: '#b8916a',
  };
  const BACKGROUND_BLOCK_TYPES = {
    dawn: { name: 'Dawn Atmosphere', color: '#e8a87c' },
    day: { name: 'Day Sky Atmosphere', color: '#87ceeb' },
    dusk: { name: 'Dusk Atmosphere', color: '#c47a90' },
    night: { name: 'Night Atmosphere', color: '#1a1a3a' },
    overcast: { name: 'Overcast Atmosphere', color: '#8a8a98' },
    warm: { name: 'Warm Atmosphere', color: '#c9a84c' },
    sakura: { name: 'Sakura Atmosphere', color: '#e8a0b8' },
    haze: { name: 'Haze Atmosphere', color: '#c8b890' },
    aizuri: { name: 'Aizuri Atmosphere', color: '#1a3a6a' },
    akane: { name: 'Akane Atmosphere', color: '#c24a3a' },
  };
  const FOREGROUND_BLOCK_TYPES = {
    earth: { name: 'Earth Foreground', color: '#8b6b4a' },
    grass: { name: 'Grass Foreground', color: '#4a6a3a' },
    moss: { name: 'Moss Foreground', color: '#2a3a20' },
    snow: { name: 'Snow Foreground', color: '#d8dce8' },
    sand: { name: 'Sand Foreground', color: '#c4a868' },
    water: { name: 'Water Foreground', color: '#2a5a7a' },
    shallows: { name: 'Shallows Foreground', color: '#3a6a7a' },
    stone: { name: 'Stone Foreground', color: '#7a7a80' },
  };
  const CARVE_TOOLS = {
    fine: { width: 2, tiltStrength: 0, profileWidth: 1 },
    vgouge: { width: 4, tiltStrength: 0.5, profileWidth: 1.3 },
    ugouge: { width: 8, tiltStrength: 0.35, profileWidth: 1.15 },
    pattern: { width: 20, tiltStrength: 0.2, profileWidth: 1 },
  };
  const PRESSURE_CURVES = {
    soft: { wBase: 0.7, wPow: 0.35, wMul: 0.6 },
    medium: { wBase: 0.5, wPow: 0.85, wMul: 0.9 },
    firm: { wBase: 0.25, wPow: 1.8, wMul: 1.35 },
  };
  const MIN_DETAIL_IN = 1 / 64;
  const MIN_REGION_IN = 1 / 32;
  const MAX_MEASURED_FILL_PATHS = 150;
  const KENTO_STROKE_WIDTH = 0.025;
  const KAGI_GUIDE_RADIUS = 0.16;
  const HIKITSUKE_GUIDE_RADIUS = 0.16;
  const KAGI_CROSS_EXTENSION = 0.12;
  const BLOCK_COLOR_NAMES = [
    ['Sumi', '#24211e'],
    ['Charcoal', '#4a4a4a'],
    ['Ash', '#979792'],
    ['Cream', '#eee4cf'],
    ['Indigo', '#1a3a5c'],
    ['Sky', '#87b8d8'],
    ['Teal', '#3a7275'],
    ['Pine', '#31513a'],
    ['Matcha', '#718452'],
    ['Ochre', '#c49a2a'],
    ['Gold', '#dfb84f'],
    ['Straw', '#e5ca78'],
    ['Sand', '#d2b77d'],
    ['Bengara', '#a94331'],
    ['Persimmon', '#c66a32'],
    ['Coral', '#d77d68'],
    ['Beni', '#bd4f60'],
    ['Rose', '#cc7180'],
    ['Sakura', '#d7a0ae'],
    ['Plum', '#76506e'],
    ['Violet', '#6d6590'],
    ['Earth', '#795b43'],
  ];
  const pathBoundsCache = new Map();
  let measurementSvg = null;
  let masterSerial = 0;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function round(value, digits) {
    const scale = Math.pow(10, digits === undefined ? 4 : digits);
    return Math.round(value * scale) / scale;
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function normalizeColor(color) {
    if (typeof color !== 'string') return '#000000';
    const value = color.trim();
    const shortHex = /^#([0-9a-f]{3})$/i.exec(value);
    if (shortHex) {
      return '#' + shortHex[1].split('').map(ch => ch + ch).join('').toLowerCase();
    }
    const fullHex = /^#([0-9a-f]{6})$/i.exec(value);
    return fullHex ? '#' + fullHex[1].toLowerCase() : value;
  }

  function colorDistance(a, b) {
    const parse = value => {
      const match = /^#([0-9a-f]{6})$/i.exec(normalizeColor(value));
      if (!match) return null;
      return [
        parseInt(match[1].slice(0, 2), 16),
        parseInt(match[1].slice(2, 4), 16),
        parseInt(match[1].slice(4, 6), 16),
      ];
    };
    const first = parse(a);
    const second = parse(b);
    if (!first || !second) return Infinity;
    return Math.hypot(
      first[0] - second[0],
      first[1] - second[1],
      first[2] - second[2]
    );
  }

  function colorLuminance(color) {
    const match = /^#([0-9a-f]{6})$/i.exec(normalizeColor(color));
    if (!match) return 0;
    const channels = [
      parseInt(match[1].slice(0, 2), 16),
      parseInt(match[1].slice(2, 4), 16),
      parseInt(match[1].slice(4, 6), 16),
    ].map(value => {
      const channel = value / 255;
      return channel <= 0.04045
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  }

  function blockColorName(color) {
    const canonicalName = root.MokuriColorNames
      ? root.MokuriColorNames.get(color)
      : null;
    if (canonicalName) return canonicalName;
    return BLOCK_COLOR_NAMES
      .map(([name, reference]) => ({ name, distance: colorDistance(color, reference) }))
      .sort((a, b) => a.distance - b.distance)[0].name;
  }

  function blockSubjectName(blockRecords) {
    const elementNames = Array.from(new Set(
      blockRecords
        .filter(record => record.sourceType !== 'atmosphere')
        .map(record => record.elementName)
        .filter(Boolean)
    ));
    const onlyStrokes = blockRecords.length
      && blockRecords.every(record => record.type === 'stroke');
    if (onlyStrokes) {
      return elementNames.length === 1
        ? `${elementNames[0]} Linework`
        : 'Key Linework';
    }
    if (elementNames.length === 1) return elementNames[0];
    if (elementNames.length === 2) return `${elementNames[0]} & ${elementNames[1]}`;
    if (elementNames.length > 2) return `${elementNames[0]} + ${elementNames.length - 1} Elements`;
    return 'Forms';
  }

  function generateBlockName(block, records) {
    if (block.isAtmosphere) return 'Atmosphere';
    const blockRecords = block.recordIds
      .map(id => records.find(record => record.id === id))
      .filter(Boolean);
    return `${block.colorName || blockColorName(block.color)} ${blockSubjectName(blockRecords)}`;
  }

  function disambiguateBlockColorNames(blocks) {
    const groups = new Map();
    blocks
      .filter(block => !block.isAtmosphere)
      .forEach(block => {
        const name = block.colorName;
        if (!groups.has(name)) groups.set(name, []);
        groups.get(name).push(block);
      });
    groups.forEach(group => {
      const colors = new Set(group.map(block => normalizeColor(block.color)));
      if (colors.size < 2) return;
      const ranked = group.slice().sort((a, b) =>
        b.luminance - a.luminance || a.sourceOrder - b.sourceOrder
      );
      ranked.forEach((block, index) => {
        if (ranked.length === 2) {
          block.colorName = `${index === 0 ? 'Light' : 'Deep'} ${block.colorName}`;
        } else {
          const position = index / Math.max(1, ranked.length - 1);
          const qualifier = position < 0.34 ? 'Light' : position > 0.66 ? 'Deep' : 'Mid';
          block.colorName = `${qualifier} ${block.colorName}`;
        }
      });
    });
  }

  function normalizeCompositionData(input) {
    if (!input || typeof input !== 'object') return {};
    if (input.data && typeof input.data === 'object') {
      return Object.assign({}, input.data, {
        name: input.data.name || input.name || input.title,
      });
    }
    return input;
  }

  function measurePathBounds(d) {
    if (!d || typeof document === 'undefined' || !document.body) return null;
    if (pathBoundsCache.has(d)) return pathBoundsCache.get(d);
    if (!measurementSvg) {
      measurementSvg = document.createElementNS(SVG_NS, 'svg');
      measurementSvg.setAttribute('width', '0');
      measurementSvg.setAttribute('height', '0');
      measurementSvg.setAttribute('aria-hidden', 'true');
      measurementSvg.style.position = 'absolute';
      measurementSvg.style.visibility = 'hidden';
      measurementSvg.style.pointerEvents = 'none';
      document.body.appendChild(measurementSvg);
    }
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    measurementSvg.appendChild(path);
    let bounds = null;
    try {
      const box = path.getBBox();
      bounds = {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
      };
    } catch (error) {
      bounds = null;
    }
    path.remove();
    pathBoundsCache.set(d, bounds);
    return bounds;
  }

  function getPressureCurve(value) {
      const numeric = value === 'soft' ? 0 : value === 'firm' ? 100 : Number(value);
      const t = clamp(Number.isFinite(numeric) ? numeric : 50, 0, 100);
      const a = t <= 50 ? PRESSURE_CURVES.soft : PRESSURE_CURVES.medium;
      const b = t <= 50 ? PRESSURE_CURVES.medium : PRESSURE_CURVES.firm;
      const fraction = t <= 50 ? t / 50 : (t - 50) / 50;
      const lerp = key => a[key] + (b[key] - a[key]) * fraction;
      return {
        wBase: lerp('wBase'),
        wPow: lerp('wPow'),
        wMul: lerp('wMul'),
      };
  }

  function pointsToD(points) {
      if (points.length < 2) return '';
      if (points.length === 2) {
        return `M${round(points[0].x, 1)} ${round(points[0].y, 1)} L${round(points[1].x, 1)} ${round(points[1].y, 1)}`;
      }
      let d = `M${round(points[0].x, 1)} ${round(points[0].y, 1)}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = i > 0
          ? points[i - 1]
          : { x: 2 * points[0].x - points[1].x, y: 2 * points[0].y - points[1].y };
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i < points.length - 2
          ? points[i + 2]
          : { x: 2 * p2.x - p1.x, y: 2 * p2.y - p1.y };
        d += ` C${round(p1.x + (p2.x - p0.x) / 6, 1)} ${round(p1.y + (p2.y - p0.y) / 6, 1)},`
          + `${round(p2.x - (p3.x - p1.x) / 6, 1)} ${round(p2.y - (p3.y - p1.y) / 6, 1)},`
          + `${round(p2.x, 1)} ${round(p2.y, 1)}`;
      }
      return d;
  }

  function appendCurveD(points) {
      if (points.length < 2) return '';
      if (points.length === 2) return ` L${round(points[1].x, 1)} ${round(points[1].y, 1)}`;
      let d = '';
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = i > 0
          ? points[i - 1]
          : { x: 2 * points[0].x - points[1].x, y: 2 * points[0].y - points[1].y };
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i < points.length - 2
          ? points[i + 2]
          : { x: 2 * p2.x - p1.x, y: 2 * p2.y - p1.y };
        d += ` C${round(p1.x + (p2.x - p0.x) / 6, 1)} ${round(p1.y + (p2.y - p0.y) / 6, 1)},`
          + `${round(p2.x - (p3.x - p1.x) / 6, 1)} ${round(p2.y - (p3.y - p1.y) / 6, 1)},`
          + `${round(p2.x, 1)} ${round(p2.y, 1)}`;
      }
      return d;
  }

  function computeRibbonD(points, widths, tiltStrength) {
      if (points.length < 2) return '';
      const leftEdge = [];
      const rightEdge = [];
      for (let i = 0; i < points.length; i++) {
        let tx;
        let ty;
        if (i === 0) {
          tx = points[1].x - points[0].x;
          ty = points[1].y - points[0].y;
        } else if (i === points.length - 1) {
          tx = points[i].x - points[i - 1].x;
          ty = points[i].y - points[i - 1].y;
        } else {
          tx = points[i + 1].x - points[i - 1].x;
          ty = points[i + 1].y - points[i - 1].y;
        }
        const length = Math.hypot(tx, ty) || 1;
        const nx = -ty / length;
        const ny = tx / length;
        const halfWidth = widths[i] / 2;
        let leftWidth = halfWidth;
        let rightWidth = halfWidth;
        if (tiltStrength > 0 && points[i].tiltX !== undefined) {
          const crossTilt = ((points[i].tiltX || 0) * nx + (points[i].tiltY || 0) * ny) / 90;
          const asymmetry = crossTilt * tiltStrength;
          leftWidth = Math.max(0.05, halfWidth * (1 + asymmetry));
          rightWidth = Math.max(0.05, halfWidth * (1 - asymmetry));
        }
        leftEdge.push({ x: points[i].x + nx * leftWidth, y: points[i].y + ny * leftWidth });
        rightEdge.push({ x: points[i].x - nx * rightWidth, y: points[i].y - ny * rightWidth });
      }
      const reverseRight = rightEdge.slice().reverse();
      return pointsToD(leftEdge)
        + ` L${round(reverseRight[0].x, 1)} ${round(reverseRight[0].y, 1)}`
        + appendCurveD(reverseRight)
        + ' Z';
  }

  function buildCarveCut(stroke, element, transform, pressureCurve, index) {
      const points = Array.isArray(stroke && stroke.points) ? stroke.points : [];
      if (points.length < 2) return null;
      const toolId = stroke.tool || 'fine';
      const tool = CARVE_TOOLS[toolId] || CARVE_TOOLS.fine;
      const baseWidth = stroke.width || tool.width;
      const taperLength = toolId === 'pattern'
        ? 0
        : Math.min(4, Math.max(1, Math.floor(points.length * 0.2)));
      const widths = points.map((point, pointIndex) => {
        const pressure = point.pressure === undefined ? 0.5 : point.pressure;
        const pressureWidth = toolId === 'pattern'
          ? 0.8 + 0.4 * pressure
          : pressureCurve.wBase
            + Math.pow(Math.max(0, pressure), pressureCurve.wPow) * pressureCurve.wMul;
        let taper = 1;
        if (taperLength && pointIndex < taperLength) {
          taper = 0.15 + 0.85 * (pointIndex / taperLength);
        } else if (taperLength && pointIndex > points.length - 1 - taperLength) {
          taper = 0.15 + 0.85 * ((points.length - 1 - pointIndex) / taperLength);
        }
        return Math.max(
          toolId === 'pattern' ? 2 : 0.15,
          baseWidth * tool.profileWidth * pressureWidth * taper
        );
      });
      const d = computeRibbonD(points, widths, tool.tiltStrength);
      if (!d) return null;
      const elementScale = Math.max(
        Math.abs(element.scaleX === undefined ? 1 : element.scaleX),
        Math.abs(element.scaleY === undefined ? 1 : element.scaleY)
      );
      return {
        id: `cut-${element.id}-${index + 1}`,
        elementId: element.id,
        tool: toolId,
        d,
        transform,
        minWidth: Math.min(...widths),
        pattern: toolId === 'pattern' ? (stroke.pattern || 'crosshatch') : null,
        density: toolId === 'pattern' ? (stroke.density || 0.5) * elementScale : null,
        rotation: toolId === 'pattern' ? (stroke.rotation || 0) : 0,
      };
  }

  function pathKey(path) {
    return [
      path && path.type || 'fill',
      path && path.zone || '',
      path && path.strokeWidth || '',
      path && path.fillRule || '',
      path && path.d || '',
    ].join('|');
  }

  function hasDeltaCarveLevels(definition) {
    if (!definition || !Array.isArray(definition.carveLevels)) return false;
    if (definition.carveLevelMode === 'delta') return true;
    const seen = new Set();
    for (const level of definition.carveLevels) {
      const paths = level && Array.isArray(level.paths) ? level.paths : [];
      for (const path of paths) {
        if (seen.has(pathKey(path))) return false;
      }
      for (const path of paths) seen.add(pathKey(path));
    }
    return true;
  }

  function getBlockPaths(definition) {
    return definition && definition.carveLevels && definition.carveLevels[0]
      && Array.isArray(definition.carveLevels[0].paths)
      ? definition.carveLevels[0].paths
      : [];
  }

  function getOverlayPaths(definition, carveLevel) {
    if (!definition || !Array.isArray(definition.carveLevels)
      || !definition.carveLevels.length) return [];
    const levelIndex = Math.min(
      Math.max(carveLevel || 0, 0),
      definition.carveLevels.length - 1
    );
    if (levelIndex === 0) return [];
    if (hasDeltaCarveLevels(definition)) {
      const paths = [];
      for (let i = 1; i <= levelIndex; i++) {
        const level = definition.carveLevels[i];
        if (level && Array.isArray(level.paths)) paths.push(...level.paths);
      }
      return paths;
    }
    const blockKeys = new Set(getBlockPaths(definition).map(pathKey));
    const level = definition.carveLevels[levelIndex];
    return (level && Array.isArray(level.paths) ? level.paths : [])
      .filter(path => !blockKeys.has(pathKey(path)));
  }

  function getVisiblePaths(definition, carveLevel) {
    const blockPaths = getBlockPaths(definition);
    if (!definition || !Array.isArray(definition.carveLevels)
      || !definition.carveLevels.length) return blockPaths;
    const levelIndex = Math.min(
      Math.max(carveLevel || 0, 0),
      definition.carveLevels.length - 1
    );
    return levelIndex === 0
      ? blockPaths
      : blockPaths.concat(getOverlayPaths(definition, levelIndex));
  }

  function resolveOverride(override, palette) {
    if (override === undefined || override === null) return null;
    if (typeof override === 'number') {
      return palette[((override % palette.length) + palette.length) % palette.length];
    }
    return override;
  }

  function resolveZoneColor(definition, element, zoneId, palette) {
    const override = resolveOverride(
      element.colorOverrides && element.colorOverrides[zoneId],
      palette
    );
    if (override) return normalizeColor(override);
    const zone = (definition.colorZones || []).find(item => item.id === zoneId);
    const slot = zone ? zone.defaultPaletteSlot : 0;
    return normalizeColor(palette[((slot % palette.length) + palette.length) % palette.length]);
  }

  function parseViewBox(definition) {
    const values = String(definition.viewBox || '0 0 100 100')
      .trim()
      .split(/\s+/)
      .map(Number);
    return {
      x: Number.isFinite(values[0]) ? values[0] : 0,
      y: Number.isFinite(values[1]) ? values[1] : 0,
      width: Number.isFinite(values[2]) && values[2] > 0 ? values[2] : 100,
      height: Number.isFinite(values[3]) && values[3] > 0 ? values[3] : 100,
    };
  }

  function elementTransform(element, definition) {
    const vb = parseViewBox(definition);
    const offsetX = -vb.x - vb.width / 2;
    const offsetY = -vb.y - vb.height / 2;
    return [
      `translate(${round(element.x || 0)} ${round(element.y || 0)})`,
      `rotate(${round(element.rotation || 0)})`,
      `scale(${round(element.scaleX === undefined ? 1 : element.scaleX)} ${round(element.scaleY === undefined ? 1 : element.scaleY)})`,
      `translate(${round(offsetX)} ${round(offsetY)})`,
    ].join(' ');
  }

  function fitRect(sourceWidth, sourceHeight, target) {
    const sourceAspect = sourceWidth / sourceHeight;
    const targetAspect = target.width / target.height;
    let width;
    let height;
    if (sourceAspect > targetAspect) {
      width = target.width;
      height = width / sourceAspect;
    } else {
      height = target.height;
      width = height * sourceAspect;
    }
    return {
      x: target.x + (target.width - width) / 2,
      y: target.y + (target.height - height) / 2,
      width,
      height,
    };
  }

  function normalizeCompositionRotation(value) {
    const rotation = Number(value);
    return rotation === 90 || rotation === -90 ? rotation : 0;
  }

  function rotatedSourceSize(sourceWidth, sourceHeight, rotation) {
    return Math.abs(normalizeCompositionRotation(rotation)) === 90
      ? { width: sourceHeight, height: sourceWidth }
      : { width: sourceWidth, height: sourceHeight };
  }

  function fitRectWithMargins(sourceWidth, sourceHeight, paper, marginPreset) {
    const margin = marginPreset || MARGIN_PRESETS.standard;
    const aspect = sourceWidth / sourceHeight;
    const aspectRoot = Math.sqrt(aspect);
    const inverseAspectRoot = 1 / aspectRoot;
    const commonMargin = Math.max(margin.top, margin.sides);
    const bottomMargin = Math.max(commonMargin, margin.bottom);
    const widthCoefficient = aspectRoot + commonMargin * 2;
    const heightCoefficient = inverseAspectRoot + commonMargin + bottomMargin;
    const reference = Math.min(
      paper.width / widthCoefficient,
      paper.height / heightCoefficient
    );
    const width = reference * aspectRoot;
    const height = reference * inverseAspectRoot;
    const horizontalMargin = (paper.width - width) / 2;
    const verticalMargin = paper.height - height;
    const requestedBias = reference * (bottomMargin - commonMargin);
    const bottomBias = Math.min(
      requestedBias,
      0.2,
      verticalMargin * 0.12
    );
    const top = (verticalMargin - bottomBias) / 2;
    const bottom = top + bottomBias;
    return {
      image: {
        x: paper.x + horizontalMargin,
        y: paper.y + top,
        width,
        height,
      },
      margins: {
        left: horizontalMargin,
        right: horizontalMargin,
        top,
        bottom,
      },
    };
  }

  function mirrorRect(rect, blockWidth) {
    return {
      x: blockWidth - rect.x - rect.width,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
  }

  function getArtworkFit(layout, imageRect) {
    const source = rotatedSourceSize(
      layout.source.width,
      layout.source.height,
      layout.compositionRotation
    );
    return fitRect(source.width, source.height, imageRect || layout.image);
  }

  function carvePatternSvg(cut, idPrefix) {
    const id = `${idPrefix}-pattern-${cut.id}`;
    const density = Math.max(0.15, cut.density || 0.5);
    const scale = 1 / density;
    const rotation = cut.rotation
      ? ` patternTransform="rotate(${round(cut.rotation)})"`
      : '';
    const pattern = cut.pattern || 'crosshatch';
    const line = (d, width, extra) =>
      `<path d="${d}" fill="none" stroke="#000" stroke-width="${round(width, 3)}" stroke-linecap="round"${extra || ''}/>`;
    let size;
    let content;
    switch (pattern) {
      case 'woodgrain':
        size = 10 * scale;
        content = line(
          `M0 ${round(size * 0.3)} Q${round(size * 0.25)} ${round(size * 0.2)} ${round(size * 0.5)} ${round(size * 0.3)} T${round(size)} ${round(size * 0.3)}`,
          0.5 * Math.min(1.4, scale)
        ) + line(
          `M0 ${round(size * 0.7)} Q${round(size * 0.25)} ${round(size * 0.6)} ${round(size * 0.5)} ${round(size * 0.7)} T${round(size)} ${round(size * 0.7)}`,
          0.5 * Math.min(1.4, scale)
        );
        break;
      case 'diagonal':
        size = 5 * scale;
        content = line(
          `M0 ${round(size)} L${round(size)} 0`,
          0.6 * Math.min(1.4, scale)
        );
        break;
      case 'stipple':
        size = 8 * scale;
        content = [
          [0.25, 0.25, 0.6],
          [0.75, 0.625, 0.5],
          [0.5, 0.875, 0.7],
          [0.875, 0.125, 0.5],
        ].map(mark =>
          `<circle cx="${round(size * mark[0])}" cy="${round(size * mark[1])}" r="${round(mark[2] * Math.min(1.5, scale), 3)}" fill="#000"/>`
        ).join('');
        break;
      case 'wave':
        size = 12 * scale;
        content = line(
          `M0 ${round(size * 0.33)} Q${round(size * 0.25)} ${round(size * 0.18)} ${round(size * 0.5)} ${round(size * 0.33)} T${round(size)} ${round(size * 0.33)}`,
          0.5 * Math.min(1.4, scale)
        ) + line(
          `M0 ${round(size * 0.67)} Q${round(size * 0.25)} ${round(size * 0.52)} ${round(size * 0.5)} ${round(size * 0.67)} T${round(size)} ${round(size * 0.67)}`,
          0.5 * Math.min(1.4, scale)
        );
        break;
      case 'lines':
        size = 5 * scale;
        content = line(
          `M0 ${round(size * 0.5)} H${round(size)}`,
          0.6 * Math.min(1.4, scale)
        );
        break;
      case 'arcs':
        size = 10 * scale;
        content = [
          size * 0.4,
          size * 0.8,
        ].map(radius =>
          `<circle cx="${round(size * 0.5)}" cy="${round(size * 0.95)}" r="${round(radius)}" fill="none" stroke="#000" stroke-width="${round(0.5 * Math.min(1.4, scale), 3)}"/>`
        ).join('');
        break;
      case 'asanoha':
        size = 12 * scale;
        content = [
          `M0 ${round(size / 2)} L${round(size / 2)} 0`,
          `M${round(size / 2)} 0 L${round(size)} ${round(size / 2)}`,
          `M${round(size)} ${round(size / 2)} L${round(size / 2)} ${round(size)}`,
          `M${round(size / 2)} ${round(size)} L0 ${round(size / 2)}`,
          `M${round(size / 2)} 0 V${round(size)}`,
          `M0 ${round(size / 2)} H${round(size)}`,
        ].map(d => line(d, 0.45 * Math.min(1.4, scale))).join('');
        break;
      case 'cmarks':
        size = 14 * scale;
        content = [
          [0.2, 0.2, 0.12, -60, 120],
          [0.7, 0.15, 0.09, 30, 210],
          [0.45, 0.55, 0.14, -120, 60],
          [0.85, 0.6, 0.1, 150, 330],
          [0.15, 0.8, 0.11, 80, 260],
          [0.65, 0.85, 0.08, -30, 150],
        ].map(mark => {
          const radius = size * mark[2];
          const start = mark[3] * Math.PI / 180;
          const end = mark[4] * Math.PI / 180;
          const x1 = size * mark[0] + radius * Math.cos(start);
          const y1 = size * mark[1] + radius * Math.sin(start);
          const x2 = size * mark[0] + radius * Math.cos(end);
          const y2 = size * mark[1] + radius * Math.sin(end);
          return line(
            `M${round(x1)} ${round(y1)} A${round(radius)} ${round(radius)} 0 0 1 ${round(x2)} ${round(y2)}`,
            0.5 * Math.min(1.4, scale)
          );
        }).join('');
        break;
      case 'crosshatch':
      default:
        size = 6 * scale;
        content = line(
          `M0 0 L${round(size)} ${round(size)} M${round(size)} 0 L0 ${round(size)}`,
          0.6 * Math.min(1.4, scale)
        );
        break;
    }
    return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="${round(size)}" height="${round(size)}"${rotation}>${content}</pattern>`;
  }

  function carveCutShape(cut, paint, idPrefix) {
    const fill = cut.pattern ? `url(#${idPrefix}-pattern-${cut.id})` : paint;
    return `<path d="${esc(cut.d)}" transform="${esc(cut.transform)}" fill="${fill}" stroke="none"/>`;
  }

  function getMasterBounds(plan, method, paddingIn) {
    const layout = plan.layout;
    const padding = paddingIn === undefined ? 0.025 : Math.max(0, paddingIn);
    const paper = method === 'hanshita'
      ? mirrorRect(layout.paper, layout.block.width)
      : layout.paper;
    const kagi = layout.registration.kagi;
    const hiki = layout.registration.hikitsuke;
    const strokePad = KENTO_STROKE_WIDTH / 2;
    const hikiCenterX = hiki.orientation === 'vertical'
      ? hiki.x
      : (hiki.x1 + hiki.x2) / 2;
    const hikiCenterY = hiki.orientation === 'vertical'
      ? (hiki.y1 + hiki.y2) / 2
      : hiki.y;
    const hikiLeft = hiki.orientation === 'vertical'
      ? hiki.x
      : Math.min(hiki.x1, hikiCenterX - HIKITSUKE_GUIDE_RADIUS);
    const hikiTop = hiki.orientation === 'vertical'
      ? Math.min(hiki.y1, hikiCenterY - HIKITSUKE_GUIDE_RADIUS)
      : hiki.y;
    const hikiRight = hiki.orientation === 'vertical'
      ? hiki.x + HIKITSUKE_GUIDE_RADIUS
      : Math.max(hiki.x2, hikiCenterX + HIKITSUKE_GUIDE_RADIUS);
    const hikiBottom = hiki.orientation === 'vertical'
      ? Math.max(hiki.y2, hikiCenterY + HIKITSUKE_GUIDE_RADIUS)
      : hiki.y + HIKITSUKE_GUIDE_RADIUS;
    const originalKento = {
      x: Math.min(
        kagi.cornerX - kagi.armIn,
        kagi.cornerX - KAGI_GUIDE_RADIUS,
        hikiLeft
      ) - strokePad,
      y: Math.min(
        kagi.cornerY - kagi.armIn,
        kagi.cornerY - KAGI_GUIDE_RADIUS,
        hikiTop
      ) - strokePad,
      width: Math.max(
        kagi.cornerX + KAGI_GUIDE_RADIUS,
        kagi.cornerX + KAGI_CROSS_EXTENSION,
        hikiRight
      ) + strokePad,
      height: Math.max(
        kagi.cornerY + KAGI_GUIDE_RADIUS,
        kagi.cornerY + KAGI_CROSS_EXTENSION,
        hikiBottom
      ) + strokePad,
    };
    originalKento.width -= originalKento.x;
    originalKento.height -= originalKento.y;
    const kento = method === 'hanshita'
      ? mirrorRect(originalKento, layout.block.width)
      : originalKento;
    const left = clamp(Math.min(paper.x, kento.x) - padding, 0, layout.block.width);
    const top = clamp(Math.min(paper.y, kento.y) - padding, 0, layout.block.height);
    const right = clamp(
      Math.max(paper.x + paper.width, kento.x + kento.width) + padding,
      0,
      layout.block.width
    );
    const bottom = clamp(
      Math.max(paper.y + paper.height, kento.y + kento.height) + padding,
      0,
      layout.block.height
    );
    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top,
    };
  }

  function makeLayout(options) {
    const opts = options || {};
    const customPaper = opts.paperPreset === 'custom' && opts.customPaper
      ? {
          id: 'custom',
          name: `${round(Number(opts.customPaper.widthIn), 3)} × ${round(Number(opts.customPaper.heightIn), 3)}`,
          widthIn: Number(opts.customPaper.widthIn),
          heightIn: Number(opts.customPaper.heightIn),
        }
      : null;
    if (customPaper && (
      !Number.isFinite(customPaper.widthIn)
      || !Number.isFinite(customPaper.heightIn)
      || customPaper.widthIn <= 0
      || customPaper.heightIn <= 0
    )) {
      throw new Error('Custom paper dimensions must be positive numbers');
    }
    const preset = customPaper
      || PAPER_PRESETS[opts.paperPreset || '8x10']
      || PAPER_PRESETS['8x10'];
    const placementMode = opts.placementMode === 'margin' ? 'margin' : 'exact';
    const printPreset = placementMode === 'exact' && opts.printSize
      ? (PRINT_SIZE_PRESETS[opts.printSize] || null)
      : null;
    const marginPreset = MARGIN_PRESETS[opts.marginPreset || 'standard']
      || MARGIN_PRESETS.standard;
    const compositionRotation = normalizeCompositionRotation(opts.compositionRotation);
    const landscape = opts.blockOrientation === 'landscape';
    const block = landscape
      ? { width: 12, height: 9 }
      : { width: 9, height: 12 };
    const paperLandscape = opts.paperOrientation === 'landscape';
    const paperLong = Math.max(preset.widthIn, preset.heightIn);
    const paperShort = Math.min(preset.widthIn, preset.heightIn);
    const paperWidth = paperLandscape ? paperLong : paperShort;
    const paperHeight = paperLandscape ? paperShort : paperLong;
    const kentoClearance = KAGI_GUIDE_RADIUS + KENTO_STROKE_WIDTH / 2;
    if (
      paperWidth + kentoClearance * 2 > block.width
      || paperHeight + kentoClearance * 2 > block.height
    ) {
      throw new Error(
        `${preset.name} paper leaves insufficient room for kento on a `
        + `${block.width} × ${block.height} inch block`
      );
    }
    const sourceWidth = opts.sourceWidth || 420;
    const sourceHeight = opts.sourceHeight || 600;
    const effectiveSource = rotatedSourceSize(
      sourceWidth,
      sourceHeight,
      compositionRotation
    );
    let paper;
    let image;
    let margins;
    let imageMargin = null;

    if (placementMode === 'exact' && printPreset) {
      const printLong = Math.max(printPreset.widthIn, printPreset.heightIn);
      const printShort = Math.min(printPreset.widthIn, printPreset.heightIn);
      const printWidth = paperLandscape ? printLong : printShort;
      const printHeight = paperLandscape ? printShort : printLong;
      if (printWidth > paperWidth || printHeight > paperHeight) {
        throw new Error(`${printPreset.name} print does not fit ${preset.name} paper`);
      }
      const horizontalMargin = (paperWidth - printWidth) / 2;
      const verticalMargin = paperHeight - printHeight;
      const bottomBias = Math.min(0.2, verticalMargin * 0.12);
      const topMargin = (verticalMargin - bottomBias) / 2;
      const bottomMargin = topMargin + bottomBias;
      image = {
        x: (block.width - printWidth) / 2,
        y: (block.height - printHeight) / 2,
        width: printWidth,
        height: printHeight,
      };
      paper = {
        x: image.x - horizontalMargin,
        y: image.y - topMargin,
        width: paperWidth,
        height: paperHeight,
      };
      margins = {
        left: horizontalMargin,
        right: horizontalMargin,
        top: topMargin,
        bottom: bottomMargin,
      };
    } else if (placementMode === 'margin') {
      paper = {
        x: (block.width - paperWidth) / 2,
        y: (block.height - paperHeight) / 2,
        width: paperWidth,
        height: paperHeight,
      };
      const fitted = fitRectWithMargins(
        effectiveSource.width,
        effectiveSource.height,
        paper,
        marginPreset
      );
      image = fitted.image;
      margins = fitted.margins;
    } else {
      paper = {
        x: (block.width - paperWidth) / 2,
        y: (block.height - paperHeight) / 2,
        width: paperWidth,
        height: paperHeight,
      };
      imageMargin = clamp(
        Number.isFinite(opts.imageMarginIn) ? opts.imageMarginIn : 0.5,
        0.25,
        Math.min(paper.width, paper.height) / 3
      );
      const imageBounds = {
        x: paper.x + imageMargin,
        y: paper.y + imageMargin,
        width: paper.width - imageMargin * 2,
        height: paper.height - imageMargin * 2,
      };
      image = fitRect(effectiveSource.width, effectiveSource.height, imageBounds);
      margins = {
        left: image.x - paper.x,
        right: paper.x + paper.width - image.x - image.width,
        top: image.y - paper.y,
        bottom: paper.y + paper.height - image.y - image.height,
      };
    }

    const paperBottom = paper.y + paper.height;
    const paperRight = paper.x + paper.width;
    const longEdgeIsVertical = paper.height > paper.width;
    const hikitsuke = longEdgeIsVertical
      ? {
          orientation: 'vertical',
          x: paperRight,
          y1: clamp(
            image.y + 0.35,
            paper.y + 0.5,
            paperBottom - 1.5
          ),
        }
      : {
          orientation: 'horizontal',
          x1: clamp(
            image.x + 0.35,
            paper.x + 0.5,
            paperRight - 1.5
          ),
          y: paperBottom,
        };
    if (longEdgeIsVertical) {
      hikitsuke.y2 = hikitsuke.y1 + 1;
    } else {
      hikitsuke.x2 = hikitsuke.x1 + 1;
    }
    const registration = {
      tentative: true,
      edge: longEdgeIsVertical ? 'right' : 'bottom',
      kagi: {
        cornerX: paperRight,
        cornerY: paperBottom,
        armIn: 0.45,
      },
      hikitsuke,
    };
    return {
      block,
      paper,
      image,
      orientation: landscape ? 'landscape' : 'portrait',
      source: { width: sourceWidth, height: sourceHeight },
      compositionRotation,
      placementMode,
      paperPreset: preset.id,
      paperName: preset.name,
      printSize: printPreset ? printPreset.id : null,
      printName: printPreset ? printPreset.name : null,
      marginPreset: placementMode === 'margin' ? marginPreset.id : null,
      marginName: placementMode === 'margin' ? marginPreset.name : null,
      imageMargin,
      margins,
      registration,
    };
  }

  function createPlan(options) {
    const opts = options || {};
    const composition = normalizeCompositionData(opts.composition);
    const definitions = (opts.definitions || []).concat(composition.customDefs || []);
    const definitionMap = new Map();
    definitions.forEach(definition => {
      if (definition && definition.id) definitionMap.set(definition.id, definition);
    });
    const palette = (opts.palette && opts.palette.length ? opts.palette : DEFAULT_PALETTE)
      .map(normalizeColor);
    const layout = makeLayout(Object.assign({}, opts.layout, {
      sourceWidth: composition.paperW || 420,
      sourceHeight: composition.paperH || 600,
    }));
    const records = [];
    const carveCuts = [];
    const warnings = [];
    const paperBase = PAPER_BASES[composition.paperType || 'kozo'] || PAPER_BASES.kozo;
    const paperRevealColors = new Set(
      (opts.paperRevealColors || []).map(normalizeColor)
    );
    const pressureCurveValue = composition.pressureCurve === undefined
      ? opts.pressureCurve
      : composition.pressureCurve;
    const pressureCurve = getPressureCurve(pressureCurveValue);
    let order = 0;
    let measuredFillPaths = 0;
    let totalFillPaths = 0;

    const sourceWidth = composition.paperW || 420;
    const sourceHeight = composition.paperH || 600;
    const horizonY = clamp(
      Number.isFinite(composition.horizon) ? composition.horizon : 0.62,
      0,
      1
    ) * sourceHeight;
    const backgroundId = composition.background || composition.sky;
    const backgroundType = BACKGROUND_BLOCK_TYPES[backgroundId];
    if (backgroundType) {
      records.push({
        id: `record-${records.length + 1}`,
        order: order++,
        elementId: 'atmosphere-background',
        definitionId: 'atmosphere-background',
        elementName: backgroundType.name,
        zoneId: backgroundId,
        color: backgroundType.color,
        type: 'fill',
        d: `M0 0 H${round(sourceWidth)} V${round(horizonY)} H0 Z`,
        strokeWidth: 0,
        fillRule: null,
        transform: '',
        pathIndex: 0,
        bokashi: {
          type: 'atmosphere',
          direction: 'down',
          description: `${backgroundType.name}: vertical bokashi toward the horizon`,
        },
        bounds: { x: 0, y: 0, width: sourceWidth, height: horizonY },
        sourceType: 'atmosphere',
        blockKey: 'atmosphere',
        suggestedBlockName: 'Atmosphere',
        defaultPrint: false,
      });
    }
    const foregroundId = composition.foreground || composition.ground;
    const foregroundType = FOREGROUND_BLOCK_TYPES[foregroundId];
    if (foregroundType) {
      records.push({
        id: `record-${records.length + 1}`,
        order: order++,
        elementId: 'atmosphere-foreground',
        definitionId: 'atmosphere-foreground',
        elementName: foregroundType.name,
        zoneId: foregroundId,
        color: foregroundType.color,
        type: 'fill',
        d: `M0 ${round(horizonY)} H${round(sourceWidth)} V${round(sourceHeight)} H0 Z`,
        strokeWidth: 0,
        fillRule: null,
        transform: '',
        pathIndex: 0,
        bokashi: {
          type: 'atmosphere',
          direction: 'up',
          description: `${foregroundType.name}: vertical bokashi away from the lower edge`,
        },
        bounds: {
          x: 0,
          y: horizonY,
          width: sourceWidth,
          height: sourceHeight - horizonY,
        },
        sourceType: 'atmosphere',
        blockKey: 'atmosphere',
        suggestedBlockName: 'Atmosphere',
        defaultPrint: false,
      });
    }
    if (backgroundType || foregroundType) {
      const atmosphereParts = [backgroundType, foregroundType]
        .filter(Boolean)
        .map(type => type.name)
        .join(' + ');
      warnings.push(
        `Atmosphere is proposed as one optional physical block (${atmosphereParts}); `
        + 'its fields use separate inking and bokashi instructions'
      );
    }

    for (const element of composition.elements || []) {
      const definition = definitionMap.get(element.defId);
      if (!definition) {
        warnings.push(`Missing element definition: ${element.defId}`);
        continue;
      }
      if (definition.hanko) {
        warnings.push(`Excluded hanko element: ${definition.name || definition.id}`);
        continue;
      }
      if (element.carvePattern && element.carvePattern !== 'none') {
        warnings.push(`Legacy element-wide carve pattern requires review: ${definition.name || definition.id}`);
      }

      const transform = elementTransform(element, definition);
      (element.carveStrokes || []).forEach((stroke, strokeIndex) => {
        const cut = buildCarveCut(stroke, element, transform, pressureCurve, strokeIndex);
        if (cut) carveCuts.push(cut);
      });
      const visiblePaths = getVisiblePaths(definition, element.carveLevel || 0);
      visiblePaths.forEach((path, pathIndex) => {
        if (!path || !path.d || (path.type !== 'fill' && path.type !== 'stroke')) return;
        const resolvedColor = resolveZoneColor(
          definition,
          element,
          path.zone || 'body',
          palette
        );
        let bounds = null;
        if (path.type === 'fill') {
          totalFillPaths++;
          if (measuredFillPaths < MAX_MEASURED_FILL_PATHS) {
            bounds = measurePathBounds(path.d);
            measuredFillPaths++;
          }
        }
        records.push({
          id: `record-${records.length + 1}`,
          order: order++,
          elementId: element.id,
          definitionId: definition.id,
          elementName: definition.name || definition.id,
          zoneId: path.zone || 'body',
          color: resolvedColor,
          type: path.type,
          d: path.d,
          strokeWidth: path.strokeWidth || 1.5,
          fillRule: path.fillRule || null,
          transform,
          pathIndex,
          bokashi: element.zoneBokashi && element.zoneBokashi[path.zone || 'body'] || null,
          bounds,
          sourceType: 'element',
          blockKey: `color:${resolvedColor}`,
          suggestedBlockName: null,
          defaultPrint: true,
        });
      });
    }

    const blockMap = new Map();
    for (const record of records) {
      const blockKey = record.blockKey || `color:${record.color}`;
      if (!blockMap.has(blockKey)) {
        blockMap.set(blockKey, {
          id: `block-${blockMap.size + 1}`,
          key: blockKey,
          name: record.suggestedBlockName || `Color ${blockMap.size + 1}`,
          color: record.color,
          order: blockMap.size + 1,
          recordIds: [],
          role: record.sourceType === 'atmosphere'
            ? 'ink'
            : paperRevealColors.has(record.color) ? 'paper' : 'ink',
          defaultPrint: record.defaultPrint !== false,
          isAtmosphere: record.sourceType === 'atmosphere',
          colors: new Set(),
          sourceTypes: new Set(),
          bokashi: [],
          bokashiKeys: new Set(),
        });
      }
      const block = blockMap.get(blockKey);
      block.recordIds.push(record.id);
      block.colors.add(record.color);
      block.sourceTypes.add(record.sourceType || 'element');
      block.defaultPrint = block.defaultPrint && record.defaultPrint !== false;
      if (record.bokashi) {
        const noteType = typeof record.bokashi === 'string'
          ? 'zone'
          : record.bokashi.type || 'zone';
        const direction = typeof record.bokashi === 'string'
          ? record.bokashi
          : record.bokashi.direction || '';
        const description = typeof record.bokashi === 'string'
          ? ''
          : record.bokashi.description || '';
        const key = [
          record.elementId,
          record.zoneId,
          noteType,
          direction,
          description,
        ].join('|');
        if (!block.bokashiKeys.has(key)) {
          block.bokashiKeys.add(key);
          block.bokashi.push(record.bokashi);
        }
      }
    }
    if (carveCuts.length && pressureCurveValue === undefined) {
      warnings.push('Composition predates saved pressure curves; custom carve strokes use the Medium curve');
    }

    const artworkFit = getArtworkFit(layout);
    const effectiveSource = rotatedSourceSize(
      layout.source.width,
      layout.source.height,
      layout.compositionRotation
    );
    const sourceScale = artworkFit.width / effectiveSource.width;
    const elementMap = new Map((composition.elements || []).map(element => [element.id, element]));
    const detailWarnings = {
      carved: { count: 0, minimumMm: Infinity, elements: new Set() },
      pattern: { count: 0, minimumMm: Infinity, elements: new Set() },
      line: { count: 0, minimumMm: Infinity, elements: new Set() },
      region: { count: 0, minimumMm: Infinity, elements: new Set() },
    };
    const recordDetailWarning = (kind, elementName, minimumIn) => {
      const group = detailWarnings[kind];
      group.count++;
      group.minimumMm = Math.min(group.minimumMm, minimumIn * 25.4);
      if (group.elements.size < 4) group.elements.add(elementName);
    };
    for (const cut of carveCuts) {
      const element = elementMap.get(cut.elementId) || {};
      const definition = definitionMap.get(element.defId);
      const elementName = definition ? definition.name || definition.id : `element ${cut.elementId}`;
      const elementScale = Math.min(
        Math.abs(element.scaleX === undefined ? 1 : element.scaleX),
        Math.abs(element.scaleY === undefined ? 1 : element.scaleY)
      );
      const physicalWidth = cut.minWidth * elementScale * sourceScale;
      if (physicalWidth < MIN_DETAIL_IN) {
        recordDetailWarning('carved', elementName, physicalWidth);
      }
      if (cut.pattern) {
        const markWidth = 0.5 * (1 / Math.max(0.15, cut.density || 0.5))
          * elementScale * sourceScale;
        if (markWidth < MIN_DETAIL_IN) {
          recordDetailWarning('pattern', elementName, markWidth);
        }
      }
    }
    for (const record of records) {
      const element = elementMap.get(record.elementId) || {};
      const scaleX = Math.abs(element.scaleX === undefined ? 1 : element.scaleX);
      const scaleY = Math.abs(element.scaleY === undefined ? 1 : element.scaleY);
      if (record.type === 'stroke') {
        const physicalWidth = record.strokeWidth * Math.min(scaleX, scaleY) * sourceScale;
        if (physicalWidth < MIN_DETAIL_IN) {
          recordDetailWarning('line', record.elementName, physicalWidth);
        }
      } else if (record.bounds && record.bounds.width > 0 && record.bounds.height > 0) {
        const physicalWidth = record.bounds.width * scaleX * sourceScale;
        const physicalHeight = record.bounds.height * scaleY * sourceScale;
        const smallestDimension = Math.min(physicalWidth, physicalHeight);
        if (smallestDimension < MIN_REGION_IN) {
          recordDetailWarning('region', record.elementName, smallestDimension);
        }
      }
    }
    const detailLabels = {
      carved: 'fine carved strokes',
      pattern: 'fine carve-pattern marks',
      line: 'fine printable lines',
      region: 'small printable regions',
    };
    Object.entries(detailWarnings).forEach(([kind, group]) => {
      if (!group.count) return;
      const elementNames = Array.from(group.elements).join(', ');
      warnings.push(
        `${group.count} ${detailLabels[kind]} below the provisional physical threshold`
        + `; smallest approximately ${round(group.minimumMm, 2)} mm`
        + (elementNames ? ` (${elementNames})` : '')
      );
    });
    if (totalFillPaths > measuredFillPaths) {
      warnings.push(
        `Physical-size analysis sampled ${measuredFillPaths} of ${totalFillPaths} fill paths for performance`
      );
    }
    if (composition.mist) {
      warnings.push('Mist remains guide-only and is not included as a physical block');
    }
    if (composition.backgroundCarveStrokes && composition.backgroundCarveStrokes.length) {
      warnings.push('Background carve strokes are not yet applied to proposed atmosphere blocks');
    }

    const blocks = Array.from(blockMap.values()).map(block => {
      block.colors = Array.from(block.colors);
      block.sourceTypes = Array.from(block.sourceTypes);
      delete block.bokashiKeys;
      block.luminance = block.colors.reduce(
        (total, color) => total + colorLuminance(color),
        0
      ) / Math.max(1, block.colors.length);
      block.sourceOrder = Math.min(...block.recordIds.map(id =>
        records.find(record => record.id === id).order
      ));
      block.colorName = block.isAtmosphere ? 'Atmosphere' : blockColorName(block.color);
      block.nearPaper = !block.isAtmosphere
        && block.colors.length === 1
        && colorDistance(block.color, paperBase) <= 40;
      return block;
    });
    disambiguateBlockColorNames(blocks);
    blocks.forEach(block => {
      block.name = generateBlockName(block, records);
      if (block.nearPaper && block.role === 'ink') {
        warnings.push(
          `${block.name} (${block.color}) is close to ${composition.paperType || 'kozo'} paper ${paperBase}; review whether it should be ink or Paper Reveal`
        );
      }
      if (block.role === 'paper') {
        const firstOrder = Math.min(...block.recordIds.map(id =>
          records.find(record => record.id === id).order
        ));
        block.hasEarlierGeometry = records.some(record => record.order < firstOrder);
        if (!block.hasEarlierGeometry) {
          warnings.push(`${block.name} is Paper Reveal but has no earlier geometry to knock out`);
        }
      }
    });
    blocks.sort((a, b) => {
      if (a.role !== b.role) return a.role === 'ink' ? -1 : 1;
      if (a.role === 'paper') return a.sourceOrder - b.sourceOrder;
      if (a.isAtmosphere !== b.isAtmosphere) return a.isAtmosphere ? -1 : 1;
      if (b.luminance !== a.luminance) return b.luminance - a.luminance;
      return a.sourceOrder - b.sourceOrder;
    });
    let printOrder = 0;
    blocks.forEach(block => {
      block.printOrder = block.role === 'ink' ? ++printOrder : null;
    });

    return {
      version: 1,
      compositionName: composition.name || 'Block Plan Test',
      paletteId: composition.paletteId || null,
      palette,
      paperBase,
      layout,
      records,
      carveCuts,
      blocks,
      warnings,
    };
  }

  function recordShape(record, paint, opacity) {
    const common = [
      `d="${esc(record.d)}"`,
      `transform="${esc(record.transform)}"`,
    ];
    if (record.fillRule) common.push(`fill-rule="${esc(record.fillRule)}"`);
    if (record.type === 'stroke') {
      return `<path ${common.join(' ')} fill="none" stroke="${paint}" stroke-width="${round(record.strokeWidth)}" stroke-linecap="round" stroke-linejoin="round"${opacity === undefined ? '' : ` opacity="${opacity}"`}/>`;
    }
    return `<path ${common.join(' ')} fill="${paint}" stroke="none"${opacity === undefined ? '' : ` opacity="${opacity}"`}/>`;
  }

  function visibleRecordSvg(record, paint, maskId) {
    const mask = maskId ? ` mask="url(#${maskId})"` : '';
    return `<g${mask}>${recordShape(record, paint)}</g>`;
  }

  function buildArtwork(plan, block, mode, imageRect, idPrefix) {
    const source = plan.layout.source;
    const compositionRotation = plan.layout.compositionRotation || 0;
    const effectiveSource = rotatedSourceSize(
      source.width,
      source.height,
      compositionRotation
    );
    const fittedImage = getArtworkFit(plan.layout, imageRect);
    const scaleX = fittedImage.width / effectiveSource.width;
    const scaleY = fittedImage.height / effectiveSource.height;
    const orientationTransform = compositionRotation === 90
      ? ` translate(${round(source.height)} 0) rotate(90)`
      : compositionRotation === -90
        ? ` translate(0 ${round(source.width)}) rotate(-90)`
        : '';
    const clipId = `${idPrefix}-composition-clip`;
    const defs = [
      `<clipPath id="${clipId}"><rect x="0" y="0" width="${round(source.width)}" height="${round(source.height)}"/></clipPath>`,
      ...(plan.carveCuts || []).filter(cut => cut.pattern)
        .map(cut => carvePatternSvg(cut, idPrefix)),
    ];
    const body = [];
    const records = plan.records;
    const selectedIds = new Set(block.recordIds);
    const paint = mode === 'carve-away'
      ? '#ffffff'
      : mode === 'keep' ? '#5f5f5f' : '#000000';
    const elementGroups = [];
    const elementGroupMap = new Map();
    records.forEach(record => {
      if (!elementGroupMap.has(record.elementId)) {
        const group = { elementId: record.elementId, records: [] };
        elementGroupMap.set(record.elementId, group);
        elementGroups.push(group);
      }
      elementGroupMap.get(record.elementId).records.push(record);
    });

    elementGroups.forEach((elementGroup, elementIndex) => {
      const selectedRecords = elementGroup.records.filter(record => selectedIds.has(record.id));
      if (!selectedRecords.length) return;
      const lastOrder = elementGroup.records[elementGroup.records.length - 1].order;
      const laterElements = records.filter(record =>
        record.order > lastOrder && record.elementId !== elementGroup.elementId
      );
      const cuts = (plan.carveCuts || []).filter(cut => cut.elementId === elementGroup.elementId);
      let elementMaskId = null;
      if (laterElements.length || cuts.length) {
        elementMaskId = `${idPrefix}-element-${elementIndex}-mask`;
        defs.push(
          `<mask id="${elementMaskId}" maskUnits="userSpaceOnUse" x="0" y="0" width="${round(source.width)}" height="${round(source.height)}">`,
          `<rect x="0" y="0" width="${round(source.width)}" height="${round(source.height)}" fill="#fff"/>`,
          ...laterElements.map(record => recordShape(record, '#000')),
          ...cuts.map(cut => carveCutShape(cut, '#000', idPrefix)),
          '</mask>'
        );
      }

      const runs = [];
      let activeRun = null;
      elementGroup.records.forEach(record => {
        if (selectedIds.has(record.id)) {
          if (!activeRun) {
            activeRun = { records: [], endOrder: record.order };
            runs.push(activeRun);
          }
          activeRun.records.push(record);
          activeRun.endOrder = record.order;
        } else {
          activeRun = null;
        }
      });

      const runSvg = runs.map((run, runIndex) => {
        const laterInternal = elementGroup.records.filter(record =>
          record.order > run.endOrder && !selectedIds.has(record.id)
        );
        let internalMaskId = null;
        if (laterInternal.length) {
          internalMaskId = `${idPrefix}-element-${elementIndex}-run-${runIndex}-mask`;
          defs.push(
            `<mask id="${internalMaskId}" maskUnits="userSpaceOnUse" x="0" y="0" width="${round(source.width)}" height="${round(source.height)}">`,
            `<rect x="0" y="0" width="${round(source.width)}" height="${round(source.height)}" fill="#fff"/>`,
            ...laterInternal.map(record => recordShape(record, '#000')),
            '</mask>'
          );
        }
        const shapes = run.records
          .map(record => visibleRecordSvg(
            record,
            mode === 'proof'
              ? record.color
              : mode === 'keep' && record.type === 'stroke' ? '#111111' : paint,
            null
          ))
          .join('');
        const visibleShapes = internalMaskId
          ? `<g mask="url(#${internalMaskId})">${shapes}</g>`
          : shapes;
        return visibleShapes;
      }).join('');
      const visibleGroup = elementMaskId
        ? `<g mask="url(#${elementMaskId})">${runSvg}</g>`
        : runSvg;
      body.push(visibleGroup);
    });

    return [
      `<defs>${defs.join('')}</defs>`,
      `<g transform="translate(${round(fittedImage.x)} ${round(fittedImage.y)}) scale(${round(scaleX, 8)} ${round(scaleY, 8)})${orientationTransform}">`,
      `<g clip-path="url(#${clipId})">${body.join('')}</g>`,
      '</g>',
    ].join('');
  }

  function physicalKentoSvg(layout) {
    const kagi = layout.registration.kagi;
    const hiki = layout.registration.hikitsuke;
    const cornerX = kagi.cornerX;
    const cornerY = kagi.cornerY;
    const radius = KAGI_GUIDE_RADIUS;
    const hikiRadius = HIKITSUKE_GUIDE_RADIUS;
    const hikiCenterX = hiki.orientation === 'vertical'
      ? hiki.x
      : (hiki.x1 + hiki.x2) / 2;
    const hikiCenterY = hiki.orientation === 'vertical'
      ? (hiki.y1 + hiki.y2) / 2
      : hiki.y;
    const extension = KAGI_CROSS_EXTENSION;
    return [
      `<path d="M${round(cornerX - kagi.armIn)} ${round(cornerY)} H${round(cornerX + extension)} M${round(cornerX)} ${round(cornerY - kagi.armIn)} V${round(cornerY + extension)}" fill="none" stroke="#000" stroke-width="${KENTO_STROKE_WIDTH}" stroke-linecap="square"/>`,
      `<path d="M${round(cornerX)} ${round(cornerY - radius)} A${round(radius)} ${round(radius)} 0 0 1 ${round(cornerX)} ${round(cornerY + radius)} A${round(radius)} ${round(radius)} 0 0 1 ${round(cornerX - radius)} ${round(cornerY)}" fill="none" stroke="#000" stroke-width="${KENTO_STROKE_WIDTH}" stroke-linecap="round"/>`,
      hiki.orientation === 'vertical'
        ? `<path d="M${round(hiki.x)} ${round(hiki.y1)} V${round(hiki.y2)} M${round(hikiCenterX)} ${round(hikiCenterY - hikiRadius)} A${round(hikiRadius)} ${round(hikiRadius)} 0 0 1 ${round(hikiCenterX)} ${round(hikiCenterY + hikiRadius)}" fill="none" stroke="#000" stroke-width="${KENTO_STROKE_WIDTH}" stroke-linecap="round"/>`
        : `<path d="M${round(hiki.x1)} ${round(hiki.y)} H${round(hiki.x2)} M${round(hikiCenterX + hikiRadius)} ${round(hikiCenterY)} A${round(hikiRadius)} ${round(hikiRadius)} 0 0 1 ${round(hikiCenterX - hikiRadius)} ${round(hikiCenterY)}" fill="none" stroke="#000" stroke-width="${KENTO_STROKE_WIDTH}" stroke-linecap="round"/>`,
    ].join('');
  }

  function guideGeometrySvg(plan, paperRect, imageRect) {
    const layout = plan.layout;
    return [
      `<rect x="0.01" y="0.01" width="${round(layout.block.width - 0.02)}" height="${round(layout.block.height - 0.02)}" fill="none" stroke="#8b8174" stroke-width="0.02"/>`,
      `<rect x="${round(paperRect.x)}" y="${round(paperRect.y)}" width="${round(paperRect.width)}" height="${round(paperRect.height)}" fill="none" stroke="#9d9488" stroke-width="0.015" stroke-dasharray="0.09 0.06"/>`,
      `<rect x="${round(imageRect.x)}" y="${round(imageRect.y)}" width="${round(imageRect.width)}" height="${round(imageRect.height)}" fill="none" stroke="#c0b8ad" stroke-width="0.012" stroke-dasharray="0.05 0.05"/>`,
    ].join('');
  }

  function guideSvg(plan, method, paperRect, imageRect) {
    const layout = plan.layout;
    const isHanshita = method === 'hanshita';
    const title = `${plan.compositionName} - ${isHanshita ? 'Hanshita' : 'Carbon'}`;
    const instruction = isHanshita
      ? 'Paste printed face down'
      : 'Transfer in this orientation';
    return [
      guideGeometrySvg(plan, paperRect, imageRect),
      '<path d="M0.75 0.48 H1.75 M0.75 0.42 V0.54 M1.75 0.42 V0.54" fill="none" stroke="#000" stroke-width="0.018"/>',
      '<text x="1.25" y="0.35" text-anchor="middle" font-family="Arial, sans-serif" font-size="0.14">1 inch</text>',
      '<path d="M2.05 0.48 H3.03425 M2.05 0.42 V0.54 M3.03425 0.42 V0.54" fill="none" stroke="#000" stroke-width="0.018"/>',
      '<text x="2.542" y="0.35" text-anchor="middle" font-family="Arial, sans-serif" font-size="0.14">25 mm</text>',
      `<text x="${round(layout.block.width - 0.35)}" y="0.32" text-anchor="end" font-family="Arial, sans-serif" font-size="0.13" font-weight="600">${esc(title)}</text>`,
      `<text x="${round(layout.block.width - 0.35)}" y="0.55" text-anchor="end" font-family="Arial, sans-serif" font-size="0.14">${esc(instruction)}</text>`,
    ].join('');
  }

  function blockFooterSvg(plan, block, viewLabel, includeKentoNote) {
    const layout = plan.layout;
    const colors = block.colors && block.colors.length
      ? block.colors
      : [block.color];
    const swatchSize = 0.14;
    const swatchGap = 0.035;
    const swatchX = 0.35;
    const identityY = layout.block.height - 0.16;
    const textX = swatchX + colors.length * (swatchSize + swatchGap) + 0.04;
    const identity = `${block.name}${viewLabel ? ` — ${viewLabel}` : ''}`;
    const hexLabel = colors
      .map(color => normalizeColor(color).toUpperCase())
      .join(' + ');
    const swatches = colors.map((color, index) =>
      `<rect x="${round(swatchX + index * (swatchSize + swatchGap))}" y="${round(identityY - 0.11)}" width="${swatchSize}" height="${swatchSize}" rx="0.025" fill="${esc(color)}" stroke="#4a433b" stroke-width="0.012"/>`
    ).join('');
    return [
      includeKentoNote
        ? `<text x="0.35" y="${round(layout.block.height - 0.38)}" font-family="Arial, sans-serif" font-size="0.12">Kento placement guide — choose final notch width and depth for your paper and carving practice</text>`
        : '',
      swatches,
      `<text x="${round(textX)}" y="${round(identityY)}" font-family="Arial, sans-serif" font-size="0.12"><tspan font-weight="700">${esc(identity)}</tspan><tspan fill="#5f574e"> — ${esc(hexLabel)}</tspan></text>`,
    ].join('');
  }

  function referenceGuideSvg(plan, title, instruction, paperRect, imageRect) {
    const layout = plan.layout;
    return [
      `<rect x="0.01" y="0.01" width="${round(layout.block.width - 0.02)}" height="${round(layout.block.height - 0.02)}" fill="none" stroke="#8b8174" stroke-width="0.02"/>`,
      `<rect x="${round(paperRect.x)}" y="${round(paperRect.y)}" width="${round(paperRect.width)}" height="${round(paperRect.height)}" fill="none" stroke="#9d9488" stroke-width="0.015" stroke-dasharray="0.09 0.06"/>`,
      `<rect x="${round(imageRect.x)}" y="${round(imageRect.y)}" width="${round(imageRect.width)}" height="${round(imageRect.height)}" fill="none" stroke="#c0b8ad" stroke-width="0.012" stroke-dasharray="0.05 0.05"/>`,
      `<text x="${round(layout.block.width - 0.35)}" y="0.32" text-anchor="end" font-family="Arial, sans-serif" font-size="0.17" font-weight="700">${esc(title)}</text>`,
      `<text x="${round(layout.block.width - 0.35)}" y="0.55" text-anchor="end" font-family="Arial, sans-serif" font-size="0.14">${esc(instruction)}</text>`,
    ].join('');
  }

  function getBlock(plan, blockId) {
    return plan.blocks.find(block => block.id === blockId) || plan.blocks[0] || null;
  }

  function buildMasterSvg(plan, blockId, options) {
    const opts = options || {};
    const requestedPrefix = String(opts.idPrefix || `bp-${++masterSerial}`)
      .replace(/[^a-zA-Z0-9_-]+/g, '-');
    const idPrefix = /^[a-zA-Z_]/.test(requestedPrefix)
      ? requestedPrefix
      : `bp-${requestedPrefix}`;
    const method = opts.method === 'carbon' ? 'carbon' : 'hanshita';
    const view = opts.view || 'keep';
    const layout = plan.layout;
    if (view === 'physical-proof') {
      const proofTitle = `${plan.compositionName} — Physical Proof`;
      const includedBlockIds = opts.includedBlockIds
        ? new Set(opts.includedBlockIds)
        : null;
      const proofArtwork = plan.blocks
        .filter(block =>
          block.role !== 'paper'
          && (!includedBlockIds || includedBlockIds.has(block.id))
        )
        .map((block, index) =>
          buildArtwork(plan, block, 'proof', layout.image, `${idPrefix}-proof-${index}`)
        )
        .join('');
      const proofGuides = opts.guides === false || opts.annotations === false
        ? ''
        : referenceGuideSvg(
            plan,
            'PHYSICAL PROOF — NORMAL READING',
            'Reference composite of proposed ink blocks',
            layout.paper,
            layout.image
          );
      return [
        `<svg xmlns="${SVG_NS}" width="${round(layout.block.width)}in" height="${round(layout.block.height)}in" viewBox="0 0 ${round(layout.block.width)} ${round(layout.block.height)}" role="img" aria-label="${esc(proofTitle)}">`,
        `<rect x="0" y="0" width="${round(layout.block.width)}" height="${round(layout.block.height)}" fill="#fff"/>`,
        `<rect x="${round(layout.paper.x)}" y="${round(layout.paper.y)}" width="${round(layout.paper.width)}" height="${round(layout.paper.height)}" fill="${esc(plan.paperBase || '#fff')}"/>`,
        proofGuides,
        proofArtwork,
        opts.annotations === false
          ? ''
          : `<text x="${round(layout.block.width / 2)}" y="${round(layout.block.height - 0.22)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="0.14">${esc(proofTitle)}</text>`,
        '</svg>',
      ].join('');
    }

    const block = getBlock(plan, blockId);
    if (!block) throw new Error('Block Plan has no color blocks');
    if (view === 'paper-mask' || block.role === 'paper') {
      const paperMaskTitle = `${plan.compositionName} — ${block.name} — Paper Reveal Mask`;
      const isHanshita = method === 'hanshita';
      const paperRect = isHanshita
        ? mirrorRect(layout.paper, layout.block.width)
        : layout.paper;
      const imageRect = isHanshita
        ? mirrorRect(layout.image, layout.block.width)
        : layout.image;
      let artwork = buildArtwork(
        plan,
        block,
        'solid',
        imageRect,
        `${idPrefix}-paper-mask`
      );
      if (!isHanshita) {
        const axis = imageRect.x * 2 + imageRect.width;
        artwork = `<g transform="translate(${round(axis)} 0) scale(-1 1)">${artwork}</g>`;
      }
      const paperOutline =
        `<rect x="${round(paperRect.x)}" y="${round(paperRect.y)}" width="${round(paperRect.width)}" height="${round(paperRect.height)}" fill="none" stroke="#9d9488" stroke-width="0.015" stroke-dasharray="0.09 0.06"/>`;
      const paperGuides = opts.guides === false
        ? paperOutline
        : guideGeometrySvg(plan, paperRect, imageRect);
      const viewport = opts.crop === 'master'
        ? getMasterBounds(plan, method, opts.cropPaddingIn)
        : {
            x: 0,
            y: 0,
            width: layout.block.width,
            height: layout.block.height,
          };
      return [
        `<svg xmlns="${SVG_NS}" width="${round(viewport.width)}in" height="${round(viewport.height)}in" viewBox="${round(viewport.x)} ${round(viewport.y)} ${round(viewport.width)} ${round(viewport.height)}" role="img" aria-label="${esc(paperMaskTitle)}">`,
        `<rect x="${round(viewport.x)}" y="${round(viewport.y)}" width="${round(viewport.width)}" height="${round(viewport.height)}" fill="#fff"/>`,
        paperGuides,
        artwork,
        opts.annotations === false
          ? ''
          : `<text x="${round(layout.block.width / 2)}" y="${round(layout.block.height - 0.22)}" text-anchor="middle" font-family="Arial, sans-serif" font-size="0.14">${esc(paperMaskTitle)}</text>`,
        '</svg>',
      ].join('');
    }

    const isHanshita = method === 'hanshita';
    const paperRect = isHanshita
      ? mirrorRect(layout.paper, layout.block.width)
      : layout.paper;
    const imageRect = isHanshita
      ? mirrorRect(layout.image, layout.block.width)
      : layout.image;
    const artMode = view === 'proof'
      ? 'proof'
      : view === 'carve-away' ? 'carve-away' : 'keep';
    let artwork = buildArtwork(plan, block, artMode, imageRect, idPrefix);

    if (!isHanshita) {
      const axis = imageRect.x * 2 + imageRect.width;
      artwork = `<g transform="translate(${round(axis)} 0) scale(-1 1)">${artwork}</g>`;
    }

    let kento = physicalKentoSvg(layout);
    if (isHanshita) {
      kento = `<g transform="translate(${round(layout.block.width)} 0) scale(-1 1)">${kento}</g>`;
    }

    const guides = opts.guides === false
      ? ''
      : opts.annotations === false
        ? guideGeometrySvg(plan, paperRect, imageRect)
        : guideSvg(plan, method, paperRect, imageRect);
    const viewLabel = view === 'carve-away'
      ? 'Carve-away map'
      : view === 'keep' ? 'Block Surface' : view === 'proof' ? 'Isolated impression' : null;
    const title = `${plan.compositionName} — ${block.name} (${block.color})${viewLabel ? ` — ${viewLabel}` : ''}`;
    const viewport = opts.crop === 'master'
      ? getMasterBounds(plan, method, opts.cropPaddingIn)
      : {
          x: 0,
          y: 0,
          width: layout.block.width,
          height: layout.block.height,
        };

    return [
      `<svg xmlns="${SVG_NS}" width="${round(viewport.width)}in" height="${round(viewport.height)}in" viewBox="${round(viewport.x)} ${round(viewport.y)} ${round(viewport.width)} ${round(viewport.height)}" role="img" aria-label="${esc(title)}">`,
      `<rect x="${round(viewport.x)}" y="${round(viewport.y)}" width="${round(viewport.width)}" height="${round(viewport.height)}" fill="#fff"/>`,
      view === 'carve-away'
        ? `<rect x="${round(imageRect.x)}" y="${round(imageRect.y)}" width="${round(imageRect.width)}" height="${round(imageRect.height)}" fill="#5f5f5f"/>`
        : '',
      guides,
      artwork,
      kento,
      opts.annotations === false
        ? ''
        : blockFooterSvg(plan, block, viewLabel, opts.guides !== false),
      '</svg>',
    ].join('');
  }

  function describePlan(plan) {
    return {
      block: `${plan.layout.block.width} × ${plan.layout.block.height} in`,
      paper: `${plan.layout.paper.width} × ${plan.layout.paper.height} in`,
      image: `${round(plan.layout.image.width, 3)} × ${round(plan.layout.image.height, 3)} in`,
      margins: plan.layout.margins,
      placementMode: plan.layout.placementMode,
      marginPreset: plan.layout.marginPreset,
      compositionRotation: plan.layout.compositionRotation,
      blocks: plan.blocks.length,
      inkBlocks: plan.blocks.filter(block => block.role !== 'paper').length,
      paperReveals: plan.blocks.filter(block => block.role === 'paper').length,
      records: plan.records.length,
      carveCuts: plan.carveCuts.length,
      warnings: plan.warnings.slice(),
    };
  }

  root.MokuriBlockPlan = Object.freeze({
    PAPER_PRESETS,
    PRINT_SIZE_PRESETS,
    MARGIN_PRESETS,
    PAPER_BASES,
    createPlan,
    buildMasterSvg,
    describePlan,
    getMasterBounds,
    getVisiblePaths,
    makeLayout,
    mirrorRect,
  });
})(typeof window !== 'undefined' ? window : globalThis);
