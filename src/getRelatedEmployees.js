const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
