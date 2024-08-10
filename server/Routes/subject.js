const express = require("express");
const router = express.Router();
const Subject = require("../Database/models/subject");

// Get all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.send(subjects);
  } catch (error) {
    res.status(500).send({ message: "Error fetching subjects" });
  }
});

// Create a new subject
router.post("/", async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).send(subject);
  } catch (error) {
    res.status(400).send({ message: "Error creating subject" });
  }
});

// Update a subject
router.put("/:id", async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!subject) return res.status(404).send({ message: "Subject not found" });
    res.send(subject);
  } catch (error) {
    res.status(400).send({ message: "Error updating subject" });
  }
});

// Delete a subject
router.delete("/:id", async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).send({ message: "Subject not found" });
    res.send({ message: "Subject deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting subject" });
  }
});

module.exports = router;
