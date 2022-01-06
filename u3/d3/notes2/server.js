const express = require("express");
const flowers = require("./models/Flowers");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/flowers", (req, res) => {
  res.json(flowers);
});

app.post("/api/flowers", (req, res) => {
  req.body.id = Math.random();
  flowers.push(req.body);
  res.json(flowers);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
