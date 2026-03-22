/**
 * Kacho-e Collection Pack Manifest
 * Birds and flowers in the intimate kacho-e tradition
 */

// Define palettes for the Kacho-e collection
const MOKURI_KACHOE_PALETTES = {
  haru: {
    name: 'Haru 春',
    nameJa: '春',
    pack: 'kacho-e',
    colors: ['#FFB3D9', '#A8D5A8', '#B3D9FF', '#FFB3C6', '#D4E8A8']
  },
  natsu: {
    name: 'Natsu 夏',
    nameJa: '夏',
    pack: 'kacho-e',
    colors: ['#1A365D', '#E88BA8', '#2D6A4F', '#4A90E2', '#D4A574']
  }
};

// Define gallery presets for the Kacho-e collection
const MOKURI_KACHOE_PRESETS = [
  {
    pack: 'kacho-e',
    compositionName: 'Heron at Lotus Pond',
    paperW: 500,
    paperH: 650,
    paletteId: 'natsu',
    elements: [
      { defId: 'lotus', x: 180, y: 380, scale: 1.6, rotation: 0, carveLevel: 2 },
      { defId: 'heron-standing', x: 280, y: 280, scale: 1.3, rotation: -5, carveLevel: 2 },
      { defId: 'egret', x: 420, y: 150, scale: 0.8, rotation: 15, carveLevel: 1 }
    ],
    sky: 'day',
    ground: 'water',
    horizon: 0.55,
    mist: 1
  },
  {
    pack: 'kacho-e',
    compositionName: 'Garden in Bloom',
    paperW: 680,
    paperH: 480,
    paletteId: 'haru',
    elements: [
      { defId: 'peony', x: 150, y: 280, scale: 1.5, rotation: 0, carveLevel: 2 },
      { defId: 'morning-glory', x: 420, y: 180, scale: 1.2, rotation: -10, carveLevel: 2 },
      { defId: 'bush-warbler', x: 550, y: 120, scale: 0.9, rotation: 25, carveLevel: 1 }
    ],
    sky: 'dawn',
    ground: 'grass',
    horizon: 0.5,
    mist: 0.5
  }
];

// Register the Kacho-e pack
registerPack({
  id: 'kacho-e',
  name: 'Kacho-e Collection',
  nameJa: '花鳥画',
  icon: '花',
  description: 'Birds and flowers in the intimate kacho-e tradition',
  elementIds: ['heron-standing', 'bush-warbler', 'swallow-flight', 'kingfisher', 'egret', 'peony', 'lotus', 'morning-glory', 'wisteria'],
  paletteIds: ['haru', 'natsu'],
  presetIds: null,
  journeys: [
    {
      id: 'first-kacho',
      title: 'Your First Kacho-e',
      titleJa: '初花鳥',
      prompt: 'A heron stands in a lotus pond at dawn',
      promptType: 'scene',
      startingPreset: 0,
      featureHints: ['place', 'palette', 'carve', 'print'],
      suggestedNext: 'seasonal-pair',
    },
    {
      id: 'seasonal-pair',
      title: 'Seasonal Pairing',
      titleJa: '季節の組',
      prompt: 'A bird meets its seasonal flower',
      promptType: 'scene',
      startingPreset: 1,
      featureHints: ['color-zones', 'bokashi', 'atmosphere'],
      suggestedNext: null,
    },
  ],
  prompts: [
    { id: 'ke-heron-rain', text: 'A heron in the rain', type: 'scene' },
    { id: 'ke-moonlit-wisteria', text: 'Wisteria by moonlight', type: 'scene' },
    { id: 'ke-kingfisher-dive', text: 'Kingfisher above the water', type: 'scene' },
    { id: 'ke-morning-dew', text: 'Morning glory with dew drops', type: 'scene' },
    { id: 'ke-swallows-spring', text: 'Swallows returning in spring', type: 'scene' },
    { id: 'ke-peony-wind', text: 'Peonies swaying in wind', type: 'scene' },
    { id: 'ke-one-color', text: 'Use only one color for everything', type: 'constraint' },
    { id: 'ke-no-ground', text: 'A bird with no ground beneath', type: 'constraint' },
    { id: 'ke-night-garden', text: 'Transform a garden scene to night', type: 'transformation' },
    { id: 'ke-close-intimate', text: 'The closest possible view', type: 'emotion' },
  ],
});
