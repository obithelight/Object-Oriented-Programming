//Create a function named randomPicker that will take in an array and output any one of its elements at random when invoked. Pass in the students array as an argument when testing.

let students = ["Adamma", "Adaugo", "Chidi", "Nnenna", "Amaka"];

const randomPicker = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(randomPicker(students));