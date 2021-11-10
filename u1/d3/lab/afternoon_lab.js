/////////////////////////////////////////
//Calculate the Cube
/////////////////////////////////////////
/*
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125
*/
const calculateCube = (x) => {
  return x ** 3;
};

console.log(calculateCube(5));
/////////////////////////////////////////
//Is a Vowel?
/////////////////////////////////////////
/*
Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

console.log(isAVowel("a"));
=> true
*/

const isAVowel = (str) => {
  return ["a", "e", "i", "o", "u"].indexOf(str.toLocaleLowerCase()) !== -1
    ? true
    : false;
};

console.log(isAVowel("a"));
/////////////////////////////////////////
//Get Two Lengths
/////////////////////////////////////////
/*
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
*/

const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length];
};

console.log(getTwoLengths("Hank", "Hippopopalous"));
/////////////////////////////////////////
//Get Multiple Lengths
/////////////////////////////////////////
/*
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]
*/
const getMultipleLengths = (wrdsList) => {
  const result = [];
  wrdsList.map((x) => {
    result.push(x.length);
  });
  return result;
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
/////////////////////////////////////////
//Maximum of Three Numbers
/////////////////////////////////////////
/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

console.log(maxOfThree(6, 9, 1));
=> 9
*/
const maxOfThree = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};
console.log(maxOfThree(6, 9, 1));
/////////////////////////////////////////
//Print Longest Word
/////////////////////////////////////////
/*
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
=> "Peanutbutter"
*/
const printLongestWord = (wrdsList) => {
  let maxLength = 0;
  wrdsList.map((wrd) => (maxLength = Math.max(wrd.length, maxLength)));
  return wrdsList.filter((wrd) => wrd.length === maxLength)[0];
};
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "blob",
  ])
);
/////////////////////////////////////////
//Transmogrify the Numbers
/////////////////////////////////////////
/*
Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

console.log(transmogrify(5, 3, 2));
=> 225
*/
const transmogrify = (x, y, z) => {
  return (x * y) ** z;
};

console.log(transmogrify(5, 3, 2));
