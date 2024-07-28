const express = require("express");
const router = express.Router();
const student = require("../model/student");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const studentData = new student(data);
    const response = await studentData.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await student.find();
    const responseData = { data: response };
    res.status(200).json(responseData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const data = req.body;
    const response = await student.findByIdAndUpdate(studentId, data, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const response = await student.findByIdAndDelete(studentId);
    if (!response) {
      return res.status(404).json({ message: "person not found" });
    }
    res.status(200).json({ message: "person deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});

module.exports = router;
