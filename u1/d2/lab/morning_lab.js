/*
 //Which line(s) is/are valid?
 let a = 0; //valid
 const b = 1; //valid
 9 = a; //not valid
 b = b + 5; //not valid
*/
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Let's get Mathy!
//////////////////////////////////////////////////////
const a = 42.78;
const b = 1.1;
const c = -2;
const d = 0.5;
const e = 16;

//Round a down
console.log(Math.floor(a));
//Round b up
console.log(Math.ceil(b));
//Find the absolute value of b - a
console.log(Math.abs(b - a));
// Find the largest number of a, b, c, d, e
console.log(Math.max(a, b, c, d, e));
// Find the smallest number of a, b, c, d, e
console.log(Math.min(a, b, c, d, e));
// Find the square root of e
console.log(Math.sqrt(e));
// Raise e to the power of d
console.log(Math.pow(e, d));
console.log(e ** d);
// Make a digital die 0 generate a random number between 1 - 6
console.log(Math.floor(Math.random() * (6 - 1) + 1));

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
// Math.floor((Math.random() * 10) + 1); //exclusive
// https://www.udacity.com/blog/2021/04/javascript-random-numbers.html

// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Strings Activity 1
//////////////////////////////////////////////////////
/*Strings - Switcharoo
1.Create a variable called firstVariable.
2.assign it the value of a string: "Hello World"
3.On the next line, change the value of this variable to a number.
4.store the value of firstVariable into a new variable called secondVariable
5.On the next line, change the value of secondVariable to a string.
6.What is the value of firstVariable?
*/

let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
console.log(secondVariable);
secondVariable = "Hi";
console.log(firstVariable);

/*
Strings - Combine it
1.Create a variable called yourName and set it equal to your name as a string.
Write an expression that takes the string "Hello, my name is " and the variable yourName so that it prints a new string with them concatenated
*/
const yourName = "Alvin";
console.log(`Hello, my name is ${yourName}`);
