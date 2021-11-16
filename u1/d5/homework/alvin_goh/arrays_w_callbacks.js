"use strict";
//////////////////////////////////////////////////////////////////////////
//Section 3 Array Methods with Callbacks
//////////////////////////////////////////////////////////////////////////
/*
A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
The first question is for the numbers array. The second question is for the words array.

You don't have to write an answer to the thought questions.
*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

//Every
//1. Determine if every number is greater than or equal to 0
console.log(nums.every((num) => num >= 0));
//2. determine if every word shorter than 8 characters
console.log(panagram.every((wrd) => wrd.length < 8));

//Filter
//1.filter the array for numbers less than 4
console.log(nums.filter((num) => num < 4)); // output emprty array if every element do not meet the condition
//2.filter words that have an even length
console.log(panagram.filter((wrd) => !(wrd.length % 2)));

// Find
//1. Find the first value divisible by 5
console.log(nums.find((num) => !(num % 5)));
//2. find the first word that is longer than 5 characters
console.log(panagram.find((wrd) => wrd.length > 5)); // return undefined when no element satisfies the provided testing function

// Find Index
//1. find the index of the first number that is divisible by 3
console.log(nums.findIndex((num) => !(num % 3)));
//2. find the index of the first word that is less than 2 characters lon
console.log(panagram.findIndex((wrd) => wrd.length < 2)); //return -1 if failed the test

// For Each
//1. console.log each value of the nums array multiplied by 3
nums.forEach((num) => console.log(num * 5));
//2. console.log each word with an exclamation point at the end of it
panagram.forEach((wrd) => console.log(`${wrd}!`));
// Thought Questions
// What happened to the original array?
// ans: it does not mutate the original array
// Can you store the values from a forEach method in a new arra?
// ans: yes

// Some
//1. Find out if some numbers are divisible by 7
console.log(nums.some((num) => !(num % 11)));
//2. Find out if some words have the letter a in them
console.log(panagram.some((wrd) => wrd.indexOf("a") > -1));

// Reduce
//1. Add all the numbers in the array together using the reduce method
console.log(nums.reduce((sum, currentNum) => sum + currentNum));
//2. concatenate all the words using reduce
console.log(panagram.reduce((allWrds, currentWrd) => allWrds + currentWrd));
// Thought Questions
// What happened to the original array?
// ans: it does not mutate the original array

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// console.log(nums.sort()); //sort mutate the orignal array. not as what expected as 10 is not in last element
// Try to sort without any arguments, do you get what you'd expect with the words array?
// console.log(panagram.sort()); //sort mutate the orignal array, not as what expected as there are capitalize letter
// Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b));
// Sort the numbers in descending order
console.log(nums.sort((a, b) => b - a));
// Sort the words in ascending order
console.log(
  panagram.sort((a, b) => {
    let wrd1 = a.toLowerCase();
    let wrd2 = b.toLowerCase();
    if (wrd1 < wrd2) {
      return -1;
    }
    if (wrd1 > wrd2) {
      return 1;
    }

    return 0;
  })
);
// Sort the words in descending order
console.log(
  panagram.sort((a, b) => {
    let wrd1 = a.toLowerCase();
    let wrd2 = b.toLowerCase();
    if (wrd1 < wrd2) {
      return 1;
    }
    if (wrd1 > wrd2) {
      return -1;
    }

    return 0;
  })
);
//////////////////////////////////////////////////////////////////////////
//Array Methods Challenge Problems
//////////////////////////////////////////////////////////////////////////
/*
isPanagram
Using the following array - test whether each letter a-z (case insensitive) is used at least once
*/
const panagram2 = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

const isPanagram = (wrdsList) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const allWrds = wrdsList.join("");
  const result = alphabet.split("").every((letter) => allWrds.includes(letter));
  return result;
};

console.log(isPanagram(panagram2));

//------------------------------------------------------
// using Regular expression

const isPanagramType2 = (wrdsList) => {
  //regular expression symbol
  const regex = /([a-z])(?!.*\1)/g;
  const allWrds = wrdsList.join("");
  const result = allWrds.match(regex).length === 26;
  return result;
};

console.log(isPanagramType2(panagram2));

/*
Working with data
*/
// prettier-ignore
const products = [
  { name: "allen wrench", price: 2.99, description: "handy tool" },
  { name: "cornucopia", price: 5.99, description: "festive holiday decoration" },
  { name: "banana", price: 0.99, description: "full of potassium" },
  { name: "guillotine (cigar)", price: 10.59, description: "behead your stub" },
  { name: "jack-o-lantern", price: 3.99, description: "spooky seasonal fun" },
  { name: "doggie treat (box)", price: 5.99, description: "fido loves 'em" },
  { name: "egg separator", price: 3.99, description: "it separates yolks from whites" },
  { name: "LED lightbulb", price: 6.55, description: "It's super-efficient!" },
  { name: "owl pellets", price: 3.99, description: "Don't ask what they used to be." },
  { name: "flag", price: 5.99, description: "catches the breeze" },
  { name: "hair brush", price: 6.99, description: "fine boar bristles" },
  { name: "iridium (one gram)", price: 19.36, description: "corrosion-resistant metal" },
  { name: "quark", price: 0.01, description: "Very small" },
  { name: "turtleneck", price: 19.99, description: "available in black and slightly-darker black" },
  { name: "kaleidoscope", price: 8.25, description: "tube with moving plastic pieces inside" },
  { name: "mitt (leather)", price: 15, description: "regulation sized" },
  { name: "nothing", price: 10, description: "Hey, if you pay us, we won't ask any questions." },
  { name: "violin", price: 2000, description: "Talk about a JS fiddle..." },
  { name: "yoyo", price: 1, description: "We had to pull some strings to get this one in." },
  { name: "pincushion", price: 1.99, description: "You'll get 'stuck' on it" },
];
console.log(
  products.filter((prdt) => {
    return prdt.price < 10;
  })
);

products.sort((a, b) => {
  let wrd1 = a.name.toLowerCase();
  let wrd2 = b.name.toLowerCase();
  if (wrd1 < wrd2) {
    return -1;
  }
  if (wrd1 > wrd2) {
    return 1;
  }
  return 0;
});

console.log(products);
