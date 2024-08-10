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
