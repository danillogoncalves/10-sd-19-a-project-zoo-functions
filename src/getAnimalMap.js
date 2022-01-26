const { species } = require('../data/zoo_data');

const notIncludeNamesAnimalMap = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => animalMap[element.location].push(element.name));
  return animalMap;
};

const namesAnimalMap = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => {
    const speciesName = {};
    speciesName[element.name] = [];
    element.residents.map((nameAnimal) => speciesName[element.name].push(nameAnimal.name));
    animalMap[element.location].push(speciesName);
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
