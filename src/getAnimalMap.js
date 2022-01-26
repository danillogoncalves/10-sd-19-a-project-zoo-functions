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

const sortedNamesAnimalMap = () => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => {
    const speciesName = {};
    const sortedName = element.residents.map((nameAnimal) => nameAnimal.name).sort();
    speciesName[element.name] = sortedName;
    animalMap[element.location].push(speciesName);
  });
  return animalMap;
};

const sexNamesAnimalMap = (options) => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => {
    const speciesName = {};
    const sortedName = element.residents.filter((sexElement) => sexElement.sex === options.sex)
      .map((nameAnimal) => nameAnimal.name);
    speciesName[element.name] = sortedName;
    animalMap[element.location].push(speciesName);
  });
  return animalMap;
};

const sortedSexNamesAnimalMap = (options) => {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => {
    const speciesName = {};
    const sortedName = element.residents.filter((sexElement) => sexElement.sex === options.sex)
      .map((nameAnimal) => nameAnimal.name).sort();
    speciesName[element.name] = sortedName;
    animalMap[element.location].push(speciesName);
  });
  return animalMap;
};

const hubIncludeNames = (options) => {
  if (options.sorted && options.sex) {
    return sortedSexNamesAnimalMap(options);
  }
  if (options.sex) {
    return sexNamesAnimalMap(options);
  }
  if (options.sorted) {
    return sortedNamesAnimalMap();
  }
  return namesAnimalMap();
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return notIncludeNamesAnimalMap();
  }
  return hubIncludeNames(options);
}

module.exports = getAnimalMap;
