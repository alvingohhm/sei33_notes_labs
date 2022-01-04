const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/frasier", (req, res) => {
  res.send(
    "Once in prep school, the Existentialist Club once named me 'Most Likely to Be"
  );
});

app.get("/niles", (req, res) => {
  res.send(
    "You know, sometimes I wonder if I'm not just in psychiatry for the money"
  );
});

app.get("/daphne", (req, res) => {
  res.send("Well, have fun. I'm off to stick my head in the oven.");
});

app.get("/roz", (req, res) => {
  res.send(
    "Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!"
  );
});

app.get("/Scrappy", (req, res) => {
  res.send("woof");
});

app.get("/martin", (req, res) => {
  res.send(
    "You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged."
  );
});

//Simpsons
app.get("/Homer", (req, res) => {
  res.send("Simpsons - Homer");
});

app.get("/Marge", (req, res) => {
  res.send("Simpsons - Marge");
});

app.get("/Bart", (req, res) => {
  res.send("Simpsons - Bart");
});

app.get("/Lisa", (req, res) => {
  res.send("Simpsons - Lisa");
});

app.get("/Maggie", (req, res) => {
  res.send("Simpsons - Maggie");
});

app.get("/Snowball_II", (req, res) => {
  res.send("Simpsons - Snowball II");
});

app.get("/Santalittlehelper", (req, res) => {
  res.send("Simpsons -  Santa's Little Helper");
});

app.get("/serveHtml", (req, res) => {
  res.send(`
  <html>
      <body>
          <h1>Oh ha!</h1>
      </body>
  </html>
`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
