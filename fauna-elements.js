// ============================================================
//  MOKURI — Fauna Element Library
//  Japanese woodblock print animal motifs
// ============================================================

const MOKURI_FAUNA_ELEMENTS = [

  // ============================================================
  //  KOI — iconic carp, curved swimming pose
  // ============================================================
  {
    id: 'koi',
    name: 'Koi',
    category: 'fauna',
    viewBox: '0 0 200 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'belly', defaultPaletteSlot: 4 },
      { id: 'fin', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body silhouette — S-curve swimming pose
          { d: 'M30 60 Q50 20 90 25 Q130 30 150 50 Q165 62 180 55 Q185 52 190 55 Q185 60 180 65 Q165 72 150 70 Q130 90 90 95 Q50 100 30 60 Z', type: 'fill', zone: 'body' },
          // Belly
          { d: 'M50 70 Q70 85 90 85 Q110 85 130 75 Q110 90 90 90 Q70 90 50 70 Z', type: 'fill', zone: 'belly' },
          // Dorsal fin
          { d: 'M75 30 Q85 10 100 15 Q105 20 100 30 Q90 28 75 30 Z', type: 'fill', zone: 'fin' },
          // Tail fin
          { d: 'M170 50 Q185 35 195 40 Q190 55 195 70 Q185 75 170 65 Z', type: 'fill', zone: 'fin' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M30 60 Q50 20 90 25 Q130 30 150 50 Q165 62 180 55 Q185 52 190 55 Q185 60 180 65 Q165 72 150 70 Q130 90 90 95 Q50 100 30 60 Z', type: 'fill', zone: 'body' },
          { d: 'M50 70 Q70 85 90 85 Q110 85 130 75 Q110 90 90 90 Q70 90 50 70 Z', type: 'fill', zone: 'belly' },
          { d: 'M75 30 Q85 10 100 15 Q105 20 100 30 Q90 28 75 30 Z', type: 'fill', zone: 'fin' },
          { d: 'M170 50 Q185 35 195 40 Q190 55 195 70 Q185 75 170 65 Z', type: 'fill', zone: 'fin' },
          // Body outline
          { d: 'M30 60 Q50 20 90 25 Q130 30 150 50 Q165 62 180 55 Q185 52 190 55 Q185 60 180 65 Q165 72 150 70 Q130 90 90 95 Q50 100 30 60 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Eye
          { d: 'M52 50 A4 4 0 1 1 51.99 50 Z', type: 'fill', zone: 'detail' },
          // Gill line
          { d: 'M62 40 Q65 55 60 68', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M30 60 Q50 20 90 25 Q130 30 150 50 Q165 62 180 55 Q185 52 190 55 Q185 60 180 65 Q165 72 150 70 Q130 90 90 95 Q50 100 30 60 Z', type: 'fill', zone: 'body' },
          { d: 'M50 70 Q70 85 90 85 Q110 85 130 75 Q110 90 90 90 Q70 90 50 70 Z', type: 'fill', zone: 'belly' },
          { d: 'M75 30 Q85 10 100 15 Q105 20 100 30 Q90 28 75 30 Z', type: 'fill', zone: 'fin' },
          { d: 'M170 50 Q185 35 195 40 Q190 55 195 70 Q185 75 170 65 Z', type: 'fill', zone: 'fin' },
          { d: 'M30 60 Q50 20 90 25 Q130 30 150 50 Q165 62 180 55 Q185 52 190 55 Q185 60 180 65 Q165 72 150 70 Q130 90 90 95 Q50 100 30 60 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M52 50 A4 4 0 1 1 51.99 50 Z', type: 'fill', zone: 'detail' },
          { d: 'M62 40 Q65 55 60 68', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Scale pattern
          { d: 'M70 40 Q75 35 80 40 M80 40 Q85 35 90 40 M90 40 Q95 35 100 40 M100 40 Q105 35 110 40 M110 40 Q115 35 120 40 M120 40 Q125 38 130 42 M75 50 Q80 45 85 50 M85 50 Q90 45 95 50 M95 50 Q100 45 105 50 M105 50 Q110 45 115 50 M115 50 Q120 45 125 50 M80 60 Q85 55 90 60 M90 60 Q95 55 100 60 M100 60 Q105 55 110 60 M110 60 Q115 58 120 62', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Fin rays
          { d: 'M78 28 L85 15 M85 27 L92 14 M92 27 L97 17 M175 48 L190 38 M177 55 L192 52 M177 62 L190 68', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Pectoral fin
          { d: 'M65 65 Q55 75 50 80 Q60 78 65 70', type: 'stroke', zone: 'fin', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ============================================================
  //  DRAGONFLY — tonbo, side view with outstretched wings
  // ============================================================
  {
    id: 'dragonfly',
    name: 'Dragonfly',
    category: 'fauna',
    viewBox: '0 0 180 140',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'wing', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — long segmented abdomen
          { d: 'M85 50 Q80 48 75 50 L30 68 Q25 70 28 73 L75 72 Q80 74 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M85 50 Q95 45 100 50 Q105 55 100 62 Q95 68 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          // Upper wings
          { d: 'M82 50 Q100 20 130 15 Q155 12 170 20 Q160 25 140 28 Q110 32 82 50 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 50 Q65 22 45 18 Q30 15 18 22 Q25 28 42 30 Q62 35 82 50 Z', type: 'fill', zone: 'wing' },
          // Lower wings
          { d: 'M82 72 Q100 95 125 100 Q150 103 162 98 Q155 92 138 90 Q110 88 82 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 72 Q65 92 48 95 Q34 98 24 93 Q30 88 44 86 Q64 82 82 72 Z', type: 'fill', zone: 'wing' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M85 50 Q80 48 75 50 L30 68 Q25 70 28 73 L75 72 Q80 74 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          { d: 'M85 50 Q95 45 100 50 Q105 55 100 62 Q95 68 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          { d: 'M82 50 Q100 20 130 15 Q155 12 170 20 Q160 25 140 28 Q110 32 82 50 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 50 Q65 22 45 18 Q30 15 18 22 Q25 28 42 30 Q62 35 82 50 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 72 Q100 95 125 100 Q150 103 162 98 Q155 92 138 90 Q110 88 82 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 72 Q65 92 48 95 Q34 98 24 93 Q30 88 44 86 Q64 82 82 72 Z', type: 'fill', zone: 'wing' },
          // Body outline
          { d: 'M85 50 Q80 48 75 50 L30 68 Q25 70 28 73 L75 72 Q80 74 85 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eyes
          { d: 'M95 52 A3 3 0 1 1 94.99 52 Z', type: 'fill', zone: 'detail' },
          { d: 'M95 62 A3 3 0 1 1 94.99 62 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M85 50 Q80 48 75 50 L30 68 Q25 70 28 73 L75 72 Q80 74 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          { d: 'M85 50 Q95 45 100 50 Q105 55 100 62 Q95 68 85 72 Q92 65 92 60 Q92 55 85 50 Z', type: 'fill', zone: 'body' },
          { d: 'M82 50 Q100 20 130 15 Q155 12 170 20 Q160 25 140 28 Q110 32 82 50 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 50 Q65 22 45 18 Q30 15 18 22 Q25 28 42 30 Q62 35 82 50 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 72 Q100 95 125 100 Q150 103 162 98 Q155 92 138 90 Q110 88 82 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 72 Q65 92 48 95 Q34 98 24 93 Q30 88 44 86 Q64 82 82 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M85 50 Q80 48 75 50 L30 68 Q25 70 28 73 L75 72 Q80 74 85 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M95 52 A3 3 0 1 1 94.99 52 Z', type: 'fill', zone: 'detail' },
          { d: 'M95 62 A3 3 0 1 1 94.99 62 Z', type: 'fill', zone: 'detail' },
          // Wing veins — upper right
          { d: 'M84 49 L130 18 M88 47 L150 17 M86 48 L110 22 M84 49 L100 30', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Wing veins — upper left
          { d: 'M80 49 L45 20 M78 48 L30 18 M80 49 L60 28', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Wing veins — lower right
          { d: 'M84 74 L125 98 M86 75 L148 100 M84 74 L105 90', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Wing veins — lower left
          { d: 'M80 74 L48 93 M78 75 L32 95 M80 74 L60 86', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Abdomen segments
          { d: 'M72 52 L72 70 M65 54 L65 70 M58 56 L58 70 M50 58 L50 71 M42 62 L42 71', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
        ],
      },
    ],
  },

  // ============================================================
  //  TURTLE — minogame, from above with hexagonal shell pattern
  // ============================================================
  {
    id: 'turtle',
    name: 'Turtle',
    category: 'fauna',
    viewBox: '0 0 160 180',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'shell', defaultPaletteSlot: 0 },
      { id: 'body', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Shell — oval
          { d: 'M80 30 Q120 30 135 70 Q145 100 130 130 Q115 155 80 158 Q45 155 30 130 Q15 100 25 70 Q40 30 80 30 Z', type: 'fill', zone: 'shell' },
          // Head
          { d: 'M80 30 Q72 20 68 10 Q65 4 70 2 Q78 0 82 0 Q90 2 95 4 Q92 10 88 20 Q84 30 80 30 Z', type: 'fill', zone: 'body' },
          // Legs
          { d: 'M35 55 Q20 45 12 42 Q8 48 15 55 Q25 60 35 60 Z', type: 'fill', zone: 'body' },
          { d: 'M125 55 Q140 45 148 42 Q152 48 145 55 Q135 60 125 60 Z', type: 'fill', zone: 'body' },
          { d: 'M38 130 Q22 140 15 148 Q20 154 28 148 Q35 140 40 133 Z', type: 'fill', zone: 'body' },
          { d: 'M122 130 Q138 140 145 148 Q140 154 132 148 Q125 140 120 133 Z', type: 'fill', zone: 'body' },
          // Tail
          { d: 'M80 155 Q78 165 75 172 Q80 175 85 172 Q82 165 80 155 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M80 30 Q120 30 135 70 Q145 100 130 130 Q115 155 80 158 Q45 155 30 130 Q15 100 25 70 Q40 30 80 30 Z', type: 'fill', zone: 'shell' },
          { d: 'M80 30 Q72 20 68 10 Q65 4 70 2 Q78 0 82 0 Q90 2 95 4 Q92 10 88 20 Q84 30 80 30 Z', type: 'fill', zone: 'body' },
          { d: 'M35 55 Q20 45 12 42 Q8 48 15 55 Q25 60 35 60 Z', type: 'fill', zone: 'body' },
          { d: 'M125 55 Q140 45 148 42 Q152 48 145 55 Q135 60 125 60 Z', type: 'fill', zone: 'body' },
          { d: 'M38 130 Q22 140 15 148 Q20 154 28 148 Q35 140 40 133 Z', type: 'fill', zone: 'body' },
          { d: 'M122 130 Q138 140 145 148 Q140 154 132 148 Q125 140 120 133 Z', type: 'fill', zone: 'body' },
          { d: 'M80 155 Q78 165 75 172 Q80 175 85 172 Q82 165 80 155 Z', type: 'fill', zone: 'body' },
          // Shell outline
          { d: 'M80 30 Q120 30 135 70 Q145 100 130 130 Q115 155 80 158 Q45 155 30 130 Q15 100 25 70 Q40 30 80 30 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Eyes
          { d: 'M74 10 A2 2 0 1 1 73.99 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M86 10 A2 2 0 1 1 85.99 10 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M80 30 Q120 30 135 70 Q145 100 130 130 Q115 155 80 158 Q45 155 30 130 Q15 100 25 70 Q40 30 80 30 Z', type: 'fill', zone: 'shell' },
          { d: 'M80 30 Q72 20 68 10 Q65 4 70 2 Q78 0 82 0 Q90 2 95 4 Q92 10 88 20 Q84 30 80 30 Z', type: 'fill', zone: 'body' },
          { d: 'M35 55 Q20 45 12 42 Q8 48 15 55 Q25 60 35 60 Z', type: 'fill', zone: 'body' },
          { d: 'M125 55 Q140 45 148 42 Q152 48 145 55 Q135 60 125 60 Z', type: 'fill', zone: 'body' },
          { d: 'M38 130 Q22 140 15 148 Q20 154 28 148 Q35 140 40 133 Z', type: 'fill', zone: 'body' },
          { d: 'M122 130 Q138 140 145 148 Q140 154 132 148 Q125 140 120 133 Z', type: 'fill', zone: 'body' },
          { d: 'M80 155 Q78 165 75 172 Q80 175 85 172 Q82 165 80 155 Z', type: 'fill', zone: 'body' },
          { d: 'M80 30 Q120 30 135 70 Q145 100 130 130 Q115 155 80 158 Q45 155 30 130 Q15 100 25 70 Q40 30 80 30 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M74 10 A2 2 0 1 1 73.99 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M86 10 A2 2 0 1 1 85.99 10 Z', type: 'fill', zone: 'detail' },
          // Hexagonal shell pattern
          { d: 'M80 50 L60 65 L60 90 L80 105 L100 90 L100 65 Z', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          { d: 'M60 65 L40 55 L30 70 L38 88 L60 90', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M100 65 L120 55 L130 70 L122 88 L100 90', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M60 90 L45 105 L38 125 L50 138 L80 140', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M100 90 L115 105 L122 125 L110 138 L80 140', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M80 105 L80 140', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Leg details
          { d: 'M14 46 L10 50 M16 48 L12 52 M146 46 L150 50 M144 48 L148 52', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
        ],
      },
    ],
  },

  // ============================================================
  //  CRANE (flying) — tsuru, wings spread in flight
  // ============================================================
  {
    id: 'crane-flying',
    name: 'Flying Crane',
    category: 'fauna',
    viewBox: '0 0 240 160',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 3 },
      { id: 'accent', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body
          { d: 'M105 70 Q115 60 130 58 Q140 56 145 60 Q148 65 145 72 Q140 80 130 82 Q115 85 105 78 Z', type: 'fill', zone: 'body' },
          // Neck + head
          { d: 'M105 70 Q95 55 80 45 Q70 38 60 35 Q55 34 52 36 Q50 38 52 40 Q58 42 65 40 Q72 42 80 50 Q90 60 100 68', type: 'fill', zone: 'body' },
          // Red crown
          { d: 'M56 34 Q60 30 64 33 Q62 36 58 37 Q55 36 56 34 Z', type: 'fill', zone: 'accent' },
          // Left wing (up)
          { d: 'M110 68 Q90 40 70 20 Q55 8 40 5 Q30 3 25 8 Q32 15 45 18 Q60 22 80 40 Q95 55 108 68 Z', type: 'fill', zone: 'wing' },
          // Right wing (down)
          { d: 'M115 78 Q130 100 150 120 Q165 135 180 142 Q192 148 200 145 Q195 138 182 130 Q165 118 148 100 Q132 82 118 75 Z', type: 'fill', zone: 'wing' },
          // Tail
          { d: 'M140 65 Q155 55 168 52 Q175 50 172 56 Q165 60 150 68 Q142 72 140 72 Z', type: 'fill', zone: 'detail' },
          // Legs (trailing)
          { d: 'M135 78 Q145 95 155 110 Q158 115 155 112 Q148 100 138 82', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M105 70 Q115 60 130 58 Q140 56 145 60 Q148 65 145 72 Q140 80 130 82 Q115 85 105 78 Z', type: 'fill', zone: 'body' },
          { d: 'M105 70 Q95 55 80 45 Q70 38 60 35 Q55 34 52 36 Q50 38 52 40 Q58 42 65 40 Q72 42 80 50 Q90 60 100 68', type: 'fill', zone: 'body' },
          { d: 'M56 34 Q60 30 64 33 Q62 36 58 37 Q55 36 56 34 Z', type: 'fill', zone: 'accent' },
          { d: 'M110 68 Q90 40 70 20 Q55 8 40 5 Q30 3 25 8 Q32 15 45 18 Q60 22 80 40 Q95 55 108 68 Z', type: 'fill', zone: 'wing' },
          { d: 'M115 78 Q130 100 150 120 Q165 135 180 142 Q192 148 200 145 Q195 138 182 130 Q165 118 148 100 Q132 82 118 75 Z', type: 'fill', zone: 'wing' },
          { d: 'M140 65 Q155 55 168 52 Q175 50 172 56 Q165 60 150 68 Q142 72 140 72 Z', type: 'fill', zone: 'detail' },
          { d: 'M135 78 Q145 95 155 110 Q158 115 155 112 Q148 100 138 82', type: 'fill', zone: 'detail' },
          // Wing outlines
          { d: 'M110 68 Q90 40 70 20 Q55 8 40 5 Q30 3 25 8 Q32 15 45 18 Q60 22 80 40 Q95 55 108 68', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M115 78 Q130 100 150 120 Q165 135 180 142 Q192 148 200 145 Q195 138 182 130 Q165 118 148 100 Q132 82 118 75', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eye
          { d: 'M57 37 A1.5 1.5 0 1 1 56.99 37 Z', type: 'fill', zone: 'detail' },
          // Beak
          { d: 'M52 36 L45 34 L52 38', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M105 70 Q115 60 130 58 Q140 56 145 60 Q148 65 145 72 Q140 80 130 82 Q115 85 105 78 Z', type: 'fill', zone: 'body' },
          { d: 'M105 70 Q95 55 80 45 Q70 38 60 35 Q55 34 52 36 Q50 38 52 40 Q58 42 65 40 Q72 42 80 50 Q90 60 100 68', type: 'fill', zone: 'body' },
          { d: 'M56 34 Q60 30 64 33 Q62 36 58 37 Q55 36 56 34 Z', type: 'fill', zone: 'accent' },
          { d: 'M110 68 Q90 40 70 20 Q55 8 40 5 Q30 3 25 8 Q32 15 45 18 Q60 22 80 40 Q95 55 108 68 Z', type: 'fill', zone: 'wing' },
          { d: 'M115 78 Q130 100 150 120 Q165 135 180 142 Q192 148 200 145 Q195 138 182 130 Q165 118 148 100 Q132 82 118 75 Z', type: 'fill', zone: 'wing' },
          { d: 'M140 65 Q155 55 168 52 Q175 50 172 56 Q165 60 150 68 Q142 72 140 72 Z', type: 'fill', zone: 'detail' },
          { d: 'M135 78 Q145 95 155 110 Q158 115 155 112 Q148 100 138 82', type: 'fill', zone: 'detail' },
          { d: 'M110 68 Q90 40 70 20 Q55 8 40 5 Q30 3 25 8 Q32 15 45 18 Q60 22 80 40 Q95 55 108 68', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M115 78 Q130 100 150 120 Q165 135 180 142 Q192 148 200 145 Q195 138 182 130 Q165 118 148 100 Q132 82 118 75', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M57 37 A1.5 1.5 0 1 1 56.99 37 Z', type: 'fill', zone: 'detail' },
          { d: 'M52 36 L45 34 L52 38', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Wing feather details — upper
          { d: 'M100 55 L85 35 M95 50 L75 25 M90 48 L65 18 M85 46 L55 12 M80 45 L48 10', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Wing feather details — lower
          { d: 'M125 88 L140 108 M130 92 L150 118 M135 95 L160 128 M140 98 L170 135 M145 100 L178 140', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Black wingtips
          { d: 'M25 8 Q28 5 35 6 Q42 7 40 5 L30 3 Q25 3 25 8 Z', type: 'fill', zone: 'detail' },
          { d: 'M200 145 Q198 148 190 147 Q183 145 180 142 L192 148 Q198 150 200 145 Z', type: 'fill', zone: 'detail' },
        ],
      },
    ],
  },

  // ============================================================
  //  RABBIT — usagi, sitting profile
  // ============================================================
  {
    id: 'rabbit',
    name: 'Rabbit',
    category: 'fauna',
    viewBox: '0 0 140 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'ear', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — round sitting pose
          { d: 'M70 85 Q100 80 110 100 Q118 115 115 130 Q110 148 95 155 Q80 160 65 158 Q45 155 35 145 Q25 130 30 110 Q35 90 55 85 Q62 83 70 85 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M75 85 Q90 70 95 55 Q95 42 85 38 Q75 35 65 40 Q55 48 55 60 Q55 72 65 82 Q70 85 75 85 Z', type: 'fill', zone: 'body' },
          // Left ear
          { d: 'M68 40 Q62 15 55 5 Q52 0 50 5 Q48 15 52 35 Q55 42 62 42 Z', type: 'fill', zone: 'ear' },
          // Right ear
          { d: 'M82 38 Q85 12 90 3 Q92 0 95 3 Q98 12 95 32 Q92 40 85 40 Z', type: 'fill', zone: 'ear' },
          // Tail
          { d: 'M35 130 Q22 125 20 128 Q22 135 30 135 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 85 Q100 80 110 100 Q118 115 115 130 Q110 148 95 155 Q80 160 65 158 Q45 155 35 145 Q25 130 30 110 Q35 90 55 85 Q62 83 70 85 Z', type: 'fill', zone: 'body' },
          { d: 'M75 85 Q90 70 95 55 Q95 42 85 38 Q75 35 65 40 Q55 48 55 60 Q55 72 65 82 Q70 85 75 85 Z', type: 'fill', zone: 'body' },
          { d: 'M68 40 Q62 15 55 5 Q52 0 50 5 Q48 15 52 35 Q55 42 62 42 Z', type: 'fill', zone: 'ear' },
          { d: 'M82 38 Q85 12 90 3 Q92 0 95 3 Q98 12 95 32 Q92 40 85 40 Z', type: 'fill', zone: 'ear' },
          { d: 'M35 130 Q22 125 20 128 Q22 135 30 135 Z', type: 'fill', zone: 'body' },
          // Outlines
          { d: 'M75 85 Q90 70 95 55 Q95 42 85 38 Q75 35 65 40 Q55 48 55 60 Q55 72 65 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eye
          { d: 'M78 55 A3.5 3 0 1 1 77.99 55 Z', type: 'fill', zone: 'detail' },
          // Nose
          { d: 'M88 52 L92 50 L88 48', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 85 Q100 80 110 100 Q118 115 115 130 Q110 148 95 155 Q80 160 65 158 Q45 155 35 145 Q25 130 30 110 Q35 90 55 85 Q62 83 70 85 Z', type: 'fill', zone: 'body' },
          { d: 'M75 85 Q90 70 95 55 Q95 42 85 38 Q75 35 65 40 Q55 48 55 60 Q55 72 65 82 Q70 85 75 85 Z', type: 'fill', zone: 'body' },
          { d: 'M68 40 Q62 15 55 5 Q52 0 50 5 Q48 15 52 35 Q55 42 62 42 Z', type: 'fill', zone: 'ear' },
          { d: 'M82 38 Q85 12 90 3 Q92 0 95 3 Q98 12 95 32 Q92 40 85 40 Z', type: 'fill', zone: 'ear' },
          { d: 'M35 130 Q22 125 20 128 Q22 135 30 135 Z', type: 'fill', zone: 'body' },
          { d: 'M75 85 Q90 70 95 55 Q95 42 85 38 Q75 35 65 40 Q55 48 55 60 Q55 72 65 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M78 55 A3.5 3 0 1 1 77.99 55 Z', type: 'fill', zone: 'detail' },
          { d: 'M88 52 L92 50 L88 48', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Ear inner detail
          { d: 'M62 38 Q58 18 56 8 M84 36 Q86 15 89 5', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Fur texture
          { d: 'M60 90 Q55 95 58 100 M70 95 Q68 100 72 105 M85 92 Q88 98 85 103 M95 100 Q100 108 97 115 M50 105 Q45 112 48 118 M75 108 Q72 115 76 122 M100 120 Q105 128 100 135', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Whiskers
          { d: 'M88 50 L102 46 M88 52 L105 52 M88 54 L102 58', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Front paw
          { d: 'M100 145 Q105 150 100 155 Q95 152 100 145 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  // ============================================================
  //  FROG — kaeru, squatting pose from above
  // ============================================================
  {
    id: 'frog',
    name: 'Frog',
    category: 'fauna',
    viewBox: '0 0 140 120',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 3 },
      { id: 'belly', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — broad oval
          { d: 'M70 35 Q100 35 115 55 Q125 70 120 85 Q110 100 90 105 Q70 108 50 105 Q30 100 20 85 Q15 70 25 55 Q40 35 70 35 Z', type: 'fill', zone: 'body' },
          // Belly
          { d: 'M70 55 Q90 55 100 70 Q105 82 95 92 Q80 98 65 98 Q50 95 42 82 Q38 70 48 58 Q58 55 70 55 Z', type: 'fill', zone: 'belly' },
          // Eyes (bulging)
          { d: 'M50 35 Q42 25 38 22 Q34 20 32 24 Q30 30 35 35 Q40 38 48 36 Z', type: 'fill', zone: 'body' },
          { d: 'M90 35 Q98 25 102 22 Q106 20 108 24 Q110 30 105 35 Q100 38 92 36 Z', type: 'fill', zone: 'body' },
          // Front legs
          { d: 'M28 70 Q15 68 8 72 Q5 78 10 80 Q18 78 25 75 Z', type: 'fill', zone: 'body' },
          { d: 'M112 70 Q125 68 132 72 Q135 78 130 80 Q122 78 115 75 Z', type: 'fill', zone: 'body' },
          // Back legs
          { d: 'M35 95 Q20 105 12 112 Q8 118 15 118 Q22 115 32 105 Q38 100 38 95 Z', type: 'fill', zone: 'body' },
          { d: 'M105 95 Q120 105 128 112 Q132 118 125 118 Q118 115 108 105 Q102 100 102 95 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 35 Q100 35 115 55 Q125 70 120 85 Q110 100 90 105 Q70 108 50 105 Q30 100 20 85 Q15 70 25 55 Q40 35 70 35 Z', type: 'fill', zone: 'body' },
          { d: 'M70 55 Q90 55 100 70 Q105 82 95 92 Q80 98 65 98 Q50 95 42 82 Q38 70 48 58 Q58 55 70 55 Z', type: 'fill', zone: 'belly' },
          { d: 'M50 35 Q42 25 38 22 Q34 20 32 24 Q30 30 35 35 Q40 38 48 36 Z', type: 'fill', zone: 'body' },
          { d: 'M90 35 Q98 25 102 22 Q106 20 108 24 Q110 30 105 35 Q100 38 92 36 Z', type: 'fill', zone: 'body' },
          { d: 'M28 70 Q15 68 8 72 Q5 78 10 80 Q18 78 25 75 Z', type: 'fill', zone: 'body' },
          { d: 'M112 70 Q125 68 132 72 Q135 78 130 80 Q122 78 115 75 Z', type: 'fill', zone: 'body' },
          { d: 'M35 95 Q20 105 12 112 Q8 118 15 118 Q22 115 32 105 Q38 100 38 95 Z', type: 'fill', zone: 'body' },
          { d: 'M105 95 Q120 105 128 112 Q132 118 125 118 Q118 115 108 105 Q102 100 102 95 Z', type: 'fill', zone: 'body' },
          // Body outline
          { d: 'M70 35 Q100 35 115 55 Q125 70 120 85 Q110 100 90 105 Q70 108 50 105 Q30 100 20 85 Q15 70 25 55 Q40 35 70 35 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eye pupils
          { d: 'M40 28 A3 3 0 1 1 39.99 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M100 28 A3 3 0 1 1 99.99 28 Z', type: 'fill', zone: 'detail' },
          // Mouth
          { d: 'M55 45 Q70 50 85 45', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 35 Q100 35 115 55 Q125 70 120 85 Q110 100 90 105 Q70 108 50 105 Q30 100 20 85 Q15 70 25 55 Q40 35 70 35 Z', type: 'fill', zone: 'body' },
          { d: 'M70 55 Q90 55 100 70 Q105 82 95 92 Q80 98 65 98 Q50 95 42 82 Q38 70 48 58 Q58 55 70 55 Z', type: 'fill', zone: 'belly' },
          { d: 'M50 35 Q42 25 38 22 Q34 20 32 24 Q30 30 35 35 Q40 38 48 36 Z', type: 'fill', zone: 'body' },
          { d: 'M90 35 Q98 25 102 22 Q106 20 108 24 Q110 30 105 35 Q100 38 92 36 Z', type: 'fill', zone: 'body' },
          { d: 'M28 70 Q15 68 8 72 Q5 78 10 80 Q18 78 25 75 Z', type: 'fill', zone: 'body' },
          { d: 'M112 70 Q125 68 132 72 Q135 78 130 80 Q122 78 115 75 Z', type: 'fill', zone: 'body' },
          { d: 'M35 95 Q20 105 12 112 Q8 118 15 118 Q22 115 32 105 Q38 100 38 95 Z', type: 'fill', zone: 'body' },
          { d: 'M105 95 Q120 105 128 112 Q132 118 125 118 Q118 115 108 105 Q102 100 102 95 Z', type: 'fill', zone: 'body' },
          { d: 'M70 35 Q100 35 115 55 Q125 70 120 85 Q110 100 90 105 Q70 108 50 105 Q30 100 20 85 Q15 70 25 55 Q40 35 70 35 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M40 28 A3 3 0 1 1 39.99 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M100 28 A3 3 0 1 1 99.99 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M55 45 Q70 50 85 45', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Spots
          { d: 'M55 60 A5 4 0 1 1 54.99 60 Z M80 65 A4 3 0 1 1 79.99 65 Z M42 78 A3 4 0 1 1 41.99 78 Z M95 75 A4 3 0 1 1 94.99 75 Z', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Toe webbing
          { d: 'M8 74 L3 70 M8 76 L3 78 M10 78 L5 82 M130 74 L135 70 M130 76 L135 78 M128 78 L133 82', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Back leg webbing
          { d: 'M12 114 L8 110 M14 116 L8 118 M15 118 L10 122 M126 114 L130 110 M124 116 L130 118 M123 118 L128 122', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  BUTTERFLY — cho, wings spread
  // ============================================================
  {
    id: 'butterfly',
    name: 'Butterfly',
    category: 'fauna',
    viewBox: '0 0 160 130',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'wing', defaultPaletteSlot: 1 },
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Upper left wing
          { d: 'M76 55 Q55 30 35 18 Q18 10 10 18 Q5 28 12 42 Q22 55 45 60 Q60 62 76 58 Z', type: 'fill', zone: 'wing' },
          // Upper right wing
          { d: 'M84 55 Q105 30 125 18 Q142 10 150 18 Q155 28 148 42 Q138 55 115 60 Q100 62 84 58 Z', type: 'fill', zone: 'wing' },
          // Lower left wing
          { d: 'M76 65 Q55 80 38 95 Q25 108 30 115 Q38 120 52 112 Q65 100 75 82 Q77 72 76 65 Z', type: 'fill', zone: 'wing' },
          // Lower right wing
          { d: 'M84 65 Q105 80 122 95 Q135 108 130 115 Q122 120 108 112 Q95 100 85 82 Q83 72 84 65 Z', type: 'fill', zone: 'wing' },
          // Body
          { d: 'M78 48 Q76 40 77 32 Q79 28 81 28 Q83 28 84 32 Q84 40 82 48 L82 90 Q81 100 80 105 Q79 100 78 90 Z', type: 'fill', zone: 'body' },
          // Wing accent spots
          { d: 'M45 35 A8 7 0 1 1 44.99 35 Z', type: 'fill', zone: 'accent' },
          { d: 'M115 35 A8 7 0 1 1 114.99 35 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M76 55 Q55 30 35 18 Q18 10 10 18 Q5 28 12 42 Q22 55 45 60 Q60 62 76 58 Z', type: 'fill', zone: 'wing' },
          { d: 'M84 55 Q105 30 125 18 Q142 10 150 18 Q155 28 148 42 Q138 55 115 60 Q100 62 84 58 Z', type: 'fill', zone: 'wing' },
          { d: 'M76 65 Q55 80 38 95 Q25 108 30 115 Q38 120 52 112 Q65 100 75 82 Q77 72 76 65 Z', type: 'fill', zone: 'wing' },
          { d: 'M84 65 Q105 80 122 95 Q135 108 130 115 Q122 120 108 112 Q95 100 85 82 Q83 72 84 65 Z', type: 'fill', zone: 'wing' },
          { d: 'M78 48 Q76 40 77 32 Q79 28 81 28 Q83 28 84 32 Q84 40 82 48 L82 90 Q81 100 80 105 Q79 100 78 90 Z', type: 'fill', zone: 'body' },
          { d: 'M45 35 A8 7 0 1 1 44.99 35 Z', type: 'fill', zone: 'accent' },
          { d: 'M115 35 A8 7 0 1 1 114.99 35 Z', type: 'fill', zone: 'accent' },
          // Wing outlines
          { d: 'M76 55 Q55 30 35 18 Q18 10 10 18 Q5 28 12 42 Q22 55 45 60 Q60 62 76 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M84 55 Q105 30 125 18 Q142 10 150 18 Q155 28 148 42 Q138 55 115 60 Q100 62 84 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M76 65 Q55 80 38 95 Q25 108 30 115 Q38 120 52 112 Q65 100 75 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M84 65 Q105 80 122 95 Q135 108 130 115 Q122 120 108 112 Q95 100 85 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Antennae
          { d: 'M78 32 Q70 15 62 10 M82 32 Q90 15 98 10', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M76 55 Q55 30 35 18 Q18 10 10 18 Q5 28 12 42 Q22 55 45 60 Q60 62 76 58 Z', type: 'fill', zone: 'wing' },
          { d: 'M84 55 Q105 30 125 18 Q142 10 150 18 Q155 28 148 42 Q138 55 115 60 Q100 62 84 58 Z', type: 'fill', zone: 'wing' },
          { d: 'M76 65 Q55 80 38 95 Q25 108 30 115 Q38 120 52 112 Q65 100 75 82 Q77 72 76 65 Z', type: 'fill', zone: 'wing' },
          { d: 'M84 65 Q105 80 122 95 Q135 108 130 115 Q122 120 108 112 Q95 100 85 82 Q83 72 84 65 Z', type: 'fill', zone: 'wing' },
          { d: 'M78 48 Q76 40 77 32 Q79 28 81 28 Q83 28 84 32 Q84 40 82 48 L82 90 Q81 100 80 105 Q79 100 78 90 Z', type: 'fill', zone: 'body' },
          { d: 'M45 35 A8 7 0 1 1 44.99 35 Z', type: 'fill', zone: 'accent' },
          { d: 'M115 35 A8 7 0 1 1 114.99 35 Z', type: 'fill', zone: 'accent' },
          { d: 'M76 55 Q55 30 35 18 Q18 10 10 18 Q5 28 12 42 Q22 55 45 60 Q60 62 76 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M84 55 Q105 30 125 18 Q142 10 150 18 Q155 28 148 42 Q138 55 115 60 Q100 62 84 58', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M76 65 Q55 80 38 95 Q25 108 30 115 Q38 120 52 112 Q65 100 75 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M84 65 Q105 80 122 95 Q135 108 130 115 Q122 120 108 112 Q95 100 85 82', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M78 32 Q70 15 62 10 M82 32 Q90 15 98 10', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Wing vein patterns — upper
          { d: 'M76 56 L45 30 M76 55 L55 25 M76 54 L35 22 M84 56 L115 30 M84 55 L105 25 M84 54 L125 22', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Wing vein patterns — lower
          { d: 'M76 66 L50 90 M76 68 L42 100 M84 66 L110 90 M84 68 L118 100', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Lower wing spots
          { d: 'M55 92 A5 4 0 1 1 54.99 92 Z M105 92 A5 4 0 1 1 104.99 92 Z', type: 'fill', zone: 'accent' },
          // Antenna tips
          { d: 'M62 10 A2 2 0 1 1 61.99 10 Z M98 10 A2 2 0 1 1 97.99 10 Z', type: 'fill', zone: 'detail' },
        ],
      },
    ],
  },

  // ============================================================
  //  SPARROW — suzume, perching side view
  // ============================================================
  {
    id: 'sparrow',
    name: 'Sparrow',
    category: 'fauna',
    viewBox: '0 0 120 110',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 3 },
      { id: 'breast', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 0 },
      { id: 'detail', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — plump round shape
          { d: 'M55 35 Q75 30 85 40 Q95 50 92 65 Q90 78 80 85 Q65 92 50 88 Q35 82 30 68 Q28 55 35 42 Q42 35 55 35 Z', type: 'fill', zone: 'body' },
          // Breast
          { d: 'M50 55 Q58 50 68 52 Q78 56 80 68 Q80 78 72 85 Q62 90 52 85 Q42 78 40 68 Q40 58 50 55 Z', type: 'fill', zone: 'breast' },
          // Head
          { d: 'M55 35 Q50 25 45 20 Q38 15 32 18 Q28 22 30 30 Q32 35 38 38 Q45 40 55 38 Z', type: 'fill', zone: 'body' },
          // Wing
          { d: 'M60 42 Q75 38 88 42 Q98 48 100 55 Q95 60 85 58 Q72 55 62 50 Q58 48 60 42 Z', type: 'fill', zone: 'wing' },
          // Tail
          { d: 'M85 55 Q100 50 110 48 Q115 50 112 55 Q105 58 92 60 Z', type: 'fill', zone: 'wing' },
          // Beak
          { d: 'M30 25 L18 22 L28 28 Z', type: 'fill', zone: 'detail' },
          // Legs
          { d: 'M55 88 L52 100 L48 105 M55 88 L58 100 L62 105 M58 100 L55 105', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M55 35 Q75 30 85 40 Q95 50 92 65 Q90 78 80 85 Q65 92 50 88 Q35 82 30 68 Q28 55 35 42 Q42 35 55 35 Z', type: 'fill', zone: 'body' },
          { d: 'M50 55 Q58 50 68 52 Q78 56 80 68 Q80 78 72 85 Q62 90 52 85 Q42 78 40 68 Q40 58 50 55 Z', type: 'fill', zone: 'breast' },
          { d: 'M55 35 Q50 25 45 20 Q38 15 32 18 Q28 22 30 30 Q32 35 38 38 Q45 40 55 38 Z', type: 'fill', zone: 'body' },
          { d: 'M60 42 Q75 38 88 42 Q98 48 100 55 Q95 60 85 58 Q72 55 62 50 Q58 48 60 42 Z', type: 'fill', zone: 'wing' },
          { d: 'M85 55 Q100 50 110 48 Q115 50 112 55 Q105 58 92 60 Z', type: 'fill', zone: 'wing' },
          { d: 'M30 25 L18 22 L28 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M55 88 L52 100 L48 105 M55 88 L58 100 L62 105 M58 100 L55 105', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Eye
          { d: 'M38 25 A2.5 2.5 0 1 1 37.99 25 Z', type: 'fill', zone: 'detail' },
          // Wing edge
          { d: 'M60 42 Q75 38 88 42 Q98 48 100 55 Q95 60 85 58', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M55 35 Q75 30 85 40 Q95 50 92 65 Q90 78 80 85 Q65 92 50 88 Q35 82 30 68 Q28 55 35 42 Q42 35 55 35 Z', type: 'fill', zone: 'body' },
          { d: 'M50 55 Q58 50 68 52 Q78 56 80 68 Q80 78 72 85 Q62 90 52 85 Q42 78 40 68 Q40 58 50 55 Z', type: 'fill', zone: 'breast' },
          { d: 'M55 35 Q50 25 45 20 Q38 15 32 18 Q28 22 30 30 Q32 35 38 38 Q45 40 55 38 Z', type: 'fill', zone: 'body' },
          { d: 'M60 42 Q75 38 88 42 Q98 48 100 55 Q95 60 85 58 Q72 55 62 50 Q58 48 60 42 Z', type: 'fill', zone: 'wing' },
          { d: 'M85 55 Q100 50 110 48 Q115 50 112 55 Q105 58 92 60 Z', type: 'fill', zone: 'wing' },
          { d: 'M30 25 L18 22 L28 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M55 88 L52 100 L48 105 M55 88 L58 100 L62 105 M58 100 L55 105', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M38 25 A2.5 2.5 0 1 1 37.99 25 Z', type: 'fill', zone: 'detail' },
          { d: 'M60 42 Q75 38 88 42 Q98 48 100 55 Q95 60 85 58', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Cheek patch
          { d: 'M34 30 Q38 32 40 35 Q36 36 32 34 Q30 32 34 30 Z', type: 'fill', zone: 'breast' },
          // Wing feather lines
          { d: 'M65 44 L82 42 M66 47 L85 45 M68 50 L88 48 M70 53 L90 52', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Tail feathers
          { d: 'M88 54 L108 49 M90 56 L110 52 M89 58 L108 56', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Breast feather texture
          { d: 'M52 60 Q56 58 60 60 M50 65 Q55 63 62 65 M48 70 Q54 68 60 70 M50 75 Q56 73 62 76 M52 80 Q58 78 65 82', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Head stripe
          { d: 'M40 20 Q45 22 50 28 Q52 32 55 35', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  // ── Leaping Koi ──────────────────────────────────────────
  {
    id: 'koi-leaping',
    name: 'Leaping Koi',
    category: 'fauna',
    viewBox: '0 0 160 220',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'belly', defaultPaletteSlot: 4 },
      { id: 'fin', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — dynamic upward arc, tail lower-left, head upper-right
          { d: 'M52 188 Q30 158 40 125 Q48 92 68 62 Q85 38 108 26 Q122 20 128 28 Q134 36 126 46 Q112 40 95 52 Q75 68 62 98 Q50 128 48 162 Q46 178 52 192 Z', type: 'fill', zone: 'body' },
          // Belly
          { d: 'M60 160 Q50 135 55 108 Q60 85 74 64 Q64 88 56 112 Q50 140 58 164 Z', type: 'fill', zone: 'belly' },
          // Dorsal fin
          { d: 'M44 118 Q30 108 34 92 Q40 100 44 112 Z', type: 'fill', zone: 'fin' },
          // Tail fan — two lobes
          { d: 'M48 185 Q26 198 15 215 Q28 210 44 196 Z', type: 'fill', zone: 'fin' },
          { d: 'M54 190 Q40 208 34 220 Q48 214 58 200 Z', type: 'fill', zone: 'fin' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M52 188 Q30 158 40 125 Q48 92 68 62 Q85 38 108 26 Q122 20 128 28 Q134 36 126 46 Q112 40 95 52 Q75 68 62 98 Q50 128 48 162 Q46 178 52 192 Z', type: 'fill', zone: 'body' },
          { d: 'M60 160 Q50 135 55 108 Q60 85 74 64 Q64 88 56 112 Q50 140 58 164 Z', type: 'fill', zone: 'belly' },
          { d: 'M44 118 Q30 108 34 92 Q40 100 44 112 Z', type: 'fill', zone: 'fin' },
          { d: 'M48 185 Q26 198 15 215 Q28 210 44 196 Z', type: 'fill', zone: 'fin' },
          { d: 'M54 190 Q40 208 34 220 Q48 214 58 200 Z', type: 'fill', zone: 'fin' },
          // Body outline
          { d: 'M52 188 Q30 158 40 125 Q48 92 68 62 Q85 38 108 26 Q122 20 128 28 Q134 36 126 46 Q112 40 95 52 Q75 68 62 98 Q50 128 48 162 Q46 178 52 192 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Eye
          { d: 'M112 30 A3 3 0 1 1 111.99 30 Z', type: 'fill', zone: 'detail' },
          // Gill line
          { d: 'M100 38 Q102 48 98 56', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M52 188 Q30 158 40 125 Q48 92 68 62 Q85 38 108 26 Q122 20 128 28 Q134 36 126 46 Q112 40 95 52 Q75 68 62 98 Q50 128 48 162 Q46 178 52 192 Z', type: 'fill', zone: 'body' },
          { d: 'M60 160 Q50 135 55 108 Q60 85 74 64 Q64 88 56 112 Q50 140 58 164 Z', type: 'fill', zone: 'belly' },
          { d: 'M44 118 Q30 108 34 92 Q40 100 44 112 Z', type: 'fill', zone: 'fin' },
          { d: 'M48 185 Q26 198 15 215 Q28 210 44 196 Z', type: 'fill', zone: 'fin' },
          { d: 'M54 190 Q40 208 34 220 Q48 214 58 200 Z', type: 'fill', zone: 'fin' },
          { d: 'M52 188 Q30 158 40 125 Q48 92 68 62 Q85 38 108 26 Q122 20 128 28 Q134 36 126 46 Q112 40 95 52 Q75 68 62 98 Q50 128 48 162 Q46 178 52 192 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M112 30 A3 3 0 1 1 111.99 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M100 38 Q102 48 98 56', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Scale pattern following body curve
          { d: 'M78 60 Q82 55 88 60 M86 68 Q92 63 96 68 M72 72 Q78 67 82 72 M80 80 Q86 75 90 80 M66 82 Q72 77 76 82 M74 92 Q80 87 84 92 M60 96 Q66 91 70 96 M68 106 Q74 101 78 106 M56 112 Q62 107 66 112', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Fin rays
          { d: 'M38 108 L32 96 M40 104 L35 90 M42 100 L38 88', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M36 192 L20 208 M42 196 L30 212 M46 198 L36 216', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Pectoral fin
          { d: 'M70 78 Q62 88 56 94 Q60 86 68 80', type: 'stroke', zone: 'fin', strokeWidth: 1 },
          // Water splash
          { d: 'M22 205 Q26 198 34 202 Q42 196 50 203 Q46 208 36 210 Q28 210 22 205 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  // ── Koi Overhead ──────────────────────────────────────────
  {
    id: 'koi-overhead',
    name: 'Koi (Overhead)',
    category: 'fauna',
    viewBox: '0 0 140 220',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'belly', defaultPaletteSlot: 4 },
      { id: 'fin', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — symmetrical top-down teardrop
          { d: 'M70 15 Q92 20 105 42 Q115 65 118 90 Q118 118 110 142 Q100 162 88 172 L70 180 L52 172 Q40 162 30 142 Q22 118 22 90 Q25 65 35 42 Q48 20 70 15 Z', type: 'fill', zone: 'body' },
          // Belly — central lighter stripe
          { d: 'M70 28 Q84 34 90 55 Q95 78 95 100 Q95 122 90 142 Q84 160 70 170 Q56 160 50 142 Q45 122 45 100 Q45 78 50 55 Q56 34 70 28 Z', type: 'fill', zone: 'belly' },
          // Left pectoral fin
          { d: 'M30 78 Q15 65 8 52 Q12 68 22 80 Q28 86 32 82 Z', type: 'fill', zone: 'fin' },
          // Right pectoral fin
          { d: 'M110 78 Q125 65 132 52 Q128 68 118 80 Q112 86 108 82 Z', type: 'fill', zone: 'fin' },
          // Tail fan
          { d: 'M88 172 Q102 186 110 205 Q92 198 70 195 Q48 198 30 205 Q38 186 52 172 Z', type: 'fill', zone: 'fin' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 15 Q92 20 105 42 Q115 65 118 90 Q118 118 110 142 Q100 162 88 172 L70 180 L52 172 Q40 162 30 142 Q22 118 22 90 Q25 65 35 42 Q48 20 70 15 Z', type: 'fill', zone: 'body' },
          { d: 'M70 28 Q84 34 90 55 Q95 78 95 100 Q95 122 90 142 Q84 160 70 170 Q56 160 50 142 Q45 122 45 100 Q45 78 50 55 Q56 34 70 28 Z', type: 'fill', zone: 'belly' },
          { d: 'M30 78 Q15 65 8 52 Q12 68 22 80 Q28 86 32 82 Z', type: 'fill', zone: 'fin' },
          { d: 'M110 78 Q125 65 132 52 Q128 68 118 80 Q112 86 108 82 Z', type: 'fill', zone: 'fin' },
          { d: 'M88 172 Q102 186 110 205 Q92 198 70 195 Q48 198 30 205 Q38 186 52 172 Z', type: 'fill', zone: 'fin' },
          // Body outline
          { d: 'M70 15 Q92 20 105 42 Q115 65 118 90 Q118 118 110 142 Q100 162 88 172 L70 180 L52 172 Q40 162 30 142 Q22 118 22 90 Q25 65 35 42 Q48 20 70 15 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          // Eyes
          { d: 'M56 32 A3 3 0 1 1 55.99 32 Z', type: 'fill', zone: 'detail' },
          { d: 'M84 32 A3 3 0 1 1 83.99 32 Z', type: 'fill', zone: 'detail' },
          // Mouth
          { d: 'M64 17 Q70 12 76 17', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Gill lines
          { d: 'M48 38 Q44 50 48 62', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M92 38 Q96 50 92 62', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 15 Q92 20 105 42 Q115 65 118 90 Q118 118 110 142 Q100 162 88 172 L70 180 L52 172 Q40 162 30 142 Q22 118 22 90 Q25 65 35 42 Q48 20 70 15 Z', type: 'fill', zone: 'body' },
          { d: 'M70 28 Q84 34 90 55 Q95 78 95 100 Q95 122 90 142 Q84 160 70 170 Q56 160 50 142 Q45 122 45 100 Q45 78 50 55 Q56 34 70 28 Z', type: 'fill', zone: 'belly' },
          { d: 'M30 78 Q15 65 8 52 Q12 68 22 80 Q28 86 32 82 Z', type: 'fill', zone: 'fin' },
          { d: 'M110 78 Q125 65 132 52 Q128 68 118 80 Q112 86 108 82 Z', type: 'fill', zone: 'fin' },
          { d: 'M88 172 Q102 186 110 205 Q92 198 70 195 Q48 198 30 205 Q38 186 52 172 Z', type: 'fill', zone: 'fin' },
          { d: 'M70 15 Q92 20 105 42 Q115 65 118 90 Q118 118 110 142 Q100 162 88 172 L70 180 L52 172 Q40 162 30 142 Q22 118 22 90 Q25 65 35 42 Q48 20 70 15 Z', type: 'stroke', zone: 'detail', strokeWidth: 2 },
          { d: 'M56 32 A3 3 0 1 1 55.99 32 Z', type: 'fill', zone: 'detail' },
          { d: 'M84 32 A3 3 0 1 1 83.99 32 Z', type: 'fill', zone: 'detail' },
          { d: 'M64 17 Q70 12 76 17', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M48 38 Q44 50 48 62', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M92 38 Q96 50 92 62', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Scale pattern — symmetric rows
          { d: 'M52 55 Q57 50 62 55 M62 55 Q67 50 72 55 M72 55 Q77 50 82 55 M82 55 Q87 50 92 55 M48 70 Q53 65 58 70 M58 70 Q63 65 68 70 M68 70 Q73 65 78 70 M78 70 Q83 65 88 70 M88 70 Q93 65 98 70 M46 85 Q51 80 56 85 M56 85 Q61 80 66 85 M66 85 Q71 80 76 85 M76 85 Q81 80 86 85 M86 85 Q91 80 96 85 M48 100 Q53 95 58 100 M58 100 Q63 95 68 100 M68 100 Q73 95 78 100 M78 100 Q83 95 88 100 M50 115 Q55 110 60 115 M60 115 Q65 110 70 115 M70 115 Q75 110 80 115 M80 115 Q85 110 90 115 M54 130 Q59 125 64 130 M64 130 Q69 125 74 130 M74 130 Q79 125 84 130', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // Tail fin rays
          { d: 'M70 180 L70 195 M80 175 L92 195 M60 175 L48 195 M86 173 L102 200 M54 173 L38 200', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Pectoral fin rays
          { d: 'M26 76 L12 60 M24 80 L10 68 M22 84 L8 75', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M114 76 L128 60 M116 80 L130 68 M118 84 L132 75', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Lateral line
          { d: 'M70 35 L70 170', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Ventral fins
          { d: 'M58 130 Q48 138 42 145 Q48 140 56 132', type: 'stroke', zone: 'fin', strokeWidth: 0.8 },
          { d: 'M82 130 Q92 138 98 145 Q92 140 84 132', type: 'stroke', zone: 'fin', strokeWidth: 0.8 },
        ],
      },
    ],
  },

  // ── Standing Crane ──────────────────────────────────────────
  {
    id: 'crane-standing',
    name: 'Standing Crane',
    category: 'fauna',
    viewBox: '0 0 120 260',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 3 },
      { id: 'accent', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body
          { d: 'M42 92 Q52 78 68 76 Q84 74 92 82 Q98 92 95 104 Q90 114 75 118 Q58 120 46 112 Q36 102 42 92 Z', type: 'fill', zone: 'body' },
          // Neck + head — S-curve
          { d: 'M48 92 Q40 72 34 50 Q28 32 30 18 Q34 10 40 14 Q46 22 40 38 Q36 52 44 75 Q48 88 50 94 Z', type: 'fill', zone: 'body' },
          // Red crown
          { d: 'M32 14 Q36 8 42 12 Q40 16 36 18 Q32 16 32 14 Z', type: 'fill', zone: 'accent' },
          // Wing folded
          { d: 'M55 86 Q70 80 86 84 Q96 90 92 102 Q86 110 72 108 Q58 104 55 94 Z', type: 'fill', zone: 'wing' },
          // Tail feathers
          { d: 'M90 95 Q102 88 112 84 Q116 82 114 90 Q108 96 96 102 Z', type: 'fill', zone: 'detail' },
          // Left leg
          { d: 'M52 118 L48 200 L46 248 L44 255 L50 255 L52 248 L54 200 L56 118 Z', type: 'fill', zone: 'detail' },
          // Right leg
          { d: 'M64 118 L60 200 L58 248 L56 255 L62 255 L64 248 L66 200 L68 118 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M42 92 Q52 78 68 76 Q84 74 92 82 Q98 92 95 104 Q90 114 75 118 Q58 120 46 112 Q36 102 42 92 Z', type: 'fill', zone: 'body' },
          { d: 'M48 92 Q40 72 34 50 Q28 32 30 18 Q34 10 40 14 Q46 22 40 38 Q36 52 44 75 Q48 88 50 94 Z', type: 'fill', zone: 'body' },
          { d: 'M32 14 Q36 8 42 12 Q40 16 36 18 Q32 16 32 14 Z', type: 'fill', zone: 'accent' },
          { d: 'M55 86 Q70 80 86 84 Q96 90 92 102 Q86 110 72 108 Q58 104 55 94 Z', type: 'fill', zone: 'wing' },
          { d: 'M90 95 Q102 88 112 84 Q116 82 114 90 Q108 96 96 102 Z', type: 'fill', zone: 'detail' },
          { d: 'M52 118 L48 200 L46 248 L44 255 L50 255 L52 248 L54 200 L56 118 Z', type: 'fill', zone: 'detail' },
          { d: 'M64 118 L60 200 L58 248 L56 255 L62 255 L64 248 L66 200 L68 118 Z', type: 'fill', zone: 'detail' },
          // Body outline
          { d: 'M42 92 Q52 78 68 76 Q84 74 92 82 Q98 92 95 104 Q90 114 75 118 Q58 120 46 112 Q36 102 42 92 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Neck outline
          { d: 'M48 92 Q40 72 34 50 Q28 32 30 18', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eye
          { d: 'M35 20 A2 2 0 1 1 34.99 20 Z', type: 'fill', zone: 'detail' },
          // Beak
          { d: 'M30 16 L20 14 L30 19', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M42 92 Q52 78 68 76 Q84 74 92 82 Q98 92 95 104 Q90 114 75 118 Q58 120 46 112 Q36 102 42 92 Z', type: 'fill', zone: 'body' },
          { d: 'M48 92 Q40 72 34 50 Q28 32 30 18 Q34 10 40 14 Q46 22 40 38 Q36 52 44 75 Q48 88 50 94 Z', type: 'fill', zone: 'body' },
          { d: 'M32 14 Q36 8 42 12 Q40 16 36 18 Q32 16 32 14 Z', type: 'fill', zone: 'accent' },
          { d: 'M55 86 Q70 80 86 84 Q96 90 92 102 Q86 110 72 108 Q58 104 55 94 Z', type: 'fill', zone: 'wing' },
          { d: 'M90 95 Q102 88 112 84 Q116 82 114 90 Q108 96 96 102 Z', type: 'fill', zone: 'detail' },
          { d: 'M52 118 L48 200 L46 248 L44 255 L50 255 L52 248 L54 200 L56 118 Z', type: 'fill', zone: 'detail' },
          { d: 'M64 118 L60 200 L58 248 L56 255 L62 255 L64 248 L66 200 L68 118 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 92 Q52 78 68 76 Q84 74 92 82 Q98 92 95 104 Q90 114 75 118 Q58 120 46 112 Q36 102 42 92 Z', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M48 92 Q40 72 34 50 Q28 32 30 18', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M35 20 A2 2 0 1 1 34.99 20 Z', type: 'fill', zone: 'detail' },
          { d: 'M30 16 L20 14 L30 19', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Wing feather lines
          { d: 'M60 88 L76 82 M62 92 L80 86 M64 96 L84 90 M66 100 L86 95 M68 104 L88 100', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Tail feather detail
          { d: 'M92 94 L106 86 M94 96 L108 90 M96 98 L112 88', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Breast feather texture
          { d: 'M50 86 Q55 84 60 86 M48 90 Q53 88 58 90 M46 94 Q52 92 56 94 M44 98 Q50 96 54 98 M44 102 Q50 100 54 102', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Leg joint details
          { d: 'M47 200 Q50 198 53 200 M59 200 Q62 198 65 200', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Foot toes
          { d: 'M44 255 L40 258 M44 255 L44 260 M50 255 L52 258', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M56 255 L52 258 M56 255 L56 260 M62 255 L64 258', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ── Landing Crane ──────────────────────────────────────────
  {
    id: 'crane-landing',
    name: 'Landing Crane',
    category: 'fauna',
    viewBox: '0 0 280 200',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 3 },
      { id: 'accent', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body
          { d: 'M125 72 Q135 62 150 60 Q165 58 172 64 Q178 72 175 82 Q170 90 155 94 Q138 96 128 88 Q120 80 125 72 Z', type: 'fill', zone: 'body' },
          // Neck + head reaching forward
          { d: 'M128 76 Q115 68 100 58 Q88 48 78 40 Q72 36 68 38 Q65 42 70 44 Q78 46 88 52 Q102 62 118 72 Z', type: 'fill', zone: 'body' },
          // Red crown
          { d: 'M70 36 Q74 30 78 34 Q76 38 72 40 Q68 38 70 36 Z', type: 'fill', zone: 'accent' },
          // Left wing — up and back
          { d: 'M130 70 Q108 42 82 22 Q62 8 42 4 Q28 2 22 8 Q28 14 45 16 Q65 20 88 40 Q110 56 128 72 Z', type: 'fill', zone: 'wing' },
          // Right wing — up and forward
          { d: 'M145 68 Q168 40 195 22 Q218 8 240 4 Q256 2 260 10 Q254 18 238 20 Q218 24 195 42 Q172 58 150 72 Z', type: 'fill', zone: 'wing' },
          // Tail
          { d: 'M170 70 Q185 62 198 58 Q205 56 202 64 Q195 70 180 76 Z', type: 'fill', zone: 'detail' },
          // Left leg dangling
          { d: 'M140 92 Q138 115 134 140 Q132 158 128 178 Q126 185 130 188 Q134 185 136 178 Q138 158 142 140 Q144 115 144 92 Z', type: 'fill', zone: 'detail' },
          // Right leg dangling
          { d: 'M155 92 Q152 115 150 140 Q148 158 146 178 Q144 185 148 188 Q152 185 154 178 Q156 158 158 140 Q160 115 158 92 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M125 72 Q135 62 150 60 Q165 58 172 64 Q178 72 175 82 Q170 90 155 94 Q138 96 128 88 Q120 80 125 72 Z', type: 'fill', zone: 'body' },
          { d: 'M128 76 Q115 68 100 58 Q88 48 78 40 Q72 36 68 38 Q65 42 70 44 Q78 46 88 52 Q102 62 118 72 Z', type: 'fill', zone: 'body' },
          { d: 'M70 36 Q74 30 78 34 Q76 38 72 40 Q68 38 70 36 Z', type: 'fill', zone: 'accent' },
          { d: 'M130 70 Q108 42 82 22 Q62 8 42 4 Q28 2 22 8 Q28 14 45 16 Q65 20 88 40 Q110 56 128 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M145 68 Q168 40 195 22 Q218 8 240 4 Q256 2 260 10 Q254 18 238 20 Q218 24 195 42 Q172 58 150 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M170 70 Q185 62 198 58 Q205 56 202 64 Q195 70 180 76 Z', type: 'fill', zone: 'detail' },
          { d: 'M140 92 Q138 115 134 140 Q132 158 128 178 Q126 185 130 188 Q134 185 136 178 Q138 158 142 140 Q144 115 144 92 Z', type: 'fill', zone: 'detail' },
          { d: 'M155 92 Q152 115 150 140 Q148 158 146 178 Q144 185 148 188 Q152 185 154 178 Q156 158 158 140 Q160 115 158 92 Z', type: 'fill', zone: 'detail' },
          // Wing outlines
          { d: 'M130 70 Q108 42 82 22 Q62 8 42 4 Q28 2 22 8 Q28 14 45 16 Q65 20 88 40 Q110 56 128 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M145 68 Q168 40 195 22 Q218 8 240 4 Q256 2 260 10 Q254 18 238 20 Q218 24 195 42 Q172 58 150 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Eye
          { d: 'M72 40 A1.5 1.5 0 1 1 71.99 40 Z', type: 'fill', zone: 'detail' },
          // Beak
          { d: 'M68 38 L60 36 L68 42', type: 'stroke', zone: 'detail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M125 72 Q135 62 150 60 Q165 58 172 64 Q178 72 175 82 Q170 90 155 94 Q138 96 128 88 Q120 80 125 72 Z', type: 'fill', zone: 'body' },
          { d: 'M128 76 Q115 68 100 58 Q88 48 78 40 Q72 36 68 38 Q65 42 70 44 Q78 46 88 52 Q102 62 118 72 Z', type: 'fill', zone: 'body' },
          { d: 'M70 36 Q74 30 78 34 Q76 38 72 40 Q68 38 70 36 Z', type: 'fill', zone: 'accent' },
          { d: 'M130 70 Q108 42 82 22 Q62 8 42 4 Q28 2 22 8 Q28 14 45 16 Q65 20 88 40 Q110 56 128 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M145 68 Q168 40 195 22 Q218 8 240 4 Q256 2 260 10 Q254 18 238 20 Q218 24 195 42 Q172 58 150 72 Z', type: 'fill', zone: 'wing' },
          { d: 'M170 70 Q185 62 198 58 Q205 56 202 64 Q195 70 180 76 Z', type: 'fill', zone: 'detail' },
          { d: 'M140 92 Q138 115 134 140 Q132 158 128 178 Q126 185 130 188 Q134 185 136 178 Q138 158 142 140 Q144 115 144 92 Z', type: 'fill', zone: 'detail' },
          { d: 'M155 92 Q152 115 150 140 Q148 158 146 178 Q144 185 148 188 Q152 185 154 178 Q156 158 158 140 Q160 115 158 92 Z', type: 'fill', zone: 'detail' },
          { d: 'M130 70 Q108 42 82 22 Q62 8 42 4 Q28 2 22 8 Q28 14 45 16 Q65 20 88 40 Q110 56 128 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M145 68 Q168 40 195 22 Q218 8 240 4 Q256 2 260 10 Q254 18 238 20 Q218 24 195 42 Q172 58 150 72', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M72 40 A1.5 1.5 0 1 1 71.99 40 Z', type: 'fill', zone: 'detail' },
          { d: 'M68 38 L60 36 L68 42', type: 'stroke', zone: 'detail', strokeWidth: 1 },
          // Left wing feather details
          { d: 'M118 58 L100 38 M112 52 L90 28 M106 48 L80 18 M100 44 L68 10 M94 42 L56 6', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Right wing feather details
          { d: 'M158 58 L180 38 M164 52 L192 28 M170 48 L202 18 M176 44 L215 10 M182 42 L228 6', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Black wingtips
          { d: 'M22 8 Q24 4 32 4 Q40 5 42 4 L28 2 Q22 2 22 8 Z', type: 'fill', zone: 'detail' },
          { d: 'M260 10 Q258 4 250 4 Q242 5 240 4 L256 2 Q262 2 260 10 Z', type: 'fill', zone: 'detail' },
          // Breast feather texture
          { d: 'M132 76 Q138 74 144 76 M130 80 Q136 78 142 80 M128 84 Q135 82 140 84 M130 88 Q136 86 142 88', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Leg joint details
          { d: 'M132 140 Q136 137 140 140 M148 140 Q152 137 156 140', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

];
