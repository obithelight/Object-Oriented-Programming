/*
Create a function named addToStart that will add a passed in string to the start of a passed in array. If element to be added is not a string, return the string "error - can only add strings to an array". Otherwise, return the updated array. Use the students array and the string "Tess" as arguments when testing.
*/

let students = ["Ada", "Amaka", "Amanda", "Amara"];
const addToStart = (string, array) => {
  if (typeof string !== "string") {
    return "error - can only add strings to an array";
  } else {
    array.unshift(string);
    return array;
  }
};