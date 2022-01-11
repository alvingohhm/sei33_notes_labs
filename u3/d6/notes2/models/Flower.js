const mongoose = require("mongoose");

const FlowerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    colour: { type: String, required: true },
  },
  { collection: "flowers" }
);

const FlowerModel = mongoose.model("FlowerModel", FlowerSchema);

module.exports = FlowerModel;
