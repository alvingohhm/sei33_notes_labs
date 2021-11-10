// #Errors
// console.log("Making your way in the world today takes everything you've got.");
// console.log("Taking a break from all your worries, sure would help a lot.");
// console.log("Wouldn't you like to get away?");
// console.log("Sometimes you want to go");
// console.log("Where everybody knows your name,");
// console.log("and they're always glad you came."); //Syntax Error: console.lo --> console.log
// console.log("You wanna be where you can see,"); //Syntax Error: missing bracket )
// console.log("our troubles are all the same");
// console.log("You wanna be where" + "everybody knows"); //missing + to concatenate strings
// console.log("Your name.");

// #Boolean Expressions
/*
By just looking at the following expressions, determine in your mind whether or not each will evaluate to true or false
*/

// 999 > 999 --> false
// 999 == 999 --> true
// 999 == '999' --> true
// 999 != 999 --> false
// 999 === 999 --> true
// -5 >= -4 --> false
// 100 <= -100 --> false
// 20 + 5 < 5 --> false
// 81 / 9 == 9 --> true
// 9 != 8 + 1 --> false
// 2 * 5 === '25' --> false

// #Assignment Operator vs. Equality Operator
/*
Write: What is the difference between:
the assignment operator =
the equality operator ==
and the strict equality comparison operator ===
*/

/*
assignment operator = --> this is use tp assign value to a variable

equality operator == --> non restrict equality compare without comparing the types of the variable

strict equality comparison operator === --> this equality compare types as well so if number 9 compare 
against string '9', the result will be fdlse
*/

// #While Loops: Reps and Reps

// ## Qns1
/*
Write a while loop that will log in the console

'Ginger chocolate honey patties'
1000 times. You can test it out with a smaller number first, such as 10, and when that works, use 1000.

Make sure you do not run an infinite loop! If you do, close your Terminal. Oops!
*/

let i = 1;

while (i <= 1000) {
  console.log("Ginger chocolate honey patties");
  i++;
}

// ## Qns2
/* 
Write another while loop that counts from 0 to 1000 and will log in the console the current loop number.
*/

let j = 0;

while (j <= 1000) {
  console.log(j);
  j++;
}

// ## Qns3
/*
Write another while loop that prints a message to the console and concatenates the current loop number. Make it count from 0 to 1000.
*/

let k = 0;

while (k <= 1000) {
  console.log("Current loop number is: " + k);
  k++;
}

// #For Loops

// ## Qns1
/*
Write a for loop that counts from 0 to 100 and console.logs each number.
*/

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// ## Qns2
/*
Write another for loop that counts from 7 to 635 (no more, no less!), and console.logs each number.
*/

for (let i = 7; i <= 635; i++) {
  console.log(i);
}

// ## Qns3
/*
1. Declare a variable let start = 0
2. Declare a variable const limit = 100
3. Write a for loop that counts from the value of start to the value of limit, using those variables in the control panel of the loop.

Test the loop thoroughly.
*/

let start = 0;
const limit = 100;

for (i = start; i <= limit; i++) {
  console.log(i);
}

// ## Qns4
/*
Think of something in real life, or nature, or wherever / whenever that displays looping behavior.

Use a for loop to model the looping behavior of that thing.

Where does the loop begin? Where should it end? Does it simply count from one number to another? Or does it change or mutate data?
*/

//excel sheet get the cell value of row 1 to 5
let startRw = 1;
const endRw = 5;
const cellValue = [
  "hi1",
  "hi2",
  "hi3",
  "hi4",
  "hi5",
  "hi6",
  "hi7",
  "hi8",
  "hi9",
  "hi10",
]; //imagine these are cell value
for (let i = startRw; i <= endRw; i++) {
  //array index start with 0
  console.log(cellValue[i - 1]);
}
