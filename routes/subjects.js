const express = require("express");
const Subject = require("../models/subject");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/lecturer/:lecturerId/student/:studentId", async (req, res) => {
  try {
    const { lecturerId, studentId } = req.params;
    const subject = await Subject.findOne({
      lecturer: lecturerId,
      students: studentId,
    });

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
