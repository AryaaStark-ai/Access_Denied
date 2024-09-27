import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
  },
  points: {
    type: Number,
    default: 0,
  },
  completedLessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  completedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
  enrolledCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
  achievements: [
    {
      name: String,
      description: String,
      dateEarned: Date.now(),
    },
  ],
  badges: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default user;
