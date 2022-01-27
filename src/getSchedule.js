const data = require('../data/zoo_data');

const { species, hours } = data;
// Ajudado o Imar Mendes - Turma 19 - Tribo A, para fazer o reduce.
const weeklySchedule = () => {
  const everyDayOfTheWeek = Object.keys(hours);
  return everyDayOfTheWeek.reduce((acc, curr) => {
    if (curr !== 'Monday') {
      acc[curr] = {
        officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
        exhibition: species.filter((specie) => specie.availability.includes(curr))
          .map((specie) => `${specie.name}`),
      };
    } else {
      acc[curr] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return acc;
  }, {});
};

const dayOfTheWeek = (scheduleTarget) => {
  const dailySchedule = weeklySchedule();
  const result = {};
  const content = dailySchedule[scheduleTarget];
  result[scheduleTarget] = content;
  return result;
};

const animalSchedule = (scheduleTarget) => species
  .find((specie) => specie.name === scheduleTarget).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  const everyDayOfTheWeek = Object.keys(hours).includes(scheduleTarget);
  const animalNames = species.map((specie) => `${specie.name}`).includes(scheduleTarget);
  if (animalNames) {
    return animalSchedule(scheduleTarget);
  }
  if (everyDayOfTheWeek) {
    return dayOfTheWeek(scheduleTarget);
  }
  return weeklySchedule();
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
