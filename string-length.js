/*
Create a function named stringLengthSorter that will take in an array of strings as its argument and sort its elements in an ascending order based on their lengths. If at least one element is not a string, return "error - all array elements must be strings". Otherwise, return the sorted array. Use the students array to test.
*/

let students = ["Ifeanyi", "Adanna", "Onyinye", "Chidi", "Ugochi"];
let family = ["father", "mother", "brother", "sister", "cousin"];

const stringLengthSorter = (array) => {
  if (array.some((element) => typeof element !== "string")) {
    return "error - all array elements must be strings";
  }
  return array.sort((elementA, elementB) => elementA.length - elementB.length);
};

console.log(stringLengthSorter(students)); //["Chidi","Adanna","Ugochi","Ifeanyi","Onyinye"]
console.log(stringLengthSorter(family)); //["father","mother","sister","cousin","brother"]
