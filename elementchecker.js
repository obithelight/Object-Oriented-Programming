/*
Create a function named elementChecker that will check a passed in array if at least one of its elements has the same value as a passed in argument. If array is empty, return the message "error - passed in array is empty". Otherwise, return a boolean value depending on the result of the check. Use the students array and the string "Jane" as arguments when testing.
*/

let house = [];
let students = ["Ada", "Amaka", "Amanda", "Amara"];

const elementChecker = (word, array) => {
  if (array.length === 0) {
    return "error - passed in array is empty";
  } else {
    return array.some((element) => element === word);
  }
};

console.log(elementChecker("Jane", house));
