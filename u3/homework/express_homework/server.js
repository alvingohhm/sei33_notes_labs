const express = require("express");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Wow! Hello there, ${name}`);
  // console.log(req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const { total, tipPercentage } = req.params;
  const tip = (Number(tipPercentage) / 100) * Number(total);
  res.send(`Your tip will be ${tip.toString()}`);
});

app.get("/magic/:qns", (req, res) => {
  const magicArray = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const { qns } = req.params;
  const magicRes =
    magicArray[Math.floor(Math.random() * (magicArray.length - 1))]; //using pure js
  // const magicRes = _.sample(magicArray); // using lodash
  res.send(`
      <h1>${magicRes}</h1>
    `);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
