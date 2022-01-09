const express = require("express");
const pokeControllers = require("./controller/pokeControllers");
const cors = require("cors");
var methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 5000;
////////////////////////////////////
// Templating Engine
////////////////////////////////////
app.set("view engine", "ejs");
////////////////////////////////////
// Body Parser Middleware
////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use((req, res, next) => {
  if (req.query._method == "DELETE") {
    // change the original METHOD
    // into DELETE method
    req.method = "DELETE";
    // and set requested url to /pokemon/001
    req.url = req.path;
  }
  next();
});

////////////////////////////////////
// Index Routes
////////////////////////////////////
app.get("/pokemon", pokeControllers.indexPageHandler);
////////////////////////////////////
// New Routes
////////////////////////////////////
app.get("/pokemon/new", pokeControllers.newPageHandler);
////////////////////////////////////
// Show Routes
////////////////////////////////////
app.get("/pokemon/:id", pokeControllers.showPageHandler);
////////////////////////////////////
// Edit Routes
////////////////////////////////////
app.get("/pokemon/:id/edit", pokeControllers.editPageHandler);
////////////////////////////////////
// Create Routes
////////////////////////////////////
app.post("/pokemon", pokeControllers.createNewPokemonHandler);
////////////////////////////////////
// Update Routes
////////////////////////////////////
app.put("/pokemon/:id", pokeControllers.updatePokemonHandler);
////////////////////////////////////
// Destroy Routes
////////////////////////////////////
app.delete("/pokemon/:id", pokeControllers.deletePokemonHandler);

////////////////////////////////////
// Start Listen to Routes
////////////////////////////////////
app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
