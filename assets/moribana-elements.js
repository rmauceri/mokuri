// Mokuri — Moribana Style Pack (盛花 Ikebana-Inspired Arrangements)
// Vessels, refined florals, and structural branches for still-life compositions.
// Vessels are new to Mokuri — ceramic containers that ground ikebana arrangements.
// Flowers are arrangement-grade: more refined zone separation than core flora.
// Branches provide structural line (shin/soe/hikae) for formal balance.

const MOKURI_MORIBANA_ELEMENTS = [

  // ============================================================
  //  VESSELS — ceramic containers, entirely new to Mokuri
  // ============================================================

  // Suiban — wide shallow moribana basin
  // The quintessential ikebana vessel: low, wide, water visible inside
  {
    id: 'suiban',
    name: 'Suiban',
    category: 'objects & patterns',
    pack: 'moribana',
    viewBox: '0 0 200 80',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'rim', defaultPaletteSlot: 4 },
      { id: 'water', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main vessel body — wide shallow form with gentle curve, slightly asymmetric
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 L184 58 Q182 68 170 72 Q148 76 100 77 Q52 76 30 72 Q18 68 16 58 Z', type: 'fill', zone: 'body' },
          // Rim band — visible lip along top edge
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 Q180 44 168 40 Q148 36 100 35 Q52 36 32 40 Q20 44 18 38 Z', type: 'fill', zone: 'rim' },
          // Water surface — visible interior
          { d: 'M30 40 Q52 36 100 35 Q148 36 170 40 Q172 44 168 48 Q148 52 100 53 Q52 52 32 48 Q28 44 30 40 Z', type: 'fill', zone: 'water' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 L184 58 Q182 68 170 72 Q148 76 100 77 Q52 76 30 72 Q18 68 16 58 Z', type: 'fill', zone: 'body' },
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 Q180 44 168 40 Q148 36 100 35 Q52 36 32 40 Q20 44 18 38 Z', type: 'fill', zone: 'rim' },
          { d: 'M30 40 Q52 36 100 35 Q148 36 170 40 Q172 44 168 48 Q148 52 100 53 Q52 52 32 48 Q28 44 30 40 Z', type: 'fill', zone: 'water' },
          // Rim contour stroke
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38', type: 'stroke', zone: 'rim', strokeWidth: 1.2 },
          // Body base contour
          { d: 'M16 58 Q18 68 30 72 Q52 76 100 77 Q148 76 170 72 Q182 68 184 58', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Foot ring
          { d: 'M60 74 Q80 76 100 77 Q120 76 140 74', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 L184 58 Q182 68 170 72 Q148 76 100 77 Q52 76 30 72 Q18 68 16 58 Z', type: 'fill', zone: 'body' },
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38 Q180 44 168 40 Q148 36 100 35 Q52 36 32 40 Q20 44 18 38 Z', type: 'fill', zone: 'rim' },
          { d: 'M30 40 Q52 36 100 35 Q148 36 170 40 Q172 44 168 48 Q148 52 100 53 Q52 52 32 48 Q28 44 30 40 Z', type: 'fill', zone: 'water' },
          { d: 'M18 38 Q20 28 32 22 Q50 16 100 15 Q150 16 168 22 Q180 28 182 38', type: 'stroke', zone: 'rim', strokeWidth: 1.2 },
          { d: 'M16 58 Q18 68 30 72 Q52 76 100 77 Q148 76 170 72 Q182 68 184 58', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M60 74 Q80 76 100 77 Q120 76 140 74', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Glaze crackle marks on body
          { d: 'M40 50 Q42 54 44 58 M80 48 Q82 52 84 56 M120 48 Q122 52 120 56 M156 50 Q158 54 156 58', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Water ripple lines
          { d: 'M50 44 Q75 42 100 43 Q125 44 150 42 M60 48 Q85 46 110 47 Q135 48 160 46', type: 'stroke', zone: 'water', strokeWidth: 0.3 },
          // Rim texture
          { d: 'M36 24 Q38 22 40 24 M90 18 Q92 16 94 18 M140 18 Q142 16 144 18', type: 'stroke', zone: 'rim', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // Tsubo — tall ceramic vase with narrow neck
  // Elegant S-curve profile for nageire-style arrangements
  {
    id: 'tsubo',
    name: 'Tsubo',
    category: 'objects & patterns',
    pack: 'moribana',
    viewBox: '0 0 100 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'neck', defaultPaletteSlot: 4 },
      { id: 'accent', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main body — full S-curve ceramic form, wide belly tapering to foot
          { d: 'M38 40 Q28 50 24 68 Q20 88 22 108 Q24 128 30 140 Q36 150 50 154 Q64 150 70 140 Q76 128 78 108 Q80 88 76 68 Q72 50 62 40 Z', type: 'fill', zone: 'body' },
          // Neck — narrower upper section
          { d: 'M42 12 Q40 8 42 4 Q46 2 50 2 Q54 2 58 4 Q60 8 58 12 L62 40 Q56 36 50 35 Q44 36 38 40 Z', type: 'fill', zone: 'neck' },
          // Accent band — decorative glaze drip at shoulder
          { d: 'M38 40 Q44 36 50 35 Q56 36 62 40 Q60 48 56 50 Q52 52 48 50 Q44 48 40 44 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M38 40 Q28 50 24 68 Q20 88 22 108 Q24 128 30 140 Q36 150 50 154 Q64 150 70 140 Q76 128 78 108 Q80 88 76 68 Q72 50 62 40 Z', type: 'fill', zone: 'body' },
          { d: 'M42 12 Q40 8 42 4 Q46 2 50 2 Q54 2 58 4 Q60 8 58 12 L62 40 Q56 36 50 35 Q44 36 38 40 Z', type: 'fill', zone: 'neck' },
          { d: 'M38 40 Q44 36 50 35 Q56 36 62 40 Q60 48 56 50 Q52 52 48 50 Q44 48 40 44 Z', type: 'fill', zone: 'accent' },
          // Body contour — left side
          { d: 'M38 40 Q28 50 24 68 Q20 88 22 108 Q24 128 30 140 Q36 150 50 154', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          // Body contour — right side
          { d: 'M62 40 Q72 50 76 68 Q80 88 78 108 Q76 128 70 140 Q64 150 50 154', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          // Neck contour
          { d: 'M42 12 Q40 8 42 4 Q46 2 50 2 Q54 2 58 4 Q60 8 58 12', type: 'stroke', zone: 'neck', strokeWidth: 1.0 },
          // Foot ring
          { d: 'M34 148 Q42 154 50 154 Q58 154 66 148', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M38 40 Q28 50 24 68 Q20 88 22 108 Q24 128 30 140 Q36 150 50 154 Q64 150 70 140 Q76 128 78 108 Q80 88 76 68 Q72 50 62 40 Z', type: 'fill', zone: 'body' },
          { d: 'M42 12 Q40 8 42 4 Q46 2 50 2 Q54 2 58 4 Q60 8 58 12 L62 40 Q56 36 50 35 Q44 36 38 40 Z', type: 'fill', zone: 'neck' },
          { d: 'M38 40 Q44 36 50 35 Q56 36 62 40 Q60 48 56 50 Q52 52 48 50 Q44 48 40 44 Z', type: 'fill', zone: 'accent' },
          { d: 'M38 40 Q28 50 24 68 Q20 88 22 108 Q24 128 30 140 Q36 150 50 154', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          { d: 'M62 40 Q72 50 76 68 Q80 88 78 108 Q76 128 70 140 Q64 150 50 154', type: 'stroke', zone: 'body', strokeWidth: 1.2 },
          { d: 'M42 12 Q40 8 42 4 Q46 2 50 2 Q54 2 58 4 Q60 8 58 12', type: 'stroke', zone: 'neck', strokeWidth: 1.0 },
          { d: 'M34 148 Q42 154 50 154 Q58 154 66 148', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Glaze texture on body — subtle crackle
          { d: 'M32 64 Q34 72 30 80 M68 64 Q70 72 72 80 M28 100 Q30 108 28 116 M72 100 Q70 108 72 116', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Accent drip streaks
          { d: 'M44 50 Q44 56 46 62 M52 52 Q52 60 50 66 M56 50 Q56 58 58 64', type: 'stroke', zone: 'accent', strokeWidth: 0.4 },
          // Neck interior shadow
          { d: 'M44 6 Q48 10 50 8 Q52 10 56 6', type: 'stroke', zone: 'neck', strokeWidth: 0.5 },
          // Kiln marks on body
          { d: 'M36 90 Q38 88 40 90 M60 86 Q62 84 64 86 M46 130 Q48 128 50 130', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Hanaire — bamboo cylinder vase
  // Rustic split-bamboo, tea ceremony aesthetic
  {
    id: 'hanaire',
    name: 'Hanaire',
    category: 'objects & patterns',
    pack: 'moribana',
    viewBox: '0 0 70 150',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'bamboo', defaultPaletteSlot: 0 },
      { id: 'node', defaultPaletteSlot: 4 },
      { id: 'interior', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main cylinder body — slight organic taper, wider at base
          { d: 'M20 16 Q18 40 18 75 Q18 110 20 136 Q22 144 28 146 Q34 148 38 148 Q42 148 48 146 Q54 144 56 136 Q58 110 58 75 Q58 40 56 16 Z', type: 'fill', zone: 'bamboo' },
          // Node band — horizontal strip at upper third
          { d: 'M18 42 L58 42 L58 50 L18 50 Z', type: 'fill', zone: 'node' },
          // Dark interior opening at top
          { d: 'M22 16 Q24 10 30 8 Q36 6 38 6 Q40 6 46 8 Q52 10 54 16 Q48 20 38 21 Q28 20 22 16 Z', type: 'fill', zone: 'interior' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20 16 Q18 40 18 75 Q18 110 20 136 Q22 144 28 146 Q34 148 38 148 Q42 148 48 146 Q54 144 56 136 Q58 110 58 75 Q58 40 56 16 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M18 42 L58 42 L58 50 L18 50 Z', type: 'fill', zone: 'node' },
          { d: 'M22 16 Q24 10 30 8 Q36 6 38 6 Q40 6 46 8 Q52 10 54 16 Q48 20 38 21 Q28 20 22 16 Z', type: 'fill', zone: 'interior' },
          // Left body contour
          { d: 'M20 16 Q18 40 18 75 Q18 110 20 136 Q22 144 28 146 Q34 148 38 148', type: 'stroke', zone: 'bamboo', strokeWidth: 1.2 },
          // Right body contour
          { d: 'M56 16 Q58 40 58 75 Q58 110 56 136 Q54 144 48 146 Q42 148 38 148', type: 'stroke', zone: 'bamboo', strokeWidth: 1.2 },
          // Node band edges — two horizontal lines
          { d: 'M18 42 L58 42 M18 50 L58 50', type: 'stroke', zone: 'node', strokeWidth: 0.8 },
          // Rim contour
          { d: 'M22 16 Q24 10 30 8 Q36 6 38 6 Q40 6 46 8 Q52 10 54 16', type: 'stroke', zone: 'bamboo', strokeWidth: 1.0 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20 16 Q18 40 18 75 Q18 110 20 136 Q22 144 28 146 Q34 148 38 148 Q42 148 48 146 Q54 144 56 136 Q58 110 58 75 Q58 40 56 16 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M18 42 L58 42 L58 50 L18 50 Z', type: 'fill', zone: 'node' },
          { d: 'M22 16 Q24 10 30 8 Q36 6 38 6 Q40 6 46 8 Q52 10 54 16 Q48 20 38 21 Q28 20 22 16 Z', type: 'fill', zone: 'interior' },
          { d: 'M20 16 Q18 40 18 75 Q18 110 20 136 Q22 144 28 146 Q34 148 38 148', type: 'stroke', zone: 'bamboo', strokeWidth: 1.2 },
          { d: 'M56 16 Q58 40 58 75 Q58 110 56 136 Q54 144 48 146 Q42 148 38 148', type: 'stroke', zone: 'bamboo', strokeWidth: 1.2 },
          { d: 'M18 42 L58 42 M18 50 L58 50', type: 'stroke', zone: 'node', strokeWidth: 0.8 },
          { d: 'M22 16 Q24 10 30 8 Q36 6 38 6 Q40 6 46 8 Q52 10 54 16', type: 'stroke', zone: 'bamboo', strokeWidth: 1.0 },
          // Vertical grain lines
          { d: 'M26 22 Q26 55 26 90 Q26 120 27 140 M34 20 Q34 55 34 90 Q34 120 34 142 M42 20 Q42 55 42 90 Q42 120 42 142 M50 22 Q50 55 50 90 Q50 120 49 140', type: 'stroke', zone: 'bamboo', strokeWidth: 0.3 },
          // Split/aging marks
          { d: 'M24 68 Q26 72 24 76 M52 94 Q54 98 52 102 M30 112 Q32 116 30 120', type: 'stroke', zone: 'bamboo', strokeWidth: 0.4 },
          // Interior depth strokes
          { d: 'M28 14 Q32 18 38 18 Q44 18 48 14 M32 12 Q36 15 40 15 Q44 15 46 12', type: 'stroke', zone: 'interior', strokeWidth: 0.4 },
          // Node surface texture — small horizontal marks
          { d: 'M22 45 L30 45 M38 46 L48 46 M24 47 L34 47', type: 'stroke', zone: 'node', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // Chawan — tea bowl used as small flower vessel
  // Wide rounded half-dome, visible foot ring, chabana tradition
  {
    id: 'chawan',
    name: 'Chawan',
    category: 'objects & patterns',
    pack: 'moribana',
    viewBox: '0 0 140 90',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
      { id: 'rim', defaultPaletteSlot: 4 },
      { id: 'interior', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Bowl body — wide rounded half-dome, slightly asymmetric
          { d: 'M14 32 Q16 52 22 64 Q32 78 50 84 Q64 88 72 88 Q80 88 94 84 Q112 78 122 64 Q128 52 130 32 Z', type: 'fill', zone: 'body' },
          // Rim band — visible lip along top edge
          { d: 'M14 32 Q18 24 30 20 Q48 14 70 13 Q92 14 110 20 Q122 24 130 32 Q124 38 112 36 Q92 32 70 31 Q48 32 30 36 Q18 38 14 32 Z', type: 'fill', zone: 'rim' },
          // Interior visible above rim — dark interior showing depth
          { d: 'M22 34 Q40 30 70 29 Q100 30 120 34 Q114 40 100 42 Q84 44 70 44 Q56 44 40 42 Q28 40 22 34 Z', type: 'fill', zone: 'interior' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M14 32 Q16 52 22 64 Q32 78 50 84 Q64 88 72 88 Q80 88 94 84 Q112 78 122 64 Q128 52 130 32 Z', type: 'fill', zone: 'body' },
          { d: 'M14 32 Q18 24 30 20 Q48 14 70 13 Q92 14 110 20 Q122 24 130 32 Q124 38 112 36 Q92 32 70 31 Q48 32 30 36 Q18 38 14 32 Z', type: 'fill', zone: 'rim' },
          { d: 'M22 34 Q40 30 70 29 Q100 30 120 34 Q114 40 100 42 Q84 44 70 44 Q56 44 40 42 Q28 40 22 34 Z', type: 'fill', zone: 'interior' },
          // Rim contour
          { d: 'M14 32 Q18 24 30 20 Q48 14 70 13 Q92 14 110 20 Q122 24 130 32', type: 'stroke', zone: 'rim', strokeWidth: 1.2 },
          // Body contour — curved bottom
          { d: 'M14 32 Q16 52 22 64 Q32 78 50 84 Q64 88 72 88 Q80 88 94 84 Q112 78 122 64 Q128 52 130 32', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          // Foot ring
          { d: 'M52 86 Q62 89 72 89 Q82 89 92 86', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M14 32 Q16 52 22 64 Q32 78 50 84 Q64 88 72 88 Q80 88 94 84 Q112 78 122 64 Q128 52 130 32 Z', type: 'fill', zone: 'body' },
          { d: 'M14 32 Q18 24 30 20 Q48 14 70 13 Q92 14 110 20 Q122 24 130 32 Q124 38 112 36 Q92 32 70 31 Q48 32 30 36 Q18 38 14 32 Z', type: 'fill', zone: 'rim' },
          { d: 'M22 34 Q40 30 70 29 Q100 30 120 34 Q114 40 100 42 Q84 44 70 44 Q56 44 40 42 Q28 40 22 34 Z', type: 'fill', zone: 'interior' },
          { d: 'M14 32 Q18 24 30 20 Q48 14 70 13 Q92 14 110 20 Q122 24 130 32', type: 'stroke', zone: 'rim', strokeWidth: 1.2 },
          { d: 'M14 32 Q16 52 22 64 Q32 78 50 84 Q64 88 72 88 Q80 88 94 84 Q112 78 122 64 Q128 52 130 32', type: 'stroke', zone: 'body', strokeWidth: 1.0 },
          { d: 'M52 86 Q62 89 72 89 Q82 89 92 86', type: 'stroke', zone: 'body', strokeWidth: 0.8 },
          // Glaze texture — subtle crackle marks
          { d: 'M30 46 Q32 52 30 58 M60 50 Q62 56 60 62 M96 48 Q98 54 96 60 M114 44 Q116 50 114 56', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
          // Interior depth marks
          { d: 'M40 36 Q55 34 70 33 Q85 34 100 36 M50 38 Q62 37 74 36 Q86 37 96 38', type: 'stroke', zone: 'interior', strokeWidth: 0.3 },
          // Rim texture
          { d: 'M34 22 Q36 20 38 22 M68 16 Q70 14 72 16 M104 22 Q106 20 108 22', type: 'stroke', zone: 'rim', strokeWidth: 0.4 },
          // Kiln marks on body
          { d: 'M44 68 Q46 66 48 68 M84 72 Q86 70 88 72', type: 'stroke', zone: 'body', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  // ============================================================
  //  FLOWERS — refined botanical studies for arrangements
  // ============================================================

  // Kiku — chrysanthemum, layered dome of radiating narrow petals
  // Narrower bloom on tall elegant stem — ogiku (arrangement-grade) proportions
  {
    id: 'kiku',
    name: 'Kiku',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 0 120 190',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'outer-petal', defaultPaletteSlot: 3 },
      { id: 'inner-petal', defaultPaletteSlot: 1 },
      { id: 'center', defaultPaletteSlot: 3 },
      { id: 'stem', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Outer petal mass — narrower dome, ~100px wide
          { d: 'M60 6 Q78 4 92 12 Q104 8 110 18 Q116 28 112 40 Q116 50 110 58 Q114 68 104 74 Q96 80 86 78 Q76 82 66 80 Q56 82 46 78 Q36 80 26 74 Q16 68 12 58 Q6 50 10 40 Q6 28 16 18 Q22 8 34 12 Q46 4 60 6 Z', type: 'fill', zone: 'outer-petal' },
          // Inner petal dome
          { d: 'M60 20 Q74 18 84 26 Q92 34 90 46 Q88 56 80 62 Q72 68 60 68 Q48 68 40 62 Q32 56 30 46 Q28 34 36 26 Q46 18 60 20 Z', type: 'fill', zone: 'inner-petal' },
          // Center disc
          { d: 'M60 36 Q68 34 74 40 Q78 46 74 52 Q70 58 64 58 Q56 58 52 52 Q48 46 52 40 Q56 34 60 36 Z', type: 'fill', zone: 'center' },
          // Stem — long, elegant
          { d: 'M57 76 Q56 100 54 126 Q52 152 52 172 Q52 182 54 188 L66 188 Q68 182 68 172 Q68 152 66 126 Q64 100 63 76 Z', type: 'fill', zone: 'stem' },
          // Leaves — two serrated leaves on mid-stem
          { d: 'M54 118 Q40 110 26 114 Q16 120 14 128 Q18 132 28 130 Q42 126 54 122 Z', type: 'fill', zone: 'stem' },
          { d: 'M66 130 Q78 122 92 124 Q104 128 106 136 Q102 140 92 138 Q78 134 66 132 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M60 6 Q78 4 92 12 Q104 8 110 18 Q116 28 112 40 Q116 50 110 58 Q114 68 104 74 Q96 80 86 78 Q76 82 66 80 Q56 82 46 78 Q36 80 26 74 Q16 68 12 58 Q6 50 10 40 Q6 28 16 18 Q22 8 34 12 Q46 4 60 6 Z', type: 'fill', zone: 'outer-petal' },
          { d: 'M60 20 Q74 18 84 26 Q92 34 90 46 Q88 56 80 62 Q72 68 60 68 Q48 68 40 62 Q32 56 30 46 Q28 34 36 26 Q46 18 60 20 Z', type: 'fill', zone: 'inner-petal' },
          { d: 'M60 36 Q68 34 74 40 Q78 46 74 52 Q70 58 64 58 Q56 58 52 52 Q48 46 52 40 Q56 34 60 36 Z', type: 'fill', zone: 'center' },
          { d: 'M57 76 Q56 100 54 126 Q52 152 52 172 Q52 182 54 188 L66 188 Q68 182 68 172 Q68 152 66 126 Q64 100 63 76 Z', type: 'fill', zone: 'stem' },
          { d: 'M54 118 Q40 110 26 114 Q16 120 14 128 Q18 132 28 130 Q42 126 54 122 Z', type: 'fill', zone: 'stem' },
          { d: 'M66 130 Q78 122 92 124 Q104 128 106 136 Q102 140 92 138 Q78 134 66 132 Z', type: 'fill', zone: 'stem' },
          // Petal division strokes — radiating from center
          { d: 'M60 36 L60 6 M52 40 L18 12 M50 48 L8 42 M52 56 L20 72 M68 56 L100 72 M72 48 L114 42 M68 40 L102 12 M60 58 L60 76', type: 'stroke', zone: 'outer-petal', strokeWidth: 0.8 },
          // Inner dome outline
          { d: 'M60 20 Q74 18 84 26 Q92 34 90 46 Q88 56 80 62 Q72 68 60 68 Q48 68 40 62 Q32 56 30 46 Q28 34 36 26 Q46 18 60 20', type: 'stroke', zone: 'inner-petal', strokeWidth: 0.7 },
          // Leaf midrib strokes
          { d: 'M54 120 Q36 114 22 120 M66 132 Q82 126 98 130', type: 'stroke', zone: 'stem', strokeWidth: 0.7 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M60 6 Q78 4 92 12 Q104 8 110 18 Q116 28 112 40 Q116 50 110 58 Q114 68 104 74 Q96 80 86 78 Q76 82 66 80 Q56 82 46 78 Q36 80 26 74 Q16 68 12 58 Q6 50 10 40 Q6 28 16 18 Q22 8 34 12 Q46 4 60 6 Z', type: 'fill', zone: 'outer-petal' },
          { d: 'M60 20 Q74 18 84 26 Q92 34 90 46 Q88 56 80 62 Q72 68 60 68 Q48 68 40 62 Q32 56 30 46 Q28 34 36 26 Q46 18 60 20 Z', type: 'fill', zone: 'inner-petal' },
          { d: 'M60 36 Q68 34 74 40 Q78 46 74 52 Q70 58 64 58 Q56 58 52 52 Q48 46 52 40 Q56 34 60 36 Z', type: 'fill', zone: 'center' },
          { d: 'M57 76 Q56 100 54 126 Q52 152 52 172 Q52 182 54 188 L66 188 Q68 182 68 172 Q68 152 66 126 Q64 100 63 76 Z', type: 'fill', zone: 'stem' },
          { d: 'M54 118 Q40 110 26 114 Q16 120 14 128 Q18 132 28 130 Q42 126 54 122 Z', type: 'fill', zone: 'stem' },
          { d: 'M66 130 Q78 122 92 124 Q104 128 106 136 Q102 140 92 138 Q78 134 66 132 Z', type: 'fill', zone: 'stem' },
          { d: 'M60 36 L60 6 M52 40 L18 12 M50 48 L8 42 M52 56 L20 72 M68 56 L100 72 M72 48 L114 42 M68 40 L102 12 M60 58 L60 76', type: 'stroke', zone: 'outer-petal', strokeWidth: 0.8 },
          { d: 'M60 20 Q74 18 84 26 Q92 34 90 46 Q88 56 80 62 Q72 68 60 68 Q48 68 40 62 Q32 56 30 46 Q28 34 36 26 Q46 18 60 20', type: 'stroke', zone: 'inner-petal', strokeWidth: 0.7 },
          { d: 'M54 120 Q36 114 22 120 M66 132 Q82 126 98 130', type: 'stroke', zone: 'stem', strokeWidth: 0.7 },
          // Fine petal veins — secondary radials
          { d: 'M56 38 L38 8 M64 38 L82 8 M50 44 L12 28 M70 44 L108 28 M50 52 L14 60 M70 52 L106 60 M56 58 L36 76 M64 58 L84 76', type: 'stroke', zone: 'outer-petal', strokeWidth: 0.3 },
          // Stamen dots in center
          { d: 'M58 42 L56 40 M62 40 L64 38 M56 50 L54 48 M66 50 L68 48 M60 54 L60 56 M64 52 L66 54', type: 'stroke', zone: 'center', strokeWidth: 0.5 },
          // Leaf serration marks
          { d: 'M40 114 Q38 112 40 110 M30 118 Q28 116 30 114 M22 122 Q20 120 22 118 M82 126 Q80 124 82 122 M90 128 Q88 126 90 124 M98 132 Q96 130 98 128', type: 'stroke', zone: 'stem', strokeWidth: 0.3 },
          // Calyx detail at stem top
          { d: 'M56 76 Q54 74 56 72 M64 76 Q66 74 64 72', type: 'fill', zone: 'stem' },
        ],
      },
    ],
  },

  // Tsubaki — camellia, round structured bloom with golden stamen cluster
  // Bloom stays round (natural), but taller stem/leaf structure below
  {
    id: 'tsubaki',
    name: 'Tsubaki',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 0 120 165',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'stamen', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Outer petals — round bowl shape, ~80px wide
          { d: 'M60 10 Q74 8 84 16 Q92 10 98 20 Q106 30 102 42 Q108 52 102 60 Q98 70 88 72 Q82 78 72 76 Q64 78 54 76 Q44 78 36 72 Q26 70 22 60 Q16 52 18 42 Q14 30 22 20 Q28 10 38 16 Q48 8 60 10 Z', type: 'fill', zone: 'petal' },
          // Inner petal overlap
          { d: 'M60 20 Q72 18 80 26 Q88 34 86 46 Q84 56 76 62 Q68 66 58 64 Q48 62 42 56 Q36 46 38 36 Q40 26 50 20 Q54 18 60 20 Z', type: 'fill', zone: 'petal' },
          // Stamen cluster
          { d: 'M60 36 Q68 34 72 40 Q76 46 72 52 Q68 56 62 56 Q56 56 52 50 Q48 44 52 38 Q56 34 60 36 Z', type: 'fill', zone: 'stamen' },
          // Stem — extends well below bloom
          { d: 'M56 74 Q54 90 52 108 Q50 126 50 142 Q50 152 54 162 L66 162 Q70 152 70 142 Q70 126 68 108 Q66 90 64 74 Z', type: 'fill', zone: 'leaf' },
          // Leaves — thick glossy, flanking stem lower
          { d: 'M52 92 Q38 84 24 88 Q14 94 14 104 Q18 112 30 110 Q42 106 52 98 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 100 Q80 92 94 94 Q106 98 108 108 Q104 114 94 112 Q80 108 68 104 Z', type: 'fill', zone: 'leaf' },
          // Lower leaf pair
          { d: 'M52 128 Q40 122 28 126 Q20 132 22 140 Q28 144 38 142 Q48 138 52 132 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 136 Q78 130 90 132 Q100 136 100 144 Q96 148 86 146 Q76 142 68 138 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M60 10 Q74 8 84 16 Q92 10 98 20 Q106 30 102 42 Q108 52 102 60 Q98 70 88 72 Q82 78 72 76 Q64 78 54 76 Q44 78 36 72 Q26 70 22 60 Q16 52 18 42 Q14 30 22 20 Q28 10 38 16 Q48 8 60 10 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 20 Q72 18 80 26 Q88 34 86 46 Q84 56 76 62 Q68 66 58 64 Q48 62 42 56 Q36 46 38 36 Q40 26 50 20 Q54 18 60 20 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 36 Q68 34 72 40 Q76 46 72 52 Q68 56 62 56 Q56 56 52 50 Q48 44 52 38 Q56 34 60 36 Z', type: 'fill', zone: 'stamen' },
          { d: 'M56 74 Q54 90 52 108 Q50 126 50 142 Q50 152 54 162 L66 162 Q70 152 70 142 Q70 126 68 108 Q66 90 64 74 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 92 Q38 84 24 88 Q14 94 14 104 Q18 112 30 110 Q42 106 52 98 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 100 Q80 92 94 94 Q106 98 108 108 Q104 114 94 112 Q80 108 68 104 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 128 Q40 122 28 126 Q20 132 22 140 Q28 144 38 142 Q48 138 52 132 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 136 Q78 130 90 132 Q100 136 100 144 Q96 148 86 146 Q76 142 68 138 Z', type: 'fill', zone: 'leaf' },
          // Petal edge divisions
          { d: 'M60 10 L60 36 M46 16 L52 38 M84 16 L72 38 M26 60 L52 50 M100 60 L72 50', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Inner petal outline
          { d: 'M60 20 Q72 18 80 26 Q88 34 86 46 Q84 56 76 62 Q68 66 58 64 Q48 62 42 56 Q36 46 38 36 Q40 26 50 20 Q54 18 60 20', type: 'stroke', zone: 'petal', strokeWidth: 0.6 },
          // Leaf midribs
          { d: 'M50 94 Q34 90 20 96 M70 102 Q84 96 100 100 M50 130 Q38 126 26 132 M70 138 Q80 134 94 136', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M60 10 Q74 8 84 16 Q92 10 98 20 Q106 30 102 42 Q108 52 102 60 Q98 70 88 72 Q82 78 72 76 Q64 78 54 76 Q44 78 36 72 Q26 70 22 60 Q16 52 18 42 Q14 30 22 20 Q28 10 38 16 Q48 8 60 10 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 20 Q72 18 80 26 Q88 34 86 46 Q84 56 76 62 Q68 66 58 64 Q48 62 42 56 Q36 46 38 36 Q40 26 50 20 Q54 18 60 20 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 36 Q68 34 72 40 Q76 46 72 52 Q68 56 62 56 Q56 56 52 50 Q48 44 52 38 Q56 34 60 36 Z', type: 'fill', zone: 'stamen' },
          { d: 'M56 74 Q54 90 52 108 Q50 126 50 142 Q50 152 54 162 L66 162 Q70 152 70 142 Q70 126 68 108 Q66 90 64 74 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 92 Q38 84 24 88 Q14 94 14 104 Q18 112 30 110 Q42 106 52 98 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 100 Q80 92 94 94 Q106 98 108 108 Q104 114 94 112 Q80 108 68 104 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 128 Q40 122 28 126 Q20 132 22 140 Q28 144 38 142 Q48 138 52 132 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 136 Q78 130 90 132 Q100 136 100 144 Q96 148 86 146 Q76 142 68 138 Z', type: 'fill', zone: 'leaf' },
          { d: 'M60 10 L60 36 M46 16 L52 38 M84 16 L72 38 M26 60 L52 50 M100 60 L72 50', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M60 20 Q72 18 80 26 Q88 34 86 46 Q84 56 76 62 Q68 66 58 64 Q48 62 42 56 Q36 46 38 36 Q40 26 50 20 Q54 18 60 20', type: 'stroke', zone: 'petal', strokeWidth: 0.6 },
          { d: 'M50 94 Q34 90 20 96 M70 102 Q84 96 100 100 M50 130 Q38 126 26 132 M70 138 Q80 134 94 136', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Fine petal veins
          { d: 'M54 14 L54 34 M66 14 L66 34 M38 26 L50 42 M82 26 L70 42 M32 54 L50 48 M88 54 L70 48', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Stamen radiating filaments
          { d: 'M60 42 L60 38 M58 44 L54 40 M62 44 L66 40 M56 48 L52 46 M64 48 L68 46 M58 52 L54 54 M62 52 L66 54 M60 54 L60 58', type: 'stroke', zone: 'stamen', strokeWidth: 0.4 },
          // Leaf vein details
          { d: 'M42 90 Q32 92 24 98 M44 96 Q36 100 28 106 M76 96 Q86 98 96 104 M74 102 Q84 104 94 108 M42 128 Q34 130 28 136 M76 136 Q84 138 92 140', type: 'stroke', zone: 'leaf', strokeWidth: 0.3 },
          // Tiny bud accent
          { d: 'M44 76 Q42 72 44 70 Q46 72 44 76 Z', type: 'fill', zone: 'petal' },
        ],
      },
    ],
  },

  // Ran — orchid spray, arching stem with 3 cascading blooms
  // Labellum (lip petal) in contrasting zone, blooms diminish toward tip
  {
    id: 'ran',
    name: 'Ran',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 0 180 150',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'lip', defaultPaletteSlot: 3 },
      { id: 'stem', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Arching stem — tapered curve from lower left to upper right
          { d: 'M12 140 Q16 120 28 100 Q42 78 64 62 Q88 46 114 38 Q140 30 160 28 L162 34 Q142 36 116 44 Q90 52 66 68 Q44 84 30 106 Q18 126 16 142 Z', type: 'fill', zone: 'stem' },
          // Bloom 1 (largest) — near stem base
          { d: 'M38 82 Q30 74 24 66 Q20 70 18 78 Q22 86 30 88 Q26 94 22 102 Q28 106 36 102 Q40 108 46 112 Q50 106 48 98 Q54 100 58 94 Q54 88 48 86 Q52 80 48 76 Q42 76 38 82 Z', type: 'fill', zone: 'petal' },
          // Bloom 1 lip
          { d: 'M34 84 Q30 88 32 94 Q36 98 42 96 Q46 92 44 86 Q40 82 34 84 Z', type: 'fill', zone: 'lip' },
          // Bloom 2 (medium) — mid-stem
          { d: 'M82 52 Q76 44 70 38 Q66 42 66 50 Q68 56 76 56 Q72 62 70 68 Q76 72 82 68 Q86 72 90 76 Q94 70 92 64 Q96 64 100 58 Q96 54 90 52 Q94 48 92 42 Q86 42 82 52 Z', type: 'fill', zone: 'petal' },
          // Bloom 2 lip
          { d: 'M78 52 Q74 56 76 62 Q80 66 86 64 Q88 58 86 54 Q82 50 78 52 Z', type: 'fill', zone: 'lip' },
          // Bloom 3 (smallest) — near tip
          { d: 'M130 34 Q124 28 120 24 Q116 28 118 34 Q120 38 126 38 Q124 42 124 46 Q128 48 132 44 Q136 46 138 42 Q136 38 132 36 Q136 32 134 28 Q130 30 130 34 Z', type: 'fill', zone: 'petal' },
          // Bloom 3 lip
          { d: 'M126 34 Q124 38 126 42 Q130 44 132 40 Q132 36 128 34 Z', type: 'fill', zone: 'lip' },
          // Leaf blades — long, arching from base
          { d: 'M8 148 Q6 130 10 110 Q16 90 28 76 L34 80 Q22 94 16 112 Q14 130 14 148 Z', type: 'fill', zone: 'stem' },
          { d: 'M22 148 Q24 132 32 114 Q40 98 52 86 L56 92 Q44 104 38 118 Q32 134 30 148 Z', type: 'fill', zone: 'stem' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M12 140 Q16 120 28 100 Q42 78 64 62 Q88 46 114 38 Q140 30 160 28 L162 34 Q142 36 116 44 Q90 52 66 68 Q44 84 30 106 Q18 126 16 142 Z', type: 'fill', zone: 'stem' },
          { d: 'M38 82 Q30 74 24 66 Q20 70 18 78 Q22 86 30 88 Q26 94 22 102 Q28 106 36 102 Q40 108 46 112 Q50 106 48 98 Q54 100 58 94 Q54 88 48 86 Q52 80 48 76 Q42 76 38 82 Z', type: 'fill', zone: 'petal' },
          { d: 'M34 84 Q30 88 32 94 Q36 98 42 96 Q46 92 44 86 Q40 82 34 84 Z', type: 'fill', zone: 'lip' },
          { d: 'M82 52 Q76 44 70 38 Q66 42 66 50 Q68 56 76 56 Q72 62 70 68 Q76 72 82 68 Q86 72 90 76 Q94 70 92 64 Q96 64 100 58 Q96 54 90 52 Q94 48 92 42 Q86 42 82 52 Z', type: 'fill', zone: 'petal' },
          { d: 'M78 52 Q74 56 76 62 Q80 66 86 64 Q88 58 86 54 Q82 50 78 52 Z', type: 'fill', zone: 'lip' },
          { d: 'M130 34 Q124 28 120 24 Q116 28 118 34 Q120 38 126 38 Q124 42 124 46 Q128 48 132 44 Q136 46 138 42 Q136 38 132 36 Q136 32 134 28 Q130 30 130 34 Z', type: 'fill', zone: 'petal' },
          { d: 'M126 34 Q124 38 126 42 Q130 44 132 40 Q132 36 128 34 Z', type: 'fill', zone: 'lip' },
          { d: 'M8 148 Q6 130 10 110 Q16 90 28 76 L34 80 Q22 94 16 112 Q14 130 14 148 Z', type: 'fill', zone: 'stem' },
          { d: 'M22 148 Q24 132 32 114 Q40 98 52 86 L56 92 Q44 104 38 118 Q32 134 30 148 Z', type: 'fill', zone: 'stem' },
          // Bloom 1 petal outlines
          { d: 'M24 66 Q20 70 18 78 M30 88 Q26 94 22 102 M36 102 Q40 108 46 112 M48 98 Q54 100 58 94 M48 86 Q52 80 48 76', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Bloom 2 petal outlines
          { d: 'M70 38 Q66 42 66 50 M76 56 Q72 62 70 68 M82 68 Q86 72 90 76 M92 64 Q96 64 100 58 M90 52 Q94 48 92 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Leaf midribs
          { d: 'M10 146 Q12 118 22 92 M26 146 Q30 122 42 98', type: 'stroke', zone: 'stem', strokeWidth: 0.7 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M12 140 Q16 120 28 100 Q42 78 64 62 Q88 46 114 38 Q140 30 160 28 L162 34 Q142 36 116 44 Q90 52 66 68 Q44 84 30 106 Q18 126 16 142 Z', type: 'fill', zone: 'stem' },
          { d: 'M38 82 Q30 74 24 66 Q20 70 18 78 Q22 86 30 88 Q26 94 22 102 Q28 106 36 102 Q40 108 46 112 Q50 106 48 98 Q54 100 58 94 Q54 88 48 86 Q52 80 48 76 Q42 76 38 82 Z', type: 'fill', zone: 'petal' },
          { d: 'M34 84 Q30 88 32 94 Q36 98 42 96 Q46 92 44 86 Q40 82 34 84 Z', type: 'fill', zone: 'lip' },
          { d: 'M82 52 Q76 44 70 38 Q66 42 66 50 Q68 56 76 56 Q72 62 70 68 Q76 72 82 68 Q86 72 90 76 Q94 70 92 64 Q96 64 100 58 Q96 54 90 52 Q94 48 92 42 Q86 42 82 52 Z', type: 'fill', zone: 'petal' },
          { d: 'M78 52 Q74 56 76 62 Q80 66 86 64 Q88 58 86 54 Q82 50 78 52 Z', type: 'fill', zone: 'lip' },
          { d: 'M130 34 Q124 28 120 24 Q116 28 118 34 Q120 38 126 38 Q124 42 124 46 Q128 48 132 44 Q136 46 138 42 Q136 38 132 36 Q136 32 134 28 Q130 30 130 34 Z', type: 'fill', zone: 'petal' },
          { d: 'M126 34 Q124 38 126 42 Q130 44 132 40 Q132 36 128 34 Z', type: 'fill', zone: 'lip' },
          { d: 'M8 148 Q6 130 10 110 Q16 90 28 76 L34 80 Q22 94 16 112 Q14 130 14 148 Z', type: 'fill', zone: 'stem' },
          { d: 'M22 148 Q24 132 32 114 Q40 98 52 86 L56 92 Q44 104 38 118 Q32 134 30 148 Z', type: 'fill', zone: 'stem' },
          { d: 'M24 66 Q20 70 18 78 M30 88 Q26 94 22 102 M36 102 Q40 108 46 112 M48 98 Q54 100 58 94 M48 86 Q52 80 48 76', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M70 38 Q66 42 66 50 M76 56 Q72 62 70 68 M82 68 Q86 72 90 76 M92 64 Q96 64 100 58 M90 52 Q94 48 92 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M10 146 Q12 118 22 92 M26 146 Q30 122 42 98', type: 'stroke', zone: 'stem', strokeWidth: 0.7 },
          // Fine petal veins on bloom 1
          { d: 'M28 72 L34 84 M24 84 L32 92 M34 100 L40 94 M44 104 L44 96 M50 92 L46 86', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Fine petal veins on bloom 2
          { d: 'M72 44 L78 52 M70 54 L76 60 M78 66 L84 62 M88 70 L88 64 M94 60 L90 54', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Lip spot pattern (orchid markings)
          { d: 'M36 88 A1 1 0 1 1 35.99 88 Z M38 92 A1 1 0 1 1 37.99 92 Z M40 90 A1 1 0 1 1 39.99 90 Z', type: 'stroke', zone: 'lip', strokeWidth: 0.5 },
          { d: 'M80 56 A1 1 0 1 1 79.99 56 Z M82 60 A1 1 0 1 1 81.99 60 Z M84 58 A1 1 0 1 1 83.99 58 Z', type: 'stroke', zone: 'lip', strokeWidth: 0.5 },
          // Small bud at stem tip
          { d: 'M156 30 Q154 26 156 24 Q158 26 156 30 Z', type: 'fill', zone: 'petal' },
        ],
      },
    ],
  },

  // Suisen — narcissus, clean upright blooms with trumpet corona
  // Winter purity, strong vertical blade leaves
  {
    id: 'suisen',
    name: 'Suisen',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 0 120 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'corona', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Bloom 1 (larger, open) — 6-pointed star silhouette
          { d: 'M56 8 Q62 4 68 8 Q72 4 78 10 Q82 6 86 14 Q90 12 90 20 Q94 22 92 30 Q96 32 92 38 Q96 42 90 44 Q90 50 84 48 Q82 54 76 50 Q74 56 68 52 Q64 56 58 50 Q54 54 50 48 Q46 50 44 44 Q40 42 42 38 Q38 32 42 30 Q38 22 44 20 Q42 12 48 14 Q50 6 56 8 Z', type: 'fill', zone: 'petal' },
          // Corona 1
          { d: 'M60 22 Q66 18 72 22 Q78 20 80 28 Q82 36 78 40 Q74 44 68 42 Q62 44 58 40 Q54 36 56 28 Q56 20 60 22 Z', type: 'fill', zone: 'corona' },
          // Bloom 2 (smaller, slight angle)
          { d: 'M82 24 Q86 20 92 22 Q96 20 100 26 Q104 24 104 32 Q108 34 106 40 Q108 44 104 46 Q104 50 100 48 Q98 52 92 50 Q88 52 84 48 Q80 50 78 44 Q76 42 78 38 Q74 34 78 32 Q76 26 82 24 Z', type: 'fill', zone: 'petal' },
          // Corona 2
          { d: 'M86 30 Q90 28 94 32 Q96 36 94 40 Q90 42 86 40 Q84 36 86 30 Z', type: 'fill', zone: 'corona' },
          // Stems
          { d: 'M64 48 Q62 70 60 92 Q58 110 58 134 Q58 148 60 158 L68 158 Q70 148 70 134 Q70 110 68 92 Q66 70 66 48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 48 Q86 64 86 82 Q86 100 86 124 Q86 142 88 158 L92 158 Q94 142 94 124 Q94 100 92 82 Q92 64 90 48 Z', type: 'fill', zone: 'leaf' },
          // Leaf blades — tall, upright
          { d: 'M38 158 Q36 130 34 100 Q32 70 36 44 L44 44 Q42 68 42 98 Q44 128 44 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M74 158 Q76 132 80 104 Q84 78 82 52 L88 52 Q92 76 88 102 Q84 130 82 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 158 Q50 136 48 112 Q46 86 50 60 L56 60 Q54 84 54 110 Q56 134 56 158 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M56 8 Q62 4 68 8 Q72 4 78 10 Q82 6 86 14 Q90 12 90 20 Q94 22 92 30 Q96 32 92 38 Q96 42 90 44 Q90 50 84 48 Q82 54 76 50 Q74 56 68 52 Q64 56 58 50 Q54 54 50 48 Q46 50 44 44 Q40 42 42 38 Q38 32 42 30 Q38 22 44 20 Q42 12 48 14 Q50 6 56 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 22 Q66 18 72 22 Q78 20 80 28 Q82 36 78 40 Q74 44 68 42 Q62 44 58 40 Q54 36 56 28 Q56 20 60 22 Z', type: 'fill', zone: 'corona' },
          { d: 'M82 24 Q86 20 92 22 Q96 20 100 26 Q104 24 104 32 Q108 34 106 40 Q108 44 104 46 Q104 50 100 48 Q98 52 92 50 Q88 52 84 48 Q80 50 78 44 Q76 42 78 38 Q74 34 78 32 Q76 26 82 24 Z', type: 'fill', zone: 'petal' },
          { d: 'M86 30 Q90 28 94 32 Q96 36 94 40 Q90 42 86 40 Q84 36 86 30 Z', type: 'fill', zone: 'corona' },
          { d: 'M64 48 Q62 70 60 92 Q58 110 58 134 Q58 148 60 158 L68 158 Q70 148 70 134 Q70 110 68 92 Q66 70 66 48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 48 Q86 64 86 82 Q86 100 86 124 Q86 142 88 158 L92 158 Q94 142 94 124 Q94 100 92 82 Q92 64 90 48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M38 158 Q36 130 34 100 Q32 70 36 44 L44 44 Q42 68 42 98 Q44 128 44 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M74 158 Q76 132 80 104 Q84 78 82 52 L88 52 Q92 76 88 102 Q84 130 82 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 158 Q50 136 48 112 Q46 86 50 60 L56 60 Q54 84 54 110 Q56 134 56 158 Z', type: 'fill', zone: 'leaf' },
          // Tepal division strokes — bloom 1
          { d: 'M68 8 L68 22 M56 14 L60 26 M86 14 L80 26 M50 38 L58 36 M86 38 L78 36 M68 52 L68 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          // Tepal division strokes — bloom 2
          { d: 'M92 22 L92 30 M82 26 L86 32 M100 26 L94 32 M84 46 L86 40 M100 46 L94 40', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // Leaf midribs
          { d: 'M38 156 Q36 110 38 60 M78 156 Q82 110 86 64 M52 156 Q50 110 52 72', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M56 8 Q62 4 68 8 Q72 4 78 10 Q82 6 86 14 Q90 12 90 20 Q94 22 92 30 Q96 32 92 38 Q96 42 90 44 Q90 50 84 48 Q82 54 76 50 Q74 56 68 52 Q64 56 58 50 Q54 54 50 48 Q46 50 44 44 Q40 42 42 38 Q38 32 42 30 Q38 22 44 20 Q42 12 48 14 Q50 6 56 8 Z', type: 'fill', zone: 'petal' },
          { d: 'M60 22 Q66 18 72 22 Q78 20 80 28 Q82 36 78 40 Q74 44 68 42 Q62 44 58 40 Q54 36 56 28 Q56 20 60 22 Z', type: 'fill', zone: 'corona' },
          { d: 'M82 24 Q86 20 92 22 Q96 20 100 26 Q104 24 104 32 Q108 34 106 40 Q108 44 104 46 Q104 50 100 48 Q98 52 92 50 Q88 52 84 48 Q80 50 78 44 Q76 42 78 38 Q74 34 78 32 Q76 26 82 24 Z', type: 'fill', zone: 'petal' },
          { d: 'M86 30 Q90 28 94 32 Q96 36 94 40 Q90 42 86 40 Q84 36 86 30 Z', type: 'fill', zone: 'corona' },
          { d: 'M64 48 Q62 70 60 92 Q58 110 58 134 Q58 148 60 158 L68 158 Q70 148 70 134 Q70 110 68 92 Q66 70 66 48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M88 48 Q86 64 86 82 Q86 100 86 124 Q86 142 88 158 L92 158 Q94 142 94 124 Q94 100 92 82 Q92 64 90 48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M38 158 Q36 130 34 100 Q32 70 36 44 L44 44 Q42 68 42 98 Q44 128 44 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M74 158 Q76 132 80 104 Q84 78 82 52 L88 52 Q92 76 88 102 Q84 130 82 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M52 158 Q50 136 48 112 Q46 86 50 60 L56 60 Q54 84 54 110 Q56 134 56 158 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68 8 L68 22 M56 14 L60 26 M86 14 L80 26 M50 38 L58 36 M86 38 L78 36 M68 52 L68 42', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M92 22 L92 30 M82 26 L86 32 M100 26 L94 32 M84 46 L86 40 M100 46 L94 40', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M38 156 Q36 110 38 60 M78 156 Q82 110 86 64 M52 156 Q50 110 52 72', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 },
          // Fine tepal veins — bloom 1
          { d: 'M62 10 L64 24 M74 10 L72 24 M52 20 L58 30 M82 20 L76 30 M48 42 L56 38 M88 42 L78 38', type: 'stroke', zone: 'petal', strokeWidth: 0.3 },
          // Corona ruffle marks
          { d: 'M62 24 Q64 22 66 24 M70 22 Q72 20 74 22 M60 36 Q62 38 64 36 M74 36 Q76 38 78 36', type: 'stroke', zone: 'corona', strokeWidth: 0.4 },
          { d: 'M88 32 Q90 30 92 32 M88 38 Q90 40 92 38', type: 'stroke', zone: 'corona', strokeWidth: 0.4 },
          // Leaf parallel veins
          { d: 'M36 80 Q36 110 38 140 M42 80 Q42 110 42 140 M80 80 Q82 106 84 128 M50 90 Q50 116 52 140 M54 90 Q54 116 54 140', type: 'stroke', zone: 'leaf', strokeWidth: 0.25 },
        ],
      },
    ],
  },

  // ============================================================
  //  STRUCTURAL BRANCHES & ACCENTS — the "bones" of ikebana
  // ============================================================

  // Ume Branch — angular plum branch with sparse blossoms
  // Dramatic direction changes, aged bark, the iconic ikebana structural line
  {
    id: 'ume-branch',
    name: 'Ume Branch',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 0 200 170',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'blossom', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main branch — wide at base, angular direction changes, tapered fill
          { d: 'M4 168 Q8 150 16 132 Q24 114 40 100 Q50 92 56 78 Q60 66 52 52 Q46 42 50 30 Q54 18 66 12 Q72 8 78 12 Q82 8 86 14 Q82 20 76 28 Q68 38 66 50 Q64 60 70 72 Q76 82 62 94 Q52 104 38 116 Q26 130 16 148 Q12 158 10 168 Z', type: 'fill', zone: 'branch' },
          // Secondary twig — branching right from mid-point
          { d: 'M62 94 Q78 86 96 74 Q112 62 130 56 Q142 52 152 48 L154 54 Q144 58 132 62 Q114 68 98 80 Q82 92 66 98 Z', type: 'fill', zone: 'branch' },
          // Small twig upward
          { d: 'M50 52 Q58 44 68 36 Q72 32 76 28 L80 34 Q74 38 70 42 Q62 50 56 56 Z', type: 'fill', zone: 'branch' },
          // Blossoms — 4 sparse plum flowers (5-petal rounds)
          { d: 'M48 28 A10 10 0 1 1 47.99 28 Z', type: 'fill', zone: 'blossom' },
          { d: 'M82 16 A8 8 0 1 1 81.99 16 Z', type: 'fill', zone: 'blossom' },
          { d: 'M108 68 A9 9 0 1 1 107.99 68 Z', type: 'fill', zone: 'blossom' },
          { d: 'M148 46 A7 7 0 1 1 147.99 46 Z', type: 'fill', zone: 'blossom' },
          // Buds — 3 tight ovals
          { d: 'M64 14 Q62 10 64 7 Q66 10 64 14 Z', type: 'fill', zone: 'blossom' },
          { d: 'M130 54 Q128 50 130 47 Q132 50 130 54 Z', type: 'fill', zone: 'blossom' },
          { d: 'M74 70 Q72 66 74 63 Q76 66 74 70 Z', type: 'fill', zone: 'blossom' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M4 168 Q8 150 16 132 Q24 114 40 100 Q50 92 56 78 Q60 66 52 52 Q46 42 50 30 Q54 18 66 12 Q72 8 78 12 Q82 8 86 14 Q82 20 76 28 Q68 38 66 50 Q64 60 70 72 Q76 82 62 94 Q52 104 38 116 Q26 130 16 148 Q12 158 10 168 Z', type: 'fill', zone: 'branch' },
          { d: 'M62 94 Q78 86 96 74 Q112 62 130 56 Q142 52 152 48 L154 54 Q144 58 132 62 Q114 68 98 80 Q82 92 66 98 Z', type: 'fill', zone: 'branch' },
          { d: 'M50 52 Q58 44 68 36 Q72 32 76 28 L80 34 Q74 38 70 42 Q62 50 56 56 Z', type: 'fill', zone: 'branch' },
          { d: 'M48 28 A10 10 0 1 1 47.99 28 Z', type: 'fill', zone: 'blossom' },
          { d: 'M82 16 A8 8 0 1 1 81.99 16 Z', type: 'fill', zone: 'blossom' },
          { d: 'M108 68 A9 9 0 1 1 107.99 68 Z', type: 'fill', zone: 'blossom' },
          { d: 'M148 46 A7 7 0 1 1 147.99 46 Z', type: 'fill', zone: 'blossom' },
          { d: 'M64 14 Q62 10 64 7 Q66 10 64 14 Z', type: 'fill', zone: 'blossom' },
          { d: 'M130 54 Q128 50 130 47 Q132 50 130 54 Z', type: 'fill', zone: 'blossom' },
          { d: 'M74 70 Q72 66 74 63 Q76 66 74 70 Z', type: 'fill', zone: 'blossom' },
          // Branch contour strokes
          { d: 'M4 168 Q8 150 16 132 Q24 114 40 100 Q50 92 56 78 Q60 66 52 52 Q46 42 50 30 Q54 18 66 12', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
          // Blossom petal divisions (5-petal plum)
          { d: 'M48 18 L48 28 L48 38 M38 28 L48 28 L58 28 M42 22 L48 28 L54 34 M42 34 L48 28 L54 22', type: 'stroke', zone: 'blossom', strokeWidth: 0.6 },
          { d: 'M108 59 L108 68 L108 77 M99 68 L108 68 L117 68 M102 62 L108 68 L114 74', type: 'stroke', zone: 'blossom', strokeWidth: 0.6 },
          // Twig strokes
          { d: 'M62 94 Q78 86 96 74 Q112 62 130 56 Q142 52 152 48', type: 'stroke', zone: 'branch', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M4 168 Q8 150 16 132 Q24 114 40 100 Q50 92 56 78 Q60 66 52 52 Q46 42 50 30 Q54 18 66 12 Q72 8 78 12 Q82 8 86 14 Q82 20 76 28 Q68 38 66 50 Q64 60 70 72 Q76 82 62 94 Q52 104 38 116 Q26 130 16 148 Q12 158 10 168 Z', type: 'fill', zone: 'branch' },
          { d: 'M62 94 Q78 86 96 74 Q112 62 130 56 Q142 52 152 48 L154 54 Q144 58 132 62 Q114 68 98 80 Q82 92 66 98 Z', type: 'fill', zone: 'branch' },
          { d: 'M50 52 Q58 44 68 36 Q72 32 76 28 L80 34 Q74 38 70 42 Q62 50 56 56 Z', type: 'fill', zone: 'branch' },
          { d: 'M48 28 A10 10 0 1 1 47.99 28 Z', type: 'fill', zone: 'blossom' },
          { d: 'M82 16 A8 8 0 1 1 81.99 16 Z', type: 'fill', zone: 'blossom' },
          { d: 'M108 68 A9 9 0 1 1 107.99 68 Z', type: 'fill', zone: 'blossom' },
          { d: 'M148 46 A7 7 0 1 1 147.99 46 Z', type: 'fill', zone: 'blossom' },
          { d: 'M64 14 Q62 10 64 7 Q66 10 64 14 Z', type: 'fill', zone: 'blossom' },
          { d: 'M130 54 Q128 50 130 47 Q132 50 130 54 Z', type: 'fill', zone: 'blossom' },
          { d: 'M74 70 Q72 66 74 63 Q76 66 74 70 Z', type: 'fill', zone: 'blossom' },
          { d: 'M4 168 Q8 150 16 132 Q24 114 40 100 Q50 92 56 78 Q60 66 52 52 Q46 42 50 30 Q54 18 66 12', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
          { d: 'M48 18 L48 28 L48 38 M38 28 L48 28 L58 28 M42 22 L48 28 L54 34 M42 34 L48 28 L54 22', type: 'stroke', zone: 'blossom', strokeWidth: 0.6 },
          { d: 'M108 59 L108 68 L108 77 M99 68 L108 68 L117 68 M102 62 L108 68 L114 74', type: 'stroke', zone: 'blossom', strokeWidth: 0.6 },
          { d: 'M62 94 Q78 86 96 74 Q112 62 130 56 Q142 52 152 48', type: 'stroke', zone: 'branch', strokeWidth: 0.8 },
          // Bark texture — hatching along main branch
          { d: 'M14 140 L18 136 M26 122 L30 118 M42 106 L46 102 M54 84 L58 80 M52 58 L56 54 M50 38 L54 34 M56 22 L60 18', type: 'stroke', zone: 'branch', strokeWidth: 0.4 },
          // Lichen/aging marks
          { d: 'M30 126 Q32 124 34 126 M48 96 Q50 94 52 96 M56 70 Q58 68 60 70', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          // Stamen dots in open blossoms
          { d: 'M46 26 L46 24 M48 26 L48 24 M50 26 L50 24 M48 30 L48 32', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M106 66 L106 64 M108 66 L108 64 M110 66 L110 64 M108 70 L108 72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Blossom outlines for bloom 3 and 4
          { d: 'M82 8 L82 16 L82 24 M74 16 L82 16 L90 16', type: 'stroke', zone: 'blossom', strokeWidth: 0.5 },
          { d: 'M148 39 L148 46 L148 53 M141 46 L148 46 L155 46', type: 'stroke', zone: 'blossom', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // Matsu Branch — horizontal pine branch with needle clusters
  // Spreading form, evergreen strength, fewer but refined clusters
  {
    id: 'matsu-branch',
    name: 'Matsu Branch',
    category: 'flora',
    pack: 'moribana',
    viewBox: '0 -6 200 126',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'needle', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main branch — horizontal sweep, tapered fill, slight upward curve
          { d: 'M4 78 Q20 72 44 66 Q68 60 96 56 Q124 52 152 50 Q172 48 192 44 L196 50 Q176 54 156 56 Q128 58 100 62 Q72 66 48 72 Q24 78 8 82 Z', type: 'fill', zone: 'branch' },
          // Secondary twig angling up-left
          { d: 'M48 72 Q44 60 36 48 Q30 38 28 26 L34 24 Q36 36 42 46 Q48 56 52 68 Z', type: 'fill', zone: 'branch' },
          // Secondary twig angling up-right
          { d: 'M140 54 Q142 42 148 32 Q152 24 160 18 L164 24 Q158 30 154 38 Q148 48 146 58 Z', type: 'fill', zone: 'branch' },
          // Needle clusters — fan-shaped masses (5 clusters)
          { d: 'M20 26 Q10 18 6 8 Q14 4 24 8 Q32 4 38 10 Q42 18 36 26 Q30 30 20 26 Z', type: 'fill', zone: 'needle' },
          { d: 'M56 48 Q46 38 44 28 Q52 24 60 28 Q68 24 72 32 Q74 40 68 48 Q62 52 56 48 Z', type: 'fill', zone: 'needle' },
          { d: 'M100 44 Q92 34 90 24 Q98 20 106 24 Q114 20 118 28 Q120 36 114 44 Q108 48 100 44 Z', type: 'fill', zone: 'needle' },
          { d: 'M150 14 Q142 6 140 -2 Q148 -4 156 0 Q164 -4 168 4 Q168 12 162 18 Q156 20 150 14 Z', type: 'fill', zone: 'needle' },
          { d: 'M176 38 Q170 30 168 22 Q174 18 182 22 Q188 20 190 28 Q190 34 184 40 Q180 42 176 38 Z', type: 'fill', zone: 'needle' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M4 78 Q20 72 44 66 Q68 60 96 56 Q124 52 152 50 Q172 48 192 44 L196 50 Q176 54 156 56 Q128 58 100 62 Q72 66 48 72 Q24 78 8 82 Z', type: 'fill', zone: 'branch' },
          { d: 'M48 72 Q44 60 36 48 Q30 38 28 26 L34 24 Q36 36 42 46 Q48 56 52 68 Z', type: 'fill', zone: 'branch' },
          { d: 'M140 54 Q142 42 148 32 Q152 24 160 18 L164 24 Q158 30 154 38 Q148 48 146 58 Z', type: 'fill', zone: 'branch' },
          { d: 'M20 26 Q10 18 6 8 Q14 4 24 8 Q32 4 38 10 Q42 18 36 26 Q30 30 20 26 Z', type: 'fill', zone: 'needle' },
          { d: 'M56 48 Q46 38 44 28 Q52 24 60 28 Q68 24 72 32 Q74 40 68 48 Q62 52 56 48 Z', type: 'fill', zone: 'needle' },
          { d: 'M100 44 Q92 34 90 24 Q98 20 106 24 Q114 20 118 28 Q120 36 114 44 Q108 48 100 44 Z', type: 'fill', zone: 'needle' },
          { d: 'M150 14 Q142 6 140 -2 Q148 -4 156 0 Q164 -4 168 4 Q168 12 162 18 Q156 20 150 14 Z', type: 'fill', zone: 'needle' },
          { d: 'M176 38 Q170 30 168 22 Q174 18 182 22 Q188 20 190 28 Q190 34 184 40 Q180 42 176 38 Z', type: 'fill', zone: 'needle' },
          // Branch contour
          { d: 'M4 78 Q20 72 44 66 Q68 60 96 56 Q124 52 152 50 Q172 48 192 44', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
          // Twig contours
          { d: 'M48 72 Q44 60 36 48 Q30 38 28 26 M140 54 Q142 42 148 32 Q152 24 160 18', type: 'stroke', zone: 'branch', strokeWidth: 0.8 },
          // Needle cluster outlines
          { d: 'M20 26 Q10 18 6 8 Q14 4 24 8 Q32 4 38 10 Q42 18 36 26', type: 'stroke', zone: 'needle', strokeWidth: 0.6 },
          { d: 'M100 44 Q92 34 90 24 Q98 20 106 24 Q114 20 118 28 Q120 36 114 44', type: 'stroke', zone: 'needle', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M4 78 Q20 72 44 66 Q68 60 96 56 Q124 52 152 50 Q172 48 192 44 L196 50 Q176 54 156 56 Q128 58 100 62 Q72 66 48 72 Q24 78 8 82 Z', type: 'fill', zone: 'branch' },
          { d: 'M48 72 Q44 60 36 48 Q30 38 28 26 L34 24 Q36 36 42 46 Q48 56 52 68 Z', type: 'fill', zone: 'branch' },
          { d: 'M140 54 Q142 42 148 32 Q152 24 160 18 L164 24 Q158 30 154 38 Q148 48 146 58 Z', type: 'fill', zone: 'branch' },
          { d: 'M20 26 Q10 18 6 8 Q14 4 24 8 Q32 4 38 10 Q42 18 36 26 Q30 30 20 26 Z', type: 'fill', zone: 'needle' },
          { d: 'M56 48 Q46 38 44 28 Q52 24 60 28 Q68 24 72 32 Q74 40 68 48 Q62 52 56 48 Z', type: 'fill', zone: 'needle' },
          { d: 'M100 44 Q92 34 90 24 Q98 20 106 24 Q114 20 118 28 Q120 36 114 44 Q108 48 100 44 Z', type: 'fill', zone: 'needle' },
          { d: 'M150 14 Q142 6 140 -2 Q148 -4 156 0 Q164 -4 168 4 Q168 12 162 18 Q156 20 150 14 Z', type: 'fill', zone: 'needle' },
          { d: 'M176 38 Q170 30 168 22 Q174 18 182 22 Q188 20 190 28 Q190 34 184 40 Q180 42 176 38 Z', type: 'fill', zone: 'needle' },
          { d: 'M4 78 Q20 72 44 66 Q68 60 96 56 Q124 52 152 50 Q172 48 192 44', type: 'stroke', zone: 'branch', strokeWidth: 1.2 },
          { d: 'M48 72 Q44 60 36 48 Q30 38 28 26 M140 54 Q142 42 148 32 Q152 24 160 18', type: 'stroke', zone: 'branch', strokeWidth: 0.8 },
          { d: 'M20 26 Q10 18 6 8 Q14 4 24 8 Q32 4 38 10 Q42 18 36 26', type: 'stroke', zone: 'needle', strokeWidth: 0.6 },
          { d: 'M100 44 Q92 34 90 24 Q98 20 106 24 Q114 20 118 28 Q120 36 114 44', type: 'stroke', zone: 'needle', strokeWidth: 0.6 },
          // Individual needle strokes within clusters
          { d: 'M22 24 L14 10 M24 22 L22 8 M28 22 L32 8 M26 24 L34 14', type: 'stroke', zone: 'needle', strokeWidth: 0.3 },
          { d: 'M58 46 L48 32 M60 44 L56 28 M64 44 L66 28 M62 46 L70 34', type: 'stroke', zone: 'needle', strokeWidth: 0.3 },
          { d: 'M102 42 L94 28 M104 40 L102 24 M108 40 L112 26 M106 42 L116 32', type: 'stroke', zone: 'needle', strokeWidth: 0.3 },
          { d: 'M152 12 L144 0 M154 10 L152 -2 M158 10 L162 -2 M156 12 L166 4', type: 'stroke', zone: 'needle', strokeWidth: 0.3 },
          { d: 'M178 36 L172 24 M180 34 L178 22 M182 34 L186 24 M180 36 L188 30', type: 'stroke', zone: 'needle', strokeWidth: 0.3 },
          // Bark plate texture
          { d: 'M20 74 L24 70 M50 66 L54 62 M80 60 L84 56 M116 54 L120 50 M160 50 L164 46', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // Small cone accent
          { d: 'M120 52 Q118 46 120 42 Q122 46 120 52 Z', type: 'fill', zone: 'detail' },
        ],
      },
    ],
  },

  // Kenzan — pin frog holder, small metallic functional accent
  // The metal base that holds stems in the suiban
  {
    id: 'kenzan',
    name: 'Kenzan',
    category: 'objects & patterns',
    pack: 'moribana',
    viewBox: '0 0 60 30',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'base', defaultPaletteSlot: 4 },
      { id: 'pins', defaultPaletteSlot: 1 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Disc base — heavy metal circle, slight 3/4 view
          { d: 'M4 18 Q6 10 14 6 Q22 2 30 2 Q38 2 46 6 Q54 10 56 18 Q54 24 46 26 Q38 28 30 28 Q22 28 14 26 Q6 24 4 18 Z', type: 'fill', zone: 'base' },
          // Pin surface — rows of pins on top face
          { d: 'M10 14 Q14 8 22 6 Q28 4 30 4 Q32 4 38 6 Q46 8 50 14 Q46 18 38 20 Q32 22 30 22 Q28 22 22 20 Q14 18 10 14 Z', type: 'fill', zone: 'pins' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M4 18 Q6 10 14 6 Q22 2 30 2 Q38 2 46 6 Q54 10 56 18 Q54 24 46 26 Q38 28 30 28 Q22 28 14 26 Q6 24 4 18 Z', type: 'fill', zone: 'base' },
          { d: 'M10 14 Q14 8 22 6 Q28 4 30 4 Q32 4 38 6 Q46 8 50 14 Q46 18 38 20 Q32 22 30 22 Q28 22 22 20 Q14 18 10 14 Z', type: 'fill', zone: 'pins' },
          // Base edge contour
          { d: 'M4 18 Q6 10 14 6 Q22 2 30 2 Q38 2 46 6 Q54 10 56 18', type: 'stroke', zone: 'base', strokeWidth: 1.0 },
          { d: 'M4 18 Q6 24 14 26 Q22 28 30 28 Q38 28 46 26 Q54 24 56 18', type: 'stroke', zone: 'base', strokeWidth: 0.8 },
          // Pin grid — rows of short vertical marks
          { d: 'M16 10 L16 8 M22 8 L22 6 M28 7 L28 5 M34 7 L34 5 M40 8 L40 6 M46 10 L46 8 M19 13 L19 11 M25 11 L25 9 M31 10 L31 8 M37 11 L37 9 M43 13 L43 11', type: 'stroke', zone: 'pins', strokeWidth: 0.6 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M4 18 Q6 10 14 6 Q22 2 30 2 Q38 2 46 6 Q54 10 56 18 Q54 24 46 26 Q38 28 30 28 Q22 28 14 26 Q6 24 4 18 Z', type: 'fill', zone: 'base' },
          { d: 'M10 14 Q14 8 22 6 Q28 4 30 4 Q32 4 38 6 Q46 8 50 14 Q46 18 38 20 Q32 22 30 22 Q28 22 22 20 Q14 18 10 14 Z', type: 'fill', zone: 'pins' },
          { d: 'M4 18 Q6 10 14 6 Q22 2 30 2 Q38 2 46 6 Q54 10 56 18', type: 'stroke', zone: 'base', strokeWidth: 1.0 },
          { d: 'M4 18 Q6 24 14 26 Q22 28 30 28 Q38 28 46 26 Q54 24 56 18', type: 'stroke', zone: 'base', strokeWidth: 0.8 },
          { d: 'M16 10 L16 8 M22 8 L22 6 M28 7 L28 5 M34 7 L34 5 M40 8 L40 6 M46 10 L46 8 M19 13 L19 11 M25 11 L25 9 M31 10 L31 8 M37 11 L37 9 M43 13 L43 11', type: 'stroke', zone: 'pins', strokeWidth: 0.6 },
          // Additional pin rows (denser detail)
          { d: 'M14 12 L14 10 M20 10 L20 8 M26 9 L26 7 M32 8 L32 6 M38 9 L38 7 M44 10 L44 8 M48 12 L48 10', type: 'stroke', zone: 'pins', strokeWidth: 0.4 },
          { d: 'M22 14 L22 12 M28 13 L28 11 M34 12 L34 10 M40 13 L40 11', type: 'stroke', zone: 'pins', strokeWidth: 0.4 },
          // Metal sheen marks on base
          { d: 'M10 20 Q14 22 18 20 M40 20 Q44 22 48 20 M24 24 Q28 26 32 24', type: 'stroke', zone: 'base', strokeWidth: 0.3 },
          // Weight ring on base bottom
          { d: 'M12 22 Q20 26 30 26 Q40 26 48 22', type: 'stroke', zone: 'base', strokeWidth: 0.3 },
        ],
      },
    ],
  },

];
