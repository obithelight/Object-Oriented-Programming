/*
Create a function named startsWithCounter that will take in an array of strings and a single character. The function will do the ff:

if array is empty, return "error - array must NOT be empty"
if at least one array element is NOT a string, return "error - all array elements must be strings"
if 2nd argument is NOT of data type string, return "error - 2nd argument must be of data type string"
if 2nd argument is more than 1 character long, return "error - 2nd argument must be a single character"
return the number of elements in the array that start with the character argument, must be case-insensitive

Use the students array and the character "J" as arguments when testing.
*/

let emptyArr = [];
let family = ["father", "mother", "brother", "sister", "cousin"];
let students = ["Adamma", "Adaugo", "Chidi", "Nnenna", "Amaka"];

const startsWithCounter = (array, char) => {
  if (array.length === 0) {
    return "error - array must NOT be empty";
  }
  if (array.some((element) => typeof element !== "string")) {
    return "error - all array elements must be strings";
  }
  if (typeof char !== "string") {
    return "error - 2nd argument must be of data type string";
  }
  if (char.length > 1) {
    return "error - 2nd argument must be a single character";
  }
  let result = 0;

  array.forEach((element) => {
    if (element[0].toLowerCase() === char[0].toLowerCase()) {
      result++;
    }
  });

  return result;
};

