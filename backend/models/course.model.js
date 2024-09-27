import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  duration: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  studentsEnrolled: {
    type: Number,
    required: true,
  },
});

const Course = mongoose.model("Courses", coursesSchema);

export default Course;
