const mongoose = require("mongoose");

//Method1
// mongoose.set("useFindAndModify", false); -- crashing

const db = "mongodb://localhost:27017/acme";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err.mongoose);
    process.exit(1);
  }
};

module.exports = connectDB;
