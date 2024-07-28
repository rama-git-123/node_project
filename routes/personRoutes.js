const express = require("express");
const router = express.Router();
const Person = require("../model/person");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const personData = new Person(data);
    const response = await personData.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const data = req.body;
    const response = await Person.findByIdAndUpdate(personId, data, {
      new: true,
    });
    if (!response) {
      return res.status(404).json({ message: "person not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
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
