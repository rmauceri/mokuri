// ============================================================
//  MOKURI — Core Motif Element Library
//  Procedural SVG element definitions for Japanese woodblock shapes
// ============================================================

const MOKURI_CORE_ELEMENTS = [

  // ============================================================
  //  FLORA — SAKURA & UME
  // ============================================================
  {
    id: 'sakura-blossom',
    name: 'Sakura Blossom',
    category: 'flora',
    viewBox: '0 0 120 120',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      // Level 0: solid silhouette
      {
        name: 'block',
        paths: [
          // 5-petal blossom
          {
            d: 'M60 15 Q55 25 50 30 Q40 35 35 40 Q25 45 25 55 Q25 65 32 70 Q28 75 27 82 Q26 90 30 95 Q35 100 42 100 Q48 100 52 97 Q55 103 60 108 Q65 103 68 97 Q72 100 78 100 Q85 100 90 95 Q94 90 93 82 Q92 75 88 70 Q95 65 95 55 Q95 45 85 40 Q80 35 70 30 Q65 25 60 15 Z',
            type: 'fill',
            zone: 'petal',
          },
          // Center
          {
            d: 'M60 55 A8 8 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
        ],
      },
      // Level 1: outline
      {
        name: 'shape',
        paths: [
          {
            d: 'M60 15 Q55 25 50 30 Q40 35 35 40 Q25 45 25 55 Q25 65 32 70 Q28 75 27 82 Q26 90 30 95 Q35 100 42 100 Q48 100 52 97 Q55 103 60 108 Q65 103 68 97 Q72 100 78 100 Q85 100 90 95 Q94 90 93 82 Q92 75 88 70 Q95 65 95 55 Q95 45 85 40 Q80 35 70 30 Q65 25 60 15 Z',
            type: 'fill',
            zone: 'petal',
          },
          {
            d: 'M60 55 A8 8 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
          {
            d: 'M60 15 Q55 25 50 30 Q40 35 35 40 Q25 45 25 55 Q25 65 32 70 Q28 75 27 82 Q26 90 30 95 Q35 100 42 100 Q48 100 52 97 Q55 103 60 108 Q65 103 68 97 Q72 100 78 100 Q85 100 90 95 Q94 90 93 82 Q92 75 88 70 Q95 65 95 55 Q95 45 85 40 Q80 35 70 30 Q65 25 60 15 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      // Level 2: petal veins
      {
        name: 'detail',
        paths: [
          {
            d: 'M60 15 Q55 25 50 30 Q40 35 35 40 Q25 45 25 55 Q25 65 32 70 Q28 75 27 82 Q26 90 30 95 Q35 100 42 100 Q48 100 52 97 Q55 103 60 108 Q65 103 68 97 Q72 100 78 100 Q85 100 90 95 Q94 90 93 82 Q92 75 88 70 Q95 65 95 55 Q95 45 85 40 Q80 35 70 30 Q65 25 60 15 Z',
            type: 'fill',
            zone: 'petal',
          },
          {
            d: 'M60 55 A8 8 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
          {
            d: 'M60 15 Q55 25 50 30 Q40 35 35 40 Q25 45 25 55 Q25 65 32 70 Q28 75 27 82 Q26 90 30 95 Q35 100 42 100 Q48 100 52 97 Q55 103 60 108 Q65 103 68 97 Q72 100 78 100 Q85 100 90 95 Q94 90 93 82 Q92 75 88 70 Q95 65 95 55 Q95 45 85 40 Q80 35 70 30 Q65 25 60 15 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Petal veins
          {
            d: 'M60 55 L60 30 M60 55 L45 40 M60 55 L75 40 M60 55 L40 70 M60 55 L80 70',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },

  {
    id: 'ume-blossom',
    name: 'Ume Blossom',
    category: 'flora',
    viewBox: '0 0 120 120',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Rounder 5-petal plum blossom
          {
            d: 'M60 20 Q48 18 40 25 Q30 30 28 42 Q20 45 18 55 Q16 65 22 73 Q20 80 24 88 Q28 96 36 100 Q40 108 50 112 Q60 116 70 112 Q80 108 84 100 Q92 96 96 88 Q100 80 98 73 Q104 65 102 55 Q100 45 92 42 Q90 30 80 25 Q72 18 60 20 Z',
            type: 'fill',
            zone: 'petal',
          },
          {
            d: 'M60 55 A10 10 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M60 20 Q48 18 40 25 Q30 30 28 42 Q20 45 18 55 Q16 65 22 73 Q20 80 24 88 Q28 96 36 100 Q40 108 50 112 Q60 116 70 112 Q80 108 84 100 Q92 96 96 88 Q100 80 98 73 Q104 65 102 55 Q100 45 92 42 Q90 30 80 25 Q72 18 60 20 Z',
            type: 'fill',
            zone: 'petal',
          },
          {
            d: 'M60 55 A10 10 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
          {
            d: 'M60 20 Q48 18 40 25 Q30 30 28 42 Q20 45 18 55 Q16 65 22 73 Q20 80 24 88 Q28 96 36 100 Q40 108 50 112 Q60 116 70 112 Q80 108 84 100 Q92 96 96 88 Q100 80 98 73 Q104 65 102 55 Q100 45 92 42 Q90 30 80 25 Q72 18 60 20 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M60 20 Q48 18 40 25 Q30 30 28 42 Q20 45 18 55 Q16 65 22 73 Q20 80 24 88 Q28 96 36 100 Q40 108 50 112 Q60 116 70 112 Q80 108 84 100 Q92 96 96 88 Q100 80 98 73 Q104 65 102 55 Q100 45 92 42 Q90 30 80 25 Q72 18 60 20 Z',
            type: 'fill',
            zone: 'petal',
          },
          {
            d: 'M60 55 A10 10 0 1 1 59.99 55 Z',
            type: 'fill',
            zone: 'center',
          },
          {
            d: 'M60 20 Q48 18 40 25 Q30 30 28 42 Q20 45 18 55 Q16 65 22 73 Q20 80 24 88 Q28 96 36 100 Q40 108 50 112 Q60 116 70 112 Q80 108 84 100 Q92 96 96 88 Q100 80 98 73 Q104 65 102 55 Q100 45 92 42 Q90 30 80 25 Q72 18 60 20 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Short stamens
          {
            d: 'M60 55 L60 42 M60 55 L50 45 M60 55 L70 45 M60 55 L48 55 M60 55 L72 55 M60 55 L50 65 M60 55 L70 65',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 0.8,
          },
        ],
      },
    ],
  },

  // ============================================================
  //  PATTERNS — ASANOHA & SEIGAIHA
  // ============================================================
  {
    id: 'asanoha-star',
    name: 'Asanoha Star',
    category: 'objects & patterns',
    viewBox: '0 0 120 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Central hex-star cell
          {
            d: 'M60 20 L85 35 L100 60 L85 85 L60 100 L35 85 L20 60 L35 35 Z',
            type: 'fill',
            zone: 'body',
          },
          // Inner accent hexagon
          {
            d: 'M60 35 L78 45 L88 60 L78 75 L60 85 L42 75 L32 60 L42 45 Z',
            type: 'fill',
            zone: 'accent',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M60 20 L85 35 L100 60 L85 85 L60 100 L35 85 L20 60 L35 35 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M60 35 L78 45 L88 60 L78 75 L60 85 L42 75 L32 60 L42 45 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M60 20 L85 35 L100 60 L85 85 L60 100 L35 85 L20 60 L35 35 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M60 20 L85 35 L100 60 L85 85 L60 100 L35 85 L20 60 L35 35 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M60 35 L78 45 L88 60 L78 75 L60 85 L42 75 L32 60 L42 45 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M60 20 L85 35 L100 60 L85 85 L60 100 L35 85 L20 60 L35 35 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Radiating inner lines
          {
            d: 'M60 20 L60 35 M85 35 L78 45 M100 60 L88 60 M85 85 L78 75 M60 100 L60 85 M35 85 L42 75 M20 60 L32 60 M35 35 L42 45',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },

  {
    id: 'seigaiha-tile',
    name: 'Seigaiha Wave Tile',
    category: 'objects & patterns',
    viewBox: '0 0 120 60',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Single scalloped wave tile
          {
            d: 'M0 60 Q30 20 60 20 Q90 20 120 60 L0 60 Z',
            type: 'fill',
            zone: 'body',
          },
          // Inner accent arc
          {
            d: 'M10 60 Q30 30 60 30 Q90 30 110 60 L10 60 Z',
            type: 'fill',
            zone: 'accent',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M0 60 Q30 20 60 20 Q90 20 120 60 L0 60 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M10 60 Q30 30 60 30 Q90 30 110 60 L10 60 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M0 60 Q30 20 60 20 Q90 20 120 60',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M0 60 Q30 20 60 20 Q90 20 120 60 L0 60 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M10 60 Q30 30 60 30 Q90 30 110 60 L10 60 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M0 60 Q30 20 60 20 Q90 20 120 60',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Secondary arcs
          {
            d: 'M5 60 Q30 25 60 25 Q90 25 115 60 M15 60 Q30 35 60 35 Q90 35 105 60',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },

  // ============================================================
  //  OBJECTS — FAN & LANTERN
  // ============================================================
  {
    id: 'sensu-fan',
    name: 'Folding Fan',
    category: 'objects & patterns',
    viewBox: '0 0 140 80',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'fan', defaultPaletteSlot: 1 },
      { id: 'rib', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Fan leaf
          {
            d: 'M20 70 Q70 10 120 70 L20 70 Z',
            type: 'fill',
            zone: 'fan',
          },
          // Central rib base
          {
            d: 'M65 70 L75 70 L70 80 Z',
            type: 'fill',
            zone: 'rib',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M20 70 Q70 10 120 70 L20 70 Z',
            type: 'fill',
            zone: 'fan',
          },
          {
            d: 'M65 70 L75 70 L70 80 Z',
            type: 'fill',
            zone: 'rib',
          },
          // Outer arc
          {
            d: 'M20 70 Q70 10 120 70',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M20 70 Q70 10 120 70 L20 70 Z',
            type: 'fill',
            zone: 'fan',
          },
          {
            d: 'M65 70 L75 70 L70 80 Z',
            type: 'fill',
            zone: 'rib',
          },
          {
            d: 'M20 70 Q70 10 120 70',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Ribs
          {
            d: 'M70 70 L70 20 M70 70 L50 25 M70 70 L90 25 M70 70 L35 35 M70 70 L105 35',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1.2,
          },
        ],
      },
    ],
  },

  {
    id: 'paper-lantern',
    name: 'Paper Lantern',
    category: 'objects & patterns',
    viewBox: '0 0 100 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'rib', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Lantern body
          {
            d: 'M50 20 Q25 25 20 50 Q15 75 20 100 Q25 125 50 130 Q75 125 80 100 Q85 75 80 50 Q75 25 50 20 Z',
            type: 'fill',
            zone: 'body',
          },
          // Top cap
          {
            d: 'M35 15 L65 15 L65 22 L35 22 Z',
            type: 'fill',
            zone: 'rib',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M50 20 Q25 25 20 50 Q15 75 20 100 Q25 125 50 130 Q75 125 80 100 Q85 75 80 50 Q75 25 50 20 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M35 15 L65 15 L65 22 L35 22 Z',
            type: 'fill',
            zone: 'rib',
          },
          {
            d: 'M50 20 Q25 25 20 50 Q15 75 20 100 Q25 125 50 130 Q75 125 80 100 Q85 75 80 50 Q75 25 50 20 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M50 20 Q25 25 20 50 Q15 75 20 100 Q25 125 50 130 Q75 125 80 100 Q85 75 80 50 Q75 25 50 20 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M35 15 L65 15 L65 22 L35 22 Z',
            type: 'fill',
            zone: 'rib',
          },
          {
            d: 'M50 20 Q25 25 20 50 Q15 75 20 100 Q25 125 50 130 Q75 125 80 100 Q85 75 80 50 Q75 25 50 20 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Horizontal ribs
          {
            d: 'M25 40 Q50 35 75 40 M23 55 Q50 50 77 55 M22 70 Q50 65 78 70 M23 85 Q50 80 77 85 M25 100 Q50 95 75 100',
            type: 'stroke',
            zone: 'rib',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },

  // ============================================================
  //  TREES & TEXTURE — PINE BOUGH, WOODGRAIN, GOUGE
  // ============================================================
  {
    id: 'pine-bough',
    name: 'Pine Bough',
    category: 'flora',
    viewBox: '0 0 160 80',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'needle', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main branch
          {
            d: 'M10 60 Q40 50 70 45 Q100 40 150 30 L150 40 Q100 50 70 55 Q40 60 10 70 Z',
            type: 'fill',
            zone: 'branch',
          },
          // Needle clusters (solid)
          {
            d: 'M40 40 L30 25 L35 25 L45 38 Z M70 35 L60 20 L65 20 L75 33 Z M100 30 L90 18 L95 18 L105 28 Z',
            type: 'fill',
            zone: 'needle',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M10 60 Q40 50 70 45 Q100 40 150 30 L150 40 Q100 50 70 55 Q40 60 10 70 Z',
            type: 'fill',
            zone: 'branch',
          },
          {
            d: 'M40 40 L30 25 L35 25 L45 38 Z M70 35 L60 20 L65 20 L75 33 Z M100 30 L90 18 L95 18 L105 28 Z',
            type: 'fill',
            zone: 'needle',
          },
          {
            d: 'M10 60 Q40 50 70 45 Q100 40 150 30',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M10 60 Q40 50 70 45 Q100 40 150 30 L150 40 Q100 50 70 55 Q40 60 10 70 Z',
            type: 'fill',
            zone: 'branch',
          },
          {
            d: 'M40 40 L30 25 L35 25 L45 38 Z M70 35 L60 20 L65 20 L75 33 Z M100 30 L90 18 L95 18 L105 28 Z',
            type: 'fill',
            zone: 'needle',
          },
          {
            d: 'M10 60 Q40 50 70 45 Q100 40 150 30',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Needle lines
          {
            d: 'M40 40 L32 28 M42 38 L34 26 M70 35 L62 23 M72 33 L64 21 M100 30 L92 20 M102 28 L94 18',
            type: 'stroke',
            zone: 'needle',
            strokeWidth: 1.2,
          },
        ],
      },
    ],
  },

  {
    id: 'woodgrain-knot',
    name: 'Woodgrain Knot',
    category: 'objects & patterns',
    viewBox: '0 0 120 80',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 3 },
      { id: 'ring', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Outer oval
          {
            d: 'M60 10 Q30 15 20 35 Q10 55 20 70 Q30 75 60 70 Q90 75 100 70 Q110 55 100 35 Q90 15 60 10 Z',
            type: 'fill',
            zone: 'body',
          },
          // Inner ring
          {
            d: 'M60 20 Q35 25 28 38 Q21 51 28 62 Q35 67 60 62 Q85 67 92 62 Q99 51 92 38 Q85 25 60 20 Z',
            type: 'fill',
            zone: 'ring',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M60 10 Q30 15 20 35 Q10 55 20 70 Q30 75 60 70 Q90 75 100 70 Q110 55 100 35 Q90 15 60 10 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M60 20 Q35 25 28 38 Q21 51 28 62 Q35 67 60 62 Q85 67 92 62 Q99 51 92 38 Q85 25 60 20 Z',
            type: 'fill',
            zone: 'ring',
          },
          {
            d: 'M60 10 Q30 15 20 35 Q10 55 20 70 Q30 75 60 70 Q90 75 100 70 Q110 55 100 35 Q90 15 60 10 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M60 10 Q30 15 20 35 Q10 55 20 70 Q30 75 60 70 Q90 75 100 70 Q110 55 100 35 Q90 15 60 10 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M60 20 Q35 25 28 38 Q21 51 28 62 Q35 67 60 62 Q85 67 92 62 Q99 51 92 38 Q85 25 60 20 Z',
            type: 'fill',
            zone: 'ring',
          },
          {
            d: 'M60 10 Q30 15 20 35 Q10 55 20 70 Q30 75 60 70 Q90 75 100 70 Q110 55 100 35 Q90 15 60 10 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Inner grain lines
          {
            d: 'M60 25 Q40 28 32 38 Q24 48 32 58 Q40 62 60 58 Q80 62 88 58 Q96 48 88 38 Q80 28 60 25 Z M60 35 Q45 37 38 43 Q31 49 38 55 Q45 58 60 55 Q75 58 82 55 Q89 49 82 43 Q75 37 60 35 Z',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },

  {
    id: 'gouge-mark',
    name: 'Gouge Mark',
    category: 'objects & patterns',
    viewBox: '0 0 120 40',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Crescent scoop
          {
            d: 'M10 30 Q35 5 60 5 Q85 5 110 30 L100 30 Q80 12 60 12 Q40 12 20 30 Z',
            type: 'fill',
            zone: 'body',
          },
          // Inner accent
          {
            d: 'M20 30 Q40 15 60 15 Q80 15 100 30 L92 30 Q78 20 60 20 Q42 20 28 30 Z',
            type: 'fill',
            zone: 'accent',
          },
        ],
      },
      {
        name: 'shape',
        paths: [
          {
            d: 'M10 30 Q35 5 60 5 Q85 5 110 30 L100 30 Q80 12 60 12 Q40 12 20 30 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M20 30 Q40 15 60 15 Q80 15 100 30 L92 30 Q78 20 60 20 Q42 20 28 30 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M10 30 Q35 5 60 5 Q85 5 110 30',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
        ],
      },
      {
        name: 'detail',
        paths: [
          {
            d: 'M10 30 Q35 5 60 5 Q85 5 110 30 L100 30 Q80 12 60 12 Q40 12 20 30 Z',
            type: 'fill',
            zone: 'body',
          },
          {
            d: 'M20 30 Q40 15 60 15 Q80 15 100 30 L92 30 Q78 20 60 20 Q42 20 28 30 Z',
            type: 'fill',
            zone: 'accent',
          },
          {
            d: 'M10 30 Q35 5 60 5 Q85 5 110 30',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 2,
          },
          // Fine inner scrape
          {
            d: 'M18 30 Q38 12 60 12 Q82 12 102 30',
            type: 'stroke',
            zone: 'detail',
            strokeWidth: 1,
          },
        ],
      },
    ],
  },
];
