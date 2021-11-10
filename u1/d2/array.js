"use strict";

// const arr = [];
// const arr = [1, 2, 3];
// const arr = ["one", 2, 4.5];
// console.log(arr[0]);
// console.log(arr[1]);
// arr[3] = "something";
// console.log(arr[3]);

// arr[3] = "nothing";
// console.log(arr[3]);

// console.log(arr[arr.length - 1]); //last element

// const var1 = 3;
// const var2 = var1;

// const arr1 = [1, 2, 3];
// const arr2 = arr1; //by reference only not a copy

// console.log(arr2);
// console.log(arr1 === arr2);

// arr1[0] = "server";
// console.log(arr2);

// const arr3 = [...arr1];
// console.log(arr1 === arr3); //false
// console.log(JSON.stringify(arr1) === JSON.stringify(arr3)); // comparing the inside instead of the array
// console.log(JSON.stringify(arr1));
// console.log(typeof arr1);

// const rooms = ["bedroom", "kitchen", "living", "dinning"];

// rooms.forEach();

// for (const item of rooms) {
//   console.log(item);
// }

// rooms.forEach((element) => {
//   console.log(element);
// });

// const marray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(marray[1][2]);

// const marray2 = [
//   [1, 2, ["a", "b", "c"]],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(marray2[0][2][2]);

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];
// animals.slice(start, end)
// if end is not included then it will show to the last item
console.log(animals.slice(2));
// [ 'camel', 'duck', 'elephant' ]

//if end is included then show start to end num-1
console.log(animals.slice(1, 3));
// [ 'bison', 'camel' ]

//if we use a negative number
console.log(animals.slice(-1));
// [ 'elephant' ]

//if we use a negative number
console.log(animals.slice(2, -1));
// [ 'camel', 'duck' ]

const newAnimal = animals.slice(1, 3);
console.log(newAnimal);
animals[1] = "cat";
console.log(newAnimal);

console.log(animals.slice(3, 2));
