const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const residentSpecie = species.find((specie) => specie.id === firstAnimal).residents;
  const olderAnimal = residentSpecie.reduce((older, current) => {
    const result = older.age < current.age ? current : older;
    return result;
  });
  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
