const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const lookForSpecies = species.find((element) => element.name === animal);
  console.log(lookForSpecies);
  return lookForSpecies.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
