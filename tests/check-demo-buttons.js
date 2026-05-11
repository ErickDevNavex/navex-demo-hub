const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = [
  path.join(root, 'navex-hub-portfolio-v1 (1).html'),
  ...fs.readdirSync(path.join(root, 'Demos_Hub'))
    .filter((name) => name.endsWith('.html'))
    .map((name) => path.join(root, 'Demos_Hub', name)),
];

const failures = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const buttonMatches = html.matchAll(/<button\b([^>]*)>/gi);

  for (const match of buttonMatches) {
    const attrs = match[1];
    const hasAction =
      /\bonclick\s*=/i.test(attrs) ||
      /\btype\s*=\s*["']submit["']/i.test(attrs) ||
      /\bdata-demo-action\s*=/i.test(attrs);

    if (!hasAction) {
      const line = html.slice(0, match.index).split(/\r?\n/).length;
      failures.push(`${path.relative(root, file)}:${line} ${match[0]}`);
    }
  }

  for (const match of html.matchAll(/\bonclick\s*=\s*["']\s*["']/gi)) {
    const line = html.slice(0, match.index).split(/\r?\n/).length;
    failures.push(`${path.relative(root, file)}:${line} empty onclick handler`);
  }
}

if (failures.length) {
  console.error('Buttons without explicit demo action:');
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${files.length} HTML files. Every button has an explicit action.`);
