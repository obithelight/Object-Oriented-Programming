/*
Create a function named checkAllStringsEnding that will accept a passed in array and a character. The function will do the ff:

if array is empty, return "error - array must NOT be empty"
if at least one array element is NOT a string, return "error - all array elements must be strings"
if 2nd argument is NOT of data type string, return "error - 2nd argument must be of data type string"
if 2nd argument is more than 1 character long, return "error - 2nd argument must be a single character"
if every element in the array ends in the passed in character, return true. Otherwise return false.

Use the students array and the character "e" as arguments when testing.
*/

let house = [];
let students = ["Ada", "Amaka", "Amanda", "Amara"];
let movies = ["Money Heist", 24, "Prison Break", "Black Panther"];

const checkAllStringsEnding = (array, char) => {
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
  return array.every((element) => element[element.length - 1] === char);
};

console.log(checkAllStringsEnding(house, "a")); //"error - array must NOT be empty"
console.log(checkAllStringsEnding(movies, "a")); //"error - all array elements must be strings"
console.log(checkAllStringsEnding(students, 10)); //"error - 2nd argument must be of data type string"
console.log(checkAllStringsEnding(students, "yes")); //"error - 2nd argument must be a single character"
console.log(checkAllStringsEnding(students, "a")); //true
console.log(checkAllStringsEnding(students, "b")); //false
