const dog = 7;

//pass by value
function changeVar(cat) {
  cat = 777;
  console.log("in", cat);
}

function changeVar(cat) {
  dog = 777;
  console.log("in", cat);
}

changeVar(dog);

console.log("out", dog);

// passed by reference
const chicken = [1, 2, 3, 4];

function changeArr(duck) {
  duck[0] = 17;
  console.log("in", duck);
}

changeArr(chicken);
console.log("out", chicken);

const horse = {
  hay: "hello",
  barn: "dog",
};

function changeObj(cow) {
  cow.hay = "bye";
}

changeObj(horse);

console.log(horse);

const car = { ...horse };
console.log(car);

//by reference
mytest = {
  arr1: [1, 2, 3],
};

console.log(mytest.arr1);

const { arr1: myarray } = mytest;
console.log(myarray);

myarray[0] = 999;
console.log(mytest.arr1);
console.log(myarray);
