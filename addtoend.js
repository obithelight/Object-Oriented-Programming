/*
Create a function named addToEnd that will add a passed in string to the end of a passed in array. If element to be added is not a string, return the string "error - can only add strings to an array". Otherwise, return the updated array. Use the students array and the string "Ryan" as arguments when testing.
*/

//SWITCH STATEMENT
let students = ["John", "Joe", "Jane", "Jessie"];

const addToEnd = (string, array) => {
  switch (typeof string !== "string") {
    case 1:
      return "error - can only add strings to an array";
      break;
    default:
      array.push(string);
      return array;
      break;
  }
};
console.log(addToEnd("Mark", students));

//IF STATEMENT
let students = ["John", "Joe", "Jane", "Jessie"];

const addToEnd = (string, array) => {
  if (typeof string !== "string") {
    return "error - can only add strings to an array";
  } else {
    array.push(string);
    return array;
  }
};
console.log(addToEnd("Mark", students));