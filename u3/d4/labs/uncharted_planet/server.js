const express = require("express");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
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
////////////////////////////////////

////////////////////////////////////
const serverInstance = axios.create({
  baseURL: "http://localhost:5001",
});

////////////////////////////////////
// Routes
////////////////////////////////////
//<|Index Routes |>
app.get("/", (req, res) => {
  serverInstance
    .request({
      url: "/scientists",
      method: "get",
    })
    .then((resp) => {
      data = resp.data;
      res.render("index.ejs", {
        scientists: data,
        title: "List of Scientist",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
//<|New Routes|>
app.get("/new", (req, res) => {
  res.render("new.ejs", { title: "Add New Budget Item" });
});
//<|Create Routes|>
app.post("/create", (req, res) => {
  req.body.id = uuidv4();
  serverInstance
    .request({
      url: "/scientists",
      method: "post",
      data: req.body,
    })
    .then(() => {
      console.log("done");
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/delete", (req, res) => {
  serverInstance
    .delete(`/scientists/${req.body.id}`)
    .then(() => {
      console.log("Done");
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
