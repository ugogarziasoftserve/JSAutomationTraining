/**2. Write a script in an external file that will output your name to the console. Connect the created file to the HTML document.*/
let name = "Hugo Alberto Garcia"
console.log(name)

/**3. 
 * a) announce two changes; 
 * b) write any values in the variable; 
 * c) enter the changed values on the screen; 
 * d) copy the value of one variable to another; 
 * e) enter the changed values on the screen. */
alert("Enter two numbers")
let valueA = prompt("Value A")
let valueB = prompt("Value B")
alert("Thanks, now the code will assign the number of B into A variable")
valueA = valueB
alert("New asignation on A=" + valueA)

/**4. Create an object with the following 5 properties: 
 * “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
 * The value of each property must correspond to the corresponding primitive data type. */

myFirstObject = {
    string: "Test of the object",
    number: 234,
    booleanType: true,
    undefinedType: undefined,
    nullType: null
}

/**5. Using the confirm() function, ask the user a question 
 * about reaching the age of majority. 
 * Record the result in the isAdult variable and enter it in the console. */
let adult = confirm("Do you have majority age in your country");
console.log(adult)

/**6. I have query about this task */

/**7. Using the prompt() function, write a binding that 
 * the site asks for the user's account, email and password, 
 * and displays the entered data on the screen. For example, 
 * "Dear user, your email address is usermale@gmail.com, your password is qwerty. */
let account = prompt("Hi , Please enter your user account")
let email = prompt("Please enter your email")
let password = prompt("Please enter your password ")
alert("Dear user, your email is " + email + ", your password is " + password)

/** 8. Write a binding that calculates the number of seconds in a year, a day, a month, 
 * records the results in the 
 * corresponding changes and displays 
 * their values on the screen.
 */
alert("This program will calculate the number of seconds in the number of years, months and days you enter")
let years = parseInt(prompt("Enter number of years"))
let months = parseInt(prompt("Enter number of months"))
let days = parseInt(prompt("Enter number of days"))
let sumOfSeconds=0

if (years == 0 || years == undefined || 'number' != typeof (years)) {
    sumOfSeconds+=0    
} else {
    sumOfSeconds += years * 32140800
}
if (months == 0 || months == undefined || 'number' != typeof (months)) {
    sumOfSeconds+=0
} else {
    sumOfSeconds += months * 2678400
}
if (days == 0 || days == undefined || 'number' != typeof (days)) {
    sumOfSeconds+=0
} else {
    sumOfSeconds += days * 3600
}

alert("Total seconds are " + sumOfSeconds)






