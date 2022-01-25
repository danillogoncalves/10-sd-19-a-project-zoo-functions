const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = [];
  ids.forEach((animaleId) => {
    result.push(species.find((element) => element.id === animaleId));
  });
  return result;
}

module.exports = getSpeciesByIds;
