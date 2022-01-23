const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
    },
    password: { type: String, required: true },
    messages: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
