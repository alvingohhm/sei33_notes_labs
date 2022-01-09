const express = require("express");
const budget = require("./models/budget");

const app = express();
const PORT = process.env.PORT || 5000;
let bankAccount = 0;

// Templating Engine
app.set("view engine", "ejs");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Data Cleaning
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  }).format(amount);
};

const budgetCleaning = budget.map((item) => {
  bankAccount = bankAccount + item.amount;
  item.amount = formatCurrency(item.amount);
  // item.amount =
  //   "$" + item.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return item;
});

//---------------------------------------
//              ROUTES
//---------------------------------------

//Index Routes
app.get("/", (req, res) => {
  const negativeBalance = bankAccount < 0 ? true : false;
  console.log(bankAccount);
  res.render("index.ejs", {
    budget: budgetCleaning,
    title: "Budget All",
    negativeBalance,
  });
});

//New Routes
app.get("/budget/new", (req, res) => {
  res.render("new.ejs", { title: "Add New Budget Item" });
});

//Create Routes
app.post("/budget/new", (req, res) => {
  bankAccount = bankAccount + Number(req.body.amount);
  req.body.amount = formatCurrency(req.body.amount);
  if (req.body.tags.length > 0) {
    let tagValue = req.body.tags;
    req.body.tags = tagValue.split(",");
  } else {
    req.body.tags = [];
  }
  budgetCleaning.push(req.body);
  res.redirect("/");
});

//Show Routes
app.get("/budget/:id", (req, res) => {
  const budgetItem = budgetCleaning[req.params.id];
  res.render("show.ejs", { budgetItem, title: "Budget Item" });
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
