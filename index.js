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

  constructor(name, surname, year, middlename) {
    super(name, surname)
    this.year = year
    this.middlename = middlename
    super.showFullName = function () {
      return this.name + " " + this.surname + " " + this.middlename
    }
  }

  showCourse() {
    if (new Date().getFullYear() - this.year > 6) {
      return "The number of the year you enter exceed the number of the courses"
    } else {
      return "The current course  is " + (new Date().getFullYear() - this.year).toString()
    }
  }

}

let student = new Student("Hugo", "Garcia", 2017, "De la P")
console.log(student.showFullName())
console.log(student.showCourse())


/**4.- Create a class Worker which will be have constructor , which accepts the following properties : 
 * fullName ( name and last name ), dayRate ( rate by day works ), workingDays ( number worked out days ). */

class Worker {
  _experience = 1.2

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName
    this.dayRate = dayRate
    this.workingDays = workingDays
  }

  //**The salary is the product of the dayRate, rate by the number of days worked workingDays .  */
  showSalary() {
    return this.dayRate * this.workingDays
  }

  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this._experience
  }

  set experience(value) {
    this._experience = value
  }

  get experience() {
    return this._experience
  }
}

let worker1 = new Worker("Tester1", 20, 50)
console.log(worker1.fullName)
worker1.showSalary()
console.log("New experience: " + worker1.experience)
worker1.experience = 1.5
console.log("New experience: " + worker1.experience)
console.log(worker1.showSalaryWithExperience())

let worker2 = new Worker("Tester2", 80, 60)
worker2.experience = 3.5

let worker5 = new Worker("Tester3", 40, 60)
worker5.experience = 1.4

let worker3 = new Worker("Tester4", 50, 60)
worker3.experience = 1.6

let worker4 = new Worker("Tester5", 60, 60)
worker4.experience = 1.8

let listOfWorkers = []

listOfWorkers.push(worker1, worker2, worker3, worker4, worker5)



//console.log(listOfWorkers)


let newList = listOfWorkers.sort((a, b) => {
  return a.showSalary() - b.showSalary();
});



newList.forEach(element =>
  console.log(element.fullName + '\n' +
    element.fullName + "salary: " + element.showSalary() + '\n' +
    "New experience " + element.experience + '\n' +
    element.fullName + "salary with experience : " + element.showSalaryWithExperience()))
