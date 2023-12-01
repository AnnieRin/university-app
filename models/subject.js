const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  lecturer: { type: mongoose.Schema.Types.ObjectId, ref: "Lecturer" },
});

module.exports = mongoose.model("Subject", subjectSchema);
