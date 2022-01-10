const express = require("express");
const connectDB = require("./models/db");
const FlowerModel = require("./models/Flower");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.get("/api/flowers", async (req, res) => {
  const allFlowers = await FlowerModel.find();
  res.json(allFlowers);
});

app.listen(5000);
