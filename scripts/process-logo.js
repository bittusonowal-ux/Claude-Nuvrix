const fs = require('fs');
const path = require('path');

const svgRaw = fs.readFileSync('Logo nuvrix.svg', 'utf8');

// The first path is the black background:
// <path d="M0 0 C528 0 1056 0 1600 0 C1600 528 1600 1056 1600 1600 C1072 1600 544 1600 0 1600 C0 1072 0 544 0 0 Z " fill="#000000" transform="translate(0,0)"/>
const bgRegex = /<path d="M0 0 C528 0 1056 0 1600 0[\s\S]*?fill="#000000"[\s\S]*?\/>/;
const svgNoBg = svgRaw.replace(bgRegex, '');

// Save full transparent version
fs.writeFileSync('public/images/nuvrix-logo-transparent.svg', svgNoBg, 'utf8');
console.log('Saved public/images/nuvrix-logo-transparent.svg');

// Now let's calculate tight viewBox for the entire logo content
// The content is roughly from x: 100 to 1500, y: 250 to 1200
// Let's create an optimized full logo SVG with viewBox="100 250 1400 950"
const fullSvgWithViewBox = svgNoBg.replace(
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1600" height="1600">',
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="100 250 1400 950" width="100%" height="100%">'
);
fs.writeFileSync('public/images/nuvrix-logo-full.svg', fullSvgWithViewBox, 'utf8');
console.log('Saved public/images/nuvrix-logo-full.svg');

// Let's also create the Circuit N Symbol only:
// The N symbol is around transform="translate(581.6630859375,304.80712890625)" and extends roughly from x: 450 to 1150, y: 250 to 820
const symbolSvg = svgNoBg.replace(
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1600" height="1600">',
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="550 280 500 520" width="100%" height="100%">'
);
fs.writeFileSync('public/images/nuvrix-symbol-exact.svg', symbolSvg, 'utf8');
console.log('Saved public/images/nuvrix-symbol-exact.svg');

// Wordmark only:
// The wordmark is around y: 850 to 1050, x: 120 to 1480
const wordmarkSvg = svgNoBg.replace(
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1600" height="1600">',
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="120 850 1360 200" width="100%" height="100%">'
);
fs.writeFileSync('public/images/nuvrix-wordmark-exact.svg', wordmarkSvg, 'utf8');
console.log('Saved public/images/nuvrix-wordmark-exact.svg');
