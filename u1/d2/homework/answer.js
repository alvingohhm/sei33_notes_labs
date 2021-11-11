"use strict";
////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i += 1) {
  console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
  switch (true) {
    case i % 15 === 0:
      console.log("FizzBuzz");
      break;
    case i % 3 === 0:
      console.log("Fizz");
      break;
    case i % 5 === 0:
      console.log("Buzz");
    default:
      console.log(i);
      break;
  }
}

// shorter faster method from google but not readable. for personal reference
// for (let i = 0; i < 100; ) {
//   console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
// }
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

const theName = 0;
const species = 1;
const age = 2;
const hometown = 3;
const newHomeTown = [];

plantee[age] = plantee[age] + 1;
console.log(plantee);
wolfy[hometown] = "Gotham City";
console.log(wolfy);
newHomeTown.push(dart[hometown], "Hawkins");
dart.splice(hometown, 1, newHomeTown);
console.log(dart);
wolfy.splice(theName, 1, "Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const element of ninjaTurtles) {
  console.log(element.toUpperCase());
}

//another method
ninjaTurtles.forEach((element) => {
  console.log(element.toUpperCase());
});

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
// ##Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic"));
//another method
favMovies.forEach((element, index) => {
  if (element === "Titanic") {
    console.log(index);
    return;
  }
});
//another method
console.log(favMovies.findIndex((element) => element === "Titanic"));
//--------------------------------------------------------------------------------

favMovies.sort(); //sorting array, alter array permanently
favMovies.pop();

favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
//unshift(); //unshift method add element to the beginning of the array
// console.log(favMovies.unshift()); it returns the length of the array
const indexOfDjango = favMovies.findIndex(
  (element) => element === "Django Unchained"
);
favMovies.splice(indexOfDjango, 1, "Avatar"); //this will alter the array permanently
const midPoint = Math.ceil(favMovies.length / 2);
console.log(favMovies.slice(midPoint)); //slice don't mutate the original array
const favMoviesLastHalf = favMovies.slice(midPoint); // storing a copy of the array slice to a variable
console.log(favMoviesLastHalf);
console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious"));
favMovies.splice(favMovies.indexOf("Fast and Furious"), 1);
console.log(favMovies.indexOf("Fast and Furious")); //it will return -1 if we try to get an item that is not in the array
//array is a type of object when we declare const for that object so it means that the type cannot be change however
//we can change the element or size of the array. eg. below
// const myarray = [];
// myarray = "abc";
//we will have an issue "TypeError: Assignment to constant variable." because myarray is define to be an array and we try to change it to a string type
//we could use let but not advisable because base on the above explanation the myarray can accidentally be change into a string type

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);
////////////////////////////////
//  Excited Kitten
////////////////////////////////
let kittenMsg = [
  "Love me, pet me! HSSSSSS!",
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

let randomIndex = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2) {
    randomIndex = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(kittenMsg[randomIndex]);
  } else {
    console.log(kittenMsg[0]);
  }
}
////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
let median = 0;
let medianIdex1 = 0;
let medianIdex2 = 0;
nums.sort();
console.log(nums);

if (nums.length % 2 === 0) {
  medianIdex1 = nums.length / 2 - 1;
  medianIdex2 = medianIdex1 + 1;
  median = (nums[medianIdex1] + nums[medianIdex2]) / 2;
} else {
  medianIdex1 = Math.floor(nums.length / 2);
  median = nums[medianIdex1];
}
console.log(median);
