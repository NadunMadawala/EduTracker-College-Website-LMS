const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
