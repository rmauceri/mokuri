const fs = require('fs');
const path = require('path');

function extractElementsFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Match all element objects with id, name, category, and suggestedLayer
  // Use a more sophisticated regex to capture multi-line objects
  const elementRegex = /\{\s*id:\s*['"]([^'"]+)['"]\s*,[\s\S]*?name:\s*['"]([^'"]+)['"]\s*,[\s\S]*?category:\s*['"]([^'"]+)['"]\s*,[\s\S]*?suggestedLayer:\s*['"]([^'"]+)['"]/g;
  
  const elements = [];
  let match;
  
  while ((match = elementRegex.exec(content)) !== null) {
    elements.push({
      id: match[1],
      name: match[2],
      category: match[3],
      suggestedLayer: match[4]
    });
  }
  
  return elements;
}

// Load all element files
const elementFiles = [
  'C:\\Users\\rmauceri\\mokuri\\elements.js',
  'C:\\Users\\rmauceri\\mokuri\\extended-elements.js',
  'C:\\Users\\rmauceri\\mokuri\\fauna-elements.js',
  'C:\\Users\\rmauceri\\mokuri\\scene-elements.js',
  'C:\\Users\\rmauceri\\mokuri\\forms-elements.js',
  'C:\\Users\\rmauceri\\mokuri\\hanko-elements.js'
];

let allElements = [];

elementFiles.forEach(file => {
  const elements = extractElementsFromFile(file);
  allElements = allElements.concat(elements);
});

// Sort by category and name
const grouped = {};
allElements.forEach(el => {
  if (!grouped[el.category]) {
    grouped[el.category] = [];
  }
  grouped[el.category].push(el);
});

// Display in nice format
const sortedCategories = Object.keys(grouped).sort();

console.log('');
console.log('                    MOKURI COMPLETE ELEMENT INVENTORY                              ');
console.log('\n');

sortedCategories.forEach(category => {
  const items = grouped[category].sort((a, b) => a.name.localeCompare(b.name));
  console.log(`\n${''.repeat(88)}`);
  console.log(`${category.toUpperCase()} (${items.length} elements)`);
  console.log(`${''.repeat(88)}`);
  
  items.forEach(el => {
    const idCol = el.id.padEnd(28);
    const nameCol = el.name.padEnd(32);
    const layerCol = el.suggestedLayer.padEnd(12);
    console.log(`  ${idCol}  ${nameCol}  ${layerCol}`);
  });
});

console.log(`\n${''.repeat(88)}`);
console.log(`TOTAL ELEMENTS: ${allElements.length}`);
console.log(`${''.repeat(88)}`);

console.log('\n\nSUMMARY BY CATEGORY:');
console.log(''.repeat(50));
sortedCategories.forEach(cat => {
  console.log(`  ${cat.padEnd(25)}: ${grouped[cat].length} elements`);
});
console.log(`${''.repeat(50)}`);
console.log(`  TOTAL${' '.repeat(19)}: ${allElements.length} elements`);
