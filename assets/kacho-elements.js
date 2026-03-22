// Mokuri — Kacho-e Style Pack (花鳥画 Birds & Flowers)
// Close-up nature compositions inspired by the kacho-e tradition.
// Intimate pairings of birds and flowers with organic curves.

const MOKURI_KACHOE_ELEMENTS = [

  // ============================================================
  //  BIRDS
  // ============================================================

  {
    id: 'heron-standing',
    name: 'Heron',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 140 300',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 3 },
      { id: 'accent', defaultPaletteSlot: 0 },
      { id: 'detail', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — tall elegant silhouette
          { d: 'M70 20 Q78 18 82 22 Q88 30 86 45 Q84 65 80 80 Q78 95 76 120 Q74 150 72 180 Q70 200 68 220 L68 250 Q66 260 60 265 L55 270 Q50 275 48 280 L48 295 Q50 298 55 298 L65 296 Q68 294 68 290 L68 270 Q70 260 72 250 Q74 240 76 230 Q80 210 82 190 Q86 160 88 130 Q90 100 86 75 Q82 50 76 35 Q72 22 70 20 Z', type: 'fill', zone: 'body' },
          // Head and beak
          { d: 'M70 20 Q66 16 62 14 Q56 10 50 12 Q44 14 42 20 Q40 26 44 30 Q48 34 56 32 Q62 30 66 26 Q68 22 70 20 Z', type: 'fill', zone: 'body' },
          // Beak
          { d: 'M42 20 Q36 18 28 16 Q22 15 18 17 Q14 20 18 22 Q22 23 28 22 Q34 22 42 20 Z', type: 'fill', zone: 'accent' },
          // Wing
          { d: 'M82 80 Q90 85 96 95 Q102 108 100 125 Q98 140 92 155 Q86 168 80 175 Q76 178 72 175 Q68 170 70 160 Q74 145 78 130 Q82 115 84 100 Q85 90 82 80 Z', type: 'fill', zone: 'wing' },
          // Left leg
          { d: 'M60 265 Q58 275 56 285 Q55 292 56 298 Q58 300 62 298 L64 290 Q64 280 62 270 Z', type: 'fill', zone: 'detail' },
          // Right leg
          { d: 'M68 270 Q70 280 70 290 Q70 296 72 298 Q74 300 76 298 L76 290 Q76 280 74 270 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 20 Q78 18 82 22 Q88 30 86 45 Q84 65 80 80 Q78 95 76 120 Q74 150 72 180 Q70 200 68 220 L68 250 Q66 260 60 265 L55 270 Q50 275 48 280 L48 295 Q50 298 55 298 L65 296 Q68 294 68 290 L68 270 Q70 260 72 250 Q74 240 76 230 Q80 210 82 190 Q86 160 88 130 Q90 100 86 75 Q82 50 76 35 Q72 22 70 20 Z', type: 'fill', zone: 'body' },
          { d: 'M70 20 Q66 16 62 14 Q56 10 50 12 Q44 14 42 20 Q40 26 44 30 Q48 34 56 32 Q62 30 66 26 Q68 22 70 20 Z', type: 'fill', zone: 'body' },
          { d: 'M42 20 Q36 18 28 16 Q22 15 18 17 Q14 20 18 22 Q22 23 28 22 Q34 22 42 20 Z', type: 'fill', zone: 'accent' },
          { d: 'M82 80 Q90 85 96 95 Q102 108 100 125 Q98 140 92 155 Q86 168 80 175 Q76 178 72 175 Q68 170 70 160 Q74 145 78 130 Q82 115 84 100 Q85 90 82 80 Z', type: 'fill', zone: 'wing' },
          { d: 'M60 265 Q58 275 56 285 Q55 292 56 298 Q58 300 62 298 L64 290 Q64 280 62 270 Z', type: 'fill', zone: 'detail' },
          { d: 'M68 270 Q70 280 70 290 Q70 296 72 298 Q74 300 76 298 L76 290 Q76 280 74 270 Z', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M52 20 A2.5,2.5 0 1,1 49 20 A2.5,2.5 0 1,1 52 20 Z', type: 'fill', zone: 'accent' },
          // Body outline
          { d: 'M70 20 Q78 18 82 22 Q88 30 86 45 Q84 65 80 80 Q78 95 76 120 Q74 150 72 180 Q70 200 68 220 L68 250', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          // Wing edge
          { d: 'M82 80 Q90 85 96 95 Q102 108 100 125 Q98 140 92 155 Q86 168 80 175', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          // Neck S-curve
          { d: 'M56 32 Q60 40 64 55 Q68 70 72 80', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 20 Q78 18 82 22 Q88 30 86 45 Q84 65 80 80 Q78 95 76 120 Q74 150 72 180 Q70 200 68 220 L68 250 Q66 260 60 265 L55 270 Q50 275 48 280 L48 295 Q50 298 55 298 L65 296 Q68 294 68 290 L68 270 Q70 260 72 250 Q74 240 76 230 Q80 210 82 190 Q86 160 88 130 Q90 100 86 75 Q82 50 76 35 Q72 22 70 20 Z', type: 'fill', zone: 'body' },
          { d: 'M70 20 Q66 16 62 14 Q56 10 50 12 Q44 14 42 20 Q40 26 44 30 Q48 34 56 32 Q62 30 66 26 Q68 22 70 20 Z', type: 'fill', zone: 'body' },
          { d: 'M42 20 Q36 18 28 16 Q22 15 18 17 Q14 20 18 22 Q22 23 28 22 Q34 22 42 20 Z', type: 'fill', zone: 'accent' },
          { d: 'M82 80 Q90 85 96 95 Q102 108 100 125 Q98 140 92 155 Q86 168 80 175 Q76 178 72 175 Q68 170 70 160 Q74 145 78 130 Q82 115 84 100 Q85 90 82 80 Z', type: 'fill', zone: 'wing' },
          { d: 'M60 265 Q58 275 56 285 Q55 292 56 298 Q58 300 62 298 L64 290 Q64 280 62 270 Z', type: 'fill', zone: 'detail' },
          { d: 'M68 270 Q70 280 70 290 Q70 296 72 298 Q74 300 76 298 L76 290 Q76 280 74 270 Z', type: 'fill', zone: 'detail' },
          { d: 'M52 20 A2.5,2.5 0 1,1 49 20 A2.5,2.5 0 1,1 52 20 Z', type: 'fill', zone: 'accent' },
          { d: 'M70 20 Q78 18 82 22 Q88 30 86 45 Q84 65 80 80 Q78 95 76 120 Q74 150 72 180 Q70 200 68 220 L68 250', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          { d: 'M82 80 Q90 85 96 95 Q102 108 100 125 Q98 140 92 155 Q86 168 80 175', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M56 32 Q60 40 64 55 Q68 70 72 80', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Breast feathers
          { d: 'M72 100 Q70 108 68 116 M74 110 Q72 118 70 126 M76 120 Q74 128 72 136 M70 130 Q68 138 66 146', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Wing feather lines
          { d: 'M86 95 Q90 105 92 115 M88 105 Q92 115 94 125 M90 115 Q94 125 95 135 M86 128 Q90 138 92 148', type: 'stroke', zone: 'wing', strokeWidth: 0.5 },
          // Leg joints
          { d: 'M58 278 Q56 280 58 282 M70 280 Q72 282 70 284', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Tail feathers
          { d: 'M80 172 Q84 180 86 190 M78 170 Q82 178 84 188 M76 168 Q80 176 82 186', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  {
    id: 'bush-warbler',
    name: 'Bush Warbler',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 100 90',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'breast', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Plump body
          { d: 'M50 30 Q60 26 68 30 Q76 36 78 46 Q80 56 76 64 Q72 72 64 76 Q56 78 48 76 Q40 72 36 64 Q32 56 34 46 Q36 36 44 30 Q48 28 50 30 Z', type: 'fill', zone: 'body' },
          // Breast
          { d: 'M48 50 Q44 56 42 62 Q40 68 44 72 Q48 76 54 76 Q60 74 62 68 Q64 62 62 56 Q58 50 52 48 Q50 48 48 50 Z', type: 'fill', zone: 'breast' },
          // Head
          { d: 'M50 30 Q46 24 42 22 Q36 20 32 24 Q28 28 30 34 Q32 38 38 38 Q44 36 50 30 Z', type: 'fill', zone: 'body' },
          // Beak
          { d: 'M30 28 Q26 26 22 26 Q18 27 20 30 Q22 32 26 32 Q30 31 30 28 Z', type: 'fill', zone: 'detail' },
          // Wing
          { d: 'M56 36 Q64 38 70 42 Q76 48 78 56 Q78 62 74 66 Q70 68 66 66 Q62 62 60 56 Q58 48 56 40 Q56 38 56 36 Z', type: 'fill', zone: 'wing' },
          // Tail
          { d: 'M72 64 Q78 66 84 64 Q88 62 90 58 Q88 56 84 58 Q80 60 74 62 Z', type: 'fill', zone: 'wing' },
          // Legs
          { d: 'M48 76 Q46 80 44 84 Q44 86 46 86 L50 84 Q50 82 50 78 Z', type: 'fill', zone: 'detail' },
          { d: 'M54 76 Q56 80 58 84 Q58 86 56 86 L52 84 Q52 82 52 78 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M50 30 Q60 26 68 30 Q76 36 78 46 Q80 56 76 64 Q72 72 64 76 Q56 78 48 76 Q40 72 36 64 Q32 56 34 46 Q36 36 44 30 Q48 28 50 30 Z', type: 'fill', zone: 'body' },
          { d: 'M48 50 Q44 56 42 62 Q40 68 44 72 Q48 76 54 76 Q60 74 62 68 Q64 62 62 56 Q58 50 52 48 Q50 48 48 50 Z', type: 'fill', zone: 'breast' },
          { d: 'M50 30 Q46 24 42 22 Q36 20 32 24 Q28 28 30 34 Q32 38 38 38 Q44 36 50 30 Z', type: 'fill', zone: 'body' },
          { d: 'M30 28 Q26 26 22 26 Q18 27 20 30 Q22 32 26 32 Q30 31 30 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M56 36 Q64 38 70 42 Q76 48 78 56 Q78 62 74 66 Q70 68 66 66 Q62 62 60 56 Q58 48 56 40 Q56 38 56 36 Z', type: 'fill', zone: 'wing' },
          { d: 'M72 64 Q78 66 84 64 Q88 62 90 58 Q88 56 84 58 Q80 60 74 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M48 76 Q46 80 44 84 Q44 86 46 86 L50 84 Q50 82 50 78 Z', type: 'fill', zone: 'detail' },
          { d: 'M54 76 Q56 80 58 84 Q58 86 56 86 L52 84 Q52 82 52 78 Z', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M36 28 A2,2 0 1,1 34 28 A2,2 0 1,1 36 28 Z', type: 'fill', zone: 'detail' },
          // Body outline
          { d: 'M50 30 Q60 26 68 30 Q76 36 78 46 Q80 56 76 64 Q72 72 64 76', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Wing edge
          { d: 'M56 36 Q64 38 70 42 Q76 48 78 56 Q78 62 74 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M50 30 Q60 26 68 30 Q76 36 78 46 Q80 56 76 64 Q72 72 64 76 Q56 78 48 76 Q40 72 36 64 Q32 56 34 46 Q36 36 44 30 Q48 28 50 30 Z', type: 'fill', zone: 'body' },
          { d: 'M48 50 Q44 56 42 62 Q40 68 44 72 Q48 76 54 76 Q60 74 62 68 Q64 62 62 56 Q58 50 52 48 Q50 48 48 50 Z', type: 'fill', zone: 'breast' },
          { d: 'M50 30 Q46 24 42 22 Q36 20 32 24 Q28 28 30 34 Q32 38 38 38 Q44 36 50 30 Z', type: 'fill', zone: 'body' },
          { d: 'M30 28 Q26 26 22 26 Q18 27 20 30 Q22 32 26 32 Q30 31 30 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M56 36 Q64 38 70 42 Q76 48 78 56 Q78 62 74 66 Q70 68 66 66 Q62 62 60 56 Q58 48 56 40 Q56 38 56 36 Z', type: 'fill', zone: 'wing' },
          { d: 'M72 64 Q78 66 84 64 Q88 62 90 58 Q88 56 84 58 Q80 60 74 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M48 76 Q46 80 44 84 Q44 86 46 86 L50 84 Q50 82 50 78 Z', type: 'fill', zone: 'detail' },
          { d: 'M54 76 Q56 80 58 84 Q58 86 56 86 L52 84 Q52 82 52 78 Z', type: 'fill', zone: 'detail' },
          { d: 'M36 28 A2,2 0 1,1 34 28 A2,2 0 1,1 36 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M50 30 Q60 26 68 30 Q76 36 78 46 Q80 56 76 64 Q72 72 64 76', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          { d: 'M56 36 Q64 38 70 42 Q76 48 78 56 Q78 62 74 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Breast feather texture
          { d: 'M48 54 Q46 58 46 62 M50 56 Q48 60 48 64 M52 58 Q50 62 50 66 M54 60 Q52 64 52 68', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Wing feather lines
          { d: 'M60 42 Q64 46 66 52 M62 46 Q66 50 68 56 M64 50 Q68 54 70 60 M66 54 Q70 58 72 64', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail feather detail
          { d: 'M76 62 Q80 62 84 60 M74 64 Q78 64 82 62', type: 'stroke', zone: 'wing', strokeWidth: 0.3 },
          // Head crown stripe
          { d: 'M38 24 Q42 22 46 24', type: 'stroke', zone: 'body', strokeWidth: 0.5 },
          // Toes
          { d: 'M44 85 Q42 86 40 86 M46 85 Q48 87 50 86 M56 85 Q54 86 52 86 M58 85 Q60 87 62 86', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'swallow-flight',
    name: 'Swallow',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 220 120',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'breast', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body
          { d: 'M100 50 Q108 46 114 48 Q120 52 118 58 Q116 64 110 66 Q104 68 98 64 Q94 60 96 54 Q98 50 100 50 Z', type: 'fill', zone: 'body' },
          // Breast
          { d: 'M102 56 Q100 60 98 64 Q96 68 100 68 Q104 68 106 64 Q108 60 106 56 Q104 54 102 56 Z', type: 'fill', zone: 'breast' },
          // Left wing
          { d: 'M96 52 Q80 40 60 30 Q44 22 28 18 Q16 14 8 16 Q4 18 8 22 Q16 28 30 34 Q48 42 66 48 Q82 52 96 52 Z', type: 'fill', zone: 'wing' },
          // Right wing
          { d: 'M116 52 Q132 40 152 32 Q168 24 184 20 Q196 18 204 20 Q210 22 206 26 Q198 32 184 38 Q166 46 148 52 Q132 56 116 54 Z', type: 'fill', zone: 'wing' },
          // Forked tail
          { d: 'M98 64 Q92 70 86 80 Q82 88 78 100 Q76 106 80 104 Q84 98 90 88 Q96 78 100 68 Z', type: 'fill', zone: 'body' },
          { d: 'M102 64 Q108 72 112 82 Q116 92 120 102 Q122 106 118 104 Q114 98 108 88 Q102 78 100 68 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M100 50 Q96 46 92 44 Q86 42 84 46 Q82 50 86 52 Q90 54 96 52 Z', type: 'fill', zone: 'body' },
          // Throat patch
          { d: 'M92 48 Q88 50 88 54 Q90 56 94 54 Q96 52 94 48 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M100 50 Q108 46 114 48 Q120 52 118 58 Q116 64 110 66 Q104 68 98 64 Q94 60 96 54 Q98 50 100 50 Z', type: 'fill', zone: 'body' },
          { d: 'M102 56 Q100 60 98 64 Q96 68 100 68 Q104 68 106 64 Q108 60 106 56 Q104 54 102 56 Z', type: 'fill', zone: 'breast' },
          { d: 'M96 52 Q80 40 60 30 Q44 22 28 18 Q16 14 8 16 Q4 18 8 22 Q16 28 30 34 Q48 42 66 48 Q82 52 96 52 Z', type: 'fill', zone: 'wing' },
          { d: 'M116 52 Q132 40 152 32 Q168 24 184 20 Q196 18 204 20 Q210 22 206 26 Q198 32 184 38 Q166 46 148 52 Q132 56 116 54 Z', type: 'fill', zone: 'wing' },
          { d: 'M98 64 Q92 70 86 80 Q82 88 78 100 Q76 106 80 104 Q84 98 90 88 Q96 78 100 68 Z', type: 'fill', zone: 'body' },
          { d: 'M102 64 Q108 72 112 82 Q116 92 120 102 Q122 106 118 104 Q114 98 108 88 Q102 78 100 68 Z', type: 'fill', zone: 'body' },
          { d: 'M100 50 Q96 46 92 44 Q86 42 84 46 Q82 50 86 52 Q90 54 96 52 Z', type: 'fill', zone: 'body' },
          { d: 'M92 48 Q88 50 88 54 Q90 56 94 54 Q96 52 94 48 Z', type: 'fill', zone: 'accent' },
          // Eye
          { d: 'M90 46 A1.5,1.5 0 1,1 88 46 A1.5,1.5 0 1,1 90 46 Z', type: 'fill', zone: 'accent' },
          // Wing leading edges
          { d: 'M96 52 Q80 40 60 30 Q44 22 28 18 Q16 14 8 16', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M116 52 Q132 40 152 32 Q168 24 184 20 Q196 18 204 20', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M100 50 Q108 46 114 48 Q120 52 118 58 Q116 64 110 66 Q104 68 98 64 Q94 60 96 54 Q98 50 100 50 Z', type: 'fill', zone: 'body' },
          { d: 'M102 56 Q100 60 98 64 Q96 68 100 68 Q104 68 106 64 Q108 60 106 56 Q104 54 102 56 Z', type: 'fill', zone: 'breast' },
          { d: 'M96 52 Q80 40 60 30 Q44 22 28 18 Q16 14 8 16 Q4 18 8 22 Q16 28 30 34 Q48 42 66 48 Q82 52 96 52 Z', type: 'fill', zone: 'wing' },
          { d: 'M116 52 Q132 40 152 32 Q168 24 184 20 Q196 18 204 20 Q210 22 206 26 Q198 32 184 38 Q166 46 148 52 Q132 56 116 54 Z', type: 'fill', zone: 'wing' },
          { d: 'M98 64 Q92 70 86 80 Q82 88 78 100 Q76 106 80 104 Q84 98 90 88 Q96 78 100 68 Z', type: 'fill', zone: 'body' },
          { d: 'M102 64 Q108 72 112 82 Q116 92 120 102 Q122 106 118 104 Q114 98 108 88 Q102 78 100 68 Z', type: 'fill', zone: 'body' },
          { d: 'M100 50 Q96 46 92 44 Q86 42 84 46 Q82 50 86 52 Q90 54 96 52 Z', type: 'fill', zone: 'body' },
          { d: 'M92 48 Q88 50 88 54 Q90 56 94 54 Q96 52 94 48 Z', type: 'fill', zone: 'accent' },
          { d: 'M90 46 A1.5,1.5 0 1,1 88 46 A1.5,1.5 0 1,1 90 46 Z', type: 'fill', zone: 'accent' },
          { d: 'M96 52 Q80 40 60 30 Q44 22 28 18 Q16 14 8 16', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M116 52 Q132 40 152 32 Q168 24 184 20 Q196 18 204 20', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          // Primary feather lines (left wing)
          { d: 'M20 20 Q32 28 44 34 M28 18 Q40 26 52 32 M36 22 Q48 30 60 36 M46 26 Q58 34 68 40', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Primary feather lines (right wing)
          { d: 'M192 22 Q180 28 168 34 M184 20 Q172 26 160 32 M176 24 Q164 30 152 36 M166 28 Q154 34 144 40', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail fork detail
          { d: 'M86 82 Q84 88 80 96 M112 84 Q114 90 118 98', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Breast feather texture
          { d: 'M102 58 Q100 62 100 66 M104 60 Q102 64 102 68', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'kingfisher',
    name: 'Kingfisher',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 110 130',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 1 },
      { id: 'breast', defaultPaletteSlot: 3 },
      { id: 'wing', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body — stocky compact form
          { d: 'M55 40 Q62 36 68 38 Q74 42 76 50 Q78 58 76 66 Q74 74 68 78 Q62 82 56 80 Q48 78 44 72 Q40 66 40 58 Q40 50 44 44 Q48 38 55 40 Z', type: 'fill', zone: 'body' },
          // Breast
          { d: 'M52 58 Q48 64 46 70 Q44 76 48 80 Q52 82 58 80 Q62 78 64 72 Q66 66 64 60 Q60 56 56 56 Q54 56 52 58 Z', type: 'fill', zone: 'breast' },
          // Head — large for body
          { d: 'M55 40 Q50 34 46 30 Q40 24 34 22 Q28 22 26 26 Q24 32 28 36 Q32 40 40 42 Q46 42 55 40 Z', type: 'fill', zone: 'body' },
          // Enormous beak
          { d: 'M28 28 Q22 24 14 20 Q8 18 4 20 Q2 24 6 26 Q10 28 16 28 Q22 28 28 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M28 32 Q22 34 14 36 Q8 38 4 36 Q2 32 6 30 Q10 28 16 28 Q22 28 28 32 Z', type: 'fill', zone: 'detail' },
          // Wing
          { d: 'M62 44 Q70 46 76 52 Q80 58 80 66 Q78 74 74 78 Q68 82 64 80 Q60 76 58 68 Q56 58 58 50 Q60 46 62 44 Z', type: 'fill', zone: 'wing' },
          // Tail
          { d: 'M68 78 Q72 84 74 92 Q76 100 74 106 Q72 110 68 108 Q64 104 64 96 Q64 88 66 82 Z', type: 'fill', zone: 'body' },
          // Legs
          { d: 'M50 80 Q48 86 46 92 Q46 96 48 96 L52 94 Q52 90 52 84 Z', type: 'fill', zone: 'detail' },
          { d: 'M56 80 Q58 86 60 92 Q60 96 58 96 L54 94 Q54 90 54 84 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M55 40 Q62 36 68 38 Q74 42 76 50 Q78 58 76 66 Q74 74 68 78 Q62 82 56 80 Q48 78 44 72 Q40 66 40 58 Q40 50 44 44 Q48 38 55 40 Z', type: 'fill', zone: 'body' },
          { d: 'M52 58 Q48 64 46 70 Q44 76 48 80 Q52 82 58 80 Q62 78 64 72 Q66 66 64 60 Q60 56 56 56 Q54 56 52 58 Z', type: 'fill', zone: 'breast' },
          { d: 'M55 40 Q50 34 46 30 Q40 24 34 22 Q28 22 26 26 Q24 32 28 36 Q32 40 40 42 Q46 42 55 40 Z', type: 'fill', zone: 'body' },
          { d: 'M28 28 Q22 24 14 20 Q8 18 4 20 Q2 24 6 26 Q10 28 16 28 Q22 28 28 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M28 32 Q22 34 14 36 Q8 38 4 36 Q2 32 6 30 Q10 28 16 28 Q22 28 28 32 Z', type: 'fill', zone: 'detail' },
          { d: 'M62 44 Q70 46 76 52 Q80 58 80 66 Q78 74 74 78 Q68 82 64 80 Q60 76 58 68 Q56 58 58 50 Q60 46 62 44 Z', type: 'fill', zone: 'wing' },
          { d: 'M68 78 Q72 84 74 92 Q76 100 74 106 Q72 110 68 108 Q64 104 64 96 Q64 88 66 82 Z', type: 'fill', zone: 'body' },
          { d: 'M50 80 Q48 86 46 92 Q46 96 48 96 L52 94 Q52 90 52 84 Z', type: 'fill', zone: 'detail' },
          { d: 'M56 80 Q58 86 60 92 Q60 96 58 96 L54 94 Q54 90 54 84 Z', type: 'fill', zone: 'detail' },
          // Eye — white ring + dark center
          { d: 'M34 28 A3,3 0 1,1 31 28 A3,3 0 1,1 34 28 Z', type: 'fill', zone: 'detail' },
          // Crown feather crest
          { d: 'M40 24 Q38 20 36 18 Q34 20 36 24', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Beak ridge
          { d: 'M28 28 Q18 24 8 20', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Wing edge
          { d: 'M62 44 Q70 46 76 52 Q80 58 80 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M55 40 Q62 36 68 38 Q74 42 76 50 Q78 58 76 66 Q74 74 68 78 Q62 82 56 80 Q48 78 44 72 Q40 66 40 58 Q40 50 44 44 Q48 38 55 40 Z', type: 'fill', zone: 'body' },
          { d: 'M52 58 Q48 64 46 70 Q44 76 48 80 Q52 82 58 80 Q62 78 64 72 Q66 66 64 60 Q60 56 56 56 Q54 56 52 58 Z', type: 'fill', zone: 'breast' },
          { d: 'M55 40 Q50 34 46 30 Q40 24 34 22 Q28 22 26 26 Q24 32 28 36 Q32 40 40 42 Q46 42 55 40 Z', type: 'fill', zone: 'body' },
          { d: 'M28 28 Q22 24 14 20 Q8 18 4 20 Q2 24 6 26 Q10 28 16 28 Q22 28 28 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M28 32 Q22 34 14 36 Q8 38 4 36 Q2 32 6 30 Q10 28 16 28 Q22 28 28 32 Z', type: 'fill', zone: 'detail' },
          { d: 'M62 44 Q70 46 76 52 Q80 58 80 66 Q78 74 74 78 Q68 82 64 80 Q60 76 58 68 Q56 58 58 50 Q60 46 62 44 Z', type: 'fill', zone: 'wing' },
          { d: 'M68 78 Q72 84 74 92 Q76 100 74 106 Q72 110 68 108 Q64 104 64 96 Q64 88 66 82 Z', type: 'fill', zone: 'body' },
          { d: 'M50 80 Q48 86 46 92 Q46 96 48 96 L52 94 Q52 90 52 84 Z', type: 'fill', zone: 'detail' },
          { d: 'M56 80 Q58 86 60 92 Q60 96 58 96 L54 94 Q54 90 54 84 Z', type: 'fill', zone: 'detail' },
          { d: 'M34 28 A3,3 0 1,1 31 28 A3,3 0 1,1 34 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M40 24 Q38 20 36 18 Q34 20 36 24', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          { d: 'M28 28 Q18 24 8 20', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M62 44 Q70 46 76 52 Q80 58 80 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Head scale pattern
          { d: 'M38 26 Q40 24 42 26 M36 28 Q38 26 40 28 M40 30 Q42 28 44 30 M34 30 Q36 28 38 30', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Wing covert feathers
          { d: 'M64 48 Q68 50 70 54 M66 52 Q70 54 72 58 M68 56 Q72 58 74 62 M64 60 Q68 62 70 66', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Breast feather texture
          { d: 'M52 62 Q50 66 50 70 M54 64 Q52 68 52 72 M56 66 Q54 70 54 74', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Tail barb lines
          { d: 'M68 84 Q70 90 72 96 M66 86 Q68 92 70 98 M70 88 Q72 94 74 100', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Toes
          { d: 'M46 95 Q44 96 42 96 M48 95 Q50 97 52 96 M58 95 Q56 96 54 96 M60 95 Q62 97 64 96', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'egret',
    name: 'Egret',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 160 280',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'plume', defaultPaletteSlot: 4 },
      { id: 'accent', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body
          { d: 'M80 40 Q90 36 96 40 Q104 48 102 60 Q100 75 96 90 Q92 110 88 130 Q84 150 82 170 Q80 185 78 200 L76 220 Q74 230 70 238 L66 244 Q62 248 58 252 L56 268 Q58 274 62 276 L72 274 Q76 272 76 268 L76 252 Q78 242 80 232 Q84 218 86 204 Q90 180 94 160 Q98 135 102 110 Q106 85 102 65 Q98 48 90 40 Q84 36 80 40 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M80 40 Q76 34 72 30 Q66 26 60 28 Q54 30 52 36 Q50 42 54 46 Q58 50 66 48 Q72 44 80 40 Z', type: 'fill', zone: 'body' },
          // Beak
          { d: 'M54 34 Q48 30 40 28 Q34 26 28 28 Q24 32 28 34 Q32 36 38 36 Q44 36 54 34 Z', type: 'fill', zone: 'accent' },
          // Breeding plumes (aigrette)
          { d: 'M96 60 Q106 56 114 50 Q120 44 124 38 Q126 34 122 36 Q118 40 112 48 Q106 56 100 64 Z', type: 'fill', zone: 'plume' },
          { d: 'M98 70 Q108 66 118 60 Q126 54 132 48 Q134 44 130 46 Q126 50 118 58 Q110 66 102 74 Z', type: 'fill', zone: 'plume' },
          { d: 'M96 80 Q104 78 112 72 Q118 66 122 60 Q124 56 120 58 Q116 62 110 68 Q104 76 98 82 Z', type: 'fill', zone: 'plume' },
          // Left leg
          { d: 'M66 244 Q64 254 62 264 Q62 270 64 272 Q66 274 68 272 L70 264 Q70 256 68 248 Z', type: 'fill', zone: 'detail' },
          // Right leg
          { d: 'M76 252 Q78 260 78 268 Q78 274 80 276 Q82 278 84 276 L84 268 Q84 260 82 252 Z', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M80 40 Q90 36 96 40 Q104 48 102 60 Q100 75 96 90 Q92 110 88 130 Q84 150 82 170 Q80 185 78 200 L76 220 Q74 230 70 238 L66 244 Q62 248 58 252 L56 268 Q58 274 62 276 L72 274 Q76 272 76 268 L76 252 Q78 242 80 232 Q84 218 86 204 Q90 180 94 160 Q98 135 102 110 Q106 85 102 65 Q98 48 90 40 Q84 36 80 40 Z', type: 'fill', zone: 'body' },
          { d: 'M80 40 Q76 34 72 30 Q66 26 60 28 Q54 30 52 36 Q50 42 54 46 Q58 50 66 48 Q72 44 80 40 Z', type: 'fill', zone: 'body' },
          { d: 'M54 34 Q48 30 40 28 Q34 26 28 28 Q24 32 28 34 Q32 36 38 36 Q44 36 54 34 Z', type: 'fill', zone: 'accent' },
          { d: 'M96 60 Q106 56 114 50 Q120 44 124 38 Q126 34 122 36 Q118 40 112 48 Q106 56 100 64 Z', type: 'fill', zone: 'plume' },
          { d: 'M98 70 Q108 66 118 60 Q126 54 132 48 Q134 44 130 46 Q126 50 118 58 Q110 66 102 74 Z', type: 'fill', zone: 'plume' },
          { d: 'M96 80 Q104 78 112 72 Q118 66 122 60 Q124 56 120 58 Q116 62 110 68 Q104 76 98 82 Z', type: 'fill', zone: 'plume' },
          { d: 'M66 244 Q64 254 62 264 Q62 270 64 272 Q66 274 68 272 L70 264 Q70 256 68 248 Z', type: 'fill', zone: 'detail' },
          { d: 'M76 252 Q78 260 78 268 Q78 274 80 276 Q82 278 84 276 L84 268 Q84 260 82 252 Z', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M60 36 A2.5,2.5 0 1,1 57 36 A2.5,2.5 0 1,1 60 36 Z', type: 'fill', zone: 'accent' },
          // Body contour
          { d: 'M80 40 Q90 36 96 40 Q104 48 102 60 Q100 75 96 90 Q92 110 88 130', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // S-curve neck
          { d: 'M66 48 Q70 56 74 68 Q78 80 82 90', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Plume edges
          { d: 'M96 60 Q106 56 114 50 Q120 44 124 38', type: 'stroke', zone: 'plume', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M80 40 Q90 36 96 40 Q104 48 102 60 Q100 75 96 90 Q92 110 88 130 Q84 150 82 170 Q80 185 78 200 L76 220 Q74 230 70 238 L66 244 Q62 248 58 252 L56 268 Q58 274 62 276 L72 274 Q76 272 76 268 L76 252 Q78 242 80 232 Q84 218 86 204 Q90 180 94 160 Q98 135 102 110 Q106 85 102 65 Q98 48 90 40 Q84 36 80 40 Z', type: 'fill', zone: 'body' },
          { d: 'M80 40 Q76 34 72 30 Q66 26 60 28 Q54 30 52 36 Q50 42 54 46 Q58 50 66 48 Q72 44 80 40 Z', type: 'fill', zone: 'body' },
          { d: 'M54 34 Q48 30 40 28 Q34 26 28 28 Q24 32 28 34 Q32 36 38 36 Q44 36 54 34 Z', type: 'fill', zone: 'accent' },
          { d: 'M96 60 Q106 56 114 50 Q120 44 124 38 Q126 34 122 36 Q118 40 112 48 Q106 56 100 64 Z', type: 'fill', zone: 'plume' },
          { d: 'M98 70 Q108 66 118 60 Q126 54 132 48 Q134 44 130 46 Q126 50 118 58 Q110 66 102 74 Z', type: 'fill', zone: 'plume' },
          { d: 'M96 80 Q104 78 112 72 Q118 66 122 60 Q124 56 120 58 Q116 62 110 68 Q104 76 98 82 Z', type: 'fill', zone: 'plume' },
          { d: 'M66 244 Q64 254 62 264 Q62 270 64 272 Q66 274 68 272 L70 264 Q70 256 68 248 Z', type: 'fill', zone: 'detail' },
          { d: 'M76 252 Q78 260 78 268 Q78 274 80 276 Q82 278 84 276 L84 268 Q84 260 82 252 Z', type: 'fill', zone: 'detail' },
          { d: 'M60 36 A2.5,2.5 0 1,1 57 36 A2.5,2.5 0 1,1 60 36 Z', type: 'fill', zone: 'accent' },
          { d: 'M80 40 Q90 36 96 40 Q104 48 102 60 Q100 75 96 90 Q92 110 88 130', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M66 48 Q70 56 74 68 Q78 80 82 90', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          { d: 'M96 60 Q106 56 114 50 Q120 44 124 38', type: 'stroke', zone: 'plume', strokeWidth: 0.6 },
          // Breast feather texture
          { d: 'M82 100 Q80 108 78 116 M84 110 Q82 118 80 126 M86 120 Q84 128 82 136 M80 130 Q78 138 76 146', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Plume wisps
          { d: 'M108 52 Q114 46 118 40 M116 56 Q122 50 126 44 M110 64 Q116 58 120 52', type: 'stroke', zone: 'plume', strokeWidth: 0.3 },
          // Scapular feather lines
          { d: 'M94 68 Q98 72 100 78 M92 76 Q96 80 98 86 M90 84 Q94 88 96 94', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Leg joints and toes
          { d: 'M64 258 Q62 260 64 262 M78 262 Q80 264 78 266', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M62 271 Q60 272 58 272 M64 271 Q66 273 68 272 M80 275 Q78 276 76 276 M82 275 Q84 277 86 276', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLOWERS
  // ============================================================

  {
    id: 'peony',
    name: 'Peony',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 180 170',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Outer petals — lush layered bloom
          { d: 'M90 30 Q110 26 126 34 Q140 42 144 58 Q148 74 140 88 Q132 100 118 106 Q104 110 90 108 Q76 110 62 106 Q48 100 40 88 Q32 74 36 58 Q40 42 54 34 Q70 26 90 30 Z', type: 'fill', zone: 'petal' },
          // Inner petal mass
          { d: 'M90 42 Q106 38 116 46 Q126 54 126 66 Q126 78 118 86 Q108 92 96 92 Q84 92 74 86 Q64 78 64 66 Q64 54 74 46 Q84 38 90 42 Z', type: 'fill', zone: 'petal' },
          // Center stamens
          { d: 'M90 58 Q98 54 104 58 Q110 64 108 72 Q106 78 100 82 Q94 84 88 82 Q82 78 80 72 Q78 64 82 58 Q86 54 90 58 Z', type: 'fill', zone: 'center' },
          // Left leaf
          { d: 'M50 100 Q38 108 30 120 Q24 132 28 142 Q32 150 42 148 Q52 146 58 136 Q64 126 62 114 Q60 106 54 100 Z', type: 'fill', zone: 'leaf' },
          // Right leaf
          { d: 'M130 100 Q142 108 150 120 Q156 132 152 142 Q148 150 138 148 Q128 146 122 136 Q116 126 118 114 Q120 106 126 100 Z', type: 'fill', zone: 'leaf' },
          // Stem
          { d: 'M88 108 Q86 120 84 135 Q82 150 84 165 Q88 168 92 165 Q94 150 96 135 Q98 120 96 108 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M90 30 Q110 26 126 34 Q140 42 144 58 Q148 74 140 88 Q132 100 118 106 Q104 110 90 108 Q76 110 62 106 Q48 100 40 88 Q32 74 36 58 Q40 42 54 34 Q70 26 90 30 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 42 Q106 38 116 46 Q126 54 126 66 Q126 78 118 86 Q108 92 96 92 Q84 92 74 86 Q64 78 64 66 Q64 54 74 46 Q84 38 90 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 58 Q98 54 104 58 Q110 64 108 72 Q106 78 100 82 Q94 84 88 82 Q82 78 80 72 Q78 64 82 58 Q86 54 90 58 Z', type: 'fill', zone: 'center' },
          { d: 'M50 100 Q38 108 30 120 Q24 132 28 142 Q32 150 42 148 Q52 146 58 136 Q64 126 62 114 Q60 106 54 100 Z', type: 'fill', zone: 'leaf' },
          { d: 'M130 100 Q142 108 150 120 Q156 132 152 142 Q148 150 138 148 Q128 146 122 136 Q116 126 118 114 Q120 106 126 100 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 108 Q86 120 84 135 Q82 150 84 165 Q88 168 92 165 Q94 150 96 135 Q98 120 96 108 Z', type: 'fill', zone: 'leaf' },
          // Outer petal scallops
          { d: 'M70 30 Q76 28 82 30 M98 28 Q106 28 112 32 M130 42 Q136 48 140 56 M142 72 Q142 80 138 88 M126 98 Q120 104 112 106 M76 106 Q68 104 62 98 M42 86 Q38 78 36 70 M40 52 Q44 46 50 40', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Inner petal edges
          { d: 'M80 44 Q86 40 94 42 M110 48 Q116 54 118 62 M120 78 Q114 86 106 90 M82 90 Q74 86 70 78 M66 62 Q68 54 76 48', type: 'stroke', zone: 'petal', strokeWidth: 0.6 },
          // Leaf veins
          { d: 'M46 106 Q38 118 32 130', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M134 106 Q142 118 148 130', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M90 30 Q110 26 126 34 Q140 42 144 58 Q148 74 140 88 Q132 100 118 106 Q104 110 90 108 Q76 110 62 106 Q48 100 40 88 Q32 74 36 58 Q40 42 54 34 Q70 26 90 30 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 42 Q106 38 116 46 Q126 54 126 66 Q126 78 118 86 Q108 92 96 92 Q84 92 74 86 Q64 78 64 66 Q64 54 74 46 Q84 38 90 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 58 Q98 54 104 58 Q110 64 108 72 Q106 78 100 82 Q94 84 88 82 Q82 78 80 72 Q78 64 82 58 Q86 54 90 58 Z', type: 'fill', zone: 'center' },
          { d: 'M50 100 Q38 108 30 120 Q24 132 28 142 Q32 150 42 148 Q52 146 58 136 Q64 126 62 114 Q60 106 54 100 Z', type: 'fill', zone: 'leaf' },
          { d: 'M130 100 Q142 108 150 120 Q156 132 152 142 Q148 150 138 148 Q128 146 122 136 Q116 126 118 114 Q120 106 126 100 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 108 Q86 120 84 135 Q82 150 84 165 Q88 168 92 165 Q94 150 96 135 Q98 120 96 108 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70 30 Q76 28 82 30 M98 28 Q106 28 112 32 M130 42 Q136 48 140 56 M142 72 Q142 80 138 88 M126 98 Q120 104 112 106 M76 106 Q68 104 62 98 M42 86 Q38 78 36 70 M40 52 Q44 46 50 40', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M80 44 Q86 40 94 42 M110 48 Q116 54 118 62 M120 78 Q114 86 106 90 M82 90 Q74 86 70 78 M66 62 Q68 54 76 48', type: 'stroke', zone: 'petal', strokeWidth: 0.6 },
          { d: 'M46 106 Q38 118 32 130', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M134 106 Q142 118 148 130', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Stamen details
          { d: 'M88 64 Q86 60 84 62 M92 62 Q94 58 96 60 M86 68 Q84 64 82 66 M96 66 Q98 62 100 64 M90 70 Q88 66 90 64 M94 72 Q96 68 94 66', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
          // Petal vein details
          { d: 'M78 36 Q82 44 86 52 M102 36 Q98 44 94 52 M66 52 Q72 60 78 66 M114 52 Q108 60 102 66 M56 70 Q64 76 72 80 M124 70 Q116 76 108 80', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Leaf vein details
          { d: 'M44 112 Q40 120 36 128 M48 118 Q44 126 40 134 M50 124 Q46 132 42 140', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          { d: 'M136 112 Q140 120 144 128 M132 118 Q136 126 140 134 M130 124 Q134 132 138 140', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Leaf serrations
          { d: 'M36 118 Q34 116 32 118 M30 126 Q28 124 26 126 M38 132 Q36 130 34 132', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
          { d: 'M144 118 Q146 116 148 118 M150 126 Q152 124 154 126 M142 132 Q144 130 146 132', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'lotus',
    name: 'Lotus',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 180 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 2 },
      { id: 'stem', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Back petals
          { d: 'M60 60 Q50 40 56 24 Q62 12 72 14 Q82 16 86 30 Q88 42 84 56 Q80 66 74 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M120 60 Q130 40 124 24 Q118 12 108 14 Q98 16 94 30 Q92 42 96 56 Q100 66 106 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 52 Q82 32 86 16 Q90 4 96 4 Q102 6 104 18 Q106 32 100 50 Z', type: 'fill', zone: 'petal' },
          // Front petals
          { d: 'M70 68 Q58 52 54 38 Q50 26 56 20 Q62 16 70 24 Q78 34 82 50 Q84 62 80 70 Z', type: 'fill', zone: 'petal' },
          { d: 'M110 68 Q122 52 126 38 Q130 26 124 20 Q118 16 110 24 Q102 34 98 50 Q96 62 100 70 Z', type: 'fill', zone: 'petal' },
          // Center seed pod
          { d: 'M90 60 Q98 56 104 60 Q108 66 106 74 Q102 80 96 82 Q90 84 84 80 Q78 74 80 66 Q82 58 90 60 Z', type: 'fill', zone: 'center' },
          // Large leaf (pad)
          { d: 'M30 130 Q20 120 18 108 Q16 96 24 86 Q34 78 50 76 Q66 76 80 80 Q94 84 104 92 Q112 100 114 112 Q116 124 108 134 Q98 142 84 144 Q68 146 52 142 Q38 138 30 130 Z', type: 'fill', zone: 'leaf' },
          // Stem
          { d: 'M88 82 Q86 100 84 120 Q82 140 80 160 Q78 175 80 190 Q84 196 88 190 Q90 175 92 160 Q94 140 96 120 Q98 100 96 82 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M60 60 Q50 40 56 24 Q62 12 72 14 Q82 16 86 30 Q88 42 84 56 Q80 66 74 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M120 60 Q130 40 124 24 Q118 12 108 14 Q98 16 94 30 Q92 42 96 56 Q100 66 106 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 52 Q82 32 86 16 Q90 4 96 4 Q102 6 104 18 Q106 32 100 50 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 68 Q58 52 54 38 Q50 26 56 20 Q62 16 70 24 Q78 34 82 50 Q84 62 80 70 Z', type: 'fill', zone: 'petal' },
          { d: 'M110 68 Q122 52 126 38 Q130 26 124 20 Q118 16 110 24 Q102 34 98 50 Q96 62 100 70 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 60 Q98 56 104 60 Q108 66 106 74 Q102 80 96 82 Q90 84 84 80 Q78 74 80 66 Q82 58 90 60 Z', type: 'fill', zone: 'center' },
          { d: 'M30 130 Q20 120 18 108 Q16 96 24 86 Q34 78 50 76 Q66 76 80 80 Q94 84 104 92 Q112 100 114 112 Q116 124 108 134 Q98 142 84 144 Q68 146 52 142 Q38 138 30 130 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 82 Q86 100 84 120 Q82 140 80 160 Q78 175 80 190 Q84 196 88 190 Q90 175 92 160 Q94 140 96 120 Q98 100 96 82 Z', type: 'fill', zone: 'stem' },
          // Petal edges
          { d: 'M60 60 Q50 40 56 24 Q62 12 72 14', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M120 60 Q130 40 124 24 Q118 12 108 14', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M70 68 Q58 52 54 38 Q50 26 56 20', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M110 68 Q122 52 126 38 Q130 26 124 20', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Leaf edge
          { d: 'M30 130 Q20 120 18 108 Q16 96 24 86 Q34 78 50 76 Q66 76 80 80', type: 'stroke', zone: 'leaf', strokeWidth: 1.0 },
          // Leaf vein radiating from center
          { d: 'M70 110 Q60 100 46 92 M70 110 Q54 116 38 120 M70 110 Q60 126 52 138', type: 'stroke', zone: 'leaf', strokeWidth: 0.7 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M60 60 Q50 40 56 24 Q62 12 72 14 Q82 16 86 30 Q88 42 84 56 Q80 66 74 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M120 60 Q130 40 124 24 Q118 12 108 14 Q98 16 94 30 Q92 42 96 56 Q100 66 106 68 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 52 Q82 32 86 16 Q90 4 96 4 Q102 6 104 18 Q106 32 100 50 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 68 Q58 52 54 38 Q50 26 56 20 Q62 16 70 24 Q78 34 82 50 Q84 62 80 70 Z', type: 'fill', zone: 'petal' },
          { d: 'M110 68 Q122 52 126 38 Q130 26 124 20 Q118 16 110 24 Q102 34 98 50 Q96 62 100 70 Z', type: 'fill', zone: 'petal' },
          { d: 'M90 60 Q98 56 104 60 Q108 66 106 74 Q102 80 96 82 Q90 84 84 80 Q78 74 80 66 Q82 58 90 60 Z', type: 'fill', zone: 'center' },
          { d: 'M30 130 Q20 120 18 108 Q16 96 24 86 Q34 78 50 76 Q66 76 80 80 Q94 84 104 92 Q112 100 114 112 Q116 124 108 134 Q98 142 84 144 Q68 146 52 142 Q38 138 30 130 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 82 Q86 100 84 120 Q82 140 80 160 Q78 175 80 190 Q84 196 88 190 Q90 175 92 160 Q94 140 96 120 Q98 100 96 82 Z', type: 'fill', zone: 'stem' },
          { d: 'M60 60 Q50 40 56 24 Q62 12 72 14', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M120 60 Q130 40 124 24 Q118 12 108 14', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M70 68 Q58 52 54 38 Q50 26 56 20', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M110 68 Q122 52 126 38 Q130 26 124 20', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M30 130 Q20 120 18 108 Q16 96 24 86 Q34 78 50 76 Q66 76 80 80', type: 'stroke', zone: 'leaf', strokeWidth: 1.0 },
          { d: 'M70 110 Q60 100 46 92 M70 110 Q54 116 38 120 M70 110 Q60 126 52 138', type: 'stroke', zone: 'leaf', strokeWidth: 0.7 },
          // Petal vein details
          { d: 'M62 56 Q56 42 58 28 M68 58 Q64 46 66 34 M74 62 Q72 50 74 38', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          { d: 'M118 56 Q124 42 122 28 M112 58 Q116 46 114 34 M106 62 Q108 50 106 38', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Seed pod holes
          { d: 'M88 66 A2,2 0 1,1 86 66 Z M94 64 A2,2 0 1,1 92 64 Z M92 70 A2,2 0 1,1 90 70 Z M96 70 A2,2 0 1,1 94 70 Z M86 72 A2,2 0 1,1 84 72 Z M90 76 A2,2 0 1,1 88 76 Z', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
          // Secondary leaf veins
          { d: 'M70 110 Q76 100 86 92 M70 110 Q80 116 92 120 M70 110 Q78 126 88 138', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Water droplets on leaf
          { d: 'M42 106 Q40 104 42 102 Q44 104 42 106 Z M56 96 Q54 94 56 92 Q58 94 56 96 Z', type: 'fill', zone: 'leaf' },
        ],
      },
    ],
  },

  {
    id: 'morning-glory',
    name: 'Morning Glory',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 160 180',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 4 },
      { id: 'vine', defaultPaletteSlot: 2 },
      { id: 'leaf', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Trumpet flower — open face
          { d: 'M80 40 Q100 34 114 44 Q126 54 128 70 Q130 86 120 96 Q110 106 94 108 Q80 110 66 108 Q50 106 40 96 Q30 86 32 70 Q34 54 46 44 Q60 34 80 40 Z', type: 'fill', zone: 'petal' },
          // White center throat
          { d: 'M80 60 Q90 56 96 62 Q102 68 100 76 Q96 82 90 84 Q82 86 76 82 Q70 76 70 68 Q72 60 80 60 Z', type: 'fill', zone: 'center' },
          // Bud
          { d: 'M130 30 Q136 26 140 30 Q144 36 142 44 Q140 50 136 52 Q130 54 126 50 Q122 44 124 36 Q126 30 130 30 Z', type: 'fill', zone: 'petal' },
          // Vine — sinuous curve
          { d: 'M76 108 Q70 120 62 130 Q54 140 48 148 Q42 154 38 160 Q34 166 36 172 Q40 176 44 172 Q48 164 54 154 Q60 144 68 134 Q76 124 82 114 Z', type: 'fill', zone: 'vine' },
          // Upper vine to bud
          { d: 'M96 42 Q106 36 116 32 Q124 30 130 30', type: 'fill', zone: 'vine' },
          // Large leaf
          { d: 'M40 120 Q28 114 20 104 Q14 94 18 84 Q22 76 32 76 Q42 78 50 86 Q56 94 54 106 Q52 114 46 120 Z', type: 'fill', zone: 'leaf' },
          // Small leaf
          { d: 'M110 90 Q118 84 126 84 Q132 86 132 92 Q132 100 126 104 Q118 106 112 102 Q108 96 110 90 Z', type: 'fill', zone: 'leaf' },
          // Vine tendril
          { d: 'M44 148 Q38 144 34 140 Q30 136 28 132 Q26 128 28 126 Q32 126 34 130 Q36 134 38 138 Q40 142 42 146 Z', type: 'fill', zone: 'vine' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M80 40 Q100 34 114 44 Q126 54 128 70 Q130 86 120 96 Q110 106 94 108 Q80 110 66 108 Q50 106 40 96 Q30 86 32 70 Q34 54 46 44 Q60 34 80 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M80 60 Q90 56 96 62 Q102 68 100 76 Q96 82 90 84 Q82 86 76 82 Q70 76 70 68 Q72 60 80 60 Z', type: 'fill', zone: 'center' },
          { d: 'M130 30 Q136 26 140 30 Q144 36 142 44 Q140 50 136 52 Q130 54 126 50 Q122 44 124 36 Q126 30 130 30 Z', type: 'fill', zone: 'petal' },
          { d: 'M76 108 Q70 120 62 130 Q54 140 48 148 Q42 154 38 160 Q34 166 36 172 Q40 176 44 172 Q48 164 54 154 Q60 144 68 134 Q76 124 82 114 Z', type: 'fill', zone: 'vine' },
          { d: 'M96 42 Q106 36 116 32 Q124 30 130 30', type: 'fill', zone: 'vine' },
          { d: 'M40 120 Q28 114 20 104 Q14 94 18 84 Q22 76 32 76 Q42 78 50 86 Q56 94 54 106 Q52 114 46 120 Z', type: 'fill', zone: 'leaf' },
          { d: 'M110 90 Q118 84 126 84 Q132 86 132 92 Q132 100 126 104 Q118 106 112 102 Q108 96 110 90 Z', type: 'fill', zone: 'leaf' },
          { d: 'M44 148 Q38 144 34 140 Q30 136 28 132 Q26 128 28 126 Q32 126 34 130 Q36 134 38 138 Q40 142 42 146 Z', type: 'fill', zone: 'vine' },
          // Petal fold lines (star pattern)
          { d: 'M80 62 Q68 50 56 44 M80 62 Q92 50 104 44 M80 62 Q66 72 52 80 M80 62 Q94 72 108 80 M80 62 Q80 76 80 90', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // Leaf outline
          { d: 'M40 120 Q28 114 20 104 Q14 94 18 84 Q22 76 32 76', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Bud sepal
          { d: 'M128 48 Q126 52 122 54 M138 50 Q140 54 142 52', type: 'stroke', zone: 'vine', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M80 40 Q100 34 114 44 Q126 54 128 70 Q130 86 120 96 Q110 106 94 108 Q80 110 66 108 Q50 106 40 96 Q30 86 32 70 Q34 54 46 44 Q60 34 80 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M80 60 Q90 56 96 62 Q102 68 100 76 Q96 82 90 84 Q82 86 76 82 Q70 76 70 68 Q72 60 80 60 Z', type: 'fill', zone: 'center' },
          { d: 'M130 30 Q136 26 140 30 Q144 36 142 44 Q140 50 136 52 Q130 54 126 50 Q122 44 124 36 Q126 30 130 30 Z', type: 'fill', zone: 'petal' },
          { d: 'M76 108 Q70 120 62 130 Q54 140 48 148 Q42 154 38 160 Q34 166 36 172 Q40 176 44 172 Q48 164 54 154 Q60 144 68 134 Q76 124 82 114 Z', type: 'fill', zone: 'vine' },
          { d: 'M96 42 Q106 36 116 32 Q124 30 130 30', type: 'fill', zone: 'vine' },
          { d: 'M40 120 Q28 114 20 104 Q14 94 18 84 Q22 76 32 76 Q42 78 50 86 Q56 94 54 106 Q52 114 46 120 Z', type: 'fill', zone: 'leaf' },
          { d: 'M110 90 Q118 84 126 84 Q132 86 132 92 Q132 100 126 104 Q118 106 112 102 Q108 96 110 90 Z', type: 'fill', zone: 'leaf' },
          { d: 'M44 148 Q38 144 34 140 Q30 136 28 132 Q26 128 28 126 Q32 126 34 130 Q36 134 38 138 Q40 142 42 146 Z', type: 'fill', zone: 'vine' },
          { d: 'M80 62 Q68 50 56 44 M80 62 Q92 50 104 44 M80 62 Q66 72 52 80 M80 62 Q94 72 108 80 M80 62 Q80 76 80 90', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M40 120 Q28 114 20 104 Q14 94 18 84 Q22 76 32 76', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M128 48 Q126 52 122 54 M138 50 Q140 54 142 52', type: 'stroke', zone: 'vine', strokeWidth: 0.6 },
          // Petal vein details between fold lines
          { d: 'M72 52 Q66 48 60 46 M88 52 Q94 48 100 46 M68 66 Q60 72 54 76 M92 66 Q100 72 106 76 M78 72 Q78 80 78 88 M82 72 Q82 80 82 88', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Leaf vein details
          { d: 'M38 100 Q30 96 24 90 M40 106 Q32 108 26 104 M42 112 Q36 116 30 116', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Tendril spiral detail
          { d: 'M30 130 Q28 128 30 126 Q32 128 30 130', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          // Vine texture
          { d: 'M70 118 Q66 122 64 128 M58 138 Q54 142 52 148', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          // Stamens in center
          { d: 'M82 68 Q84 64 86 68 M78 70 Q76 66 78 64 M86 72 Q88 68 90 72', type: 'stroke', zone: 'center', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'wisteria',
    name: 'Wisteria',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 160 240',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'flower', defaultPaletteSlot: 1 },
      { id: 'vine', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main vine branch
          { d: 'M20 10 Q40 8 60 14 Q80 20 100 18 Q120 16 140 20 Q148 22 148 28 Q146 32 138 30 Q120 26 100 28 Q80 30 60 24 Q40 18 20 20 Q14 22 14 16 Z', type: 'fill', zone: 'vine' },
          // Hanging raceme 1 (left)
          { d: 'M40 24 Q38 36 36 48 Q34 60 32 72 Q30 84 28 96 Q26 108 28 116 Q30 120 34 118 Q36 112 38 100 Q40 88 42 76 Q44 64 46 52 Q48 40 46 28 Z', type: 'fill', zone: 'flower' },
          // Hanging raceme 2 (center)
          { d: 'M80 28 Q78 44 76 60 Q74 76 72 92 Q70 108 68 124 Q66 140 64 156 Q62 168 66 172 Q70 170 72 160 Q74 144 76 128 Q78 112 80 96 Q82 80 84 64 Q86 48 84 32 Z', type: 'fill', zone: 'flower' },
          // Hanging raceme 3 (right)
          { d: 'M120 24 Q118 38 116 52 Q114 66 112 80 Q110 94 108 108 Q106 120 110 126 Q114 128 116 122 Q118 110 120 96 Q122 82 124 68 Q126 54 128 40 Q130 28 126 22 Z', type: 'fill', zone: 'flower' },
          // Small raceme buds (far left)
          { d: 'M30 20 Q28 30 26 42 Q24 52 26 58 Q28 60 30 56 Q32 48 34 38 Q36 28 34 20 Z', type: 'fill', zone: 'flower' },
          // Leaf cluster left
          { d: 'M52 14 Q46 8 40 6 Q34 6 32 10 Q30 16 34 20 Q38 22 44 20 Q50 18 52 14 Z', type: 'fill', zone: 'leaf' },
          // Leaf cluster right
          { d: 'M108 16 Q114 10 122 10 Q128 12 130 16 Q130 22 126 24 Q120 24 114 22 Q108 20 108 16 Z', type: 'fill', zone: 'leaf' },
          // Center leaves
          { d: 'M70 18 Q66 12 62 10 Q56 10 56 14 Q56 18 60 20 Q64 22 70 18 Z', type: 'fill', zone: 'leaf' },
          { d: 'M90 20 Q94 14 100 12 Q106 12 106 16 Q106 20 102 22 Q96 24 90 20 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20 10 Q40 8 60 14 Q80 20 100 18 Q120 16 140 20 Q148 22 148 28 Q146 32 138 30 Q120 26 100 28 Q80 30 60 24 Q40 18 20 20 Q14 22 14 16 Z', type: 'fill', zone: 'vine' },
          { d: 'M40 24 Q38 36 36 48 Q34 60 32 72 Q30 84 28 96 Q26 108 28 116 Q30 120 34 118 Q36 112 38 100 Q40 88 42 76 Q44 64 46 52 Q48 40 46 28 Z', type: 'fill', zone: 'flower' },
          { d: 'M80 28 Q78 44 76 60 Q74 76 72 92 Q70 108 68 124 Q66 140 64 156 Q62 168 66 172 Q70 170 72 160 Q74 144 76 128 Q78 112 80 96 Q82 80 84 64 Q86 48 84 32 Z', type: 'fill', zone: 'flower' },
          { d: 'M120 24 Q118 38 116 52 Q114 66 112 80 Q110 94 108 108 Q106 120 110 126 Q114 128 116 122 Q118 110 120 96 Q122 82 124 68 Q126 54 128 40 Q130 28 126 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M30 20 Q28 30 26 42 Q24 52 26 58 Q28 60 30 56 Q32 48 34 38 Q36 28 34 20 Z', type: 'fill', zone: 'flower' },
          { d: 'M52 14 Q46 8 40 6 Q34 6 32 10 Q30 16 34 20 Q38 22 44 20 Q50 18 52 14 Z', type: 'fill', zone: 'leaf' },
          { d: 'M108 16 Q114 10 122 10 Q128 12 130 16 Q130 22 126 24 Q120 24 114 22 Q108 20 108 16 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70 18 Q66 12 62 10 Q56 10 56 14 Q56 18 60 20 Q64 22 70 18 Z', type: 'fill', zone: 'leaf' },
          { d: 'M90 20 Q94 14 100 12 Q106 12 106 16 Q106 20 102 22 Q96 24 90 20 Z', type: 'fill', zone: 'leaf' },
          // Vine bark texture
          { d: 'M20 10 Q40 8 60 14 Q80 20 100 18 Q120 16 140 20', type: 'stroke', zone: 'vine', strokeWidth: 1.0 },
          // Raceme individual flower outlines (butterfly-shaped clusters)
          { d: 'M36 36 Q34 34 36 32 Q38 34 36 36 M34 48 Q32 46 34 44 Q36 46 34 48 M32 60 Q30 58 32 56 Q34 58 32 60 M30 72 Q28 70 30 68 Q32 70 30 72 M28 84 Q26 82 28 80 Q30 82 28 84 M28 96 Q26 94 28 92 Q30 94 28 96', type: 'stroke', zone: 'flower', strokeWidth: 0.6 },
          // Leaf veins
          { d: 'M42 10 Q38 14 36 18 M116 12 Q122 16 126 20 M62 12 Q58 16 58 18 M98 14 Q102 18 104 20', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20 10 Q40 8 60 14 Q80 20 100 18 Q120 16 140 20 Q148 22 148 28 Q146 32 138 30 Q120 26 100 28 Q80 30 60 24 Q40 18 20 20 Q14 22 14 16 Z', type: 'fill', zone: 'vine' },
          { d: 'M40 24 Q38 36 36 48 Q34 60 32 72 Q30 84 28 96 Q26 108 28 116 Q30 120 34 118 Q36 112 38 100 Q40 88 42 76 Q44 64 46 52 Q48 40 46 28 Z', type: 'fill', zone: 'flower' },
          { d: 'M80 28 Q78 44 76 60 Q74 76 72 92 Q70 108 68 124 Q66 140 64 156 Q62 168 66 172 Q70 170 72 160 Q74 144 76 128 Q78 112 80 96 Q82 80 84 64 Q86 48 84 32 Z', type: 'fill', zone: 'flower' },
          { d: 'M120 24 Q118 38 116 52 Q114 66 112 80 Q110 94 108 108 Q106 120 110 126 Q114 128 116 122 Q118 110 120 96 Q122 82 124 68 Q126 54 128 40 Q130 28 126 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M30 20 Q28 30 26 42 Q24 52 26 58 Q28 60 30 56 Q32 48 34 38 Q36 28 34 20 Z', type: 'fill', zone: 'flower' },
          { d: 'M52 14 Q46 8 40 6 Q34 6 32 10 Q30 16 34 20 Q38 22 44 20 Q50 18 52 14 Z', type: 'fill', zone: 'leaf' },
          { d: 'M108 16 Q114 10 122 10 Q128 12 130 16 Q130 22 126 24 Q120 24 114 22 Q108 20 108 16 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70 18 Q66 12 62 10 Q56 10 56 14 Q56 18 60 20 Q64 22 70 18 Z', type: 'fill', zone: 'leaf' },
          { d: 'M90 20 Q94 14 100 12 Q106 12 106 16 Q106 20 102 22 Q96 24 90 20 Z', type: 'fill', zone: 'leaf' },
          { d: 'M20 10 Q40 8 60 14 Q80 20 100 18 Q120 16 140 20', type: 'stroke', zone: 'vine', strokeWidth: 1.0 },
          { d: 'M36 36 Q34 34 36 32 Q38 34 36 36 M34 48 Q32 46 34 44 Q36 46 34 48 M32 60 Q30 58 32 56 Q34 58 32 60 M30 72 Q28 70 30 68 Q32 70 30 72 M28 84 Q26 82 28 80 Q30 82 28 84 M28 96 Q26 94 28 92 Q30 94 28 96', type: 'stroke', zone: 'flower', strokeWidth: 0.6 },
          { d: 'M42 10 Q38 14 36 18 M116 12 Q122 16 126 20 M62 12 Q58 16 58 18 M98 14 Q102 18 104 20', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
          // More flower cluster detail — center raceme
          { d: 'M78 40 Q76 38 78 36 Q80 38 78 40 M76 56 Q74 54 76 52 Q78 54 76 56 M74 72 Q72 70 74 68 Q76 70 74 72 M72 88 Q70 86 72 84 Q74 86 72 88 M70 104 Q68 102 70 100 Q72 102 70 104 M68 120 Q66 118 68 116 Q70 118 68 120 M66 136 Q64 134 66 132 Q68 134 66 136 M64 152 Q62 150 64 148 Q66 150 64 152', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          // Right raceme flower detail
          { d: 'M118 36 Q116 34 118 32 Q120 34 118 36 M116 52 Q114 50 116 48 Q118 50 116 52 M114 68 Q112 66 114 64 Q116 66 114 68 M112 84 Q110 82 112 80 Q114 82 112 84 M110 100 Q108 98 110 96 Q112 98 110 100', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          // Vine bark hatching
          { d: 'M30 12 Q32 14 34 12 M50 10 Q52 12 54 10 M70 16 Q72 18 74 16 M90 20 Q92 22 94 20 M110 18 Q112 20 114 18 M130 20 Q132 22 134 20', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          // Leaf serrations
          { d: 'M38 8 Q36 6 38 4 M46 6 Q44 4 46 2 M114 10 Q116 8 118 10 M124 10 Q126 8 128 10', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
        ],
      },
    ],
  },

];
