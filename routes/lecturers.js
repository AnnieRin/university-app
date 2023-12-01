const express = require("express");
const Lecturer = require("../models/lecturer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const lecturer = new Lecturer(req.body);
    await lecturer.save();
    res.status(201).json(lecturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:lecturerId/subjects/:subjectId", async (req, res) => {
  try {
    const { lecturerId, subjectId } = req.params;
    const lecturer = await Lecturer.findById(lecturerId);

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }

    // Update the subject's lecturer field
    const subject = await Subject.findById(subjectId);
    subject.lecturer = lecturerId;
    await subject.save();

    // Optionally, add the subject to the lecturer's list
    lecturer.subjects.push(subjectId);
    await lecturer.save();

    res.status(200).json(lecturer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:lecturerId/subjects", async (req, res) => {
  try {
    const { lecturerId } = req.params;
    const lecturer = await Lecturer.findById(lecturerId).populate("subjects");

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }

    res.status(200).json(lecturer.subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
