const { species } = require('../data/zoo_data');

const animalMap = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const notIncludeNamesAnimalMap = () => {
  species.forEach((element) => animalMap[element.location].push(element.name));
  return animalMap;
};

const namesAnimalMap = () => {
  const speciesName = {};
  species.forEach((element) => {
    speciesName[element.name] = []; // Aqui deu ruim
    element.residents.map((nameAnimal) => speciesName[element.name].push(nameAnimal.name));
    animalMap[element.location].push(speciesName[element.name]);
  });
  return animalMap;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return notIncludeNamesAnimalMap();
  }
  if (options.includeNames) {
    return namesAnimalMap();
  }
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
