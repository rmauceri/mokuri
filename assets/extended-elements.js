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
    pack: 'core',
    viewBox: '0 0 160 140',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main branch — tapered fill arcing from lower-right
          { d: 'M148,138 Q136,116 122,96 Q108,80 92,66 L88,63 Q104,76 118,93 Q133,114 144,138 Z', type: 'fill', zone: 'branch' },
          // Sub-branch toward blossom 1
          { d: 'M89,68 Q74,60 60,52 L57,55 Q72,62 87,70 Z', type: 'fill', zone: 'branch' },
          // Twig toward blossom 2
          { d: 'M94,66 Q102,50 112,36 L109,34 Q100,48 92,64 Z', type: 'fill', zone: 'branch' },
          // Blossom 1 — 5-petal scalloped silhouette
          { d: 'M52,28 Q48,30 45,34 Q41,33 38,36 Q40,41 43,44 Q40,48 38,52 Q40,56 45,55 Q48,59 52,62 Q56,59 59,55 Q64,56 66,52 Q64,48 61,44 Q64,41 66,36 Q64,33 59,34 Q56,30 52,28 Z', type: 'fill', zone: 'petal' },
          // Blossom 2 — slightly smaller
          { d: 'M115,18 Q112,20 110,23 Q107,22 104,24 Q106,28 108,31 Q106,34 104,38 Q106,40 110,39 Q112,42 115,44 Q118,42 120,39 Q124,40 126,38 Q124,34 122,31 Q124,28 126,24 Q123,22 120,23 Q118,20 115,18 Z', type: 'fill', zone: 'petal' },
          // Flower centers
          { d: 'M52,44 A4,4 0 1,1 51.99,44 Z', type: 'fill', zone: 'center' },
          { d: 'M115,31 A3,3 0 1,1 114.99,31 Z', type: 'fill', zone: 'center' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills
          { d: 'M148,138 Q136,116 122,96 Q108,80 92,66 L88,63 Q104,76 118,93 Q133,114 144,138 Z', type: 'fill', zone: 'branch' },
          { d: 'M89,68 Q74,60 60,52 L57,55 Q72,62 87,70 Z', type: 'fill', zone: 'branch' },
          { d: 'M94,66 Q102,50 112,36 L109,34 Q100,48 92,64 Z', type: 'fill', zone: 'branch' },
          { d: 'M52,28 Q48,30 45,34 Q41,33 38,36 Q40,41 43,44 Q40,48 38,52 Q40,56 45,55 Q48,59 52,62 Q56,59 59,55 Q64,56 66,52 Q64,48 61,44 Q64,41 66,36 Q64,33 59,34 Q56,30 52,28 Z', type: 'fill', zone: 'petal' },
          { d: 'M115,18 Q112,20 110,23 Q107,22 104,24 Q106,28 108,31 Q106,34 104,38 Q106,40 110,39 Q112,42 115,44 Q118,42 120,39 Q124,40 126,38 Q124,34 122,31 Q124,28 126,24 Q123,22 120,23 Q118,20 115,18 Z', type: 'fill', zone: 'petal' },
          { d: 'M52,44 A4,4 0 1,1 51.99,44 Z', type: 'fill', zone: 'center' },
          { d: 'M115,31 A3,3 0 1,1 114.99,31 Z', type: 'fill', zone: 'center' },
          // Petal divisions — blossom 1
          { d: 'M52,44 Q51,38 52,30 M52,44 Q46,41 40,37 M52,44 Q46,51 40,54 M52,44 Q57,51 62,54 M52,44 Q57,40 64,36', type: 'stroke', zone: 'petal', strokeWidth: 1 },
          // Petal divisions — blossom 2
          { d: 'M115,31 Q114,26 115,20 M115,31 Q110,29 106,24 M115,31 Q110,35 106,38 M115,31 Q120,35 124,38 M115,31 Q120,28 124,24', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Calyx twig connections
          { d: 'M56,54 Q62,58 68,63 M112,36 Q108,44 104,52', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All shape fills
          { d: 'M148,138 Q136,116 122,96 Q108,80 92,66 L88,63 Q104,76 118,93 Q133,114 144,138 Z', type: 'fill', zone: 'branch' },
          { d: 'M89,68 Q74,60 60,52 L57,55 Q72,62 87,70 Z', type: 'fill', zone: 'branch' },
          { d: 'M94,66 Q102,50 112,36 L109,34 Q100,48 92,64 Z', type: 'fill', zone: 'branch' },
          { d: 'M52,28 Q48,30 45,34 Q41,33 38,36 Q40,41 43,44 Q40,48 38,52 Q40,56 45,55 Q48,59 52,62 Q56,59 59,55 Q64,56 66,52 Q64,48 61,44 Q64,41 66,36 Q64,33 59,34 Q56,30 52,28 Z', type: 'fill', zone: 'petal' },
          { d: 'M115,18 Q112,20 110,23 Q107,22 104,24 Q106,28 108,31 Q106,34 104,38 Q106,40 110,39 Q112,42 115,44 Q118,42 120,39 Q124,40 126,38 Q124,34 122,31 Q124,28 126,24 Q123,22 120,23 Q118,20 115,18 Z', type: 'fill', zone: 'petal' },
          { d: 'M52,44 A4,4 0 1,1 51.99,44 Z', type: 'fill', zone: 'center' },
          { d: 'M115,31 A3,3 0 1,1 114.99,31 Z', type: 'fill', zone: 'center' },
          // All shape strokes
          { d: 'M52,44 Q51,38 52,30 M52,44 Q46,41 40,37 M52,44 Q46,51 40,54 M52,44 Q57,51 62,54 M52,44 Q57,40 64,36', type: 'stroke', zone: 'petal', strokeWidth: 1 },
          { d: 'M115,31 Q114,26 115,20 M115,31 Q110,29 106,24 M115,31 Q110,35 106,38 M115,31 Q120,35 124,38 M115,31 Q120,28 124,24', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M56,54 Q62,58 68,63 M112,36 Q108,44 104,52', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
          // Fine petal veins — blossom 1
          { d: 'M50,38 Q48,34 49,30 M48,43 Q44,42 41,39 M49,50 Q46,52 43,54 M55,50 Q59,52 62,54 M57,41 Q61,40 64,37', type: 'stroke', zone: 'petal', strokeWidth: 0.5 },
          // Fine petal veins — blossom 2
          { d: 'M113,27 Q112,24 113,20 M112,30 Q108,29 106,26 M112,34 Q108,36 106,38 M118,34 Q121,36 124,37 M118,29 Q121,28 124,25', type: 'stroke', zone: 'petal', strokeWidth: 0.4 },
          // Bark texture hatching
          { d: 'M125,100 L128,98 M118,92 L121,90 M110,82 L113,80 M102,74 L105,72 M95,68 L98,66', type: 'stroke', zone: 'branch', strokeWidth: 0.6 },
          // Stamen accents
          { d: 'M50,42 L49,40 M54,42 L55,40 M52,47 L51,49 M52,47 L53,49', type: 'stroke', zone: 'center', strokeWidth: 0.5 },
          // Buds at branch tip
          { d: 'M84,58 Q83,54 84,51 Q85,54 84,58 Z M80,55 Q79,52 80,49 Q81,52 80,55 Z', type: 'fill', zone: 'petal' },
        ],
      },
    ],
  },

  {
    id: 'ume-blossom',
    name: 'Ume Blossom',
    category: 'flora',
    pack: 'core',
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

  {
    id: 'chrysanthemum',
    name: 'Chrysanthemum',
    category: 'flora',
    pack: 'core',
    viewBox: '0 0 120 130',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 4 },
      { id: 'leaf', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Bloom mass
          { d: 'M60,5 Q90,5 108,25 Q120,50 115,75 Q105,98 80,108 Q60,115 40,108 Q15,98 5,75 Q0,50 12,25 Q30,5 60,5 Z', type: 'fill', zone: 'petal' },
          // Center
          { d: 'M60,48 Q70,45 75,55 Q78,65 70,73 Q62,78 52,73 Q45,65 48,55 Q52,45 60,48 Z', type: 'fill', zone: 'center' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M60,5 Q90,5 108,25 Q120,50 115,75 Q105,98 80,108 Q60,115 40,108 Q15,98 5,75 Q0,50 12,25 Q30,5 60,5 Z', type: 'fill', zone: 'petal' },
          { d: 'M60,48 Q70,45 75,55 Q78,65 70,73 Q62,78 52,73 Q45,65 48,55 Q52,45 60,48 Z', type: 'fill', zone: 'center' },
          // Major petal divisions
          { d: 'M60,48 L60,5 M60,75 L58,115 M48,55 L5,50 M72,55 L115,50 M50,68 L15,100 M70,68 L105,100 M52,48 L22,12 M68,48 L98,12', type: 'stroke', zone: 'petal', strokeWidth: 1.2 },
          // Stem
          { d: 'M60,115 V130', type: 'stroke', zone: 'leaf', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M60,5 Q90,5 108,25 Q120,50 115,75 Q105,98 80,108 Q60,115 40,108 Q15,98 5,75 Q0,50 12,25 Q30,5 60,5 Z', type: 'fill', zone: 'petal' },
          { d: 'M60,48 Q70,45 75,55 Q78,65 70,73 Q62,78 52,73 Q45,65 48,55 Q52,45 60,48 Z', type: 'fill', zone: 'center' },
          { d: 'M60,48 L60,5 M60,75 L58,115 M48,55 L5,50 M72,55 L115,50 M50,68 L15,100 M70,68 L105,100 M52,48 L22,12 M68,48 L98,12', type: 'stroke', zone: 'petal', strokeWidth: 1.2 },
          { d: 'M60,115 V130', type: 'stroke', zone: 'leaf', strokeWidth: 2 },
          // Secondary petal veins
          { d: 'M55,48 L32,8 M65,48 L88,8 M48,60 L5,68 M72,60 L115,68 M55,75 L35,112 M65,75 L85,112', type: 'stroke', zone: 'petal', strokeWidth: 0.6 },
          // Center texture
          { d: 'M56,55 L52,50 M64,55 L68,50 M56,68 L52,72 M64,68 L68,72', type: 'stroke', zone: 'center', strokeWidth: 0.7 },
          // Leaves
          { d: 'M55,120 Q40,116 32,124 Q42,120 55,120 Z', type: 'fill', zone: 'leaf' },
          { d: 'M65,120 Q80,116 88,124 Q78,120 65,120 Z', type: 'fill', zone: 'leaf' },
        ],
      },
    ],
  },

  {
    id: 'susuki-grass',
    name: 'Susuki Grass',
    category: 'flora',
    pack: 'core',
    viewBox: '0 0 100 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'plume', defaultPaletteSlot: 4 },
      { id: 'stalk', defaultPaletteSlot: 0 },
      { id: 'blade', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Plume heads
          { d: 'M25,5 Q35,0 42,10 Q48,30 38,40 Q28,30 22,15 Q20,8 25,5 Z', type: 'fill', zone: 'plume' },
          { d: 'M52,0 Q62,0 68,10 Q74,28 64,38 Q54,28 48,12 Q48,3 52,0 Z', type: 'fill', zone: 'plume' },
          { d: 'M78,8 Q88,3 94,15 Q100,32 90,42 Q80,32 74,18 Q74,10 78,8 Z', type: 'fill', zone: 'plume' },
          // Grass blade mass at base
          { d: 'M10,160 Q18,120 28,85 Q32,65 38,48 L62,48 Q68,65 72,85 Q82,120 90,160 Z', type: 'fill', zone: 'blade' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M25,5 Q35,0 42,10 Q48,30 38,40 Q28,30 22,15 Q20,8 25,5 Z', type: 'fill', zone: 'plume' },
          { d: 'M52,0 Q62,0 68,10 Q74,28 64,38 Q54,28 48,12 Q48,3 52,0 Z', type: 'fill', zone: 'plume' },
          { d: 'M78,8 Q88,3 94,15 Q100,32 90,42 Q80,32 74,18 Q74,10 78,8 Z', type: 'fill', zone: 'plume' },
          { d: 'M10,160 Q18,120 28,85 Q32,65 38,48 L62,48 Q68,65 72,85 Q82,120 90,160 Z', type: 'fill', zone: 'blade' },
          // Stalks
          { d: 'M35,42 Q33,60 30,85 Q25,120 20,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
          { d: 'M58,38 Q56,60 53,90 Q50,120 48,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
          { d: 'M85,42 Q82,60 78,85 Q75,120 72,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M25,5 Q35,0 42,10 Q48,30 38,40 Q28,30 22,15 Q20,8 25,5 Z', type: 'fill', zone: 'plume' },
          { d: 'M52,0 Q62,0 68,10 Q74,28 64,38 Q54,28 48,12 Q48,3 52,0 Z', type: 'fill', zone: 'plume' },
          { d: 'M78,8 Q88,3 94,15 Q100,32 90,42 Q80,32 74,18 Q74,10 78,8 Z', type: 'fill', zone: 'plume' },
          { d: 'M10,160 Q18,120 28,85 Q32,65 38,48 L62,48 Q68,65 72,85 Q82,120 90,160 Z', type: 'fill', zone: 'blade' },
          { d: 'M35,42 Q33,60 30,85 Q25,120 20,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
          { d: 'M58,38 Q56,60 53,90 Q50,120 48,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
          { d: 'M85,42 Q82,60 78,85 Q75,120 72,155', type: 'stroke', zone: 'stalk', strokeWidth: 1.5 },
          // Plume feathering
          { d: 'M30,10 L36,30 M34,8 L40,25 M55,5 L60,25 M58,3 L63,20 M82,12 L88,30 M86,10 L90,28', type: 'stroke', zone: 'plume', strokeWidth: 0.5 },
          // Arching blade detail
          { d: 'M38,55 Q22,90 8,135 M62,55 Q78,90 92,135 M45,60 Q32,100 22,148 M55,60 Q68,100 78,148', type: 'stroke', zone: 'blade', strokeWidth: 0.7 },
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
    pack: 'core',
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
    pack: 'core',
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
    pack: 'core',
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
    pack: 'core',
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
  {
    id: 'lantern-kasuga-premium',
    name: 'Kasuga Grand Lantern',
    category: 'objects & patterns',
    pack: 'core',
    viewBox: '0 0 160 280',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'stone', defaultPaletteSlot: 0 },
      { id: 'shadow', defaultPaletteSlot: 3 },
      { id: 'light', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M40,270 H120 L115,250 H45 Z M70,250 V170 H90 V250 Z', type: 'fill', zone: 'stone' },
          { d: 'M35,170 H125 L115,140 H45 Z', type: 'fill', zone: 'shadow' },
          { d: 'M30,140 L80,80 L130,140 Z', type: 'fill', zone: 'stone' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M40,270 H120 L115,250 H45 Z M70,250 V170 H90 V250 Z', type: 'fill', zone: 'stone' },
          { d: 'M35,170 H125 L115,140 H45 Z', type: 'fill', zone: 'shadow' },
          { d: 'M30,140 L80,80 L130,140 Z', type: 'fill', zone: 'stone' },
          { d: 'M65,135 H95 V110 H65 Z', type: 'fill', zone: 'light' },
          { d: 'M80,80 V55', type: 'stroke', zone: 'stone', strokeWidth: 4 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M40,270 H120 L115,250 H45 Z M70,250 V170 H90 V250 Z', type: 'fill', zone: 'stone' },
          { d: 'M35,170 H125 L115,140 H45 Z', type: 'fill', zone: 'shadow' },
          { d: 'M30,140 L80,80 L130,140 Z', type: 'fill', zone: 'stone' },
          { d: 'M65,135 H95 V110 H65 Z', type: 'fill', zone: 'light' },
          { d: 'M80,80 V55', type: 'stroke', zone: 'stone', strokeWidth: 4 },
          // Pillar chiseling
          { d: 'M76,180 V240 M84,180 V240', type: 'stroke', zone: 'shadow', strokeWidth: 1 },
          // Roof ridges and curling "warabite" corners
          { d: 'M80,80 L40,125 Q30,130 25,120 M80,80 L120,125 Q130,130 135,120', type: 'stroke', zone: 'shadow', strokeWidth: 1.5 },
          // Window lattice
          { d: 'M65,122 H95 M80,110 V135', type: 'stroke', zone: 'stone', strokeWidth: 1.2 },
          // Lotus petal carving on base
          { d: 'M55,260 Q80,250 105,260', type: 'stroke', zone: 'shadow', strokeWidth: 1 },
        ],
      },
    ],
  },
  {
    id: 'lantern-yukimi-premium',
    name: 'Yukimi Lantern',
    category: 'objects & patterns',
    pack: 'core',
    viewBox: '0 0 240 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'stone', defaultPaletteSlot: 0 },
      { id: 'shadow', defaultPaletteSlot: 3 },
      { id: 'light', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M20,115 L120,55 L220,115 L120,135 Z', type: 'fill', zone: 'stone' },
          { d: 'M85,135 H155 V100 H85 Z', type: 'fill', zone: 'shadow' },
          { d: 'M70,180 L90,135 H150 L170,180 Z', type: 'fill', zone: 'stone' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20,115 L120,55 L220,115 L120,135 Z', type: 'fill', zone: 'stone' },
          { d: 'M85,135 H155 V100 H85 Z', type: 'fill', zone: 'shadow' },
          { d: 'M70,180 L90,135 H150 L170,180 Z', type: 'fill', zone: 'stone' },
          { d: 'M100,130 H140 V105 H100 Z', type: 'fill', zone: 'light' },
          { d: 'M85,180 Q105,160 105,135 M155,180 Q135,160 135,135', type: 'stroke', zone: 'stone', strokeWidth: 10 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20,115 L120,55 L220,115 L120,135 Z', type: 'fill', zone: 'stone' },
          { d: 'M85,135 H155 V100 H85 Z', type: 'fill', zone: 'shadow' },
          { d: 'M70,180 L90,135 H150 L170,180 Z', type: 'fill', zone: 'stone' },
          { d: 'M100,130 H140 V105 H100 Z', type: 'fill', zone: 'light' },
          { d: 'M85,180 Q105,160 105,135 M155,180 Q135,160 135,135', type: 'stroke', zone: 'stone', strokeWidth: 10 },
          // Woodblock raking on the broad roof
          { d: 'M120,55 L50,100 M120,55 L190,100 M120,55 V120', type: 'stroke', zone: 'shadow', strokeWidth: 1.2 },
          // Texture on legs
          { d: 'M95,160 A2,2 0 1,1 94,160 Z M145,160 A2,2 0 1,1 144,160 Z', type: 'fill', zone: 'shadow' },
          // Window lattice details
          { d: 'M112,105 V130 M128,105 V130', type: 'stroke', zone: 'stone', strokeWidth: 1.5 },
        ],
      },
    ],
  },
  {
    id: 'lantern-oribe-premium',
    name: 'Oribe Lantern',
    category: 'objects & patterns',
    pack: 'core',
    viewBox: '0 0 140 240',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'stone', defaultPaletteSlot: 0 },
      { id: 'shadow', defaultPaletteSlot: 3 },
      { id: 'light', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M55,230 V140 H85 V230 Z', type: 'fill', zone: 'stone' },
          { d: 'M30,145 H110 L70,95 Z', type: 'fill', zone: 'stone' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M55,230 V140 H85 V230 Z', type: 'fill', zone: 'stone' },
          { d: 'M30,145 H110 L70,95 Z', type: 'fill', zone: 'stone' },
          { d: 'M60,135 H80 V115 H60 Z', type: 'fill', zone: 'light' },
          // The "Hidden Christian" or Buddhist figure carving on the pillar
          { d: 'M70,190 Q70,170 70,165', type: 'stroke', zone: 'shadow', strokeWidth: 6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M55,230 V140 H85 V230 Z', type: 'fill', zone: 'stone' },
          { d: 'M30,145 H110 L70,95 Z', type: 'fill', zone: 'stone' },
          { d: 'M60,135 H80 V115 H60 Z', type: 'fill', zone: 'light' },
          { d: 'M70,190 Q70,170 70,165', type: 'stroke', zone: 'shadow', strokeWidth: 6 },
          // Roof-to-firebox edge
          { d: 'M30,145 L110,145', type: 'stroke', zone: 'shadow', strokeWidth: 2 },
          // Figure detail
          { d: 'M70,175 A3.5,3.5 0 1,1 69,175 Z', type: 'fill', zone: 'shadow' },
          // Horizontal chisel marks on the pillar
          { d: 'M60,210 H80 M62,220 H78', type: 'stroke', zone: 'shadow', strokeWidth: 1 },
        ],
      },
    ],
  },

  {
    id: 'fishing-boat',
    name: 'Fishing Boat',
    category: 'objects & patterns',
    pack: 'core',
    viewBox: '0 0 180 100',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'hull', defaultPaletteSlot: 0 },
      { id: 'sail', defaultPaletteSlot: 4 },
      { id: 'trim', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Hull
          { d: 'M10,60 Q30,40 90,35 Q150,40 170,60 L165,68 Q130,72 90,74 Q50,72 15,68 Z', type: 'fill', zone: 'hull' },
          // Sail
          { d: 'M90,35 L85,5 L135,30 Z', type: 'fill', zone: 'sail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M10,60 Q30,40 90,35 Q150,40 170,60 L165,68 Q130,72 90,74 Q50,72 15,68 Z', type: 'fill', zone: 'hull' },
          { d: 'M90,35 L85,5 L135,30 Z', type: 'fill', zone: 'sail' },
          // Hull outline
          { d: 'M10,60 Q30,40 90,35 Q150,40 170,60 L165,68 Q130,72 90,74 Q50,72 15,68 Z', type: 'stroke', zone: 'hull', strokeWidth: 2 },
          // Mast
          { d: 'M90,35 L85,5', type: 'stroke', zone: 'trim', strokeWidth: 2.5 },
          // Gunwale
          { d: 'M18,58 Q50,43 90,38 Q130,43 165,58', type: 'stroke', zone: 'trim', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M10,60 Q30,40 90,35 Q150,40 170,60 L165,68 Q130,72 90,74 Q50,72 15,68 Z', type: 'fill', zone: 'hull' },
          { d: 'M90,35 L85,5 L135,30 Z', type: 'fill', zone: 'sail' },
          { d: 'M10,60 Q30,40 90,35 Q150,40 170,60 L165,68 Q130,72 90,74 Q50,72 15,68 Z', type: 'stroke', zone: 'hull', strokeWidth: 2 },
          { d: 'M90,35 L85,5', type: 'stroke', zone: 'trim', strokeWidth: 2.5 },
          { d: 'M18,58 Q50,43 90,38 Q130,43 165,58', type: 'stroke', zone: 'trim', strokeWidth: 1.5 },
          // Hull planking
          { d: 'M25,52 Q60,44 90,42 Q130,44 160,52 M22,62 Q50,56 90,54 Q130,56 158,62', type: 'stroke', zone: 'hull', strokeWidth: 0.7 },
          // Sail furls
          { d: 'M88,30 L90,10 M98,28 L102,14 M108,26 L114,18', type: 'stroke', zone: 'sail', strokeWidth: 0.7 },
          // Stern and bow ornament
          { d: 'M14,57 Q8,50 15,45', type: 'stroke', zone: 'trim', strokeWidth: 1 },
          { d: 'M168,57 Q175,52 172,48', type: 'stroke', zone: 'trim', strokeWidth: 1 },
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
    pack: 'core',
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
          // Main branch — graceful organic tapered arc
          { d: 'M8,52 Q25,50 48,46 Q72,40 95,35 Q120,28 145,22 Q152,20 155,21 L155,26 Q152,25 145,27 Q120,33 95,40 Q72,46 48,52 Q25,56 8,58 Z', type: 'fill', zone: 'branch' },
          // Needle cluster 1 — soft organic fan
          { d: 'M32,48 Q25,38 20,28 Q22,24 28,22 Q34,20 38,24 Q44,30 42,42 Q38,48 32,48 Z', type: 'fill', zone: 'needle' },
          // Needle cluster 2
          { d: 'M65,40 Q58,30 52,20 Q54,16 60,14 Q66,12 72,16 Q78,22 78,34 Q74,40 65,40 Z', type: 'fill', zone: 'needle' },
          // Needle cluster 3
          { d: 'M100,32 Q94,22 88,14 Q90,10 96,8 Q102,6 108,10 Q114,16 116,26 Q112,32 100,32 Z', type: 'fill', zone: 'needle' },
          // Needle cluster 4
          { d: 'M135,24 Q130,18 126,12 Q128,10 132,8 Q136,6 140,10 Q144,14 144,22 Q140,26 135,24 Z', type: 'fill', zone: 'needle' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills
          { d: 'M8,52 Q25,50 48,46 Q72,40 95,35 Q120,28 145,22 Q152,20 155,21 L155,26 Q152,25 145,27 Q120,33 95,40 Q72,46 48,52 Q25,56 8,58 Z', type: 'fill', zone: 'branch' },
          { d: 'M32,48 Q25,38 20,28 Q22,24 28,22 Q34,20 38,24 Q44,30 42,42 Q38,48 32,48 Z', type: 'fill', zone: 'needle' },
          { d: 'M65,40 Q58,30 52,20 Q54,16 60,14 Q66,12 72,16 Q78,22 78,34 Q74,40 65,40 Z', type: 'fill', zone: 'needle' },
          { d: 'M100,32 Q94,22 88,14 Q90,10 96,8 Q102,6 108,10 Q114,16 116,26 Q112,32 100,32 Z', type: 'fill', zone: 'needle' },
          { d: 'M135,24 Q130,18 126,12 Q128,10 132,8 Q136,6 140,10 Q144,14 144,22 Q140,26 135,24 Z', type: 'fill', zone: 'needle' },
          // Branch bark edge
          { d: 'M8,52 Q25,50 48,46 Q72,40 95,35 Q120,28 145,22', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Twig stubs from branch to clusters
          { d: 'M32,48 Q34,50 36,52 M65,40 Q67,42 69,44 M100,32 Q102,34 104,36 M135,24 Q137,26 139,28', type: 'stroke', zone: 'branch', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All shape fills
          { d: 'M8,52 Q25,50 48,46 Q72,40 95,35 Q120,28 145,22 Q152,20 155,21 L155,26 Q152,25 145,27 Q120,33 95,40 Q72,46 48,52 Q25,56 8,58 Z', type: 'fill', zone: 'branch' },
          { d: 'M32,48 Q25,38 20,28 Q22,24 28,22 Q34,20 38,24 Q44,30 42,42 Q38,48 32,48 Z', type: 'fill', zone: 'needle' },
          { d: 'M65,40 Q58,30 52,20 Q54,16 60,14 Q66,12 72,16 Q78,22 78,34 Q74,40 65,40 Z', type: 'fill', zone: 'needle' },
          { d: 'M100,32 Q94,22 88,14 Q90,10 96,8 Q102,6 108,10 Q114,16 116,26 Q112,32 100,32 Z', type: 'fill', zone: 'needle' },
          { d: 'M135,24 Q130,18 126,12 Q128,10 132,8 Q136,6 140,10 Q144,14 144,22 Q140,26 135,24 Z', type: 'fill', zone: 'needle' },
          // All shape strokes
          { d: 'M8,52 Q25,50 48,46 Q72,40 95,35 Q120,28 145,22', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M32,48 Q34,50 36,52 M65,40 Q67,42 69,44 M100,32 Q102,34 104,36 M135,24 Q137,26 139,28', type: 'stroke', zone: 'branch', strokeWidth: 1 },
          // Needle lines — clusters 1 & 2
          { d: 'M32,48 Q28,36 22,28 M32,48 Q30,34 26,24 M32,48 Q35,34 38,24 M32,48 Q38,36 42,30 M65,40 Q62,28 55,20 M65,40 Q64,26 62,16 M65,40 Q68,26 72,16 M65,40 Q72,30 76,22', type: 'stroke', zone: 'needle', strokeWidth: 0.8 },
          // Needle lines — clusters 3 & 4
          { d: 'M100,32 Q96,22 90,14 M100,32 Q100,18 98,10 M100,32 Q104,18 108,10 M100,32 Q108,22 114,16 M135,24 Q132,18 128,12 M135,24 Q136,14 134,10 M135,24 Q138,16 142,12', type: 'stroke', zone: 'needle', strokeWidth: 0.8 },
          // Bark texture hatching
          { d: 'M22,54 L25,53 M40,50 L43,49 M58,44 L61,43 M80,38 L83,37 M110,30 L113,29 M130,25 L133,24', type: 'stroke', zone: 'branch', strokeWidth: 0.5 },
          // Fine needle tips
          { d: 'M20,28 Q17,24 15,22 M26,22 Q23,18 22,15 M52,20 Q48,15 46,12 M72,16 Q74,11 76,8 M88,14 Q84,10 82,6 M108,10 Q110,5 112,3 M126,12 Q122,8 120,5 M142,10 Q144,6 146,4', type: 'stroke', zone: 'needle', strokeWidth: 0.4 },
          // Pine cones at branch tip
          { d: 'M153,20 Q155,16 157,18 Q155,22 153,20 Z M150,24 Q152,20 154,22 Q152,26 150,24 Z', type: 'fill', zone: 'needle' },
        ],
      },
    ],
  },

  {
    id: 'woodgrain-knot',
    name: 'Woodgrain Knot',
    category: 'objects & patterns',
    pack: 'core',
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
    pack: 'core',
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

  {
    id: 'bare-branch',
    name: 'Bare Winter Branch',
    category: 'flora',
    pack: 'core',
    viewBox: '0 0 160 140',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 0 },
      { id: 'twig', defaultPaletteSlot: 3 },
      { id: 'bud', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main trunk
          { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z', type: 'fill', zone: 'branch' },
          // Right branch
          { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z', type: 'fill', zone: 'branch' },
          // Left branch
          { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z', type: 'fill', zone: 'branch' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z', type: 'fill', zone: 'branch' },
          { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z', type: 'fill', zone: 'branch' },
          { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z', type: 'fill', zone: 'branch' },
          // Secondary twigs
          { d: 'M120,12 Q130,8 140,12 M120,12 Q128,18 138,28 M16,8 Q8,12 5,22 M16,8 Q10,4 5,8 M50,58 Q40,52 30,56', type: 'stroke', zone: 'twig', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M75,140 Q70,110 60,85 Q50,60 45,35 L50,30 Q55,55 65,80 Q75,105 80,140 Z', type: 'fill', zone: 'branch' },
          { d: 'M62,82 Q75,55 95,35 Q110,20 120,10 L124,14 Q112,24 98,40 Q78,60 66,82 Z', type: 'fill', zone: 'branch' },
          { d: 'M48,48 Q35,30 25,18 Q20,12 15,10 L18,6 Q24,10 30,15 Q40,28 52,45 Z', type: 'fill', zone: 'branch' },
          { d: 'M120,12 Q130,8 140,12 M120,12 Q128,18 138,28 M16,8 Q8,12 5,22 M16,8 Q10,4 5,8 M50,58 Q40,52 30,56', type: 'stroke', zone: 'twig', strokeWidth: 1.5 },
          // Fine twig ends
          { d: 'M140,12 Q148,8 155,12 M138,28 Q142,35 148,32 M5,22 Q2,30 8,35 M5,8 Q0,5 2,0 M30,56 Q22,52 18,58', type: 'stroke', zone: 'twig', strokeWidth: 0.7 },
          // Bark texture
          { d: 'M58,90 L62,88 M56,100 L60,98 M54,110 L58,108 M52,70 L56,68 M50,50 L54,48', type: 'stroke', zone: 'branch', strokeWidth: 0.7 },
          // Early buds at twig tips
          { d: 'M155,11 A2,2 0 1,1 153,11 Z M148,31 A2,2 0 1,1 146,31 Z M8,34 A2,2 0 1,1 6,34 Z M18,57 A2,2 0 1,1 16,57 Z', type: 'fill', zone: 'bud' },
        ],
      },
    ],
  },
];
