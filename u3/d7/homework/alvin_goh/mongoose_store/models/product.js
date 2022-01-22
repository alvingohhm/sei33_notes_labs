const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    price: { type: Number, min: 0 },
    qty: { type: Number, min: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", product);
