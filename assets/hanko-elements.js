// ============================================================
//  MOKURI — Hanko (判子) Stamp Elements
//  Traditional seal stamps for signing compositions
// ============================================================

const MOKURI_HANKO_ELEMENTS = [
  // ── Circle Seal ──────────────────────────────────────────
  {
    id: 'hanko-circle',
    name: 'Circle Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 60 60',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M30 3 A27 27 0 1 1 29.99 3 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M30 3 A27 27 0 1 1 29.99 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M30 6 A24 24 0 1 1 29.99 6 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M30 3 A27 27 0 1 1 29.99 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M30 6 A24 24 0 1 1 29.99 6 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
          { d: 'M30 9 A21 21 0 1 1 29.99 9 Z', type: 'stroke', zone: 'seal', strokeWidth: 0.5 },
          { d: 'M20 20 L25 18 L30 22 L35 17 L40 21', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M18 30 L23 28 L28 33 L33 27 L38 32 L42 29', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M22 40 L27 38 L32 42 L37 37 L40 40', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Square Seal ──────────────────────────────────────────
  {
    id: 'hanko-square',
    name: 'Square Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 60 60',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M5 5 H55 V55 H5 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M5 5 H55 V55 H5 Z', type: 'fill', zone: 'seal' },
          { d: 'M8 8 H52 V52 H8 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M5 5 H55 V55 H5 Z', type: 'fill', zone: 'seal' },
          { d: 'M8 8 H52 V52 H8 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
          { d: 'M12 12 H48 V48 H12 Z', type: 'stroke', zone: 'seal', strokeWidth: 0.5 },
          { d: 'M20 18 L25 16 L30 22 L35 15 L40 20', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M16 30 L22 28 L28 34 L34 27 L40 32 L44 29', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M20 42 L26 39 L32 44 L38 38 L42 42', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Gourd (Hyotan) Seal ──────────────────────────────────
  {
    id: 'hanko-gourd',
    name: 'Gourd Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 50 70',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M25 3 C35 3 40 10 40 18 C40 24 35 28 32 30 C37 33 42 38 42 48 C42 60 35 67 25 67 C15 67 8 60 8 48 C8 38 13 33 18 30 C15 28 10 24 10 18 C10 10 15 3 25 3 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M25 3 C35 3 40 10 40 18 C40 24 35 28 32 30 C37 33 42 38 42 48 C42 60 35 67 25 67 C15 67 8 60 8 48 C8 38 13 33 18 30 C15 28 10 24 10 18 C10 10 15 3 25 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M25 6 C33 6 37 12 37 18 C37 23 33 26 30 28 C29 29 28 30 25 30 C22 30 21 29 20 28 C17 26 13 23 13 18 C13 12 17 6 25 6 Z', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M25 33 C33 33 39 39 39 48 C39 57 33 64 25 64 C17 64 11 57 11 48 C11 39 17 33 25 33 Z', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M25 3 C35 3 40 10 40 18 C40 24 35 28 32 30 C37 33 42 38 42 48 C42 60 35 67 25 67 C15 67 8 60 8 48 C8 38 13 33 18 30 C15 28 10 24 10 18 C10 10 15 3 25 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M25 6 C33 6 37 12 37 18 C37 23 33 26 30 28', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M20 28 C17 26 13 23 13 18 C13 12 17 6 25 6', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M25 33 C33 33 39 39 39 48 C39 57 33 64 25 64 C17 64 11 57 11 48 C11 39 17 33 25 33', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M18 14 L22 12 L25 16 L28 11 L32 15', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M17 44 L21 42 L25 47 L29 41 L33 45', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M19 54 L24 52 L28 56 L32 51', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Oval Seal ────────────────────────────────────────────
  {
    id: 'hanko-oval',
    name: 'Oval Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 50 70',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M25 3 C40 3 47 18 47 35 C47 52 40 67 25 67 C10 67 3 52 3 35 C3 18 10 3 25 3 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M25 3 C40 3 47 18 47 35 C47 52 40 67 25 67 C10 67 3 52 3 35 C3 18 10 3 25 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M25 7 C37 7 43 20 43 35 C43 50 37 63 25 63 C13 63 7 50 7 35 C7 20 13 7 25 7 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M25 3 C40 3 47 18 47 35 C47 52 40 67 25 67 C10 67 3 52 3 35 C3 18 10 3 25 3 Z', type: 'fill', zone: 'seal' },
          { d: 'M25 7 C37 7 43 20 43 35 C43 50 37 63 25 63 C13 63 7 50 7 35 C7 20 13 7 25 7 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
          { d: 'M25 11 C34 11 39 22 39 35 C39 48 34 59 25 59 C16 59 11 48 11 35 C11 22 16 11 25 11 Z', type: 'stroke', zone: 'seal', strokeWidth: 0.5 },
          { d: 'M17 22 L21 20 L25 25 L29 19 L33 23', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M15 35 L20 32 L25 37 L30 31 L35 36', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M17 48 L22 45 L27 50 L32 44 L35 48', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Diamond Seal ─────────────────────────────────────────
  {
    id: 'hanko-diamond',
    name: 'Diamond Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 60 60',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M30 3 L57 30 L30 57 L3 30 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M30 3 L57 30 L30 57 L3 30 Z', type: 'fill', zone: 'seal' },
          { d: 'M30 8 L52 30 L30 52 L8 30 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M30 3 L57 30 L30 57 L3 30 Z', type: 'fill', zone: 'seal' },
          { d: 'M30 8 L52 30 L30 52 L8 30 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.5 },
          { d: 'M30 13 L47 30 L30 47 L13 30 Z', type: 'stroke', zone: 'seal', strokeWidth: 0.5 },
          { d: 'M22 25 L26 22 L30 27 L34 21 L38 26', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M20 33 L25 30 L30 35 L35 29 L40 34', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Cloud Seal ───────────────────────────────────────────
  {
    id: 'hanko-cloud',
    name: 'Cloud Seal',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 70 55',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M20 10 C10 10 3 18 5 26 C2 30 3 38 10 40 C8 46 14 52 22 50 C26 54 34 54 40 50 C46 52 54 48 55 42 C62 40 67 34 65 27 C68 22 64 14 56 12 C54 6 46 3 38 6 C34 4 26 4 20 10 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M20 10 C10 10 3 18 5 26 C2 30 3 38 10 40 C8 46 14 52 22 50 C26 54 34 54 40 50 C46 52 54 48 55 42 C62 40 67 34 65 27 C68 22 64 14 56 12 C54 6 46 3 38 6 C34 4 26 4 20 10 Z', type: 'fill', zone: 'seal' },
          { d: 'M22 14 C14 14 8 20 9 26 C7 30 8 36 13 37 C12 42 16 47 22 46 C26 49 32 49 37 46 C42 48 48 45 49 40 C54 38 58 33 57 28 C59 24 56 18 50 16 C48 11 42 8 36 10 C33 8 28 8 22 14 Z', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M20 10 C10 10 3 18 5 26 C2 30 3 38 10 40 C8 46 14 52 22 50 C26 54 34 54 40 50 C46 52 54 48 55 42 C62 40 67 34 65 27 C68 22 64 14 56 12 C54 6 46 3 38 6 C34 4 26 4 20 10 Z', type: 'fill', zone: 'seal' },
          { d: 'M22 14 C14 14 8 20 9 26 C7 30 8 36 13 37 C12 42 16 47 22 46 C26 49 32 49 37 46 C42 48 48 45 49 40 C54 38 58 33 57 28 C59 24 56 18 50 16 C48 11 42 8 36 10 C33 8 28 8 22 14 Z', type: 'stroke', zone: 'seal', strokeWidth: 1 },
          { d: 'M22 22 L27 20 L32 25 L37 19 L42 23 L47 20', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M18 32 L24 29 L30 34 L36 28 L42 33 L48 30', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M24 40 L29 38 L34 42 L39 37 L44 40', type: 'stroke', zone: 'seal', strokeWidth: 1 },
        ],
      },
    ],
  },

  // ── Mokuri Seal (墨) ─────────────────────────────────────
  {
    id: 'hanko-mokuri',
    name: 'Mokuri 墨',
    category: 'hanko',
    pack: 'core',
    viewBox: '0 0 60 60',
    suggestedLayer: 'foreground',
    hanko: true,
    colorZones: [
      { id: 'seal', defaultPaletteSlot: 2 },
      { id: 'char', defaultPaletteSlot: 4 },
    ],
    carveLevels: [
      {
        name: 'block',
        paths: [
          { d: 'M6 6 Q6 4 8 4 L52 4 Q54 4 54 6 L54 54 Q54 56 52 56 L8 56 Q6 56 6 54 Z', type: 'fill', zone: 'seal' },
        ],
      },
      {
        name: 'shape',
        paths: [
          { d: 'M6 6 Q6 4 8 4 L52 4 Q54 4 54 6 L54 54 Q54 56 52 56 L8 56 Q6 56 6 54 Z', type: 'fill', zone: 'seal' },
          { d: 'M10 9 L50 9 L50 51 L10 51 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
        ],
      },
      {
        name: 'detail',
        paths: [
          { d: 'M6 6 Q6 4 8 4 L52 4 Q54 4 54 6 L54 54 Q54 56 52 56 L8 56 Q6 56 6 54 Z', type: 'fill', zone: 'seal' },
          { d: 'M10 9 L50 9 L50 51 L10 51 Z', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          // 墨 character — font-traced outlines from Yu Gothic Bold
          { d: 'M19.5,32.4 L15.3,32.5 Q15.1,32.5 15.0,32.4 Q15.0,32.3 15.0,32.1 L15.0,30.3 Q15.0,30.0 15.0,30.0 Q15.1,29.9 15.3,29.9 L19.5,30.0 L28.3,30.0 L28.3,28.6 L22.2,28.6 L17.6,28.7 Q17.2,28.7 17.2,28.3 L17.2,26.6 Q17.2,26.3 17.3,26.3 Q17.4,26.2 17.6,26.2 L22.2,26.3 L28.3,26.3 L28.3,24.8 L23.9,24.8 L19.2,24.9 Q18.9,24.9 18.9,24.8 Q18.8,24.8 18.8,24.5 L18.9,21.8 L18.9,18.5 L18.8,15.8 Q18.8,15.5 18.9,15.5 Q18.9,15.4 19.2,15.4 L23.9,15.5 L36.0,15.5 L40.7,15.4 Q41.0,15.4 41.1,15.5 Q41.1,15.6 41.1,15.8 L41.1,18.5 L41.1,21.8 L41.1,24.5 Q41.1,24.8 41.1,24.8 Q41.0,24.9 40.7,24.9 L36.0,24.8 L31.6,24.8 L31.6,26.3 L37.8,26.3 L42.4,26.2 Q42.6,26.2 42.7,26.3 Q42.7,26.4 42.7,26.6 L42.7,28.3 Q42.7,28.7 42.4,28.7 L37.8,28.6 L31.6,28.6 L31.6,30.0 L40.5,30.0 L44.7,29.9 Q44.9,29.9 45.0,30.0 Q45.0,30.1 45.0,30.3 L45.0,32.1 Q45.0,32.3 44.9,32.5 Q44.9,32.5 44.7,32.5 L40.5,32.4 Z M37.8,22.8 L37.8,21.2 L31.6,21.2 L31.6,22.8 Z M37.8,17.7 L31.6,17.7 L31.6,19.2 L37.8,19.2 Z M22.2,22.8 L28.3,22.8 L28.3,21.2 L22.2,21.2 Z M22.2,19.2 L28.3,19.2 L28.3,17.7 L22.2,17.7 Z M20.1,44.5 L15.8,44.6 Q15.5,44.6 15.5,44.5 Q15.4,44.4 15.4,44.2 L15.4,42.2 Q15.4,41.9 15.5,41.8 Q15.5,41.8 15.8,41.8 L20.1,41.9 L28.3,41.9 L28.3,40.1 L24.0,40.1 L19.3,40.1 Q19.0,40.1 19.0,40.1 Q18.9,40.0 18.9,39.8 L18.9,38.0 Q18.9,37.7 19.0,37.7 Q19.1,37.6 19.3,37.6 L24.0,37.7 L28.3,37.7 Q28.3,36.3 28.1,35.0 Q29.8,35.1 31.4,35.3 Q31.9,35.3 31.9,35.6 Q31.9,35.7 31.7,36.1 Q31.6,36.5 31.6,37.7 L36.1,37.7 L40.8,37.6 Q41.0,37.6 41.1,37.7 Q41.1,37.8 41.1,38.0 L41.1,39.8 Q41.1,40.0 41.0,40.1 Q41.0,40.1 40.8,40.1 L36.1,40.1 L31.6,40.1 L31.6,41.9 L39.9,41.9 L44.2,41.8 Q44.5,41.8 44.6,41.9 Q44.6,42.0 44.6,42.2 L44.6,44.2 Q44.6,44.5 44.5,44.5 Q44.5,44.6 44.2,44.6 L39.9,44.5 Z M19.6,32.7 L21.4,33.6 Q21.7,33.8 21.7,34.0 Q21.7,34.1 21.6,34.2 Q20.1,36.2 18.0,38.0 Q17.8,38.1 17.7,38.1 Q17.5,38.1 17.2,37.9 L15.5,36.5 Q15.2,36.3 15.2,36.2 Q15.2,36.1 15.5,35.9 Q17.5,34.6 18.8,32.8 Q19.0,32.5 19.1,32.5 Q19.3,32.5 19.6,32.7 Z M41.0,32.7 Q42.6,34.1 44.2,36.0 Q44.4,36.2 44.4,36.3 Q44.4,36.4 44.0,36.6 L42.0,37.8 Q41.8,38.0 41.6,38.0 Q41.5,38.0 41.3,37.7 Q39.8,35.5 38.3,34.2 Q38.1,34.0 38.1,33.9 Q38.1,33.7 38.4,33.6 L40.2,32.7 Q40.6,32.5 40.7,32.5 Q40.8,32.5 41.0,32.7 Z M24.6,33.4 L26.6,33.1 Q26.8,33.1 26.8,33.1 Q27.1,33.1 27.2,33.4 Q27.6,34.7 27.8,36.0 Q27.9,36.1 27.9,36.2 Q27.9,36.4 27.4,36.5 L25.3,36.9 Q25.1,36.9 25.0,36.9 Q24.8,36.9 24.7,36.5 Q24.6,35.2 24.2,33.9 Q24.2,33.7 24.2,33.7 Q24.2,33.5 24.6,33.4 Z M35.4,36.2 L33.3,36.7 Q33.1,36.8 33.0,36.8 Q32.8,36.8 32.7,36.4 Q32.4,35.4 31.6,33.8 Q31.5,33.7 31.5,33.6 Q31.5,33.5 31.9,33.4 L33.8,33.0 Q33.9,32.9 34.0,32.9 Q34.2,32.9 34.4,33.2 Q35.2,34.3 35.8,35.8 Q35.8,35.9 35.8,36.0 Q35.8,36.1 35.4,36.2 Z', type: 'fill', zone: 'char' },
        ],
      },
    ],
  },
];
