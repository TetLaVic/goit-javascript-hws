const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    const string = `${i + 1} - ${array[i]}\n`;
    result += string;
  }

  return result;
};

// console.log(getItemsString(["Mango", "Poly", "Ajax"]));
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
