//FUNCTION CODING:

//Translate the other students specifics into their own respective objects. Make sure to include the login, logout, and listGrades method in each object, as well.

/*
Name: Joe
Email: joe@mail.com
Grades: 78, 82, 79, 85

Name: Jane
Email: jane@mail.com
Grades: 87, 89, 91, 93

Name: Jessie
Email: jessie@mail.com
Grades: 91, 89, 92, 93
*/

//Define a method for EACH student object that will compute for their grade average (total of grades divided by 4).

//Define a method for all student objects named willPass() that returns a Boolean value indicating if student will pass or fail. For a student to pass, their ave. grade must be greater than or equal to 85.

//Define a method for all student objects named willPassWithHonors() that returns true if ave. grade is greater than or equal to 90, false if >= 85 but < 90, and undefined if < 85 (since student will not pass).

//Create an object named classOf1A with a property named students which is an array containing all 4 student objects in it.

//Create a method for the object classOf1A named countHonorStudents() that will return the number of honor students.

//Create a method for the object classOf1A named honorsPercentage() that will return the % of honor students from the batch's total number of students.

//Create a method for the object classOf1A named retrieveHonorStudentInfo() that will return all honor students' emails and ave. grades as an array of objects.

//Create a method for the object classOf1A named sortHonorStudentsByGradeDesc() that will return all honor students' emails and ave. grades as an array of objects sorted in descending order based on their grade averages.


/*********************************SOLUTION*********************************/

let studentOne = {
	name: "John",
	email: "john@mail.com",
	grades: [89, 84, 78, 88],

	login(){
		console.log(`${this.email} has logged in.`)
	},

	logout(){
		console.log(`${this.email} has logged out.`)
	},

	listGrades(){
		console.log(`${this.name}'s quarterly averages are: ${this.grades}`)
	},

	computeAve(){
		let sum = 0
		this.grades.forEach(grade => sum = sum + grade)
		return sum/4
	},

	willPass(){
		return this.computeAve() >= 85 ? true : false;
	},

	willPassWithHonors(){
		if(this.computeAve() >= 90){
			return true
		}else if(this.computeAve() < 90 && this.computeAve() >= 85){
			return false
		}else if(this.computeAve() < 85){
			return undefined
		}
	}
}

let studentTwo = {
	name: "Joe",
	email: "joe@mail.com",
	grades: [78, 82, 79, 85],

	login(){
		console.log(`${this.email} has logged in.`)
	},




