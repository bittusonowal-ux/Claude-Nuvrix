const fs = require('fs');

const svgRaw = fs.readFileSync('Logo nuvrix.svg', 'utf8');

// Match all path tags and their translations
const pathRegex = /<path d="([^"]+)" fill="([^"]+)" transform="translate\(([^)]+)\)"\/>/g;
let match;
let paths = [];

while ((match = pathRegex.exec(svgRaw)) !== null) {
  const [_, d, fill, trans] = match;
  const [tx, ty] = trans.split(',').map(Number);
  paths.push({ fill, tx, ty, dLength: d.length });
}

console.log('Total paths found:', paths.length);
console.log('Sample path positions:');
paths.slice(0, 15).forEach((p, i) => console.log(`Path ${i}: fill=${p.fill}, tx=${p.tx}, ty=${p.ty}, len=${p.dLength}`));
