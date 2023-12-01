const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/university")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const studentRoutes = require("./routes/students");
const subjectRoutes = require("./routes/subjects");
const lecturerRoutes = require("./routes/lecturers");

app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/lecturers", lecturerRoutes);
