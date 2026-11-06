const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const demoDir = path.join(root, 'Demos_Hub');
const stylePath = path.join(demoDir, 'assets', 'style.css');
const controlsScriptPath = path.join(demoDir, 'assets', 'demo-controls.js');
const htmlFiles = fs.readdirSync(demoDir)
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(demoDir, name));

const failures = [];
const sharedCss = fs.readFileSync(stylePath, 'utf8');

const requiredCss = [
  'select,',
  'input,',
  'textarea',
  'select option',
  'appearance:none',
  'color-scheme:dark',
  '.navex-select',
  '.navex-select-menu',
];

for (const token of requiredCss) {
  if (!sharedCss.includes(token)) {
    failures.push(`Demos_Hub/assets/style.css missing shared control styling token: ${token}`);
  }
}

if (!fs.existsSync(controlsScriptPath)) {
  failures.push('Demos_Hub/assets/demo-controls.js missing custom dropdown enhancer');
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<select\b[^>]*\bstyle\s*=/gi)) {
    const line = html.slice(0, match.index).split(/\r?\n/).length;
    failures.push(`${path.relative(root, file)}:${line} select uses inline styling instead of shared control system`);
  }

  if (/<select\b/i.test(html) && !html.includes('assets/demo-controls.js')) {
    failures.push(`${path.relative(root, file)} has selects but does not load assets/demo-controls.js`);
  }
}

if (failures.length) {
  console.error('Demo control system issues:');
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Shared demo controls are styled centrally and selects avoid inline styling.');
