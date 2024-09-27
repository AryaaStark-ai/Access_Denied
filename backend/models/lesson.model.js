import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  },
  pointsReward: {
    type: Number,
    default: 10,
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;
