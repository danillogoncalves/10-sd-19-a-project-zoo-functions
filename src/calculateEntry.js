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
  Object.keys(entries).forEach((entry) => {
    pay += entries[entry] * prices[entry];
  });
  return pay;
}

module.exports = { calculateEntry, countEntrants };
