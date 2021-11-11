//////////////////////////////////////////////////
//The Milky Way Galaxy
//////////////////////////////////////////////////
/*
Create an object called milkyWay
Assign it properties for type, age, containsEarth with the following corresponding values (in order): barred spiral, 13,600,000,000, false
Using dot notation, access the containsEarth property in your object
Wait a second, that's not right! The Milky Way does contain earth, let's fix that! Without directly changing the milkyWay object, update the value of containsEarth to be true
Verify that the value has been updated using dot notation
Add a key to the object called number of stars and give it a value of 100-400 billion
*/

const milkyWay = {
  type: "barred spiral",
  age: 13600000000,
  containsEarth: false,
};

console.log(milkyWay.containsEarth);
milkyWay.containsEarth = true;
console.log(milkyWay.containsEarth);
milkyWay["number of stars"] = "100-400 billion";
console.log(milkyWay);

//////////////////////////////////////////////////
//The Solar System, Part 1
//////////////////////////////////////////////////
/*
The following data structure, solarSystem, is a common data structure: an array of objects. You will see this particular data structure more and more as you venture into JSON and servers. This one is an array of objects which also contains arrays.

Note that the objects do not have names. They are just anynmous objects listed in an array.

Given the following data structure of arrays and objects:

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];
Write Javascript that does the following:
*/

const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  {
    name: "Jupiter",
    ringSystem: true,
    moons: ["Europa", "Ganymede", "Io", "Callisto"],
  },
  {
    name: "Saturn",
    ringSystem: true,
    moons: ["Titan", "Enceladus", "Rhea", "Mimas"],
  },
  {
    name: "Uranus",
    ringSystem: true,
    moons: ["Miranda", "Titania", "Ariel", "Umbriel"],
  },
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
];

//1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
console.log(solarSystem[4].moons);

//2. Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[7].moons[1]);

//3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons.push("Endor");
console.log(solarSystem[1].moons);

//4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
const Pluto = {
  name: "Pluto",
  ringSystem: true,
  moons: ["Charon"],
};

solarSystem.push(Pluto);
console.log(solarSystem);
