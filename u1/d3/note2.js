// Object - object, array, set
const obj = {};

const obj1 = {
  thisName: "alvin",
  thisDate: "2021",
};

obj1.thisTime = "1234"; //dot notation
obj1["place"] = "GA"; // bracket notation

console.log(obj1);

console.log(obj1.thisDate);
console.log(obj1["place"]);
const getDetails = () => {
  return {
    one: 1,
    two: 2,
    three: 3,
  };
};

const { two, three } = getDetails();

console.log(two);
console.log(three);

const { two: varTwo, three: varThree } = getDetails();
console.log(varTwo);
console.log(varThree);

const person1 = {
  name: "tom",
  age: 25,
  gender: "m",
  height: 155,
};

// const inputObj = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: [10, 20, 30],
//   five: {
//   }
// }

const inputArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for loop - inputArr parent
//   childArray
// for loop - childArray
//   need to get first item
//
