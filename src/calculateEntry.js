const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age >= 50) {
      count.senior += 1;
      return;
    }
    if (element.age >= 18) {
      count.adult += 1;
      return;
    }
    count.child += 1;
  });
  return count;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  let pay = 0;
  pay += entries.child * prices.child;
  pay += entries.adult * prices.adult;
  pay += entries.senior * prices.senior;
  return pay;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
