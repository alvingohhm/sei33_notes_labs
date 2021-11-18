// console.log("LINKED");

// Dramatis Personae
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took",
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

// Our Setting
const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  // console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  // 2. append the section to the body of the DOM.
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  if (!document.getElementById("middle-earth")) {
    const c1Section = document.createElement("section");
    c1Section.setAttribute("id", "middle-earth");
    document.body.append(c1Section);
    const middleEarth = document.getElementById("middle-earth");
    lands.map((land) => {
      let c1Article = document.createElement("article");
      c1Article.setAttribute("id", land);
      c1Article.innerHTML = `<h1>${land}</h1>`;
      middleEarth.append(c1Article);
    });
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  const c2Shire = document.getElementById("The-Shire");
  if (c2Shire.getElementsByTagName("ul").length === 0) {
    const c2HobbitsUl = document.createElement("ul");
    hobbits.map((hobbit) => {
      let c2Li = document.createElement("li");
      c2Li.innerText = hobbit;
      c2Li.classList.add("hobbit");
      c2HobbitsUl.append(c2Li);
    });
    c2Shire.append(c2HobbitsUl);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  if (!document.getElementById("the-ring")) {
    const c3TheRing = document.createElement("div");
    c3TheRing.setAttribute("id", "the-ring");
    const c3Hobbits = document.querySelectorAll(".hobbit");
    c3Hobbits.forEach((hobbit) => {
      if (hobbit.textContent.includes("Frodo")) {
        hobbit.append(c3TheRing);
      }
    });
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor
  const c4Mordor = document.getElementById("Mordor");
  if (c4Mordor.getElementsByTagName("ul").length === 0) {
    const c4BaddiesUl = document.createElement("ul");
    baddies.map((baddy) => {
      let c4Li = document.createElement("li");
      c4Li.innerText = baddy;
      c4Li.classList.add("baddy");
      c4BaddiesUl.append(c4Li);
    });
    c4Mordor.append(c4BaddiesUl);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
  const middleEarth = document.getElementById("middle-earth");
  if (!document.getElementsByTagName("aside").length) {
    const c5Aside = document.createElement("aside");
    const c5BuddiesUl = document.createElement("ul");
    buddies.map((buddy) => {
      let c5Li = document.createElement("li");
      c5Li.innerText = buddy;
      c5Li.classList.add("buddy");
      c5BuddiesUl.append(c5Li);
    });
    c5Aside.append(c5BuddiesUl);
    middleEarth.append(c5Aside);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const c6Rivendell = document.getElementById("Rivendell");
  if (!c6Rivendell.getElementsByTagName("ul").length) {
    const c6Hobbits = document.querySelector("#The-Shire ul");
    c6Rivendell.append(c6Hobbits);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'

  const c7Aside = document.getElementsByTagName("aside")[0];
  const c7Buddies = c7Aside.querySelectorAll("li");
  c7Buddies.forEach((buddy) => {
    if (buddy.textContent.includes("Strider")) {
      buddy.innerText = "Aragorn";
    }
  });
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const middleEarth = document.getElementById("middle-earth");
  if (!document.getElementById("the-fellowship")) {
    const c8Fellowship = document.createElement("div");
    c8Fellowship.setAttribute("id", "the-fellowship");
    c8Fellowship.innerHTML = "<h1>The Fellowship</h1>";
    middleEarth.append(c8Fellowship);
    const c8Hobbies = document.querySelector(".hobbit").parentElement;
    const c8Buddies = document.querySelector(".buddy").parentElement;
    c8Fellowship.append(c8Hobbies, c8Buddies);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  const c9Fellowship = document.getElementById("the-fellowship");
  const c9Buddies = c9Fellowship.querySelectorAll("li");
  c9Buddies.forEach((buddy) => {
    if (buddy.textContent.includes("Gandalf")) {
      buddy.innerText = "Gandalf the White";
      buddy.classList.add("the-white");
    }
  });
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  alert("BWaaaaaahp!!! The horn of gondor has been blown.");
  const c10Buddies = document
    .querySelector(".the-white")
    .parentNode.querySelectorAll("li");
  const c10Baddies = document.querySelectorAll("#Mordor li");
  c10Buddies.forEach((buddy) => {
    if (buddy.textContent.includes("Boromir")) {
      buddy.style.textDecorationLine = "line-through";
    }
  });
  c10Baddies.forEach((baddy) => {
    if (baddy.textContent.includes("Uruk-hai")) {
      baddy.remove();
    }
  });
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor

  c11Hobbits = document
    .getElementById("the-fellowship")
    .querySelectorAll(".hobbit");
  c11Mordor = document.getElementById("Mordor");
  c11Hobbits.forEach((hobbit) => {
    if (
      hobbit.textContent.includes("Frodo") ||
      hobbit.textContent.includes("Sam")
    ) {
      c11Mordor.append(hobbit);
    }
  });
  if (!document.getElementById("mount-doom")) {
    const c11MountDoom = document.createElement("div");
    c11MountDoom.setAttribute("id", "mount-doom");
    c11Mordor.append(c11MountDoom);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom
  const c12Mordor = document.getElementById("Mordor");
  if (!document.getElementById("gollum")) {
    let c12Gollum = document.createElement("div");
    c12Gollum.setAttribute("id", "gollum");
    c12Mordor.append(c12Gollum);

    const c12TheRing = document.getElementById("the-ring");
    c12Gollum = document.getElementById("gollum");
    c12Gollum.append(c12TheRing);

    const c12MountDoom = document.getElementById("mount-doom");
    c12MountDoom.append(c12Gollum);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  // 2. remove all the baddies from the DOM
  // 3. Move all the hobbits back to the shire
  if (document.getElementById("gollum") !== null) {
    c13Gollum = document.getElementById("gollum");
    c13Gollum.remove;
  }
  const c13Mordor = document.getElementById("Mordor");
  if (c13Mordor.querySelector(".baddy") !== null) {
    const c13BaddiesUl = c13Mordor.querySelector(".baddy").parentNode;
    c13BaddiesUl.remove();
  }
  const c13Shire = document.getElementById("The-Shire");
  const c13TheFellowship = document.getElementById("the-fellowship");
  if (c13TheFellowship.querySelector(".hobbit") !== null) {
    const c13Hobbits = c13TheFellowship.querySelector(".hobbit").parentNode;
    c13Shire.append(c13Hobbits);
  }
  if (c13Mordor.querySelector(".hobbit") !== null) {
    const c13Hobbits = c13Mordor.querySelectorAll(".hobbit");
    c13Hobbits.forEach((hobbit) => c13Shire.querySelector("ul").append(hobbit));
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {
  $("#1").on("click", makeMiddleEarth);
  $("#2").on("click", makeHobbits);
  $("#3").on("click", keepItSecretKeepItSafe);
  $("#4").on("click", makeBaddies);
  $("#5").on("click", makeBuddies);
  $("#6").on("click", leaveTheShire);
  $("#7").on("click", beautifulStranger);
  $("#8").on("click", forgeTheFellowShip);
  $("#9").on("click", theBalrog);
  $("#10").on("click", hornOfGondor);
  $("#11").on("click", itsDangerousToGoAlone);
  $("#12").on("click", weWantsIt);
  $("#13").on("click", thereAndBackAgain);
});
