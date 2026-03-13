// Mokuri — Figure Elements
// Human staffage figures inspired by ukiyo-e landscape tradition.
// Gesture-defined silhouettes: hat, robe, and activity — no facial detail.

const MOKURI_FIGURES_ELEMENTS = [
  // ── Traveler ───────────────────────────────────────────────
  // Reference figure for the figures category.
  // Conical kasa hat, walking staff, flowing robes — the Tōkaidō icon.
  {
    id: 'traveler',
    name: 'Traveler',
    category: 'figures',
    viewBox: '0 0 90 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'hat', defaultPaletteSlot: 4 },
      { id: 'robe', defaultPaletteSlot: 0 },
      { id: 'staff', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Conical kasa hat — wide brim, slightly asymmetric
          { d: 'M28,38 Q35,18 45,12 Q55,18 62,38 Q48,42 28,38 Z', type: 'fill', zone: 'hat' },
          // Outer robe — flowing silhouette, wide at hem, tapered at shoulders
          { d: 'M32,40 Q34,36 40,34 L50,34 Q56,36 58,40 Q60,55 62,75 Q65,100 70,130 Q68,148 60,155 L30,155 Q22,148 20,130 Q25,100 28,75 Q30,55 32,40 Z', type: 'fill', zone: 'robe' },
          // Walking staff — tapered fill, leans slightly forward
          { d: 'M70,22 Q71,20 73,20 L74,22 Q73,70 72,120 Q71,142 70,155 L68,155 Q69,142 70,120 Q71,70 70,22 Z', type: 'fill', zone: 'staff' },
          // Visible leading foot — small fill peeking below hem
          { d: 'M38,152 Q40,148 44,150 Q42,156 38,155 Z', type: 'fill', zone: 'robe' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills
          { d: 'M28,38 Q35,18 45,12 Q55,18 62,38 Q48,42 28,38 Z', type: 'fill', zone: 'hat' },
          { d: 'M32,40 Q34,36 40,34 L50,34 Q56,36 58,40 Q60,55 62,75 Q65,100 70,130 Q68,148 60,155 L30,155 Q22,148 20,130 Q25,100 28,75 Q30,55 32,40 Z', type: 'fill', zone: 'robe' },
          { d: 'M70,22 Q71,20 73,20 L74,22 Q73,70 72,120 Q71,142 70,155 L68,155 Q69,142 70,120 Q71,70 70,22 Z', type: 'fill', zone: 'staff' },
          { d: 'M38,152 Q40,148 44,150 Q42,156 38,155 Z', type: 'fill', zone: 'robe' },
          // Hat brim edge
          { d: 'M28,38 Q35,18 45,12 Q55,18 62,38', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          // Robe collar / neckline
          { d: 'M40,34 Q43,40 45,44 Q47,40 50,34', type: 'stroke', zone: 'robe', strokeWidth: 1 },
          // Sleeve divisions — left and right sleeves as one M-move path
          { d: 'M32,50 Q28,62 24,72 M58,50 Q62,62 66,72', type: 'stroke', zone: 'robe', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All shape paths
          { d: 'M28,38 Q35,18 45,12 Q55,18 62,38 Q48,42 28,38 Z', type: 'fill', zone: 'hat' },
          { d: 'M32,40 Q34,36 40,34 L50,34 Q56,36 58,40 Q60,55 62,75 Q65,100 70,130 Q68,148 60,155 L30,155 Q22,148 20,130 Q25,100 28,75 Q30,55 32,40 Z', type: 'fill', zone: 'robe' },
          { d: 'M70,22 Q71,20 73,20 L74,22 Q73,70 72,120 Q71,142 70,155 L68,155 Q69,142 70,120 Q71,70 70,22 Z', type: 'fill', zone: 'staff' },
          { d: 'M38,152 Q40,148 44,150 Q42,156 38,155 Z', type: 'fill', zone: 'robe' },
          { d: 'M28,38 Q35,18 45,12 Q55,18 62,38', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          { d: 'M40,34 Q43,40 45,44 Q47,40 50,34', type: 'stroke', zone: 'robe', strokeWidth: 1 },
          { d: 'M32,50 Q28,62 24,72 M58,50 Q62,62 66,72', type: 'stroke', zone: 'robe', strokeWidth: 1 },
          // Hat weave — radiating straw lines from crown
          { d: 'M45,14 L32,35 M45,14 L42,36 M45,14 L52,36 M45,14 L58,35', type: 'stroke', zone: 'hat', strokeWidth: 0.5 },
          // Robe fold lines — long flowing curves suggesting drape
          { d: 'M42,50 Q40,80 35,120 Q32,140 30,152 M48,50 Q50,85 55,120 Q58,140 60,152', type: 'stroke', zone: 'robe', strokeWidth: 0.6 },
          // Hem detail and trailing fabric
          { d: 'M30,152 Q38,148 45,152 Q52,148 60,152', type: 'stroke', zone: 'robe', strokeWidth: 0.5 },
          // Staff grip wrapping marks
          { d: 'M69,45 L74,44 M69,48 L74,47 M69,51 L74,50', type: 'stroke', zone: 'staff', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ── Figure with Umbrella ───────────────────────────────────
  // Elegant wagasa parasol overhead, walking in rain or sun.
  {
    id: 'umbrella-figure',
    name: 'Figure with Umbrella',
    category: 'figures',
    viewBox: '0 0 110 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'umbrella', defaultPaletteSlot: 1 },
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Wagasa parasol — broad dome, asymmetric tilt
          { d: 'M15,42 Q30,8 55,4 Q80,8 98,42 Q58,48 15,42 Z', type: 'fill', zone: 'umbrella' },
          // Umbrella handle — thin tapered fill
          { d: 'M54,42 Q55,40 56,42 L57,90 Q56,92 55,92 L54,90 Z', type: 'fill', zone: 'accent' },
          // Robed figure beneath — visible from waist down + shoulder
          { d: 'M38,58 Q42,50 50,48 Q58,50 62,58 Q64,80 68,110 Q70,135 65,155 L35,155 Q30,135 32,110 Q36,80 38,58 Z', type: 'fill', zone: 'garment' },
          // Leading foot
          { d: 'M42,152 Q44,148 48,150 Q46,156 42,155 Z', type: 'fill', zone: 'garment' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M15,42 Q30,8 55,4 Q80,8 98,42 Q58,48 15,42 Z', type: 'fill', zone: 'umbrella' },
          { d: 'M54,42 Q55,40 56,42 L57,90 Q56,92 55,92 L54,90 Z', type: 'fill', zone: 'accent' },
          { d: 'M38,58 Q42,50 50,48 Q58,50 62,58 Q64,80 68,110 Q70,135 65,155 L35,155 Q30,135 32,110 Q36,80 38,58 Z', type: 'fill', zone: 'garment' },
          { d: 'M42,152 Q44,148 48,150 Q46,156 42,155 Z', type: 'fill', zone: 'garment' },
          // Parasol edge arc
          { d: 'M15,42 Q30,8 55,4 Q80,8 98,42', type: 'stroke', zone: 'umbrella', strokeWidth: 1.2 },
          // Sleeve openings
          { d: 'M38,65 Q34,78 30,88 M62,65 Q66,78 70,88', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Collar fold
          { d: 'M45,50 Q48,56 50,60 Q52,56 55,50', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M15,42 Q30,8 55,4 Q80,8 98,42 Q58,48 15,42 Z', type: 'fill', zone: 'umbrella' },
          { d: 'M54,42 Q55,40 56,42 L57,90 Q56,92 55,92 L54,90 Z', type: 'fill', zone: 'accent' },
          { d: 'M38,58 Q42,50 50,48 Q58,50 62,58 Q64,80 68,110 Q70,135 65,155 L35,155 Q30,135 32,110 Q36,80 38,58 Z', type: 'fill', zone: 'garment' },
          { d: 'M42,152 Q44,148 48,150 Q46,156 42,155 Z', type: 'fill', zone: 'garment' },
          { d: 'M15,42 Q30,8 55,4 Q80,8 98,42', type: 'stroke', zone: 'umbrella', strokeWidth: 1.2 },
          { d: 'M38,65 Q34,78 30,88 M62,65 Q66,78 70,88', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M45,50 Q48,56 50,60 Q52,56 55,50', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Parasol rib lines — radiating from center
          { d: 'M55,6 Q40,22 20,40 M55,6 Q45,20 30,38 M55,6 Q55,20 55,40 M55,6 Q65,20 78,38 M55,6 Q70,22 90,40', type: 'stroke', zone: 'umbrella', strokeWidth: 0.5 },
          // Robe fold drapes
          { d: 'M45,68 Q43,95 38,130 Q36,142 35,152 M55,68 Q57,95 62,130 Q64,142 65,152', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Hem ripple
          { d: 'M35,152 Q42,148 50,152 Q57,148 65,152', type: 'stroke', zone: 'garment', strokeWidth: 0.4 },
          // Handle wrapping
          { d: 'M53,60 L58,59 M53,64 L58,63 M53,68 L58,67', type: 'stroke', zone: 'accent', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ── Fisherman ──────────────────────────────────────────────
  // Seated figure with angled rod, patient posture by water.
  {
    id: 'fisherman',
    name: 'Fisherman',
    category: 'figures',
    viewBox: '0 0 130 110',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'hat', defaultPaletteSlot: 4 },
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'rod', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Wide straw hat — broad brim
          { d: 'M20,38 Q30,20 42,15 Q54,20 64,38 Q44,42 20,38 Z', type: 'fill', zone: 'hat' },
          // Seated body — hunched, compact silhouette
          { d: 'M26,40 Q30,36 38,34 L50,34 Q56,36 58,40 Q60,52 58,65 Q56,78 52,88 L28,88 Q24,78 22,65 Q24,52 26,40 Z', type: 'fill', zone: 'garment' },
          // Fishing rod — long diagonal, tapered
          { d: 'M56,42 Q58,40 60,40 Q80,20 100,8 Q108,4 118,2 L119,5 Q110,8 102,12 Q82,24 62,44 Z', type: 'fill', zone: 'rod' },
          // Fishing line — thin arc from rod tip to water
          { d: 'M118,3 Q122,18 126,35 Q128,50 125,62 L124,61 Q126,48 124,34 Q120,18 117,4 Z', type: 'fill', zone: 'rod' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20,38 Q30,20 42,15 Q54,20 64,38 Q44,42 20,38 Z', type: 'fill', zone: 'hat' },
          { d: 'M26,40 Q30,36 38,34 L50,34 Q56,36 58,40 Q60,52 58,65 Q56,78 52,88 L28,88 Q24,78 22,65 Q24,52 26,40 Z', type: 'fill', zone: 'garment' },
          { d: 'M56,42 Q58,40 60,40 Q80,20 100,8 Q108,4 118,2 L119,5 Q110,8 102,12 Q82,24 62,44 Z', type: 'fill', zone: 'rod' },
          { d: 'M118,3 Q122,18 126,35 Q128,50 125,62 L124,61 Q126,48 124,34 Q120,18 117,4 Z', type: 'fill', zone: 'rod' },
          // Hat brim edge
          { d: 'M20,38 Q30,20 42,15 Q54,20 64,38', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          // Arm reaching to rod
          { d: 'M54,48 Q56,44 58,42', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Knee fold — seated posture line
          { d: 'M30,70 Q38,65 48,68 Q54,72 52,78', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20,38 Q30,20 42,15 Q54,20 64,38 Q44,42 20,38 Z', type: 'fill', zone: 'hat' },
          { d: 'M26,40 Q30,36 38,34 L50,34 Q56,36 58,40 Q60,52 58,65 Q56,78 52,88 L28,88 Q24,78 22,65 Q24,52 26,40 Z', type: 'fill', zone: 'garment' },
          { d: 'M56,42 Q58,40 60,40 Q80,20 100,8 Q108,4 118,2 L119,5 Q110,8 102,12 Q82,24 62,44 Z', type: 'fill', zone: 'rod' },
          { d: 'M118,3 Q122,18 126,35 Q128,50 125,62 L124,61 Q126,48 124,34 Q120,18 117,4 Z', type: 'fill', zone: 'rod' },
          { d: 'M20,38 Q30,20 42,15 Q54,20 64,38', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          { d: 'M54,48 Q56,44 58,42', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M30,70 Q38,65 48,68 Q54,72 52,78', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Hat straw weave
          { d: 'M42,17 L28,35 M42,17 L38,36 M42,17 L48,36 M42,17 L56,35', type: 'stroke', zone: 'hat', strokeWidth: 0.5 },
          // Robe wrinkle lines
          { d: 'M34,50 Q36,60 34,72 M46,48 Q48,58 50,72', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Hem and seated base
          { d: 'M28,85 Q36,82 44,85 Q50,82 52,85', type: 'stroke', zone: 'garment', strokeWidth: 0.4 },
          // Rod wrapping near grip
          { d: 'M58,42 L62,40 M60,44 L64,42 M62,46 L66,44', type: 'stroke', zone: 'rod', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // ── Field Worker ───────────────────────────────────────────
  // Bent at waist, wide straw hat, working in the fields.
  {
    id: 'field-worker',
    name: 'Field Worker',
    category: 'figures',
    viewBox: '0 0 100 125',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'hat', defaultPaletteSlot: 4 },
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'accent', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Wide sedge hat — tilted forward with bending posture
          { d: 'M18,32 Q32,12 48,8 Q64,12 78,32 Q50,38 18,32 Z', type: 'fill', zone: 'hat' },
          // Bent torso and legs — hunched working pose
          { d: 'M30,34 Q36,30 44,28 Q52,30 58,34 Q62,48 64,62 Q66,78 62,95 Q58,108 55,118 L38,118 Q34,108 32,95 Q28,78 30,62 Q32,48 30,34 Z', type: 'fill', zone: 'garment' },
          // Arms reaching down — working gesture
          { d: 'M30,48 Q24,56 20,68 Q18,74 20,76 L24,74 Q26,68 28,60 Q30,54 32,50 Z', type: 'fill', zone: 'garment' },
          // Sash / obi at waist
          { d: 'M32,58 Q40,55 50,56 Q56,58 60,62 Q52,64 42,63 Q36,62 32,58 Z', type: 'fill', zone: 'accent' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M18,32 Q32,12 48,8 Q64,12 78,32 Q50,38 18,32 Z', type: 'fill', zone: 'hat' },
          { d: 'M30,34 Q36,30 44,28 Q52,30 58,34 Q62,48 64,62 Q66,78 62,95 Q58,108 55,118 L38,118 Q34,108 32,95 Q28,78 30,62 Q32,48 30,34 Z', type: 'fill', zone: 'garment' },
          { d: 'M30,48 Q24,56 20,68 Q18,74 20,76 L24,74 Q26,68 28,60 Q30,54 32,50 Z', type: 'fill', zone: 'garment' },
          { d: 'M32,58 Q40,55 50,56 Q56,58 60,62 Q52,64 42,63 Q36,62 32,58 Z', type: 'fill', zone: 'accent' },
          // Hat brim edge
          { d: 'M18,32 Q32,12 48,8 Q64,12 78,32', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          // Right arm (other side, tucked)
          { d: 'M58,48 Q62,56 66,65', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Leg division — bent knee visible
          { d: 'M40,88 Q42,95 44,105 M50,88 Q52,95 54,105', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M18,32 Q32,12 48,8 Q64,12 78,32 Q50,38 18,32 Z', type: 'fill', zone: 'hat' },
          { d: 'M30,34 Q36,30 44,28 Q52,30 58,34 Q62,48 64,62 Q66,78 62,95 Q58,108 55,118 L38,118 Q34,108 32,95 Q28,78 30,62 Q32,48 30,34 Z', type: 'fill', zone: 'garment' },
          { d: 'M30,48 Q24,56 20,68 Q18,74 20,76 L24,74 Q26,68 28,60 Q30,54 32,50 Z', type: 'fill', zone: 'garment' },
          { d: 'M32,58 Q40,55 50,56 Q56,58 60,62 Q52,64 42,63 Q36,62 32,58 Z', type: 'fill', zone: 'accent' },
          { d: 'M18,32 Q32,12 48,8 Q64,12 78,32', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          { d: 'M58,48 Q62,56 66,65', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M40,88 Q42,95 44,105 M50,88 Q52,95 54,105', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Hat straw texture
          { d: 'M48,10 L30,30 M48,10 L42,32 M48,10 L54,32 M48,10 L64,30', type: 'stroke', zone: 'hat', strokeWidth: 0.5 },
          // Garment fold lines on back
          { d: 'M38,42 Q40,50 38,58 M48,40 Q50,48 52,58', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Sash tie knot detail
          { d: 'M56,58 Q60,56 62,60 Q60,64 56,62', type: 'stroke', zone: 'accent', strokeWidth: 0.5 },
          // Hem wrinkles
          { d: 'M38,115 Q44,112 50,115 Q54,112 55,115', type: 'stroke', zone: 'garment', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // ── Two Travelers ──────────────────────────────────────────
  // Walking pair, one slightly ahead and overlapping.
  {
    id: 'two-travelers',
    name: 'Two Travelers',
    category: 'figures',
    viewBox: '0 0 140 155',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'hat', defaultPaletteSlot: 4 },
      { id: 'outer', defaultPaletteSlot: 0 },
      { id: 'inner', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Rear figure hat
          { d: 'M52,35 Q60,18 70,12 Q80,18 88,35 Q72,39 52,35 Z', type: 'fill', zone: 'hat' },
          // Rear figure robe
          { d: 'M56,37 Q60,33 68,31 L76,31 Q80,33 84,37 Q86,55 88,78 Q90,105 86,135 Q84,145 78,150 L60,150 Q54,145 52,135 Q50,105 52,78 Q54,55 56,37 Z', type: 'fill', zone: 'inner' },
          // Front figure hat — slightly lower, overlapping
          { d: 'M22,40 Q32,22 42,16 Q52,22 62,40 Q44,44 22,40 Z', type: 'fill', zone: 'hat' },
          // Front figure robe — overlaps rear figure
          { d: 'M28,42 Q32,38 38,36 L48,36 Q54,38 56,42 Q58,58 60,80 Q62,108 58,138 Q56,148 50,152 L30,152 Q24,148 22,138 Q20,108 22,80 Q24,58 28,42 Z', type: 'fill', zone: 'outer' },
          // Front figure leading foot
          { d: 'M35,149 Q37,145 41,147 Q39,153 35,152 Z', type: 'fill', zone: 'outer' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M52,35 Q60,18 70,12 Q80,18 88,35 Q72,39 52,35 Z', type: 'fill', zone: 'hat' },
          { d: 'M56,37 Q60,33 68,31 L76,31 Q80,33 84,37 Q86,55 88,78 Q90,105 86,135 Q84,145 78,150 L60,150 Q54,145 52,135 Q50,105 52,78 Q54,55 56,37 Z', type: 'fill', zone: 'inner' },
          { d: 'M22,40 Q32,22 42,16 Q52,22 62,40 Q44,44 22,40 Z', type: 'fill', zone: 'hat' },
          { d: 'M28,42 Q32,38 38,36 L48,36 Q54,38 56,42 Q58,58 60,80 Q62,108 58,138 Q56,148 50,152 L30,152 Q24,148 22,138 Q20,108 22,80 Q24,58 28,42 Z', type: 'fill', zone: 'outer' },
          { d: 'M35,149 Q37,145 41,147 Q39,153 35,152 Z', type: 'fill', zone: 'outer' },
          // Front figure hat brim
          { d: 'M22,40 Q32,22 42,16 Q52,22 62,40', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          // Front figure collar
          { d: 'M38,38 Q41,44 43,48 Q45,44 48,38', type: 'stroke', zone: 'outer', strokeWidth: 1 },
          // Rear figure sleeve visible above front
          { d: 'M84,50 Q88,62 90,72', type: 'stroke', zone: 'inner', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M52,35 Q60,18 70,12 Q80,18 88,35 Q72,39 52,35 Z', type: 'fill', zone: 'hat' },
          { d: 'M56,37 Q60,33 68,31 L76,31 Q80,33 84,37 Q86,55 88,78 Q90,105 86,135 Q84,145 78,150 L60,150 Q54,145 52,135 Q50,105 52,78 Q54,55 56,37 Z', type: 'fill', zone: 'inner' },
          { d: 'M22,40 Q32,22 42,16 Q52,22 62,40 Q44,44 22,40 Z', type: 'fill', zone: 'hat' },
          { d: 'M28,42 Q32,38 38,36 L48,36 Q54,38 56,42 Q58,58 60,80 Q62,108 58,138 Q56,148 50,152 L30,152 Q24,148 22,138 Q20,108 22,80 Q24,58 28,42 Z', type: 'fill', zone: 'outer' },
          { d: 'M35,149 Q37,145 41,147 Q39,153 35,152 Z', type: 'fill', zone: 'outer' },
          { d: 'M22,40 Q32,22 42,16 Q52,22 62,40', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          { d: 'M38,38 Q41,44 43,48 Q45,44 48,38', type: 'stroke', zone: 'outer', strokeWidth: 1 },
          { d: 'M84,50 Q88,62 90,72', type: 'stroke', zone: 'inner', strokeWidth: 0.8 },
          // Front hat straw lines
          { d: 'M42,18 L28,38 M42,18 L38,38 M42,18 L48,38 M42,18 L56,38', type: 'stroke', zone: 'hat', strokeWidth: 0.5 },
          // Front robe folds
          { d: 'M36,55 Q35,85 32,125 Q30,138 30,148 M46,52 Q48,85 52,125 Q54,138 55,148', type: 'stroke', zone: 'outer', strokeWidth: 0.5 },
          // Rear robe fold (visible portion)
          { d: 'M68,50 Q70,80 72,120 Q74,138 76,148', type: 'stroke', zone: 'inner', strokeWidth: 0.5 },
          // Hem details
          { d: 'M30,149 Q38,146 45,149 Q50,146 55,149 M60,148 Q66,145 72,148 Q76,145 78,148', type: 'stroke', zone: 'outer', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // ── Seated Figure ──────────────────────────────────────────
  // Contemplative kneeling/seiza pose, near temple or garden.
  {
    id: 'seated-figure',
    name: 'Seated Figure',
    category: 'figures',
    viewBox: '0 0 90 105',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'sash', defaultPaletteSlot: 1 },
      { id: 'accent', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Head — small, bowed slightly forward
          { d: 'M38,18 Q40,8 45,5 Q50,8 52,18 Q48,22 42,22 Q38,20 38,18 Z', type: 'fill', zone: 'accent' },
          // Upper body — shoulders and torso
          { d: 'M26,24 Q32,20 42,20 L50,20 Q58,20 64,24 Q66,36 64,48 Q62,54 58,58 L32,58 Q28,54 26,48 Q24,36 26,24 Z', type: 'fill', zone: 'garment' },
          // Sash at waist
          { d: 'M28,52 Q38,48 50,50 Q58,52 62,56 Q54,60 42,58 Q34,56 28,52 Z', type: 'fill', zone: 'sash' },
          // Folded legs — wide base
          { d: 'M22,58 Q24,55 30,56 L60,56 Q66,55 68,58 Q70,72 68,85 Q64,95 58,100 L32,100 Q26,95 22,85 Q20,72 22,58 Z', type: 'fill', zone: 'garment' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M38,18 Q40,8 45,5 Q50,8 52,18 Q48,22 42,22 Q38,20 38,18 Z', type: 'fill', zone: 'accent' },
          { d: 'M26,24 Q32,20 42,20 L50,20 Q58,20 64,24 Q66,36 64,48 Q62,54 58,58 L32,58 Q28,54 26,48 Q24,36 26,24 Z', type: 'fill', zone: 'garment' },
          { d: 'M28,52 Q38,48 50,50 Q58,52 62,56 Q54,60 42,58 Q34,56 28,52 Z', type: 'fill', zone: 'sash' },
          { d: 'M22,58 Q24,55 30,56 L60,56 Q66,55 68,58 Q70,72 68,85 Q64,95 58,100 L32,100 Q26,95 22,85 Q20,72 22,58 Z', type: 'fill', zone: 'garment' },
          // Sleeve drape — arms resting
          { d: 'M26,30 Q20,40 18,50 M64,30 Q70,40 72,50', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Collar opening
          { d: 'M42,22 Q44,30 45,38 Q46,30 50,22', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Knee fold line
          { d: 'M28,72 Q38,68 50,70 Q60,72 64,76', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M38,18 Q40,8 45,5 Q50,8 52,18 Q48,22 42,22 Q38,20 38,18 Z', type: 'fill', zone: 'accent' },
          { d: 'M26,24 Q32,20 42,20 L50,20 Q58,20 64,24 Q66,36 64,48 Q62,54 58,58 L32,58 Q28,54 26,48 Q24,36 26,24 Z', type: 'fill', zone: 'garment' },
          { d: 'M28,52 Q38,48 50,50 Q58,52 62,56 Q54,60 42,58 Q34,56 28,52 Z', type: 'fill', zone: 'sash' },
          { d: 'M22,58 Q24,55 30,56 L60,56 Q66,55 68,58 Q70,72 68,85 Q64,95 58,100 L32,100 Q26,95 22,85 Q20,72 22,58 Z', type: 'fill', zone: 'garment' },
          { d: 'M26,30 Q20,40 18,50 M64,30 Q70,40 72,50', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M42,22 Q44,30 45,38 Q46,30 50,22', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          { d: 'M28,72 Q38,68 50,70 Q60,72 64,76', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Hair knot on bowed head
          { d: 'M43,6 Q46,2 48,6 Q46,8 43,6 Z', type: 'fill', zone: 'accent' },
          // Shoulder fold lines
          { d: 'M34,28 Q36,35 34,44 M54,28 Q56,35 58,44', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Sash knot detail
          { d: 'M58,52 Q62,50 64,54 Q62,58 58,56', type: 'stroke', zone: 'sash', strokeWidth: 0.5 },
          // Robe hem at base
          { d: 'M32,97 Q40,94 50,97 Q56,94 58,97', type: 'stroke', zone: 'garment', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // ── Boatman ────────────────────────────────────────────────
  // Standing figure with long pole, pairs with fishing boat.
  {
    id: 'boatman',
    name: 'Boatman',
    category: 'figures',
    viewBox: '0 0 80 155',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'hat', defaultPaletteSlot: 4 },
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'pole', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Flat straw hat — different shape from traveler kasa
          { d: 'M18,30 Q25,18 38,14 Q50,18 58,30 Q40,35 18,30 Z', type: 'fill', zone: 'hat' },
          // Shorter working robe — above ankle, arms wider for balance
          { d: 'M22,32 Q28,28 36,26 L44,26 Q50,28 54,32 Q56,48 58,68 Q60,90 58,112 Q56,125 52,135 L24,135 Q20,125 18,112 Q16,90 18,68 Q20,48 22,32 Z', type: 'fill', zone: 'garment' },
          // Long pole — diagonal, reaching into water
          { d: 'M8,8 Q9,6 11,6 L12,8 Q20,38 30,70 Q38,100 44,130 Q46,142 48,150 L46,152 Q44,142 42,132 Q36,102 28,72 Q18,40 8,8 Z', type: 'fill', zone: 'pole' },
          // Bare feet on boat edge
          { d: 'M28,132 Q32,128 36,132 Q34,138 28,136 Z M44,130 Q48,126 52,130 Q50,136 44,134 Z', type: 'fill', zone: 'garment' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M18,30 Q25,18 38,14 Q50,18 58,30 Q40,35 18,30 Z', type: 'fill', zone: 'hat' },
          { d: 'M22,32 Q28,28 36,26 L44,26 Q50,28 54,32 Q56,48 58,68 Q60,90 58,112 Q56,125 52,135 L24,135 Q20,125 18,112 Q16,90 18,68 Q20,48 22,32 Z', type: 'fill', zone: 'garment' },
          { d: 'M8,8 Q9,6 11,6 L12,8 Q20,38 30,70 Q38,100 44,130 Q46,142 48,150 L46,152 Q44,142 42,132 Q36,102 28,72 Q18,40 8,8 Z', type: 'fill', zone: 'pole' },
          { d: 'M28,132 Q32,128 36,132 Q34,138 28,136 Z M44,130 Q48,126 52,130 Q50,136 44,134 Z', type: 'fill', zone: 'garment' },
          // Hat brim
          { d: 'M18,30 Q25,18 38,14 Q50,18 58,30', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          // Arms gripping pole
          { d: 'M24,45 Q18,52 14,42 M52,45 Q48,38 42,44', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Robe hem cut — shorter working garment
          { d: 'M24,132 Q32,128 40,132 Q48,128 52,132', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M18,30 Q25,18 38,14 Q50,18 58,30 Q40,35 18,30 Z', type: 'fill', zone: 'hat' },
          { d: 'M22,32 Q28,28 36,26 L44,26 Q50,28 54,32 Q56,48 58,68 Q60,90 58,112 Q56,125 52,135 L24,135 Q20,125 18,112 Q16,90 18,68 Q20,48 22,32 Z', type: 'fill', zone: 'garment' },
          { d: 'M8,8 Q9,6 11,6 L12,8 Q20,38 30,70 Q38,100 44,130 Q46,142 48,150 L46,152 Q44,142 42,132 Q36,102 28,72 Q18,40 8,8 Z', type: 'fill', zone: 'pole' },
          { d: 'M28,132 Q32,128 36,132 Q34,138 28,136 Z M44,130 Q48,126 52,130 Q50,136 44,134 Z', type: 'fill', zone: 'garment' },
          { d: 'M18,30 Q25,18 38,14 Q50,18 58,30', type: 'stroke', zone: 'hat', strokeWidth: 1.2 },
          { d: 'M24,45 Q18,52 14,42 M52,45 Q48,38 42,44', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M24,132 Q32,128 40,132 Q48,128 52,132', type: 'stroke', zone: 'garment', strokeWidth: 0.8 },
          // Hat straw lines
          { d: 'M38,16 L24,28 M38,16 L34,30 M38,16 L44,30 M38,16 L52,28', type: 'stroke', zone: 'hat', strokeWidth: 0.5 },
          // Robe fold lines
          { d: 'M32,45 Q30,72 28,105 Q26,118 24,130 M44,42 Q46,72 50,105 Q52,118 52,130', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Pole texture — bamboo node marks
          { d: 'M14,35 L18,33 M22,55 L26,53 M30,75 L34,73 M38,95 L42,93', type: 'stroke', zone: 'pole', strokeWidth: 0.5 },
          // Chest opening V
          { d: 'M36,28 Q38,36 38,42 Q40,36 44,28', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
        ],
      },
    ],
  },

  // ── Woman with Bundle ──────────────────────────────────────
  // Elegant S-curve posture, carrying wrapped furoshiki bundle.
  {
    id: 'woman-bundle',
    name: 'Woman with Bundle',
    category: 'figures',
    viewBox: '0 0 80 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'garment', defaultPaletteSlot: 0 },
      { id: 'obi', defaultPaletteSlot: 1 },
      { id: 'bundle', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Hair — swept up in traditional mage
          { d: 'M32,18 Q34,6 40,3 Q46,6 48,18 Q45,22 40,23 Q35,22 32,18 Z', type: 'fill', zone: 'garment' },
          // Kimono body — elegant S-curve, wider at hem
          { d: 'M28,24 Q32,20 38,20 L46,20 Q52,22 54,26 Q56,42 55,62 Q54,82 52,100 Q50,120 52,140 Q50,152 46,158 L28,158 Q22,152 20,140 Q22,120 24,100 Q26,82 25,62 Q24,42 28,24 Z', type: 'fill', zone: 'garment' },
          // Obi sash — wide decorative band
          { d: 'M26,62 Q34,58 44,60 Q50,62 52,68 Q46,74 36,72 Q30,70 26,62 Z', type: 'fill', zone: 'obi' },
          // Furoshiki bundle — held on shoulder/back
          { d: 'M52,28 Q58,22 66,24 Q72,28 70,38 Q66,44 58,42 Q52,38 52,28 Z', type: 'fill', zone: 'bundle' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M32,18 Q34,6 40,3 Q46,6 48,18 Q45,22 40,23 Q35,22 32,18 Z', type: 'fill', zone: 'garment' },
          { d: 'M28,24 Q32,20 38,20 L46,20 Q52,22 54,26 Q56,42 55,62 Q54,82 52,100 Q50,120 52,140 Q50,152 46,158 L28,158 Q22,152 20,140 Q22,120 24,100 Q26,82 25,62 Q24,42 28,24 Z', type: 'fill', zone: 'garment' },
          { d: 'M26,62 Q34,58 44,60 Q50,62 52,68 Q46,74 36,72 Q30,70 26,62 Z', type: 'fill', zone: 'obi' },
          { d: 'M52,28 Q58,22 66,24 Q72,28 70,38 Q66,44 58,42 Q52,38 52,28 Z', type: 'fill', zone: 'bundle' },
          // Collar V
          { d: 'M38,22 Q39,30 40,38 Q41,30 46,22', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Sleeve drape — arm supporting bundle
          { d: 'M52,32 Q56,38 58,42 M28,34 Q22,44 20,52', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          // Bundle wrapping knot
          { d: 'M62,26 Q66,22 68,28 Q66,32 62,30', type: 'stroke', zone: 'bundle', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M32,18 Q34,6 40,3 Q46,6 48,18 Q45,22 40,23 Q35,22 32,18 Z', type: 'fill', zone: 'garment' },
          { d: 'M28,24 Q32,20 38,20 L46,20 Q52,22 54,26 Q56,42 55,62 Q54,82 52,100 Q50,120 52,140 Q50,152 46,158 L28,158 Q22,152 20,140 Q22,120 24,100 Q26,82 25,62 Q24,42 28,24 Z', type: 'fill', zone: 'garment' },
          { d: 'M26,62 Q34,58 44,60 Q50,62 52,68 Q46,74 36,72 Q30,70 26,62 Z', type: 'fill', zone: 'obi' },
          { d: 'M52,28 Q58,22 66,24 Q72,28 70,38 Q66,44 58,42 Q52,38 52,28 Z', type: 'fill', zone: 'bundle' },
          { d: 'M38,22 Q39,30 40,38 Q41,30 46,22', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M52,32 Q56,38 58,42 M28,34 Q22,44 20,52', type: 'stroke', zone: 'garment', strokeWidth: 1 },
          { d: 'M62,26 Q66,22 68,28 Q66,32 62,30', type: 'stroke', zone: 'bundle', strokeWidth: 0.8 },
          // Hair ornament — kanzashi pin
          { d: 'M46,8 Q50,6 52,10 Q50,12 46,10 Z', type: 'fill', zone: 'obi' },
          // Kimono fold lines — long flowing drape
          { d: 'M36,38 Q34,68 30,110 Q28,135 28,155 M44,36 Q46,68 48,110 Q50,135 50,155', type: 'stroke', zone: 'garment', strokeWidth: 0.5 },
          // Obi bow detail at back
          { d: 'M48,64 Q52,60 54,66 Q52,72 48,68', type: 'stroke', zone: 'obi', strokeWidth: 0.5 },
          // Bundle fabric wrinkle
          { d: 'M56,28 Q60,32 64,30 M58,36 Q62,38 66,36', type: 'stroke', zone: 'bundle', strokeWidth: 0.4 },
          // Hem detail
          { d: 'M28,155 Q34,152 40,155 Q44,152 46,155', type: 'stroke', zone: 'garment', strokeWidth: 0.4 },
        ],
      },
    ],
  },
];
