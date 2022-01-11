const express = require("express");
const router = express.Router();
const FlowerModel = require("../models/Flower");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const genRandomString = (length) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

router.get("/seed", async (req, res) => {
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

router.get("/", async (req, res) => {
  const allFlowers = await FlowerModel.find();
  res.json(allFlowers);
});

// Method 1
// router.post("/api/flowers", async (req, res) => {
//   await FlowerModel.create(req.body);
//   res.json({ status: "ok", msg: "saved" });
// });

// Method 2
router.post("/", async (req, res) => {
  // const to store "errors"
  // const response message

  // for lopp
  // check for keys - routerend error message to response message
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

// router.delete("/api/flowers/:id", async (req, res) => {
//   await FlowerModel.findByIdAndDelete(req.params.id, {
//     useFindAndModify: false,
//   });
//   res.json({ status: "ok", msg: "deleted" });
// });

// Method 2
router.delete("/:id", async (req, res) => {
  const { name } = req.body;
  await FlowerModel.deleteOne({ name });

  res.json({ status: "ok", msg: "deleted" });
});

router.put("/", async (req, res) => {
  response = await FlowerModel.updateOne(
    { name: req.body.name },
    { colour: req.body.newColour }
  );
  console.log(response);

  res.json({ status: "ok", msg: "deleted" });
});

module.exports = router;
