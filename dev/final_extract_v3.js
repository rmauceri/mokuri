const fs = require('fs');
const path = require('path');

function extractElementsFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const elements = [];
  
  // Split by element start patterns - look for { that start elements (not colorZones or carveLevels)
  // Strategy: find all lines with id: and extract from there
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Look for lines that match id: 'something', (element IDs)
    const idMatch = line.match(/^\s*id:\s*['"]([^'"]+)['"]/);
    
    if (idMatch) {
      const id = idMatch[1];
      
      // Skip if this looks like a color zone or carve level
      if (id === 'body' || id === 'seal' || id === 'petal' || id === 'block' || 
          id === 'stone' || id === 'branch' || id === 'wing' || id === 'shell' || 
          id === 'wood' || id === 'water' || id === 'rain' || id === 'flake' || 
          id === 'cloud' || id === 'rock' || id === 'roof' || id === 'stalk' ||
          id === 'far' || id === 'mid' || id === 'near' || id === 'trunk' ||
          id === 'field' || id === 'snow' || id === 'shadow' || id === 'texture' ||
          id === 'bund' || id === 'detail' || id === 'mountain' || id === 'center') {
        continue;
      }
      
      // Look for name in the next few lines
      let name = null;
      let category = null;
      let suggestedLayer = null;
      
      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        const nextLine = lines[j];
        
        if (!name) {
          const nameMatch = nextLine.match(/name:\s*['"]([^'"]+)['"]/);
          if (nameMatch) name = nameMatch[1];
        }
        
        if (!category) {
          const catMatch = nextLine.match(/category:\s*['"]([^'"]+)['"]/);
          if (catMatch) category = catMatch[1];
        }
        
        if (!suggestedLayer) {
          const layerMatch = nextLine.match(/suggestedLayer:\s*['"]([^'"]+)['"]/);
          if (layerMatch) suggestedLayer = layerMatch[1];
        }
        
        // Stop when we've found all three
        if (name && category && suggestedLayer) break;
        
        // Stop when we hit the next element or array end
        if (nextLine.includes('},') && j > i + 5) break;
      }
      
      if (name && category && suggestedLayer) {
        elements.push({
          id: id,
          name: name,
          category: category,
          suggestedLayer: suggestedLayer
        });
      }
    }
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
