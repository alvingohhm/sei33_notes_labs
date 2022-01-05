const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
app.use("/api/", express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public")));

// //https://localhost:5000/
// app.get("/api/flowers", (req, res) => {
//   // res.send("hello");
//   // res.sendFile(path.join(__dirname, "public", "index.html"));
//   res.json(flowers); //null / undefined => ""
// });

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
