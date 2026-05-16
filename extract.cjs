const fs = require('fs');
const code = fs.readFileSync('saniya.js', 'utf8');

// Match simple JSX text strings (usually compiled as strings in React.createElement or _jsx calls)
const matches = [...code.matchAll(/children:\s*["']([^"']+)["']/g)].map(m => m[1]);

fs.writeFileSync('saniya_text.txt', matches.slice(0, 1000).join('\n'));
console.log('Done, extracted ' + matches.length + ' strings.');
