// Write code under this line
const getUsersWithAge = (array, min, max) =>
  array
    .filter(({ age }) => age > min && age < max)
    .map(({ name, email }) => ({ ["name"]: name, ["email"]: email }));

//Создание анонимных объектов:
// const arr = Array(3)
// .fill('')
// .map((e, i) => ({ ['index']: i }));
//[ { index: 0 }, { index: 1 }, { index: 2 } ]

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
