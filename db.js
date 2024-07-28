const mongoose = require("mongoose");
require("dotenv").config();
//const mongoUrl = "mongodb://localhost:27017/myDatabase";
const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to database");
});
db.on("error", (err) => {
  console.log("Error connecting to database", err);
});
db.on("disconnected", () => {
  console.log("Disconnected from database");
});

module.exports = db;
