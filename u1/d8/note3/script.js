"use strict";

// const myFunction = () => {
//   document.querySelector("#demo").innerHTML = "hello";
// };

//old method
// document.querySelector("button").onclick = myFunction;

//recomended method
// document.querySelector("button").addEventListener("click", myFunction);

const myFuction = () => {
  const h1 = document.querySelector("h1");

  if (h1.className === "that-style") {
    h1.className = "this-style";
    h1.innerHTML = "this-style used";
  } else {
    h1.className = " that-style";
    h1.innerHTML = "that-style used";
  }
};

const myFunction2 = () => {
  document.querySelector("h1").innerHTML = "clicked already";
};

const toggleColour = () => {
  document.querySelector("h1").classList.toggle("this-style");
};

// document.querySelector("#btn").addEventListener("click", toggleColour);
document.querySelector("#btn").addEventListener("click", myFuction);
document.querySelector("#btn").addEventListener("click", myFunction2);
