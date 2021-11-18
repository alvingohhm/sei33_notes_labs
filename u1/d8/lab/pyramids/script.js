"use strict";

function makeTriangle() {
  const triangle = document.createElement("div");
  triangle.className = "triangle";
  return triangle;
  // document.querySelector(".row").append(triangle);
}

function generatePyramid(numOfTiered) {
  console.log(numOfTiered);
  const maxWidth = numOfTiered * 100;
  const container = document.querySelector(".container");
  container.style.width = maxWidth + "px";
  let eachRow = document.createElement("div");
  for (let i = 1; i <= numOfTiered; i++) {
    eachRow.className = "row";
    eachRow.append(makeTriangle());
  }
  container.prepend(eachRow);
  if (numOfTiered > 0) {
    numOfTiered = numOfTiered - 1;
    generatePyramid(numOfTiered);
  }

  // generateRows(numOfTiered);
  // const eachRow = document.createElement("div");
  // eachRow.className = "row";
  // eachRow.style.width = maxWidth + "px";
  // eachRow.append(makeTriangle());
  // document.querySelector("#pyramids").append(eachRow);

  // for (let i = 1; i <= numOfTiered; i++) {
  //   const eachRow = document.createElement("div");
  //   eachRow.className = "row";
  //   document.querySelector("#pyramids").append(eachRow);
  // }
}

generatePyramid(16);
