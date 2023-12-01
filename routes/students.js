const express = require("express");
const Student = require("../models/student");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:studentId/subjects/:subjectId", async (req, res) => {
  try {
    const { studentId, subjectId } = req.params;
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.subjects.push(subjectId);
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:studentId/subjects", async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("subjects");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student.subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
