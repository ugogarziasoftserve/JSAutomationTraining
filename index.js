
/**1.- We have the array with elements [2, 3, 4, 5]. Use the loop “for” to
 *  find the product of the elements of this array. Also implement tasks through “while” loop .  */
let arrayNumbers = [2, 3, 4, 5]
let productOfCicleFor = 1
let productOfCicleWhile = 1
let x = 0

for (let i = 0; i < arrayNumbers.length; i++) {
    productOfCicleFor = productOfCicleFor * arrayNumbers[i]
}
console.log("iteration of cicle for " + productOfCicleFor)

while (x < arrayNumbers.length) {
    productOfCicleWhile = productOfCicleWhile * arrayNumbers[x]
    x++
}

console.log("iteration of cicle while " + productOfCicleWhile)

/**2.-  Write JavaScript “for” loop that will iterate from 0 to 15. For each iteration, 
 * it will check whether the current number is even or odd and display a message on the screen. 
 */
for (let i = 0; i <= 15; i++) {
    if ((i % 2) == 0) {
        console.log(i + " is even")

    } else {

        console.log(i + " is odd")
    }

}


/**3.- Write a function randArray ( k ) that will fill an array of k random integers. 
 * Random numbers are generated from the range 1-500.  */
let randArrayX = Math.random() * 100
let arrayRandomInt = []
for (let i = 0; i < randArrayX; i++) {
    arrayRandomInt.push(Math.floor(Math.random() * 500))
}
console.log(arrayRandomInt)

/**4.- Write the function raiseToDegree(a, b), 
 * which returns the result of raising the number a to the power of b . 
 * The function works only with integers. 
 * Implement the interface for entering numbers a , b from the keyboard. 
  */

function raiseToDegree(a, b) {
    return Math.pow(a, b)
}
alert("This program take two numbers and increase the base with the exponential number")
let a = Number(prompt("Please Enter the base number "))
let b = Number(prompt("Please enter the exponencial number"))

if (isNaN(a) || isNaN(b)) {
    alert("One or more numbers  entered  are invalid")
} else {
    alert("The result is " + raiseToDegree(a, b))
}

/**
 * 5 . Implement the findMin() function , which should accept an arbitrary number of numeric arguments 
 * and return the one with the smallest value. Tip: you can use the special arguments 
 * array for the solution . 
 */
let askContinue
let arrayInput = []
function findMin(arr) {
    return Math.min.apply(Math, arr)
}
alert("This program will calculate the min value of the numbers that you enter")
do {
    arrayInput.push(parseInt(prompt("Enter a number")))
    askContinue = prompt("Do you want to enter another number, type : 'Yes' or 'No'")

}
while (askContinue == "Yes" || askContinue == "yes" || askContinue == "y")

alert("The min number of the list you enter is " + findMin(arrayInput))

/**
 * 6.- Write the function findUnique(arr), which accepts an array “arr” and 
 * checks if all elements of array are unique ( no doubles ), 
 * then function will return true if all elements are unique, otherwise - false. 
 */

let askCont
let arrayInputB = []
function findDuplicates(arrayB) {

    for (let i = 0; i < arrayB.length; i++) {
        for (let j = 1; j < arrayB.length; j++) {
            if (arrayB[i] == arrayB[j]) {
                alert("There is a duplicate value ")
                return;
            } else {
                alert("No duplicates")
                return;
            }

        }
    }

}
//const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)

alert("Excersice 6: The following script will tell you if you enter a duplicate number")

do {
    arrayInputB.push(parseInt(prompt("Enter a number")))
    askCont = prompt("Do you want to enter another number, type : 'Yes' or 'No' ")

}
while (askCont == "Yes" || askCont == "yes" || askCont == "y")

findDuplicates(arrayInputB)


/**7.  Write a function that returns the last element of an array. 
 * The function can accept 2 parameters: the 1st array, the 2nd numerical parameter corresponding to the number of "x" of 
 * the last elements of the array to be output. 
  */
// pending to do, not sure what this exercise is about


/**8 .- Write a function that takes a 
 * string as an argument and converts the first letter of each word of the string to uppercase . 
*/
let stringInput = prompt("Enter a phrase , this program will update to uppercase each letter of the first word")

let newStringArray = stringInput.split(" ")

let newStringUpperCase=[]

for (let stringValue of newStringArray) {
    newStringUpperCase.push(stringValue.charAt(0).toUpperCase() + stringValue.slice(1))
}

alert("This is the new string " + newStringUpperCase.join(" "))


