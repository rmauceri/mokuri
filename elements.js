// ============================================================
//  MOKURI — Element Library
//  Procedural SVG element definitions for Japanese woodblock prints
// ============================================================

const MOKURI_ELEMENTS = [

  // ============================================================
  //  LANDSCAPE
  // ============================================================
  {
    id: 'mountain-distant',
    name: 'Distant Mountain',
    category: 'landscape',
    viewBox: '0 0 240 140',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'snow', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      // Level 0: Solid silhouette with color zones
      {
        name: 'block',
        paths: [
          { d: 'M0 140 L60 30 L100 60 L140 15 L180 50 L240 140 Z', type: 'fill', zone: 'body' },
          { d: 'M110 45 L140 15 L170 40 L155 42 L140 30 L125 43 Z', type: 'fill', zone: 'snow' },
        ],
      },
      // Level 1: Outline + snow cap
      {
        name: 'shape',
        paths: [
          { d: 'M0 140 L60 30 L100 60 L140 15 L180 50 L240 140 Z', type: 'fill', zone: 'body' },
          { d: 'M110 45 L140 15 L170 40 L155 42 L140 30 L125 43 Z', type: 'fill', zone: 'snow' },
          { d: 'M0 140 L60 30 L100 60 L140 15 L180 50 L240 140', type: 'stroke', zone: 'body', strokeWidth: 2 },
        ],
      },
      // Level 2: Full detail with ridgelines
      {
        name: 'detail',
        paths: [
          { d: 'M0 140 L60 30 L100 60 L140 15 L180 50 L240 140 Z', type: 'fill', zone: 'body' },
          { d: 'M110 45 L140 15 L170 40 L155 42 L140 30 L125 43 Z', type: 'fill', zone: 'snow' },
          { d: 'M0 140 L60 30 L100 60 L140 15 L180 50 L240 140', type: 'stroke', zone: 'body', strokeWidth: 2 },
          // Ridgelines
          { d: 'M60 30 L80 70 M100 60 L110 85 M140 15 L145 55 M180 50 L190 80', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Rock texture hatching
          { d: 'M30 100 L45 85 M50 110 L65 95 M70 120 L85 105 M150 90 L165 75 M170 100 L185 85 M190 110 L205 95 M100 100 L115 85 M120 115 L135 100', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
        ],
      },
    ],
  },

  {
    id: 'mountain-near',
    name: 'Near Mountain',
    category: 'landscape',
    viewBox: '0 0 260 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 3 },
      { id: 'shadow', defaultPaletteSlot: 0 },
      { id: 'detail', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0 160 L40 80 L90 50 L130 70 L170 40 L220 65 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 50 L130 70 L120 110 L80 100 Z', type: 'fill', zone: 'shadow' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0 160 L40 80 L90 50 L130 70 L170 40 L220 65 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 50 L130 70 L120 110 L80 100 Z', type: 'fill', zone: 'shadow' },
          { d: 'M0 160 L40 80 L90 50 L130 70 L170 40 L220 65 L260 160', type: 'stroke', zone: 'shadow', strokeWidth: 2.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0 160 L40 80 L90 50 L130 70 L170 40 L220 65 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 50 L130 70 L120 110 L80 100 Z', type: 'fill', zone: 'shadow' },
          { d: 'M0 160 L40 80 L90 50 L130 70 L170 40 L220 65 L260 160', type: 'stroke', zone: 'shadow', strokeWidth: 2.5 },
          { d: 'M40 80 L55 100 M90 50 L95 80 M170 40 L180 70 M220 65 L225 90', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          { d: 'M15 130 L30 115 M35 140 L50 125 M55 130 L70 115 M140 120 L155 105 M160 130 L175 115 M200 130 L215 115', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Tree suggestion marks on slopes
          { d: 'M25 110 Q30 100 35 110 M45 105 Q50 95 55 105 M195 100 Q200 90 205 100 M215 105 Q220 95 225 105', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ============================================================
  //  WATER
  // ============================================================
  {
    id: 'great-wave',
    name: 'Great Wave',
    category: 'landscape',
    viewBox: '0 0 260 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'foam', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0 160 Q20 100 50 90 Q80 80 100 60 Q120 40 130 30 Q145 20 155 25 Q175 10 200 20 Q230 35 240 60 Q250 85 240 110 Q230 130 210 140 Q180 155 160 160 L0 160 Z', type: 'fill', zone: 'body' },
          { d: 'M125 35 Q130 25 140 22 Q150 20 155 25 Q148 22 140 25 Q135 28 130 32 Z', type: 'fill', zone: 'foam' },
          { d: 'M155 25 Q162 18 172 15 Q185 12 200 20 Q190 15 178 16 Q168 18 160 22 Z', type: 'fill', zone: 'foam' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0 160 Q20 100 50 90 Q80 80 100 60 Q120 40 130 30 Q145 20 155 25 Q175 10 200 20 Q230 35 240 60 Q250 85 240 110 Q230 130 210 140 Q180 155 160 160 L0 160 Z', type: 'fill', zone: 'body' },
          // Foam crest
          { d: 'M125 35 Q130 25 140 22 Q150 20 155 25 Q148 22 140 25 Q135 28 130 32 Z', type: 'fill', zone: 'foam' },
          { d: 'M155 25 Q162 18 172 15 Q185 12 200 20 Q190 15 178 16 Q168 18 160 22 Z', type: 'fill', zone: 'foam' },
          // Outline
          { d: 'M0 145 Q20 100 50 90 Q80 80 100 60 Q120 40 130 30 Q145 20 155 25 Q175 10 200 20 Q230 35 240 60 Q250 85 240 110 Q230 130 210 140 Q180 155 160 160', type: 'stroke', zone: 'body', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0 160 Q20 100 50 90 Q80 80 100 60 Q120 40 130 30 Q145 20 155 25 Q175 10 200 20 Q230 35 240 60 Q250 85 240 110 Q230 130 210 140 Q180 155 160 160 L0 160 Z', type: 'fill', zone: 'body' },
          { d: 'M125 35 Q130 25 140 22 Q150 20 155 25 Q148 22 140 25 Q135 28 130 32 Z', type: 'fill', zone: 'foam' },
          { d: 'M155 25 Q162 18 172 15 Q185 12 200 20 Q190 15 178 16 Q168 18 160 22 Z', type: 'fill', zone: 'foam' },
          { d: 'M0 145 Q20 100 50 90 Q80 80 100 60 Q120 40 130 30 Q145 20 155 25 Q175 10 200 20 Q230 35 240 60 Q250 85 240 110 Q230 130 210 140 Q180 155 160 160', type: 'stroke', zone: 'body', strokeWidth: 2.5 },
          // Spray fingers
          { d: 'M130 30 Q125 22 128 15 M135 28 Q132 18 136 10 M142 24 Q140 15 144 8 M150 22 Q150 12 155 6 M158 22 Q162 12 168 8', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Water lines
          { d: 'M20 120 Q40 115 60 118 Q80 122 100 115 M30 135 Q55 130 80 133 Q105 136 130 130 M10 150 Q35 145 60 148 Q85 152 110 148 Q135 144 160 148', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Inner foam
          { d: 'M160 50 Q170 45 180 48 Q190 52 195 60 M200 30 Q210 35 215 45 M165 70 Q175 65 185 68 Q195 72 200 80', type: 'stroke', zone: 'foam', strokeWidth: 1 },
        ],
      },
    ],
  },

  {
    id: 'gentle-waves',
    name: 'Gentle Waves',
    category: 'landscape',
    viewBox: '0 0 280 80',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'foam', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0 80 Q35 50 70 55 Q105 60 140 45 Q175 30 210 40 Q245 50 280 35 L280 80 Z', type: 'fill', zone: 'body' },
          { d: 'M60 55 Q65 52 70 55 M130 46 Q135 43 140 45 M200 40 Q205 37 210 40', type: 'stroke', zone: 'foam', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0 80 Q35 50 70 55 Q105 60 140 45 Q175 30 210 40 Q245 50 280 35 L280 80 Z', type: 'fill', zone: 'body' },
          { d: 'M0 65 Q35 50 70 55 Q105 60 140 45 Q175 30 210 40 Q245 50 280 35', type: 'stroke', zone: 'body', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0 80 Q35 50 70 55 Q105 60 140 45 Q175 30 210 40 Q245 50 280 35 L280 80 Z', type: 'fill', zone: 'body' },
          { d: 'M0 65 Q35 50 70 55 Q105 60 140 45 Q175 30 210 40 Q245 50 280 35', type: 'stroke', zone: 'body', strokeWidth: 2 },
          // Secondary wave lines
          { d: 'M0 72 Q40 60 80 64 Q120 68 160 58 Q200 48 240 52 Q260 54 280 48', type: 'stroke', zone: 'body', strokeWidth: 1 },
          // Foam accents
          { d: 'M60 55 Q65 52 70 55 M130 46 Q135 43 140 45 M200 40 Q205 37 210 40 M265 37 Q270 34 275 36', type: 'stroke', zone: 'foam', strokeWidth: 1.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  SKY & ATMOSPHERE
  // ============================================================
  {
    id: 'full-moon',
    name: 'Full Moon',
    category: 'landscape',
    viewBox: '0 0 120 120',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 4 },
      { id: 'glow', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 5 A55 55 0 1 1 59.99 5 Z', type: 'stroke', zone: 'glow', strokeWidth: 4 },
          { d: 'M60 10 A50 50 0 1 1 59.99 10 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M60 5 A55 55 0 1 1 59.99 5 Z', type: 'stroke', zone: 'glow', strokeWidth: 4 },
          { d: 'M60 10 A50 50 0 1 1 59.99 10 Z', type: 'fill', zone: 'body' },
          { d: 'M60 10 A50 50 0 1 1 59.99 10 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M60 5 A55 55 0 1 1 59.99 5 Z', type: 'stroke', zone: 'glow', strokeWidth: 4 },
          { d: 'M60 10 A50 50 0 1 1 59.99 10 Z', type: 'fill', zone: 'body' },
          { d: 'M60 10 A50 50 0 1 1 59.99 10 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Crater suggestions
          { d: 'M45 45 A8 8 0 1 1 44.99 45 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M70 55 A6 6 0 1 1 69.99 55 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M55 70 A10 10 0 1 1 54.99 70 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M38 62 A4 4 0 1 1 37.99 62 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M72 38 A5 5 0 1 1 71.99 38 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  {
    id: 'cloud-bank',
    name: 'Cloud Bank',
    category: 'landscape',
    viewBox: '0 0 260 80',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'highlight', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0 50 Q30 20 70 25 Q110 10 150 20 Q190 5 230 18 Q260 25 260 50 Q260 70 230 65 Q190 72 150 60 Q110 70 70 62 Q30 68 0 50 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0 50 Q30 20 70 25 Q110 10 150 20 Q190 5 230 18 Q260 25 260 50 Q260 70 230 65 Q190 72 150 60 Q110 70 70 62 Q30 68 0 50 Z', type: 'fill', zone: 'body' },
          { d: 'M0 50 Q30 20 70 25 Q110 10 150 20 Q190 5 230 18 Q260 25 260 50', type: 'stroke', zone: 'body', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0 50 Q30 20 70 25 Q110 10 150 20 Q190 5 230 18 Q260 25 260 50 Q260 70 230 65 Q190 72 150 60 Q110 70 70 62 Q30 68 0 50 Z', type: 'fill', zone: 'body' },
          { d: 'M0 50 Q30 20 70 25 Q110 10 150 20 Q190 5 230 18 Q260 25 260 50', type: 'stroke', zone: 'body', strokeWidth: 1.5 },
          // Wispy interior lines
          { d: 'M30 38 Q60 30 90 35 Q120 28 150 33 M50 48 Q80 42 110 46 Q140 40 170 44 Q200 38 230 42', type: 'stroke', zone: 'highlight', strokeWidth: 0.6 },
          // Bottom wisps
          { d: 'M20 55 Q50 60 80 55 Q110 62 140 56 M150 58 Q180 64 210 58 Q235 62 250 56', type: 'stroke', zone: 'highlight', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLORA (TREES & PLANTS)
  // ============================================================
  {
    id: 'pine-tree',
    name: 'Pine Tree',
    category: 'flora',
    viewBox: '0 0 140 200',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'trunk', defaultPaletteSlot: 4 },
      { id: 'foliage', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 200 L60 130 Q58 120 62 110 L78 110 Q82 120 80 130 L80 200 Z', type: 'fill', zone: 'trunk' },
          { d: 'M30 100 Q15 85 25 65 Q35 50 50 45 Q65 40 70 30 Q75 20 70 10 Q80 15 90 25 Q100 35 110 45 Q125 55 130 75 Q135 95 115 105 Q95 110 80 110 L60 110 Q40 108 30 100 Z', type: 'fill', zone: 'foliage' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // Trunk
          { d: 'M60 200 L60 130 Q58 120 62 110 L78 110 Q82 120 80 130 L80 200 Z', type: 'fill', zone: 'trunk' },
          // Foliage clusters
          { d: 'M30 100 Q15 85 25 65 Q35 50 50 45 Q65 40 70 30 Q75 20 70 10 Q80 15 90 25 Q100 35 110 45 Q125 55 130 75 Q135 95 115 105 Q95 110 80 110 L60 110 Q40 108 30 100 Z', type: 'fill', zone: 'foliage' },
          // Outline
          { d: 'M30 100 Q15 85 25 65 Q35 50 50 45 Q65 40 70 30 Q75 20 70 10 Q80 15 90 25 Q100 35 110 45 Q125 55 130 75 Q135 95 115 105', type: 'stroke', zone: 'detail', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // Trunk
          { d: 'M60 200 L60 130 Q58 120 62 110 L78 110 Q82 120 80 130 L80 200 Z', type: 'fill', zone: 'trunk' },
          // Foliage clusters
          { d: 'M30 100 Q15 85 25 65 Q35 50 50 45 Q65 40 70 30 Q75 20 70 10 Q80 15 90 25 Q100 35 110 45 Q125 55 130 75 Q135 95 115 105 Q95 110 80 110 L60 110 Q40 108 30 100 Z', type: 'fill', zone: 'foliage' },
          // Outline
          { d: 'M30 100 Q15 85 25 65 Q35 50 50 45 Q65 40 70 30 Q75 20 70 10 Q80 15 90 25 Q100 35 110 45 Q125 55 130 75 Q135 95 115 105', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Bark texture
          { d: 'M65 130 L65 150 M75 125 L75 145 M68 155 L68 175 M72 170 L72 190', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Needle clusters
          { d: 'M40 85 Q45 75 55 78 M35 70 Q42 62 52 65 M50 55 Q58 48 65 52 M80 55 Q88 48 95 52 M100 65 Q108 58 115 62 M105 80 Q112 72 120 76 M90 90 Q95 82 102 86 M45 92 Q52 85 58 88', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Branch suggestions
          { d: 'M62 110 L45 95 M78 110 L95 95 M65 115 L35 100 M75 115 L105 100', type: 'stroke', zone: 'trunk', strokeWidth: 1.5 },
        ],
      },
    ],
  },

  {
    id: 'cherry-branch',
    name: 'Cherry Blossom',
    category: 'flora',
    viewBox: '0 0 220 180',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'blossom', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Branch
          { d: 'M0 140 Q30 130 60 110 Q90 90 120 80 Q150 70 180 50 Q200 40 220 30 Q210 50 190 60 Q170 70 150 85 Q130 100 100 120 Q80 130 50 140 Q25 148 0 145 Z', type: 'fill', zone: 'branch' },
          // Blossom clusters
          { d: 'M50 100 A20 20 0 1 1 49.99 100 Z M100 70 A22 22 0 1 1 99.99 70 Z M150 55 A18 18 0 1 1 149.99 55 Z M80 115 A15 15 0 1 1 79.99 115 Z M170 40 A16 16 0 1 1 169.99 40 Z', type: 'fill', zone: 'blossom' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // Branch
          { d: 'M0 138 Q30 128 60 110 Q90 92 120 82 Q150 72 180 52 Q200 42 220 32 M120 82 Q115 100 100 115 M60 110 Q55 125 45 135', type: 'stroke', zone: 'branch', strokeWidth: 3 },
          // Blossom outlines
          { d: 'M40 95 Q45 82 55 85 Q60 78 65 85 Q70 82 68 92 Q72 98 65 100 Q68 106 58 105 Q52 110 48 103 Q42 106 42 98 Z', type: 'fill', zone: 'blossom' },
          { d: 'M90 62 Q95 48 107 52 Q112 44 118 52 Q124 48 122 60 Q128 66 120 68 Q124 76 112 74 Q106 80 102 72 Q94 76 94 66 Z', type: 'fill', zone: 'blossom' },
          { d: 'M140 48 Q144 36 154 39 Q158 32 163 39 Q168 36 166 46 Q172 51 165 53 Q168 60 158 58 Q152 64 149 56 Q142 59 142 50 Z', type: 'fill', zone: 'blossom' },
          { d: 'M72 108 Q75 98 83 100 Q86 94 90 100 Q94 98 93 106 Q98 110 92 112 Q94 118 86 116 Q82 120 80 114 Q74 116 74 110 Z', type: 'fill', zone: 'blossom' },
          { d: 'M162 32 Q165 22 173 25 Q176 20 180 25 Q184 22 183 30 Q188 34 182 36 Q184 42 176 40 Q172 44 170 38 Q164 40 164 34 Z', type: 'fill', zone: 'blossom' },
        ],
      },
      {
        name: 'detail',
        paths: [
          // Branch with bark detail
          { d: 'M0 138 Q30 128 60 110 Q90 92 120 82 Q150 72 180 52 Q200 42 220 32 M120 82 Q115 100 100 115 M60 110 Q55 125 45 135', type: 'stroke', zone: 'branch', strokeWidth: 3.5 },
          // Blossoms (same as shape level)
          { d: 'M40 95 Q45 82 55 85 Q60 78 65 85 Q70 82 68 92 Q72 98 65 100 Q68 106 58 105 Q52 110 48 103 Q42 106 42 98 Z', type: 'fill', zone: 'blossom' },
          { d: 'M90 62 Q95 48 107 52 Q112 44 118 52 Q124 48 122 60 Q128 66 120 68 Q124 76 112 74 Q106 80 102 72 Q94 76 94 66 Z', type: 'fill', zone: 'blossom' },
          { d: 'M140 48 Q144 36 154 39 Q158 32 163 39 Q168 36 166 46 Q172 51 165 53 Q168 60 158 58 Q152 64 149 56 Q142 59 142 50 Z', type: 'fill', zone: 'blossom' },
          { d: 'M72 108 Q75 98 83 100 Q86 94 90 100 Q94 98 93 106 Q98 110 92 112 Q94 118 86 116 Q82 120 80 114 Q74 116 74 110 Z', type: 'fill', zone: 'blossom' },
          { d: 'M162 32 Q165 22 173 25 Q176 20 180 25 Q184 22 183 30 Q188 34 182 36 Q184 42 176 40 Q172 44 170 38 Q164 40 164 34 Z', type: 'fill', zone: 'blossom' },
          // Blossom outlines
          { d: 'M40 95 Q45 82 55 85 Q60 78 65 85 Q70 82 68 92 Q72 98 65 100 Q68 106 58 105 Q52 110 48 103 Q42 106 42 98 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M90 62 Q95 48 107 52 Q112 44 118 52 Q124 48 122 60 Q128 66 120 68 Q124 76 112 74 Q106 80 102 72 Q94 76 94 66 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M140 48 Q144 36 154 39 Q158 32 163 39 Q168 36 166 46 Q172 51 165 53 Q168 60 158 58 Q152 64 149 56 Q142 59 142 50 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Stamen centers
          { d: 'M55 94 L55 90 M53 93 L50 90 M57 93 L60 90', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M108 64 L108 60 M106 63 L103 60 M110 63 L113 60', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M153 49 L153 45 M151 48 L148 45 M155 48 L158 45', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Falling petals
          { d: 'M35 125 Q38 122 40 125 Q42 128 39 130 Z M125 95 Q128 92 130 95 Q132 98 129 100 Z M185 55 Q188 52 190 55 Q192 58 189 60 Z', type: 'fill', zone: 'blossom' },
          // Bark texture
          { d: 'M25 132 L30 128 M70 105 L75 100 M100 88 L105 84 M140 72 L145 68 M175 52 L180 48', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  FAUNA
  // ============================================================
  {
    id: 'crane',
    name: 'Crane',
    category: 'fauna',
    viewBox: '0 0 160 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'accent', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 10 Q65 5 72 8 L80 8 Q90 10 88 20 L85 35 Q80 45 70 50 Q60 58 55 70 Q50 82 48 95 Q45 110 50 125 Q55 135 65 130 Q80 125 100 110 Q120 95 135 85 Q140 82 140 90 Q138 100 125 110 Q110 120 90 135 Q70 148 55 155 L52 160 Q48 170 45 180 L42 195 L38 195 L38 180 Q36 170 38 160 L40 150 Q30 155 20 152 Q10 148 15 140 Q20 132 35 130 Q42 128 48 120 Q44 105 45 90 Q46 75 50 65 Q55 50 65 40 L70 30 Q75 22 72 15 Q68 12 64 14 Z', type: 'fill', zone: 'body' },
          { d: 'M55 90 Q60 85 70 88 Q85 92 100 100 Q115 108 125 105 Q130 98 135 90 L140 90 Q138 100 125 110 Q110 118 95 115 Q80 112 65 105 Q55 100 55 90 Z', type: 'fill', zone: 'accent' },
          { d: 'M68 8 A5 5 0 1 1 76 8 A5 5 0 1 1 68 8 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // Body
          { d: 'M55 70 Q50 82 48 95 Q45 110 50 125 Q55 135 65 130 Q80 125 100 110 Q120 95 135 85 Q140 82 140 90 Q138 100 125 110 Q110 120 90 135 Q70 148 55 155 L52 160 Q48 170 45 180 L42 195 L38 195 L38 180 Q36 170 38 160 L40 150 Q30 155 20 152 Q10 148 15 140 Q20 132 35 130 Q42 128 48 120 Q44 105 45 90 Q46 75 50 65 L55 70 Z', type: 'fill', zone: 'body' },
          // Wing accent
          { d: 'M55 90 Q60 85 70 88 Q85 92 100 100 Q115 108 125 105 Q130 98 135 90 L140 90 Q138 100 125 110 Q110 118 95 115 Q80 112 65 105 Q55 100 55 90 Z', type: 'fill', zone: 'accent' },
          // Head/neck
          { d: 'M60 10 Q65 5 72 8 L80 8 Q90 10 88 20 L85 35 Q80 45 70 50 Q60 58 55 70', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Crown
          { d: 'M68 8 A5 5 0 1 1 76 8 A5 5 0 1 1 68 8 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'detail',
        paths: [
          // Body
          { d: 'M55 70 Q50 82 48 95 Q45 110 50 125 Q55 135 65 130 Q80 125 100 110 Q120 95 135 85 Q140 82 140 90 Q138 100 125 110 Q110 120 90 135 Q70 148 55 155 L52 160 Q48 170 45 180 L42 195 L38 195 L38 180 Q36 170 38 160 L40 150 Q30 155 20 152 Q10 148 15 140 Q20 132 35 130 Q42 128 48 120 Q44 105 45 90 Q46 75 50 65 L55 70 Z', type: 'fill', zone: 'body' },
          // Wing accent
          { d: 'M55 90 Q60 85 70 88 Q85 92 100 100 Q115 108 125 105 Q130 98 135 90 L140 90 Q138 100 125 110 Q110 118 95 115 Q80 112 65 105 Q55 100 55 90 Z', type: 'fill', zone: 'accent' },
          // Crown
          { d: 'M68 8 A5 5 0 1 1 76 8 A5 5 0 1 1 68 8 Z', type: 'fill', zone: 'accent' },
          // Head/neck outline
          { d: 'M60 10 Q65 5 72 8 L80 8 Q90 10 88 20 L85 35 Q80 45 70 50 Q60 58 55 70', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Eye
          { d: 'M78 15 A2 2 0 1 1 77.99 15 Z', type: 'fill', zone: 'detail' },
          // Beak
          { d: 'M60 10 L48 12 L60 15', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Feather detail
          { d: 'M60 95 L70 92 M65 100 L75 97 M70 105 L80 102 M55 82 L65 80 M58 88 L68 85', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Wing feather tips
          { d: 'M100 100 L110 95 M108 104 L118 99 M115 108 L125 103 M122 106 L132 100', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Tail feathers
          { d: 'M25 145 Q30 140 35 142 M20 148 Q25 143 30 145 M30 138 Q35 133 40 135', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Leg detail
          { d: 'M42 195 L38 198 L44 198 M38 195 L34 198 L40 198', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ============================================================
  //  OBJECTS
  // ============================================================
  {
    id: 'torii-gate',
    name: 'Torii Gate',
    category: 'objects',
    viewBox: '0 0 180 200',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main silhouette
          { d: 'M5 12 Q90 0 175 12 L175 24 Q90 14 5 24 Z M15 24 L15 30 L30 30 L30 24 Z M150 24 L150 30 L165 30 L165 24 Z M25 30 L25 200 L35 200 L35 30 Z M145 30 L145 200 L155 200 L155 30 Z M20 55 L160 55 L160 65 L20 65 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // Kasagi (top beam with curve)
          { d: 'M5 12 Q90 0 175 12 L175 24 Q90 14 5 24 Z', type: 'fill', zone: 'body' },
          // Shimaki (second beam)
          { d: 'M15 24 L15 30 L165 30 L165 24 Z', type: 'fill', zone: 'body' },
          // Nuki (crossbeam)
          { d: 'M20 55 L160 55 L160 65 L20 65 Z', type: 'fill', zone: 'body' },
          // Hashira (pillars)
          { d: 'M25 30 L25 200 L35 200 L35 30 Z M145 30 L145 200 L155 200 L155 30 Z', type: 'fill', zone: 'body' },
          // Outline
          { d: 'M5 12 Q90 0 175 12 L175 24 Q90 14 5 24 Z M15 24 L165 30 M15 30 L165 24 M20 55 L160 55 M20 65 L160 65 M25 30 L25 200 M35 30 L35 200 M145 30 L145 200 M155 30 L155 200', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M5 12 Q90 0 175 12 L175 24 Q90 14 5 24 Z', type: 'fill', zone: 'body' },
          { d: 'M15 24 L15 30 L165 30 L165 24 Z', type: 'fill', zone: 'body' },
          { d: 'M20 55 L160 55 L160 65 L20 65 Z', type: 'fill', zone: 'body' },
          { d: 'M25 30 L25 200 L35 200 L35 30 Z M145 30 L145 200 L155 200 L155 30 Z', type: 'fill', zone: 'body' },
          // Full outline
          { d: 'M5 12 Q90 0 175 12 M5 24 Q90 14 175 24 M5 12 L5 24 M175 12 L175 24 M15 24 L15 30 M165 24 L165 30 M20 55 L160 55 M20 65 L160 65 M25 30 L25 200 M35 30 L35 200 M145 30 L145 200 M155 30 L155 200', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Wood grain on kasagi
          { d: 'M20 16 Q60 10 100 13 Q140 10 170 16 M20 20 Q60 15 100 18 Q140 15 170 20', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Grain on pillars
          { d: 'M28 40 L28 60 M32 70 L32 100 M29 110 L29 140 M31 150 L31 180 M148 40 L148 60 M152 70 L152 100 M149 110 L149 140 M151 150 L151 180', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Nuki (crossbeam) detail
          { d: 'M25 58 L155 58 M25 62 L155 62', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Small decorative elements at pillar-beam joints
          { d: 'M22 55 L38 55 L38 65 L22 65 Z M142 55 L158 55 L158 65 L142 65 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
        ],
      },
    ],
  },
];
