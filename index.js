/**
 * 1.- Implement the calcRectangleArea(width, height) function, which takes 2 parameters, 
 * the width of the rectangle width and the height of the rectangle height, and calculates its area. 
 * Provide termination of program execution and generation of an exception if non-numeric parameters are passed to the function. 
 * Write code that uses this function and handles possible exceptions. 
 */

let area;
function calcRectangleArea(width, height) {


    try {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("One of the inputs is invalid")
        } else {
            return width * height

        }

    }
    catch (exception) {
        return (exception.message)
    }
}

let userWidhtInput = prompt("Enter the width of the rectangule")
let userheighInput = prompt("Enter the height of the rectangule")
area = calcRectangleArea(userWidhtInput, userheighInput)
alert("The area of the rectangule is : " + area)


/**2.- Write a checkAge() function that will prompt the user to enter their age and generate errors in the modal window */

function checkAge(age) {
    try {
        if (age == "") {
            throw new Error("The user enter an empty tape")
        } else if (isNaN(age)) {
            throw new Error("the enter data is not a number")
        } else if (age < 14) {
            throw new Error("You dont have enough age to view this movie")
        } else {
            return "You are allow to see the movie "
        }
    } catch (exception) {
        return (exception.message)
    }


}

let userAge = Number(prompt("Please enter your age"))

alert(checkAge(userAge))

/**3- Create a Month Exception class whose constructor takes a message parameter and initializes the name field to 'MonthException'. 
Implement the showMonthName(month) function, where 
the month parameter is the sequential number of the month of the year. 
The function returns the name of the month according to the entered month number. 
In case of incorrect input, an exception is thrown in the form of an object of the Month Exception 
class with the message 'Incorrect month number'.  */
class MonthName {
    monthName = null

    constructor(monthNumber) {
        try {

            this.monthNumber = monthNumber
            if (this.monthNumber > 12 || this.monthNumber == 0 || isNaN(monthNumber)) {
                throw new Error("Incorrect month number")
            }
        }
        catch (exception) {
            return (exception.message)
        }

    }

    showMonthName(month) {

        switch (month) {
            case 1:
                return "Juanary"
            case 2:
                return "February"
            case 3:
                return "March"
            case 4:
                return "April"
            case 5:
                return "May"
            case 6:
                return "June"
            case 7:
                return "July"
            case 8:
                return "August"
            case 9:
                return "September"
            case 10:
                return "October"
            case 11:
                return "November"
            case 12:
                return "December"
        }
    }
}

let monthUserInput = Number(prompt("Enter the number of the month you want to know the name"))
let getNameMonth = new MonthName(monthUserInput)
alert("The name of the month you enter is " + getNameMonth.showMonthName(monthUserInput))


/**4. Implement the showUser ( id ) function, 
 * which takes the user id as a parameter and returns an 
 * object that contains the value of the passed id . The function also throws an error if a negative id is entered  */


let userInput = [{}]

function showUser(userID) {
    for (let i = 0; i < userID.length; i++) {
        if (Math.sign(userID[i]) == 1) {
            userInput.push({ id: userID[i] })
        } else {
            console.log("Error: ID must not be negative" + userID[i])

        }

    }
}

showUser([2, 3, 4, -4])

console.log(userInput)