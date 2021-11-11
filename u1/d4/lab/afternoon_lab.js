const ironMan = {
  regularName: 'Anthony Edward "Tony" Stark',
  abilities: [
    "genius-level intellect",
    "proficient scientist and engineer",
    "powered armor suit",
  ],
  marvelMovieAppearances: {
    ironMan: true,
    theHulk: true,
    ironManTwo: true,
    thor: false,
    captainAmerica: false,
    theAvengers: true,
    ironManThree: true,
    thorTwo: false,
    captainAmericaTwo: false,
    guardiansOfTheGalaxy: false,
    avengersTwo: true,
    antMan: false,
    captainAmericaThree: true,
    doctorStrange: false,
    guardiansOfTheGalaxyTwo: false,
    spiderManHomecoming: false,
    thorThree: false,
    blackPanther: false,
    avengersThree: true,
  },
  jarvisAreYouThere: () => {
    console.log("At your service, sir");
  },
};

console.log(ironMan.abilities[2]);

console.log(ironMan.abilities[2]);
