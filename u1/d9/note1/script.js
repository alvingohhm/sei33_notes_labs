function randomColourRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

document.querySelector("button").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  console.log("button", e.target, e.currentTarget);
  //not good idea to use it as will affect others flow
  // e.stopPropagation();
});

document.querySelector("p").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColourRGB();
    console.log("p", e.target, e.currentTarget);
  },
  true //listening to capturing phase
);

document.querySelector("div").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  console.log("div", e.target, e.currentTarget);
});

document.querySelector("body").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColourRGB();
  console.log("body", e.target, e.currentTarget);
});
