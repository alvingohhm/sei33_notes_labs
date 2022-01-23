// DEPENDENCIES
const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const methodOverride = require("method-override");
const connectDB = require("./dbConnect");
const sessionRouter = require("./routers/sessionRouter");
const userRouter = require("./routers/userRouter");
const roomRouter = require("./routers/roomRouter");

const app = express();
const PORT = process.env.PORT || 3000;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
////////////////////////////////////
// Connect Database
////////////////////////////////////
const mongoURI = "mongodb://localhost:27017/kingsman";
connectDB(mongoURI);
////////////////////////////////////
// Templating Engine
////////////////////////////////////
app.set("view engine", "ejs");
////////////////////////////////////
// Middleware
////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
////////////////////////////////////
// Sessions Middleware
////////////////////////////////////
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "sessions",
});

app.use(
  session({
    secret: "feedmeseymour", //some random string
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000,
    // cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
    store,
  })
);
/////////////////////////////////////////////
// hijack request method for proper handling
////////////////////////////////////////////
app.use((req, res, next) => {
  switch (req.query._method) {
    case "DELETE":
      req.method = "DELETE";
      break;
    default:
      break;
  }
  req.url = req.path;
  next();
});

//////////////////////////////////
// GET Index - Home Page
//////////////////////////////////
app.get("/", (req, res) => {
  res.render("index.ejs", {
    pageTitle: "Kingsman",
    auth: req.session.auth || false,
  });
});
//////////////////////////////////
// User Routes
//////////////////////////////////
app.use("/users", userRouter);
//////////////////////////////////
// Session Routes
//////////////////////////////////
app.use("/sessions", sessionRouter);
//////////////////////////////////
// Room Routes
//////////////////////////////////
app.use("/room", roomRouter);

// CONTROLLERS
// fitting room three
// const roomController = require("./controllers/room.js");

// CONNECTIONS
app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
