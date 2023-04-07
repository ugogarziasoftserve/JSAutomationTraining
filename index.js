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

const human= new Object()