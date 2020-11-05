// Write code under this line
const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
];
const getUserNames = (array) => array.map(({ name }) => name); // with destruction

const getUserNames2 = (array) => array.map((array) => array.name); // without destruction

console.log(getUserNames(users));
console.log(getUserNames2(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
