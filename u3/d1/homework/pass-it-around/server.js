const express = require("express");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/bugs", (req, res) => {
  const html = `<h1>99 little bugs in the code</h1>
  <a href="/bugs/98">take one down, Patch it around</a>
  `;
  res.send(html);
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  const size = [0, 1, 0, 5, 10, 0, 16];
  const nextBugsNumber = _.sample(size) + Number(number_of_bugs) - 1;
  let html = `<h1>${number_of_bugs} little bugs in the code</h1>`;

  parseInt(number_of_bugs) > 0
    ? (html = html.concat(
        `<a href="/bugs/${nextBugsNumber}">take one down, Patch it around</a>`
      ))
    : html;
  res.send(html);
});

app.get("/", (req, res) => {
  const html = `<h1>99 Bottles of beer on the wall</h1>
  <a href="/98">take one down, pass it around</a>
  `;
  res.send(html);
});

app.get("/:number_of_bottles", (req, res) => {
  const { number_of_bottles } = req.params;
  let html = `<h1>${number_of_bottles} Bottles of beer on the wall</h1>`;

  parseInt(number_of_bottles) > 0
    ? (html = html.concat(
        `<a href="/${
          Number(number_of_bottles) - 1
        }">take one down, pass it around</a>`
      ))
    : html;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
