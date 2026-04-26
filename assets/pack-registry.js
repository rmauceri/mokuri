// Mokuri — Pack Registry
// Central registry for content packs. Each pack bundles elements, palettes,
// presets, creative journeys, and prompts into a themed collection.
//
// Core pack is registered here. Expansion packs register themselves by
// calling registerPack() from their own JS files.

const MOKURI_PACKS = [];

function registerPack(manifest) {
  if (!manifest || !manifest.id) {
    console.warn('Mokuri: invalid pack manifest (missing id)');
    return;
  }
  if (MOKURI_PACKS.some(p => p.id === manifest.id)) {
    console.warn('Mokuri: duplicate pack id "' + manifest.id + '"');
    return;
  }
  MOKURI_PACKS.push(manifest);
}

function getPackById(id) {
  return MOKURI_PACKS.find(p => p.id === id) || null;
}

function getAllPacks() {
  return MOKURI_PACKS.slice();
}

function getPackForElement(defId) {
  for (const pack of MOKURI_PACKS) {
    if (pack.elementIds && pack.elementIds.includes(defId)) return pack;
  }
  return getPackById('core');
}

function getPackPrompts(packId) {
  const pack = packId ? getPackById(packId) : null;
  if (pack) return pack.prompts || [];
  return MOKURI_PACKS.flatMap(p => p.prompts || []);
}

function getPackJourneys(packId) {
  const pack = packId ? getPackById(packId) : null;
  if (pack) return pack.journeys || [];
  return MOKURI_PACKS.flatMap(p => p.journeys || []);
}

function getPackAtmospherePresets(packId) {
  const pack = packId ? getPackById(packId) : null;
  if (pack) return pack.atmospherePresets || [];
  return MOKURI_PACKS.flatMap(p => p.atmospherePresets || []);
}

function getAllAtmospherePresets() {
  return MOKURI_PACKS.flatMap(p => p.atmospherePresets || []);
}

/**
 * Get elements with affinity to a pack, sorted by match strength.
 * Returns pack's own elements first, then core elements whose tags
 * overlap with the pack's affinity list (highest overlap first).
 * Elements with no tag overlap are excluded from the affinity set.
 * @param {string} packId - Pack to compute affinity for
 * @param {Array} allElements - Full MOKURI_ELEMENTS array
 * @returns {{ featured: Array, rest: Array }} featured = pack + affinity matches; rest = everything else
 */
function getAffinityElements(packId, allElements) {
  const pack = getPackById(packId);
  if (!pack) return { featured: allElements.slice(), rest: [] };

  const packElIds = new Set(pack.elementIds || []);
  const affinity = pack.affinity || [];

  const featured = [];
  const rest = [];

  // Pack's own elements first (preserve original order)
  const ownEls = [];
  const coreEls = [];
  for (const el of allElements) {
    if (packElIds.has(el.id)) {
      ownEls.push(el);
    } else if (!el.pack || el.pack === 'core' || el.pack === packId) {
      // Only include core elements and this pack's own — skip other packs' elements
      coreEls.push(el);
    }
  }

  // Score core elements by tag overlap with pack affinity
  const scored = coreEls.map(el => {
    const tags = el.tags || [];
    const overlap = tags.filter(t => affinity.includes(t)).length;
    return { el, overlap };
  });

  // Sort by overlap descending
  scored.sort((a, b) => b.overlap - a.overlap);

  // Featured: own elements + core with 2+ tag overlap (minimum affinity threshold)
  // Custom elements (e.g. custom hanko) always featured
  featured.push(...ownEls);
  for (const { el, overlap } of scored) {
    if (overlap >= 2 || el.custom) {
      featured.push(el);
    } else {
      rest.push(el);
    }
  }

  return { featured, rest };
}

// --- Core Pack ---

