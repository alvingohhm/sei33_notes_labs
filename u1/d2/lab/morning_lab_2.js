// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Booleans Activity
//////////////////////////////////////////////////////
/*
Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
*/
const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = "Jelly Bean";

// a _ b;
console.log(a < b);
// c _ d;
console.log(c !== d);
// 'Peanut' _ 'Peanut';
console.log("Peanut" === "Peanut");
// a _ b _ c;
console.log(a < b > c);
// e _ 'Jelly Bean';
console.log(e === "Jelly Bean");
// 48 _ '48';
console.log(48 == "48");
// 'e' _ 'Eh'
console.log("e" !== "Eh");

// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// The Farm
//////////////////////////////////////////////////////
/*
1.Write code that will print out "mooooo" if the variable animal is equal to cow.
2.Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
*/
let animal = "cow";
console.log(animal === "cow" ? "mooooo" : "");
animal = "cat";
console.log(animal !== "cow" ? "Hey! You're not a cow." : "");
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Driver's Ed
//////////////////////////////////////////////////////
/*
1. Write a variable that will hold a person's age.
2. Write code that will print out "Here are the keys", if the age is 16 years or older.
3. Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
*/
const age = 16;
if (age >= 16) {
  console.log("Here are the keys");
} else {
  console.log("Sorry, you're too young.");
}
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Just Loop It
//////////////////////////////////////////////////////
/*
1. Write code that will print out all the numbers in the range 0 - 10.
2. Write code that will print out all the numbers in the range 500 - 50.
*/
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 500; i >= 50; i--) {
  console.log(i);
}
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Let's get odd
//////////////////////////////////////////////////////
/*
1. Print out the odd numbers that are within the range of 1 - 100.
2. Adjust your code to add a message next to the odd number that says: "is an odd number".
*/
for (let i = 1; i <= 100; i++) {
  if (i % 2) console.log(`${i} is an odd number`);
}
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Give me Five
//////////////////////////////////////////////////////
/*
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
*/
for (let i = 1; i <= 100; i++) {
  if (!(i % 5)) console.log(`I found a ${i}. High five!`);
}

for (let i = 1; i <= 100; i++) {
  if (!(i % 3)) console.log(`I found a ${i}. Three is a crowd`);
  if (!(i % 5)) console.log(`I found a ${i}. High five!`);
}
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Savings account
//////////////////////////////////////////////////////
/*
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your banck_account should have $10,100 in it.
*/

let bankAccount = 0;
for (let i = 1; i <= 10; i++) {
  bankAccount += i;
}
console.log(bankAccount);

bankAccount = 0;
for (let i = 1; i <= 100; i++) {
  bankAccount += i * 2;
}
console.log(bankAccount);
// ------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////
// Optional
//////////////////////////////////////////////////////
/*
Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
const evenNum = [];
const fiboNum = [0];
let beforeNum = 0;
let afterNum = 0;
for (let i = 1; i < 15; i++) {
  currentNum = i;
  afterNum = beforeNum + currentNum;
  fiboNum.push(currentNum);
  fiboNum.push(afterNum);
  beforeNum = afterNum;
}

console.log(fiboNum);
