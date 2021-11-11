/////////////////////////////////////////////
//Answer the Following
/////////////////////////////////////////////
/*
For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

e.g. A computer that can be either on or off. 
=> datatype: boolean 
=> data structure example: const computer = true; 
Strings
Numbers
Booleans
Arrays
Objects
*/

// 1. A light switch that can be either on or off.
/*
datatype: boolean
const switchOn: True
*/

// 2. A user's email address.
/*
datatype: Strings
const email = "abc@company.com"
*/

// 3.A spaceship with a hull, laser blasters, tractor beam, and warp drive.
/*
datatype: Objects
const spaceship = {
  hull: true,
  laserBlaster: true,
  tractorBeam: true,
  warpDrive: true
} 
*/

// 4. A list of student names from our class.
/*
datatype: Array
const Names = ["Tom" , "Jerry" , "Mickey"]
*/

// 5. A list of student names from our class, each with a location.
/*
datatype: Objects within Objects
const Names = {
  "Tom" : {loctaion: "tiny toons"},
  "Jerry" : {loctaion: "tiny toons"}
  "Mickey" : {loctaion: "tiny toons"}
}
*/

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
/*
datatype: Array within Objects
const Names = {
  "Tom" : {loctaion: "tiny toons", favTvShows: ["Succession", "Locke & Key", "Ted Lasso"]},
  "Jerry" : {loctaion: "tiny toons", favTvShows: ["Doctor Who", "Game of Thrones", "Yellowstone"]}
  "Mickey" : {loctaion: "tiny toons", favTvShows: ["Invasion", "Foundation", "Seinfeld"]}
}
*/
/////////////////////////////////////////////
//Take it Easy
/////////////////////////////////////////////
//1. Make an array that holds all of the colors of the rainbow.
const rainbowColors = [
  "Red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
//2. Write code that will access "blue" from the rainbow array.
console.log(rainbowColors[4]);
//3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const alvin = {
  favFood: ["Curry", "McDonalds"],
  hobby: ["Running", "Watching Movies", "Programming"],
  location: "Tampines",
  favDataTypes: "Objects",
};
//4. Write code that will access your hobby from the object that you just created.
console.log(alvin.hobby);

/////////////////////////////////////////////
//Crazy Object!
/////////////////////////////////////////////
const crazyObject = {
  taco: [
    { meat: "steak", cheese: ["panela", "queso", "chihuahua"] },
    {
      meat: "chicken",
      salsa: [
        "pico",
        "hot",
        "hotter",
        "really hot",
        "really really hot",
        "omg my mouth is burning",
      ],
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma",
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager",
      },
      {
        name: "funkhauser",
        occupation: "tv dude",
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff",
      },
    ],
  },
};

// Use crazy Object to log the following.

// 1."omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// 2."Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// 3."Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// 4."Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// 5.The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);
// 6.Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push(
  "I'm trying to elevate small talk to medium talk"
);
console.log(crazyObject.larry.quotes);
/////////////////////////////////////////////
//Object-ception
/////////////////////////////////////////////
const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt",
              },
            },
          },
        },
      },
    },
  },
};

//1.Change the value of limbo to null.

const changeProperty = (
  theObj,
  tgtParentName,
  tgtKey,
  theValue,
  theObjName = null
) => {
  for (let key in theObj) {
    if (typeof theObj[key] === "object") {
      // console.log(`object:${key}`);
      changeProperty(theObj[key], tgtParentName, tgtKey, theValue, key);
    } else {
      if (key === tgtKey && theObjName === tgtParentName) {
        theObj[key] = theValue;
      }
    }
  }
};
changeProperty(inception, "dreamLayer6", "limbo", null);

console.log(
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5
    .dreamLayer6.limbo
);

