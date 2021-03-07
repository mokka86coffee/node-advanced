require('./any');
// console.log - yes
require('./any');
// console.log - no
delete require.cache[require.resolve('./any')];
require('./any');
// console.log - yes
