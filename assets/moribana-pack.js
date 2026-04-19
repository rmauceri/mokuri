/**
 * Moribana Style Pack Manifest
 * Ikebana-inspired still-life — vessels, refined florals, structural branches
 */

// Palettes inspired by Japanese ceramic glazes
const MOKURI_MORIBANA_PALETTES = {
  seiji: {
    name: 'Seiji 青磁',
    nameJa: '青磁',
    pack: 'moribana',
    colors: ['#4A6B5A', '#F5EFE0', '#8BA888', '#D4A0A0', '#3D3D3D']
  },
  shino: {
    name: 'Shino 志野',
    nameJa: '志野',
    pack: 'moribana',
    colors: ['#C17845', '#F0E6D3', '#6B7F4A', '#8B5E6B', '#5C5047']
  },
  raku: {
    name: 'Raku 楽',
    nameJa: '楽',
    pack: 'moribana',
    colors: ['#1A1A1A', '#C23B3B', '#2D5A3D', '#C9A84C', '#F0E8D8']
  }
};

// Register the Moribana pack
registerPack({
  id: 'moribana',
  name: 'Moribana Collection',
  nameJa: '盛花',
  icon: '器',
  description: 'Ikebana-inspired still-life — vessels, refined florals, structural branches',
  affinity: ['flora', 'vessel', 'minimal', 'structural', 'organic', 'intimate'],
  elementIds: [
    'vessel-suiban', 'vessel-oval', 'vessel-rectangle', 'vessel-bamboo', 'vessel-tsubo',
    'blossum-kiku', 'blossum-ran', 'blossum-suisen',
    'branch-ume-crooked', 'matsu-branch-upright',
    'tsubaki-single', 'tsubaki-cluster'
  ],
  categoryOrder: ['objects', 'flora'],
  paletteIds: ['seiji', 'shino', 'raku'],
  presetIds: null,
  atmospherePresets: [
    { id: 'mb-clean-paper', name: 'Clean Paper', nameJa: '白紙', background: 'none', foreground: 'none', horizon: 0.62, mist: 0, smoothHorizon: true },
    { id: 'mb-warm-studio', name: 'Warm Studio', nameJa: '暖室', background: 'warm', foreground: 'sand', horizon: 0.50, mist: 0, smoothHorizon: true },
    { id: 'mb-cool-studio', name: 'Cool Studio', nameJa: '冷室', background: 'overcast', foreground: 'stone', horizon: 0.50, mist: 0, smoothHorizon: true },
    { id: 'mb-display-niche', name: 'Display Niche', nameJa: '床間', background: 'night', foreground: 'water', horizon: 0.50, mist: 0, smoothHorizon: true },
  ],
  journeys: [
    {
      id: 'hajimete-ikebana',
      title: 'Your First Arrangement',
      titleJa: '初めて生花',
      prompt: 'A single flower rises from a shallow vessel',
      promptType: 'scene',
      startingPreset: 0,
      featureHints: ['place', 'palette', 'carve', 'print'],
      suggestedNext: 'kisetsu-no-wa',
    },
    {
      id: 'kisetsu-no-wa',
      title: 'Seasonal Harmony',
      titleJa: '季節の和',
      prompt: 'Combine elements that share a season\'s spirit',
      promptType: 'scene',
      startingPreset: 1,
      featureHints: ['color-zones', 'bokashi', 'atmosphere'],
      suggestedNext: null,
    },
  ],
  prompts: [
    { id: 'mb-branch-basin', text: 'A single branch reaches upward from a shallow basin', type: 'scene' },
    { id: 'mb-winter-narcissus', text: 'Winter narcissus in morning light', type: 'scene' },
    { id: 'mb-imperial-kiku', text: 'Chrysanthemums arranged for the emperor\'s viewing', type: 'scene' },
    { id: 'mb-orchid-cascade', text: 'An orchid spray cascading from a bamboo vase', type: 'scene' },
    { id: 'mb-fallen-camellia', text: 'Camellias fallen beside their vessel', type: 'scene' },
    { id: 'mb-no-flowers', text: 'An arrangement using no flowers', type: 'constraint' },
    { id: 'mb-three-seasons', text: 'Three elements, three seasons', type: 'constraint' },
    { id: 'mb-spring-to-winter', text: 'Transform a spring arrangement into winter', type: 'transformation' },
    { id: 'mb-ma-space', text: 'The space between the stems', type: 'emotion' },
    { id: 'mb-vessel-waiting', text: 'A vessel, waiting', type: 'emotion' },
  ],
});
