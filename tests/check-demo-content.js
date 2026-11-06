const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const marginTracker = fs.readFileSync(path.join(root, 'Demos_Hub', 'margintracker.html'), 'utf8');

const bannedTerms = [
  'Cuba Inox',
  'Espelho LED',
  'Torneira Gourmet',
  'Prateleira',
  'Tapete Antiderrapante',
  'Dispenser Sabao',
  'Dispenser Sabão',
];

const failures = bannedTerms.filter((term) => marginTracker.includes(term));

if (failures.length) {
  console.error('MarginTracker still contains generic/wrong product examples:');
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Demo content uses coherent operational product examples.');
