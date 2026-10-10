// Mokuri — shared palette definitions and canonical exact-color names

const MOKURI_CORE_PALETTES = {
  sumi:      { name: 'Sumi 墨',      pack: 'core', colors: ['#1a1a1a', '#3d3d3d', '#6b6b6b', '#9e9e9e', '#c8c8c8'] },
  edo:       { name: 'Edo',           pack: 'core', colors: ['#1a3a5c', '#c23b22', '#c49a2a', '#5c7a4a', '#2a2a2a'] },
  hokusai:   { name: 'Hokusai',       pack: 'core', colors: ['#1b3a6b', '#4a90c4', '#f5f0e1', '#8b4513', '#3a3a3a'] },
  hiroshige: { name: 'Hiroshige',     pack: 'core', colors: ['#1b4872', '#8aafc4', '#b8a89a', '#5a7a6a', '#c07a7a'] },
  sakura:    { name: 'Sakura 桜',     pack: 'core', colors: ['#c47a90', '#8fb573', '#f5f0e1', '#7a5c47', '#d4a0a0'] },
  aki:       { name: 'Aki 秋',         pack: 'core', colors: ['#b33a2a', '#d4a030', '#c46a20', '#3a5c3a', '#5c3a2a'] },
  yoru:      { name: 'Yoru 夜',       pack: 'core', colors: ['#1a1a3a', '#8a8aaa', '#c4b870', '#5a4a6a', '#2a2a4a'] },
  fuyu:      { name: 'Fuyu 冬',       pack: 'core', colors: ['#4a6a7a', '#a0b8c4', '#e8e4dc', '#6a5a48', '#2a3a3a'] },
  beni:      { name: 'Beni 紅',       pack: 'core', colors: ['#b83a3a', '#d4826a', '#e8c870', '#f5efe0', '#4a3030'] },
  matcha:    { name: 'Matcha 抹茶',   pack: 'core', colors: ['#5a7a50', '#8aaa6a', '#c4b090', '#7a6a50', '#2a3028'] },
};

(function(root) {
  'use strict';

  const names = Object.freeze({
    '#1a1a1a': 'Sumi',
    '#3d3d3d': 'Charcoal',
    '#6b6b6b': 'Graphite',
    '#9e9e9e': 'Ash',
    '#c8c8c8': 'Silver',
    '#1a3a5c': 'Indigo',
    '#c23b22': 'Bengara',
    '#c49a2a': 'Ochre',
    '#5c7a4a': 'Pine',
    '#2a2a2a': 'Carbon',
    '#1b3a6b': 'Konjo',
    '#4a90c4': 'Azure',
    '#f5f0e1': 'Ivory',
    '#8b4513': 'Umber',
    '#3a3a3a': 'Lampblack',
    '#1b4872': 'Aizuri',
    '#8aafc4': 'Mist',
    '#b8a89a': 'Taupe',
    '#5a7a6a': 'Sage',
    '#c07a7a': 'Rose',
    '#c47a90': 'Sakura',
    '#8fb573': 'Willow',
    '#7a5c47': 'Bark',
    '#d4a0a0': 'Blush',
    '#b33a2a': 'Maple',
    '#d4a030': 'Gold',
    '#c46a20': 'Persimmon',
    '#3a5c3a': 'Fir',
    '#5c3a2a': 'Chestnut',
    '#1a1a3a': 'Midnight',
    '#8a8aaa': 'Lavender',
    '#c4b870': 'Moonlight',
    '#5a4a6a': 'Dusk',
    '#2a2a4a': 'Nocturne',
    '#4a6a7a': 'Steel',
    '#a0b8c4': 'Frost',
    '#e8e4dc': 'Snow',
    '#6a5a48': 'Driftwood',
    '#2a3a3a': 'Abyss',
    '#b83a3a': 'Beni',
    '#d4826a': 'Coral',
    '#e8c870': 'Straw',
    '#f5efe0': 'Cream',
    '#4a3030': 'Oxblood',
    '#5a7a50': 'Matcha',
    '#8aaa6a': 'Sprout',
    '#c4b090': 'Tatami',
    '#7a6a50': 'Hojicha',
    '#2a3028': 'Nori',
    '#a0785a': 'Clay',
    '#d4a8a0': 'Petal',
    '#7a9a6b': 'Leaf',
    '#e8d4b0': 'Pollen',
    '#8b6a7a': 'Mauve',
    '#1a365d': 'Navy',
    '#e88ba8': 'Peony',
    '#2d6a4f': 'Verdant',
    '#4a90e2': 'Cerulean',
    '#d4a574': 'Wheat',
    '#8b4a2a': 'Russet',
    '#c4862a': 'Amber',
    '#4a5a30': 'Olive',
    '#d4603a': 'Vermilion',
    '#e8c878': 'Marigold',
    '#4a5560': 'Slate',
    '#a8b8c4': 'Ice',
    '#7a6048': 'Earth',
    '#d8d4cc': 'Chalk',
    '#6a7a7a': 'Pewter',
    '#4a6b5a': 'Celadon',
    '#8ba888': 'Jade',
    '#c17845': 'Shino',
    '#f0e6d3': 'Porcelain',
    '#6b7f4a': 'Moss',
    '#8b5e6b': 'Plum',
    '#5c5047': 'Kiln',
    '#c23b3b': 'Cinnabar',
    '#2d5a3d': 'Malachite',
    '#c9a84c': 'Brass',
    '#f0e8d8': 'Bone',
  });

  function normalize(color) {
    if (typeof color !== 'string') return '';
    const value = color.trim();
    const shortHex = /^#([0-9a-f]{3})$/i.exec(value);
    if (shortHex) {
      return '#' + shortHex[1].split('').map(ch => ch + ch).join('').toLowerCase();
    }
    const fullHex = /^#([0-9a-f]{6})$/i.exec(value);
    return fullHex ? '#' + fullHex[1].toLowerCase() : value.toLowerCase();
  }

  function get(color) {
    return names[normalize(color)] || null;
  }

  function paletteName(palette, index) {
    if (!palette || !Array.isArray(palette.colors)) return null;
    return get(palette.colors[index]);
  }

  function paletteNames(palette) {
    if (!palette || !Array.isArray(palette.colors)) return [];
    return palette.colors.map(color => get(color));
  }

  function validatePalettes(palettes) {
    const missing = [];
    Object.entries(palettes || {}).forEach(([paletteId, palette]) => {
      (palette.colors || []).forEach((color, index) => {
        if (!get(color)) {
          missing.push({ paletteId, index, color: normalize(color) });
        }
      });
    });
    return missing;
  }

  function applyToPalettes(palettes) {
    Object.values(palettes || {}).forEach(palette => {
      palette.colorNames = paletteNames(palette);
    });
    return palettes;
  }

  root.MokuriColorNames = Object.freeze({
    names,
    normalize,
    get,
    paletteName,
    paletteNames,
    applyToPalettes,
    validatePalettes,
  });
})(typeof window !== 'undefined' ? window : globalThis);
