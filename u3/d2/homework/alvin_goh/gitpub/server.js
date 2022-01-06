const express = require("express");
const drinks = require("./models/drinks");
const food = require("./models/food");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index.ejs", { drinks, food, title: "gitPub - Drinks & Food" });
});

// app.locals.drinks = drinks --> declaring local variable to use. it is persistent over the duration of server

app.get("/drinks/:id", (req, res) => {
  let drink = drinks[req.params.id];
  //capitalize drink name
  drink.capitalizedName =
    drink.name.charAt(0).toUpperCase() + drink.name.slice(1);
  //change image extension
  drink.image = drink.image.replace("jpg", "png");
  //format price
  drink.price = Number(drink.price).toFixed(2);
  res.render("show.ejs", {
    item: drink,
    title: `gitPub - ${drink.capitalizedName}`,
  });

  // { drinks:[...drinks] } can do this to pass in parameter
});

app.get("/food/:id", (req, res) => {
  let foodItem = food[req.params.id];
  //capitalize drink name
  foodItem.capitalizedName =
    foodItem.name.charAt(0).toUpperCase() + foodItem.name.slice(1);
  //change image extension
  foodItem.image = foodItem.image.replace("jpg", "png");
  //format price
  foodItem.price = Number(foodItem.price).toFixed(2);
  res.render("show.ejs", {
    item: foodItem,
    title: `gitPub - ${foodItem.capitalizedName}`,
  });
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
