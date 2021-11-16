////////////////////////////////
//Part 2 Manipulate the DOM
////////////////////////////////
/*
Activity
Query and change some elements
Get the element with the id you assigned and save it to a variable . Console.log that variable.
Make sure you get the element logged in the console:
*/
// const container = document.getElementById("container");
const container = document.querySelector("#container");
console.log(container);
//Get the h2 element and save it to a variable h2. Console.log that variable.

const h2 = document.querySelector("h2");
console.log(h2);
h2.innerText += "!!!";

// Get all of the elements with the class you assigned and save them to a variable. Console.log that variable.
const allLi = document.querySelectorAll(".myli");
console.log(allLi);

// allLi[0].setAttribute("style", "color: red");
allLi[0].style.color = "blue";

// Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
allLi[2].innerText = "Jamboree sandwich at the Jambo-ree";

// Create a new img element using document.createElement()
const newImg = document.createElement("img");
newImg.setAttribute(
  "src",
  "https://www.japan.travel/snow/en/assets/img/ski-and-snowboard/top-recommendations/niseko-united/1.jpg"
);

// Add an attribute for the source url of your new image using .setAttribute()
newImg.setAttribute("alt", "niseko map");

container.appendChild(newImg);

/* to insert sibling */
// container.insertAdjacentElement("beforebegin", newImg);

/*
BONUS:

Change the style/color of the text of your ALL of your li elements to another favorite html color
*/
for (let i = 0; i <= allLi.length - 1; i++) {
  allLi[i].style.color = "MediumVioletRed";
}

/*
Remove an element:
*/

// Select any element using querySelector and save it to a variable
const footer = document.querySelector("footer");
footer.remove();
