const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
// Models
const Hotel = require("./models/hotel.js");
const hotelSeed = require("./models/seed.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuration
const mongoURI = "mongodb://localhost:27017/hotel";

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("The connection with mongod is established");
  }
);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// db.on("open", () => {
//   Hotel.collection.drop();
//   Hotel.create(hotelSeed, (err, data) => {
//     if (err) console.log(err.message);
//     console.log("added provided hotel data");
//   });
// });

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message);
//   console.log(`There are ${data} hotels in this database`);
// });

////////////////////////////////
// SEED
////////////////////////////////
app.get("/api/seed", async (req, res) => {
  await Hotel.collection.drop();
  await Hotel.create(hotelSeed, (err, data) => {
    if (err) console.log(err.message);
    console.log("added provided hotel data");
  });

  res.json({ status: "ok", msg: "Seed Data Saved!" });
});

//////////////////////////////////
// CREATE
//////////////////////////////////
app.post("/api/hotels", async (req, res) => {
  await Hotel.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return res.json({ status: "failed", msg: err.message });
    }
    return res.json({ status: "ok", msg: "Data Saved!" });
  });
});

// const hotelCreate = () => {
//   Hotel.create(
//     {
//       name: "Capri by Fraser Changi City",
//       location: "Singapore",
//       rating: 4,
//       vacancies: true,
//       rooms: [
//         {
//           roomNumber: 101,
//           size: "Single",
//           price: 55,
//           booked: false,
//         },
//         {
//           roomNumber: 555,
//           size: "King Suite",
//           price: 268,
//           booked: true,
//         },
//       ],
//       tags: ["Big Swimming Pool", "late check out", "Big pillow", "coffee"],
//     },
//     (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log("Data Saved!");
//       return;
//     }
//   );
// };
// hotelCreate();

//////////////////////////////////
// READ
//////////////////////////////////
app.get("/api/hotels", async (req, res) => {
  let hotelList = null;
  switch (true) {
    case Object.keys(req.query).length === 0:
      hotelList = await Hotel.find();
      break;
    case "nameOnly" in req.query:
      if (req.query.nameOnly) {
        //localhost:5000/api/hotels?nameOnly=true
        hotelList = await Hotel.find({}, { name: 1 });
      } else {
        hotelList = await Hotel.find();
      }
      break;
    case "location" in req.query:
      //localhost:5000/api/hotels?location=Singapore
      hotelList = await Hotel.find({ location: req.query.location });
      break;
    case "vacancies" in req.query:
      //localhost:5000/api/hotels?vacancies=true
      hotelList = await Hotel.find(
        { vacancies: req.query.vacancies },
        { rating: 0 }
      );
      break;
    default:
      break;
  }
  res.json(hotelList);
});

//////////////////////////////////
// DELETE
//////////////////////////////////
app.delete("/api/hotels", async (req, res) => {
  let hotelList = null;
  switch (true) {
    case "name" in req.query:
      //localhost:5000/api/hotels?name=Hotelicopter
      hotelList = await Hotel.findOneAndDelete({ name: req.query.name });
      break;
    case "rating" in req.query:
      //localhost:5000/api/hotels?rating=1
      hotelList = await Hotel.findOneAndDelete({ rating: req.query.rating });
      break;
    case "location" in req.query:
      //localhost:5000/api/hotels?location=Colorado Rockies
      hotelList = await Hotel.findOneAndDelete({
        location: req.query.location,
      });
      break;
    default:
      break;
  }
  res.json(hotelList);
});
//////////////////////////////////
// UPDATE
//////////////////////////////////
app.put("/api/hotels", async (req, res) => {
  let hotelList = null;
  switch (true) {
    case "name" in req.query && "vacancies" in req.query:
      //localhost:5000/api/hotels?name=Motel Bambi&vacancies=false
      hotelList = await Hotel.findOneAndUpdate(
        { name: req.query.name },
        { vacancies: req.query.vacancies },
        { new: true }
      );
      break;
    case "location" in req.query && "rating" in req.query:
      //localhost:5000/api/hotels?location=White Bay, Oregon&rating=2
      hotelList = await Hotel.findOneAndUpdate(
        { location: req.query.location },
        { rating: req.query.rating },
        { new: true }
      );
      break;
    case "name" in req.query:
      //localhost:5000/api/hotels?name=The Great Northern
      hotelList = await Hotel.findOneAndUpdate(
        { name: req.query.name },
        { rating: 5 },
        { new: true }
      );
      break;
    default:
      break;
  }
  res.json(hotelList);
});

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
