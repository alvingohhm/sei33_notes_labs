/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/" + "vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// app.get("/api/seed", async (req, res) => {
//   await Vampire.deleteMany();
//   await Vampire.insertMany(seedData, (err, vampires) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("added provided vampire data", vampires);
//     mongoose.connection.close();
//   });
// });
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });
const createSeed = () => {
  Vampire.deleteMany();
  Vampire.insertMany(seedData, (err, vampires) => {
    if (err) {
      console.log(err);
    }
    console.log("added provided vampire data", vampires);
  });

  Vampire.create([
    {
      name: "chima",
      title: "Count",
      hair_color: "white",
      eye_color: "blue",
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ["tomatoe", "mushroom"],
      location: "abcdef",
      gender: "f",
      victims: 2,
    },
    {
      name: "Vicenzo",
      title: "Count",
      hair_color: "violet",
      eye_color: "violet",
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ["pizza", "marshmallows"],
      location: "Minneapolis, Minnesota, US",
      gender: "m",
      victims: 2,
    },
    {
      name: "toom",
      title: "Count",
      hair_color: "yellow",
      eye_color: "white",
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ["cat", "duck"],
      location: "Minneapolis, Minnesota, US",
      gender: "m",
      victims: 2,
    },
    {
      name: "poom",
      title: "Count",
      hair_color: "blue",
      eye_color: "brown",
      dob: new Date(1971, 2, 13, 7, 47),
      loves: ["cereal", "chicken"],
      location: "Minneapolis, Minnesota, US",
      gender: "f",
      victims: 2,
    },
  ]);
  mongoose.connection.close();
};

createSeed();
