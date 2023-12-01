const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  name: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
});

module.exports = mongoose.model("Lecturer", lecturerSchema);
