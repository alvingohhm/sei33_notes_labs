const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// const superheroes = ["Superman", "Wonder Woman", "Black Panther"];

// app.get("/superheroes/:index", (req, res) => {
//   res.send(superheroes[req.params.index]);
// });

const superheroes = [
  { name: "Superman", powers: ["flight", "invulnerability", "x-ray vision"] },
  {
    name: "Wonder Woman",
    powers: ["strength", "telepathy", "speed"],
  },
  {
    name: "Black Panther",
    powers: ["senses", "reflexes", "Durability"],
  },
];

const villian = [
  {
    name: "Lex Luthor",
    powers: ["super brain"],
  },
  {
    name: "Ares",
    powers: ["shape shifting", "teleporting"],
  },
  {
    name: "Killmonger",
    powers: [
      "ability to fit in Black Panther's suit",
      "internet agreement that he looks badass",
    ],
  },
];

app.get("/superheroes", (req, res) => {
  res.json({ superheroes, villian });
});

app.get("/superheroes/:name", (req, res) => {
  const { name } = req.params;
  let villian = "";
  const getSuperhero = superheroes.filter((superhero, index) => {
    console.log(index);
    return superhero.name.toLowerCase() === name.toLowerCase();
  });
  const [{ powers: superPowers }] = getSuperhero;

  let html = `
  <h1>${name}</h1>
  <ul>
  `;
  superPowers.map((power) => {
    html = html + `<li>${power}</li>`;
  });

  html = html + "</ul>";
  res.send(html);
});

app.get("/villian/:name", (req, res) => {
  const { name } = req.params;
  const getVillian = villian.filter(
    (bad) => bad.name.toLowerCase() === name.toLowerCase()
  );
  const [{ powers: superPowers }] = getVillian;

  let html = `
  <h1>${name}</h1>
  <ul>
  `;
  superPowers.map((power) => {
    html = html + `<li>${power}</li>`;
  });

  html = html + "</ul>";
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
