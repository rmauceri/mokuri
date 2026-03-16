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
          // 墨 = 黒 (black) over 土 (earth)
          // 黒 = 里 (village) over 灬 (fire dots)
          // ── 里 upper box (田-like) ──
          { d: 'M19 12 L30 11.5 L41 12', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          { d: 'M20 12 L19.5 16.5 L20 21', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M40 12 L40.5 16.5 L40 21', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M20 16.5 L30 17 L40 16.5', type: 'stroke', zone: 'seal', strokeWidth: 1.0 },
          { d: 'M30 12 L30 21', type: 'stroke', zone: 'seal', strokeWidth: 1.0 },
          // ── 里 lower box ──
          { d: 'M20 21 L30 21.5 L40 21', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M20 21 L19.5 25 L20 28.5', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M40 21 L40.5 25 L40 28.5', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M20 25 L30 25.5 L40 25', type: 'stroke', zone: 'seal', strokeWidth: 1.0 },
          { d: 'M30 21 L30 28.5', type: 'stroke', zone: 'seal', strokeWidth: 1.0 },
          { d: 'M18 28.5 L30 29 L42 28.5', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          // ── 灬 (four fire dots) ──
          { d: 'M18 33 Q19 35 21 33.5', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          { d: 'M26 33.5 Q27 35.5 29 34', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          { d: 'M32 33.5 Q33 35.5 35 34', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          { d: 'M39 33 Q40 35 42 33.5', type: 'stroke', zone: 'seal', strokeWidth: 1.3 },
          // ── 土 (earth radical) ──
          { d: 'M30 37 L30.5 45', type: 'stroke', zone: 'seal', strokeWidth: 1.2 },
          { d: 'M22 41 L30 41.5 L38 41', type: 'stroke', zone: 'seal', strokeWidth: 1.1 },
          { d: 'M16 47 L24 47.5 L30 47 L36 47.5 L44 47', type: 'stroke', zone: 'seal', strokeWidth: 1.4 },
        ],
      },
    ],
  },
];
