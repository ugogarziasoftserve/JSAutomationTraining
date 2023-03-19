/**1.- Add the code it is neccesary to use the variable x x and return the following  */
let x = 1
let y = 2
let res1 = x.toString() + y.toString()
console.log(res1)// String "12"
console.log(typeof res1)// string
let res2 = (y > x || x > y).toString() + y.toString()
console.log(res2)// string "true2"
console.log(typeof res2)// string
let res3 = (y > x || x > y)
console.log(res3)// true 
console.log(typeof res3)// boolean
let res4 = 1 / "a"
console.log(res4) // Nan
console.log(typeof res4) // number
console.log("*******************************************************next exercise")

/** 2.- The user enters a number (use prompt ()) . It is necessary 
 * to check whether the entered number is correct  */

let m = parseInt(prompt("Enter a number"))
if (!isNaN(m)) {
    console.log("The value is a number")

    if (Math.sign(m) == 1) {
        console.log(m + " is positive")
    } else {
        console.log(m + " is negative")
    }
    if ((m % 7) == 0) {
        console.log(m + "  is multiple of 7")
    } else {
        console.log(m + "  is not multiple of 7")
    }
}
else {
    console.log("The value is not a  number")
}
console.log("*******************************************************next exercise")


/** 3. Create an array: */
let arrayX = []
// add number
arrayX.push(2)
    |// add a line
    arrayX.push("this is the second element of the array")
// add boolean
arrayX.push(true)
// add null
arrayX.push(null)
console.log("Array lenght " + arrayX.length)
arrayX.push(prompt("Enter the next value of the array"))
console.log("the fifth value of the array is " + arrayX[4])
arrayX.shift()
console.log("remove the first element of the array and print it Array= '" + arrayX + "'")

/**
 * 4.- Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.
 */

let cities = ["Mexico", "Los Angeles", "New York"]
console.log(cities[0] + "*" + cities[1] + "*" + cities[2])
// option two
let newString = cities.join(" * ")
console.log(newString)

/**5.- Using the prompt () function , ask the user a question about reaching the age of majority. 
 * Record the result in the isAdult variable . Depending on the received value, display the }
 * appropriate message about the person's status. 
 * For example: if the condition is fulfilled, the age is more than 18, output 
 * "You have reached the age of majority". If the age is less than 18 years, display "You are still too young",  */
let ageMajority = parseInt(prompt("Enter your age"))

if (ageMajority >= 18) {
    alert("You have reached the age of majority")
} else {
    alert("You are still to young")
}

/**6 .- The user enters the three lengths of the sides of the triangle (use prompt() three times to enter each side).  */
let sideA = Number(prompt("Enter the length of the triangule base"))
let sideB = Number(prompt("Enter the length of the triangule side"))
let sideC = Number(prompt("Enter the length of the triangule the second side"))
/**a ) determine and display the area of the triangle in the console  */
if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log("any of the enter sides is not a number")
    console.log("operation can not be completed")
} else {
    let triPerimeter = sideA + sideB + sideC
    let area = Math.sqrt(triPerimeter * ((triPerimeter - sideA) * (triPerimeter - sideB) * (triPerimeter - sideC)))
    areaFixed = parseFloat(area).toFixed(3)
    console.log("The area of the triangule is: " + areaFixed)
}

/**7   Write a conditional construction that, depending on the time of day, will display the 
appropriate greeting. You need to get the real time of day from the system. 
Do it in 2 ways through 2 different conditional operators. */
let greeting;
let systemDateToday = new Date()
let systemTimeHour = systemDateToday.getHours()
console.log(systemTimeHour)
switch (systemTimeHour) {
    case systemTimeHour <= 5 || systemTimeHour == 23:
        alert("Hi this program wish you an excellent  Good night")
        break;

    case systemTimeHour > 5 || systemTimeHour <= 11:
        alert("Hi this program wish you an excellent Good Morning")
        break;

    case systemTimeHour > 11 || systemTimeHour <= 17:
        alert("Hi this program wish you an excellent Good Day")
        break;

    case systemTimeHour > 17 || systemTimeHour < 23:
        alert("Hi this program wish you an excellent Good Evening")
        break;
}

if (systemTimeHour <= 5 || systemTimeHour == 23) {
    alert("Hi this program wish you an excellent Good Night")
}

if (systemTimeHour > 5 || systemTimeHour <= 11) {
    alert("Hi this program wish you an excellent Good Morning")
}

if (systemTimeHour > 11 || systemTimeHour <= 17) {
    alert("Hi this program wish you an excellent Good Day")
}

if (systemTimeHour > 17 || systemTimeHour < 23) {
    alert("Hi this program wish you an excellent Good Evening")
}






