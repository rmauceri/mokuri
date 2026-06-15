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
    colors: ['#A0785A', '#D4A8A0', '#7A9A6B', '#E8D4B0', '#8B6A7A']
  },
  natsu: {
    name: 'Natsu 夏',
    nameJa: '夏',
    pack: 'kacho-e',
    colors: ['#1A365D', '#E88BA8', '#2D6A4F', '#4A90E2', '#D4A574']
  },
  aki: {
    name: 'Aki 秋',
    nameJa: '秋',
    pack: 'kacho-e',
    colors: ['#8B4A2A', '#C4862A', '#4A5A30', '#D4603A', '#E8C878']
  },
  kan: {
    name: 'Kan 寒',
    nameJa: '寒',
    pack: 'kacho-e',
    colors: ['#4A5560', '#A8B8C4', '#7A6048', '#D8D4CC', '#6A7A7A']
  }
};

// Presets: hand-curated by the user (none yet)
const MOKURI_KACHOE_PRESETS = [];

// Register the Kacho-e pack
registerPack({
  id: 'kacho-e',
  name: 'Kacho-e Collection',
  nameJa: '花鳥画',
  icon: '花',
  description: 'Birds, flowers, and insects in the intimate Kacho-e tradition',
  affinity: ['fauna', 'flora', 'intimate'],
  elementIds: ['bushwarbler-flight', 'swallow-flight', 'kingfisher-crouch', 'kingfisher-sitting', 'heron-wading', 
    'heron-hunting', 'heron-detailed-standing', 'egret-hunting', 'koi-above', 'koi-goldfish', 
    'dragonfly-perched', 'butterfly-resting', 'cicada', 'cicada-top', 'cricket', 'cricket-chirping', 'cricket-leaping', 'beetle', 'beetle-top',
    'wisteria-vine-knotted', 'morning-glory', 'morning-glory-vine', 'peony', 'peony-open', 'iris-three', 'lilypad-pair', 'lilypad-single', 
    'susuki-grass-swept', 'matsu-branch', 'lotus-cluster-tall'],
  paletteIds: ['haru', 'natsu', 'aki', 'kan'],
  presetIds: null,
  atmospherePresets: [
    { id: 'ke-spring-air', name: 'Spring Air', nameJa: '春風', background: 'sakura', foreground: 'none', horizon: 0.80, mist: 0, smoothHorizon: false },
    { id: 'ke-pond-edge', name: 'Pond Edge', nameJa: '池畔', background: 'day', foreground: 'water', horizon: 0.35, mist: 0, smoothHorizon: false },
    { id: 'ke-morning-haze', name: 'Morning Haze', nameJa: '朝霞', background: 'haze', foreground: 'grass', horizon: 0.70, mist: 1, smoothHorizon: false },
    { id: 'ke-empty-space', name: 'Empty Space', nameJa: '間', background: 'none', foreground: 'none', horizon: 0.62, mist: 0, smoothHorizon: false },
  ],
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