/////////////////////////////////////////////
//Bond Films
/////////////////////////////////////////////
const bondFilms = [
  {
    title: "Skyfall",
    year: 2012,
    actor: "Daniel Craig",
    gross: "$1,108,561,008",
  },
  {
    title: "Thunderball",
    year: 1965,
    actor: "Sean Connery",
    gross: "$1,014,941,117",
  },
  {
    title: "Goldfinger",
    year: 1964,
    actor: "Sean Connery",
    gross: "$912,257,512",
  },
  {
    title: "Live and Let Die",
    year: 1973,
    actor: "Roger Moore",
    gross: "$825,110,761",
  },
  {
    title: "You Only Live Twice",
    year: 1967,
    actor: "Sean Connery",
    gross: "$756,544,419",
  },
  {
    title: "The Spy Who Loved Me",
    year: 1977,
    actor: "Roger Moore",
    gross: "$692,713,752",
  },
  {
    title: "Casino Royale",
    year: 2006,
    actor: "Daniel Craig",
    gross: "$669,789,482",
  },
  {
    title: "Moonraker",
    year: 1979,
    actor: "Roger Moore",
    gross: "$655,872,400",
  },
  {
    title: "Diamonds Are Forever",
    year: 1971,
    actor: "Sean Connery",
    gross: "$648,514,469",
  },
  {
    title: "Quantum of Solace",
    year: 2008,
    actor: "Daniel Craig",
    gross: "$622,246,378",
  },
  {
    title: "From Russia with Love",
    year: 1963,
    actor: "Sean Connery",
    gross: "$576,277,964",
  },
  {
    title: "Die Another Day",
    year: 2002,
    actor: "Pierce Brosnan",
    gross: "$543,639,638",
  },
  {
    title: "Goldeneye",
    year: 1995,
    actor: "Pierce Brosnan",
    gross: "$529,548,711",
  },
  {
    title: "On Her Majesty's Secret Service",
    year: 1969,
    actor: "George Lazenby",
    gross: "$505,899,782",
  },
  {
    title: "The World is Not Enough",
    year: 1999,
    actor: "Pierce Brosnan",
    gross: "$491,617,153",
  },
  {
    title: "For Your Eyes Only",
    year: 1981,
    actor: "Roger Moore",
    gross: "$486,468,881",
  },
  {
    title: "Tomorrow Never Dies",
    year: 1997,
    actor: "Pierce Brosnan",
    gross: "$478,946,402",
  },
  {
    title: "The Man with the Golden Gun",
    year: 1974,
    actor: "Roger Moore",
    gross: "$448,249,281",
  },
  { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
  {
    title: "Octopussy",
    year: 1983,
    actor: "Roger Moore",
    gross: "$426,244,352",
  },
  {
    title: "The Living Daylights",
    year: 1987,
    actor: "Timothy Dalton",
    gross: "$381,088,866",
  },
  {
    title: "A View to a Kill",
    year: 1985,
    actor: "Roger Moore",
    gross: "$321,172,633",
  },
  {
    title: "License to Kill",
    year: 1989,
    actor: "Timothy Dalton",
    gross: "$285,157,191",
  },
];

/*
Yikes. Well, copy the bondFilms array of objects above into your js file. 
Use for loops and conditionals and methods in order to complete the below:
*/

// 1. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const getBondTitles = ({ getOddYear, getTitlesOnly }) => {
  const container = [];
  let total = 0;
  for (const film of bondFilms) {
    let flag = true;
    // if set getOddYear to true then go ahead
    if (getOddYear) {
      //if not odd year set flag to false
      if (!(film.year % 2)) {
        flag = false;
      }
    }
    // if flag is true then push the require item into array
    if (flag) {
      total += Number(film.gross.replace(/\$|,/g, ""));
      getTitlesOnly ? container.push(film.title) : container.push(film);
    }
  }
  return { bondTitles: container, grossTotal: total };
};
const { bondTitles } = getBondTitles({
  getOddYear: false,
  getTitlesOnly: true,
});

console.log(bondTitles);

// 2. Create a new array oddBonds, of only the Bond films released on odd-numbered years.

const { bondTitles: oddBonds } = getBondTitles({
  getOddYear: true,
  getTitlesOnly: false,
});

console.log(oddBonds);

// 3. Determine the total cumulative gross of the Bond franchise, and console.log the result.
// hint To make the grosses into usable numbers, look into the .replace
// Javascript method (there are many ways to do this, however). Look into parseInt also.

const { grossTotal } = getBondTitles({
  getOddYear: false,
  getTitlesOnly: true,
});

console.log(grossTotal);

/////////////////////////////////////////////
//Bond Films Challenge
/////////////////////////////////////////////
const actorFrequency = {};
let i = 0;

// to generate a frequency table, using array length attribute
// as a way to log teh frequency as well as the index that can
// be use to locate the target film
for (const film of bondFilms) {
  actorFrequency[film.actor] === undefined
    ? (actorFrequency[film.actor] = [i])
    : actorFrequency[film.actor].push(i);
  i++;
}

let minFreq = 9999;
let tgtActor = "";
// to find the less frequency target actor
for (let key in actorFrequency) {
  getFrequency = actorFrequency[key].length;
  if (getFrequency < minFreq) {
    tgtActor = key;
    minFreq = getFrequency;
  }
}

// to console log films the target actor cast in. Target actor can be cast in more
// than 1 film.
actorFrequency[tgtActor].forEach((element) => console.log(bondFilms[element]));
