const fs = require('fs');
const path = require('path');

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
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Extract array name and content
    const match = content.match(/const\s+MOKURI_\w+_ELEMENTS\s*=\s*\[([\s\S]*)\];/);
    if (!match) return;
    
    const arrayContent = '[' + match[1] + ']';
    
    // Use Function constructor to safely eval the array
    const elements = eval(arrayContent);
    
    // Extract needed fields
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
  } catch (e) {
    console.error('Error parsing', file, e.message);
  }
});

// Group by category
const grouped = {};
allElements.forEach(el => {
  if (!grouped[el.category]) {
    grouped[el.category] = [];
  }
  grouped[el.category].push(el);
});

// Sort and display
Object.keys(grouped).sort().forEach(category => {
  console.log(`\n=== ${category.toUpperCase()} ===`);
  grouped[category].sort((a, b) => a.name.localeCompare(b.name)).forEach(el => {
    console.log(`  ${el.id.padEnd(30)} | ${el.name.padEnd(30)} | ${el.suggestedLayer}`);
  });
});

console.log(`\nTotal elements: ${allElements.length}`);
console.log('\nSummary by category:');
Object.keys(grouped).sort().forEach(cat => {
  console.log(`  ${cat}: ${grouped[cat].length}`);
});
