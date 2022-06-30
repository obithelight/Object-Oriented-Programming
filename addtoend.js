/*
Create a function named addToEnd that will add a passed in string to the end of a passed in array. If element to be added is not a string, return the string "error - can only add strings to an array". Otherwise, return the updated array. Use the students array and the string "Ryan" as arguments when testing.
*/

let students = ["John", "Joe", "Jane", "Jessie"] 

const addToEnd = (string, array) => {
	if(typeof string !== "string"){
		console.log("error - can only add strings to an array")
	}else{
		array.push(string)
