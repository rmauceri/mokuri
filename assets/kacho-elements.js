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
    viewBox: '0 0 116 210',
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
          { d: 'M58 32 Q66 40 64 54 Q60 68 54 80 Q50 92 56 102 Q64 110 72 120 Q78 132 76 144 Q72 152 66 156 Q58 156 50 148 Q42 138 38 124 Q34 108 38 96 Q44 82 50 68 Q56 54 60 42 Q62 34 58 32 Z', type: 'fill', zone: 'body' },
          // Head: round shape at top, overlaps body at neck
          { d: 'M40 18 Q40 10 50 8 Q60 8 66 16 Q70 24 64 32 Q56 38 48 36 Q38 32 36 24 Q36 18 40 18 Z', type: 'fill', zone: 'body' },
          // Beak: long sharp dagger, detail zone — THE signature
          { d: 'M3 24 L38 19 L38 29 Z', type: 'fill', zone: 'detail' },
          // Folded wing
          { d: 'M58 102 Q70 96 78 106 Q84 118 82 132 Q78 144 70 148 Q62 148 56 140 Q52 130 54 116 Q56 106 58 102 Z', type: 'fill', zone: 'wing' },
          // Legs: two thin triangles from rump to feet
          { d: 'M64 154 L62 190 L56 200 M64 154 L68 190 L62 200 M62 190 L58 202 M68 190 L64 202', type: 'fill', zone: 'detail' },
          // Crown patch (red/accent dot)
          { d: 'M48 10 Q54 6 58 10 Q56 16 50 16 Q46 14 48 10 Z', type: 'fill', zone: 'accent' },
          // Occipital plumes — swept-back head feathers
          { d: 'M56 10 Q66 6 78 2 Q78 6 68 10 Q62 12 56 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M58 14 Q68 10 80 8 Q80 12 70 14 Q64 16 58 14 Z', type: 'fill', zone: 'detail' },
          // Lower neck hackle plumage — shaggy draping feathers
          { d: 'M50 62 Q46 70 42 80 Q40 84 44 82 Q48 74 52 66 Z', type: 'fill', zone: 'body' },
          { d: 'M46 70 Q42 78 38 88 Q36 92 40 90 Q44 82 48 74 Z', type: 'fill', zone: 'body' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M58 32 Q66 40 64 54 Q60 68 54 80 Q50 92 56 102 Q64 110 72 120 Q78 132 76 144 Q72 152 66 156 Q58 156 50 148 Q42 138 38 124 Q34 108 38 96 Q44 82 50 68 Q56 54 60 42 Q62 34 58 32 Z', type: 'fill', zone: 'body' },
          { d: 'M40 18 Q40 10 50 8 Q60 8 66 16 Q70 24 64 32 Q56 38 48 36 Q38 32 36 24 Q36 18 40 18 Z', type: 'fill', zone: 'body' },
          { d: 'M3 24 L38 19 L38 29 Z', type: 'fill', zone: 'detail' },
          { d: 'M58 102 Q70 96 78 106 Q84 118 82 132 Q78 144 70 148 Q62 148 56 140 Q52 130 54 116 Q56 106 58 102 Z', type: 'fill', zone: 'wing' },
          { d: 'M64 154 L62 190 L56 200 M64 154 L68 190 L62 200 M62 190 L58 202 M68 190 L64 202', type: 'fill', zone: 'detail' },
          { d: 'M48 10 Q54 6 58 10 Q56 16 50 16 Q46 14 48 10 Z', type: 'fill', zone: 'accent' },
          { d: 'M56 10 Q66 6 78 2 Q78 6 68 10 Q62 12 56 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M58 14 Q68 10 80 8 Q80 12 70 14 Q64 16 58 14 Z', type: 'fill', zone: 'detail' },
          { d: 'M50 62 Q46 70 42 80 Q40 84 44 82 Q48 74 52 66 Z', type: 'fill', zone: 'body' },
          { d: 'M46 70 Q42 78 38 88 Q36 92 40 90 Q44 82 48 74 Z', type: 'fill', zone: 'body' },
          // Eye
          { d: 'M52 22 A3 3 0 1 1 51.99 22 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M40 18 Q40 10 50 8 Q60 8 66 16 Q70 24 64 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // S-neck contour (back)
          { d: 'M58 32 Q66 40 64 54 Q60 68 54 80 Q50 92 56 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Wing edge
          { d: 'M58 102 Q70 96 78 106 Q84 118 82 132', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M58 32 Q66 40 64 54 Q60 68 54 80 Q50 92 56 102 Q64 110 72 120 Q78 132 76 144 Q72 152 66 156 Q58 156 50 148 Q42 138 38 124 Q34 108 38 96 Q44 82 50 68 Q56 54 60 42 Q62 34 58 32 Z', type: 'fill', zone: 'body' },
          { d: 'M40 18 Q40 10 50 8 Q60 8 66 16 Q70 24 64 32 Q56 38 48 36 Q38 32 36 24 Q36 18 40 18 Z', type: 'fill', zone: 'body' },
          { d: 'M3 24 L38 19 L38 29 Z', type: 'fill', zone: 'detail' },
          { d: 'M58 102 Q70 96 78 106 Q84 118 82 132 Q78 144 70 148 Q62 148 56 140 Q52 130 54 116 Q56 106 58 102 Z', type: 'fill', zone: 'wing' },
          { d: 'M64 154 L62 190 L56 200 M64 154 L68 190 L62 200 M62 190 L58 202 M68 190 L64 202', type: 'fill', zone: 'detail' },
          { d: 'M48 10 Q54 6 58 10 Q56 16 50 16 Q46 14 48 10 Z', type: 'fill', zone: 'accent' },
          { d: 'M56 10 Q66 6 78 2 Q78 6 68 10 Q62 12 56 10 Z', type: 'fill', zone: 'detail' },
          { d: 'M58 14 Q68 10 80 8 Q80 12 70 14 Q64 16 58 14 Z', type: 'fill', zone: 'detail' },
          { d: 'M50 62 Q46 70 42 80 Q40 84 44 82 Q48 74 52 66 Z', type: 'fill', zone: 'body' },
          { d: 'M46 70 Q42 78 38 88 Q36 92 40 90 Q44 82 48 74 Z', type: 'fill', zone: 'body' },
          { d: 'M52 22 A3 3 0 1 1 51.99 22 Z', type: 'fill', zone: 'detail' },
          { d: 'M40 18 Q40 10 50 8 Q60 8 66 16 Q70 24 64 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M58 32 Q66 40 64 54 Q60 68 54 80 Q50 92 56 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M58 102 Q70 96 78 106 Q84 118 82 132', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Breast feather marks
          { d: 'M42 108 L46 104 M40 116 L44 112 M38 124 L42 120 M44 100 L48 96', type: 'stroke', zone: 'body', strokeWidth: 0.6 },
          // Wing feather lines
          { d: 'M62 108 Q68 114 70 122 M64 114 Q70 120 72 128 M60 120 Q66 126 68 134', type: 'stroke', zone: 'wing', strokeWidth: 0.5 },
          // Beak ridge
          { d: 'M3 24 L38 24', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Neck hackle wisps
          { d: 'M52 58 Q48 66 44 74 M48 64 Q44 72 40 80 M44 72 Q40 80 36 88', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Foot toes
          { d: 'M56 200 L52 206 L60 206 M62 200 L58 206 L66 206', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
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
    viewBox: '0 0 125 110',
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
          // Upper wing — swept scythe
          { d: 'M38 40 Q50 28 65 18 Q82 10 100 10 Q110 12 116 16 Q112 18 100 20 Q82 24 65 30 Q50 36 38 40 Z', type: 'fill', zone: 'wing' },
          // Lower wing
          { d: 'M38 62 Q50 74 65 84 Q82 92 100 92 Q110 90 116 86 Q112 84 100 82 Q82 78 65 72 Q50 66 38 62 Z', type: 'fill', zone: 'wing' },
          // Forked tail — two separate prongs
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          // Narrow belly strip — visible centerline in flight
          { d: 'M26 48 Q36 50 48 52 Q58 52 66 50 Q62 48 52 46 Q42 44 34 46 L26 48 Z', type: 'fill', zone: 'breast' },
          // Tiny throat mark — small chevron behind head
          { d: 'M20 48 Q22 46 26 48 Q22 50 20 52 Q18 50 20 48 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M22 48 Q30 40 42 38 Q56 36 68 40 Q80 44 86 50 Q80 56 68 60 Q56 64 42 62 Q30 60 22 56 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M22 48 Q18 42 14 44 Q8 48 10 52 Q14 56 18 58 Q22 56 22 52 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M4 50 L10 46 L10 54 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q50 28 65 18 Q82 10 100 10 Q110 12 116 16 Q112 18 100 20 Q82 24 65 30 Q50 36 38 40 Z', type: 'fill', zone: 'wing' },
          { d: 'M38 62 Q50 74 65 84 Q82 92 100 92 Q110 90 116 86 Q112 84 100 82 Q82 78 65 72 Q50 66 38 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          { d: 'M26 48 Q36 50 48 52 Q58 52 66 50 Q62 48 52 46 Q42 44 34 46 L26 48 Z', type: 'fill', zone: 'breast' },
          { d: 'M20 48 Q22 46 26 48 Q22 50 20 52 Q18 50 20 48 Z', type: 'fill', zone: 'accent' },
          // Eye
          { d: 'M14 48 A2 2 0 1 1 13.99 48 Z', type: 'fill', zone: 'accent' },
          // Wing leading edges
          { d: 'M38 40 Q50 28 65 18 Q82 10 100 10 Q110 12 116 16', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M38 62 Q50 74 65 84 Q82 92 100 92 Q110 90 116 86', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M22 48 Q30 40 42 38 Q56 36 68 40 Q80 44 86 50 Q80 56 68 60 Q56 64 42 62 Q30 60 22 56 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M22 48 Q18 42 14 44 Q8 48 10 52 Q14 56 18 58 Q22 56 22 52 L22 48 Z', type: 'fill', zone: 'body' },
          { d: 'M4 50 L10 46 L10 54 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q50 28 65 18 Q82 10 100 10 Q110 12 116 16 Q112 18 100 20 Q82 24 65 30 Q50 36 38 40 Z', type: 'fill', zone: 'wing' },
          { d: 'M38 62 Q50 74 65 84 Q82 92 100 92 Q110 90 116 86 Q112 84 100 82 Q82 78 65 72 Q50 66 38 62 Z', type: 'fill', zone: 'wing' },
          { d: 'M82 44 Q90 36 100 28 Q108 22 112 26 Q106 32 96 38 Z M82 58 Q90 66 100 74 Q108 80 112 76 Q106 70 96 64 Z', type: 'fill', zone: 'body' },
          { d: 'M26 48 Q36 50 48 52 Q58 52 66 50 Q62 48 52 46 Q42 44 34 46 L26 48 Z', type: 'fill', zone: 'breast' },
          { d: 'M20 48 Q22 46 26 48 Q22 50 20 52 Q18 50 20 48 Z', type: 'fill', zone: 'accent' },
          { d: 'M14 48 A2 2 0 1 1 13.99 48 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q50 28 65 18 Q82 10 100 10 Q110 12 116 16', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          { d: 'M38 62 Q50 74 65 84 Q82 92 100 92 Q110 90 116 86', type: 'stroke', zone: 'wing', strokeWidth: 1.0 },
          // Primary feather lines (upper)
          { d: 'M47 32 Q59 22 75 14 M52 34 Q65 24 82 16 M57 36 Q70 28 88 20', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Primary feather lines (lower)
          { d: 'M47 70 Q59 80 75 88 M52 68 Q65 78 82 86 M57 66 Q70 74 88 82', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Tail fork detail
          { d: 'M86 42 Q94 34 102 28 M86 60 Q94 68 102 74', type: 'stroke', zone: 'body', strokeWidth: 0.4 },
          // Breast texture
          { d: 'M34 48 Q38 52 42 54 M38 46 Q42 50 46 52', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Kingfisher — compact perching hunter, forward-leaning, massive dagger beak
  // Slim body, smaller oval head, long flat tail
  {
    id: 'kingfisher',
    name: 'Kingfisher',
    category: 'fauna',
    pack: 'kacho-e',
    viewBox: '0 0 120 100',
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
          // Slim body — forward-leaning compact oval
          { d: 'M40 32 Q50 28 58 34 Q66 42 64 54 Q62 64 56 70 Q48 74 40 72 Q32 68 28 58 Q26 46 30 38 Q34 32 40 32 Z', type: 'fill', zone: 'body' },
          // Smaller oval head
          { d: 'M22 18 Q30 12 40 16 Q48 22 46 30 Q42 36 34 36 Q26 34 20 28 Q18 22 22 18 Z', type: 'fill', zone: 'body' },
          // MASSIVE dagger beak — THE defining feature
          { d: 'M2 24 L22 18 L22 30 Z', type: 'fill', zone: 'detail' },
          // Orange breast
          { d: 'M38 38 Q42 46 44 56 Q44 64 40 70 Q36 72 32 66 Q28 56 28 48 Q30 40 36 36 Z', type: 'fill', zone: 'breast' },
          // Wing on back
          { d: 'M44 34 Q54 30 62 38 Q68 46 66 56 Q62 64 56 66 Q50 66 46 60 Q42 52 42 44 Q42 36 44 34 Z', type: 'fill', zone: 'wing' },
          // Long flat tail — extends well past body
          { d: 'M58 56 Q68 52 80 50 Q92 48 100 50 Q104 52 100 56 Q92 58 80 58 Q68 58 60 60 Z', type: 'fill', zone: 'body' },
          // Legs
          { d: 'M40 72 L38 86 L34 92 M44 72 L46 86 L50 92 M46 86 L44 92', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M40 32 Q50 28 58 34 Q66 42 64 54 Q62 64 56 70 Q48 74 40 72 Q32 68 28 58 Q26 46 30 38 Q34 32 40 32 Z', type: 'fill', zone: 'body' },
          { d: 'M22 18 Q30 12 40 16 Q48 22 46 30 Q42 36 34 36 Q26 34 20 28 Q18 22 22 18 Z', type: 'fill', zone: 'body' },
          { d: 'M2 24 L22 18 L22 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M38 38 Q42 46 44 56 Q44 64 40 70 Q36 72 32 66 Q28 56 28 48 Q30 40 36 36 Z', type: 'fill', zone: 'breast' },
          { d: 'M44 34 Q54 30 62 38 Q68 46 66 56 Q62 64 56 66 Q50 66 46 60 Q42 52 42 44 Q42 36 44 34 Z', type: 'fill', zone: 'wing' },
          { d: 'M58 56 Q68 52 80 50 Q92 48 100 50 Q104 52 100 56 Q92 58 80 58 Q68 58 60 60 Z', type: 'fill', zone: 'body' },
          { d: 'M40 72 L38 86 L34 92 M44 72 L46 86 L50 92 M46 86 L44 92', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M32 24 A2.5 2.5 0 1 1 31.99 24 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M22 18 Q30 12 40 16 Q48 22 46 30 Q42 36 34 36', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          // Beak ridge
          { d: 'M2 24 L22 24', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          // Wing edge
          { d: 'M44 34 Q54 30 62 38 Q68 46 66 56', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M40 32 Q50 28 58 34 Q66 42 64 54 Q62 64 56 70 Q48 74 40 72 Q32 68 28 58 Q26 46 30 38 Q34 32 40 32 Z', type: 'fill', zone: 'body' },
          { d: 'M22 18 Q30 12 40 16 Q48 22 46 30 Q42 36 34 36 Q26 34 20 28 Q18 22 22 18 Z', type: 'fill', zone: 'body' },
          { d: 'M2 24 L22 18 L22 30 Z', type: 'fill', zone: 'detail' },
          { d: 'M38 38 Q42 46 44 56 Q44 64 40 70 Q36 72 32 66 Q28 56 28 48 Q30 40 36 36 Z', type: 'fill', zone: 'breast' },
          { d: 'M44 34 Q54 30 62 38 Q68 46 66 56 Q62 64 56 66 Q50 66 46 60 Q42 52 42 44 Q42 36 44 34 Z', type: 'fill', zone: 'wing' },
          { d: 'M58 56 Q68 52 80 50 Q92 48 100 50 Q104 52 100 56 Q92 58 80 58 Q68 58 60 60 Z', type: 'fill', zone: 'body' },
          { d: 'M40 72 L38 86 L34 92 M44 72 L46 86 L50 92 M46 86 L44 92', type: 'fill', zone: 'detail' },
          { d: 'M32 24 A2.5 2.5 0 1 1 31.99 24 Z', type: 'fill', zone: 'detail' },
          { d: 'M22 18 Q30 12 40 16 Q48 22 46 30 Q42 36 34 36', type: 'stroke', zone: 'detail', strokeWidth: 1.0 },
          { d: 'M2 24 L22 24', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M44 34 Q54 30 62 38 Q68 46 66 56', type: 'stroke', zone: 'wing', strokeWidth: 0.8 },
          // Head feather scales
          { d: 'M28 18 Q32 16 36 18 M26 22 Q30 20 34 22 M30 26 Q34 24 38 26', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Wing covert feathers
          { d: 'M48 38 L58 34 M50 42 L60 38 M50 46 L62 42 M48 50 L60 46 M48 54 L58 52', type: 'stroke', zone: 'wing', strokeWidth: 0.4 },
          // Breast feather texture
          { d: 'M36 44 Q38 50 38 56 M34 48 Q36 54 36 60', type: 'stroke', zone: 'breast', strokeWidth: 0.3 },
          // Tail feather lines
          { d: 'M62 54 L82 50 M64 56 L84 52 M62 58 L80 56', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Foot toes
          { d: 'M34 92 L32 96 L38 96 M50 92 L48 96 L54 96', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
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
    viewBox: '0 0 132 230',
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
          { d: 'M68 32 Q76 40 74 54 Q70 68 64 80 Q60 92 64 102 Q72 110 80 120 Q86 132 84 144 Q80 152 74 158 Q66 160 58 152 Q50 142 46 128 Q42 112 46 98 Q52 84 58 70 Q64 54 68 42 Q70 34 68 32 Z', type: 'fill', zone: 'body' },
          // Head
          { d: 'M48 18 Q50 10 60 8 Q70 8 76 16 Q80 24 74 32 Q66 38 56 36 Q46 30 44 24 Q44 18 48 18 Z', type: 'fill', zone: 'body' },
          // Beak: long thin needle, accent color (yellow for egret)
          { d: 'M2 22 L46 18 L46 26 Z', type: 'fill', zone: 'accent' },
          // Trailing plume 1 (the aigrette — signature breeding plumage)
          { d: 'M82 118 Q92 114 102 106 Q110 98 116 92 Q112 100 104 108 Q96 116 86 122 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 2
          { d: 'M80 128 Q90 124 100 116 Q108 108 114 102 Q110 110 102 118 Q94 128 84 132 Z', type: 'fill', zone: 'plume' },
          // Trailing plume 3
          { d: 'M78 136 Q88 132 96 126 Q104 118 110 112 Q106 120 98 128 Q90 136 82 140 Z', type: 'fill', zone: 'plume' },
          // Folded wing
          { d: 'M66 102 Q78 96 86 106 Q92 118 90 132 Q86 144 78 148 Q70 150 64 142 Q60 132 62 118 Q64 106 66 102 Z', type: 'fill', zone: 'body' },
          // Long legs
          { d: 'M72 156 L70 200 L64 210 M68 156 L66 200 L60 210 M70 200 L66 214 M66 200 L62 214', type: 'fill', zone: 'detail' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M68 32 Q76 40 74 54 Q70 68 64 80 Q60 92 64 102 Q72 110 80 120 Q86 132 84 144 Q80 152 74 158 Q66 160 58 152 Q50 142 46 128 Q42 112 46 98 Q52 84 58 70 Q64 54 68 42 Q70 34 68 32 Z', type: 'fill', zone: 'body' },
          { d: 'M48 18 Q50 10 60 8 Q70 8 76 16 Q80 24 74 32 Q66 38 56 36 Q46 30 44 24 Q44 18 48 18 Z', type: 'fill', zone: 'body' },
          { d: 'M2 22 L46 18 L46 26 Z', type: 'fill', zone: 'accent' },
          { d: 'M82 118 Q92 114 102 106 Q110 98 116 92 Q112 100 104 108 Q96 116 86 122 Z', type: 'fill', zone: 'plume' },
          { d: 'M80 128 Q90 124 100 116 Q108 108 114 102 Q110 110 102 118 Q94 128 84 132 Z', type: 'fill', zone: 'plume' },
          { d: 'M78 136 Q88 132 96 126 Q104 118 110 112 Q106 120 98 128 Q90 136 82 140 Z', type: 'fill', zone: 'plume' },
          { d: 'M66 102 Q78 96 86 106 Q92 118 90 132 Q86 144 78 148 Q70 150 64 142 Q60 132 62 118 Q64 106 66 102 Z', type: 'fill', zone: 'body' },
          { d: 'M72 156 L70 200 L64 210 M68 156 L66 200 L60 210 M70 200 L66 214 M66 200 L62 214', type: 'fill', zone: 'detail' },
          // Eye
          { d: 'M60 22 A2.5 2.5 0 1 1 59.99 22 Z', type: 'fill', zone: 'detail' },
          // Head outline
          { d: 'M48 18 Q50 10 60 8 Q70 8 76 16 Q80 24 74 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          // S-neck contour
          { d: 'M68 32 Q76 40 74 54 Q70 68 64 80 Q60 92 64 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Plume trailing edges
          { d: 'M82 118 Q92 114 102 106 Q110 98 116 92 M80 128 Q90 124 100 116 M78 136 Q88 132 96 126', type: 'stroke', zone: 'plume', strokeWidth: 0.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M68 32 Q76 40 74 54 Q70 68 64 80 Q60 92 64 102 Q72 110 80 120 Q86 132 84 144 Q80 152 74 158 Q66 160 58 152 Q50 142 46 128 Q42 112 46 98 Q52 84 58 70 Q64 54 68 42 Q70 34 68 32 Z', type: 'fill', zone: 'body' },
          { d: 'M48 18 Q50 10 60 8 Q70 8 76 16 Q80 24 74 32 Q66 38 56 36 Q46 30 44 24 Q44 18 48 18 Z', type: 'fill', zone: 'body' },
          { d: 'M2 22 L46 18 L46 26 Z', type: 'fill', zone: 'accent' },
          { d: 'M82 118 Q92 114 102 106 Q110 98 116 92 Q112 100 104 108 Q96 116 86 122 Z', type: 'fill', zone: 'plume' },
          { d: 'M80 128 Q90 124 100 116 Q108 108 114 102 Q110 110 102 118 Q94 128 84 132 Z', type: 'fill', zone: 'plume' },
          { d: 'M78 136 Q88 132 96 126 Q104 118 110 112 Q106 120 98 128 Q90 136 82 140 Z', type: 'fill', zone: 'plume' },
          { d: 'M66 102 Q78 96 86 106 Q92 118 90 132 Q86 144 78 148 Q70 150 64 142 Q60 132 62 118 Q64 106 66 102 Z', type: 'fill', zone: 'body' },
          { d: 'M72 156 L70 200 L64 210 M68 156 L66 200 L60 210 M70 200 L66 214 M66 200 L62 214', type: 'fill', zone: 'detail' },
          { d: 'M60 22 A2.5 2.5 0 1 1 59.99 22 Z', type: 'fill', zone: 'detail' },
          { d: 'M48 18 Q50 10 60 8 Q70 8 76 16 Q80 24 74 32', type: 'stroke', zone: 'detail', strokeWidth: 1.2 },
          { d: 'M68 32 Q76 40 74 54 Q70 68 64 80 Q60 92 64 102', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M82 118 Q92 114 102 106 Q110 98 116 92 M80 128 Q90 124 100 116 M78 136 Q88 132 96 126', type: 'stroke', zone: 'plume', strokeWidth: 0.5 },
          // Breast feather marks
          { d: 'M50 108 L54 104 M48 116 L52 112 M46 124 L50 120 M52 100 L56 96', type: 'stroke', zone: 'body', strokeWidth: 0.5 },
          // Plume wisps
          { d: 'M98 102 Q104 96 110 92 M94 112 Q100 106 106 102 M90 122 Q96 116 102 112', type: 'stroke', zone: 'plume', strokeWidth: 0.3 },
          // Beak ridge
          { d: 'M2 22 L46 22', type: 'stroke', zone: 'accent', strokeWidth: 0.5 },
          // Foot toes
          { d: 'M64 210 L60 218 L68 218 M60 210 L56 218 L64 218', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLOWERS (keeping existing designs — user confirmed these work)
  // ============================================================

  // Peony — lush layered bloom on long stem, king of flowers
  {
    id: 'peony',
    name: 'Peony',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 140 200',
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
          // Outer bloom mass
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          // Center boss
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          // Leaves at base of bloom
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z', type: 'fill', zone: 'leaf' },
          // Long thin stem
          { d: 'M68 120 Q66 140 66 160 Q64 175 66 190 Q66 196 68 200 L72 200 Q74 196 74 190 Q76 175 74 160 Q74 140 72 120 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 120 Q66 140 66 160 Q64 175 66 190 Q66 196 68 200 L72 200 Q74 196 74 190 Q76 175 74 160 Q74 140 72 120 Z', type: 'fill', zone: 'stem' },
          // Petal ring divisions (major petal boundaries radiating from center)
          { d: 'M70 52 L70 8 M60 56 L22 16 M56 66 L8 62 M60 78 L22 108 M78 78 L118 108 M86 66 L132 62 M82 56 L118 16 M70 82 L70 120', type: 'stroke', zone: 'petal', strokeWidth: 1.0 },
          // Inner petal ring
          { d: 'M70 28 Q86 24 100 34 Q112 46 110 64 Q108 80 96 92 Q82 100 70 100 Q58 100 44 92 Q32 80 30 64 Q28 46 40 34 Q54 24 70 28', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // Leaf veins
          { d: 'M36 114 Q28 120 22 128 M104 114 Q112 120 118 128', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Stem contour
          { d: 'M68 120 Q66 140 66 160 Q64 175 66 190', type: 'stroke', zone: 'stem', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M70 8 Q88 5 104 16 Q114 12 122 24 Q132 28 132 42 Q138 50 134 62 Q138 72 132 82 Q134 92 126 100 Q122 110 112 112 Q106 118 94 118 Q86 124 74 122 Q64 124 54 118 Q44 118 34 112 Q26 110 20 100 Q12 94 10 82 Q4 74 8 62 Q4 52 10 42 Q6 32 16 24 Q22 14 34 14 Q46 6 70 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M70 52 Q80 48 88 54 Q94 62 90 72 Q86 80 78 82 Q68 84 60 78 Q54 70 56 60 Q60 52 70 52 Z', type: 'fill', zone: 'center' },
          { d: 'M40 112 Q28 108 20 118 Q14 130 22 138 Q30 140 40 132 Q48 124 44 116 Z M100 112 Q112 108 120 118 Q126 130 118 138 Q110 140 100 132 Q92 124 96 116 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 120 Q66 140 66 160 Q64 175 66 190 Q66 196 68 200 L72 200 Q74 196 74 190 Q76 175 74 160 Q74 140 72 120 Z', type: 'fill', zone: 'stem' },
          { d: 'M70 52 L70 8 M60 56 L22 16 M56 66 L8 62 M60 78 L22 108 M78 78 L118 108 M86 66 L132 62 M82 56 L118 16 M70 82 L70 120', type: 'stroke', zone: 'petal', strokeWidth: 1.0 },
          { d: 'M70 28 Q86 24 100 34 Q112 46 110 64 Q108 80 96 92 Q82 100 70 100 Q58 100 44 92 Q32 80 30 64 Q28 46 40 34 Q54 24 70 28', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M36 114 Q28 120 22 128 M104 114 Q112 120 118 128', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M68 120 Q66 140 66 160 Q64 175 66 190', type: 'stroke', zone: 'stem', strokeWidth: 0.6 },
          // Fine petal veins (secondary divisions)
          { d: 'M66 42 L46 12 M74 42 L94 12 M58 60 L14 48 M82 60 L126 48 M62 82 L36 112 M78 82 L104 112', type: 'stroke', zone: 'petal', strokeWidth: 0.4 },
          // Stamen tufts in center
          { d: 'M68 58 L66 54 M72 56 L74 52 M66 66 L62 64 M76 66 L80 64 M70 74 L70 78 M74 72 L78 74', type: 'stroke', zone: 'center', strokeWidth: 0.5 },
          // Leaf serration marks
          { d: 'M34 118 Q28 124 24 132 M38 122 Q32 128 28 136 M106 118 Q112 124 116 132 M102 122 Q108 128 112 136', type: 'stroke', zone: 'leaf', strokeWidth: 0.4 },
          // Leaf edge nicks
          { d: 'M22 120 Q20 118 22 116 M18 128 Q16 126 18 124 M118 120 Q120 118 118 116 M122 128 Q124 126 122 124', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
          // Stem thorn marks
          { d: 'M66 145 L62 142 M72 155 L76 152 M66 170 L62 167', type: 'stroke', zone: 'stem', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Lotus Pod — seed pod on long stem (hasu no mi)
  // Flat-topped dome with seed holes, long thin curved stem
  {
    id: 'lotus-pod',
    name: 'Lotus Pod',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 80 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'pod', defaultPaletteSlot: 2 },
      { id: 'seed', defaultPaletteSlot: 3 },
      { id: 'stem', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Broad dome pod — flat top, rounded sides
          { d: 'M22 20 Q22 8 40 4 Q58 8 58 20 Q60 32 56 40 Q48 46 40 46 Q32 46 24 40 Q20 32 22 20 Z', type: 'fill', zone: 'pod' },
          // Flat top face with seed holes — 5 small circles
          { d: 'M32 10 A3 3 0 1 1 31.99 10 Z M40 8 A3 3 0 1 1 39.99 8 Z M48 10 A3 3 0 1 1 47.99 10 Z M36 16 A3 3 0 1 1 35.99 16 Z M44 16 A3 3 0 1 1 43.99 16 Z', type: 'fill', zone: 'seed' },
          // Long thin stem — gentle curve
          { d: 'M38 44 Q36 70 34 100 Q32 130 34 160 Q36 180 38 196 L42 196 Q44 180 46 160 Q48 130 46 100 Q44 70 42 44 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M22 20 Q22 8 40 4 Q58 8 58 20 Q60 32 56 40 Q48 46 40 46 Q32 46 24 40 Q20 32 22 20 Z', type: 'fill', zone: 'pod' },
          { d: 'M32 10 A3 3 0 1 1 31.99 10 Z M40 8 A3 3 0 1 1 39.99 8 Z M48 10 A3 3 0 1 1 47.99 10 Z M36 16 A3 3 0 1 1 35.99 16 Z M44 16 A3 3 0 1 1 43.99 16 Z', type: 'fill', zone: 'seed' },
          { d: 'M38 44 Q36 70 34 100 Q32 130 34 160 Q36 180 38 196 L42 196 Q44 180 46 160 Q48 130 46 100 Q44 70 42 44 Z', type: 'fill', zone: 'stem' },
          // Pod dome outline
          { d: 'M22 20 Q22 8 40 4 Q58 8 58 20 Q60 32 56 40', type: 'stroke', zone: 'pod', strokeWidth: 1.0 },
          // Pod rim line
          { d: 'M24 22 Q32 26 40 26 Q48 26 56 22', type: 'stroke', zone: 'pod', strokeWidth: 0.8 },
          // Stem contour
          { d: 'M38 44 Q36 70 34 100 Q32 130 34 160', type: 'stroke', zone: 'stem', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M22 20 Q22 8 40 4 Q58 8 58 20 Q60 32 56 40 Q48 46 40 46 Q32 46 24 40 Q20 32 22 20 Z', type: 'fill', zone: 'pod' },
          { d: 'M32 10 A3 3 0 1 1 31.99 10 Z M40 8 A3 3 0 1 1 39.99 8 Z M48 10 A3 3 0 1 1 47.99 10 Z M36 16 A3 3 0 1 1 35.99 16 Z M44 16 A3 3 0 1 1 43.99 16 Z', type: 'fill', zone: 'seed' },
          { d: 'M38 44 Q36 70 34 100 Q32 130 34 160 Q36 180 38 196 L42 196 Q44 180 46 160 Q48 130 46 100 Q44 70 42 44 Z', type: 'fill', zone: 'stem' },
          { d: 'M22 20 Q22 8 40 4 Q58 8 58 20 Q60 32 56 40', type: 'stroke', zone: 'pod', strokeWidth: 1.0 },
          { d: 'M24 22 Q32 26 40 26 Q48 26 56 22', type: 'stroke', zone: 'pod', strokeWidth: 0.8 },
          { d: 'M38 44 Q36 70 34 100 Q32 130 34 160', type: 'stroke', zone: 'stem', strokeWidth: 0.6 },
          // Seed dimple rings
          { d: 'M32 10 A4 4 0 1 1 31.99 10 Z M40 8 A4 4 0 1 1 39.99 8 Z M48 10 A4 4 0 1 1 47.99 10 Z M36 16 A4 4 0 1 1 35.99 16 Z M44 16 A4 4 0 1 1 43.99 16 Z', type: 'stroke', zone: 'seed', strokeWidth: 0.4 },
          // Pod surface texture (vertical ribs)
          { d: 'M30 22 Q30 30 28 36 M36 24 Q36 34 34 40 M44 24 Q44 34 46 40 M50 22 Q50 30 52 36', type: 'stroke', zone: 'pod', strokeWidth: 0.3 },
          // Stem fiber lines
          { d: 'M38 60 Q36 80 34 100 M40 70 Q38 90 36 110 M42 100 Q40 120 38 140', type: 'stroke', zone: 'stem', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Lotus Cluster — lotus flowers with layered teardrop petals on stems, with lily pads
  {
    id: 'lotus-cluster',
    name: 'Lotus Cluster',
    category: 'flora',
    pack: 'kacho-e',
    viewBox: '0 0 180 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 3 },
      { id: 'pad', defaultPaletteSlot: 2 },
      { id: 'stem', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // === Main bloom (left) — open lotus with layered teardrop petals ===
          // Outer petals (ring of teardrops radiating from center)
          { d: 'M54 28 Q48 16 52 6 Q56 2 60 6 Q64 16 58 28 Z', type: 'fill', zone: 'petal' },
          { d: 'M40 36 Q30 28 28 32 Q26 38 32 42 Q38 44 44 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M72 36 Q82 28 84 32 Q86 38 80 42 Q74 44 68 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M38 52 Q26 54 24 60 Q26 66 32 66 Q38 62 42 56 Z', type: 'fill', zone: 'petal' },
          { d: 'M74 52 Q86 54 88 60 Q86 66 80 66 Q74 62 70 56 Z', type: 'fill', zone: 'petal' },
          // Inner petals (slightly smaller, overlapping)
          { d: 'M52 32 Q50 24 54 18 Q56 14 58 18 Q62 24 60 32 Z', type: 'fill', zone: 'petal' },
          { d: 'M44 42 Q38 38 38 34 Q40 32 44 34 Q48 38 48 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M68 42 Q74 38 74 34 Q72 32 68 34 Q64 38 64 42 Z', type: 'fill', zone: 'petal' },
          // Golden center
          { d: 'M50 42 Q54 38 62 38 Q66 42 64 48 Q60 52 54 50 Q48 48 50 42 Z', type: 'fill', zone: 'center' },
          // === Second bloom (right, smaller, partly open) ===
          { d: 'M134 40 Q130 28 134 18 Q138 14 140 18 Q144 28 140 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M124 46 Q116 42 114 46 Q116 52 122 52 Q128 50 128 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M150 46 Q158 42 160 46 Q158 52 152 52 Q146 50 146 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M132 46 Q134 42 140 42 Q144 46 142 50 Q138 52 134 50 Q130 48 132 46 Z', type: 'fill', zone: 'center' },
          // === Lily pads ===
          // Large pad (front)
          { d: 'M70 108 Q40 104 28 116 Q20 128 32 140 Q44 148 68 148 Q92 148 104 140 Q116 128 108 116 Q96 104 70 108 Z', type: 'fill', zone: 'pad' },
          // Small pad (right)
          { d: 'M140 120 Q128 118 122 126 Q120 134 128 140 Q136 144 148 140 Q154 134 150 126 Q146 118 140 120 Z', type: 'fill', zone: 'pad' },
          // === Stems ===
          // Left bloom stem
          { d: 'M54 52 Q52 68 50 84 Q48 96 50 108 L58 108 Q60 96 58 84 Q56 68 58 52 Z', type: 'fill', zone: 'stem' },
          // Right bloom stem
          { d: 'M134 52 Q132 68 130 84 Q128 96 130 108 L138 108 Q140 96 138 84 Q136 68 138 52 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills verbatim
          { d: 'M54 28 Q48 16 52 6 Q56 2 60 6 Q64 16 58 28 Z', type: 'fill', zone: 'petal' },
          { d: 'M40 36 Q30 28 28 32 Q26 38 32 42 Q38 44 44 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M72 36 Q82 28 84 32 Q86 38 80 42 Q74 44 68 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M38 52 Q26 54 24 60 Q26 66 32 66 Q38 62 42 56 Z', type: 'fill', zone: 'petal' },
          { d: 'M74 52 Q86 54 88 60 Q86 66 80 66 Q74 62 70 56 Z', type: 'fill', zone: 'petal' },
          { d: 'M52 32 Q50 24 54 18 Q56 14 58 18 Q62 24 60 32 Z', type: 'fill', zone: 'petal' },
          { d: 'M44 42 Q38 38 38 34 Q40 32 44 34 Q48 38 48 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M68 42 Q74 38 74 34 Q72 32 68 34 Q64 38 64 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M50 42 Q54 38 62 38 Q66 42 64 48 Q60 52 54 50 Q48 48 50 42 Z', type: 'fill', zone: 'center' },
          { d: 'M134 40 Q130 28 134 18 Q138 14 140 18 Q144 28 140 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M124 46 Q116 42 114 46 Q116 52 122 52 Q128 50 128 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M150 46 Q158 42 160 46 Q158 52 152 52 Q146 50 146 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M132 46 Q134 42 140 42 Q144 46 142 50 Q138 52 134 50 Q130 48 132 46 Z', type: 'fill', zone: 'center' },
          { d: 'M70 108 Q40 104 28 116 Q20 128 32 140 Q44 148 68 148 Q92 148 104 140 Q116 128 108 116 Q96 104 70 108 Z', type: 'fill', zone: 'pad' },
          { d: 'M140 120 Q128 118 122 126 Q120 134 128 140 Q136 144 148 140 Q154 134 150 126 Q146 118 140 120 Z', type: 'fill', zone: 'pad' },
          { d: 'M54 52 Q52 68 50 84 Q48 96 50 108 L58 108 Q60 96 58 84 Q56 68 58 52 Z', type: 'fill', zone: 'stem' },
          { d: 'M134 52 Q132 68 130 84 Q128 96 130 108 L138 108 Q140 96 138 84 Q136 68 138 52 Z', type: 'fill', zone: 'stem' },
          // Shape strokes — petal edges, pad outlines
          { d: 'M54 28 Q48 16 52 6 Q56 2 60 6 Q64 16 58 28', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M40 36 Q30 28 28 32 Q26 38 32 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M72 36 Q82 28 84 32 Q86 38 80 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Pad V-notch (large)
          { d: 'M70 108 L68 128 M70 108 L72 128', type: 'stroke', zone: 'pad', strokeWidth: 1.0 },
          // Pad outline
          { d: 'M70 108 Q40 104 28 116 Q20 128 32 140 Q44 148 68 148', type: 'stroke', zone: 'pad', strokeWidth: 0.8 },
          // Small pad V-notch
          { d: 'M140 120 L138 132 M140 120 L142 132', type: 'stroke', zone: 'pad', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All block fills verbatim
          { d: 'M54 28 Q48 16 52 6 Q56 2 60 6 Q64 16 58 28 Z', type: 'fill', zone: 'petal' },
          { d: 'M40 36 Q30 28 28 32 Q26 38 32 42 Q38 44 44 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M72 36 Q82 28 84 32 Q86 38 80 42 Q74 44 68 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M38 52 Q26 54 24 60 Q26 66 32 66 Q38 62 42 56 Z', type: 'fill', zone: 'petal' },
          { d: 'M74 52 Q86 54 88 60 Q86 66 80 66 Q74 62 70 56 Z', type: 'fill', zone: 'petal' },
          { d: 'M52 32 Q50 24 54 18 Q56 14 58 18 Q62 24 60 32 Z', type: 'fill', zone: 'petal' },
          { d: 'M44 42 Q38 38 38 34 Q40 32 44 34 Q48 38 48 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M68 42 Q74 38 74 34 Q72 32 68 34 Q64 38 64 42 Z', type: 'fill', zone: 'petal' },
          { d: 'M50 42 Q54 38 62 38 Q66 42 64 48 Q60 52 54 50 Q48 48 50 42 Z', type: 'fill', zone: 'center' },
          { d: 'M134 40 Q130 28 134 18 Q138 14 140 18 Q144 28 140 40 Z', type: 'fill', zone: 'petal' },
          { d: 'M124 46 Q116 42 114 46 Q116 52 122 52 Q128 50 128 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M150 46 Q158 42 160 46 Q158 52 152 52 Q146 50 146 48 Z', type: 'fill', zone: 'petal' },
          { d: 'M132 46 Q134 42 140 42 Q144 46 142 50 Q138 52 134 50 Q130 48 132 46 Z', type: 'fill', zone: 'center' },
          { d: 'M70 108 Q40 104 28 116 Q20 128 32 140 Q44 148 68 148 Q92 148 104 140 Q116 128 108 116 Q96 104 70 108 Z', type: 'fill', zone: 'pad' },
          { d: 'M140 120 Q128 118 122 126 Q120 134 128 140 Q136 144 148 140 Q154 134 150 126 Q146 118 140 120 Z', type: 'fill', zone: 'pad' },
          { d: 'M54 52 Q52 68 50 84 Q48 96 50 108 L58 108 Q60 96 58 84 Q56 68 58 52 Z', type: 'fill', zone: 'stem' },
          { d: 'M134 52 Q132 68 130 84 Q128 96 130 108 L138 108 Q140 96 138 84 Q136 68 138 52 Z', type: 'fill', zone: 'stem' },
          // All shape strokes verbatim
          { d: 'M54 28 Q48 16 52 6 Q56 2 60 6 Q64 16 58 28', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M40 36 Q30 28 28 32 Q26 38 32 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M72 36 Q82 28 84 32 Q86 38 80 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M70 108 L68 128 M70 108 L72 128', type: 'stroke', zone: 'pad', strokeWidth: 1.0 },
          { d: 'M70 108 Q40 104 28 116 Q20 128 32 140 Q44 148 68 148', type: 'stroke', zone: 'pad', strokeWidth: 0.8 },
          { d: 'M140 120 L138 132 M140 120 L142 132', type: 'stroke', zone: 'pad', strokeWidth: 0.8 },
          // Detail — petal veins
          { d: 'M56 24 Q54 16 56 8 M42 38 Q36 34 34 36 M70 38 Q76 34 78 36', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          { d: 'M40 54 Q32 56 28 60 M72 54 Q80 56 84 60', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Detail — center stamens
          { d: 'M54 44 L52 40 M58 42 L58 38 M62 44 L64 40 M56 48 L54 50', type: 'stroke', zone: 'center', strokeWidth: 0.4 },
          // Detail — right bloom petal veins
          { d: 'M136 36 Q134 28 136 20 M128 48 Q122 46 118 48 M148 48 Q154 46 156 48', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Detail — pad radial veins
          { d: 'M70 128 L48 140 M70 128 L92 140 M70 128 L40 124 M70 128 L100 124 M70 128 L58 144 M70 128 L82 144', type: 'stroke', zone: 'pad', strokeWidth: 0.4 },
          // Small pad veins
          { d: 'M140 132 L132 138 M140 132 L148 138 M140 132 L134 128 M140 132 L146 128', type: 'stroke', zone: 'pad', strokeWidth: 0.3 },
          // Stem fiber lines
          { d: 'M54 64 Q52 76 50 90 M56 60 Q54 72 52 88', type: 'stroke', zone: 'stem', strokeWidth: 0.3 },
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

  // Wisteria — hanging vine with flower clusters (fuji)
  // Gnarled vine at top with branching tendrils, small petal clusters among vines
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
          // Main vine — thick gnarled horizontal branch
          { d: 'M8 18 Q20 12 40 14 Q60 18 80 16 Q100 14 120 18 Q136 22 144 20 Q148 24 146 28 Q142 32 130 28 Q110 24 90 26 Q70 30 50 26 Q30 24 16 24 Q8 24 8 18 Z', type: 'fill', zone: 'vine' },
          // Vine tendril 1 — left, hanging down with curve
          { d: 'M30 24 Q28 40 26 60 Q24 80 22 100 Q20 120 18 140 Q16 160 18 170 L22 170 Q24 160 26 140 Q28 120 30 100 Q32 80 34 60 Q34 40 34 24 Z', type: 'fill', zone: 'vine' },
          // Vine tendril 2 — center, longest
          { d: 'M74 26 Q72 50 70 76 Q68 100 66 126 Q64 150 62 176 Q60 196 64 204 L68 204 Q72 196 74 176 Q76 150 78 126 Q80 100 82 76 Q82 50 80 26 Z', type: 'fill', zone: 'vine' },
          // Vine tendril 3 — right
          { d: 'M116 24 Q114 40 112 58 Q110 76 108 94 Q106 112 104 128 Q102 140 106 144 L110 144 Q114 140 116 128 Q118 112 120 94 Q122 76 122 58 Q122 40 120 24 Z', type: 'fill', zone: 'vine' },
          // Flower cluster 1 — on left tendril (bunch of small petals)
          { d: 'M20 62 Q14 58 12 64 Q14 70 20 68 Z M26 56 Q22 52 18 56 Q20 62 26 60 Z M28 70 Q24 66 20 70 Q22 76 28 74 Z M16 74 Q12 70 8 74 Q10 80 16 78 Z M24 80 Q20 76 16 80 Q18 86 24 84 Z', type: 'fill', zone: 'flower' },
          // Flower cluster 2 — on left tendril, lower
          { d: 'M18 102 Q12 98 10 104 Q12 110 18 108 Z M24 96 Q20 92 16 96 Q18 102 24 100 Z M14 114 Q10 110 6 114 Q8 120 14 118 Z M22 110 Q18 106 14 110 Q16 116 22 114 Z', type: 'fill', zone: 'flower' },
          // Flower cluster 3 — on center tendril, large
          { d: 'M64 78 Q58 74 56 80 Q58 86 64 84 Z M72 72 Q68 68 64 72 Q66 78 72 76 Z M76 84 Q72 80 68 84 Q70 90 76 88 Z M60 90 Q54 86 52 92 Q54 98 60 96 Z M70 96 Q66 92 62 96 Q64 102 70 100 Z M78 92 Q74 88 72 92 Q74 98 78 96 Z', type: 'fill', zone: 'flower' },
          // Flower cluster 4 — on center tendril, lower
          { d: 'M62 130 Q56 126 54 132 Q56 138 62 136 Z M68 124 Q64 120 60 124 Q62 130 68 128 Z M58 142 Q52 138 50 144 Q52 150 58 148 Z M66 138 Q62 134 58 138 Q60 144 66 142 Z M72 134 Q68 130 66 134 Q68 140 72 138 Z', type: 'fill', zone: 'flower' },
          // Flower cluster 5 — on right tendril
          { d: 'M106 60 Q102 56 100 62 Q102 68 106 66 Z M112 54 Q108 50 104 54 Q106 60 112 58 Z M114 68 Q110 64 106 68 Q108 74 114 72 Z M100 72 Q96 68 94 74 Q96 80 100 78 Z M108 76 Q104 72 102 76 Q104 82 108 80 Z', type: 'fill', zone: 'flower' },
          // Flower cluster 6 — on right tendril, lower
          { d: 'M104 100 Q98 96 96 102 Q98 108 104 106 Z M110 94 Q106 90 102 94 Q104 100 110 98 Z M100 112 Q96 108 92 112 Q94 118 100 116 Z', type: 'fill', zone: 'flower' },
          // Leaf pairs — along main vine
          { d: 'M36 8 Q30 2 24 4 Q22 8 26 14 Q30 16 36 12 Z M48 6 Q44 0 38 2 Q36 6 40 12 Q44 14 48 10 Z', type: 'fill', zone: 'leaf' },
          { d: 'M92 10 Q98 4 104 6 Q106 10 102 16 Q98 18 92 14 Z M82 8 Q86 2 92 4 Q94 8 90 14 Q86 16 82 12 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills verbatim
          { d: 'M8 18 Q20 12 40 14 Q60 18 80 16 Q100 14 120 18 Q136 22 144 20 Q148 24 146 28 Q142 32 130 28 Q110 24 90 26 Q70 30 50 26 Q30 24 16 24 Q8 24 8 18 Z', type: 'fill', zone: 'vine' },
          { d: 'M30 24 Q28 40 26 60 Q24 80 22 100 Q20 120 18 140 Q16 160 18 170 L22 170 Q24 160 26 140 Q28 120 30 100 Q32 80 34 60 Q34 40 34 24 Z', type: 'fill', zone: 'vine' },
          { d: 'M74 26 Q72 50 70 76 Q68 100 66 126 Q64 150 62 176 Q60 196 64 204 L68 204 Q72 196 74 176 Q76 150 78 126 Q80 100 82 76 Q82 50 80 26 Z', type: 'fill', zone: 'vine' },
          { d: 'M116 24 Q114 40 112 58 Q110 76 108 94 Q106 112 104 128 Q102 140 106 144 L110 144 Q114 140 116 128 Q118 112 120 94 Q122 76 122 58 Q122 40 120 24 Z', type: 'fill', zone: 'vine' },
          { d: 'M20 62 Q14 58 12 64 Q14 70 20 68 Z M26 56 Q22 52 18 56 Q20 62 26 60 Z M28 70 Q24 66 20 70 Q22 76 28 74 Z M16 74 Q12 70 8 74 Q10 80 16 78 Z M24 80 Q20 76 16 80 Q18 86 24 84 Z', type: 'fill', zone: 'flower' },
          { d: 'M18 102 Q12 98 10 104 Q12 110 18 108 Z M24 96 Q20 92 16 96 Q18 102 24 100 Z M14 114 Q10 110 6 114 Q8 120 14 118 Z M22 110 Q18 106 14 110 Q16 116 22 114 Z', type: 'fill', zone: 'flower' },
          { d: 'M64 78 Q58 74 56 80 Q58 86 64 84 Z M72 72 Q68 68 64 72 Q66 78 72 76 Z M76 84 Q72 80 68 84 Q70 90 76 88 Z M60 90 Q54 86 52 92 Q54 98 60 96 Z M70 96 Q66 92 62 96 Q64 102 70 100 Z M78 92 Q74 88 72 92 Q74 98 78 96 Z', type: 'fill', zone: 'flower' },
          { d: 'M62 130 Q56 126 54 132 Q56 138 62 136 Z M68 124 Q64 120 60 124 Q62 130 68 128 Z M58 142 Q52 138 50 144 Q52 150 58 148 Z M66 138 Q62 134 58 138 Q60 144 66 142 Z M72 134 Q68 130 66 134 Q68 140 72 138 Z', type: 'fill', zone: 'flower' },
          { d: 'M106 60 Q102 56 100 62 Q102 68 106 66 Z M112 54 Q108 50 104 54 Q106 60 112 58 Z M114 68 Q110 64 106 68 Q108 74 114 72 Z M100 72 Q96 68 94 74 Q96 80 100 78 Z M108 76 Q104 72 102 76 Q104 82 108 80 Z', type: 'fill', zone: 'flower' },
          { d: 'M104 100 Q98 96 96 102 Q98 108 104 106 Z M110 94 Q106 90 102 94 Q104 100 110 98 Z M100 112 Q96 108 92 112 Q94 118 100 116 Z', type: 'fill', zone: 'flower' },
          { d: 'M36 8 Q30 2 24 4 Q22 8 26 14 Q30 16 36 12 Z M48 6 Q44 0 38 2 Q36 6 40 12 Q44 14 48 10 Z', type: 'fill', zone: 'leaf' },
          { d: 'M92 10 Q98 4 104 6 Q106 10 102 16 Q98 18 92 14 Z M82 8 Q86 2 92 4 Q94 8 90 14 Q86 16 82 12 Z', type: 'fill', zone: 'leaf' },
          // Shape strokes — vine bark texture, tendril curves
          { d: 'M8 18 Q20 12 40 14 Q60 18 80 16 Q100 14 120 18 Q136 22 144 20', type: 'stroke', zone: 'vine', strokeWidth: 1.2 },
          { d: 'M30 24 Q28 40 26 60 Q24 80 22 100', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          { d: 'M74 26 Q72 50 70 76 Q68 100 66 126 Q64 150 62 176', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          { d: 'M116 24 Q114 40 112 58 Q110 76 108 94', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          // Leaf veins
          { d: 'M30 8 Q28 10 28 14 M42 6 Q40 8 42 12 M98 8 Q100 10 100 14 M88 6 Q88 8 90 12', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All block fills verbatim
          { d: 'M8 18 Q20 12 40 14 Q60 18 80 16 Q100 14 120 18 Q136 22 144 20 Q148 24 146 28 Q142 32 130 28 Q110 24 90 26 Q70 30 50 26 Q30 24 16 24 Q8 24 8 18 Z', type: 'fill', zone: 'vine' },
          { d: 'M30 24 Q28 40 26 60 Q24 80 22 100 Q20 120 18 140 Q16 160 18 170 L22 170 Q24 160 26 140 Q28 120 30 100 Q32 80 34 60 Q34 40 34 24 Z', type: 'fill', zone: 'vine' },
          { d: 'M74 26 Q72 50 70 76 Q68 100 66 126 Q64 150 62 176 Q60 196 64 204 L68 204 Q72 196 74 176 Q76 150 78 126 Q80 100 82 76 Q82 50 80 26 Z', type: 'fill', zone: 'vine' },
          { d: 'M116 24 Q114 40 112 58 Q110 76 108 94 Q106 112 104 128 Q102 140 106 144 L110 144 Q114 140 116 128 Q118 112 120 94 Q122 76 122 58 Q122 40 120 24 Z', type: 'fill', zone: 'vine' },
          { d: 'M20 62 Q14 58 12 64 Q14 70 20 68 Z M26 56 Q22 52 18 56 Q20 62 26 60 Z M28 70 Q24 66 20 70 Q22 76 28 74 Z M16 74 Q12 70 8 74 Q10 80 16 78 Z M24 80 Q20 76 16 80 Q18 86 24 84 Z', type: 'fill', zone: 'flower' },
          { d: 'M18 102 Q12 98 10 104 Q12 110 18 108 Z M24 96 Q20 92 16 96 Q18 102 24 100 Z M14 114 Q10 110 6 114 Q8 120 14 118 Z M22 110 Q18 106 14 110 Q16 116 22 114 Z', type: 'fill', zone: 'flower' },
          { d: 'M64 78 Q58 74 56 80 Q58 86 64 84 Z M72 72 Q68 68 64 72 Q66 78 72 76 Z M76 84 Q72 80 68 84 Q70 90 76 88 Z M60 90 Q54 86 52 92 Q54 98 60 96 Z M70 96 Q66 92 62 96 Q64 102 70 100 Z M78 92 Q74 88 72 92 Q74 98 78 96 Z', type: 'fill', zone: 'flower' },
          { d: 'M62 130 Q56 126 54 132 Q56 138 62 136 Z M68 124 Q64 120 60 124 Q62 130 68 128 Z M58 142 Q52 138 50 144 Q52 150 58 148 Z M66 138 Q62 134 58 138 Q60 144 66 142 Z M72 134 Q68 130 66 134 Q68 140 72 138 Z', type: 'fill', zone: 'flower' },
          { d: 'M106 60 Q102 56 100 62 Q102 68 106 66 Z M112 54 Q108 50 104 54 Q106 60 112 58 Z M114 68 Q110 64 106 68 Q108 74 114 72 Z M100 72 Q96 68 94 74 Q96 80 100 78 Z M108 76 Q104 72 102 76 Q104 82 108 80 Z', type: 'fill', zone: 'flower' },
          { d: 'M104 100 Q98 96 96 102 Q98 108 104 106 Z M110 94 Q106 90 102 94 Q104 100 110 98 Z M100 112 Q96 108 92 112 Q94 118 100 116 Z', type: 'fill', zone: 'flower' },
          { d: 'M36 8 Q30 2 24 4 Q22 8 26 14 Q30 16 36 12 Z M48 6 Q44 0 38 2 Q36 6 40 12 Q44 14 48 10 Z', type: 'fill', zone: 'leaf' },
          { d: 'M92 10 Q98 4 104 6 Q106 10 102 16 Q98 18 92 14 Z M82 8 Q86 2 92 4 Q94 8 90 14 Q86 16 82 12 Z', type: 'fill', zone: 'leaf' },
          // All shape strokes verbatim
          { d: 'M8 18 Q20 12 40 14 Q60 18 80 16 Q100 14 120 18 Q136 22 144 20', type: 'stroke', zone: 'vine', strokeWidth: 1.2 },
          { d: 'M30 24 Q28 40 26 60 Q24 80 22 100', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          { d: 'M74 26 Q72 50 70 76 Q68 100 66 126 Q64 150 62 176', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          { d: 'M116 24 Q114 40 112 58 Q110 76 108 94', type: 'stroke', zone: 'vine', strokeWidth: 0.8 },
          { d: 'M30 8 Q28 10 28 14 M42 6 Q40 8 42 12 M98 8 Q100 10 100 14 M88 6 Q88 8 90 12', type: 'stroke', zone: 'leaf', strokeWidth: 0.5 },
          // Detail — vine bark knots
          { d: 'M22 16 Q24 18 22 20 M48 16 Q50 18 48 20 M80 20 Q82 22 80 24 M110 18 Q112 20 110 22 M134 22 Q136 24 134 26', type: 'stroke', zone: 'vine', strokeWidth: 0.4 },
          // Detail — flower petal veins (small lines within clusters)
          { d: 'M16 62 L14 66 M22 56 L20 60 M26 72 L24 76 M12 76 L10 80', type: 'stroke', zone: 'flower', strokeWidth: 0.3 },
          { d: 'M60 80 L58 84 M70 74 L68 78 M74 86 L72 90 M56 92 L54 96 M68 98 L66 102', type: 'stroke', zone: 'flower', strokeWidth: 0.3 },
          { d: 'M66 128 L64 132 M62 136 L60 140 M56 144 L54 148 M64 140 L62 144', type: 'stroke', zone: 'flower', strokeWidth: 0.3 },
          { d: 'M108 58 L106 62 M104 62 L102 66 M112 70 L110 74 M102 76 L100 80', type: 'stroke', zone: 'flower', strokeWidth: 0.3 },
          { d: 'M106 98 L104 102 M108 96 L106 100 M98 114 L96 118', type: 'stroke', zone: 'flower', strokeWidth: 0.3 },
          // Detail — leaf edge serrations
          { d: 'M26 6 Q24 4 26 2 M34 4 Q32 2 34 0 M44 4 Q42 2 44 0 M96 6 Q98 4 96 2 M102 4 Q104 2 102 0 M88 4 Q86 2 88 0', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
          // Detail — tendril tip curls
          { d: 'M18 162 Q14 166 16 170 M62 196 Q58 200 60 204 M104 136 Q100 140 102 144', type: 'stroke', zone: 'vine', strokeWidth: 0.4 },
        ],
      },
    ],
  },

];
