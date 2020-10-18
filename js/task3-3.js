const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line
  if (!Object.keys(employees).length) {
    return "";
  }

  const numberOfTasks = Object.values(employees);
  const namesOfEmployees = Object.keys(employees);
  let maxNumberOfTasks = numberOfTasks[0];
  let maxIndex = 0;

  for (let i = 1; i < numberOfTasks.length; i++) {
    if (numberOfTasks[i] > maxNumberOfTasks) {
      maxNumberOfTasks = numberOfTasks[i];
      maxIndex = i;
    }
  }

  //   for (let name of namesOfEmployees) {
  //     if (employees[name] === maxNumberOfTasks) {
  //       return name;
  //     }
  //   }

  return namesOfEmployees[maxIndex];
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
