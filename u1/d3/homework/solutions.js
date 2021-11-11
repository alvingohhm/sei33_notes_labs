//////////////////////////////////////////////////////////////////////////////
//Verbal Questions
//////////////////////////////////////////////////////////////////////////////
// 1.What is the difference between a parameter and an argument?
//ans: The parameters are variable you declare in the function statement eg function sum(x,y) so x and y are the parameters.
//it is like the properties required for this function to work.
//while for argument, it is the variable you supply to the function. eg function sum(2,3) so 2 and 3 is the argument. or rather
//sometime we declare let myx = 2, let myy =3 then sum(myx, myy) --> myx and myy is the argument. To me there are about the same.
//
// 2.Within a function, what is the difference between return and console.log?
//ans: console.log is more for debugging purpose to output something to your console for you to check. it do nothing to your actual
//function or the interaction wihtin the program you wrote. return within the fuction are the one that output something out of the fucntion
//that let you interact between your code in your program.

//////////////////////////////////////////////////////////////////////////////
//Palindrome
//////////////////////////////////////////////////////////////////////////////
/*
Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

console.log(checkPalindrome("Radar"));
=> true

console.log(checkPalindrome("Borscht"));
=> false
*/
const checkPalindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return str.toLowerCase() === reverseStr.toLowerCase();
};

console.log(checkPalindrome("Radar"));

//////////////////////////////////////////////////////////////////////////////
//Sum Array
//////////////////////////////////////////////////////////////////////////////
/*
Write a function sumArray that takes an array as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array.
Use a for loop within the function to iterate over the array and sum the contents.
Use a variable such as

let sum = 0;
that will accumulate value within the loop.
Expected result:

console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21
*/
const sumArray = (numList) => {
  let sum = 0;
  numList.map((x) => (sum += x));
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));
//////////////////////////////////////////////////////////////////////////////
//Prime Numbers
//////////////////////////////////////////////////////////////////////////////
/*
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here.
To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
*/

/*
Step One
Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

Hint: Check every number up to the square root. To do this, try a for loop.
*/
const checkPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)) + 1; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};
console.log(checkPrime(16));
/*
Step Two
Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.

This function can call on the previous checkPrime function.
*/
const printPrimes = (num) => {
  if (num < 2) {
    console.log("No Prime Numbers.");
  }
  i = 3;
  primeNum = [2];
  while (i <= num) {
    if (checkPrime(i)) primeNum.push(i);
    i++;
  }
  console.log(primeNum.join(", "));
};

printPrimes(97);
//////////////////////////////////////////////////////////////////////////////
//Rock Paper Scissors
//////////////////////////////////////////////////////////////////////////////
/*
Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players throw out one of the three options, rock, paper, or scissors. To determine who wins, use the following guidelines: rock beats scissors, scissors beats paper, paper beats rock.

Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors).
Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments, the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.
let computersMove = randomMove();
=> rock

let usersMove = randomMove();
=> paper 

rockPaperScissors(computersMove, usersMove);
=> computer chose rock
=> user chose paper
=> paper beats rock, user wins!
*/

//Math.floor(Math.random() * (max - min + 1) + min)
const randomMove = () => {
  const gameChoices = ["scissors", "rock", "paper"];
  return gameChoices[
    Math.floor(Math.random() * (gameChoices.length - 1 - 0 + 1) + 0)
  ];
};

let computersMove = randomMove();
let usersMove = randomMove();

const rockPaperScissors = (computerChoice, userChoice) => {
  const gameRules = {
    scissors: {
      defeatBy: "rock",
      triumphOver: "paper",
      winMsg: "scissors beats paper,",
      loseMsg: "rock beats scissors,",
    },
    rock: {
      defeatBy: "paper",
      triumphOver: "scissors",
      winMsg: "rock beats scissors,",
      loseMsg: "paper beats rock,",
    },
    paper: {
      defeatBy: "scissors",
      triumphOver: "rock",
      winMsg: "paper beats rock,",
      loseMsg: "scissors beats paper,",
    },
  };
  console.log(`computer chose ${computerChoice}`);
  console.log(`user chose ${userChoice}`);
  if (gameRules[userChoice].triumphOver === computerChoice) {
    console.log(gameRules[userChoice].winMsg + " user wins!");
  } else if (gameRules[userChoice].defeatBy === computerChoice) {
    console.log(gameRules[userChoice].loseMsg + " user lose!");
  } else {
    console.log("It's a Tie!");
  }
};

rockPaperScissors(computersMove, usersMove);
