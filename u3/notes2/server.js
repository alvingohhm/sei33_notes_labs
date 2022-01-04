const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const flowers = [
  { id: 1, name: "Rose", colour: "red" },
  { id: 2, name: "Lily", colour: "white" },
  { id: 3, name: "Orchid", colour: "pine" },
];

app.get("/api/flowers/:id", (req, res) => {
  // res.json(flowers.filter((flower) => flower.id == req.params.id));
  const found = flowers.some((flower) => flower.id == req.params.id);

  if (found) {
    res.json(flowers.filter((flower) => flower.id == req.params.id));
  } else {
    res.status(400).json({ msg: `no flower with id ${req.params.id}.` });
  }
});

app.get("/api/flowers", (req, res) => {
  res.json({ one: req.query.one, two: req.query.two });
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
