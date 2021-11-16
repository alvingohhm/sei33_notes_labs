"use strict";

document.querySelector("h1").innerText = "Welcome to upside down";

const image = document.querySelector("img");

// console.log(image);

// image.style.display = "none";
image.style.filter = "grayscale(50%)";
image.style.width = "70%";

const eggos = document.createElement("img");
document.querySelector(".container").appendChild(eggos);
eggos.setAttribute(
  "src",
  "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
);
eggos.style.width = "10%";
eggos.remove();
