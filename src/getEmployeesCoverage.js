const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesIds = employees.map((ids) => `${ids.id}`);
const employeesFirstsNames = employees.map((firstsNames) => `${firstsNames.firstName}`);
const employeesLastsNames = employees.map((lastsNames) => `${lastsNames.lastName}`);

const createEmployeesCoverageLastName = (employeesLastName) => {
  const result = [employees.find((employee) => employee.lastName === employeesLastName.name)];
  return result.map((employeeLastName) => ({
    id: employeeLastName.id,
    fullName: `${employeeLastName.firstName} ${employeeLastName.lastName}`,
    species: employeeLastName.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).name),
    locations: employeeLastName.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).location),
  }))[0];
};

const createEmployeesCoverageFirstName = (employeesFirstName) => {
  const result = [employees.find((employee) => employee.firstName === employeesFirstName.name)];
  return result.map((employeeFirstName) => ({
    id: employeeFirstName.id,
    fullName: `${employeeFirstName.firstName} ${employeeFirstName.lastName}`,
    species: employeeFirstName.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).name),
    locations: employeeFirstName.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).location),
  }))[0];
};

const createEmployeesCoverageId = (employeesId) => {
  const result = [employees.find((employee) => employee.id === employeesId.id)];
  return result.map((employeeId) => ({
    id: employeeId.id,
    fullName: `${employeeId.firstName} ${employeeId.lastName}`,
    species: employeeId.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).name),
    locations: employeeId.responsibleFor.map((specie) => species
      .find((animal) => animal.id === specie).location),
  }))[0];
};

const createEmployeesCoverage = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((specie) => species
    .find((animal) => animal.id === specie).name),
  locations: employee.responsibleFor.map((specie) => species
    .find((animal) => animal.id === specie).location),
}));

function getEmployeesCoverage(nameOrId) {
  // seu código aqui
  if (!nameOrId) {
    return createEmployeesCoverage();
  }
  if (employeesIds.includes(nameOrId.id)) {
    return createEmployeesCoverageId(nameOrId);
  }
  if (employeesFirstsNames.includes(nameOrId.name)) {
    return createEmployeesCoverageFirstName(nameOrId);
  }
  if (employeesLastsNames.includes(nameOrId.name)) {
    return createEmployeesCoverageLastName(nameOrId);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
