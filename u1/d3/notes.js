"use strict";
//functions

// function functionName(para1, para2, para3 = true) {
//   //codes
//   return avalue;
// }

// const val1 = functionName(1, 2);

// const myfct = () => {};

// function return 1 value only

// function should only do 1 thing only

// function printHello() {
//   return "hello";
// }

// const retVal = printHello();

// console.log(retVal);

// anonymous function
// const printHello = function () {
//   return "hello";
// };

// console.log(printHello());

// const myarray = [1, 2];
// myarray.sort;

// ternary operator
// x ===0 ? true : false

// arrow function
// const sayHello = (para1) => {
//   return "hello";
// };

// const sayHello = () => "hello";
// const calTriangle = (x, y) => 0.5 * x * y;
// const area = calTriangle(5, 6);

// Scope

// const var1 = 2; //outside scope

// function sayHello(para1) {
//   const var1 = 1; //inside scope

//   return "Hello";
// }

function calRectangle(x, y) {
  if (typeof y === "undefined") {
    return "pleas input y";
  }
  return x * y;
}

function calRhombus(x, y) {
  return (x * y) / 2;
}

function calCircle(x) {
  return Math.PI * x ** 2;
}

function calArea(type, x, y) {
  console.log(typeof y);
  switch (type) {
    case "rectangle":
    case "square":
    case "parallelogram":
      return calRectangle(x, y);
    case "rhombus":
    case "triangle":
      return calRhombus(x, y);
    case "circle":
      return calCircle(x);
  }
}

const area = calArea("rectangle", 12);
console.log(area);

let var1;
let var2;

const resetValues = () => {
  var1 = "one";
  var2 = "two";
};

console.log("before");
console.log(var1); //undefined
console.log(var2); //undefined

resetValues();

console.log("after");
console.log(var1); //"one"
console.log(var2); //"two"

const resetValues2 = () => {
  const var3 = "three";
  const var4 = "four";

  return [var3, var4];
};

const [var3, var4] = resetValues2();

console.log(var3);
console.log(var4);
