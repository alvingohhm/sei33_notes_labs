const mongoose = require("mongoose");

//connect to Mongodb
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
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
