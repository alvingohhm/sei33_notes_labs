const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const flowers = [
  { id: 1, name: "Rose", colour: "red" },
  { id: 2, name: "Lily", colour: "white" },
  { id: 3, name: "Orchid", colour: "pine" },
];

//https://localhost:5000/
app.get("/api/flowers", (req, res) => {
  // res.send("hello");
  // res.sendFile(path.join(__dirname, "public", "index.html"));
  res.json(flowers); //null / undefined => ""
});

// //https://localhost:5000/membership
// app.post("/membership",(req, res)=>{
//   res.send("hello")
// })

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
