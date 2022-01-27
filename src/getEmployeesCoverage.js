const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesId = employees.map((ids) => `${ids.id}`);
const employeesFirstName = employees.map((firstsNames) => `${firstsNames.firstName}`);
const employeesLastName = employees.map((lastsNames) => `${lastsNames.lastName}`);

const whatIsTheKey = (nameOrId) => {
  if (employeesId.includes(nameOrId.id)) {
    return 'id';
  }
  if (employeesFirstName.includes(nameOrId.name)) {
    return 'firstName';
  }
  if (employeesLastName.includes(nameOrId.name)) {
    return 'lastName';
  }
};

const createEmployeesCoverage = () => {
  employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    // species: employee.responsibleFor.map((specie) => )
  }));
};

function getEmployeesCoverage(nameOrId) {
  // seu código aqui
}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
