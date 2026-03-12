const fs = require('fs');
const path = require('path');

// Load all element files
const elementFiles = [
  { file: 'C:\\Users\\rmauceri\\mokuri\\elements.js', arrayName: 'MOKURI_ELEMENTS' },
  { file: 'C:\\Users\\rmauceri\\mokuri\\extended-elements.js', arrayName: 'MOKURI_CORE_ELEMENTS' },
  { file: 'C:\\Users\\rmauceri\\mokuri\\fauna-elements.js', arrayName: 'MOKURI_FAUNA_ELEMENTS' },
  { file: 'C:\\Users\\rmauceri\\mokuri\\scene-elements.js', arrayName: 'MOKURI_SCENE_ELEMENTS' },
  { file: 'C:\\Users\\rmauceri\\mokuri\\forms-elements.js', arrayName: 'MOKURI_FORMS_ELEMENTS' },
  { file: 'C:\\Users\\rmauceri\\mokuri\\hanko-elements.js', arrayName: 'MOKURI_HANKO_ELEMENTS' }
];

let allElements = [];

elementFiles.forEach(({ file, arrayName }) => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Create a context object to hold the array
    const context = {};
    
    // Execute the file to populate the array
    eval(content);
    
    // Get the array from the global scope or context
    const varName = arrayName;
    const elements = eval(varName);
    
    // Extract needed fields
    if (Array.isArray(elements)) {
      elements.forEach(el => {
        if (el.id && el.name && el.category && el.suggestedLayer) {
          allElements.push({
            file: path.basename(file),
            id: el.id,
            name: el.name,
            category: el.category,
            suggestedLayer: el.suggestedLayer
          });
        }
      });
    }
  } catch (e) {
    console.error('Error parsing', file, ':', e.message);
  }
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
