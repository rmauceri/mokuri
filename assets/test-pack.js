/**
 * Test Collection Pack Manifest
 * Sandbox pack for testing forge-exported elements
 */
registerPack({
  id: 'test',
  name: 'Test Collection',
  nameJa: '試作',
  icon: '🧪',
  description: 'Sandbox for testing forge-exported elements',
  affinity: [],
  elementIds: [],   // Auto-populated from MOKURI_TEST_ELEMENTS at load
  paletteIds: [],
  presetIds: null,
  atmospherePresets: [],
  journeys: [],
  prompts: [],
});

// Auto-populate elementIds from the elements file
(function() {
  if (typeof MOKURI_TEST_ELEMENTS !== 'undefined') {
    var pack = getAllPacks().find(function(p) { return p.id === 'test'; });
    if (pack) {
      pack.elementIds = MOKURI_TEST_ELEMENTS.map(function(el) { return el.id; });
    }
  }
})();
