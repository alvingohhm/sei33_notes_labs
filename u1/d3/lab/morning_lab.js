"use strict";
/////////////////////////////////////////
//printGreeting
/////////////////////////////////////////
/*
Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
*/

function printGreeting(msg) {
  return `Hello there, ${msg}!`;
}
console.log(printGreeting("Slimer"));

/////////////////////////////////////////
//reverseWordOrder
/////////////////////////////////////////
/*
Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"

Hints: is there a method that can split a string into an array of strings? Can you use a loop creatively to print array elements in a certain order?
*/

function reverseWordOrder(wrds) {
  const wrdsArray = wrds.split(" ");
  wrdsArray.reverse();
  return wrdsArray.join(" ");
}

// function reverseWordOrder(wrds) {
//   return wrds.split(" ").reverse().join(" ");
// }

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

/////////////////////////////////////////
//calculate
/////////////////////////////////////////
/*
Write a function called calculate.

This function should take three arguments, two numbers and a string.

Name the parameters num1, num2, and operation.

If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

console.log(calculate(4, 3, "sub"));

=> 1
console.log(calculate(4, 3, "exp"));

=> 64
*/
function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mult":
      return num1 * num2;
    case "div":
      return num1 / num2;
    case "exp":
      return num1 ** num2;
    default:
      break;
  }
}
console.log(calculate(4, 3, "exp"));
/////////////////////////////////////////
//printConsecutives
/////////////////////////////////////////
/*
Write a function printConsecutives that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
=> 1 2 3

=> 44 45 46

printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);
-3 -2 -1

-2 -1 0

-1 0 1

0 1 2

1 2 3
*/
// function printConsecutives(param) {
//   for (let i = 0; i < param.length - 2; i++) {
//     if (param[i + 1] == param[i] + 1 && param[i + 2] == param[i] + 2) {
//       console.log(param[i], param[i + 1], param[i + 2]);
//     }
//   }
// }

function printConsecutives(list) {
  for (let i = 0; i < list.length - 3; i++) {}
}

printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

/////////////////////////////////////////
//letterReverse
/////////////////////////////////////////
/*
Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

console.log(letterReverse("Luke I am your father"));
=> "ekuL I ma ruoy rethaf"

console.log(letterReverse("Aren't you a little short for a storm trooper"));
=> "t'nerA uoy a elttil trohs rof a mrots repoort"
*/
function letterReverse(wrds) {
  const wrdsArray = wrds.split(" ");
  const output = [];
  wrdsArray.forEach((element) => {
    const lettersArray = element.split("");
    if (lettersArray.length > 1) {
      output.push(lettersArray.reverse().join(""));
    } else {
      output.push(lettersArray.join(""));
    }
  });
  return output.join(" ");
}

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));
