"use strict";

const nums = [32, 33, 14, 40];

//test
function greaterThan18(num) {
  return num > 18;
}

// will return false if any num in array fail a test
console.log(nums.every(greaterThan18));
//return any num in array that pass the test
console.log(nums.filter(greaterThan18));
//return the first num in array that pass the test
console.log(nums.find(greaterThan18));
// return the first index of the num in array that pass the test
console.log(nums.findIndex(greaterThan18));
// as long as one pass the test it will give true
console.log(nums.some(greaterThan18));
// for loop to test every element, each element gives a output (memory efficient)
console.log(nums.map(greaterThan18));

function print(item, index) {
  console.log(`${item} ==> ${index}`);
}

nums.forEach(print);
const subtract = (total, num) => total - num;

console.log(nums.reduce(subtract));

//32 - 33 - 14 - 40 = -55
