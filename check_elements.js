const fs = require('fs');

// Check elements.js specifically
const content = fs.readFileSync('C:\\Users\\rmauceri\\mokuri\\elements.js', 'utf8');

// Look for all ids
const idMatches = content.match(/id:\s*'([^']+)'/g);
console.log('IDs in elements.js:');
idMatches.slice(0, 20).forEach(m => console.log('  ' + m));

// Get first 100 lines to see structure
const lines = content.split('\n');
console.log('\nFirst 30 lines of elements.js:');
lines.slice(0, 30).forEach((line, i) => {
  if (i < 30) console.log(i + ': ' + line);
});
