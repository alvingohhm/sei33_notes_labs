const mongoose = require("mongoose");

// Connect to Mongodb
const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("The connection with mongod is established");
      }
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
