"use strict";
//////////////////////////////////////////////////////////////////////////
//Section 2 Combining Datatypes
//////////////////////////////////////////////////////////////////////////
// 1.Create an object, called crayonBox, that has a property that is an array.
// The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
  colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
};

console.log(crayonBox.colors[2]);

// 2.Create an object bottle that has a property that is an object: cap. cap can have properties like
// material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};

console.log(bottle.cap.material);

// 3.Create an array called receipt that has at least one object in it.
// The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
  { name: "coffee", price: 5 },
  { name: "cake", price: 7 },
];

console.log(receipt[1].name);

// 4.Create an array called apartmentBuilding that has an array as one of its elements,
// the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [["Tom", "Jerry", "Mickey"], "North", 100];

console.log(apartmentBuilding[0][1]);

//////////////////////////////////////////////////////////////////////////
//Combine objects, arrays, and functions more than one level deep
//////////////////////////////////////////////////////////////////////////
// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf,
// size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
  return {
    item: "scarf",
    size: "6ft",
  };
};

console.log(knit().item);

// 2. Create a function crayonSelector that returns an object that has an array
// (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
  return crayonBox.colors;
};

console.log(crayonSelector()[4]);

// 3. Create a function powerButton that returns a function called options - options should
// console.log a simple message like select a song. Call that inner function

const powerButton = () => {
  return () => {
    console.log("select a song");
  };
};

powerButton()();

//////////////////////////////////////////////////////////////////////////
//Model a Vending Machine
//////////////////////////////////////////////////////////////////////////
/*
Model a vending machine

- a vending machine is an object
- it has an array of snacks (make 3 snacks)
- snacks are objects that have a name and a price
- a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
- Be able to call vendingMachine.vend() with a valid integer to return a snack
*/
//for self reference: this keyword doesn't work in arrow function, have to use traditional function

const vendingMachine = {
  snacks: [
    { name: "Lays", price: 5 },
    { name: "m&m", price: 1.5 },
    { name: "pringles", price: 3 },
  ],
  vend: function (num) {
    return this.snacks[num];
  },
};

console.log(vendingMachine.vend(1));

//////////////////////////////////////////////////////////////////////////
//Callbacks
//////////////////////////////////////////////////////////////////////////
// 1. Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
  return num1 + num2;
};
// 2. Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => {
  return num1 - num2;
};

// 3. Make a function multiply that takes two arguments and multiplies them
const multiply = (num1, num2) => {
  return num1 * num2;
};

// 4. Make a function divide that takes two arguments and divides them
const divide = (num1, num2) => {
  return num1 / num2;
};

// 5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// 6. Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
const calculate = (num1, num2, operates) => {
  return operates(num1, num2);
};
// 7. Call calculate 4 times, each time using one of the operation functions you wrote
console.log(calculate(1, 2, add));
console.log(calculate(3, 2, subtract));
console.log(calculate(2, 2, multiply));
console.log(calculate(6, 3, divide));

/* 
Function definition placement
Clean up this code, so that it works and has function definitions in the correct place

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
*/
// const bar = () => {
//   console.log("bar here");
// };

// const foo = () => {
//   console.log("foo here");
// };
// bar();
// foo();
// note: for arrow function calling of function before it is initialize gives errors
// arrow function assign to variable bar so befor it is assigned and we call the function
// bar first it will not work. but using tradtional function it works.

/*
Error reading
What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}
*/
// Missing initializer in const declaration ==> the variable foo missing an equal sign to assign what on the right to the left.
