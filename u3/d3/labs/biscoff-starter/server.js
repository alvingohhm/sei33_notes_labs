const express = require("express");
const bakedGoods = require("./models/bakedgoods.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// =======================================
//              ROUTES
// =======================================
// index route
// app.get("/bakedgoods", (req, res) => {
//   res.send(bakedGoods);
// });

app.get("/bakedgoods", (req, res) => {
  res.render("index.ejs", { bakedGoods, title: "gitPub - Drinks & Food" });
});

// show route
app.get("/bakedgoods/:id", (req, res) => {
  res.send(bakedGoods[req.params.id]);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
