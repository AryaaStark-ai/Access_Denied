import mongoose, { Schema } from "mongoose";

const achievementSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pointsReward: {
    type: Number,
    required: true,
  },
  condition: {
    type: {
      type: String,
      enum: ["lessonCount", "courseCount"],
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
});

const Achievement = mongoose.model("Achievement", achievementSchema);
export default Achievement;
