const express = require("express");
const flowers = require("./models/Flowers");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.get("/api/flowers/:index", (req, res) => {
  res.render("show.ejs", { flower: flowers[req.params.index] });
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
