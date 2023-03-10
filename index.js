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
// add a line
arrayX.push("this is the second element of the array")
// add boolean
arrayX.push(true)
// add null
arrayX.push(null)
console.log("Array lenght " + arrayX.length)
arrayX.push(prompt("Enter the next value of the array"))
console.log("the fifth value of the array is " + arrayX[4])
arrayX.shift()
console.log("remove the first element of the array and print it Array= '"+ arrayX +"'")

