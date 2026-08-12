const fs = require('fs');

const svgRaw = fs.readFileSync('Logo nuvrix.svg', 'utf8');

// 1. Remove black background
const bgRegex = /<path d="M0 0 C528 0 1056 0 1600 0[\s\S]*?fill="#000000"[\s\S]*?\/>/;
const svgNoBg = svgRaw.replace(bgRegex, '');

// Extract inner paths
const startIdx = svgNoBg.indexOf('<path');
const endIdx = svgNoBg.lastIndexOf('</svg>');
const innerPaths = svgNoBg.substring(startIdx, endIdx);

// 1. Full Stacked Master Logo (Icon + NUVRIX + AI AUTOMATION GROWTH)
const masterFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 270 1400 900" width="100%" height="100%">
${innerPaths}
</svg>`;
fs.writeFileSync('public/images/nuvrix-master-logo.svg', masterFull, 'utf8');

// 2. Exact Circuit N Monogram Icon (For Favicon & App Icon)
const symbolExact = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="460 270 580 540" width="100%" height="100%">
${innerPaths}
</svg>`;
fs.writeFileSync('public/images/nuvrix-symbol.svg', symbolExact, 'utf8');

// 3. Exact NUVRIX Wordmark with Purple X
const wordmarkExact = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="130 855 1340 195" width="100%" height="100%">
${innerPaths}
</svg>`;
fs.writeFileSync('public/images/nuvrix-wordmark.svg', wordmarkExact, 'utf8');

// 4. Horizontal Lockup SVG: Circuit N on left, NUVRIX Wordmark on right
const horizontalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="100%" height="100%">
  <!-- Icon Group on left scaled and positioned -->
  <g transform="translate(-180, -100) scale(0.62)">
    <svg viewBox="460 270 580 540" width="580" height="540">
      ${innerPaths}
    </svg>
  </g>
  <!-- Wordmark on right scaled and positioned -->
  <g transform="translate(230, 75) scale(0.68)">
    <svg viewBox="130 855 1340 195" width="1340" height="195">
      ${innerPaths}
    </svg>
  </g>
  <!-- Subtitle on right below wordmark -->
  <g transform="translate(245, 220) scale(0.65)">
    <svg viewBox="180 1080 1240 70" width="1240" height="70">
      ${innerPaths}
    </svg>
  </g>
</svg>`;
fs.writeFileSync('public/images/nuvrix-horizontal-logo.svg', horizontalSvg, 'utf8');

console.log('Successfully generated exact master vector logo assets!');
