const express = require("express");
const router = express.Router();
const Subject = require("../Database/models/subject");

router.post("/", async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).send(subject);
  } catch (error) {
    res.status(400).send({ message: "Error creating subject" });
  }
});

module.exports = router;

// GET route to fetch all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.status(200).send(subjects);
  } catch (error) {
    res.status(500).send({ message: "Error fetching subjects" });
  }
});

module.exports = router;

// DELETE route to delete a subject by id
router.delete("/:id", async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).send({ message: "Subject not found" });
    }
    res.status(200).send({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting subject" });
  }
});

// PUT route to update a subject by id
router.put("/:id", async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!subject) {
      return res.status(404).send({ message: "Subject not found" });
    }
    res.status(200).send(subject);
  } catch (error) {
    res.status(400).send({ message: "Error updating subject" });
  }
});
