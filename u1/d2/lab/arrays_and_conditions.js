// //Create an array that contains three quotes and store it in a variable called quotes.
// const quotes = [
//   "The purpose of our lives is to be happy",
//   "Get busy living or get busy dying",
//   "You only live once, but if you do it right, once is enough",
// ];

// const randomThings = [1, 10, "Hello", true];
// // how do you access the 1st element in the array?
// console.log(randomThings[0]);
// // Reassign the value of "Hello" to "World".
// randomThings[2] = "World";
// // Check the value of the array to make sure it updated the array.
// console.log(randomThings);

// const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"];

// // What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);

// // Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat";

// // Add a new element, "Cloud City" to the array
// ourClass[ourClass.length - 1] = "Cloud City";
// // ourClass.push("Cloud City");
// console.log(ourClass);

// const myArray = [5, 10, 500, 20];
// // Using the push method, add the string "Egon" to the end of the array.
// myArray.push("Egon");
// console.log(myArray);
// // Using a method, remove the string from the end of the array.
// myArray.pop();
// console.log(myArray);
// // Using the unshift method, add the string "Bob Marley" to the beginning of the array
// myArray.unshift("Bob Marley");
// console.log(myArray);
// // Using a different method, remove the string from the beginning of the array
// myArray.shift();
// console.log(myArray);

// // Use the reverse method on this array
// myArray.reverse();
// console.log(myArray);

// // Write an if..else statement that iterates over the myArray array declared above:
// // console.log little number if the number is entered is less than 100
// myArray.forEach((element) => {
//   if (element < 5) {
//     console.log("little number");
//   } else if (element >= 100) {
//     console.log("big number");
//   } else {
//     console.log("monkey");
//   }
// });

//----------------------------------------------------------------------------------------
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
const kristynShoe = kristynsCloset.shift();
console.log(kristynShoe);
console.log(kristynsCloset);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// In the same way, access one item from Thom's pants array.

// Access one item from Thom's accessories array.

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
