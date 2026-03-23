// Mokuri — Kacho-e Style Pack (花鳥画 Birds & Flowers)
// Intimate nature compositions in the kacho-e tradition.
// Each element: single-path silhouettes, organic Q-curves, strict accumulation.

const MOKURI_KACHOE_ELEMENTS = [

  // ============================================================
  //  BIRDS
  // ============================================================

  // Heron — patient S-neck stance, watching water
  {
    id: 'heron-standing',
    name: 'Heron',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 100 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'wing', defaultPaletteSlot: 1 },
      { id: 'accent', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Full silhouette: beak→head→S-neck→back→tail→legs→belly→throat
          { d: 'M8 42 Q16 34 28 26 Q42 14 54 18 Q64 26 58 42 Q50 58 44 74 Q40 86 46 96 Q56 104 64 116 Q70 130 66 142 Q62 150 58 156 L56 176 Q54 184 48 188 L40 188 Q36 184 38 176 L40 156 Q36 148 30 138 Q24 124 24 108 Q24 94 30 82 Q36 68 42 56 Q48 44 48 36 L8 42 Z', type: 'fill', zone: 'body' },
          // Folded wing
          { d: 'M46 96 Q56 90 64 98 Q72 112 68 128 Q64 140 56 142 Q48 142 42 136 Q38 124 40 110 Q44 100 46 96 Z', type: 'fill', zone: 'wing' },
          // Crown patch
          { d: 'M44 16 Q50 10 56 16 Q52 24 46 22 Q42 20 44 16 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M8 42 Q16 34 28 26 Q42 14 54 18 Q64 26 58 42 Q50 58 44 74 Q40 86 46 96 Q56 104 64 116 Q70 130 66 142 Q62 150 58 156 L56 176 Q54 184 48 188 L40 188 Q36 184 38 176 L40 156 Q36 148 30 138 Q24 124 24 108 Q24 94 30 82 Q36 68 42 56 Q48 44 48 36 L8 42 Z', type: 'fill', zone: 'body' },
          { d: 'M46 96 Q56 90 64 98 Q72 112 68 128 Q64 140 56 142 Q48 142 42 136 Q38 124 40 110 Q44 100 46 96 Z', type: 'fill', zone: 'wing' },
          { d: 'M44 16 Q50 10 56 16 Q52 24 46 22 Q42 20 44 16 Z', type: 'fill', zone: 'accent' },
          // Eye
          { d: 'M46 28 A3 3 0 1 1 45.99 28 Z', type: 'fill', zone: 'detail' },
          // Head-neck contour
          { d: 'M8 42 Q16 34 28 26 Q42 14 54 18 Q64 26 58 42 Q50 58 44 74', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          // Wing leading edge
          { d: 'M46 96 Q56 90 64 98 Q72 112 68 128', type: 'stroke', zone: 'wing', strokeWidth: 1 },
          // Beak ridge
          { d: 'M8 42 L48 36', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M8 42 Q16 34 28 26 Q42 14 54 18 Q64 26 58 42 Q50 58 44 74 Q40 86 46 96 Q56 104 64 116 Q70 130 66 142 Q62 150 58 156 L56 176 Q54 184 48 188 L40 188 Q36 184 38 176 L40 156 Q36 148 30 138 Q24 124 24 108 Q24 94 30 82 Q36 68 42 56 Q48 44 48 36 L8 42 Z', type: 'fill', zone: 'body' },
          { d: 'M46 96 Q56 90 64 98 Q72 112 68 128 Q64 140 56 142 Q48 142 42 136 Q38 124 40 110 Q44 100 46 96 Z', type: 'fill', zone: 'wing' },
          { d: 'M44 16 Q50 10 56 16 Q52 24 46 22 Q42 20 44 16 Z', type: 'fill', zone: 'accent' },
          { d: 'M46 28 A3 3 0 1 1 45.99 28 Z', type: 'fill', zone: 'detail' },
          { d: 'M8 42 Q16 34 28 26 Q42 14 54 18 Q64 26 58 42 Q50 58 44 74', type: 'stroke', zone: 'detail', strokeWidth: 1.5 },
          { d: 'M46 96 Q56 90 64 98 Q72 112 68 128', type: 'stroke', zone: 'wing', strokeWidth: 1 },
          { d: 'M8 42 L48 36', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Breast feather marks
          { d: 'M30 100 L34 96 M28 108 L32 104 M26 116 L30 112 M32 92 L36 88', type: 'stroke', zone: 'body', strokeWidth: 0.6 },
          // Wing feather lines
          { d: 'M50 102 Q56 108 58 116 M52 108 Q58 114 60 122 M48 114 Q54 120 56 128', type: 'stroke', zone: 'wing', strokeWidth: 0.5 },
          // Leg joints and toes
          { d: 'M56 176 L60 178 M38 176 L34 178 M48 188 L44 194 L52 194 M40 188 L36 194 L44 194', type: 'stroke', zone: 'detail', strokeWidth: 0.7 },
          // S-neck throat texture
          { d: 'M42 52 Q38 58 36 66 M46 48 Q42 54 40 62', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // Bush Warbler (uguisu) — plump perching songbird, cocked tail
  {
    id: 'bush-warbler',
    name: 'Bush Warbler',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 90 80',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 2 },
      { id: 'breast', defaultPaletteSlot: 4 },
      { id: 'wing', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Plump silhouette: beak→head→back→cocked tail→belly→throat
          { d: 'M12 34 Q18 26 28 20 Q40 14 50 18 Q58 22 62 30 Q64 36 68 32 Q74 26 78 30 Q76 36 70 40 Q64 46 58 52 Q50 60 40 62 Q30 62 22 56 Q16 48 14 40 L12 34 Z', type: 'fill', zone: 'body' },
          // Pale breast
          { d: 'M28 42 Q34 50 44 54 Q52 56 58 50 Q54 44 48 40 Q40 38 32 40 Q30 42 28 42 Z', type: 'fill', zone: 'breast' },
          // Folded wing
          { d: 'M44 22 Q54 20 60 26 Q66 34 64 42 Q60 48 54 48 Q48 46 44 40 Q42 32 44 22 Z', type: 'fill', zone: 'wing' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M12 34 Q18 26 28 20 Q40 14 50 18 Q58 22 62 30 Q64 36 68 32 Q74 26 78 30 Q76 36 70 40 Q64 46 58 52 Q50 60 40 62 Q30 62 22 56 Q16 48 14 40 L12 34 Z', type: 'fill', zone: 'body' },
          { d: 'M28 42 Q34 50 44 54 Q52 56 58 50 Q54 44 48 40 Q40 38 32 40 Q30 42 28 42 Z', type: 'fill', zone: 'breast' },
          { d: 'M44 22 Q54 20 60 26 Q66 34 64 42 Q60 48 54 48 Q48 46 44 40 Q42 32 44 22 Z', type: 'fill', zone: 'wing' },
          // Eye
          { d: 'M24 30 A2 2 0 1 1 23.99 30 Z', type: 'fill', zone: 'detail' },
          // Body outline
          { d: 'M12 34 Q18 26 28 20 Q40 14 50 18 Q58 22 62 30 Q64 36 68 32 Q74 26 78 30', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Wing edge
          { d: 'M44 22 Q54 20 60 26 Q66 34 64 42', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M12 34 Q18 26 28 20 Q40 14 50 18 Q58 22 62 30 Q64 36 68 32 Q74 26 78 30 Q76 36 70 40 Q64 46 58 52 Q50 60 40 62 Q30 62 22 56 Q16 48 14 40 L12 34 Z', type: 'fill', zone: 'body' },
          { d: 'M28 42 Q34 50 44 54 Q52 56 58 50 Q54 44 48 40 Q40 38 32 40 Q30 42 28 42 Z', type: 'fill', zone: 'breast' },
          { d: 'M44 22 Q54 20 60 26 Q66 34 64 42 Q60 48 54 48 Q48 46 44 40 Q42 32 44 22 Z', type: 'fill', zone: 'wing' },
          { d: 'M24 30 A2 2 0 1 1 23.99 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M12 34 Q18 26 28 20 Q40 14 50 18 Q58 22 62 30 Q64 36 68 32 Q74 26 78 30', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          { d: 'M44 22 Q54 20 60 26 Q66 34 64 42', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Breast feather texture
          { d: 'M32 44 Q36 48 38 52 M36 46 Q40 50 42 54 M40 44 Q44 48 46 52', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Wing feather lines
          { d: 'M48 26 Q54 30 56 36 M50 30 Q56 34 58 40 M52 34 Q58 38 60 44', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail barb lines
          { d: 'M70 30 Q74 28 76 30 M68 34 Q72 32 74 34', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Eye stripe
          { d: 'M20 30 Q22 28 26 28', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Toes
          { d: 'M38 62 L34 68 M40 62 L42 68 M42 62 L46 66', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // Swallow — dynamic swept-wing flight, forked tail
  {
    id: 'swallow-flight',
    name: 'Swallow',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 200 110',
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
          // Body with forked tail: head→body→upper prong→return→lower prong→return→belly
          { d: 'M12 52 Q20 44 32 42 Q46 40 60 42 Q74 44 84 48 Q92 38 102 28 Q110 22 114 26 Q108 32 98 38 Q88 46 84 50 Q88 58 98 66 Q108 74 114 80 Q110 84 102 78 Q92 70 84 60 Q74 64 60 66 Q46 68 32 66 Q20 62 12 56 L12 52 Z', type: 'fill', zone: 'body' },
          // Upper wing (swept scythe)
          { d: 'M34 42 Q52 28 78 16 Q108 6 142 4 Q168 4 182 10 Q172 16 148 18 Q116 22 86 32 Q58 40 34 42 Z', type: 'fill', zone: 'wing' },
          // Lower wing
          { d: 'M34 66 Q52 80 78 92 Q108 102 142 104 Q168 104 182 98 Q172 92 148 90 Q116 86 86 76 Q58 68 34 66 Z', type: 'fill', zone: 'wing' },
          // Pale breast
          { d: 'M28 48 Q36 54 48 58 Q58 60 64 56 Q60 50 52 46 Q42 44 32 46 L28 48 Z', type: 'fill', zone: 'breast' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M12 52 Q20 44 32 42 Q46 40 60 42 Q74 44 84 48 Q92 38 102 28 Q110 22 114 26 Q108 32 98 38 Q88 46 84 50 Q88 58 98 66 Q108 74 114 80 Q110 84 102 78 Q92 70 84 60 Q74 64 60 66 Q46 68 32 66 Q20 62 12 56 L12 52 Z', type: 'fill', zone: 'body' },
          { d: 'M34 42 Q52 28 78 16 Q108 6 142 4 Q168 4 182 10 Q172 16 148 18 Q116 22 86 32 Q58 40 34 42 Z', type: 'fill', zone: 'wing' },
          { d: 'M34 66 Q52 80 78 92 Q108 102 142 104 Q168 104 182 98 Q172 92 148 90 Q116 86 86 76 Q58 68 34 66 Z', type: 'fill', zone: 'wing' },
          { d: 'M28 48 Q36 54 48 58 Q58 60 64 56 Q60 50 52 46 Q42 44 32 46 L28 48 Z', type: 'fill', zone: 'breast' },
          // Eye
          { d: 'M24 48 A2 2 0 1 1 23.99 48 Z', type: 'fill', zone: 'accent' },
          // Throat patch
          { d: 'M26 46 Q30 42 36 42 Q38 46 34 50 Q30 52 26 50 L26 46 Z', type: 'fill', zone: 'accent' },
          // Wing leading edges
          { d: 'M34 42 Q52 28 78 16 Q108 6 142 4 Q168 4 182 10', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M34 66 Q52 80 78 92 Q108 102 142 104 Q168 104 182 98', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M12 52 Q20 44 32 42 Q46 40 60 42 Q74 44 84 48 Q92 38 102 28 Q110 22 114 26 Q108 32 98 38 Q88 46 84 50 Q88 58 98 66 Q108 74 114 80 Q110 84 102 78 Q92 70 84 60 Q74 64 60 66 Q46 68 32 66 Q20 62 12 56 L12 52 Z', type: 'fill', zone: 'body' },
          { d: 'M34 42 Q52 28 78 16 Q108 6 142 4 Q168 4 182 10 Q172 16 148 18 Q116 22 86 32 Q58 40 34 42 Z', type: 'fill', zone: 'wing' },
          { d: 'M34 66 Q52 80 78 92 Q108 102 142 104 Q168 104 182 98 Q172 92 148 90 Q116 86 86 76 Q58 68 34 66 Z', type: 'fill', zone: 'wing' },
          { d: 'M28 48 Q36 54 48 58 Q58 60 64 56 Q60 50 52 46 Q42 44 32 46 L28 48 Z', type: 'fill', zone: 'breast' },
          { d: 'M24 48 A2 2 0 1 1 23.99 48 Z', type: 'fill', zone: 'accent' },
          { d: 'M26 46 Q30 42 36 42 Q38 46 34 50 Q30 52 26 50 L26 46 Z', type: 'fill', zone: 'accent' },
          { d: 'M34 42 Q52 28 78 16 Q108 6 142 4 Q168 4 182 10', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M34 66 Q52 80 78 92 Q108 102 142 104 Q168 104 182 98', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          // Primary feather lines (upper wing)
          { d: 'M50 24 Q72 14 100 8 M60 28 Q82 18 112 10 M70 32 Q92 22 124 12 M80 36 Q102 26 136 14', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Primary feather lines (lower wing)
          { d: 'M50 84 Q72 94 100 100 M60 80 Q82 90 112 98 M70 76 Q92 86 124 96 M80 72 Q102 82 136 94', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail fork detail
          { d: 'M88 40 Q96 34 104 28 M88 66 Q96 72 104 78', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Breast texture
          { d: 'M36 50 Q40 54 44 56 M40 48 Q44 52 48 54', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Kingfisher — compact hunter, oversized head, dagger beak
  {
    id: 'kingfisher',
    name: 'Kingfisher',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 110 120',
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
          // Compact silhouette: massive beak→big head→short neck→body→stubby tail→legs→belly
          { d: 'M4 38 Q12 30 24 28 Q36 22 46 22 Q56 22 60 30 Q64 38 58 48 Q52 56 52 66 Q54 76 52 84 Q50 90 46 92 Q42 94 38 90 L36 102 Q34 108 30 112 L24 112 L26 108 L28 102 Q26 92 24 86 Q20 78 18 68 Q16 56 20 46 Q24 38 22 34 L4 38 Z', type: 'fill', zone: 'body' },
          // Vivid breast
          { d: 'M28 50 Q32 58 34 68 Q36 78 32 86 Q28 90 24 84 Q20 74 20 64 Q20 54 24 48 Q26 46 28 50 Z', type: 'fill', zone: 'breast' },
          // Wing
          { d: 'M48 34 Q58 30 64 36 Q70 44 68 54 Q66 64 60 72 Q54 78 50 80 Q44 78 42 72 Q40 62 42 52 Q44 42 48 34 Z', type: 'fill', zone: 'wing' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M4 38 Q12 30 24 28 Q36 22 46 22 Q56 22 60 30 Q64 38 58 48 Q52 56 52 66 Q54 76 52 84 Q50 90 46 92 Q42 94 38 90 L36 102 Q34 108 30 112 L24 112 L26 108 L28 102 Q26 92 24 86 Q20 78 18 68 Q16 56 20 46 Q24 38 22 34 L4 38 Z', type: 'fill', zone: 'body' },
          { d: 'M28 50 Q32 58 34 68 Q36 78 32 86 Q28 90 24 84 Q20 74 20 64 Q20 54 24 48 Q26 46 28 50 Z', type: 'fill', zone: 'breast' },
          { d: 'M48 34 Q58 30 64 36 Q70 44 68 54 Q66 64 60 72 Q54 78 50 80 Q44 78 42 72 Q40 62 42 52 Q44 42 48 34 Z', type: 'fill', zone: 'wing' },
          // Eye (white ring)
          { d: 'M36 30 A3 3 0 1 1 35.99 30 Z', type: 'fill', zone: 'detail' },
          // Head-beak contour
          { d: 'M4 38 Q12 30 24 28 Q36 22 46 22 Q56 22 60 30', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Beak ridge
          { d: 'M4 38 Q14 34 22 34', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          // Wing edge
          { d: 'M48 34 Q58 30 64 36 Q70 44 68 54', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M4 38 Q12 30 24 28 Q36 22 46 22 Q56 22 60 30 Q64 38 58 48 Q52 56 52 66 Q54 76 52 84 Q50 90 46 92 Q42 94 38 90 L36 102 Q34 108 30 112 L24 112 L26 108 L28 102 Q26 92 24 86 Q20 78 18 68 Q16 56 20 46 Q24 38 22 34 L4 38 Z', type: 'fill', zone: 'body' },
          { d: 'M28 50 Q32 58 34 68 Q36 78 32 86 Q28 90 24 84 Q20 74 20 64 Q20 54 24 48 Q26 46 28 50 Z', type: 'fill', zone: 'breast' },
          { d: 'M48 34 Q58 30 64 36 Q70 44 68 54 Q66 64 60 72 Q54 78 50 80 Q44 78 42 72 Q40 62 42 52 Q44 42 48 34 Z', type: 'fill', zone: 'wing' },
          { d: 'M36 30 A3 3 0 1 1 35.99 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M4 38 Q12 30 24 28 Q36 22 46 22 Q56 22 60 30', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M4 38 Q14 34 22 34', type: 'stroke', zone: 'detail', strokeWidth: 0.8 },
          { d: 'M48 34 Q58 30 64 36 Q70 44 68 54', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Head scale pattern
          { d: 'M40 24 Q44 22 48 24 M38 28 Q42 26 46 28 M42 32 Q46 30 50 32', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Wing covert feathers
          { d: 'M50 40 Q56 44 58 50 M52 46 Q58 50 60 56 M48 52 Q54 56 56 62 M50 58 Q56 62 58 68', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Breast feather texture
          { d: 'M26 56 Q28 62 28 68 M28 60 Q30 66 30 72 M24 64 Q26 70 26 76', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Toes
          { d: 'M30 112 L26 116 L34 116 M24 112 L20 116 L28 116', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
        ],
      },
    ],
  },

  // Egret — elegant white wader with trailing breeding plumes
  {
    id: 'egret',
    name: 'Egret',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 110 240',
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
          // Full silhouette: beak→head→neck→back→tail→legs→belly→throat
          { d: 'M8 42 Q16 34 28 26 Q40 18 52 22 Q62 28 58 40 Q52 54 48 68 Q44 80 48 90 Q54 98 60 108 Q66 122 64 136 Q62 148 58 158 L56 188 Q54 196 48 200 L38 200 Q34 196 36 188 L38 158 Q34 148 28 138 Q22 124 22 108 Q22 92 28 80 Q34 66 40 54 Q46 42 46 34 L8 42 Z', type: 'fill', zone: 'body' },
          // Trailing plume 1 (aigrette — the signature feature)
          { d: 'M62 112 Q72 108 82 100 Q90 92 96 88 Q92 94 84 102 Q76 112 66 118 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 2
          { d: 'M60 122 Q70 118 80 112 Q88 104 94 98 Q90 106 82 114 Q74 124 64 128 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 3
          { d: 'M58 130 Q68 126 76 120 Q84 114 90 108 Q86 116 78 124 Q70 132 62 136 Z', type: 'fill', zone: 'plume' },
          // Crown accent
          { d: 'M42 20 Q48 14 54 20 Q50 26 44 24 Q40 22 42 20 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M8 42 Q16 34 28 26 Q40 18 52 22 Q62 28 58 40 Q52 54 48 68 Q44 80 48 90 Q54 98 60 108 Q66 122 64 136 Q62 148 58 158 L56 188 Q54 196 48 200 L38 200 Q34 196 36 188 L38 158 Q34 148 28 138 Q22 124 22 108 Q22 92 28 80 Q34 66 40 54 Q46 42 46 34 L8 42 Z', type: 'fill', zone: 'body' },
          { d: 'M62 112 Q72 108 82 100 Q90 92 96 88 Q92 94 84 102 Q76 112 66 118 Z', type: 'fill', zone: 'plume' },
          { d: 'M60 122 Q70 118 80 112 Q88 104 94 98 Q90 106 82 114 Q74 124 64 128 Z', type: 'fill', zone: 'plume' },
          { d: 'M58 130 Q68 126 76 120 Q84 114 90 108 Q86 116 78 124 Q70 132 62 136 Z', type: 'fill', zone: 'plume' },
          { d: 'M42 20 Q48 14 54 20 Q50 26 44 24 Q40 22 42 20 Z', type: 'fill', zone: 'accent' },
          // Eye
          { d: 'M44 30 A2.5 2.5 0 1 1 43.99 30 Z', type: 'fill', zone: 'accent' },
          // Head-neck contour
          { d: 'M8 42 Q16 34 28 26 Q40 18 52 22 Q62 28 58 40 Q52 54 48 68', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // Beak ridge
          { d: 'M8 42 L46 34', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          // Plume trailing edges
          { d: 'M62 112 Q72 108 82 100 Q90 92 96 88 M60 122 Q70 118 80 112 M58 130 Q68 126 76 120', type: 'stroke', zone: 'plume', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M8 42 Q16 34 28 26 Q40 18 52 22 Q62 28 58 40 Q52 54 48 68 Q44 80 48 90 Q54 98 60 108 Q66 122 64 136 Q62 148 58 158 L56 188 Q54 196 48 200 L38 200 Q34 196 36 188 L38 158 Q34 148 28 138 Q22 124 22 108 Q22 92 28 80 Q34 66 40 54 Q46 42 46 34 L8 42 Z', type: 'fill', zone: 'body' },
          { d: 'M62 112 Q72 108 82 100 Q90 92 96 88 Q92 94 84 102 Q76 112 66 118 Z', type: 'fill', zone: 'plume' },
          { d: 'M60 122 Q70 118 80 112 Q88 104 94 98 Q90 106 82 114 Q74 124 64 128 Z', type: 'fill', zone: 'plume' },
          { d: 'M58 130 Q68 126 76 120 Q84 114 90 108 Q86 116 78 124 Q70 132 62 136 Z', type: 'fill', zone: 'plume' },
          { d: 'M42 20 Q48 14 54 20 Q50 26 44 24 Q40 22 42 20 Z', type: 'fill', zone: 'accent' },
          { d: 'M44 30 A2.5 2.5 0 1 1 43.99 30 Z', type: 'fill', zone: 'accent' },
          { d: 'M8 42 Q16 34 28 26 Q40 18 52 22 Q62 28 58 40 Q52 54 48 68', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M8 42 L46 34', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          { d: 'M62 112 Q72 108 82 100 Q90 92 96 88 M60 122 Q70 118 80 112 M58 130 Q68 126 76 120', type: 'stroke', zone: 'plume', strokeWidth: 0.6 },
          // Breast feather marks
          { d: 'M28 96 L32 92 M26 104 L30 100 M24 112 L28 108 M30 88 L34 84', type: 'stroke', zone: 'body', strokeWidth: 0.5 },
          // Plume wisps
          { d: 'M76 96 Q82 90 88 86 M72 106 Q78 100 84 96 M68 116 Q74 110 80 106', type: 'stroke', zone: 'plume', strokeWidth: 0.3 },
          // Leg joints and toes
          { d: 'M56 188 L60 190 M36 188 L32 190 M48 200 L44 206 L52 206 M38 200 L34 206 L42 206', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Neck throat texture
          { d: 'M40 52 Q36 58 34 66 M44 48 Q40 54 38 62', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLOWERS
  // ============================================================

  // Peony — lush layered bloom, king of flowers
  {
    id: 'peony',
    name: 'Peony',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 140 140',
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
          // Lush petal mass — scalloped circle suggesting layered petals
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          // Center stamens
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          // Leaves and stem
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z M68 120 Q66 132 66 140 L74 140 Q74 132 72 120 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z M68 120 Q66 132 66 140 L74 140 Q74 132 72 120 Z', type: 'fill', zone: 'leaf' },
          // Petal division lines (radiating from center, suggesting layers)
          { d: 'M70 52 L70 8 M60 56 L22 16 M56 66 L8 62 M60 78 L22 108 M78 78 L118 108 M86 66 L132 62 M82 56 L118 16 M70 82 L70 120', type: 'stroke', zone: 'petal', strokeWidth: 1.0 },
          // Inner petal ring
          { d: 'M70 28 Q86 24 100 34 Q112 46 110 64 Q108 80 96 92 Q82 100 70 100 Q58 100 44 92 Q32 80 30 64 Q28 46 40 34 Q54 24 70 28', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // Leaf veins
          { d: 'M36 114 Q28 120 22 128 M104 114 Q112 120 118 128', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z M68 120 Q66 132 66 140 L74 140 Q74 132 72 120 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70 52 L70 8 M60 56 L22 16 M56 66 L8 62 M60 78 L22 108 M78 78 L118 108 M86 66 L132 62 M82 56 L118 16 M70 82 L70 120', type: 'stroke', zone: 'petal', strokeWidth: 1.0 },
          { d: 'M70 28 Q86 24 100 34 Q112 46 110 64 Q108 80 96 92 Q82 100 70 100 Q58 100 44 92 Q32 80 30 64 Q28 46 40 34 Q54 24 70 28', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M36 114 Q28 120 22 128 M104 114 Q112 120 118 128', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Secondary petal veins between divisions
          { d: 'M66 42 L46 12 M74 42 L94 12 M58 60 L14 48 M82 60 L126 48 M62 82 L36 112 M78 82 L104 112', type: 'stroke', zone: 'petal', strokeWidth: 0.4 },
          // Stamen details in center
          { d: 'M68 58 L66 54 M72 56 L74 52 M66 66 L62 64 M76 66 L80 64 M70 74 L70 78 M74 72 L78 74', type: 'stroke', zone: 'center', strokeWidth: 0.5 },
          // Leaf secondary veins
          { d: 'M34 118 Q28 124 24 132 M38 122 Q32 128 28 136 M106 118 Q112 124 116 132 M102 122 Q108 128 112 136', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Leaf edge serrations
          { d: 'M22 120 Q20 118 22 116 M18 128 Q16 126 18 124 M118 120 Q120 118 118 116 M122 128 Q124 126 122 124', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Lotus — sacred water flower with pad leaf
  {
    id: 'lotus',
    name: 'Lotus',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 150 180',
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
          // Back petals (cupping upward)
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 Q68 6 68 18 Q68 36 62 54 Z M98 58 Q106 34 102 16 Q98 4 90 4 Q82 6 82 18 Q82 36 88 54 Z', type: 'fill', zone: 'petal' },
          // Center petal
          { d: 'M75 50 Q68 28 72 10 Q75 2 80 2 Q85 4 86 14 Q88 30 82 48 Z', type: 'fill', zone: 'petal' },
          // Front petals
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 Q60 14 64 28 Q68 42 68 58 Z M88 62 Q98 42 100 26 Q102 14 96 12 Q90 14 86 28 Q82 42 82 58 Z', type: 'fill', zone: 'petal' },
          // Seed pod center
          { d: 'M75 56 Q84 52 90 58 Q94 66 90 74 Q86 80 78 82 Q70 82 64 76 Q58 68 62 60 Q66 54 75 56 Z', type: 'fill', zone: 'center' },
          // Large pad leaf
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84 Q94 90 104 100 Q112 110 112 122 Q112 132 102 138 Q90 144 76 144 Q60 144 46 140 Q32 136 20 128 Z', type: 'fill', zone: 'leaf' },
          // Stem
          { d: 'M73 80 Q72 96 70 116 Q68 136 68 160 Q66 170 68 178 L76 178 Q78 170 76 160 Q78 136 80 116 Q82 96 80 80 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 Q68 6 68 18 Q68 36 62 54 Z M98 58 Q106 34 102 16 Q98 4 90 4 Q82 6 82 18 Q82 36 88 54 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 50 Q68 28 72 10 Q75 2 80 2 Q85 4 86 14 Q88 30 82 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 Q60 14 64 28 Q68 42 68 58 Z M88 62 Q98 42 100 26 Q102 14 96 12 Q90 14 86 28 Q82 42 82 58 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 56 Q84 52 90 58 Q94 66 90 74 Q86 80 78 82 Q70 82 64 76 Q58 68 62 60 Q66 54 75 56 Z', type: 'fill', zone: 'center' },
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84 Q94 90 104 100 Q112 110 112 122 Q112 132 102 138 Q90 144 76 144 Q60 144 46 140 Q32 136 20 128 Z', type: 'fill', zone: 'leaf' },
          { d: 'M73 80 Q72 96 70 116 Q68 136 68 160 Q66 170 68 178 L76 178 Q78 170 76 160 Q78 136 80 116 Q82 96 80 80 Z', type: 'fill', zone: 'stem' },
          // Petal edges
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 M98 58 Q106 34 102 16 Q98 4 90 4', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 M88 62 Q98 42 100 26 Q102 14 96 12', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Leaf edge
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84', type: 'stroke', zone: 'leaf', strokeWidth: 1.0 },
          // Leaf veins radiating from center notch
          { d: 'M62 108 Q50 98 36 90 M62 108 Q46 114 30 118 M62 108 Q50 122 40 134', type: 'stroke', zone: 'leaf', strokeWidth: 0.7 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 Q68 6 68 18 Q68 36 62 54 Z M98 58 Q106 34 102 16 Q98 4 90 4 Q82 6 82 18 Q82 36 88 54 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 50 Q68 28 72 10 Q75 2 80 2 Q85 4 86 14 Q88 30 82 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 Q60 14 64 28 Q68 42 68 58 Z M88 62 Q98 42 100 26 Q102 14 96 12 Q90 14 86 28 Q82 42 82 58 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 56 Q84 52 90 58 Q94 66 90 74 Q86 80 78 82 Q70 82 64 76 Q58 68 62 60 Q66 54 75 56 Z', type: 'fill', zone: 'center' },
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84 Q94 90 104 100 Q112 110 112 122 Q112 132 102 138 Q90 144 76 144 Q60 144 46 140 Q32 136 20 128 Z', type: 'fill', zone: 'leaf' },
          { d: 'M73 80 Q72 96 70 116 Q68 136 68 160 Q66 170 68 178 L76 178 Q78 170 76 160 Q78 136 80 116 Q82 96 80 80 Z', type: 'fill', zone: 'stem' },
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 M98 58 Q106 34 102 16 Q98 4 90 4', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 M88 62 Q98 42 100 26 Q102 14 96 12', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84', type: 'stroke', zone: 'leaf', strokeWidth: 1.0 },
          { d: 'M62 108 Q50 98 36 90 M62 108 Q46 114 30 118 M62 108 Q50 122 40 134', type: 'stroke', zone: 'leaf', strokeWidth: 0.7 },
          // Petal vein details
          { d: 'M56 52 Q50 36 52 20 M60 54 Q56 40 58 26 M92 52 Q98 36 96 20 M88 54 Q92 40 90 26', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Seed pod holes
          { d: 'M74 64 A2 2 0 1 1 73.99 64 Z M80 62 A2 2 0 1 1 79.99 62 Z M78 70 A2 2 0 1 1 77.99 70 Z M72 72 A2 2 0 1 1 71.99 72 Z M84 68 A2 2 0 1 1 83.99 68 Z', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
          // Secondary leaf veins
          { d: 'M62 108 Q70 98 82 90 M62 108 Q76 114 90 118 M62 108 Q72 122 82 134', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Water droplets on leaf
          { d: 'M36 104 Q34 102 36 100 Q38 102 36 104 Z M48 94 Q46 92 48 90 Q50 92 48 94 Z', type: 'fill', zone: 'leaf' },
        ],
      },
    ],
  },

  // Morning Glory (asagao) — trumpet flower on curling vine
  {
    id: 'morning-glory',
    name: 'Morning Glory',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 130 160',
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
          // Open trumpet face — slightly scalloped circle
          { d: 'M65 18 Q86 14 100 26 Q110 22 116 34 Q124 38 122 52 Q128 58 122 70 Q126 80 116 86 Q114 94 102 94 Q98 100 86 98 Q82 104 70 102 Q60 104 52 98 Q42 100 34 94 Q28 94 22 86 Q14 80 18 70 Q10 60 18 50 Q12 40 22 34 Q18 24 30 22 Q38 14 52 16 Q58 12 65 18 Z', type: 'fill', zone: 'petal' },
          // White center throat
          { d: 'M65 48 Q76 44 82 52 Q86 60 82 68 Q76 74 68 74 Q58 74 52 68 Q48 60 52 52 Q56 44 65 48 Z', type: 'fill', zone: 'center' },
          // Vine — curving stem with tendril
          { d: 'M62 100 Q56 112 50 124 Q44 136 40 146 Q36 154 38 160 L44 160 Q46 154 50 146 Q56 136 62 124 Q68 112 70 100 Z M42 142 Q36 138 32 132 Q28 126 30 122 Q34 124 36 130 Q38 136 40 140 Z', type: 'fill', zone: 'vine' },
          // Leaf — heart-shaped
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72 Q38 78 42 88 Q44 98 38 106 Z', type: 'fill', zone: 'leaf' },
          // Bud
          { d: 'M104 26 Q108 20 112 22 Q116 26 114 34 Q112 40 108 42 Q104 40 102 34 Q102 28 104 26 Z', type: 'fill', zone: 'petal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M65 18 Q86 14 100 26 Q110 22 116 34 Q124 38 122 52 Q128 58 122 70 Q126 80 116 86 Q114 94 102 94 Q98 100 86 98 Q82 104 70 102 Q60 104 52 98 Q42 100 34 94 Q28 94 22 86 Q14 80 18 70 Q10 60 18 50 Q12 40 22 34 Q18 24 30 22 Q38 14 52 16 Q58 12 65 18 Z', type: 'fill', zone: 'petal' },
          { d: 'M65 48 Q76 44 82 52 Q86 60 82 68 Q76 74 68 74 Q58 74 52 68 Q48 60 52 52 Q56 44 65 48 Z', type: 'fill', zone: 'center' },
          { d: 'M62 100 Q56 112 50 124 Q44 136 40 146 Q36 154 38 160 L44 160 Q46 154 50 146 Q56 136 62 124 Q68 112 70 100 Z M42 142 Q36 138 32 132 Q28 126 30 122 Q34 124 36 130 Q38 136 40 140 Z', type: 'fill', zone: 'vine' },
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72 Q38 78 42 88 Q44 98 38 106 Z', type: 'fill', zone: 'leaf' },
          { d: 'M104 26 Q108 20 112 22 Q116 26 114 34 Q112 40 108 42 Q104 40 102 34 Q102 28 104 26 Z', type: 'fill', zone: 'petal' },
          // Petal fold lines (star pattern radiating from center)
          { d: 'M65 48 L55 18 M65 48 L100 22 M65 48 L122 58 M65 48 L100 92 M65 48 L30 92 M65 48 L18 58', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // Leaf outline
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Bud sepal lines
          { d: 'M106 40 Q104 42 102 40 M112 38 Q114 42 112 44', type: 'stroke', zone: 'vine', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M65 18 Q86 14 100 26 Q110 22 116 34 Q124 38 122 52 Q128 58 122 70 Q126 80 116 86 Q114 94 102 94 Q98 100 86 98 Q82 104 70 102 Q60 104 52 98 Q42 100 34 94 Q28 94 22 86 Q14 80 18 70 Q10 60 18 50 Q12 40 22 34 Q18 24 30 22 Q38 14 52 16 Q58 12 65 18 Z', type: 'fill', zone: 'petal' },
          { d: 'M65 48 Q76 44 82 52 Q86 60 82 68 Q76 74 68 74 Q58 74 52 68 Q48 60 52 52 Q56 44 65 48 Z', type: 'fill', zone: 'center' },
          { d: 'M62 100 Q56 112 50 124 Q44 136 40 146 Q36 154 38 160 L44 160 Q46 154 50 146 Q56 136 62 124 Q68 112 70 100 Z M42 142 Q36 138 32 132 Q28 126 30 122 Q34 124 36 130 Q38 136 40 140 Z', type: 'fill', zone: 'vine' },
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72 Q38 78 42 88 Q44 98 38 106 Z', type: 'fill', zone: 'leaf' },
          { d: 'M104 26 Q108 20 112 22 Q116 26 114 34 Q112 40 108 42 Q104 40 102 34 Q102 28 104 26 Z', type: 'fill', zone: 'petal' },
          { d: 'M65 48 L55 18 M65 48 L100 22 M65 48 L122 58 M65 48 L100 92 M65 48 L30 92 M65 48 L18 58', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M106 40 Q104 42 102 40 M112 38 Q114 42 112 44', type: 'stroke', zone: 'vine', strokeWidth: 0.6 },
          // Secondary petal veins between fold lines
          { d: 'M62 44 L42 20 M68 44 L88 18 M58 56 L20 46 M72 56 L110 46 M60 72 L36 96 M70 72 L96 96', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Leaf vein details
          { d: 'M30 90 Q24 86 18 80 M32 96 Q26 94 20 90 M34 100 Q28 100 22 96', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Vine texture
          { d: 'M58 110 Q54 116 52 122 M48 132 Q44 138 42 144', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          // Stamens in center
          { d: 'M64 56 L62 52 M68 54 L70 50 M62 62 L58 60 M70 62 L74 60 M66 68 L66 72', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // Wisteria — cascading flower racemes from gnarled vine
  {
    id: 'wisteria',
    name: 'Wisteria',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 150 220',
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
          // Gnarled vine branch (tapered fill, wide→narrow)
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16 Q146 20 144 26 Q140 30 125 26 Q105 22 80 24 Q55 28 30 22 Q18 22 10 20 Z', type: 'fill', zone: 'vine' },
          // Hanging raceme left (long tapered cluster)
          { d: 'M35 22 Q32 36 30 52 Q28 68 26 84 Q24 100 22 112 Q20 120 24 122 Q28 120 30 108 Q32 92 34 76 Q36 60 38 44 Q40 30 38 22 Z', type: 'fill', zone: 'flower' },
          // Hanging raceme center (longest)
          { d: 'M75 24 Q72 44 70 66 Q68 88 66 110 Q64 132 62 150 Q60 164 64 168 Q68 164 70 150 Q72 132 74 110 Q76 88 78 66 Q80 44 78 24 Z', type: 'fill', zone: 'flower' },
          // Hanging raceme right
          { d: 'M115 22 Q112 38 110 56 Q108 74 106 90 Q104 106 102 116 Q100 124 104 126 Q108 122 110 110 Q112 94 114 78 Q116 62 118 44 Q120 30 118 22 Z', type: 'fill', zone: 'flower' },
          // Leaf clusters (compound leaves)
          { d: 'M48 12 Q42 6 36 6 Q30 8 30 14 Q30 18 36 20 Q42 20 48 16 Z M60 10 Q56 4 50 4 Q44 6 46 12 Q48 16 54 16 Q60 14 60 10 Z M95 12 Q100 6 106 6 Q112 8 112 14 Q112 18 106 20 Q100 20 96 16 Z M88 10 Q92 4 98 4 Q104 6 102 12 Q100 16 94 16 Q88 14 88 10 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16 Q146 20 144 26 Q140 30 125 26 Q105 22 80 24 Q55 28 30 22 Q18 22 10 20 Z', type: 'fill', zone: 'vine' },
          { d: 'M35 22 Q32 36 30 52 Q28 68 26 84 Q24 100 22 112 Q20 120 24 122 Q28 120 30 108 Q32 92 34 76 Q36 60 38 44 Q40 30 38 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M75 24 Q72 44 70 66 Q68 88 66 110 Q64 132 62 150 Q60 164 64 168 Q68 164 70 150 Q72 132 74 110 Q76 88 78 66 Q80 44 78 24 Z', type: 'fill', zone: 'flower' },
          { d: 'M115 22 Q112 38 110 56 Q108 74 106 90 Q104 106 102 116 Q100 124 104 126 Q108 122 110 110 Q112 94 114 78 Q116 62 118 44 Q120 30 118 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M48 12 Q42 6 36 6 Q30 8 30 14 Q30 18 36 20 Q42 20 48 16 Z M60 10 Q56 4 50 4 Q44 6 46 12 Q48 16 54 16 Q60 14 60 10 Z M95 12 Q100 6 106 6 Q112 8 112 14 Q112 18 106 20 Q100 20 96 16 Z M88 10 Q92 4 98 4 Q104 6 102 12 Q100 16 94 16 Q88 14 88 10 Z', type: 'fill', zone: 'leaf' },
          // Vine bark texture
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16', type: 'stroke', zone: 'vine', strokeWidth: 1.2 },
          // Individual flower outlines along racemes (butterfly shapes)
          { d: 'M30 36 Q28 34 30 32 Q32 34 30 36 M28 52 Q26 50 28 48 Q30 50 28 52 M26 68 Q24 66 26 64 Q28 66 26 68 M24 84 Q22 82 24 80 Q26 82 24 84 M22 100 Q20 98 22 96 Q24 98 22 100', type: 'stroke', zone: 'flower', strokeWidth: 0.6 },
          // Leaf veins
          { d: 'M40 8 Q36 12 34 16 M52 6 Q48 10 48 14 M100 8 Q104 12 106 16 M92 6 Q96 10 96 14', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16 Q146 20 144 26 Q140 30 125 26 Q105 22 80 24 Q55 28 30 22 Q18 22 10 20 Z', type: 'fill', zone: 'vine' },
          { d: 'M35 22 Q32 36 30 52 Q28 68 26 84 Q24 100 22 112 Q20 120 24 122 Q28 120 30 108 Q32 92 34 76 Q36 60 38 44 Q40 30 38 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M75 24 Q72 44 70 66 Q68 88 66 110 Q64 132 62 150 Q60 164 64 168 Q68 164 70 150 Q72 132 74 110 Q76 88 78 66 Q80 44 78 24 Z', type: 'fill', zone: 'flower' },
          { d: 'M115 22 Q112 38 110 56 Q108 74 106 90 Q104 106 102 116 Q100 124 104 126 Q108 122 110 110 Q112 94 114 78 Q116 62 118 44 Q120 30 118 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M48 12 Q42 6 36 6 Q30 8 30 14 Q30 18 36 20 Q42 20 48 16 Z M60 10 Q56 4 50 4 Q44 6 46 12 Q48 16 54 16 Q60 14 60 10 Z M95 12 Q100 6 106 6 Q112 8 112 14 Q112 18 106 20 Q100 20 96 16 Z M88 10 Q92 4 98 4 Q104 6 102 12 Q100 16 94 16 Q88 14 88 10 Z', type: 'fill', zone: 'leaf' },
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16', type: 'stroke', zone: 'vine', strokeWidth: 1.2 },
          { d: 'M30 36 Q28 34 30 32 Q32 34 30 36 M28 52 Q26 50 28 48 Q30 50 28 52 M26 68 Q24 66 26 64 Q28 66 26 68 M24 84 Q22 82 24 80 Q26 82 24 84 M22 100 Q20 98 22 96 Q24 98 22 100', type: 'stroke', zone: 'flower', strokeWidth: 0.6 },
          { d: 'M40 8 Q36 12 34 16 M52 6 Q48 10 48 14 M100 8 Q104 12 106 16 M92 6 Q96 10 96 14', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
          // Center raceme flower detail
          { d: 'M72 38 Q70 36 72 34 Q74 36 72 38 M70 56 Q68 54 70 52 Q72 54 70 56 M68 74 Q66 72 68 70 Q70 72 68 74 M66 92 Q64 90 66 88 Q68 90 66 92 M64 110 Q62 108 64 106 Q66 108 64 110 M62 128 Q60 126 62 124 Q64 126 62 128 M62 146 Q60 144 62 142 Q64 144 62 146', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          // Right raceme flower detail
          { d: 'M112 36 Q110 34 112 32 Q114 34 112 36 M110 56 Q108 54 110 52 Q112 54 110 56 M108 74 Q106 72 108 70 Q110 72 108 74 M106 92 Q104 90 106 88 Q108 90 106 92', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          // Vine bark hatching
          { d: 'M25 12 Q28 14 30 12 M50 14 Q52 16 54 14 M75 18 Q78 20 80 18 M105 16 Q108 18 110 16 M130 16 Q132 18 134 16', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          // Leaf serrations
          { d: 'M34 8 Q32 6 34 4 M42 6 Q40 4 42 2 M108 8 Q110 6 108 4 M100 6 Q102 4 100 2', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
        ],
      },
    ],
  },

];
