// slice , splice, substring can also use to replace characters in string

"use strict";
// call back function
const allUpper = (str) => {
  return str.toUpperCase();
};

const upperFirstWord = (str) => {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const upperLastWord = (str) => {
  const splitString = str.split(" ");
  splitString[splitString.length - 1] =
    splitString[splitString.length - 1].toUpperCase();
  return splitString.join(" ");
};

// const [x, ...y] = [1, 2, 3, 4, 5, 6, 7];
// x = 1;
// y = [2, 3, 4, 5, 6, 7];

//higher order function
const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`New string: ${fn(str)}`);
  console.log(`Function used: ${fn.name}`);
};

transform("General Assembly sei-33", upperFirstWord);
transform("General Assembly sei-33", upperLastWord);
transform("i love css", allUpper);

// console.log("haha", remove$Sign) to help you differentiate the output.
