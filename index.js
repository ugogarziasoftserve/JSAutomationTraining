/**1. Write the function propsCount(currentObject), which accepts an object 
 * and determines the number of properties of this object .  */

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web development"
}

function propCount(mentor) {
  let numberOfElements = 0
  for (i in mentor) {
    numberOfElements++
  }

  return numberOfElements
}

alert("The number of elements in object mentor is " + propCount(mentor))

function Employee(firstName, lastName, position) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.position = position;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  }
}
let devPeterPeterson = new Employee("Peter", "Peterson", "dev")

function Human(age, gender, nationality, name, lastName) {
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;
  this.name = name;
  this.lastName = lastName
}


/**
 * 2. Create an arbitrary object that has 5 fields. It is necessary to write the showProps ( obj ) 
 * function , which accepts this object and outputs a list of its 
 * properties recorded in an array . Also enter an array of object property values
 */
let arrayOfProperties = []
let arrayOfValues = []

let arbitraryObject = {
  name: "Tester 1",
  lastName: "Quality",
  nationality: "Mexican",
  age: 40,
  gender: "Male"
}

function showProps(objTest) {

  for (const i in objTest) {
    arrayOfProperties.push(i)
    arrayOfValues.push(objTest[i])

  }
}

showProps(arbitraryObject)
console.log(arrayOfProperties)
console.log(arrayOfValues)

/**3.-  Create the Person class , in which the constructor accepts the name and surname parameters , and also contains the showFullName () method, which displays the person's first and last name. 
Student class is inherited from the Person class , the constructor of which, in addition to name and surname , accepts the year parameter (year of admission to the university).  */

class Person {

  constructor(name, surname) {
    this.name = name
    this.surname = surname
    this.showFullName = function () {
      return this.name + " " + this.surname
    }

  }
}

class Student extends Person {
  currentYear = new Date().getFullYear()
  constructor(name, surname, year, middlename) {
    super(name, surname)
    this.year = year
    this.middlename = middlename
    super.showFullName = function () {
      return this.name + " " + this.surname + " " + this.middlename
    }
  }

  showCourse() {
    return currentYear - year
  }

}

let student = new Student("Hugo", "Garcia", 2014, "De la P")
console.log(student.showFullName)
console.log(student.showCourse)