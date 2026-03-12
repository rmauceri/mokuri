const MOKURI_SCENE_ELEMENTS = [
  // 1. bamboo-grove
  {
    id: 'bamboo-grove',
    name: 'Bamboo Grove',
    category: 'landscape',
    viewBox: '0 0 200 280',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'stalk', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 3 },
      { id: 'node', defaultPaletteSlot: 0 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M58,280 L58,42 Q60,38 62,42 L62,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M98,280 L97,55 Q100,50 103,55 L102,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M142,280 L141,68 Q144,63 147,68 L146,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M40,38 Q50,22 60,30 Q58,18 68,12 Q72,24 65,36 Q62,40 55,42 Z', type: 'fill', zone: 'leaf' },
          { d: 'M62,30 Q72,14 82,22 Q80,8 90,4 Q93,18 86,30 Q82,36 74,36 Z', type: 'fill', zone: 'leaf' },
          { d: 'M80,48 Q92,32 100,42 Q100,28 110,24 Q112,38 104,50 Q98,56 90,54 Z', type: 'fill', zone: 'leaf' },
          { d: 'M103,44 Q112,28 122,36 Q120,20 130,16 Q134,30 126,42 Q122,48 114,48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,60 Q136,44 146,54 Q146,38 156,34 Q158,48 148,62 Q142,68 134,66 Z', type: 'fill', zone: 'leaf' },
          { d: 'M146,56 Q156,40 166,48 Q164,34 174,30 Q177,44 168,58 Q162,64 154,62 Z', type: 'fill', zone: 'leaf' },
          { d: 'M36,46 Q46,30 56,38 Q52,24 62,18 Q66,32 58,44 Q54,48 46,48 Z', type: 'fill', zone: 'leaf' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M58,280 L58,42 Q60,38 62,42 L62,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M98,280 L97,55 Q100,50 103,55 L102,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M142,280 L141,68 Q144,63 147,68 L146,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M40,38 Q50,22 60,30 Q58,18 68,12 Q72,24 65,36 Q62,40 55,42 Z', type: 'fill', zone: 'leaf' },
          { d: 'M62,30 Q72,14 82,22 Q80,8 90,4 Q93,18 86,30 Q82,36 74,36 Z', type: 'fill', zone: 'leaf' },
          { d: 'M80,48 Q92,32 100,42 Q100,28 110,24 Q112,38 104,50 Q98,56 90,54 Z', type: 'fill', zone: 'leaf' },
          { d: 'M103,44 Q112,28 122,36 Q120,20 130,16 Q134,30 126,42 Q122,48 114,48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,60 Q136,44 146,54 Q146,38 156,34 Q158,48 148,62 Q142,68 134,66 Z', type: 'fill', zone: 'leaf' },
          { d: 'M146,56 Q156,40 166,48 Q164,34 174,30 Q177,44 168,58 Q162,64 154,62 Z', type: 'fill', zone: 'leaf' },
          { d: 'M36,46 Q46,30 56,38 Q52,24 62,18 Q66,32 58,44 Q54,48 46,48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M56,90 Q58,86 60,85 Q62,86 64,90', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M56,148 Q59,144 60,143 Q61,144 64,148', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M56,210 Q58,206 60,205 Q62,206 64,210', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,108 Q98,104 100,103 Q102,104 105,108', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,172 Q98,168 100,167 Q102,168 105,172', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,238 Q98,234 100,233 Q102,234 105,238', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,124 Q142,120 144,119 Q146,120 149,124', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,186 Q142,182 144,181 Q146,182 149,186', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,250 Q142,246 144,245 Q146,246 149,250', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M58,42 L58,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 },
          { d: 'M62,42 L62,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 },
          { d: 'M97,55 L98,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 },
          { d: 'M103,55 L102,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 },
          { d: 'M141,68 L142,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 },
          { d: 'M147,68 L146,280', type: 'stroke', zone: 'stalk', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M58,280 L58,42 Q60,38 62,42 L62,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M98,280 L97,55 Q100,50 103,55 L102,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M142,280 L141,68 Q144,63 147,68 L146,280 Z', type: 'fill', zone: 'stalk' },
          { d: 'M40,38 Q50,22 60,30 Q58,18 68,12 Q72,24 65,36 Q62,40 55,42 Z', type: 'fill', zone: 'leaf' },
          { d: 'M62,30 Q72,14 82,22 Q80,8 90,4 Q93,18 86,30 Q82,36 74,36 Z', type: 'fill', zone: 'leaf' },
          { d: 'M80,48 Q92,32 100,42 Q100,28 110,24 Q112,38 104,50 Q98,56 90,54 Z', type: 'fill', zone: 'leaf' },
          { d: 'M103,44 Q112,28 122,36 Q120,20 130,16 Q134,30 126,42 Q122,48 114,48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,60 Q136,44 146,54 Q146,38 156,34 Q158,48 148,62 Q142,68 134,66 Z', type: 'fill', zone: 'leaf' },
          { d: 'M146,56 Q156,40 166,48 Q164,34 174,30 Q177,44 168,58 Q162,64 154,62 Z', type: 'fill', zone: 'leaf' },
          { d: 'M36,46 Q46,30 56,38 Q52,24 62,18 Q66,32 58,44 Q54,48 46,48 Z', type: 'fill', zone: 'leaf' },
          { d: 'M56,90 Q58,86 60,85 Q62,86 64,90', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M56,148 Q59,144 60,143 Q61,144 64,148', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M56,210 Q58,206 60,205 Q62,206 64,210', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,108 Q98,104 100,103 Q102,104 105,108', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,172 Q98,168 100,167 Q102,168 105,172', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M95,238 Q98,234 100,233 Q102,234 105,238', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,124 Q142,120 144,119 Q146,120 149,124', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,186 Q142,182 144,181 Q146,182 149,186', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M139,250 Q142,246 144,245 Q146,246 149,250', type: 'stroke', zone: 'node', strokeWidth: 2.5 },
          { d: 'M59,46 L59,86', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M61,46 L61,86', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M59,94 L59,144', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M61,94 L61,144', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M59,152 L59,206', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M99,60 L99,104', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M101,60 L101,104', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M99,112 L99,168', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M143,72 L143,120', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M145,72 L145,120', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M48,34 Q55,28 62,32', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M70,22 Q78,14 86,18', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M88,40 Q96,34 104,38', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M112,34 Q118,26 126,30', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M132,54 Q140,46 150,52', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M154,48 Q162,40 170,46', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M44,40 Q50,36 56,40', type: 'stroke', zone: 'detail', strokeWidth: 0.5 }
        ]
      }
    ]
  },

  // 2. rock-formation
  {
    id: 'rock-formation',
    name: 'Rock Formation',
    category: 'landscape',
    viewBox: '0 0 220 160',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'rock', defaultPaletteSlot: 3 },
      { id: 'shadow', defaultPaletteSlot: 0 },
      { id: 'moss', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M18,155 Q22,112 38,88 Q52,68 78,56 Q96,52 110,58 Q128,68 136,88 Q142,108 140,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M100,155 Q106,128 118,108 Q132,90 152,78 Q168,72 182,76 Q198,84 206,100 Q212,120 210,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M56,155 Q60,140 68,130 Q78,120 90,116 Q100,114 108,118 Q116,124 118,136 Q120,148 118,155 Z', type: 'fill', zone: 'rock' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M18,155 Q22,112 38,88 Q52,68 78,56 Q96,52 110,58 Q128,68 136,88 Q142,108 140,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M100,155 Q106,128 118,108 Q132,90 152,78 Q168,72 182,76 Q198,84 206,100 Q212,120 210,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M56,155 Q60,140 68,130 Q78,120 90,116 Q100,114 108,118 Q116,124 118,136 Q120,148 118,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M78,155 Q82,130 96,112 Q108,100 120,108 Q126,118 124,155 Z', type: 'fill', zone: 'shadow' },
          { d: 'M160,155 Q166,132 178,118 Q190,108 200,114 Q206,124 206,155 Z', type: 'fill', zone: 'shadow' },
          { d: 'M28,80 Q34,74 42,76 Q48,80 46,86 Q42,90 36,88 Q30,86 28,80 Z', type: 'fill', zone: 'moss' },
          { d: 'M68,62 Q74,56 82,58 Q86,62 84,68 Q80,72 74,70 Q68,68 68,62 Z', type: 'fill', zone: 'moss' },
          { d: 'M148,82 Q154,76 162,78 Q166,82 164,88 Q160,92 154,90 Q148,88 148,82 Z', type: 'fill', zone: 'moss' },
          { d: 'M18,155 Q22,112 38,88 Q52,68 78,56 Q96,52 110,58 Q128,68 136,88 Q142,108 140,155', type: 'stroke', zone: 'rock', strokeWidth: 1.2 },
          { d: 'M100,155 Q106,128 118,108 Q132,90 152,78 Q168,72 182,76 Q198,84 206,100 Q212,120 210,155', type: 'stroke', zone: 'rock', strokeWidth: 1.2 },
          { d: 'M56,155 Q60,140 68,130 Q78,120 90,116 Q100,114 108,118 Q116,124 118,136 Q120,148 118,155', type: 'stroke', zone: 'rock', strokeWidth: 1 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M18,155 Q22,112 38,88 Q52,68 78,56 Q96,52 110,58 Q128,68 136,88 Q142,108 140,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M100,155 Q106,128 118,108 Q132,90 152,78 Q168,72 182,76 Q198,84 206,100 Q212,120 210,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M56,155 Q60,140 68,130 Q78,120 90,116 Q100,114 108,118 Q116,124 118,136 Q120,148 118,155 Z', type: 'fill', zone: 'rock' },
          { d: 'M78,155 Q82,130 96,112 Q108,100 120,108 Q126,118 124,155 Z', type: 'fill', zone: 'shadow' },
          { d: 'M160,155 Q166,132 178,118 Q190,108 200,114 Q206,124 206,155 Z', type: 'fill', zone: 'shadow' },
          { d: 'M28,80 Q34,74 42,76 Q48,80 46,86 Q42,90 36,88 Q30,86 28,80 Z', type: 'fill', zone: 'moss' },
          { d: 'M68,62 Q74,56 82,58 Q86,62 84,68 Q80,72 74,70 Q68,68 68,62 Z', type: 'fill', zone: 'moss' },
          { d: 'M148,82 Q154,76 162,78 Q166,82 164,88 Q160,92 154,90 Q148,88 148,82 Z', type: 'fill', zone: 'moss' },
          { d: 'M32,100 Q40,92 50,96', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M42,118 Q54,108 64,112', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M26,130 Q36,122 48,128', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M60,80 Q72,72 84,78', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M90,70 Q100,64 112,68', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M110,90 Q120,82 130,88', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M120,120 Q132,110 142,116', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M140,96 Q152,88 164,94', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M170,100 Q180,92 192,98', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M176,120 Q186,112 196,118', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M50,142 Q58,136 68,140', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M74,126 Q82,120 92,124', type: 'stroke', zone: 'detail', strokeWidth: 0.4 }
        ]
      }
    ]
  },

  // 3. temple-roof
  {
    id: 'temple-roof',
    name: 'Temple Roof',
    category: 'landscape',
    viewBox: '0 0 260 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'roof', defaultPaletteSlot: 0 },
      { id: 'tile', defaultPaletteSlot: 3 },
      { id: 'eave', defaultPaletteSlot: 4 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M130,8 Q90,32 40,62 Q24,72 10,78 Q6,82 8,86 L12,88 Q30,84 60,72 L130,38 L200,72 Q230,84 248,88 L252,86 Q254,82 250,78 Q236,72 220,62 Q170,32 130,8 Z', type: 'fill', zone: 'roof' },
          { d: 'M8,86 L12,88 Q30,92 60,100 L130,130 L200,100 Q230,92 248,88 L252,86 Q254,90 252,94 L248,96 Q230,100 200,108 L130,138 L60,108 Q30,100 12,96 L8,94 Q6,90 8,86 Z', type: 'fill', zone: 'eave' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M130,8 Q90,32 40,62 Q24,72 10,78 Q6,82 8,86 L12,88 Q30,84 60,72 L130,38 L200,72 Q230,84 248,88 L252,86 Q254,82 250,78 Q236,72 220,62 Q170,32 130,8 Z', type: 'fill', zone: 'roof' },
          { d: 'M8,86 L12,88 Q30,92 60,100 L130,130 L200,100 Q230,92 248,88 L252,86 Q254,90 252,94 L248,96 Q230,100 200,108 L130,138 L60,108 Q30,100 12,96 L8,94 Q6,90 8,86 Z', type: 'fill', zone: 'eave' },
          { d: 'M48,66 L56,70 L56,82 L48,78 Z', type: 'fill', zone: 'tile' },
          { d: 'M62,58 L70,62 L70,74 L62,70 Z', type: 'fill', zone: 'tile' },
          { d: 'M76,50 L84,54 L84,66 L76,62 Z', type: 'fill', zone: 'tile' },
          { d: 'M90,42 L98,46 L98,58 L90,54 Z', type: 'fill', zone: 'tile' },
          { d: 'M162,42 L170,46 L170,58 L162,54 Z', type: 'fill', zone: 'tile' },
          { d: 'M176,50 L184,54 L184,66 L176,62 Z', type: 'fill', zone: 'tile' },
          { d: 'M190,58 L198,62 L198,74 L190,70 Z', type: 'fill', zone: 'tile' },
          { d: 'M204,66 L212,70 L212,82 L204,78 Z', type: 'fill', zone: 'tile' },
          { d: 'M130,8 Q90,32 40,62 Q24,72 10,78', type: 'stroke', zone: 'roof', strokeWidth: 1.2 },
          { d: 'M130,8 Q170,32 220,62 Q236,72 250,78', type: 'stroke', zone: 'roof', strokeWidth: 1.2 },
          { d: 'M6,82 Q8,86 12,88 Q30,92 60,100 L130,130 L200,100 Q230,92 248,88 Q252,86 254,82', type: 'stroke', zone: 'eave', strokeWidth: 1.4 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M130,8 Q90,32 40,62 Q24,72 10,78 Q6,82 8,86 L12,88 Q30,84 60,72 L130,38 L200,72 Q230,84 248,88 L252,86 Q254,82 250,78 Q236,72 220,62 Q170,32 130,8 Z', type: 'fill', zone: 'roof' },
          { d: 'M8,86 L12,88 Q30,92 60,100 L130,130 L200,100 Q230,92 248,88 L252,86 Q254,90 252,94 L248,96 Q230,100 200,108 L130,138 L60,108 Q30,100 12,96 L8,94 Q6,90 8,86 Z', type: 'fill', zone: 'eave' },
          { d: 'M48,66 L56,70 L56,82 L48,78 Z', type: 'fill', zone: 'tile' },
          { d: 'M62,58 L70,62 L70,74 L62,70 Z', type: 'fill', zone: 'tile' },
          { d: 'M76,50 L84,54 L84,66 L76,62 Z', type: 'fill', zone: 'tile' },
          { d: 'M90,42 L98,46 L98,58 L90,54 Z', type: 'fill', zone: 'tile' },
          { d: 'M162,42 L170,46 L170,58 L162,54 Z', type: 'fill', zone: 'tile' },
          { d: 'M176,50 L184,54 L184,66 L176,62 Z', type: 'fill', zone: 'tile' },
          { d: 'M190,58 L198,62 L198,74 L190,70 Z', type: 'fill', zone: 'tile' },
          { d: 'M204,66 L212,70 L212,82 L204,78 Z', type: 'fill', zone: 'tile' },
          { d: 'M40,68 L60,78', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M54,60 L74,70', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M68,52 L88,62', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M82,44 L102,54', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M158,54 L178,44', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M172,62 L192,52', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M186,70 L206,60', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M200,78 L220,68', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M20,90 Q40,94 60,102', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M200,102 Q220,94 240,90', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M60,104 Q90,116 120,128', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M140,128 Q170,116 200,104', type: 'stroke', zone: 'detail', strokeWidth: 0.3 }
        ]
      }
    ]
  },

  // 4. distant-village
  {
    id: 'distant-village',
    name: 'Distant Village',
    category: 'landscape',
    viewBox: '0 0 300 100',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'roof', defaultPaletteSlot: 0 },
      { id: 'wall', defaultPaletteSlot: 4 },
      { id: 'tree', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M30,58 L42,42 L54,58 L54,78 L30,78 Z', type: 'fill', zone: 'roof' },
          { d: 'M30,58 L54,58 L54,78 L30,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M80,52 L96,36 L112,52 L112,78 L80,78 Z', type: 'fill', zone: 'roof' },
          { d: 'M80,52 L112,52 L112,78 L80,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M150,62 L160,48 L170,62 L170,78 L150,78 Z', type: 'fill', zone: 'roof' },
          { d: 'M150,62 L170,62 L170,78 L150,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M210,55 L224,40 L238,55 L238,78 L210,78 Z', type: 'fill', zone: 'roof' },
          { d: 'M210,55 L238,55 L238,78 L210,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M58,78 Q62,50 66,38 Q72,28 78,38 Q82,50 76,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M122,78 Q126,44 130,32 Q136,22 142,32 Q146,44 140,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M180,78 Q184,48 188,36 Q192,28 196,36 Q200,48 196,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M248,78 Q252,52 256,40 Q260,32 264,40 Q268,52 264,78 Z', type: 'fill', zone: 'tree' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M30,58 L42,42 L54,58 Z', type: 'fill', zone: 'roof' },
          { d: 'M30,58 L54,58 L54,78 L30,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M80,52 L96,36 L112,52 Z', type: 'fill', zone: 'roof' },
          { d: 'M80,52 L112,52 L112,78 L80,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M150,62 L160,48 L170,62 Z', type: 'fill', zone: 'roof' },
          { d: 'M150,62 L170,62 L170,78 L150,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M210,55 L224,40 L238,55 Z', type: 'fill', zone: 'roof' },
          { d: 'M210,55 L238,55 L238,78 L210,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M58,78 Q62,50 66,38 Q72,28 78,38 Q82,50 76,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M122,78 Q126,44 130,32 Q136,22 142,32 Q146,44 140,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M180,78 Q184,48 188,36 Q192,28 196,36 Q200,48 196,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M248,78 Q252,52 256,40 Q260,32 264,40 Q268,52 264,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M30,58 L42,42 L54,58', type: 'stroke', zone: 'roof', strokeWidth: 0.8 },
          { d: 'M80,52 L96,36 L112,52', type: 'stroke', zone: 'roof', strokeWidth: 0.8 },
          { d: 'M150,62 L160,48 L170,62', type: 'stroke', zone: 'roof', strokeWidth: 0.8 },
          { d: 'M210,55 L224,40 L238,55', type: 'stroke', zone: 'roof', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M30,58 L42,42 L54,58 Z', type: 'fill', zone: 'roof' },
          { d: 'M30,58 L54,58 L54,78 L30,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M80,52 L96,36 L112,52 Z', type: 'fill', zone: 'roof' },
          { d: 'M80,52 L112,52 L112,78 L80,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M150,62 L160,48 L170,62 Z', type: 'fill', zone: 'roof' },
          { d: 'M150,62 L170,62 L170,78 L150,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M210,55 L224,40 L238,55 Z', type: 'fill', zone: 'roof' },
          { d: 'M210,55 L238,55 L238,78 L210,78 Z', type: 'fill', zone: 'wall' },
          { d: 'M58,78 Q62,50 66,38 Q72,28 78,38 Q82,50 76,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M122,78 Q126,44 130,32 Q136,22 142,32 Q146,44 140,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M180,78 Q184,48 188,36 Q192,28 196,36 Q200,48 196,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M248,78 Q252,52 256,40 Q260,32 264,40 Q268,52 264,78 Z', type: 'fill', zone: 'tree' },
          { d: 'M36,64 L36,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M42,60 L42,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M48,64 L48,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M88,58 L88,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M96,54 L96,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M104,58 L104,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M156,66 L156,72', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M164,66 L164,72', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M218,60 L218,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M230,60 L230,72', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M66,42 Q68,50 72,56', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M72,36 Q70,46 68,54', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M130,28 Q132,38 136,48', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M138,28 Q136,38 132,48', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M188,34 Q190,44 192,52', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M256,38 Q258,48 260,56', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M10,82 Q80,78 150,80 Q220,78 290,82', type: 'stroke', zone: 'detail', strokeWidth: 0.5 }
        ]
      }
    ]
  },

  // 5. stone-path
  {
    id: 'stone-path',
    name: 'Stone Path',
    category: 'landscape',
    viewBox: '0 0 240 80',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'stone', defaultPaletteSlot: 4 },
      { id: 'shadow', defaultPaletteSlot: 0 },
      { id: 'moss', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M14,48 Q18,36 28,32 Q38,30 44,36 Q48,42 44,50 Q38,56 28,56 Q18,54 14,48 Z', type: 'fill', zone: 'stone' },
          { d: 'M56,38 Q62,26 74,22 Q86,20 92,28 Q96,36 90,44 Q82,50 72,50 Q62,48 56,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M104,32 Q110,22 120,18 Q132,16 140,22 Q146,30 140,38 Q132,44 122,44 Q112,42 104,32 Z', type: 'fill', zone: 'stone' },
          { d: 'M152,36 Q158,28 168,24 Q178,22 184,28 Q188,34 184,42 Q178,48 168,48 Q158,46 152,36 Z', type: 'fill', zone: 'stone' },
          { d: 'M196,42 Q202,32 212,28 Q222,26 228,32 Q232,40 226,48 Q218,54 208,54 Q198,50 196,42 Z', type: 'fill', zone: 'stone' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M14,48 Q18,36 28,32 Q38,30 44,36 Q48,42 44,50 Q38,56 28,56 Q18,54 14,48 Z', type: 'fill', zone: 'stone' },
          { d: 'M56,38 Q62,26 74,22 Q86,20 92,28 Q96,36 90,44 Q82,50 72,50 Q62,48 56,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M104,32 Q110,22 120,18 Q132,16 140,22 Q146,30 140,38 Q132,44 122,44 Q112,42 104,32 Z', type: 'fill', zone: 'stone' },
          { d: 'M152,36 Q158,28 168,24 Q178,22 184,28 Q188,34 184,42 Q178,48 168,48 Q158,46 152,36 Z', type: 'fill', zone: 'stone' },
          { d: 'M196,42 Q202,32 212,28 Q222,26 228,32 Q232,40 226,48 Q218,54 208,54 Q198,50 196,42 Z', type: 'fill', zone: 'stone' },
          { d: 'M28,52 Q34,56 40,52 Q44,56 42,60 Q36,62 30,60 Q26,58 28,52 Z', type: 'fill', zone: 'shadow' },
          { d: 'M72,46 Q80,50 88,46 Q92,50 88,54 Q80,56 72,54 Q68,52 72,46 Z', type: 'fill', zone: 'shadow' },
          { d: 'M120,40 Q128,44 138,40 Q142,44 138,48 Q128,50 120,48 Q116,46 120,40 Z', type: 'fill', zone: 'shadow' },
          { d: 'M166,44 Q174,48 182,44 Q186,48 182,52 Q174,54 166,52 Q162,50 166,44 Z', type: 'fill', zone: 'shadow' },
          { d: 'M208,50 Q216,54 224,50 Q228,54 224,58 Q216,60 208,58 Q204,56 208,50 Z', type: 'fill', zone: 'shadow' },
          { d: 'M14,48 Q18,36 28,32 Q38,30 44,36 Q48,42 44,50 Q38,56 28,56 Q18,54 14,48 Z', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M56,38 Q62,26 74,22 Q86,20 92,28 Q96,36 90,44 Q82,50 72,50 Q62,48 56,38', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M104,32 Q110,22 120,18 Q132,16 140,22 Q146,30 140,38 Q132,44 122,44 Q112,42 104,32', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M152,36 Q158,28 168,24 Q178,22 184,28 Q188,34 184,42 Q178,48 168,48 Q158,46 152,36', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M196,42 Q202,32 212,28 Q222,26 228,32 Q232,40 226,48 Q218,54 208,54 Q198,50 196,42', type: 'stroke', zone: 'stone', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M14,48 Q18,36 28,32 Q38,30 44,36 Q48,42 44,50 Q38,56 28,56 Q18,54 14,48 Z', type: 'fill', zone: 'stone' },
          { d: 'M56,38 Q62,26 74,22 Q86,20 92,28 Q96,36 90,44 Q82,50 72,50 Q62,48 56,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M104,32 Q110,22 120,18 Q132,16 140,22 Q146,30 140,38 Q132,44 122,44 Q112,42 104,32 Z', type: 'fill', zone: 'stone' },
          { d: 'M152,36 Q158,28 168,24 Q178,22 184,28 Q188,34 184,42 Q178,48 168,48 Q158,46 152,36 Z', type: 'fill', zone: 'stone' },
          { d: 'M196,42 Q202,32 212,28 Q222,26 228,32 Q232,40 226,48 Q218,54 208,54 Q198,50 196,42 Z', type: 'fill', zone: 'stone' },
          { d: 'M28,52 Q34,56 40,52 Q44,56 42,60 Q36,62 30,60 Q26,58 28,52 Z', type: 'fill', zone: 'shadow' },
          { d: 'M72,46 Q80,50 88,46 Q92,50 88,54 Q80,56 72,54 Q68,52 72,46 Z', type: 'fill', zone: 'shadow' },
          { d: 'M120,40 Q128,44 138,40 Q142,44 138,48 Q128,50 120,48 Q116,46 120,40 Z', type: 'fill', zone: 'shadow' },
          { d: 'M166,44 Q174,48 182,44 Q186,48 182,52 Q174,54 166,52 Q162,50 166,44 Z', type: 'fill', zone: 'shadow' },
          { d: 'M208,50 Q216,54 224,50 Q228,54 224,58 Q216,60 208,58 Q204,56 208,50 Z', type: 'fill', zone: 'shadow' },
          { d: 'M16,52 Q20,50 22,54', type: 'stroke', zone: 'moss', strokeWidth: 1.2 },
          { d: 'M42,34 Q46,32 48,36', type: 'stroke', zone: 'moss', strokeWidth: 1 },
          { d: 'M138,20 Q142,18 144,22', type: 'stroke', zone: 'moss', strokeWidth: 1 },
          { d: 'M22,38 Q28,36 32,40', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M34,42 Q38,38 42,42', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M64,28 Q70,26 76,30', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M78,34 Q82,30 86,34', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M112,24 Q118,22 124,26', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M128,28 Q132,24 136,28', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M160,30 Q166,28 172,32', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M204,34 Q210,32 216,36', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M218,40 Q222,36 226,40', type: 'stroke', zone: 'detail', strokeWidth: 0.4 }
        ]
      }
    ]
  },

  // 6. wooden-bridge — arched garden bridge (soribashi)
  {
    id: 'wooden-bridge',
    name: 'Wooden Bridge',
    category: 'landscape',
    viewBox: '0 0 280 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'deck', defaultPaletteSlot: 4 },
      { id: 'rail', defaultPaletteSlot: 0 },
      { id: 'shadow', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Arched deck — curved band, peak slightly left of center
          { d: 'M5,92 Q38,72 82,52 Q112,38 138,34 Q168,36 208,52 Q242,72 275,90 L275,98 Q242,80 208,62 Q168,46 138,44 Q112,48 82,62 Q38,82 5,100 Z', type: 'fill', zone: 'deck' },
          // Handrail — thin arc above deck
          { d: 'M18,78 Q50,56 86,40 Q114,26 138,22 Q166,24 210,40 Q246,56 265,76 L265,80 Q246,62 210,46 Q166,30 138,28 Q114,32 86,46 Q50,62 18,82 Z', type: 'fill', zone: 'rail' },
          // Rail posts — 7 slightly irregular fills (sub-paths)
          { d: 'M33,73 L36,72 L37,81 L32,81 Z M63,58 L66,57 L67,66 L62,67 Z M98,44 L101,43 L102,51 L97,51 Z M136,28 L139,28 L140,35 L135,35 Z M173,36 L176,35 L177,43 L172,43 Z M208,46 L211,45 L212,55 L207,55 Z M243,64 L246,63 L247,74 L242,75 Z', type: 'fill', zone: 'rail' },
          // Underside shadow
          { d: 'M10,100 Q40,82 84,62 Q114,48 138,44 Q168,46 212,62 Q248,82 272,98 L272,110 Q248,94 212,74 Q168,58 138,56 Q114,60 84,74 Q40,94 10,112 Z', type: 'fill', zone: 'shadow' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills
          { d: 'M5,92 Q38,72 82,52 Q112,38 138,34 Q168,36 208,52 Q242,72 275,90 L275,98 Q242,80 208,62 Q168,46 138,44 Q112,48 82,62 Q38,82 5,100 Z', type: 'fill', zone: 'deck' },
          { d: 'M18,78 Q50,56 86,40 Q114,26 138,22 Q166,24 210,40 Q246,56 265,76 L265,80 Q246,62 210,46 Q166,30 138,28 Q114,32 86,46 Q50,62 18,82 Z', type: 'fill', zone: 'rail' },
          { d: 'M33,73 L36,72 L37,81 L32,81 Z M63,58 L66,57 L67,66 L62,67 Z M98,44 L101,43 L102,51 L97,51 Z M136,28 L139,28 L140,35 L135,35 Z M173,36 L176,35 L177,43 L172,43 Z M208,46 L211,45 L212,55 L207,55 Z M243,64 L246,63 L247,74 L242,75 Z', type: 'fill', zone: 'rail' },
          { d: 'M10,100 Q40,82 84,62 Q114,48 138,44 Q168,46 212,62 Q248,82 272,98 L272,110 Q248,94 212,74 Q168,58 138,56 Q114,60 84,74 Q40,94 10,112 Z', type: 'fill', zone: 'shadow' },
          // Plank gaps across deck (M-move, 8 segments)
          { d: 'M45,74 L45,83 M75,60 L75,68 M105,46 L105,54 M138,36 L138,44 M170,42 L170,50 M200,54 L200,62 M230,68 L230,76 M255,80 L255,88', type: 'stroke', zone: 'deck', strokeWidth: 1.2 },
          // Handrail top and deck underside edge outlines
          { d: 'M18,78 Q50,56 86,40 Q114,26 138,22 Q166,24 210,40 Q246,56 265,76 M5,100 Q38,82 82,62 Q112,48 138,44 Q168,46 208,62 Q242,80 275,98', type: 'stroke', zone: 'deck', strokeWidth: 0.8 },
          // Post cap accents (M-move, 7 segments)
          { d: 'M31,73 L38,72 M61,58 L68,57 M96,44 L103,43 M134,28 L141,28 M171,36 L178,35 M206,46 L213,45 M241,64 L248,63', type: 'stroke', zone: 'rail', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All shape paths
          { d: 'M5,92 Q38,72 82,52 Q112,38 138,34 Q168,36 208,52 Q242,72 275,90 L275,98 Q242,80 208,62 Q168,46 138,44 Q112,48 82,62 Q38,82 5,100 Z', type: 'fill', zone: 'deck' },
          { d: 'M18,78 Q50,56 86,40 Q114,26 138,22 Q166,24 210,40 Q246,56 265,76 L265,80 Q246,62 210,46 Q166,30 138,28 Q114,32 86,46 Q50,62 18,82 Z', type: 'fill', zone: 'rail' },
          { d: 'M33,73 L36,72 L37,81 L32,81 Z M63,58 L66,57 L67,66 L62,67 Z M98,44 L101,43 L102,51 L97,51 Z M136,28 L139,28 L140,35 L135,35 Z M173,36 L176,35 L177,43 L172,43 Z M208,46 L211,45 L212,55 L207,55 Z M243,64 L246,63 L247,74 L242,75 Z', type: 'fill', zone: 'rail' },
          { d: 'M10,100 Q40,82 84,62 Q114,48 138,44 Q168,46 212,62 Q248,82 272,98 L272,110 Q248,94 212,74 Q168,58 138,56 Q114,60 84,74 Q40,94 10,112 Z', type: 'fill', zone: 'shadow' },
          { d: 'M45,74 L45,83 M75,60 L75,68 M105,46 L105,54 M138,36 L138,44 M170,42 L170,50 M200,54 L200,62 M230,68 L230,76 M255,80 L255,88', type: 'stroke', zone: 'deck', strokeWidth: 1.2 },
          { d: 'M18,78 Q50,56 86,40 Q114,26 138,22 Q166,24 210,40 Q246,56 265,76 M5,100 Q38,82 82,62 Q112,48 138,44 Q168,46 208,62 Q242,80 275,98', type: 'stroke', zone: 'deck', strokeWidth: 0.8 },
          { d: 'M31,73 L38,72 M61,58 L68,57 M96,44 L103,43 M134,28 L141,28 M171,36 L178,35 M206,46 L213,45 M241,64 L248,63', type: 'stroke', zone: 'rail', strokeWidth: 1 },
          // Wood grain along deck (2 flowing lines, M-move)
          { d: 'M15,95 Q50,77 90,57 Q120,43 138,39 Q160,41 200,55 Q240,75 270,93 M12,97 Q48,80 88,60 Q116,46 138,42 Q164,44 208,60 Q244,78 272,96', type: 'stroke', zone: 'deck', strokeWidth: 0.5 },
          // Handrail texture marks (M-move)
          { d: 'M30,79 L35,78 M60,63 L65,62 M95,48 L100,47 M130,30 L135,29 M165,32 L170,31 M200,44 L205,43 M235,60 L240,59', type: 'stroke', zone: 'rail', strokeWidth: 0.5 },
          // Post weathering hatches (M-move)
          { d: 'M34,76 L36,74 M64,60 L66,58 M99,46 L101,44 M137,30 L139,28 M174,38 L176,36 M209,48 L211,46 M244,67 L246,65', type: 'stroke', zone: 'rail', strokeWidth: 0.4 },
          // Nail head fills at post-rail joints
          { d: 'M35,72 A1.5,1.5 0 1,1 33.5,72 Z M65,57 A1.5,1.5 0 1,1 63.5,57 Z M100,43 A1.5,1.5 0 1,1 98.5,43 Z M138,28 A1.5,1.5 0 1,1 136.5,28 Z M175,35 A1.5,1.5 0 1,1 173.5,35 Z M210,45 A1.5,1.5 0 1,1 208.5,45 Z M245,63 A1.5,1.5 0 1,1 243.5,63 Z', type: 'fill', zone: 'rail' },
        ],
      },
    ],
  },

  // 7. rain-curtain
  {
    id: 'rain-curtain',
    name: 'Rain Curtain',
    category: 'objects & patterns',
    viewBox: '0 0 200 300',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'rain', defaultPaletteSlot: 2 },
      { id: 'splash', defaultPaletteSlot: 2 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M22,0 L14,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M58,10 L50,62', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M96,0 L88,52', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M134,8 L126,60', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M170,0 L162,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M38,60 L30,118', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M78,55 L70,113', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M116,62 L108,120', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M154,58 L146,116', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M190,52 L182,110', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M16,120 L8,178', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M54,125 L46,183', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M92,118 L84,176', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M132,122 L124,180', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M168,115 L160,173', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M34,180 L26,238', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M74,185 L66,243', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M112,178 L104,236', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M148,182 L140,240', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M186,176 L178,234', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M20,240 L12,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M56,248 L48,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M94,242 L86,298', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M130,245 L122,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M166,238 L158,298', type: 'stroke', zone: 'rain', strokeWidth: 1 }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M22,0 L14,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M58,10 L50,62', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M96,0 L88,52', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M134,8 L126,60', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M170,0 L162,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M38,60 L30,118', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M78,55 L70,113', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M116,62 L108,120', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M154,58 L146,116', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M190,52 L182,110', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M16,120 L8,178', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M54,125 L46,183', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M92,118 L84,176', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M132,122 L124,180', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M168,115 L160,173', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M34,180 L26,238', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M74,185 L66,243', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M112,178 L104,236', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M148,182 L140,240', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M186,176 L178,234', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M20,240 L12,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M56,248 L48,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M94,242 L86,298', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M130,245 L122,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M166,238 L158,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M10,296 Q14,290 18,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M46,296 Q50,290 54,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M84,296 Q88,290 92,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M120,296 Q124,290 128,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M156,296 Q160,290 164,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M22,0 L14,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M58,10 L50,62', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M96,0 L88,52', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M134,8 L126,60', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M170,0 L162,52', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M38,60 L30,118', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M78,55 L70,113', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M116,62 L108,120', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M154,58 L146,116', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M190,52 L182,110', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M16,120 L8,178', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M54,125 L46,183', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M92,118 L84,176', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M132,122 L124,180', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M168,115 L160,173', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M34,180 L26,238', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M74,185 L66,243', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M112,178 L104,236', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M148,182 L140,240', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M186,176 L178,234', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M20,240 L12,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M56,248 L48,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M94,242 L86,298', type: 'stroke', zone: 'rain', strokeWidth: 1.2 },
          { d: 'M130,245 L122,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M166,238 L158,298', type: 'stroke', zone: 'rain', strokeWidth: 1 },
          { d: 'M10,296 Q14,290 18,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M46,296 Q50,290 54,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M84,296 Q88,290 92,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M120,296 Q124,290 128,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M156,296 Q160,290 164,296', type: 'stroke', zone: 'splash', strokeWidth: 0.8 },
          { d: 'M6,294 Q8,288 12,292', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M18,292 Q20,286 24,290', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M42,294 Q44,288 48,292', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M54,292 Q56,286 60,290', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M80,294 Q82,288 86,292', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M92,292 Q94,286 98,290', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M116,294 Q118,288 122,292', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M128,292 Q130,286 134,290', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M152,294 Q154,288 158,292', type: 'stroke', zone: 'splash', strokeWidth: 0.4 },
          { d: 'M164,292 Q166,286 170,290', type: 'stroke', zone: 'splash', strokeWidth: 0.4 }
        ]
      }
    ]
  },

  // 8. snow-fall
  {
    id: 'snow-fall',
    name: 'Snow Fall',
    category: 'objects & patterns',
    viewBox: '0 0 200 280',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'flake', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M28,22 Q32,16 36,22 Q36,28 32,30 Q28,28 28,22 Z', type: 'fill', zone: 'flake' },
          { d: 'M82,38 Q88,30 94,38 Q94,46 88,48 Q82,46 82,38 Z', type: 'fill', zone: 'flake' },
          { d: 'M156,18 Q160,12 164,18 Q164,24 160,26 Q156,24 156,18 Z', type: 'fill', zone: 'flake' },
          { d: 'M52,78 Q56,72 60,78 Q60,84 56,86 Q52,84 52,78 Z', type: 'fill', zone: 'flake' },
          { d: 'M126,68 Q132,60 138,68 Q138,76 132,78 Q126,76 126,68 Z', type: 'fill', zone: 'flake' },
          { d: 'M176,92 Q180,86 184,92 Q184,98 180,100 Q176,98 176,92 Z', type: 'fill', zone: 'flake' },
          { d: 'M18,128 Q22,122 26,128 Q26,134 22,136 Q18,134 18,128 Z', type: 'fill', zone: 'flake' },
          { d: 'M98,118 Q104,110 110,118 Q110,126 104,128 Q98,126 98,118 Z', type: 'fill', zone: 'flake' },
          { d: 'M162,138 Q166,132 170,138 Q170,144 166,146 Q162,144 162,138 Z', type: 'fill', zone: 'flake' },
          { d: 'M42,178 Q46,172 50,178 Q50,184 46,186 Q42,184 42,178 Z', type: 'fill', zone: 'flake' },
          { d: 'M118,172 Q124,164 130,172 Q130,180 124,182 Q118,180 118,172 Z', type: 'fill', zone: 'flake' },
          { d: 'M68,228 Q72,222 76,228 Q76,234 72,236 Q68,234 68,228 Z', type: 'fill', zone: 'flake' },
          { d: 'M148,218 Q152,212 156,218 Q156,224 152,226 Q148,224 148,218 Z', type: 'fill', zone: 'flake' },
          { d: 'M24,258 Q28,252 32,258 Q32,264 28,266 Q24,264 24,258 Z', type: 'fill', zone: 'flake' },
          { d: 'M106,248 Q110,242 114,248 Q114,254 110,256 Q106,254 106,248 Z', type: 'fill', zone: 'flake' },
          { d: 'M182,262 Q186,256 190,262 Q190,268 186,270 Q182,268 182,262 Z', type: 'fill', zone: 'flake' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M28,22 Q32,16 36,22 Q36,28 32,30 Q28,28 28,22 Z', type: 'fill', zone: 'flake' },
          { d: 'M82,38 Q88,30 94,38 Q94,46 88,48 Q82,46 82,38 Z', type: 'fill', zone: 'flake' },
          { d: 'M156,18 Q160,12 164,18 Q164,24 160,26 Q156,24 156,18 Z', type: 'fill', zone: 'flake' },
          { d: 'M52,78 Q56,72 60,78 Q60,84 56,86 Q52,84 52,78 Z', type: 'fill', zone: 'flake' },
          { d: 'M126,68 Q132,60 138,68 Q138,76 132,78 Q126,76 126,68 Z', type: 'fill', zone: 'flake' },
          { d: 'M176,92 Q180,86 184,92 Q184,98 180,100 Q176,98 176,92 Z', type: 'fill', zone: 'flake' },
          { d: 'M18,128 Q22,122 26,128 Q26,134 22,136 Q18,134 18,128 Z', type: 'fill', zone: 'flake' },
          { d: 'M98,118 Q104,110 110,118 Q110,126 104,128 Q98,126 98,118 Z', type: 'fill', zone: 'flake' },
          { d: 'M162,138 Q166,132 170,138 Q170,144 166,146 Q162,144 162,138 Z', type: 'fill', zone: 'flake' },
          { d: 'M42,178 Q46,172 50,178 Q50,184 46,186 Q42,184 42,178 Z', type: 'fill', zone: 'flake' },
          { d: 'M118,172 Q124,164 130,172 Q130,180 124,182 Q118,180 118,172 Z', type: 'fill', zone: 'flake' },
          { d: 'M68,228 Q72,222 76,228 Q76,234 72,236 Q68,234 68,228 Z', type: 'fill', zone: 'flake' },
          { d: 'M148,218 Q152,212 156,218 Q156,224 152,226 Q148,224 148,218 Z', type: 'fill', zone: 'flake' },
          { d: 'M24,258 Q28,252 32,258 Q32,264 28,266 Q24,264 24,258 Z', type: 'fill', zone: 'flake' },
          { d: 'M106,248 Q110,242 114,248 Q114,254 110,256 Q106,254 106,248 Z', type: 'fill', zone: 'flake' },
          { d: 'M182,262 Q186,256 190,262 Q190,268 186,270 Q182,268 182,262 Z', type: 'fill', zone: 'flake' },
          { d: 'M28,22 Q32,16 36,22 Q36,28 32,30 Q28,28 28,22 Z', type: 'stroke', zone: 'flake', strokeWidth: 0.6 },
          { d: 'M82,38 Q88,30 94,38 Q94,46 88,48 Q82,46 82,38 Z', type: 'stroke', zone: 'flake', strokeWidth: 0.6 },
          { d: 'M126,68 Q132,60 138,68 Q138,76 132,78 Q126,76 126,68 Z', type: 'stroke', zone: 'flake', strokeWidth: 0.6 },
          { d: 'M98,118 Q104,110 110,118 Q110,126 104,128 Q98,126 98,118 Z', type: 'stroke', zone: 'flake', strokeWidth: 0.6 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M28,22 Q32,16 36,22 Q36,28 32,30 Q28,28 28,22 Z', type: 'fill', zone: 'flake' },
          { d: 'M82,38 Q88,30 94,38 Q94,46 88,48 Q82,46 82,38 Z', type: 'fill', zone: 'flake' },
          { d: 'M156,18 Q160,12 164,18 Q164,24 160,26 Q156,24 156,18 Z', type: 'fill', zone: 'flake' },
          { d: 'M52,78 Q56,72 60,78 Q60,84 56,86 Q52,84 52,78 Z', type: 'fill', zone: 'flake' },
          { d: 'M126,68 Q132,60 138,68 Q138,76 132,78 Q126,76 126,68 Z', type: 'fill', zone: 'flake' },
          { d: 'M176,92 Q180,86 184,92 Q184,98 180,100 Q176,98 176,92 Z', type: 'fill', zone: 'flake' },
          { d: 'M18,128 Q22,122 26,128 Q26,134 22,136 Q18,134 18,128 Z', type: 'fill', zone: 'flake' },
          { d: 'M98,118 Q104,110 110,118 Q110,126 104,128 Q98,126 98,118 Z', type: 'fill', zone: 'flake' },
          { d: 'M162,138 Q166,132 170,138 Q170,144 166,146 Q162,144 162,138 Z', type: 'fill', zone: 'flake' },
          { d: 'M42,178 Q46,172 50,178 Q50,184 46,186 Q42,184 42,178 Z', type: 'fill', zone: 'flake' },
          { d: 'M118,172 Q124,164 130,172 Q130,180 124,182 Q118,180 118,172 Z', type: 'fill', zone: 'flake' },
          { d: 'M68,228 Q72,222 76,228 Q76,234 72,236 Q68,234 68,228 Z', type: 'fill', zone: 'flake' },
          { d: 'M148,218 Q152,212 156,218 Q156,224 152,226 Q148,224 148,218 Z', type: 'fill', zone: 'flake' },
          { d: 'M24,258 Q28,252 32,258 Q32,264 28,266 Q24,264 24,258 Z', type: 'fill', zone: 'flake' },
          { d: 'M106,248 Q110,242 114,248 Q114,254 110,256 Q106,254 106,248 Z', type: 'fill', zone: 'flake' },
          { d: 'M182,262 Q186,256 190,262 Q190,268 186,270 Q182,268 182,262 Z', type: 'fill', zone: 'flake' },
          { d: 'M30,22 L34,22', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M32,20 L32,24', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M86,38 L90,38', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M88,36 L88,40', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M86,34 L90,42', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M90,34 L86,42', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M130,68 L134,68', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M132,66 L132,70', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M130,64 L134,72', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M134,64 L130,72', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M102,118 L106,118', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M104,116 L104,120', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M122,172 L126,172', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M124,170 L124,174', type: 'stroke', zone: 'detail', strokeWidth: 0.4 }
        ]
      }
    ]
  },

  // 9. cloud-wisp
  {
    id: 'cloud-wisp',
    name: 'Cloud Wisp',
    category: 'objects & patterns',
    viewBox: '0 0 260 80',
    suggestedLayer: 'background',
    colorZones: [
      { id: 'cloud', defaultPaletteSlot: 2 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M8,42 Q20,28 48,24 Q76,20 110,26 Q140,32 168,28 Q196,22 224,26 Q248,30 256,40 Q248,48 224,50 Q196,52 168,48 Q140,52 110,50 Q76,48 48,50 Q20,48 8,42 Z', type: 'fill', zone: 'cloud' },
          { d: 'M30,56 Q50,50 80,48 Q110,46 130,50 Q150,54 170,52 Q190,48 210,52 Q230,56 240,60 Q230,64 210,66 Q190,68 170,64 Q150,60 130,62 Q110,66 80,64 Q50,62 30,56 Z', type: 'fill', zone: 'cloud' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M8,42 Q20,28 48,24 Q76,20 110,26 Q140,32 168,28 Q196,22 224,26 Q248,30 256,40 Q248,48 224,50 Q196,52 168,48 Q140,52 110,50 Q76,48 48,50 Q20,48 8,42 Z', type: 'fill', zone: 'cloud' },
          { d: 'M30,56 Q50,50 80,48 Q110,46 130,50 Q150,54 170,52 Q190,48 210,52 Q230,56 240,60 Q230,64 210,66 Q190,68 170,64 Q150,60 130,62 Q110,66 80,64 Q50,62 30,56 Z', type: 'fill', zone: 'cloud' },
          { d: 'M8,42 Q20,28 48,24 Q76,20 110,26 Q140,32 168,28 Q196,22 224,26 Q248,30 256,40', type: 'stroke', zone: 'cloud', strokeWidth: 0.8 },
          { d: 'M256,40 Q248,48 224,50 Q196,52 168,48 Q140,52 110,50 Q76,48 48,50 Q20,48 8,42', type: 'stroke', zone: 'cloud', strokeWidth: 0.6 },
          { d: 'M30,56 Q50,50 80,48 Q110,46 130,50 Q150,54 170,52 Q190,48 210,52 Q230,56 240,60', type: 'stroke', zone: 'cloud', strokeWidth: 0.6 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M8,42 Q20,28 48,24 Q76,20 110,26 Q140,32 168,28 Q196,22 224,26 Q248,30 256,40 Q248,48 224,50 Q196,52 168,48 Q140,52 110,50 Q76,48 48,50 Q20,48 8,42 Z', type: 'fill', zone: 'cloud' },
          { d: 'M30,56 Q50,50 80,48 Q110,46 130,50 Q150,54 170,52 Q190,48 210,52 Q230,56 240,60 Q230,64 210,66 Q190,68 170,64 Q150,60 130,62 Q110,66 80,64 Q50,62 30,56 Z', type: 'fill', zone: 'cloud' },
          { d: 'M20,34 Q36,30 52,32', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M60,28 Q80,24 100,28', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M120,30 Q140,34 160,30', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M172,26 Q192,24 212,28', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M220,30 Q236,32 248,38', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M40,44 Q60,42 80,44', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M120,46 Q140,48 160,46', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M180,44 Q200,46 220,44', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M50,54 Q70,50 90,52', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M140,54 Q160,56 180,52', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M200,56 Q215,58 230,56', type: 'stroke', zone: 'detail', strokeWidth: 0.3 },
          { d: 'M80,58 Q100,56 120,58', type: 'stroke', zone: 'detail', strokeWidth: 0.3 }
        ]
      }
    ]
  },

  // 10. maple-branch
  {
    id: 'maple-branch',
    name: 'Maple Branch',
    category: 'flora',
    viewBox: '0 0 200 180',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'branch', defaultPaletteSlot: 4 },
      { id: 'leaf', defaultPaletteSlot: 1 },
      { id: 'detail', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Main branch — tapered fill with gentle arc
          { d: 'M8,85 Q32,80 60,72 Q88,64 114,58 Q140,56 164,60 Q180,66 194,74 L194,82 Q180,72 164,66 Q140,62 114,64 Q88,70 60,78 Q32,86 8,92 Z', type: 'fill', zone: 'branch' },
          // Sub-branch 1
          { d: 'M56,75 Q50,56 46,38 Q44,32 42,26 L46,24 Q48,30 50,36 Q54,54 60,74 Z', type: 'fill', zone: 'branch' },
          // Sub-branch 2
          { d: 'M112,62 Q116,42 118,30 Q120,22 122,16 L126,18 Q124,24 122,32 Q118,44 116,60 Z', type: 'fill', zone: 'branch' },
          // Sub-branch 3
          { d: 'M162,64 Q166,46 170,36 Q172,30 174,24 L178,26 Q176,32 174,38 Q170,50 166,62 Z', type: 'fill', zone: 'branch' },
          // Maple leaf 1
          { d: 'M40,4 Q37,8 34,14 Q30,12 26,16 Q28,20 32,24 Q30,30 28,36 Q32,38 36,36 Q38,40 40,42 Q42,40 44,36 Q48,38 52,36 Q50,30 48,24 Q52,20 54,16 Q50,12 46,14 Q43,8 40,4 Z', type: 'fill', zone: 'leaf' },
          // Maple leaf 2
          { d: 'M70,14 Q68,17 66,20 Q62,19 60,22 Q62,25 64,26 Q63,30 61,34 Q64,35 67,34 Q69,38 70,40 Q71,38 73,34 Q76,35 79,34 Q77,30 76,26 Q78,25 80,22 Q78,19 74,20 Q72,17 70,14 Z', type: 'fill', zone: 'leaf' },
          // Maple leaf 3
          { d: 'M120,0 Q117,4 114,8 Q110,6 106,10 Q108,14 112,18 Q110,24 108,28 Q112,30 116,28 Q118,32 120,34 Q122,32 124,28 Q128,30 132,28 Q130,24 128,18 Q132,14 134,10 Q130,6 126,8 Q123,4 120,0 Z', type: 'fill', zone: 'leaf' },
          // Maple leaf 4
          { d: 'M148,8 Q145,12 142,16 Q138,14 134,18 Q136,22 140,24 Q138,28 136,32 Q140,34 144,32 Q146,36 148,38 Q150,36 152,32 Q156,34 160,32 Q158,28 156,24 Q160,22 162,18 Q158,14 154,16 Q151,12 148,8 Z', type: 'fill', zone: 'leaf' },
          // Maple leaf 5
          { d: 'M172,8 Q170,11 168,14 Q164,13 162,16 Q164,19 166,20 Q165,24 163,28 Q166,29 169,28 Q171,32 172,34 Q173,32 175,28 Q178,29 181,28 Q179,24 178,20 Q180,19 182,16 Q180,13 176,14 Q174,11 172,8 Z', type: 'fill', zone: 'leaf' },
        ],
      },
      {
        name: 'shape',
        paths: [
          // All block fills
          { d: 'M8,85 Q32,80 60,72 Q88,64 114,58 Q140,56 164,60 Q180,66 194,74 L194,82 Q180,72 164,66 Q140,62 114,64 Q88,70 60,78 Q32,86 8,92 Z', type: 'fill', zone: 'branch' },
          { d: 'M56,75 Q50,56 46,38 Q44,32 42,26 L46,24 Q48,30 50,36 Q54,54 60,74 Z', type: 'fill', zone: 'branch' },
          { d: 'M112,62 Q116,42 118,30 Q120,22 122,16 L126,18 Q124,24 122,32 Q118,44 116,60 Z', type: 'fill', zone: 'branch' },
          { d: 'M162,64 Q166,46 170,36 Q172,30 174,24 L178,26 Q176,32 174,38 Q170,50 166,62 Z', type: 'fill', zone: 'branch' },
          { d: 'M40,4 Q37,8 34,14 Q30,12 26,16 Q28,20 32,24 Q30,30 28,36 Q32,38 36,36 Q38,40 40,42 Q42,40 44,36 Q48,38 52,36 Q50,30 48,24 Q52,20 54,16 Q50,12 46,14 Q43,8 40,4 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70,14 Q68,17 66,20 Q62,19 60,22 Q62,25 64,26 Q63,30 61,34 Q64,35 67,34 Q69,38 70,40 Q71,38 73,34 Q76,35 79,34 Q77,30 76,26 Q78,25 80,22 Q78,19 74,20 Q72,17 70,14 Z', type: 'fill', zone: 'leaf' },
          { d: 'M120,0 Q117,4 114,8 Q110,6 106,10 Q108,14 112,18 Q110,24 108,28 Q112,30 116,28 Q118,32 120,34 Q122,32 124,28 Q128,30 132,28 Q130,24 128,18 Q132,14 134,10 Q130,6 126,8 Q123,4 120,0 Z', type: 'fill', zone: 'leaf' },
          { d: 'M148,8 Q145,12 142,16 Q138,14 134,18 Q136,22 140,24 Q138,28 136,32 Q140,34 144,32 Q146,36 148,38 Q150,36 152,32 Q156,34 160,32 Q158,28 156,24 Q160,22 162,18 Q158,14 154,16 Q151,12 148,8 Z', type: 'fill', zone: 'leaf' },
          { d: 'M172,8 Q170,11 168,14 Q164,13 162,16 Q164,19 166,20 Q165,24 163,28 Q166,29 169,28 Q171,32 172,34 Q173,32 175,28 Q178,29 181,28 Q179,24 178,20 Q180,19 182,16 Q180,13 176,14 Q174,11 172,8 Z', type: 'fill', zone: 'leaf' },
          // Leaf petioles — connecting leaves to branches
          { d: 'M40,42 Q42,50 46,58 M70,40 Q72,48 74,56 M120,34 Q120,42 118,50 M148,38 Q148,46 150,54 M172,34 Q172,42 170,52', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          // Fine twig shoots
          { d: 'M48,50 Q40,44 34,48 M124,38 Q130,32 136,36 M176,42 Q182,36 186,40', type: 'stroke', zone: 'branch', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          // All shape fills
          { d: 'M8,85 Q32,80 60,72 Q88,64 114,58 Q140,56 164,60 Q180,66 194,74 L194,82 Q180,72 164,66 Q140,62 114,64 Q88,70 60,78 Q32,86 8,92 Z', type: 'fill', zone: 'branch' },
          { d: 'M56,75 Q50,56 46,38 Q44,32 42,26 L46,24 Q48,30 50,36 Q54,54 60,74 Z', type: 'fill', zone: 'branch' },
          { d: 'M112,62 Q116,42 118,30 Q120,22 122,16 L126,18 Q124,24 122,32 Q118,44 116,60 Z', type: 'fill', zone: 'branch' },
          { d: 'M162,64 Q166,46 170,36 Q172,30 174,24 L178,26 Q176,32 174,38 Q170,50 166,62 Z', type: 'fill', zone: 'branch' },
          { d: 'M40,4 Q37,8 34,14 Q30,12 26,16 Q28,20 32,24 Q30,30 28,36 Q32,38 36,36 Q38,40 40,42 Q42,40 44,36 Q48,38 52,36 Q50,30 48,24 Q52,20 54,16 Q50,12 46,14 Q43,8 40,4 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70,14 Q68,17 66,20 Q62,19 60,22 Q62,25 64,26 Q63,30 61,34 Q64,35 67,34 Q69,38 70,40 Q71,38 73,34 Q76,35 79,34 Q77,30 76,26 Q78,25 80,22 Q78,19 74,20 Q72,17 70,14 Z', type: 'fill', zone: 'leaf' },
          { d: 'M120,0 Q117,4 114,8 Q110,6 106,10 Q108,14 112,18 Q110,24 108,28 Q112,30 116,28 Q118,32 120,34 Q122,32 124,28 Q128,30 132,28 Q130,24 128,18 Q132,14 134,10 Q130,6 126,8 Q123,4 120,0 Z', type: 'fill', zone: 'leaf' },
          { d: 'M148,8 Q145,12 142,16 Q138,14 134,18 Q136,22 140,24 Q138,28 136,32 Q140,34 144,32 Q146,36 148,38 Q150,36 152,32 Q156,34 160,32 Q158,28 156,24 Q160,22 162,18 Q158,14 154,16 Q151,12 148,8 Z', type: 'fill', zone: 'leaf' },
          { d: 'M172,8 Q170,11 168,14 Q164,13 162,16 Q164,19 166,20 Q165,24 163,28 Q166,29 169,28 Q171,32 172,34 Q173,32 175,28 Q178,29 181,28 Q179,24 178,20 Q180,19 182,16 Q180,13 176,14 Q174,11 172,8 Z', type: 'fill', zone: 'leaf' },
          // All shape strokes
          { d: 'M40,42 Q42,50 46,58 M70,40 Q72,48 74,56 M120,34 Q120,42 118,50 M148,38 Q148,46 150,54 M172,34 Q172,42 170,52', type: 'stroke', zone: 'leaf', strokeWidth: 0.8 },
          { d: 'M48,50 Q40,44 34,48 M124,38 Q130,32 136,36 M176,42 Q182,36 186,40', type: 'stroke', zone: 'branch', strokeWidth: 1 },
          // Leaf veins — leaves 1–3
          { d: 'M40,4 L40,42 M36,14 Q40,18 44,14 M34,24 Q40,26 46,24 M70,14 L70,40 M66,20 Q70,24 74,20 M64,28 Q70,30 76,28 M120,0 L120,34 M116,8 Q120,12 124,8 M114,18 Q120,20 126,18', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Leaf veins — leaves 4–5
          { d: 'M148,8 L148,38 M144,16 Q148,20 152,16 M142,26 Q148,28 154,26 M172,8 L172,34 M168,14 Q172,18 176,14 M166,22 Q172,24 178,22', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          // Bark texture hatching
          { d: 'M22,88 L26,86 M50,78 L54,76 M82,70 L86,68 M125,62 L129,60 M155,62 L159,60 M180,68 L184,66', type: 'stroke', zone: 'branch', strokeWidth: 0.5 },
          // Bud fills at twig tips
          { d: 'M34,47 A2,2 0 1,1 33.99,47 Z M136,35 A2,2 0 1,1 135.99,35 Z M186,39 A2,2 0 1,1 185.99,39 Z', type: 'fill', zone: 'leaf' },
          // Fine twig ends
          { d: 'M34,48 Q28,44 24,48 M136,36 Q140,30 144,34 M186,40 Q190,34 194,38', type: 'stroke', zone: 'branch', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  // 11. iris-cluster
  {
    id: 'iris-cluster',
    name: 'Iris Cluster',
    category: 'flora',
    viewBox: '0 0 160 200',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'petal', defaultPaletteSlot: 1 },
      { id: 'stem', defaultPaletteSlot: 3 },
      { id: 'leaf', defaultPaletteSlot: 3 },
      { id: 'detail', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M58,196 Q56,150 54,110 Q52,80 50,60', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M102,196 Q100,148 98,108 Q96,78 94,56', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M34,46 Q40,28 48,18 Q52,14 56,18 Q58,24 54,36 Q50,46 50,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q56,48 64,42 Q70,38 74,42 Q76,48 70,56 Q64,62 56,64 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q44,48 36,44 Q30,42 28,46 Q26,52 32,58 Q38,62 46,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,60 Q54,68 58,78 Q60,86 56,88 Q50,86 48,78 Q46,68 50,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M76,40 Q82,22 90,12 Q94,8 98,12 Q100,18 96,30 Q92,40 92,52 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q98,44 106,38 Q112,34 116,38 Q118,44 112,52 Q106,58 98,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q86,44 78,40 Q72,38 70,42 Q68,48 74,54 Q80,58 88,58 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,56 Q96,64 100,74 Q102,82 98,84 Q92,82 90,74 Q88,64 92,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M20,196 Q28,160 34,130 Q38,108 36,90 Q32,80 26,86 Q18,96 12,120 Q8,148 10,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70,196 Q74,158 80,128 Q84,106 86,90 Q88,80 92,86 Q96,98 100,130 Q104,160 106,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M126,196 Q128,162 130,132 Q132,108 136,92 Q140,84 144,90 Q146,100 148,128 Q150,162 152,196 Z', type: 'fill', zone: 'leaf' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M58,196 Q56,150 54,110 Q52,80 50,60', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M102,196 Q100,148 98,108 Q96,78 94,56', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M34,46 Q40,28 48,18 Q52,14 56,18 Q58,24 54,36 Q50,46 50,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q56,48 64,42 Q70,38 74,42 Q76,48 70,56 Q64,62 56,64 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q44,48 36,44 Q30,42 28,46 Q26,52 32,58 Q38,62 46,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,60 Q54,68 58,78 Q60,86 56,88 Q50,86 48,78 Q46,68 50,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M76,40 Q82,22 90,12 Q94,8 98,12 Q100,18 96,30 Q92,40 92,52 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q98,44 106,38 Q112,34 116,38 Q118,44 112,52 Q106,58 98,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q86,44 78,40 Q72,38 70,42 Q68,48 74,54 Q80,58 88,58 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,56 Q96,64 100,74 Q102,82 98,84 Q92,82 90,74 Q88,64 92,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M20,196 Q28,160 34,130 Q38,108 36,90 Q32,80 26,86 Q18,96 12,120 Q8,148 10,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70,196 Q74,158 80,128 Q84,106 86,90 Q88,80 92,86 Q96,98 100,130 Q104,160 106,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M126,196 Q128,162 130,132 Q132,108 136,92 Q140,84 144,90 Q146,100 148,128 Q150,162 152,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M34,46 Q40,28 48,18 Q52,14 56,18 Q58,24 54,36 Q50,46 50,56', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M50,56 Q56,48 64,42 Q70,38 74,42 Q76,48 70,56 Q64,62 56,64', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M76,40 Q82,22 90,12 Q94,8 98,12 Q100,18 96,30 Q92,40 92,52', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M92,52 Q98,44 106,38 Q112,34 116,38 Q118,44 112,52 Q106,58 98,60', type: 'stroke', zone: 'petal', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M58,196 Q56,150 54,110 Q52,80 50,60', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M102,196 Q100,148 98,108 Q96,78 94,56', type: 'stroke', zone: 'stem', strokeWidth: 3 },
          { d: 'M34,46 Q40,28 48,18 Q52,14 56,18 Q58,24 54,36 Q50,46 50,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q56,48 64,42 Q70,38 74,42 Q76,48 70,56 Q64,62 56,64 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,56 Q44,48 36,44 Q30,42 28,46 Q26,52 32,58 Q38,62 46,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M50,60 Q54,68 58,78 Q60,86 56,88 Q50,86 48,78 Q46,68 50,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M76,40 Q82,22 90,12 Q94,8 98,12 Q100,18 96,30 Q92,40 92,52 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q98,44 106,38 Q112,34 116,38 Q118,44 112,52 Q106,58 98,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,52 Q86,44 78,40 Q72,38 70,42 Q68,48 74,54 Q80,58 88,58 Z', type: 'fill', zone: 'petal' },
          { d: 'M92,56 Q96,64 100,74 Q102,82 98,84 Q92,82 90,74 Q88,64 92,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M20,196 Q28,160 34,130 Q38,108 36,90 Q32,80 26,86 Q18,96 12,120 Q8,148 10,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M70,196 Q74,158 80,128 Q84,106 86,90 Q88,80 92,86 Q96,98 100,130 Q104,160 106,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M126,196 Q128,162 130,132 Q132,108 136,92 Q140,84 144,90 Q146,100 148,128 Q150,162 152,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M48,24 Q50,36 50,48', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M52,20 Q52,32 52,44', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M58,46 Q62,50 66,54', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M42,48 Q38,52 34,54', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M52,64 Q54,72 56,80', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M90,18 Q92,30 92,42', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M94,14 Q94,26 94,38', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M100,42 Q104,46 108,50', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M84,44 Q80,48 76,50', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M94,60 Q96,68 98,76', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M28,100 Q32,120 30,140', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M82,100 Q86,120 88,140', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M134,96 Q136,116 138,136', type: 'stroke', zone: 'detail', strokeWidth: 0.5 }
        ]
      }
    ]
  }
];
