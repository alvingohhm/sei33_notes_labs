"use strict";
/////////////////////////////////////////////
//Callback Drills
/////////////////////////////////////////////
// function higherOrderFn(params) {
//   console.log(typeof params);
//   console.log(params());
// }

// const callBkFn = () => {
//   console.log("Hi");
// };

// higherOrderFn(callBkFn);

// const foo = (param, param2) => {
//   param(param2);
// };

// const bar = (param) => {
//   console.log(param);
// };

// foo(bar, "hi");

//output ==> "hi"

const foo = (param, param2) => {
  param(param2, "hello");
};

const bar = (param, param2) => {
  console.log(param2);
};

foo(bar, "hi");

//output ==> "hello"

const baz = (param) => {
  console.log(param.toUpperCase());
};

foo(baz, "hello");

//output ==> "HELLO"
/////////////////////////////////////////////
//Electric Mixer
/////////////////////////////////////////////
