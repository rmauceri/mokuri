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
{
    id: 'mountain-fuji-peak',
    name: 'Great Peak (Fuji style)',
    category: 'landscape',
    viewBox: '0 0 320 180',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'mountain', defaultPaletteSlot: 3 },
      { id: 'snow', defaultPaletteSlot: 4 },
      { id: 'texture', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M20,170 L160,30 L300,170 Z', type: 'fill', zone: 'mountain' }
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20,170 L160,30 L300,170 Z', type: 'fill', zone: 'mountain' },
          { d: 'M160,30 L120,70 Q140,85 160,70 Q180,85 200,70 L160,30 Z', type: 'fill', zone: 'snow' },
          { d: 'M110,170 L130,120 M210,170 L190,120', type: 'stroke', zone: 'texture', strokeWidth: 3 }
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20,170 L160,30 L300,170 Z', type: 'fill', zone: 'mountain' },
          { d: 'M160,30 L120,70 Q140,85 160,70 Q180,85 200,70 L160,30 Z', type: 'fill', zone: 'snow' },
          { d: 'M110,170 L130,120 M210,170 L190,120', type: 'stroke', zone: 'texture', strokeWidth: 3 },
          // Raked "chisel" textures for mountain ridges
          { d: 'M130,70 L110,100 M190,70 L210,100 M160,95 V140', type: 'stroke', zone: 'texture', strokeWidth: 1.2 },
          { d: 'M80,170 L100,140 M240,170 L220,140 M140,170 L150,150 M180,170 L170,150', type: 'stroke', zone: 'texture', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  {
    id: 'rolling-hills',
    name: 'Rolling Hills',
    category: 'landscape',
    viewBox: '0 0 300 140',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'far', defaultPaletteSlot: 0 },
      { id: 'mid', defaultPaletteSlot: 3 },
      { id: 'near', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0,70 Q50,45 100,55 Q150,35 200,50 Q250,40 300,55 L300,140 L0,140 Z', type: 'fill', zone: 'far' },
          { d: 'M0,90 Q60,65 130,75 Q190,60 250,72 L300,80 L300,140 L0,140 Z', type: 'fill', zone: 'mid' },
          { d: 'M0,115 Q80,90 160,98 Q230,85 300,100 L300,140 L0,140 Z', type: 'fill', zone: 'near' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0,70 Q50,45 100,55 Q150,35 200,50 Q250,40 300,55 L300,140 L0,140 Z', type: 'fill', zone: 'far' },
          { d: 'M0,90 Q60,65 130,75 Q190,60 250,72 L300,80 L300,140 L0,140 Z', type: 'fill', zone: 'mid' },
          { d: 'M0,115 Q80,90 160,98 Q230,85 300,100 L300,140 L0,140 Z', type: 'fill', zone: 'near' },
          { d: 'M0,70 Q50,45 100,55 Q150,35 200,50 Q250,40 300,55', type: 'stroke', zone: 'far', strokeWidth: 1.5 },
          { d: 'M0,90 Q60,65 130,75 Q190,60 250,72 L300,80', type: 'stroke', zone: 'mid', strokeWidth: 1.5 },
          { d: 'M0,115 Q80,90 160,98 Q230,85 300,100', type: 'stroke', zone: 'near', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0,70 Q50,45 100,55 Q150,35 200,50 Q250,40 300,55 L300,140 L0,140 Z', type: 'fill', zone: 'far' },
          { d: 'M0,90 Q60,65 130,75 Q190,60 250,72 L300,80 L300,140 L0,140 Z', type: 'fill', zone: 'mid' },
          { d: 'M0,115 Q80,90 160,98 Q230,85 300,100 L300,140 L0,140 Z', type: 'fill', zone: 'near' },
          { d: 'M0,70 Q50,45 100,55 Q150,35 200,50 Q250,40 300,55', type: 'stroke', zone: 'far', strokeWidth: 1.5 },
          { d: 'M0,90 Q60,65 130,75 Q190,60 250,72 L300,80', type: 'stroke', zone: 'mid', strokeWidth: 1.5 },
          { d: 'M0,115 Q80,90 160,98 Q230,85 300,100', type: 'stroke', zone: 'near', strokeWidth: 2 },
          // Tree suggestions on far hills
          { d: 'M65,55 Q70,48 75,55 M120,52 Q125,45 130,52 M175,45 Q180,38 185,45 M230,48 Q235,41 240,48', type: 'stroke', zone: 'far', strokeWidth: 1 },
          // Grass texture on mid hill
          { d: 'M30,82 L35,75 M70,74 L75,67 M110,76 L115,69 M160,70 L165,63 M210,68 L215,61 M260,74 L265,67', type: 'stroke', zone: 'mid', strokeWidth: 0.7 },
          // Grass texture on near hill
          { d: 'M40,108 L46,102 M100,98 L106,92 M170,97 L176,91 M230,92 L236,86 M280,98 L286,92', type: 'stroke', zone: 'near', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  {
    id: 'farmland',
    name: 'Farmland',
    category: 'landscape',
    viewBox: '0 0 280 160',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'field', defaultPaletteSlot: 2 },
      { id: 'bund', defaultPaletteSlot: 0 },
      { id: 'water', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0,30 Q140,15 280,35 L280,65 Q140,50 0,68 Z', type: 'fill', zone: 'field' },
          { d: 'M0,68 Q140,50 280,65 L280,100 Q140,88 0,105 Z', type: 'fill', zone: 'water' },
          { d: 'M0,105 Q140,88 280,100 L280,135 Q140,125 0,140 Z', type: 'fill', zone: 'field' },
          { d: 'M0,140 Q140,125 280,135 L280,160 L0,160 Z', type: 'fill', zone: 'bund' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0,30 Q140,15 280,35 L280,65 Q140,50 0,68 Z', type: 'fill', zone: 'field' },
          { d: 'M0,68 Q140,50 280,65 L280,100 Q140,88 0,105 Z', type: 'fill', zone: 'water' },
          { d: 'M0,105 Q140,88 280,100 L280,135 Q140,125 0,140 Z', type: 'fill', zone: 'field' },
          { d: 'M0,140 Q140,125 280,135 L280,160 L0,160 Z', type: 'fill', zone: 'bund' },
          // Bund dividers between paddies
          { d: 'M0,30 Q140,15 280,35', type: 'stroke', zone: 'bund', strokeWidth: 2 },
          { d: 'M0,68 Q140,50 280,65', type: 'stroke', zone: 'bund', strokeWidth: 2.5 },
          { d: 'M0,105 Q140,88 280,100', type: 'stroke', zone: 'bund', strokeWidth: 2.5 },
          { d: 'M0,140 Q140,125 280,135', type: 'stroke', zone: 'bund', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0,30 Q140,15 280,35 L280,65 Q140,50 0,68 Z', type: 'fill', zone: 'field' },
          { d: 'M0,68 Q140,50 280,65 L280,100 Q140,88 0,105 Z', type: 'fill', zone: 'water' },
          { d: 'M0,105 Q140,88 280,100 L280,135 Q140,125 0,140 Z', type: 'fill', zone: 'field' },
          { d: 'M0,140 Q140,125 280,135 L280,160 L0,160 Z', type: 'fill', zone: 'bund' },
          { d: 'M0,30 Q140,15 280,35', type: 'stroke', zone: 'bund', strokeWidth: 2 },
          { d: 'M0,68 Q140,50 280,65', type: 'stroke', zone: 'bund', strokeWidth: 2.5 },
          { d: 'M0,105 Q140,88 280,100', type: 'stroke', zone: 'bund', strokeWidth: 2.5 },
          { d: 'M0,140 Q140,125 280,135', type: 'stroke', zone: 'bund', strokeWidth: 2 },
          // Rice plant marks in top paddy
          { d: 'M30,42 V36 M60,38 V32 M90,34 V28 M120,32 V26 M150,30 V24 M180,32 V26 M210,35 V29 M240,38 V32', type: 'stroke', zone: 'field', strokeWidth: 0.8 },
          // Water ripples in flooded paddy
          { d: 'M30,80 Q70,76 110,80 M140,76 Q180,72 220,76 M40,90 Q80,86 120,90 M160,86 Q200,82 240,86', type: 'stroke', zone: 'water', strokeWidth: 0.6 },
          // Rice plant marks in lower paddy
          { d: 'M30,115 V109 M70,112 V106 M110,108 V102 M150,106 V100 M190,108 V102 M230,112 V106', type: 'stroke', zone: 'field', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  {
    id: 'tranquil-pond',
    name: 'Tranquil Pond',
    category: 'landscape',
    viewBox: '0 0 240 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'water', defaultPaletteSlot: 0 },
      { id: 'shore', defaultPaletteSlot: 3 },
      { id: 'reflection', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M15,70 Q50,10 130,5 Q210,10 240,70 Q210,130 130,135 Q50,130 15,70 Z', type: 'fill', zone: 'shore' },
          { d: 'M35,70 Q60,25 130,20 Q200,25 215,70 Q200,115 130,120 Q60,115 35,70 Z', type: 'fill', zone: 'water' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M15,70 Q50,10 130,5 Q210,10 240,70 Q210,130 130,135 Q50,130 15,70 Z', type: 'fill', zone: 'shore' },
          { d: 'M35,70 Q60,25 130,20 Q200,25 215,70 Q200,115 130,120 Q60,115 35,70 Z', type: 'fill', zone: 'water' },
          // Shoreline
          { d: 'M35,70 Q60,25 130,20 Q200,25 215,70 Q200,115 130,120 Q60,115 35,70 Z', type: 'stroke', zone: 'shore', strokeWidth: 2 },
          // Surface reflection highlight
          { d: 'M80,55 Q120,42 170,55 Q155,48 120,50 Q90,48 80,55 Z', type: 'fill', zone: 'reflection' },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M15,70 Q50,10 130,5 Q210,10 240,70 Q210,130 130,135 Q50,130 15,70 Z', type: 'fill', zone: 'shore' },
          { d: 'M35,70 Q60,25 130,20 Q200,25 215,70 Q200,115 130,120 Q60,115 35,70 Z', type: 'fill', zone: 'water' },
          { d: 'M35,70 Q60,25 130,20 Q200,25 215,70 Q200,115 130,120 Q60,115 35,70 Z', type: 'stroke', zone: 'shore', strokeWidth: 2 },
          { d: 'M80,55 Q120,42 170,55 Q155,48 120,50 Q90,48 80,55 Z', type: 'fill', zone: 'reflection' },
          // Gentle ripple lines
          { d: 'M55,65 Q90,60 130,65 Q170,60 200,65', type: 'stroke', zone: 'reflection', strokeWidth: 0.6 },
          { d: 'M65,80 Q100,75 140,80 Q180,75 195,80', type: 'stroke', zone: 'reflection', strokeWidth: 0.5 },
          { d: 'M60,95 Q100,90 140,95 Q175,90 190,95', type: 'stroke', zone: 'reflection', strokeWidth: 0.6 },
          // Reed suggestions at edges
          { d: 'M40,85 L38,72 M45,90 L42,76 M48,88 L46,78 M195,80 L198,68 M200,85 L203,72 M205,82 L207,73', type: 'stroke', zone: 'shore', strokeWidth: 0.8 },
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
          { d: 'M0 160 Q5 152, 10 142 Q18 125, 28 108 Q40 72, 58 42 Q75 16, 95 6 Q112 -1, 128 4 Q144 12, 158 30 Q170 52, 175 72 Q178 86, 172 94 Q164 96, 155 88 Q144 76, 135 62 Q126 48, 118 44 Q108 40, 100 52 Q90 70, 82 94 Q76 118, 76 136 Q78 148, 100 152 Q140 155, 200 157 L260 158 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 8 Q106 0, 122 2 Q140 8, 156 26 Q168 46, 176 70 Q180 86, 174 94 Q166 98, 156 90 Q146 78, 138 66 Q130 52, 124 48 Q130 42, 138 34 Q150 26, 158 28 Q150 16, 140 10 Q124 4, 108 2 Q96 2, 90 8 Z', type: 'fill', zone: 'foam' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0 160 Q5 152, 10 142 Q18 125, 28 108 Q40 72, 58 42 Q75 16, 95 6 Q112 -1, 128 4 Q144 12, 158 30 Q170 52, 175 72 Q178 86, 172 94 Q164 96, 155 88 Q144 76, 135 62 Q126 48, 118 44 Q108 40, 100 52 Q90 70, 82 94 Q76 118, 76 136 Q78 148, 100 152 Q140 155, 200 157 L260 158 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 8 Q106 0, 122 2 Q140 8, 156 26 Q168 46, 176 70 Q180 86, 174 94 Q166 98, 156 90 Q146 78, 138 66 Q130 52, 124 48 Q130 42, 138 34 Q150 26, 158 28 Q150 16, 140 10 Q124 4, 108 2 Q96 2, 90 8 Z', type: 'fill', zone: 'foam' },
          // Foam fingers
          { d: 'M172 92 Q176 104, 170 118 Q166 124, 164 114 Q166 100, 172 92 Z M160 90 Q166 104, 160 120 Q155 126, 153 114 Q155 98, 160 90 Z M148 80 Q156 96, 150 114 Q145 120, 143 108 Q144 92, 148 80 Z M138 66 Q146 84, 140 102 Q136 108, 134 96 Q135 78, 138 66 Z M128 54 Q135 70, 130 88 Q126 94, 124 84 Q125 68, 128 54 Z', type: 'fill', zone: 'foam' },
          // Outline
          { d: 'M0 155 Q5 148, 10 140 Q18 125, 28 108 Q40 72, 58 42 Q75 16, 95 6 Q112 -1, 128 4 Q144 12, 158 30 Q170 52, 175 72 Q178 86, 172 94 Q164 96, 155 88 Q144 76, 135 62 Q126 48, 118 44 Q108 40, 100 52 Q90 70, 82 94 Q76 118, 76 136 Q78 148, 100 152 Q140 155, 200 157', type: 'stroke', zone: 'body', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0 160 Q5 152, 10 142 Q18 125, 28 108 Q40 72, 58 42 Q75 16, 95 6 Q112 -1, 128 4 Q144 12, 158 30 Q170 52, 175 72 Q178 86, 172 94 Q164 96, 155 88 Q144 76, 135 62 Q126 48, 118 44 Q108 40, 100 52 Q90 70, 82 94 Q76 118, 76 136 Q78 148, 100 152 Q140 155, 200 157 L260 158 L260 160 Z', type: 'fill', zone: 'body' },
          { d: 'M90 8 Q106 0, 122 2 Q140 8, 156 26 Q168 46, 176 70 Q180 86, 174 94 Q166 98, 156 90 Q146 78, 138 66 Q130 52, 124 48 Q130 42, 138 34 Q150 26, 158 28 Q150 16, 140 10 Q124 4, 108 2 Q96 2, 90 8 Z', type: 'fill', zone: 'foam' },
          // Foam fingers
          { d: 'M172 92 Q176 104, 170 118 Q166 124, 164 114 Q166 100, 172 92 Z M160 90 Q166 104, 160 120 Q155 126, 153 114 Q155 98, 160 90 Z M148 80 Q156 96, 150 114 Q145 120, 143 108 Q144 92, 148 80 Z M138 66 Q146 84, 140 102 Q136 108, 134 96 Q135 78, 138 66 Z M128 54 Q135 70, 130 88 Q126 94, 124 84 Q125 68, 128 54 Z', type: 'fill', zone: 'foam' },
          // Outline
          { d: 'M0 155 Q5 148, 10 140 Q18 125, 28 108 Q40 72, 58 42 Q75 16, 95 6 Q112 -1, 128 4 Q144 12, 158 30 Q170 52, 175 72 Q178 86, 172 94 Q164 96, 155 88 Q144 76, 135 62 Q126 48, 118 44 Q108 40, 100 52 Q90 70, 82 94 Q76 118, 76 136 Q78 148, 100 152 Q140 155, 200 157', type: 'stroke', zone: 'body', strokeWidth: 2.5 },
          // Spray drops
          { d: 'M180 78 Q182 74, 184 78 Q182 82, 180 78 Z M184 66 Q186 62, 188 66 Q186 70, 184 66 Z M176 100 Q178 96, 180 100 Q178 104, 176 100 Z M168 116 Q170 112, 172 116 Q170 120, 168 116 Z M158 118 Q160 114, 162 118 Q160 122, 158 118 Z M148 112 Q150 108, 152 112 Q150 116, 148 112 Z M140 100 Q142 96, 144 100 Q142 104, 140 100 Z', type: 'fill', zone: 'foam' },
          // Water lines
          { d: 'M8 148 Q20 138, 32 130 Q44 120, 55 108 M12 155 Q28 145, 42 138 Q56 130, 68 118 M80 108 Q88 100, 94 105 Q100 110, 108 118 M20 140 Q35 130, 48 122 Q60 114, 70 100', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Inner foam (inside barrel)
          { d: 'M130 58 Q134 54, 138 58 Q134 62, 130 58 M124 70 Q128 66, 132 70 Q128 74, 124 70 M118 82 Q122 78, 126 82 Q122 86, 118 82 M112 94 Q116 90, 120 94 Q116 98, 112 94', type: 'fill', zone: 'foam' },
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
    category: 'objects & patterns',
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

  // ── Twisted Pine ──────────────────────────────────────────
  {
    id: 'twisted-pine',
    name: 'Twisted Pine',
    category: 'flora',
    viewBox: '0 0 200 220',
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
          // Trunk — gnarled, curving to the right
          { d: 'M65 220 L62 180 Q55 150 50 120 Q44 90 55 65 Q62 48 75 42 Q85 38 92 42 Q82 48 72 60 Q60 80 62 110 Q64 140 68 170 L72 220 Z', type: 'fill', zone: 'trunk' },
          // Main foliage cluster (upper right)
          { d: 'M70 50 Q60 35 65 18 Q72 8 85 5 Q100 2 115 8 Q135 15 150 28 Q165 40 170 55 Q172 68 160 72 Q145 70 125 62 Q105 52 90 48 Q78 46 70 50 Z', type: 'fill', zone: 'foliage' },
          // Secondary foliage cluster (left)
          { d: 'M55 72 Q35 60 22 48 Q12 38 15 28 Q20 20 30 22 Q42 25 52 35 Q60 45 62 58 Q62 65 55 72 Z', type: 'fill', zone: 'foliage' },
          // Small foliage tuft (mid-right)
          { d: 'M78 80 Q85 68 98 65 Q110 62 118 68 Q122 75 115 80 Q105 82 92 80 Q82 78 78 80 Z', type: 'fill', zone: 'foliage' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M65 220 L62 180 Q55 150 50 120 Q44 90 55 65 Q62 48 75 42 Q85 38 92 42 Q82 48 72 60 Q60 80 62 110 Q64 140 68 170 L72 220 Z', type: 'fill', zone: 'trunk' },
          { d: 'M70 50 Q60 35 65 18 Q72 8 85 5 Q100 2 115 8 Q135 15 150 28 Q165 40 170 55 Q172 68 160 72 Q145 70 125 62 Q105 52 90 48 Q78 46 70 50 Z', type: 'fill', zone: 'foliage' },
          { d: 'M55 72 Q35 60 22 48 Q12 38 15 28 Q20 20 30 22 Q42 25 52 35 Q60 45 62 58 Q62 65 55 72 Z', type: 'fill', zone: 'foliage' },
          { d: 'M78 80 Q85 68 98 65 Q110 62 118 68 Q122 75 115 80 Q105 82 92 80 Q82 78 78 80 Z', type: 'fill', zone: 'foliage' },
          // Foliage outlines
          { d: 'M70 50 Q60 35 65 18 Q72 8 85 5 Q100 2 115 8 Q135 15 150 28 Q165 40 170 55 Q172 68 160 72 Q145 70 125 62 Q105 52 90 48 Q78 46 70 50', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M55 72 Q35 60 22 48 Q12 38 15 28 Q20 20 30 22 Q42 25 52 35 Q60 45 62 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Branches from trunk to foliage
          { d: 'M60 65 Q50 58 40 52 M72 52 Q80 45 90 42 M66 80 Q75 72 85 68', type: 'stroke', zone: 'trunk', strokeWidth: 2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M65 220 L62 180 Q55 150 50 120 Q44 90 55 65 Q62 48 75 42 Q85 38 92 42 Q82 48 72 60 Q60 80 62 110 Q64 140 68 170 L72 220 Z', type: 'fill', zone: 'trunk' },
          { d: 'M70 50 Q60 35 65 18 Q72 8 85 5 Q100 2 115 8 Q135 15 150 28 Q165 40 170 55 Q172 68 160 72 Q145 70 125 62 Q105 52 90 48 Q78 46 70 50 Z', type: 'fill', zone: 'foliage' },
          { d: 'M55 72 Q35 60 22 48 Q12 38 15 28 Q20 20 30 22 Q42 25 52 35 Q60 45 62 58 Q62 65 55 72 Z', type: 'fill', zone: 'foliage' },
          { d: 'M78 80 Q85 68 98 65 Q110 62 118 68 Q122 75 115 80 Q105 82 92 80 Q82 78 78 80 Z', type: 'fill', zone: 'foliage' },
          { d: 'M70 50 Q60 35 65 18 Q72 8 85 5 Q100 2 115 8 Q135 15 150 28 Q165 40 170 55 Q172 68 160 72 Q145 70 125 62 Q105 52 90 48 Q78 46 70 50', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M55 72 Q35 60 22 48 Q12 38 15 28 Q20 20 30 22 Q42 25 52 35 Q60 45 62 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M60 65 Q50 58 40 52 M72 52 Q80 45 90 42 M66 80 Q75 72 85 68', type: 'stroke', zone: 'trunk', strokeWidth: 2 },
          // Bark texture — gnarled knots and grain
          { d: 'M58 130 Q55 125 58 120 M62 150 Q60 145 62 140 M60 170 Q57 165 60 160 M64 195 Q62 190 64 185 M56 100 Q53 95 56 90', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Needle clusters — main canopy
          { d: 'M80 18 Q88 10 98 14 M95 20 Q105 14 115 18 M110 28 Q120 22 130 26 M130 38 Q142 32 150 36 M145 50 Q155 44 162 48 M105 45 Q115 38 125 42 M82 35 Q90 28 100 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Needle clusters — secondary canopy
          { d: 'M30 30 Q38 22 48 28 M25 40 Q34 34 42 38 M35 50 Q44 44 52 48', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Needle clusters — small tuft
          { d: 'M85 70 Q92 64 100 68 M95 72 Q102 66 110 70 M100 76 Q108 70 115 74', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Root suggestions at base
          { d: 'M62 218 Q50 215 42 218 M72 218 Q80 215 88 218', type: 'stroke', zone: 'trunk', strokeWidth: 1.5 },
        ],
      },
    ],
  },

  // ── Weeping Willow ──────────────────────────────────────────
  {
    id: 'weeping-willow',
    name: 'Weeping Willow',
    category: 'flora',
    viewBox: '0 0 200 240',
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
          // Trunk — straight with slight curve
          { d: 'M90 240 L88 160 Q86 120 90 80 Q92 60 95 45 L105 45 Q108 60 110 80 Q114 120 112 160 L110 240 Z', type: 'fill', zone: 'trunk' },
          // Canopy mass — large drooping oval
          { d: 'M20 100 Q8 70 15 42 Q22 18 50 8 Q70 0 100 0 Q130 0 150 8 Q178 18 185 42 Q192 70 180 100 Q172 130 158 160 Q148 180 140 195 Q130 175 135 150 Q138 125 140 100 Q142 75 130 55 Q120 40 100 38 Q80 40 70 55 Q58 75 60 100 Q62 125 65 150 Q70 175 60 195 Q52 180 42 160 Q28 130 20 100 Z', type: 'fill', zone: 'foliage' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M90 240 L88 160 Q86 120 90 80 Q92 60 95 45 L105 45 Q108 60 110 80 Q114 120 112 160 L110 240 Z', type: 'fill', zone: 'trunk' },
          { d: 'M20 100 Q8 70 15 42 Q22 18 50 8 Q70 0 100 0 Q130 0 150 8 Q178 18 185 42 Q192 70 180 100 Q172 130 158 160 Q148 180 140 195 Q130 175 135 150 Q138 125 140 100 Q142 75 130 55 Q120 40 100 38 Q80 40 70 55 Q58 75 60 100 Q62 125 65 150 Q70 175 60 195 Q52 180 42 160 Q28 130 20 100 Z', type: 'fill', zone: 'foliage' },
          // Canopy outline
          { d: 'M20 100 Q8 70 15 42 Q22 18 50 8 Q70 0 100 0 Q130 0 150 8 Q178 18 185 42 Q192 70 180 100', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Main branch structure
          { d: 'M95 48 Q85 35 70 30 Q55 28 40 35 M105 48 Q115 35 130 30 Q145 28 160 35 M95 55 Q80 48 60 50 M105 55 Q120 48 140 50', type: 'stroke', zone: 'trunk', strokeWidth: 1.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M90 240 L88 160 Q86 120 90 80 Q92 60 95 45 L105 45 Q108 60 110 80 Q114 120 112 160 L110 240 Z', type: 'fill', zone: 'trunk' },
          { d: 'M20 100 Q8 70 15 42 Q22 18 50 8 Q70 0 100 0 Q130 0 150 8 Q178 18 185 42 Q192 70 180 100 Q172 130 158 160 Q148 180 140 195 Q130 175 135 150 Q138 125 140 100 Q142 75 130 55 Q120 40 100 38 Q80 40 70 55 Q58 75 60 100 Q62 125 65 150 Q70 175 60 195 Q52 180 42 160 Q28 130 20 100 Z', type: 'fill', zone: 'foliage' },
          { d: 'M20 100 Q8 70 15 42 Q22 18 50 8 Q70 0 100 0 Q130 0 150 8 Q178 18 185 42 Q192 70 180 100', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M95 48 Q85 35 70 30 Q55 28 40 35 M105 48 Q115 35 130 30 Q145 28 160 35 M95 55 Q80 48 60 50 M105 55 Q120 48 140 50', type: 'stroke', zone: 'trunk', strokeWidth: 1.8 },
          // Hanging fronds — left side
          { d: 'M40 38 Q35 60 30 90 Q25 120 22 150 Q20 175 18 195', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M50 30 Q45 55 40 85 Q35 115 32 145 Q28 172 26 192', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M60 28 Q55 52 50 80 Q45 108 42 135 Q38 162 36 185', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M72 30 Q67 55 62 82 Q58 110 55 140 Q52 165 50 188', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M80 35 Q76 58 72 85 Q68 112 66 142 Q64 168 62 190', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          // Hanging fronds — right side
          { d: 'M120 35 Q124 58 128 85 Q132 112 134 142 Q136 168 138 190', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M130 30 Q134 55 138 82 Q142 110 145 140 Q148 165 150 188', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M140 28 Q145 52 150 80 Q155 108 158 135 Q162 162 164 185', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M150 30 Q155 55 160 85 Q165 115 168 145 Q172 172 174 192', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          { d: 'M160 38 Q165 60 170 90 Q175 120 178 150 Q180 175 182 195', type: 'stroke', zone: 'foliage', strokeWidth: 0.8 },
          // Bark texture
          { d: 'M93 80 L93 100 M107 85 L107 105 M95 120 L95 145 M105 130 L105 155 M94 165 L94 185 M106 170 L106 195', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Small leaf clusters along fronds
          { d: 'M28 100 Q32 96 36 100 M22 155 Q26 151 30 155 M45 90 Q49 86 53 90 M40 140 Q44 136 48 140 M55 85 Q59 81 63 85 M165 90 Q169 86 173 90 M172 140 Q176 136 180 140 M155 85 Q159 81 163 85 M148 135 Q152 131 156 135', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Root flare at base
          { d: 'M88 238 Q75 235 65 238 M112 238 Q125 235 135 238', type: 'stroke', zone: 'trunk', strokeWidth: 1.5 },
        ],
      },
    ],
  },

];
