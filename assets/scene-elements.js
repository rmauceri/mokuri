const MOKURI_SCENE_ELEMENTS = [
  // 1. bamboo-grove
  {
    id: 'bamboo-grove',
    name: 'Bamboo Grove',
    category: 'landscape',
    pack: 'core',
    tags: ['flora', 'organic', 'landscape'],
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

  // 2. rock-formation — craggy garden rocks (suiseki-inspired)
  {
    id: 'rock-formation',
    name: 'Rock Formation',
    category: 'landscape',
    pack: 'core',
    tags: ['landscape', 'organic', 'minimal'],
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
          { d: 'M14,156 Q18,128 26,105 Q36,82 52,68 L62,60 Q70,55 78,58 L84,64 Q92,78 98,98 Q104,120 108,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M122,156 Q126,126 134,100 Q142,78 154,62 L162,50 Q168,46 174,52 Q182,64 188,84 Q194,108 198,134 Q200,148 202,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M68,156 Q72,138 80,128 Q90,118 102,114 Q112,116 118,126 Q124,138 126,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M4,156 Q8,146 16,140 Q24,136 32,138 Q38,142 40,156 Z', type: 'fill', zone: 'rock' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M14,156 Q18,128 26,105 Q36,82 52,68 L62,60 Q70,55 78,58 L84,64 Q92,78 98,98 Q104,120 108,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M122,156 Q126,126 134,100 Q142,78 154,62 L162,50 Q168,46 174,52 Q182,64 188,84 Q194,108 198,134 Q200,148 202,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M68,156 Q72,138 80,128 Q90,118 102,114 Q112,116 118,126 Q124,138 126,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M4,156 Q8,146 16,140 Q24,136 32,138 Q38,142 40,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M84,156 Q86,132 92,118 Q98,108 106,114 Q112,122 114,156 Z', type: 'fill', zone: 'shadow' },
          { d: 'M166,156 Q170,130 178,112 Q186,100 194,108 Q198,120 200,156 Z', type: 'fill', zone: 'shadow' },
          { d: 'M46,72 Q52,64 60,62 Q66,64 64,70 Q58,76 50,78 Q44,76 46,72 Z', type: 'fill', zone: 'moss' },
          { d: 'M150,66 Q156,58 164,56 Q170,60 166,66 Q160,72 152,70 Q148,68 150,66 Z', type: 'fill', zone: 'moss' },
          { d: 'M14,156 Q18,128 26,105 Q36,82 52,68 L62,60 Q70,55 78,58 L84,64 Q92,78 98,98 Q104,120 108,156', type: 'stroke', zone: 'rock', strokeWidth: 1.1 },
          { d: 'M122,156 Q126,126 134,100 Q142,78 154,62 L162,50 Q168,46 174,52 Q182,64 188,84 Q194,108 198,134 Q200,148 202,156', type: 'stroke', zone: 'rock', strokeWidth: 1.1 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M14,156 Q18,128 26,105 Q36,82 52,68 L62,60 Q70,55 78,58 L84,64 Q92,78 98,98 Q104,120 108,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M122,156 Q126,126 134,100 Q142,78 154,62 L162,50 Q168,46 174,52 Q182,64 188,84 Q194,108 198,134 Q200,148 202,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M68,156 Q72,138 80,128 Q90,118 102,114 Q112,116 118,126 Q124,138 126,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M4,156 Q8,146 16,140 Q24,136 32,138 Q38,142 40,156 Z', type: 'fill', zone: 'rock' },
          { d: 'M84,156 Q86,132 92,118 Q98,108 106,114 Q112,122 114,156 Z', type: 'fill', zone: 'shadow' },
          { d: 'M166,156 Q170,130 178,112 Q186,100 194,108 Q198,120 200,156 Z', type: 'fill', zone: 'shadow' },
          { d: 'M46,72 Q52,64 60,62 Q66,64 64,70 Q58,76 50,78 Q44,76 46,72 Z', type: 'fill', zone: 'moss' },
          { d: 'M150,66 Q156,58 164,56 Q170,60 166,66 Q160,72 152,70 Q148,68 150,66 Z', type: 'fill', zone: 'moss' },
          { d: 'M14,156 Q18,128 26,105 Q36,82 52,68 L62,60 Q70,55 78,58 L84,64 Q92,78 98,98 Q104,120 108,156', type: 'stroke', zone: 'rock', strokeWidth: 1.1 },
          { d: 'M122,156 Q126,126 134,100 Q142,78 154,62 L162,50 Q168,46 174,52 Q182,64 188,84 Q194,108 198,134 Q200,148 202,156', type: 'stroke', zone: 'rock', strokeWidth: 1.1 },
          { d: 'M30,100 Q38,92 48,96 M24,118 Q34,112 44,116 M20,138 Q30,130 42,136', type: 'stroke', zone: 'detail', strokeWidth: 0.6 },
          { d: 'M66,86 Q76,78 88,84 M78,102 Q88,94 98,100 M74,122 Q84,114 96,120', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M136,88 Q146,80 158,86 M142,108 Q154,98 166,106 M148,126 Q160,118 172,124', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M80,134 Q90,128 100,132 M10,148 Q18,142 28,146', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M28,86 Q34,80 40,84 Q36,90 28,86 Z', type: 'fill', zone: 'moss' },
          { d: 'M68,156 Q72,138 80,128 Q90,118 102,114 Q112,116 118,126 Q124,138 126,156', type: 'stroke', zone: 'rock', strokeWidth: 0.8 }
        ]
      }
    ]
  },

  // 3. temple-roof
  {
    id: 'temple-roof',
    name: 'Temple Roof',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape'],
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
    pack: 'core',
    tags: ['structural', 'landscape'],
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

  // 5. stone-path — garden stepping stones (tobi-ishi)
  {
    id: 'stone-path',
    name: 'Stone Path',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape'],
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
          { d: 'M10,50 Q14,36 24,30 Q34,26 44,28 Q52,32 54,42 Q52,52 44,56 Q32,60 20,58 Q12,54 10,50 Z', type: 'fill', zone: 'stone' },
          { d: 'M64,40 Q70,28 80,22 Q90,20 98,26 Q102,34 96,42 Q88,50 76,50 Q66,48 64,40 Z', type: 'fill', zone: 'stone' },
          { d: 'M112,34 Q118,22 130,16 Q142,14 150,20 Q156,28 152,38 Q144,46 132,48 Q120,46 112,34 Z', type: 'fill', zone: 'stone' },
          { d: 'M164,38 Q168,28 178,24 Q186,22 192,28 Q196,36 190,44 Q182,50 172,48 Q166,44 164,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M202,42 Q208,30 218,24 Q230,22 236,30 Q240,40 234,50 Q224,58 212,56 Q204,50 202,42 Z', type: 'fill', zone: 'stone' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M10,50 Q14,36 24,30 Q34,26 44,28 Q52,32 54,42 Q52,52 44,56 Q32,60 20,58 Q12,54 10,50 Z', type: 'fill', zone: 'stone' },
          { d: 'M64,40 Q70,28 80,22 Q90,20 98,26 Q102,34 96,42 Q88,50 76,50 Q66,48 64,40 Z', type: 'fill', zone: 'stone' },
          { d: 'M112,34 Q118,22 130,16 Q142,14 150,20 Q156,28 152,38 Q144,46 132,48 Q120,46 112,34 Z', type: 'fill', zone: 'stone' },
          { d: 'M164,38 Q168,28 178,24 Q186,22 192,28 Q196,36 190,44 Q182,50 172,48 Q166,44 164,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M202,42 Q208,30 218,24 Q230,22 236,30 Q240,40 234,50 Q224,58 212,56 Q204,50 202,42 Z', type: 'fill', zone: 'stone' },
          { d: 'M18,56 Q30,60 42,58 Q50,54 52,58 Q46,66 32,66 Q18,62 18,56 Z', type: 'fill', zone: 'shadow' },
          { d: 'M70,48 Q82,52 94,48 Q100,42 102,46 Q96,56 80,56 Q68,52 70,48 Z', type: 'fill', zone: 'shadow' },
          { d: 'M122,44 Q134,48 148,44 Q154,38 156,42 Q150,52 136,54 Q120,50 122,44 Z', type: 'fill', zone: 'shadow' },
          { d: 'M170,46 Q180,50 190,46 Q194,40 196,44 Q190,52 178,54 Q168,50 170,46 Z', type: 'fill', zone: 'shadow' },
          { d: 'M210,54 Q222,58 234,52 Q238,44 240,48 Q236,60 220,62 Q208,58 210,54 Z', type: 'fill', zone: 'shadow' },
          { d: 'M10,50 Q14,36 24,30 Q34,26 44,28 Q52,32 54,42 Q52,52 44,56 Q32,60 20,58 Q12,54 10,50', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M112,34 Q118,22 130,16 Q142,14 150,20 Q156,28 152,38 Q144,46 132,48 Q120,46 112,34', type: 'stroke', zone: 'stone', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M10,50 Q14,36 24,30 Q34,26 44,28 Q52,32 54,42 Q52,52 44,56 Q32,60 20,58 Q12,54 10,50 Z', type: 'fill', zone: 'stone' },
          { d: 'M64,40 Q70,28 80,22 Q90,20 98,26 Q102,34 96,42 Q88,50 76,50 Q66,48 64,40 Z', type: 'fill', zone: 'stone' },
          { d: 'M112,34 Q118,22 130,16 Q142,14 150,20 Q156,28 152,38 Q144,46 132,48 Q120,46 112,34 Z', type: 'fill', zone: 'stone' },
          { d: 'M164,38 Q168,28 178,24 Q186,22 192,28 Q196,36 190,44 Q182,50 172,48 Q166,44 164,38 Z', type: 'fill', zone: 'stone' },
          { d: 'M202,42 Q208,30 218,24 Q230,22 236,30 Q240,40 234,50 Q224,58 212,56 Q204,50 202,42 Z', type: 'fill', zone: 'stone' },
          { d: 'M18,56 Q30,60 42,58 Q50,54 52,58 Q46,66 32,66 Q18,62 18,56 Z', type: 'fill', zone: 'shadow' },
          { d: 'M70,48 Q82,52 94,48 Q100,42 102,46 Q96,56 80,56 Q68,52 70,48 Z', type: 'fill', zone: 'shadow' },
          { d: 'M122,44 Q134,48 148,44 Q154,38 156,42 Q150,52 136,54 Q120,50 122,44 Z', type: 'fill', zone: 'shadow' },
          { d: 'M170,46 Q180,50 190,46 Q194,40 196,44 Q190,52 178,54 Q168,50 170,46 Z', type: 'fill', zone: 'shadow' },
          { d: 'M210,54 Q222,58 234,52 Q238,44 240,48 Q236,60 220,62 Q208,58 210,54 Z', type: 'fill', zone: 'shadow' },
          { d: 'M10,50 Q14,36 24,30 Q34,26 44,28 Q52,32 54,42 Q52,52 44,56 Q32,60 20,58 Q12,54 10,50', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M112,34 Q118,22 130,16 Q142,14 150,20 Q156,28 152,38 Q144,46 132,48 Q120,46 112,34', type: 'stroke', zone: 'stone', strokeWidth: 0.8 },
          { d: 'M56,46 Q60,42 62,46 M102,32 Q106,28 108,32 M158,34 Q162,30 164,34', type: 'stroke', zone: 'moss', strokeWidth: 1.2 },
          { d: 'M22,36 Q30,32 38,36 M26,44 Q34,40 40,44', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M74,28 Q82,24 90,28 M76,36 Q82,32 90,36', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M124,22 Q134,20 142,24 M128,32 Q136,28 144,32', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M172,30 Q178,28 184,32', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          { d: 'M212,30 Q220,28 228,32 M216,40 Q224,36 230,40', type: 'stroke', zone: 'detail', strokeWidth: 0.5 }
        ]
      }
    ]
  },

  // 6. wooden-bridge — arched garden bridge (soribashi)
  {
    id: 'wooden-bridge',
    name: 'Wooden Bridge',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape', 'water'],
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
    category: 'objects',
    pack: 'core',
    tags: ['atmospheric', 'organic', 'landscape'],
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
    category: 'objects',
    pack: 'core',
    tags: ['atmospheric', 'seasonal-winter', 'landscape'],
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
    category: 'objects',
    pack: 'core',
    tags: ['atmospheric', 'organic', 'minimal'],
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
    pack: 'core',
    tags: ['flora', 'organic', 'seasonal-autumn', 'intimate'],
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

  // 11. iris-cluster — kakitsubata (杜若) water iris
  {
    id: 'iris-cluster',
    name: 'Iris Cluster',
    category: 'flora',
    pack: 'core',
    tags: ['flora', 'organic', 'water', 'intimate', 'seasonal-spring'],
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
          // stems as tapered fills (wide at base, narrow at flower)
          { d: 'M54,196 Q53,150 52,110 Q51,80 50,62 L52,60 Q53,78 54,108 Q55,148 56,196 Z', type: 'fill', zone: 'stem' },
          { d: 'M98,196 Q97,148 96,108 Q95,78 94,58 L96,56 Q97,76 98,106 Q99,146 100,196 Z', type: 'fill', zone: 'stem' },
          // left flower — 3 upper petals + 1 drooping
          { d: 'M32,48 Q38,26 46,16 Q50,12 54,16 Q56,22 52,34 Q48,44 48,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q54,46 62,40 Q68,36 72,40 Q74,46 68,54 Q62,60 54,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q42,46 34,42 Q28,40 26,44 Q24,50 30,56 Q36,62 44,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,60 Q52,70 56,80 Q58,88 54,90 Q48,88 46,78 Q44,68 48,60 Z', type: 'fill', zone: 'petal' },
          // right flower — slightly different proportions
          { d: 'M78,42 Q84,22 92,10 Q96,6 100,10 Q102,18 98,32 Q94,42 94,54 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q100,44 108,36 Q114,32 118,36 Q120,44 114,52 Q108,60 100,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q88,46 80,42 Q74,40 72,44 Q70,50 76,56 Q82,62 90,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,58 Q98,68 102,78 Q104,86 100,88 Q94,86 92,76 Q90,66 94,58 Z', type: 'fill', zone: 'petal' },
          // leaves — sword-shaped, varied curves
          { d: 'M18,196 Q26,158 32,128 Q36,104 34,88 Q30,78 24,84 Q16,94 10,118 Q6,146 8,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68,196 Q72,156 78,126 Q82,102 84,88 Q86,78 90,84 Q94,96 98,128 Q102,158 104,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,196 Q126,160 128,130 Q130,106 134,90 Q138,82 142,88 Q144,98 146,126 Q148,160 150,196 Z', type: 'fill', zone: 'leaf' }
        ]
      },
      {
        name: 'shape',
        paths: [
          // all block fills carried forward
          { d: 'M54,196 Q53,150 52,110 Q51,80 50,62 L52,60 Q53,78 54,108 Q55,148 56,196 Z', type: 'fill', zone: 'stem' },
          { d: 'M98,196 Q97,148 96,108 Q95,78 94,58 L96,56 Q97,76 98,106 Q99,146 100,196 Z', type: 'fill', zone: 'stem' },
          { d: 'M32,48 Q38,26 46,16 Q50,12 54,16 Q56,22 52,34 Q48,44 48,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q54,46 62,40 Q68,36 72,40 Q74,46 68,54 Q62,60 54,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q42,46 34,42 Q28,40 26,44 Q24,50 30,56 Q36,62 44,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,60 Q52,70 56,80 Q58,88 54,90 Q48,88 46,78 Q44,68 48,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M78,42 Q84,22 92,10 Q96,6 100,10 Q102,18 98,32 Q94,42 94,54 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q100,44 108,36 Q114,32 118,36 Q120,44 114,52 Q108,60 100,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q88,46 80,42 Q74,40 72,44 Q70,50 76,56 Q82,62 90,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,58 Q98,68 102,78 Q104,86 100,88 Q94,86 92,76 Q90,66 94,58 Z', type: 'fill', zone: 'petal' },
          { d: 'M18,196 Q26,158 32,128 Q36,104 34,88 Q30,78 24,84 Q16,94 10,118 Q6,146 8,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68,196 Q72,156 78,126 Q82,102 84,88 Q86,78 90,84 Q94,96 98,128 Q102,158 104,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,196 Q126,160 128,130 Q130,106 134,90 Q138,82 142,88 Q144,98 146,126 Q148,160 150,196 Z', type: 'fill', zone: 'leaf' },
          // petal outlines — left flower
          { d: 'M32,48 Q38,26 46,16 Q50,12 54,16 Q56,22 52,34 Q48,44 48,56', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M48,56 Q54,46 62,40 Q68,36 72,40 Q74,46 68,54 Q62,60 54,62', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // petal outlines — right flower
          { d: 'M78,42 Q84,22 92,10 Q96,6 100,10 Q102,18 98,32 Q94,42 94,54', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M94,54 Q100,44 108,36 Q114,32 118,36 Q120,44 114,52 Q108,60 100,62', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          // leaf edge strokes
          { d: 'M18,196 Q26,158 32,128 Q36,104 34,88 Q30,78 24,84', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 },
          { d: 'M124,196 Q126,160 128,130 Q130,106 134,90 Q138,82 142,88', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 }
        ]
      },
      {
        name: 'detail',
        paths: [
          // all shape paths carried forward
          { d: 'M54,196 Q53,150 52,110 Q51,80 50,62 L52,60 Q53,78 54,108 Q55,148 56,196 Z', type: 'fill', zone: 'stem' },
          { d: 'M98,196 Q97,148 96,108 Q95,78 94,58 L96,56 Q97,76 98,106 Q99,146 100,196 Z', type: 'fill', zone: 'stem' },
          { d: 'M32,48 Q38,26 46,16 Q50,12 54,16 Q56,22 52,34 Q48,44 48,56 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q54,46 62,40 Q68,36 72,40 Q74,46 68,54 Q62,60 54,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,56 Q42,46 34,42 Q28,40 26,44 Q24,50 30,56 Q36,62 44,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M48,60 Q52,70 56,80 Q58,88 54,90 Q48,88 46,78 Q44,68 48,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M78,42 Q84,22 92,10 Q96,6 100,10 Q102,18 98,32 Q94,42 94,54 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q100,44 108,36 Q114,32 118,36 Q120,44 114,52 Q108,60 100,62 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,54 Q88,46 80,42 Q74,40 72,44 Q70,50 76,56 Q82,62 90,60 Z', type: 'fill', zone: 'petal' },
          { d: 'M94,58 Q98,68 102,78 Q104,86 100,88 Q94,86 92,76 Q90,66 94,58 Z', type: 'fill', zone: 'petal' },
          { d: 'M18,196 Q26,158 32,128 Q36,104 34,88 Q30,78 24,84 Q16,94 10,118 Q6,146 8,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M68,196 Q72,156 78,126 Q82,102 84,88 Q86,78 90,84 Q94,96 98,128 Q102,158 104,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M124,196 Q126,160 128,130 Q130,106 134,90 Q138,82 142,88 Q144,98 146,126 Q148,160 150,196 Z', type: 'fill', zone: 'leaf' },
          { d: 'M32,48 Q38,26 46,16 Q50,12 54,16 Q56,22 52,34 Q48,44 48,56', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M48,56 Q54,46 62,40 Q68,36 72,40 Q74,46 68,54 Q62,60 54,62', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M78,42 Q84,22 92,10 Q96,6 100,10 Q102,18 98,32 Q94,42 94,54', type: 'stroke', zone: 'petal', strokeWidth: 0.8 },
          { d: 'M94,54 Q100,44 108,36 Q114,32 118,36 Q120,44 114,52 Q108,60 100,62', type: 'stroke', zone: 'petal', strokeWidth: 0.7 },
          { d: 'M18,196 Q26,158 32,128 Q36,104 34,88 Q30,78 24,84', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 },
          { d: 'M124,196 Q126,160 128,130 Q130,106 134,90 Q138,82 142,88', type: 'stroke', zone: 'leaf', strokeWidth: 0.6 },
          // petal veins — left flower
          { d: 'M46,22 Q48,34 48,48 M40,44 Q36,48 32,52 M56,44 Q60,48 64,52', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M50,64 Q52,72 54,82', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // petal veins — right flower
          { d: 'M90,16 Q92,30 94,44 M82,44 Q78,48 74,52 M102,42 Q106,46 110,50', type: 'stroke', zone: 'detail', strokeWidth: 0.5 },
          { d: 'M94,62 Q96,70 100,80', type: 'stroke', zone: 'detail', strokeWidth: 0.4 },
          // leaf midrib strokes
          { d: 'M26,98 Q30,118 28,142 M84,96 Q86,118 88,142 M134,94 Q136,114 138,138', type: 'stroke', zone: 'detail', strokeWidth: 0.5 }
        ]
      }
    ]
  },

  // 12. pagoda
  {
    id: 'pagoda',
    name: 'Pagoda',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape'],
    viewBox: '0 0 130 220',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'roof', defaultPaletteSlot: 0 },
      { id: 'wall', defaultPaletteSlot: 4 },
      { id: 'finial', defaultPaletteSlot: 3 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M63,4 Q65,2 67,4 L66,33 Q65,36 64,33 Z', type: 'fill', zone: 'finial' },
          { d: 'M65,34 Q48,44 32,53 Q24,57 18,55 L18,60 L112,60 L112,55 Q106,57 98,53 Q82,44 65,34 Z', type: 'fill', zone: 'roof' },
          { d: 'M42,60 L88,60 L88,82 L42,82 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,80 Q44,92 26,103 Q16,108 10,105 L10,112 L120,112 L120,105 Q114,108 104,103 Q86,92 65,80 Z', type: 'fill', zone: 'roof' },
          { d: 'M34,112 L96,112 L96,142 L34,142 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,140 Q40,154 20,166 Q10,172 4,168 L4,178 L126,178 L126,168 Q120,172 110,166 Q90,154 65,140 Z', type: 'fill', zone: 'roof' },
          { d: 'M26,178 L104,178 L104,206 L26,206 Z', type: 'fill', zone: 'wall' },
          { d: 'M22,206 L108,206 L108,216 L22,216 Z', type: 'fill', zone: 'wall' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M63,4 Q65,2 67,4 L66,33 Q65,36 64,33 Z', type: 'fill', zone: 'finial' },
          { d: 'M65,34 Q48,44 32,53 Q24,57 18,55 L18,60 L112,60 L112,55 Q106,57 98,53 Q82,44 65,34 Z', type: 'fill', zone: 'roof' },
          { d: 'M42,60 L88,60 L88,82 L42,82 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,80 Q44,92 26,103 Q16,108 10,105 L10,112 L120,112 L120,105 Q114,108 104,103 Q86,92 65,80 Z', type: 'fill', zone: 'roof' },
          { d: 'M34,112 L96,112 L96,142 L34,142 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,140 Q40,154 20,166 Q10,172 4,168 L4,178 L126,178 L126,168 Q120,172 110,166 Q90,154 65,140 Z', type: 'fill', zone: 'roof' },
          { d: 'M26,178 L104,178 L104,206 L26,206 Z', type: 'fill', zone: 'wall' },
          { d: 'M22,206 L108,206 L108,216 L22,216 Z', type: 'fill', zone: 'wall' },
          { d: 'M18,55 Q24,57 32,53 Q48,44 65,34 Q82,44 98,53 Q106,57 112,55', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M10,105 Q16,108 26,103 Q44,92 65,80 Q86,92 104,103 Q114,108 120,105', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M4,168 Q10,172 20,166 Q40,154 65,140 Q90,154 110,166 Q120,172 126,168', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M42,60 L88,60 M34,112 L96,112 M26,178 L104,178 M22,206 L108,206', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M55,60 L55,82 M75,60 L75,82 M50,112 L50,142 M80,112 L80,142 M42,178 L42,206 M65,178 L65,206 M88,178 L88,206', type: 'stroke', zone: 'wall', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M63,4 Q65,2 67,4 L66,33 Q65,36 64,33 Z', type: 'fill', zone: 'finial' },
          { d: 'M65,34 Q48,44 32,53 Q24,57 18,55 L18,60 L112,60 L112,55 Q106,57 98,53 Q82,44 65,34 Z', type: 'fill', zone: 'roof' },
          { d: 'M42,60 L88,60 L88,82 L42,82 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,80 Q44,92 26,103 Q16,108 10,105 L10,112 L120,112 L120,105 Q114,108 104,103 Q86,92 65,80 Z', type: 'fill', zone: 'roof' },
          { d: 'M34,112 L96,112 L96,142 L34,142 Z', type: 'fill', zone: 'wall' },
          { d: 'M65,140 Q40,154 20,166 Q10,172 4,168 L4,178 L126,178 L126,168 Q120,172 110,166 Q90,154 65,140 Z', type: 'fill', zone: 'roof' },
          { d: 'M26,178 L104,178 L104,206 L26,206 Z', type: 'fill', zone: 'wall' },
          { d: 'M22,206 L108,206 L108,216 L22,216 Z', type: 'fill', zone: 'wall' },
          { d: 'M18,55 Q24,57 32,53 Q48,44 65,34 Q82,44 98,53 Q106,57 112,55', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M10,105 Q16,108 26,103 Q44,92 65,80 Q86,92 104,103 Q114,108 120,105', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M4,168 Q10,172 20,166 Q40,154 65,140 Q90,154 110,166 Q120,172 126,168', type: 'stroke', zone: 'roof', strokeWidth: 1.0 },
          { d: 'M42,60 L88,60 M34,112 L96,112 M26,178 L104,178 M22,206 L108,206', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M55,60 L55,82 M75,60 L75,82 M50,112 L50,142 M80,112 L80,142 M42,178 L42,206 M65,178 L65,206 M88,178 L88,206', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M63,10 L67,10 M62,18 L68,18 M63,26 L67,26', type: 'stroke', zone: 'finial', strokeWidth: 0.5 },
          { d: 'M35,50 Q48,44 65,36 Q82,44 95,50 M28,100 Q44,92 65,82 Q86,92 102,100 M22,162 Q40,152 65,142 Q90,152 108,162', type: 'stroke', zone: 'roof', strokeWidth: 0.4 },
          { d: 'M44,57 L44,62 M56,56 L56,61 M74,56 L74,61 M86,57 L86,62 M36,108 L36,114 M50,107 L50,113 M80,107 L80,113 M94,108 L94,114', type: 'stroke', zone: 'roof', strokeWidth: 0.5 },
          { d: 'M56,65 L74,65 L74,77 L56,77 Z', type: 'fill', zone: 'finial' },
          { d: 'M46,118 L60,118 L60,134 L46,134 Z M70,118 L84,118 L84,134 L70,134 Z', type: 'fill', zone: 'finial' }
        ]
      }
    ]
  },

  // 13. tea-house
  {
    id: 'tea-house',
    name: 'Tea House',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape'],
    viewBox: '0 0 200 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'thatch', defaultPaletteSlot: 4 },
      { id: 'wall', defaultPaletteSlot: 0 },
      { id: 'frame', defaultPaletteSlot: 3 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M8,82 Q10,55 35,35 Q60,14 100,8 Q145,12 170,32 Q192,52 196,82 L196,90 L8,90 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,90 L88,90 L88,122 L22,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M112,90 L182,90 L182,122 L112,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M88,90 L112,90 L112,122 L88,122 Z', type: 'fill', zone: 'frame' },
          { d: 'M92,90 L108,90 L108,100 L92,100 Z', type: 'fill', zone: 'thatch' },
          { d: 'M16,122 L188,122 L190,136 L14,136 Z', type: 'fill', zone: 'frame' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M8,82 Q10,55 35,35 Q60,14 100,8 Q145,12 170,32 Q192,52 196,82 L196,90 L8,90 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,90 L88,90 L88,122 L22,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M112,90 L182,90 L182,122 L112,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M88,90 L112,90 L112,122 L88,122 Z', type: 'fill', zone: 'frame' },
          { d: 'M92,90 L108,90 L108,100 L92,100 Z', type: 'fill', zone: 'thatch' },
          { d: 'M16,122 L188,122 L190,136 L14,136 Z', type: 'fill', zone: 'frame' },
          { d: 'M8,82 Q10,55 35,35 Q60,14 100,8 Q145,12 170,32 Q192,52 196,82', type: 'stroke', zone: 'thatch', strokeWidth: 1.2 },
          { d: 'M22,90 L22,122 L88,122 L88,90 M112,90 L112,122 L182,122 L182,90', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M88,84 L88,122 M112,84 L112,122 M22,85 L22,122 M182,85 L182,122', type: 'stroke', zone: 'frame', strokeWidth: 1.0 },
          { d: 'M16,122 L188,122 M16,128 L188,128', type: 'stroke', zone: 'frame', strokeWidth: 0.8 },
          { d: 'M8,90 L196,90', type: 'stroke', zone: 'thatch', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M8,82 Q10,55 35,35 Q60,14 100,8 Q145,12 170,32 Q192,52 196,82 L196,90 L8,90 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,90 L88,90 L88,122 L22,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M112,90 L182,90 L182,122 L112,122 Z', type: 'fill', zone: 'wall' },
          { d: 'M88,90 L112,90 L112,122 L88,122 Z', type: 'fill', zone: 'frame' },
          { d: 'M92,90 L108,90 L108,100 L92,100 Z', type: 'fill', zone: 'thatch' },
          { d: 'M16,122 L188,122 L190,136 L14,136 Z', type: 'fill', zone: 'frame' },
          { d: 'M8,82 Q10,55 35,35 Q60,14 100,8 Q145,12 170,32 Q192,52 196,82', type: 'stroke', zone: 'thatch', strokeWidth: 1.2 },
          { d: 'M22,90 L22,122 L88,122 L88,90 M112,90 L112,122 L182,122 L182,90', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M88,84 L88,122 M112,84 L112,122 M22,85 L22,122 M182,85 L182,122', type: 'stroke', zone: 'frame', strokeWidth: 1.0 },
          { d: 'M16,122 L188,122 M16,128 L188,128', type: 'stroke', zone: 'frame', strokeWidth: 0.8 },
          { d: 'M8,90 L196,90', type: 'stroke', zone: 'thatch', strokeWidth: 0.8 },
          { d: 'M25,45 Q50,32 78,22 M30,55 Q58,40 88,30 M18,68 Q50,52 85,42 M108,18 Q138,28 165,45 M112,30 Q142,40 172,55 M118,44 Q150,56 180,70', type: 'stroke', zone: 'thatch', strokeWidth: 0.4 },
          { d: 'M35,95 L35,118 M50,95 L50,118 M65,95 L65,118 M80,95 L80,118', type: 'stroke', zone: 'wall', strokeWidth: 0.4 },
          { d: 'M125,95 L125,118 M140,95 L140,118 M155,95 L155,118 M170,95 L170,118', type: 'stroke', zone: 'wall', strokeWidth: 0.4 },
          { d: 'M20,125 L186,125 M20,131 L186,131', type: 'stroke', zone: 'frame', strokeWidth: 0.3 },
          { d: 'M96,124 Q100,122 104,124 Q100,126 96,124 Z', type: 'fill', zone: 'frame' }
        ]
      }
    ]
  },

  // 14. bamboo-fence
  {
    id: 'bamboo-fence',
    name: 'Bamboo Fence',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape', 'minimal'],
    viewBox: '0 0 220 100',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'bamboo', defaultPaletteSlot: 3 },
      { id: 'binding', defaultPaletteSlot: 0 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M17,5 Q20,2 23,5 L22,98 Q20,100 18,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M57,8 Q60,5 63,8 L62,98 Q60,100 58,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M97,6 Q100,3 103,6 L102,98 Q100,100 98,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M137,7 Q140,4 143,7 L142,98 Q140,100 138,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M177,5 Q180,2 183,5 L182,98 Q180,100 178,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,28 L210,28 L210,34 L10,34 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,64 L210,64 L210,70 L10,70 Z', type: 'fill', zone: 'bamboo' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M17,5 Q20,2 23,5 L22,98 Q20,100 18,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M57,8 Q60,5 63,8 L62,98 Q60,100 58,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M97,6 Q100,3 103,6 L102,98 Q100,100 98,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M137,7 Q140,4 143,7 L142,98 Q140,100 138,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M177,5 Q180,2 183,5 L182,98 Q180,100 178,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,28 L210,28 L210,34 L10,34 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,64 L210,64 L210,70 L10,70 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M20,2 L20,100 M60,5 L60,100 M100,3 L100,100 M140,4 L140,100 M180,2 L180,100', type: 'stroke', zone: 'bamboo', strokeWidth: 0.8 },
          { d: 'M10,28 L210,28 M10,34 L210,34 M10,64 L210,64 M10,70 L210,70', type: 'stroke', zone: 'bamboo', strokeWidth: 0.8 },
          { d: 'M17,25 Q20,23 23,25 M17,48 Q20,46 23,48 M17,78 Q20,76 23,78 M57,22 Q60,20 63,22 M57,50 Q60,48 63,50 M57,82 Q60,80 63,82 M97,24 Q100,22 103,24 M97,52 Q100,50 103,52 M97,84 Q100,82 103,84 M137,26 Q140,24 143,26 M137,50 Q140,48 143,50 M137,80 Q140,78 143,80 M177,22 Q180,20 183,22 M177,48 Q180,46 183,48 M177,76 Q180,74 183,76', type: 'stroke', zone: 'bamboo', strokeWidth: 0.6 },
          { d: 'M16,26 L24,36 M24,26 L16,36 M56,26 L64,36 M64,26 L56,36 M96,26 L104,36 M104,26 L96,36 M136,26 L144,36 M144,26 L136,36 M176,26 L184,36 M184,26 L176,36', type: 'stroke', zone: 'binding', strokeWidth: 1.0 },
          { d: 'M16,62 L24,72 M24,62 L16,72 M56,62 L64,72 M64,62 L56,72 M96,62 L104,72 M104,62 L96,72 M136,62 L144,72 M144,62 L136,72 M176,62 L184,72 M184,62 L176,72', type: 'stroke', zone: 'binding', strokeWidth: 1.0 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M17,5 Q20,2 23,5 L22,98 Q20,100 18,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M57,8 Q60,5 63,8 L62,98 Q60,100 58,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M97,6 Q100,3 103,6 L102,98 Q100,100 98,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M137,7 Q140,4 143,7 L142,98 Q140,100 138,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M177,5 Q180,2 183,5 L182,98 Q180,100 178,98 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,28 L210,28 L210,34 L10,34 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M10,64 L210,64 L210,70 L10,70 Z', type: 'fill', zone: 'bamboo' },
          { d: 'M20,2 L20,100 M60,5 L60,100 M100,3 L100,100 M140,4 L140,100 M180,2 L180,100', type: 'stroke', zone: 'bamboo', strokeWidth: 0.8 },
          { d: 'M10,28 L210,28 M10,34 L210,34 M10,64 L210,64 M10,70 L210,70', type: 'stroke', zone: 'bamboo', strokeWidth: 0.8 },
          { d: 'M17,25 Q20,23 23,25 M17,48 Q20,46 23,48 M17,78 Q20,76 23,78 M57,22 Q60,20 63,22 M57,50 Q60,48 63,50 M57,82 Q60,80 63,82 M97,24 Q100,22 103,24 M97,52 Q100,50 103,52 M97,84 Q100,82 103,84 M137,26 Q140,24 143,26 M137,50 Q140,48 143,50 M137,80 Q140,78 143,80 M177,22 Q180,20 183,22 M177,48 Q180,46 183,48 M177,76 Q180,74 183,76', type: 'stroke', zone: 'bamboo', strokeWidth: 0.6 },
          { d: 'M16,26 L24,36 M24,26 L16,36 M56,26 L64,36 M64,26 L56,36 M96,26 L104,36 M104,26 L96,36 M136,26 L144,36 M144,26 L136,36 M176,26 L184,36 M184,26 L176,36', type: 'stroke', zone: 'binding', strokeWidth: 1.0 },
          { d: 'M16,62 L24,72 M24,62 L16,72 M56,62 L64,72 M64,62 L56,72 M96,62 L104,72 M104,62 L96,72 M136,62 L144,72 M144,62 L136,72 M176,62 L184,72 M184,62 L176,72', type: 'stroke', zone: 'binding', strokeWidth: 1.0 },
          { d: 'M19,8 L19,95 M21,8 L21,95 M59,10 L59,95 M61,10 L61,95 M99,8 L99,95 M101,8 L101,95 M139,10 L139,95 M141,10 L141,95 M179,8 L179,95 M181,8 L181,95', type: 'stroke', zone: 'bamboo', strokeWidth: 0.3 },
          { d: 'M12,31 L208,31 M12,67 L208,67', type: 'stroke', zone: 'bamboo', strokeWidth: 0.3 },
          { d: 'M18,29 L22,33 M22,29 L18,33 M58,29 L62,33 M62,29 L58,33 M98,29 L102,33 M102,29 L98,33 M138,29 L142,33 M142,29 L138,33 M178,29 L182,33 M182,29 L178,33', type: 'stroke', zone: 'binding', strokeWidth: 0.5 },
          { d: 'M18,65 L22,69 M22,65 L18,69 M58,65 L62,69 M62,65 L58,69 M98,65 L102,69 M102,65 L98,69 M138,65 L142,69 M142,65 L138,69 M178,65 L182,69 M182,65 L178,69', type: 'stroke', zone: 'binding', strokeWidth: 0.5 },
          { d: 'M20,42 A1,1 0 1,1 19,42 Z M100,44 A1,1 0 1,1 99,44 Z M180,40 A1,1 0 1,1 179,40 Z', type: 'fill', zone: 'bamboo' }
        ]
      }
    ]
  },

  // 15. farmhouse
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    category: 'landscape',
    pack: 'core',
    tags: ['structural', 'landscape'],
    viewBox: '0 0 200 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'thatch', defaultPaletteSlot: 4 },
      { id: 'wall', defaultPaletteSlot: 0 },
      { id: 'frame', defaultPaletteSlot: 3 }
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M92,8 Q100,4 108,8 L106,16 Q100,12 94,16 Z', type: 'fill', zone: 'frame' },
          { d: 'M100,12 Q68,35 30,65 Q16,75 6,82 L6,92 L194,92 L194,82 Q184,75 170,65 Q132,35 100,12 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,92 L92,92 L92,135 L22,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M108,92 L178,92 L178,135 L108,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M92,92 L108,92 L108,135 L92,135 Z', type: 'fill', zone: 'frame' },
          { d: 'M86,48 L100,36 L114,48 L114,58 L86,58 Z', type: 'fill', zone: 'wall' },
          { d: 'M16,135 L184,135 L186,150 L14,150 Z', type: 'fill', zone: 'frame' }
        ]
      },
      {
        name: 'shape',
        paths: [
          { d: 'M92,8 Q100,4 108,8 L106,16 Q100,12 94,16 Z', type: 'fill', zone: 'frame' },
          { d: 'M100,12 Q68,35 30,65 Q16,75 6,82 L6,92 L194,92 L194,82 Q184,75 170,65 Q132,35 100,12 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,92 L92,92 L92,135 L22,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M108,92 L178,92 L178,135 L108,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M92,92 L108,92 L108,135 L92,135 Z', type: 'fill', zone: 'frame' },
          { d: 'M86,48 L100,36 L114,48 L114,58 L86,58 Z', type: 'fill', zone: 'wall' },
          { d: 'M16,135 L184,135 L186,150 L14,150 Z', type: 'fill', zone: 'frame' },
          { d: 'M6,82 Q16,75 30,65 Q68,35 100,12 Q132,35 170,65 Q184,75 194,82', type: 'stroke', zone: 'thatch', strokeWidth: 1.2 },
          { d: 'M22,92 L22,135 L178,135 L178,92', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M92,86 L92,135 M108,86 L108,135', type: 'stroke', zone: 'frame', strokeWidth: 1.0 },
          { d: 'M86,48 L100,36 L114,48 M86,58 L114,58', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M16,135 L184,135', type: 'stroke', zone: 'frame', strokeWidth: 0.8 }
        ]
      },
      {
        name: 'detail',
        paths: [
          { d: 'M92,8 Q100,4 108,8 L106,16 Q100,12 94,16 Z', type: 'fill', zone: 'frame' },
          { d: 'M100,12 Q68,35 30,65 Q16,75 6,82 L6,92 L194,92 L194,82 Q184,75 170,65 Q132,35 100,12 Z', type: 'fill', zone: 'thatch' },
          { d: 'M22,92 L92,92 L92,135 L22,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M108,92 L178,92 L178,135 L108,135 Z', type: 'fill', zone: 'wall' },
          { d: 'M92,92 L108,92 L108,135 L92,135 Z', type: 'fill', zone: 'frame' },
          { d: 'M86,48 L100,36 L114,48 L114,58 L86,58 Z', type: 'fill', zone: 'wall' },
          { d: 'M16,135 L184,135 L186,150 L14,150 Z', type: 'fill', zone: 'frame' },
          { d: 'M6,82 Q16,75 30,65 Q68,35 100,12 Q132,35 170,65 Q184,75 194,82', type: 'stroke', zone: 'thatch', strokeWidth: 1.2 },
          { d: 'M22,92 L22,135 L178,135 L178,92', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M92,86 L92,135 M108,86 L108,135', type: 'stroke', zone: 'frame', strokeWidth: 1.0 },
          { d: 'M86,48 L100,36 L114,48 M86,58 L114,58', type: 'stroke', zone: 'wall', strokeWidth: 0.8 },
          { d: 'M16,135 L184,135', type: 'stroke', zone: 'frame', strokeWidth: 0.8 },
          { d: 'M30,60 Q55,42 80,28 M25,70 Q50,52 78,38 M18,80 Q45,60 75,45 M120,28 Q145,42 170,60 M122,38 Q150,52 175,70 M125,45 Q155,60 182,80', type: 'stroke', zone: 'thatch', strokeWidth: 0.4 },
          { d: 'M26,112 L88,112 M112,112 L174,112', type: 'stroke', zone: 'wall', strokeWidth: 0.5 },
          { d: 'M38,98 L38,108 M52,98 L52,108 M68,98 L68,108 M82,98 L82,108', type: 'stroke', zone: 'wall', strokeWidth: 0.4 },
          { d: 'M122,98 L122,108 M136,98 L136,108 M152,98 L152,108 M166,98 L166,108', type: 'stroke', zone: 'wall', strokeWidth: 0.4 },
          { d: 'M92,42 L108,42 M100,38 L100,55', type: 'stroke', zone: 'wall', strokeWidth: 0.4 },
          { d: 'M30,138 L50,138 M60,140 L80,140 M90,138 L110,138 M120,140 L140,140 M150,138 L170,138', type: 'stroke', zone: 'frame', strokeWidth: 0.3 }
        ]
      }
    ]
  },

  // ── Water Elements ──

  {
    id: 'shore-waves',
    name: 'Shore Waves',
    category: 'landscape',
    pack: 'core',
    tags: ['landscape', 'water', 'organic'],
    viewBox: '0 0 300 100',
    suggestedLayer: 'foreground',
    colorZones: [
      { id: 'water', defaultPaletteSlot: 0 },
      { id: 'foam', defaultPaletteSlot: 2 },
      { id: 'sand', defaultPaletteSlot: 3 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Shore/sand
          { d: 'M0,58 Q40,52 80,56 Q130,62 180,54 Q230,46 280,52 L300,50 L300,100 L0,100 Z', type: 'fill', zone: 'sand' },
          // Water body
          { d: 'M0,0 L300,0 L300,50 Q280,52 230,46 Q180,54 130,62 Q80,56 40,52 L0,58 Z', type: 'fill', zone: 'water' },
          // Foam line at shore edge
          { d: 'M0,55 Q20,50 45,52 Q70,54 95,58 Q125,62 155,60 Q185,56 215,50 Q245,46 270,48 Q285,50 300,48 L300,54 Q280,56 250,52 Q220,50 190,55 Q160,60 130,64 Q100,62 70,58 Q40,54 20,54 L0,60 Z', type: 'fill', zone: 'foam' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0,58 Q40,52 80,56 Q130,62 180,54 Q230,46 280,52 L300,50 L300,100 L0,100 Z', type: 'fill', zone: 'sand' },
          { d: 'M0,0 L300,0 L300,50 Q280,52 230,46 Q180,54 130,62 Q80,56 40,52 L0,58 Z', type: 'fill', zone: 'water' },
          { d: 'M0,55 Q20,50 45,52 Q70,54 95,58 Q125,62 155,60 Q185,56 215,50 Q245,46 270,48 Q285,50 300,48 L300,54 Q280,56 250,52 Q220,50 190,55 Q160,60 130,64 Q100,62 70,58 Q40,54 20,54 L0,60 Z', type: 'fill', zone: 'foam' },
          // Shore edge outline
          { d: 'M0,58 Q40,52 80,56 Q130,62 180,54 Q230,46 280,52 L300,50', type: 'stroke', zone: 'sand', strokeWidth: 1.2 },
          // Inner wave crest
          { d: 'M0,40 Q35,34 75,38 Q120,44 165,36 Q210,28 260,34 L300,32', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0,58 Q40,52 80,56 Q130,62 180,54 Q230,46 280,52 L300,50 L300,100 L0,100 Z', type: 'fill', zone: 'sand' },
          { d: 'M0,0 L300,0 L300,50 Q280,52 230,46 Q180,54 130,62 Q80,56 40,52 L0,58 Z', type: 'fill', zone: 'water' },
          { d: 'M0,55 Q20,50 45,52 Q70,54 95,58 Q125,62 155,60 Q185,56 215,50 Q245,46 270,48 Q285,50 300,48 L300,54 Q280,56 250,52 Q220,50 190,55 Q160,60 130,64 Q100,62 70,58 Q40,54 20,54 L0,60 Z', type: 'fill', zone: 'foam' },
          { d: 'M0,58 Q40,52 80,56 Q130,62 180,54 Q230,46 280,52 L300,50', type: 'stroke', zone: 'sand', strokeWidth: 1.2 },
          { d: 'M0,40 Q35,34 75,38 Q120,44 165,36 Q210,28 260,34 L300,32', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
          // Receding wave lines
          { d: 'M10,26 Q50,20 95,24 Q140,30 185,22 Q230,16 275,22 M5,16 Q45,10 90,14 Q140,20 190,12 Q240,6 285,12', type: 'stroke', zone: 'water', strokeWidth: 0.6 },
          // Foam lace detail
          { d: 'M15,52 Q20,50 28,52 M50,54 Q58,52 65,54 M100,58 Q108,56 116,58 M150,60 Q158,57 166,59 M200,54 Q208,51 216,53 M250,50 Q258,47 266,49', type: 'stroke', zone: 'foam', strokeWidth: 0.7 },
          // Wet sand texture
          { d: 'M20,70 Q30,68 40,70 M60,72 Q70,70 80,72 M110,68 Q120,66 130,68 M160,72 Q170,70 180,72 M210,66 Q220,64 230,66 M260,68 Q270,66 280,68', type: 'stroke', zone: 'sand', strokeWidth: 0.3 },
        ],
      },
    ],
  },

  {
    id: 'river-rapids',
    name: 'River Rapids',
    category: 'landscape',
    pack: 'core',
    tags: ['landscape', 'water', 'organic'],
    viewBox: '0 0 260 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'water', defaultPaletteSlot: 0 },
      { id: 'rock', defaultPaletteSlot: 3 },
      { id: 'foam', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Water body
          { d: 'M0,30 Q30,20 65,28 Q100,38 140,32 Q180,24 220,34 Q245,40 260,35 L260,110 Q240,118 210,108 Q170,96 130,105 Q90,115 50,108 Q25,102 0,110 Z', type: 'fill', zone: 'water' },
          // Large rock left
          { d: 'M55,42 Q62,28 78,26 Q92,28 96,40 Q94,54 82,60 Q68,58 58,50 Q54,46 55,42 Z', type: 'fill', zone: 'rock' },
          // Large rock right
          { d: 'M170,38 Q178,24 194,22 Q208,26 212,38 Q210,50 200,56 Q186,54 176,46 Q170,42 170,38 Z', type: 'fill', zone: 'rock' },
          // Small rock center
          { d: 'M120,48 Q126,40 134,42 Q138,48 134,54 Q128,56 122,52 Q120,50 120,48 Z', type: 'fill', zone: 'rock' },
          // Foam patches around rocks
          { d: 'M48,48 Q54,38 62,36 Q56,34 50,38 Q46,42 48,48 Z M96,36 Q104,30 112,34 Q106,38 98,40 Q94,40 96,36 Z M162,44 Q168,34 176,32 Q170,30 164,34 Q160,38 162,44 Z M212,34 Q220,28 228,32 Q222,36 214,38 Q210,38 212,34 Z', type: 'fill', zone: 'foam' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0,30 Q30,20 65,28 Q100,38 140,32 Q180,24 220,34 Q245,40 260,35 L260,110 Q240,118 210,108 Q170,96 130,105 Q90,115 50,108 Q25,102 0,110 Z', type: 'fill', zone: 'water' },
          { d: 'M55,42 Q62,28 78,26 Q92,28 96,40 Q94,54 82,60 Q68,58 58,50 Q54,46 55,42 Z', type: 'fill', zone: 'rock' },
          { d: 'M170,38 Q178,24 194,22 Q208,26 212,38 Q210,50 200,56 Q186,54 176,46 Q170,42 170,38 Z', type: 'fill', zone: 'rock' },
          { d: 'M120,48 Q126,40 134,42 Q138,48 134,54 Q128,56 122,52 Q120,50 120,48 Z', type: 'fill', zone: 'rock' },
          { d: 'M48,48 Q54,38 62,36 Q56,34 50,38 Q46,42 48,48 Z M96,36 Q104,30 112,34 Q106,38 98,40 Q94,40 96,36 Z M162,44 Q168,34 176,32 Q170,30 164,34 Q160,38 162,44 Z M212,34 Q220,28 228,32 Q222,36 214,38 Q210,38 212,34 Z', type: 'fill', zone: 'foam' },
          // Rock outlines
          { d: 'M55,42 Q62,28 78,26 Q92,28 96,40 Q94,54 82,60 Q68,58 58,50 Q54,46 55,42 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.5 },
          { d: 'M170,38 Q178,24 194,22 Q208,26 212,38 Q210,50 200,56 Q186,54 176,46 Q170,42 170,38 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.5 },
          { d: 'M120,48 Q126,40 134,42 Q138,48 134,54 Q128,56 122,52 Q120,50 120,48 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.2 },
          // Water banks
          { d: 'M0,30 Q30,20 65,28 Q100,38 140,32 Q180,24 220,34 Q245,40 260,35', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
          { d: 'M0,110 Q25,102 50,108 Q90,115 130,105 Q170,96 210,108 Q240,118 260,110', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0,30 Q30,20 65,28 Q100,38 140,32 Q180,24 220,34 Q245,40 260,35 L260,110 Q240,118 210,108 Q170,96 130,105 Q90,115 50,108 Q25,102 0,110 Z', type: 'fill', zone: 'water' },
          { d: 'M55,42 Q62,28 78,26 Q92,28 96,40 Q94,54 82,60 Q68,58 58,50 Q54,46 55,42 Z', type: 'fill', zone: 'rock' },
          { d: 'M170,38 Q178,24 194,22 Q208,26 212,38 Q210,50 200,56 Q186,54 176,46 Q170,42 170,38 Z', type: 'fill', zone: 'rock' },
          { d: 'M120,48 Q126,40 134,42 Q138,48 134,54 Q128,56 122,52 Q120,50 120,48 Z', type: 'fill', zone: 'rock' },
          { d: 'M48,48 Q54,38 62,36 Q56,34 50,38 Q46,42 48,48 Z M96,36 Q104,30 112,34 Q106,38 98,40 Q94,40 96,36 Z M162,44 Q168,34 176,32 Q170,30 164,34 Q160,38 162,44 Z M212,34 Q220,28 228,32 Q222,36 214,38 Q210,38 212,34 Z', type: 'fill', zone: 'foam' },
          { d: 'M55,42 Q62,28 78,26 Q92,28 96,40 Q94,54 82,60 Q68,58 58,50 Q54,46 55,42 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.5 },
          { d: 'M170,38 Q178,24 194,22 Q208,26 212,38 Q210,50 200,56 Q186,54 176,46 Q170,42 170,38 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.5 },
          { d: 'M120,48 Q126,40 134,42 Q138,48 134,54 Q128,56 122,52 Q120,50 120,48 Z', type: 'stroke', zone: 'rock', strokeWidth: 1.2 },
          { d: 'M0,30 Q30,20 65,28 Q100,38 140,32 Q180,24 220,34 Q245,40 260,35', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
          { d: 'M0,110 Q25,102 50,108 Q90,115 130,105 Q170,96 210,108 Q240,118 260,110', type: 'stroke', zone: 'water', strokeWidth: 1.5 },
          // Turbulent flow lines
          { d: 'M8,55 Q25,44 48,50 M100,42 Q115,38 130,44 Q145,50 158,44 M216,40 Q232,36 248,42 M10,80 Q30,70 52,76 M100,70 Q118,64 135,72 Q152,80 168,72 M218,68 Q236,62 252,68', type: 'stroke', zone: 'water', strokeWidth: 0.6 },
          // Wake lines behind rocks
          { d: 'M82,64 Q95,72 108,68 Q118,66 128,70 M200,60 Q214,68 228,64 Q238,62 248,66 M134,58 Q145,64 156,60', type: 'stroke', zone: 'water', strokeWidth: 0.5 },
          // Foam detail
          { d: 'M46,44 Q50,42 54,44 M94,34 Q98,32 102,34 M160,40 Q164,38 168,40 M210,32 Q214,30 218,32 M108,46 Q112,44 116,46 M228,38 Q232,36 236,38', type: 'stroke', zone: 'foam', strokeWidth: 0.7 },
          // Rock texture
          { d: 'M65,34 L68,38 M72,32 L74,36 M80,36 L82,40 M60,48 L63,50 M180,30 L183,34 M188,28 L190,32 M196,32 L198,36 M176,44 L179,46 M126,44 L128,48 M132,46 L130,50', type: 'stroke', zone: 'rock', strokeWidth: 0.4 },
        ],
      },
    ],
  },

  {
    id: 'water-ripples',
    name: 'Water Ripples',
    category: 'landscape',
    pack: 'core',
    tags: ['landscape', 'water', 'organic', 'minimal'],
    viewBox: '0 0 200 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'water', defaultPaletteSlot: 0 },
      { id: 'ripple', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          // Water surface
          { d: 'M0,20 Q50,10 100,16 Q150,22 200,14 L200,110 Q150,118 100,112 Q50,106 0,114 Z', type: 'fill', zone: 'water' },
          // Central ripple rings (elliptical — perspective)
          { d: 'M72,56 Q85,48 100,46 Q115,48 128,56 Q115,64 100,66 Q85,64 72,56 Z', type: 'fill', zone: 'ripple' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M0,20 Q50,10 100,16 Q150,22 200,14 L200,110 Q150,118 100,112 Q50,106 0,114 Z', type: 'fill', zone: 'water' },
          { d: 'M72,56 Q85,48 100,46 Q115,48 128,56 Q115,64 100,66 Q85,64 72,56 Z', type: 'fill', zone: 'ripple' },
          // Ripple ring outlines — expanding ellipses
          { d: 'M72,56 Q85,48 100,46 Q115,48 128,56 Q115,64 100,66 Q85,64 72,56', type: 'stroke', zone: 'ripple', strokeWidth: 1.2 },
          { d: 'M56,58 Q76,44 100,40 Q124,44 144,58 Q124,72 100,76 Q76,72 56,58', type: 'stroke', zone: 'ripple', strokeWidth: 1 },
          { d: 'M38,60 Q64,40 100,34 Q136,40 162,60 Q136,80 100,86 Q64,80 38,60', type: 'stroke', zone: 'ripple', strokeWidth: 0.8 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M0,20 Q50,10 100,16 Q150,22 200,14 L200,110 Q150,118 100,112 Q50,106 0,114 Z', type: 'fill', zone: 'water' },
          { d: 'M72,56 Q85,48 100,46 Q115,48 128,56 Q115,64 100,66 Q85,64 72,56 Z', type: 'fill', zone: 'ripple' },
          { d: 'M72,56 Q85,48 100,46 Q115,48 128,56 Q115,64 100,66 Q85,64 72,56', type: 'stroke', zone: 'ripple', strokeWidth: 1.2 },
          { d: 'M56,58 Q76,44 100,40 Q124,44 144,58 Q124,72 100,76 Q76,72 56,58', type: 'stroke', zone: 'ripple', strokeWidth: 1 },
          { d: 'M38,60 Q64,40 100,34 Q136,40 162,60 Q136,80 100,86 Q64,80 38,60', type: 'stroke', zone: 'ripple', strokeWidth: 0.8 },
          // Outer ripples — fading
          { d: 'M20,62 Q52,36 100,28 Q148,36 180,62 Q148,88 100,96 Q52,88 20,62', type: 'stroke', zone: 'ripple', strokeWidth: 0.5 },
          { d: 'M4,64 Q42,32 100,22 Q158,32 196,64 Q158,96 100,106 Q42,96 4,64', type: 'stroke', zone: 'ripple', strokeWidth: 0.3 },
          // Subtle surface current lines
          { d: 'M8,34 Q30,28 55,32 M145,28 Q170,24 192,30 M10,90 Q32,84 58,88 M142,86 Q168,82 190,88', type: 'stroke', zone: 'water', strokeWidth: 0.4 },
          // Tiny secondary ripple set (offset)
          { d: 'M30,40 Q38,36 46,40 Q38,44 30,40 M154,38 Q162,34 170,38 Q162,42 154,38 M28,82 Q36,78 44,82 Q36,86 28,82 M156,80 Q164,76 172,80 Q164,84 156,80', type: 'stroke', zone: 'ripple', strokeWidth: 0.3 },
        ],
      },
    ],
  }
];
