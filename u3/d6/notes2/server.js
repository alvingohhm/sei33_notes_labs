const express = require("express");
const connectDB = require("./models/db");
const flower = require("./router/flower");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/flowers", flower);

connectDB();

app.listen(5000);
