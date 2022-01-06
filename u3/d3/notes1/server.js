const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(logger);
app.use(cors());

app.get("/", (req, res, next) => {
  console.log("home");
  res.send("<h1>home page</h1>");
  // next();
});

app.get("/pages", auth, (req, res) => {
  console.log(`Admin? ${req.admin}`);
  console.log("pages");
  res.send("<h1>pages page</h1>");
});

// app.use(logger2);

// function logger(req, res, next) {
//   console.log("before");
//   next();
//   console.log("after");
// }

// function logger2(req, res, next) {
//   console.log("before2");
//   next();
//   console.log("after2");
// }

function auth(req, res, next) {
  if (req.query.superadmin === "true") {
    req.admin = "true";
    next();
  } else {
    res.send("not authorised");
  }

  console.log("auth");
  // next();
}

// function auth(req, res, next) {
//   if (req.query.superadmin === "true") {
//     req.admin = "true";
//     next();
//     return;
//   }
//   res.send("not authorised");

//   console.log("auth");

// }

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
