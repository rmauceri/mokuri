// ============================================================
//  MOKURI — Basic Forms Element Library
//  Simple solid shapes designed for hand carving
// ============================================================

const MOKURI_FORMS_ELEMENTS = [

  // ---- GEOMETRIC FORMS ----

  {
    id: 'form-circle',
    name: 'Circle',
    category: 'forms',
    viewBox: '0 0 120 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 10 C87 10 110 33 110 60 C110 87 87 110 60 110 C33 110 10 87 10 60 C10 33 33 10 60 10 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-oval',
    name: 'Oval',
    category: 'forms',
    viewBox: '0 0 160 100',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M80 10 C120 10 150 28 150 50 C150 72 120 90 80 90 C40 90 10 72 10 50 C10 28 40 10 80 10 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-rectangle',
    name: 'Rectangle',
    category: 'forms',
    viewBox: '0 0 140 100',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M15 15 L125 15 L125 85 L15 85 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-square',
    name: 'Square',
    category: 'forms',
    viewBox: '0 0 120 120',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M15 15 L105 15 L105 105 L15 105 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-triangle',
    name: 'Triangle',
    category: 'forms',
    viewBox: '0 0 120 110',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 10 L110 100 L10 100 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-diamond',
    name: 'Diamond',
    category: 'forms',
    viewBox: '0 0 120 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 10 L110 70 L60 130 L10 70 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-arch',
    name: 'Arch',
    category: 'forms',
    viewBox: '0 0 120 140',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M15 130 L15 55 C15 25 35 10 60 10 C85 10 105 25 105 55 L105 130 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-hexagon',
    name: 'Hexagon',
    category: 'forms',
    viewBox: '0 0 120 110',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M60 8 L108 30 L108 78 L60 100 L12 78 L12 30 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  // ---- ORGANIC FORMS ----

  {
    id: 'form-leaf',
    name: 'Leaf',
    category: 'forms',
    viewBox: '0 0 100 160',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M50 10 C80 30 95 70 90 110 C85 135 65 150 50 150 C35 150 15 135 10 110 C5 70 20 30 50 10 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-cloud',
    name: 'Cloud',
    category: 'forms',
    viewBox: '0 0 180 100',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M30 70 C10 70 5 55 15 45 C10 30 25 20 40 25 C45 10 65 8 75 20 C85 10 105 10 110 25 C130 15 150 25 145 45 C160 48 165 65 150 72 C150 80 130 82 120 78 C110 88 85 90 75 80 C60 90 40 85 30 70 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-wave-band',
    name: 'Wave Band',
    category: 'forms',
    viewBox: '0 0 200 80',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M0 45 Q25 15 50 40 Q75 65 100 40 Q125 15 150 40 Q175 65 200 40 L200 70 Q175 95 150 70 Q125 45 100 70 Q75 95 50 70 Q25 45 0 70 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

  {
    id: 'form-pebble',
    name: 'Pebble',
    category: 'forms',
    viewBox: '0 0 130 110',
    suggestedLayer: 'midground',
    colorZones: [
      { id: 'body', defaultPaletteSlot: 0 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M65 12 C95 15 120 35 118 58 C116 78 98 98 70 98 C42 98 15 82 12 58 C9 34 35 9 65 12 Z', type: 'fill', zone: 'body' },
        ],
      },
    ],
  },

];
