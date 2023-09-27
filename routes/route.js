const express = require("express");
const router = express.Router();
// cluster, database, collection,documents,field
const Course = require("../models/Course");

//create a new course
router.post("/courses", async (req, res) => {
  try {
    //create documents
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      for (const field in error.errors) {
        console.log(error.errors);
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: error.message });
  }
});
//get all courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
