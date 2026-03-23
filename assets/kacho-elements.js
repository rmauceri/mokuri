// Mokuri — Kacho-e Style Pack (花鳥画 Birds & Flowers)
// Intimate nature compositions in the kacho-e tradition.
// Birds follow sparrow anatomy pattern: separate head, body, beak, wing, tail fills.

const MOKURI_KACHOE_ELEMENTS = [

  // ============================================================
  //  BIRDS — each with separate head, body, beak (detail zone),
  //  wing, tail, and breast/accent fills
  // ============================================================

  // Heron — patient S-neck stance, watching water
  // Sparrow-pattern anatomy: body (incl. S-neck), head, beak, wing, legs, crown
  {
    id: 'heron-standing',
    name: 'Heron',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '-16 0 116 210',
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
          // Body: S-curved neck + compact torso + rump (no head, no legs)
          { d: 'M42 32 Q50 40 48 54 Q44 68 38 80 Q34 92 40 102 Q48 110 56 120 Q62 132 60 144 Q56 152 50 156 Q42 156 34 148 Q26 138 22 124 Q18 108 22 96 Q28 82 34 68 Q40 54 44 42 Q46 34 42 32 Z', type: 'fill', zone: 'body' },
          // Head: round shape at top, overlaps body at neck
          { d: 'M24 18 Q24 10 34 8 Q44 8 50 16 Q54 24 48 32 Q40 38 32 36 Q22 32 20 24 Q20 18 24 18 Z', type: 'fill', zone: 'body' },
          // Beak: long sharp dagger, detail zone — THE signature
          { d: 'M-13 24 L22 19 L22 29 Z', type: 'fill', zone: 'detail' },
          // Folded wing
          { d: 'M42 102 Q54 96 62 106 Q68 118 66 132 Q62 144 54 148 Q46 148 40 140 Q36 130 38 116 Q40 106 42 102 Z', type: 'fill', zone: 'wing' },
          // Legs: two thin triangles from rump to feet
          { d: 'M48 154 L46 190 L40 200 M48 154 L52 190 L46 200 M46 190 L42 202 M52 190 L48 202', type: 'fill', zone: 'detail' },
          // Crown patch (red/accent dot)
          { d: 'M32 10 Q38 6 42 10 Q40 16 34 16 Q30 14 32 10 Z', type: 'fill', zone: 'accent' },
          // Occipital plumes — swept-back head feathers
          { d: 'M40 10 Q50 6 62 2 Q62 6 52 10 Q46 12 40 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 14 Q52 10 64 8 Q64 12 54 14 Q48 16 42 14 Z', type: 'fill', zone: 'detail' },
          // Lower neck hackle plumage — shaggy draping feathers
          { d: 'M34 62 Q30 70 26 80 Q24 84 28 82 Q32 74 36 66 Z', type: 'fill', zone: 'body' },
          { d: 'M30 70 Q26 78 22 88 Q20 92 24 90 Q28 82 32 74 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M42 32 Q50 40 48 54 Q44 68 38 80 Q34 92 40 102 Q48 110 56 120 Q62 132 60 144 Q56 152 50 156 Q42 156 34 148 Q26 138 22 124 Q18 108 22 96 Q28 82 34 68 Q40 54 44 42 Q46 34 42 32 Z', type: 'fill', zone: 'body' },
          { d: 'M24 18 Q24 10 34 8 Q44 8 50 16 Q54 24 48 32 Q40 38 32 36 Q22 32 20 24 Q20 18 24 18 Z', type: 'fill', zone: 'body' },
          { d: 'M-13 24 L22 19 L22 29 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 102 Q54 96 62 106 Q68 118 66 132 Q62 144 54 148 Q46 148 40 140 Q36 130 38 116 Q40 106 42 102 Z', type: 'fill', zone: 'wing' },
          { d: 'M48 154 L46 190 L40 200 M48 154 L52 190 L46 200 M46 190 L42 202 M52 190 L48 202', type: 'fill', zone: 'detail' },
          { d: 'M32 10 Q38 6 42 10 Q40 16 34 16 Q30 14 32 10 Z', type: 'fill', zone: 'accent' },
          { d: 'M40 10 Q50 6 62 2 Q62 6 52 10 Q46 12 40 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 14 Q52 10 64 8 Q64 12 54 14 Q48 16 42 14 Z', type: 'fill', zone: 'detail' },
          { d: 'M34 62 Q30 70 26 80 Q24 84 28 82 Q32 74 36 66 Z', type: 'fill', zone: 'body' },
          { d: 'M30 70 Q26 78 22 88 Q20 92 24 90 Q28 82 32 74 Z', type: 'fill', zone: 'body' },
          // Eye
          { d: 'M36 22 A3 3 0 1 1 35.99 22 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M24 18 Q24 10 34 8 Q44 8 50 16 Q54 24 48 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // S-neck contour (back)
          { d: 'M42 32 Q50 40 48 54 Q44 68 38 80 Q34 92 40 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Wing edge
          { d: 'M42 102 Q54 96 62 106 Q68 118 66 132', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M42 32 Q50 40 48 54 Q44 68 38 80 Q34 92 40 102 Q48 110 56 120 Q62 132 60 144 Q56 152 50 156 Q42 156 34 148 Q26 138 22 124 Q18 108 22 96 Q28 82 34 68 Q40 54 44 42 Q46 34 42 32 Z', type: 'fill', zone: 'body' },
          { d: 'M24 18 Q24 10 34 8 Q44 8 50 16 Q54 24 48 32 Q40 38 32 36 Q22 32 20 24 Q20 18 24 18 Z', type: 'fill', zone: 'body' },
          { d: 'M-13 24 L22 19 L22 29 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 102 Q54 96 62 106 Q68 118 66 132 Q62 144 54 148 Q46 148 40 140 Q36 130 38 116 Q40 106 42 102 Z', type: 'fill', zone: 'wing' },
          { d: 'M48 154 L46 190 L40 200 M48 154 L52 190 L46 200 M46 190 L42 202 M52 190 L48 202', type: 'fill', zone: 'detail' },
          { d: 'M32 10 Q38 6 42 10 Q40 16 34 16 Q30 14 32 10 Z', type: 'fill', zone: 'accent' },
          { d: 'M40 10 Q50 6 62 2 Q62 6 52 10 Q46 12 40 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 14 Q52 10 64 8 Q64 12 54 14 Q48 16 42 14 Z', type: 'fill', zone: 'detail' },
          { d: 'M34 62 Q30 70 26 80 Q24 84 28 82 Q32 74 36 66 Z', type: 'fill', zone: 'body' },
          { d: 'M30 70 Q26 78 22 88 Q20 92 24 90 Q28 82 32 74 Z', type: 'fill', zone: 'body' },
          { d: 'M36 22 A3 3 0 1 1 35.99 22 Z', type: 'fill', zone: 'detail' },
          { d: 'M24 18 Q24 10 34 8 Q44 8 50 16 Q54 24 48 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M42 32 Q50 40 48 54 Q44 68 38 80 Q34 92 40 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M42 102 Q54 96 62 106 Q68 118 66 132', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Breast feather marks
          { d: 'M26 108 L30 104 M24 116 L28 112 M22 124 L26 120 M28 100 L32 96', type: 'stroke', zone: 'body', strokeWidth: 0.6 },
          // Wing feather lines
          { d: 'M46 108 Q52 114 54 122 M48 114 Q54 120 56 128 M44 120 Q50 126 52 134', type: 'stroke', zone: 'wing', strokeWidth: 0.5 },
          // Beak ridge
          { d: 'M-13 24 L22 24', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Neck hackle wisps
          { d: 'M36 58 Q32 66 28 74 M32 64 Q28 72 24 80 M28 72 Q24 80 20 88', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Foot toes
          { d: 'M40 200 L36 206 L44 206 M46 200 L42 206 L50 206', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // Bush Warbler (uguisu) — plump perching songbird, cocked tail
  // Separate fills: round head, plump body, tiny beak, wing, cocked tail, breast
  {
    id: 'bush-warbler',
    name: 'Bush Warbler',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 100 80',
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
          // Plump body (torso oval, not including head)
          { d: 'M36 22 Q52 18 62 26 Q72 34 72 46 Q70 58 60 64 Q48 68 36 66 Q24 62 18 52 Q14 42 18 32 Q24 24 36 22 Z', type: 'fill', zone: 'body' },
          // Round head (overlaps body at neck area)
          { d: 'M28 10 Q38 6 44 12 Q50 20 46 28 Q40 34 32 32 Q22 28 18 22 Q18 14 24 10 Q26 8 28 10 Z', type: 'fill', zone: 'body' },
          // Tiny stubby beak — insectivore
          { d: 'M10 20 L18 16 L18 24 Z', type: 'fill', zone: 'detail' },
          // Pale breast
          { d: 'M32 36 Q38 44 46 50 Q54 56 60 50 Q56 42 50 36 Q44 32 38 34 Q34 36 32 36 Z', type: 'fill', zone: 'breast' },
          // Wing (on back)
          { d: 'M42 24 Q56 20 64 28 Q72 36 70 46 Q66 54 58 56 Q50 56 46 50 Q42 42 40 34 Q40 26 42 24 Z', type: 'fill', zone: 'wing' },
          // Cocked-up tail — warbler signature
          { d: 'M70 38 Q76 32 82 28 Q88 26 86 32 Q82 38 76 44 Z', type: 'fill', zone: 'body' },
          // Legs
          { d: 'M40 66 L38 74 L34 78 M44 66 L46 74 L50 78 M46 74 L44 78', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M36 22 Q52 18 62 26 Q72 34 72 46 Q70 58 60 64 Q48 68 36 66 Q24 62 18 52 Q14 42 18 32 Q24 24 36 22 Z', type: 'fill', zone: 'body' },
          { d: 'M28 10 Q38 6 44 12 Q50 20 46 28 Q40 34 32 32 Q22 28 18 22 Q18 14 24 10 Q26 8 28 10 Z', type: 'fill', zone: 'body' },
          { d: 'M10 20 L18 16 L18 24 Z', type: 'fill', zone: 'detail' },
          { d: 'M32 36 Q38 44 46 50 Q54 56 60 50 Q56 42 50 36 Q44 32 38 34 Q34 36 32 36 Z', type: 'fill', zone: 'breast' },
          { d: 'M42 24 Q56 20 64 28 Q72 36 70 46 Q66 54 58 56 Q50 56 46 50 Q42 42 40 34 Q40 26 42 24 Z', type: 'fill', zone: 'wing' },
          { d: 'M70 38 Q76 32 82 28 Q88 26 86 32 Q82 38 76 44 Z', type: 'fill', zone: 'body' },
          { d: 'M40 66 L38 74 L34 78 M44 66 L46 74 L50 78 M46 74 L44 78', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M28 20 A2.5 2.5 0 1 1 27.99 20 Z', type: 'fill', zone: 'detail' },
          // Wing edge
          { d: 'M42 24 Q56 20 64 28 Q72 36 70 46 Q66 54 58 56', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M36 22 Q52 18 62 26 Q72 34 72 46 Q70 58 60 64 Q48 68 36 66 Q24 62 18 52 Q14 42 18 32 Q24 24 36 22 Z', type: 'fill', zone: 'body' },
          { d: 'M28 10 Q38 6 44 12 Q50 20 46 28 Q40 34 32 32 Q22 28 18 22 Q18 14 24 10 Q26 8 28 10 Z', type: 'fill', zone: 'body' },
          { d: 'M10 20 L18 16 L18 24 Z', type: 'fill', zone: 'detail' },
          { d: 'M32 36 Q38 44 46 50 Q54 56 60 50 Q56 42 50 36 Q44 32 38 34 Q34 36 32 36 Z', type: 'fill', zone: 'breast' },
          { d: 'M42 24 Q56 20 64 28 Q72 36 70 46 Q66 54 58 56 Q50 56 46 50 Q42 42 40 34 Q40 26 42 24 Z', type: 'fill', zone: 'wing' },
          { d: 'M70 38 Q76 32 82 28 Q88 26 86 32 Q82 38 76 44 Z', type: 'fill', zone: 'body' },
          { d: 'M40 66 L38 74 L34 78 M44 66 L46 74 L50 78 M46 74 L44 78', type: 'fill', zone: 'detail' },
          { d: 'M28 20 A2.5 2.5 0 1 1 27.99 20 Z', type: 'fill', zone: 'detail' },
          { d: 'M42 24 Q56 20 64 28 Q72 36 70 46 Q66 54 58 56', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Eye ring/stripe
          { d: 'M24 20 Q26 18 30 18', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Breast feather texture
          { d: 'M36 40 Q40 44 42 48 M38 44 Q42 48 44 52 M40 48 Q44 52 46 56', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Wing feather lines
          { d: 'M46 28 L60 24 M48 32 L62 28 M50 36 L64 32 M52 40 L66 36', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail barb lines
          { d: 'M74 30 L82 28 M72 34 L80 30 M74 38 L80 36', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Head crown texture
          { d: 'M30 12 Q34 10 38 12', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // Swallow — dynamic swept-wing flight, deeply forked tail
  // Separate fills: compact body, small head, tiny beak, two swept wings, forked tail
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
          // Compact streamlined body (torpedo)
          { d: 'M22 48 Q30 40 42 38 Q56 36 68 40 Q80 44 86 50 Q80 56 68 60 Q56 64 42 62 Q30 60 22 56 L22 48 Z', type: 'fill', zone: 'body' },
          // Small round head (overlaps body at front)
          { d: 'M22 48 Q18 42 14 44 Q8 48 10 52 Q14 56 18 58 Q22 56 22 52 L22 48 Z', type: 'fill', zone: 'body' },
          // Tiny beak
          { d: 'M4 50 L10 46 L10 54 Z', type: 'fill', zone: 'accent' },
          // Upper wing — long swept scythe
          { d: 'M38 40 Q58 26 84 14 Q114 4 148 4 Q172 6 184 12 Q174 16 148 18 Q114 20 84 30 Q58 38 38 40 Z', type: 'fill', zone: 'wing' },
          // Lower wing
          { d: 'M38 62 Q58 76 84 88 Q114 98 148 98 Q172 96 184 90 Q174 86 148 84 Q114 82 84 72 Q58 64 38 62 Z', type: 'fill', zone: 'wing' },
          // Forked tail — two separate prongs
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          // Pale breast
          { d: 'M28 46 Q34 52 46 56 Q56 58 64 54 Q60 48 52 44 Q42 40 34 42 L28 46 Z', type: 'fill', zone: 'breast' },
          // Rust throat patch
          { d: 'M16 46 Q20 42 26 42 Q28 46 26 50 Q22 52 18 52 Q14 50 16 46 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M22 48 Q30 40 42 38 Q56 36 68 40 Q80 44 86 50 Q80 56 68 60 Q56 64 42 62 Q30 60 22 56 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M22 48 Q18 42 14 44 Q8 48 10 52 Q14 56 18 58 Q22 56 22 52 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M4 50 L10 46 L10 54 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q58 26 84 14 Q114 4 148 4 Q172 6 184 12 Q174 16 148 18 Q114 20 84 30 Q58 38 38 40 Z', type: 'fill', zone: 'wing' },
          { d: 'M38 62 Q58 76 84 88 Q114 98 148 98 Q172 96 184 90 Q174 86 148 84 Q114 82 84 72 Q58 64 38 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          { d: 'M28 46 Q34 52 46 56 Q56 58 64 54 Q60 48 52 44 Q42 40 34 42 L28 46 Z', type: 'fill', zone: 'breast' },
          { d: 'M16 46 Q20 42 26 42 Q28 46 26 50 Q22 52 18 52 Q14 50 16 46 Z', type: 'fill', zone: 'accent' },
          // Eye
          { d: 'M14 48 A2 2 0 1 1 13.99 48 Z', type: 'fill', zone: 'accent' },
          // Wing leading edges
          { d: 'M38 40 Q58 26 84 14 Q114 4 148 4 Q172 6 184 12', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M38 62 Q58 76 84 88 Q114 98 148 98 Q172 96 184 90', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M22 48 Q30 40 42 38 Q56 36 68 40 Q80 44 86 50 Q80 56 68 60 Q56 64 42 62 Q30 60 22 56 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M22 48 Q18 42 14 44 Q8 48 10 52 Q14 56 18 58 Q22 56 22 52 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M4 50 L10 46 L10 54 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q58 26 84 14 Q114 4 148 4 Q172 6 184 12 Q174 16 148 18 Q114 20 84 30 Q58 38 38 40 Z', type: 'fill', zone: 'wing' },
          { d: 'M38 62 Q58 76 84 88 Q114 98 148 98 Q172 96 184 90 Q174 86 148 84 Q114 82 84 72 Q58 64 38 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          { d: 'M28 46 Q34 52 46 56 Q56 58 64 54 Q60 48 52 44 Q42 40 34 42 L28 46 Z', type: 'fill', zone: 'breast' },
          { d: 'M16 46 Q20 42 26 42 Q28 46 26 50 Q22 52 18 52 Q14 50 16 46 Z', type: 'fill', zone: 'accent' },
          { d: 'M14 48 A2 2 0 1 1 13.99 48 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q58 26 84 14 Q114 4 148 4 Q172 6 184 12', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M38 62 Q58 76 84 88 Q114 98 148 98 Q172 96 184 90', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          // Primary feather lines (upper)
          { d: 'M54 30 Q78 18 108 8 M64 34 Q88 22 120 10 M74 36 Q98 26 132 14', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Primary feather lines (lower)
          { d: 'M54 72 Q78 84 108 94 M64 68 Q88 80 120 92 M74 66 Q98 76 132 88', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail fork detail
          { d: 'M86 42 Q94 34 102 28 M86 60 Q94 68 102 74', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Breast texture
          { d: 'M34 48 Q38 52 42 54 M38 46 Q42 50 46 52', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Kingfisher — compact hunter, oversized head, massive dagger beak
  // The beak is proportionally huge — 30px on a 32px head diameter
  {
    id: 'kingfisher',
    name: 'Kingfisher',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 110 110',
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
          // Compact oval body
          { d: 'M52 42 Q64 36 72 44 Q80 54 78 66 Q74 78 66 84 Q58 88 48 86 Q38 82 34 72 Q30 60 34 48 Q40 38 52 42 Z', type: 'fill', zone: 'body' },
          // LARGE head (almost as big as body — kingfisher signature)
          { d: 'M40 12 Q52 6 62 12 Q72 20 70 32 Q66 40 58 44 Q48 46 40 42 Q32 36 30 26 Q30 16 40 12 Z', type: 'fill', zone: 'body' },
          // MASSIVE dagger beak — THE defining feature (30px long!)
          { d: 'M2 24 L32 16 L32 30 Z', type: 'fill', zone: 'detail' },
          // Orange breast
          { d: 'M46 48 Q50 56 52 66 Q54 76 50 84 Q44 88 40 80 Q34 70 34 60 Q36 50 42 46 Z', type: 'fill', zone: 'breast' },
          // Wing
          { d: 'M54 44 Q66 40 74 48 Q80 56 78 66 Q74 76 68 80 Q60 82 56 76 Q50 68 50 58 Q50 48 54 44 Z', type: 'fill', zone: 'wing' },
          // Stubby tail
          { d: 'M68 78 Q76 74 82 76 Q86 80 82 84 Q76 86 68 84 Z', type: 'fill', zone: 'body' },
          // Legs
          { d: 'M46 86 L44 98 L40 104 M50 86 L52 98 L56 104 M52 98 L50 104', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M52 42 Q64 36 72 44 Q80 54 78 66 Q74 78 66 84 Q58 88 48 86 Q38 82 34 72 Q30 60 34 48 Q40 38 52 42 Z', type: 'fill', zone: 'body' },
          { d: 'M40 12 Q52 6 62 12 Q72 20 70 32 Q66 40 58 44 Q48 46 40 42 Q32 36 30 26 Q30 16 40 12 Z', type: 'fill', zone: 'body' },
          { d: 'M2 24 L32 16 L32 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M46 48 Q50 56 52 66 Q54 76 50 84 Q44 88 40 80 Q34 70 34 60 Q36 50 42 46 Z', type: 'fill', zone: 'breast' },
          { d: 'M54 44 Q66 40 74 48 Q80 56 78 66 Q74 76 68 80 Q60 82 56 76 Q50 68 50 58 Q50 48 54 44 Z', type: 'fill', zone: 'wing' },
          { d: 'M68 78 Q76 74 82 76 Q86 80 82 84 Q76 86 68 84 Z', type: 'fill', zone: 'body' },
          { d: 'M46 86 L44 98 L40 104 M50 86 L52 98 L56 104 M52 98 L50 104', type: 'fill', zone: 'detail' },
          // Eye (white ring)
          { d: 'M44 24 A3 3 0 1 1 43.99 24 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M40 12 Q52 6 62 12 Q72 20 70 32 Q66 40 58 44', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          // Beak ridge
          { d: 'M2 24 L32 22', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Wing edge
          { d: 'M54 44 Q66 40 74 48 Q80 56 78 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M52 42 Q64 36 72 44 Q80 54 78 66 Q74 78 66 84 Q58 88 48 86 Q38 82 34 72 Q30 60 34 48 Q40 38 52 42 Z', type: 'fill', zone: 'body' },
          { d: 'M40 12 Q52 6 62 12 Q72 20 70 32 Q66 40 58 44 Q48 46 40 42 Q32 36 30 26 Q30 16 40 12 Z', type: 'fill', zone: 'body' },
          { d: 'M2 24 L32 16 L32 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M46 48 Q50 56 52 66 Q54 76 50 84 Q44 88 40 80 Q34 70 34 60 Q36 50 42 46 Z', type: 'fill', zone: 'breast' },
          { d: 'M54 44 Q66 40 74 48 Q80 56 78 66 Q74 76 68 80 Q60 82 56 76 Q50 68 50 58 Q50 48 54 44 Z', type: 'fill', zone: 'wing' },
          { d: 'M68 78 Q76 74 82 76 Q86 80 82 84 Q76 86 68 84 Z', type: 'fill', zone: 'body' },
          { d: 'M46 86 L44 98 L40 104 M50 86 L52 98 L56 104 M52 98 L50 104', type: 'fill', zone: 'detail' },
          { d: 'M44 24 A3 3 0 1 1 43.99 24 Z', type: 'fill', zone: 'detail' },
          { d: 'M40 12 Q52 6 62 12 Q72 20 70 32 Q66 40 58 44', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          { d: 'M2 24 L32 22', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M54 44 Q66 40 74 48 Q80 56 78 66', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Head scale pattern (scalloped feathers)
          { d: 'M44 14 Q48 12 52 14 M42 18 Q46 16 50 18 M46 22 Q50 20 54 22 M44 26 Q48 24 52 26', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Wing covert feathers
          { d: 'M58 48 L70 44 M60 52 L72 48 M60 56 L74 52 M58 60 L72 56 M58 64 L70 60', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Breast feather texture
          { d: 'M44 54 Q46 60 46 66 M42 58 Q44 64 44 70 M46 62 Q48 68 48 74', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Foot toes
          { d: 'M40 104 L38 108 L44 108 M56 104 L54 108 L60 108', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // Egret — elegant white wader with trailing breeding plumes
  // Like heron but slimmer, pure white, with aigrette plumes
  {
    id: 'egret',
    name: 'Egret',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '-22 0 132 230',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 4 },
      { id: 'plume', defaultPaletteSlot: 3 },
      { id: 'accent', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Body: S-curved neck + slender torso
          { d: 'M46 32 Q54 40 52 54 Q48 68 42 80 Q38 92 42 102 Q50 110 58 120 Q64 132 62 144 Q58 152 52 158 Q44 160 36 152 Q28 142 24 128 Q20 112 24 98 Q30 84 36 70 Q42 54 46 42 Q48 34 46 32 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M26 18 Q28 10 38 8 Q48 8 54 16 Q58 24 52 32 Q44 38 34 36 Q24 30 22 24 Q22 18 26 18 Z', type: 'fill', zone: 'body' },
          // Beak: long thin needle, accent color (yellow for egret)
          { d: 'M-20 22 L24 18 L24 26 Z', type: 'fill', zone: 'accent' },
          // Trailing plume 1 (the aigrette — signature breeding plumage)
          { d: 'M60 118 Q70 114 80 106 Q88 98 94 92 Q90 100 82 108 Q74 116 64 122 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 2
          { d: 'M58 128 Q68 124 78 116 Q86 108 92 102 Q88 110 80 118 Q72 128 62 132 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 3
          { d: 'M56 136 Q66 132 74 126 Q82 118 88 112 Q84 120 76 128 Q68 136 60 140 Z', type: 'fill', zone: 'plume' },
          // Folded wing
          { d: 'M44 102 Q56 96 64 106 Q70 118 68 132 Q64 144 56 148 Q48 150 42 142 Q38 132 40 118 Q42 106 44 102 Z', type: 'fill', zone: 'body' },
          // Long legs
          { d: 'M50 156 L48 200 L42 210 M46 156 L44 200 L38 210 M48 200 L44 214 M44 200 L40 214', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M46 32 Q54 40 52 54 Q48 68 42 80 Q38 92 42 102 Q50 110 58 120 Q64 132 62 144 Q58 152 52 158 Q44 160 36 152 Q28 142 24 128 Q20 112 24 98 Q30 84 36 70 Q42 54 46 42 Q48 34 46 32 Z', type: 'fill', zone: 'body' },
          { d: 'M26 18 Q28 10 38 8 Q48 8 54 16 Q58 24 52 32 Q44 38 34 36 Q24 30 22 24 Q22 18 26 18 Z', type: 'fill', zone: 'body' },
          { d: 'M-20 22 L24 18 L24 26 Z', type: 'fill', zone: 'accent' },
          { d: 'M60 118 Q70 114 80 106 Q88 98 94 92 Q90 100 82 108 Q74 116 64 122 Z', type: 'fill', zone: 'plume' },
          { d: 'M58 128 Q68 124 78 116 Q86 108 92 102 Q88 110 80 118 Q72 128 62 132 Z', type: 'fill', zone: 'plume' },
          { d: 'M56 136 Q66 132 74 126 Q82 118 88 112 Q84 120 76 128 Q68 136 60 140 Z', type: 'fill', zone: 'plume' },
          { d: 'M44 102 Q56 96 64 106 Q70 118 68 132 Q64 144 56 148 Q48 150 42 142 Q38 132 40 118 Q42 106 44 102 Z', type: 'fill', zone: 'body' },
          { d: 'M50 156 L48 200 L42 210 M46 156 L44 200 L38 210 M48 200 L44 214 M44 200 L40 214', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M38 22 A2.5 2.5 0 1 1 37.99 22 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M26 18 Q28 10 38 8 Q48 8 54 16 Q58 24 52 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // S-neck contour
          { d: 'M46 32 Q54 40 52 54 Q48 68 42 80 Q38 92 42 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Plume trailing edges
          { d: 'M60 118 Q70 114 80 106 Q88 98 94 92 M58 128 Q68 124 78 116 M56 136 Q66 132 74 126', type: 'stroke', zone: 'plume', strokeWidth: 0.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M46 32 Q54 40 52 54 Q48 68 42 80 Q38 92 42 102 Q50 110 58 120 Q64 132 62 144 Q58 152 52 158 Q44 160 36 152 Q28 142 24 128 Q20 112 24 98 Q30 84 36 70 Q42 54 46 42 Q48 34 46 32 Z', type: 'fill', zone: 'body' },
          { d: 'M26 18 Q28 10 38 8 Q48 8 54 16 Q58 24 52 32 Q44 38 34 36 Q24 30 22 24 Q22 18 26 18 Z', type: 'fill', zone: 'body' },
          { d: 'M-20 22 L24 18 L24 26 Z', type: 'fill', zone: 'accent' },
          { d: 'M60 118 Q70 114 80 106 Q88 98 94 92 Q90 100 82 108 Q74 116 64 122 Z', type: 'fill', zone: 'plume' },
          { d: 'M58 128 Q68 124 78 116 Q86 108 92 102 Q88 110 80 118 Q72 128 62 132 Z', type: 'fill', zone: 'plume' },
          { d: 'M56 136 Q66 132 74 126 Q82 118 88 112 Q84 120 76 128 Q68 136 60 140 Z', type: 'fill', zone: 'plume' },
          { d: 'M44 102 Q56 96 64 106 Q70 118 68 132 Q64 144 56 148 Q48 150 42 142 Q38 132 40 118 Q42 106 44 102 Z', type: 'fill', zone: 'body' },
          { d: 'M50 156 L48 200 L42 210 M46 156 L44 200 L38 210 M48 200 L44 214 M44 200 L40 214', type: 'fill', zone: 'detail' },
          { d: 'M38 22 A2.5 2.5 0 1 1 37.99 22 Z', type: 'fill', zone: 'detail' },
          { d: 'M26 18 Q28 10 38 8 Q48 8 54 16 Q58 24 52 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M46 32 Q54 40 52 54 Q48 68 42 80 Q38 92 42 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M60 118 Q70 114 80 106 Q88 98 94 92 M58 128 Q68 124 78 116 M56 136 Q66 132 74 126', type: 'stroke', zone: 'plume', strokeWidth: 0.5 },
          // Breast feather marks
          { d: 'M28 108 L32 104 M26 116 L30 112 M24 124 L28 120 M30 100 L34 96', type: 'stroke', zone: 'body', strokeWidth: 0.5 },
          // Plume wisps
          { d: 'M76 102 Q82 96 88 92 M72 112 Q78 106 84 102 M68 122 Q74 116 80 112', type: 'stroke', zone: 'plume', strokeWidth: 0.3 },
          // Beak ridge
          { d: 'M-20 22 L24 22', type: 'stroke', zone: 'accent', strokeWidth: 0.5 },
          // Foot toes
          { d: 'M42 210 L38 218 L46 218 M38 210 L34 218 L42 218', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLOWERS (keeping existing designs — user confirmed these work)
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
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z M68 120 Q66 132 66 140 L74 140 Q74 132 72 120 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z M68 120 Q66 132 66 140 L74 140 Q74 132 72 120 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70 52 L70 8 M60 56 L22 16 M56 66 L8 62 M60 78 L22 108 M78 78 L118 108 M86 66 L132 62 M82 56 L118 16 M70 82 L70 120', type: 'stroke', zone: 'petal', strokeWidth: 1.0 },
          { d: 'M70 28 Q86 24 100 34 Q112 46 110 64 Q108 80 96 92 Q82 100 70 100 Q58 100 44 92 Q32 80 30 64 Q28 46 40 34 Q54 24 70 28', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
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
          { d: 'M66 42 L46 12 M74 42 L94 12 M58 60 L14 48 M82 60 L126 48 M62 82 L36 112 M78 82 L104 112', type: 'stroke', zone: 'petal', strokeWidth: 0.4 },
          { d: 'M68 58 L66 54 M72 56 L74 52 M66 66 L62 64 M76 66 L80 64 M70 74 L70 78 M74 72 L78 74', type: 'stroke', zone: 'center', strokeWidth: 0.5 },
          { d: 'M34 118 Q28 124 24 132 M38 122 Q32 128 28 136 M106 118 Q112 124 116 132 M102 122 Q108 128 112 136', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
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
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 Q68 6 68 18 Q68 36 62 54 Z M98 58 Q106 34 102 16 Q98 4 90 4 Q82 6 82 18 Q82 36 88 54 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 50 Q68 28 72 10 Q75 2 80 2 Q85 4 86 14 Q88 30 82 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 Q60 14 64 28 Q68 42 68 58 Z M88 62 Q98 42 100 26 Q102 14 96 12 Q90 14 86 28 Q82 42 82 58 Z', type: 'fill', zone: 'petal' },
          { d: 'M75 56 Q84 52 90 58 Q94 66 90 74 Q86 80 78 82 Q70 82 64 76 Q58 68 62 60 Q66 54 75 56 Z', type: 'fill', zone: 'center' },
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84 Q94 90 104 100 Q112 110 112 122 Q112 132 102 138 Q90 144 76 144 Q60 144 46 140 Q32 136 20 128 Z', type: 'fill', zone: 'leaf' },
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
          { d: 'M52 58 Q44 34 48 16 Q52 4 60 4 M98 58 Q106 34 102 16 Q98 4 90 4', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M62 62 Q52 42 50 26 Q48 14 54 12 M88 62 Q98 42 100 26 Q102 14 96 12', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M20 128 Q12 118 12 106 Q12 94 22 86 Q34 78 50 78 Q66 78 80 84', type: 'stroke', zone: 'leaf', strokeWidth: 1.0 },
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
          { d: 'M56 52 Q50 36 52 20 M60 54 Q56 40 58 26 M92 52 Q98 36 96 20 M88 54 Q92 40 90 26', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          { d: 'M74 64 A2 2 0 1 1 73.99 64 Z M80 62 A2 2 0 1 1 79.99 62 Z M78 70 A2 2 0 1 1 77.99 70 Z M72 72 A2 2 0 1 1 71.99 72 Z M84 68 A2 2 0 1 1 83.99 68 Z', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
          { d: 'M62 108 Q70 98 82 90 M62 108 Q76 114 90 118 M62 108 Q72 122 82 134', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
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
          { d: 'M65 18 Q86 14 100 26 Q110 22 116 34 Q124 38 122 52 Q128 58 122 70 Q126 80 116 86 Q114 94 102 94 Q98 100 86 98 Q82 104 70 102 Q60 104 52 98 Q42 100 34 94 Q28 94 22 86 Q14 80 18 70 Q10 60 18 50 Q12 40 22 34 Q18 24 30 22 Q38 14 52 16 Q58 12 65 18 Z', type: 'fill', zone: 'petal' },
          { d: 'M65 48 Q76 44 82 52 Q86 60 82 68 Q76 74 68 74 Q58 74 52 68 Q48 60 52 52 Q56 44 65 48 Z', type: 'fill', zone: 'center' },
          { d: 'M62 100 Q56 112 50 124 Q44 136 40 146 Q36 154 38 160 L44 160 Q46 154 50 146 Q56 136 62 124 Q68 112 70 100 Z M42 142 Q36 138 32 132 Q28 126 30 122 Q34 124 36 130 Q38 136 40 140 Z', type: 'fill', zone: 'vine' },
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72 Q38 78 42 88 Q44 98 38 106 Z', type: 'fill', zone: 'leaf' },
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
          { d: 'M65 48 L55 18 M65 48 L100 22 M65 48 L122 58 M65 48 L100 92 M65 48 L30 92 M65 48 L18 58', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M32 108 Q20 100 14 88 Q10 78 16 72 Q22 68 30 72', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
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
          { d: 'M62 44 L42 20 M68 44 L88 18 M58 56 L20 46 M72 56 L110 46 M60 72 L36 96 M70 72 L96 96', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          { d: 'M30 90 Q24 86 18 80 M32 96 Q26 94 20 90 M34 100 Q28 100 22 96', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          { d: 'M58 110 Q54 116 52 122 M48 132 Q44 138 42 144', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
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
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16 Q146 20 144 26 Q140 30 125 26 Q105 22 80 24 Q55 28 30 22 Q18 22 10 20 Z', type: 'fill', zone: 'vine' },
          { d: 'M35 22 Q32 36 30 52 Q28 68 26 84 Q24 100 22 112 Q20 120 24 122 Q28 120 30 108 Q32 92 34 76 Q36 60 38 44 Q40 30 38 22 Z', type: 'fill', zone: 'flower' },
          { d: 'M75 24 Q72 44 70 66 Q68 88 66 110 Q64 132 62 150 Q60 164 64 168 Q68 164 70 150 Q72 132 74 110 Q76 88 78 66 Q80 44 78 24 Z', type: 'fill', zone: 'flower' },
          { d: 'M115 22 Q112 38 110 56 Q108 74 106 90 Q104 106 102 116 Q100 124 104 126 Q108 122 110 110 Q112 94 114 78 Q116 62 118 44 Q120 30 118 22 Z', type: 'fill', zone: 'flower' },
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
          { d: 'M10 14 Q30 8 55 12 Q80 16 105 14 Q125 12 140 16', type: 'stroke', zone: 'vine', strokeWidth: 1.2 },
          { d: 'M30 36 Q28 34 30 32 Q32 34 30 36 M28 52 Q26 50 28 48 Q30 50 28 52 M26 68 Q24 66 26 64 Q28 66 26 68 M24 84 Q22 82 24 80 Q26 82 24 84 M22 100 Q20 98 22 96 Q24 98 22 100', type: 'stroke', zone: 'flower', strokeWidth: 0.6 },
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
          { d: 'M72 38 Q70 36 72 34 Q74 36 72 38 M70 56 Q68 54 70 52 Q72 54 70 56 M68 74 Q66 72 68 70 Q70 72 68 74 M66 92 Q64 90 66 88 Q68 90 66 92 M64 110 Q62 108 64 106 Q66 108 64 110 M62 128 Q60 126 62 124 Q64 126 62 128 M62 146 Q60 144 62 142 Q64 144 62 146', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          { d: 'M112 36 Q110 34 112 32 Q114 34 112 36 M110 56 Q108 54 110 52 Q112 54 110 56 M108 74 Q106 72 108 70 Q110 72 108 74 M106 92 Q104 90 106 88 Q108 90 106 92', type: 'stroke', zone: 'flower', strokeWidth: 0.5 },
          { d: 'M25 12 Q28 14 30 12 M50 14 Q52 16 54 14 M75 18 Q78 20 80 18 M105 16 Q108 18 110 16 M130 16 Q132 18 134 16', type: 'stroke', zone: 'vine', strokeWidth: 0.3 },
          { d: 'M34 8 Q32 6 34 4 M42 6 Q40 4 42 2 M108 8 Q110 6 108 4 M100 6 Q102 4 100 2', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
        ],
      },
    ],
  },

];
