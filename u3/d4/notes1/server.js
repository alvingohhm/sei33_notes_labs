const express = require("express");
const flowers = require("./models/Flowers");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/flowers", (req, res) => {
  res.json(flowers);
});

//create
app.post("/api/flowers", (req, res) => {
  req.body.id = Math.random();
  flowers.push(req.body);
  res.json(flowers);
});

// update
// app.put("/api/flowers/:index", (req, res) => {
//   req.body.id = Math.random();
//   flowers[req.params.index] = req.body;
//   res.json(flowers);
// });
app.put("/api/flowers/:index", (req, res) => {
  flowers[req.params.index] = {
    ...flowers[req.params.index],
    colour: req.body.colour,
  };
  res.json(flowers);
});

app.delete("/api/flowers/:index", (req, res) => {
  // flowers.splice(req.params.index, 1);
  delete flowers[req.params.index];
  res.json(flowers);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
