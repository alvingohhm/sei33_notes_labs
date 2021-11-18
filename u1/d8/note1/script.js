"use strict";

function addH2() {
  const h2 = document.createElement("h2");
  h2.innerText = "Coloured Quilt";
  document.querySelector("body").prepend(h2);
}

addH2();

function randomColourRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function makeSquare(input) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.backgroundColor = randomColourRGB();
  square.innerText = input;
  document.querySelector("#quilt").append(square);
}

function generateQuilt(num) {
  for (let i = 0; i <= num; i++) {
    makeSquare(i);
  }
}

generateQuilt(1000);
