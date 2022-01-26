const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const allAnimal = {};
  if (!animal) {
    species.forEach((element) => {
      allAnimal[element.name] = (element.residents.length);
    });
    return allAnimal;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  const sex = species.find((element) => element.name === animal.specie).residents;
  return sex.reduce((acc, curr) => acc + (curr.sex === animal.sex ? 1 : 0), 0);
}

module.exports = countAnimals;