registerPack({
  id: 'core',
  name: 'Core Collection',
  nameJa: '基本',
  icon: '墨',
  description: 'Landscapes, flora, fauna, figures, and essential tools',
  affinity: ['landscape', 'structural', 'atmospheric', 'figure', 'water'],
  categoryOrder: ['landscape', 'objects', 'flora', 'fauna', 'figures'],
  elementIds: [
    'mountain-distant', 'mountain-near', 'mountain-fuji-peak', 'rolling-hills',
    'farmland', 'tranquil-pond', 'flowing-stream', 'gentle-waves',
    'waterfall', 'full-moon', 'cloud-bank', 'pine-tree',
    'cherry-branch', 'crane', 'torii-gate', 'twisted-pine',
    'weeping-willow', 'sakura-blossom', 'ume-blossom', 'chrysanthemum',
    'susuki-grass', 'asanoha-star', 'seigaiha-tile', 'sensu-fan',
    'paper-lantern', 'lantern-kasuga-premium', 'lantern-yukimi-premium', 'lantern-oribe-premium',
    'fishing-boat', 'pine-bough', 'woodgrain-knot', 'gouge-mark',
    'bare-branch', 'koi', 'dragonfly', 'turtle',
    'crane-flying', 'rabbit', 'frog', 'butterfly',
    'sparrow', 'koi-leaping', 'koi-overhead', 'crane-standing',
    'crane-landing', 'bamboo-grove', 'rock-formation', 'temple-roof',
    'distant-village', 'stone-path', 'wooden-bridge', 'rain-curtain',
    'snow-fall', 'cloud-wisp', 'maple-branch', 'iris-cluster',
    'pagoda', 'tea-house', 'bamboo-fence', 'farmhouse',
    'shore-waves', 'river-rapids', 'water-ripples', 'form-circle',
    'form-oval', 'form-rectangle', 'form-square', 'form-triangle',
    'form-diamond', 'form-arch', 'form-hexagon', 'form-leaf',
    'form-cloud', 'form-wave-band', 'form-pebble', 'traveler',
    'umbrella-figure', 'fisherman', 'field-worker', 'two-travelers',
    'seated-figure', 'boatman', 'woman-bundle', 'hanko-circle',
    'hanko-square', 'hanko-gourd', 'hanko-oval', 'hanko-diamond',
    'hanko-cloud', 'hanko-mokuri',
  ],

  paletteIds: [
    'sumi', 'edo', 'hokusai', 'hiroshige', 'sakura',
    'aki', 'yoru', 'fuyu', 'beni', 'matcha',
  ],

  presetIds: null, // all MOKURI_GALLERY_PRESETS belong to core

  atmospherePresets: [
    { id: 'mountain-dawn', name: 'Mountain Dawn', nameJa: '山暁', background: 'dawn', foreground: 'earth', horizon: 0.55, mist: 1, smoothHorizon: false },
    { id: 'clear-day', name: 'Clear Day', nameJa: '晴昼', background: 'day', foreground: 'grass', horizon: 0.65, mist: 0, smoothHorizon: false },
    { id: 'coastal', name: 'Coastal', nameJa: '海辺', background: 'day', foreground: 'water', horizon: 0.38, mist: 0, smoothHorizon: false },
    { id: 'golden-hour', name: 'Golden Hour', nameJa: '夕映', background: 'dusk', foreground: 'earth', horizon: 0.62, mist: 0, smoothHorizon: false },
    { id: 'snowscape', name: 'Snowscape', nameJa: '雪景', background: 'overcast', foreground: 'snow', horizon: 0.55, mist: 2, smoothHorizon: false },
    { id: 'open-paper', name: 'Open Paper', nameJa: '白紙', background: 'none', foreground: 'none', horizon: 0.62, mist: 0, smoothHorizon: false },
  ],

  journeys: [
    {
      id: 'first-print',
      title: 'Your First Print',
      titleJa: '初摺',
      prompt: 'A quiet mountain morning',
      promptType: 'scene',
      startingPreset: 0,
      featureHints: ['move', 'resize', 'carve', 'carve-level', 'palette', 'print', 'pull-print'],
      suggestedNext: 'evening-scene',
    },
    {
      id: 'evening-scene',
      title: 'Evening Scene',
      titleJa: '夕景',
      prompt: 'A calm evening by the water',
      promptType: 'scene',
      startingPreset: 1,
      featureHints: ['open-ink', 'atmosphere-bg', 'print-2', 'edit-title', 'pull-print', 'open-gallery', 'exit-gallery'],
      completionMessage: 'Visit the Workshop to create new or work on existing prints',
      suggestedNext: null,
    },
    {
      id: 'weather-study',
      title: 'Weather Study',
      titleJa: '天候',
      prompt: 'Rain on a quiet village',
      promptType: 'scene',
      startingPreset: null,
      featureHints: ['atmosphere', 'elements', 'carve-pattern'],
      suggestedNext: null,
    },
  ],

  prompts: [
    { id: 'misty-mountains', text: 'Misty mountains at dawn', type: 'scene' },
    { id: 'ocean-at-night', text: 'The ocean at night', type: 'scene' },
    { id: 'spring-blossoms', text: 'Spring blossoms in the wind', type: 'scene' },
    { id: 'snow-village', text: 'A village after snowfall', type: 'scene' },
    { id: 'moonlit-water', text: 'Moonlight on still water', type: 'scene' },
    { id: 'calm-evening', text: 'A calm evening', type: 'emotion' },
    { id: 'solitude', text: 'Solitude', type: 'emotion' },
    { id: 'anticipation', text: 'The moment before rain', type: 'emotion' },
    { id: 'two-colors', text: 'Only two colors', type: 'constraint' },
    { id: 'three-elements', text: 'Tell a story with three elements', type: 'constraint' },
    { id: 'no-ground', text: 'A scene without ground', type: 'constraint' },
    { id: 'turn-night', text: 'Turn this into night', type: 'transformation' },
    { id: 'add-weather', text: 'Add weather to your scene', type: 'transformation' },
    { id: 'simplify', text: 'Remove until only the essential remains', type: 'transformation' },
  ],
});
