const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  class: String,
  courses: [
    {
      type: String,
    },
  ],
  phone: Number,
});
const student = mongoose.model("student", studentSchema);
module.exports = student;
