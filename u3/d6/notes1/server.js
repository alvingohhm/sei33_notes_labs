const express = require("express");
const connectDB = require("./models/db");
const { findOne } = require("./models/Flower");
const FlowerModel = require("./models/Flower");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const genRandomString = (length) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.get("/api/seed", async (req, res) => {
  await FlowerModel.deleteMany();
  await FlowerModel.create(
    [
      { name: "Rose", colour: "red" },
      { name: "Lily", colour: "white" },
      { name: "Orchid", colour: "pink" },
      { name: genRandomString(20), colour: genRandomString(10) },
    ],
    (err, data) => {
      res.redirect("/api/flowers");
    }
  );
});

app.get("/api/flowers", async (req, res) => {
  const allFlowers = await FlowerModel.find();
  res.json(allFlowers);
});

// Method 1
// app.post("/api/flowers", async (req, res) => {
//   await FlowerModel.create(req.body);
//   res.json({ status: "ok", msg: "saved" });
// });

// Method 2
app.post("/api/flowers", async (req, res) => {
  // const to store "errors"
  // const response message

  // for lopp
  // check for keys - append error message to response message
  // if keys present do
  const Flower = new FlowerModel({
    name: req.body.name,
    colour: req.body.colour,
  });

  await Flower.save();

  // else

  res.json({ status: "ok", msg: "saved" });
});

// Method 1
// (Before times)
// Mongoose                               Mongo
// findByIdAndDelete                      findOneAndDelete
// findByIdAndUpdate                      findOneAndUpdate

// (After times)

// Mongoose                               Mongo
// findByIdAndDelete                      findByIdAndDelete
// findByIdAndUpdate                      findByIdAndUpdate

// app.delete("/api/flowers/:id", async (req, res) => {
//   await FlowerModel.findByIdAndDelete(req.params.id, {
//     useFindAndModify: false,
//   });
//   res.json({ status: "ok", msg: "deleted" });
// });

// Method 2
app.delete("/api/flowers/:id", async (req, res) => {
  const { name } = req.body;
  await FlowerModel.deleteOne({ name });

  res.json({ status: "ok", msg: "deleted" });
});

app.put("/api/flowers", async (req, res) => {
  response = await FlowerModel.updateOne(
    { name: req.body.name },
    { colour: req.body.newColour }
  );
  console.log(response);

  res.json({ status: "ok", msg: "deleted" });
});

app.listen(5000);
