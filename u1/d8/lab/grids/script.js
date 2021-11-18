"use strict";

function randomColourRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function makeSquare(index) {
  const square = document.createElement("div");
  square.className = "square";
  if (index % 2) {
    square.style.backgroundColor = "red";
  } else {
    square.style.backgroundColor = "black";
  }
  square.style.marginBottom = "5px";
  document.querySelector("#grid").append(square);
}

function generateGrid(numOfSq) {
  for (let i = 1; i <= numOfSq; i++) {
    makeSquare(i);
  }
}

generateGrid(64);

function makeCheckerBd(index, rw) {
  const square = document.createElement("div");
  square.className = "square";
  if (!(rw % 2) ? index % 2 : !(index % 2)) {
    square.style.backgroundColor = "red";
  } else {
    square.style.backgroundColor = "black";
  }
  document.querySelector("#checkerboard").append(square);
}

function generatecheckerBd(numOfSq, containerWidth, sqWidth) {
  let rowIndex = 1;
  let totalWidthPerRw = 0;
  for (let i = 1; i <= numOfSq; i++) {
    totalWidthPerRw += sqWidth;
    console.log(totalWidthPerRw);
    if (totalWidthPerRw > containerWidth) {
      rowIndex++;
      totalWidthPerRw = sqWidth;
    }
    makeCheckerBd(i, rowIndex);
  }
}

generatecheckerBd(64, 400, 50);
