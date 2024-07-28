const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  firstName: String,
  age: Number,
  lastName: String,
  gender: String,
  phone: Number,
});
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
