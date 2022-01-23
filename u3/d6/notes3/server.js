const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");

const auth = require("./middleware/auth");
const connectDB = require("./models/db");
// const { collection } = require("../notes2/models/Flower");

const mongoURI = "mongodb://localhost:27017/sessions";

const app = express();
connectDB(mongoURI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = new MongoDBStore({
  uri: mongoURI,
  collection: "currentSession",
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    // cokkie: { secure: false, httpOnly: true, maxAge: null },
    // store: store,
  })
);

// app.post("/registration", async (req, res) => {
// get data from body
// username
// password
// passwordAgain
// name
// email
//check if passwords match
//check if username is unique
// check if email is unique
// hash password
// store in DB
// });

// app.post("/login", async (req, res) => {
//   use post
//   body (encrypted)
//   get username/ password from body
//   use username to get password form db
//   bycrypt compare password and hash
// });

app.post("/login", async (req, res) => {
  const { password } = req.body;
  console.log(password);
  const hash = "$2b$12$Dg6i5GuonJ.V5m9R7dphWuMPxKv6G4Wf8iWFcAXvkEtiVB3uaeSha";

  const valid = await bcrypt.compare(password, hash);

  if (valid) {
    req.session.auth = true;
    res.json({ status: "ok", msg: " logged in" });
  } else {
    req.session.auth = false;
    res.status(403).json({ status: "forbidden", msg: "not logged in" });
  }
});

app.get("/get-hash", async (req, res) => {
  const hashPassword = await bcrypt.hash("password", 12);
  res.send(hashPassword);
});

app.get("/", auth, (req, res) => {
  console.log(req.session);
});

app.listen(5000);
