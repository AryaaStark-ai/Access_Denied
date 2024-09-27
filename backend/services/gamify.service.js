import User from "../models/user.model.js";
import ApiError from "../util/ApiError.util.js";
import Achievement from "../models/achievement.model.js";

const awardPoints = async (userId, points) => {
  try {
    const user = await User.findById(userId);
    user.points += points;
    await user.save();
    return user.points;
  } catch (error) {
    throw new ApiError.internalServerError("Error in awarding points to user", {
      userId,
    });
  }
};

const checkAndAwardAchievements = async userId => {
  const user = await User.findById(userId);
  const achievements = await Achievement.find();

  const newAchievements = [];
  for (const achievement of achievements) {
    if (user.achievements.some(a => a.name === achievement.name)) {
      continue;
      // user already has this achievement
    }

    let conditionMet = true;
    if (achievement.condition.type === "lessonCount") {
      conditionMet =
        user.completedLessons.length >= achievement.condition.count;
    } else if (achievement.condition.type === "courseCount") {
      conditionMet =
        user.completedCourses.length >= achievement.condition.count;
    }

    if (conditionMet) {
      user.achievements.push({
        name: achievement.name,
        description: achievement.description,
        dateEarned: Date.now(),
      });
      await awardPoints(userId, achievement.pointsReward);
      newAchievements.push(achievement.name);
    }
  }

  await user.save();
  return newAchievements;
};

export { awardPoints, checkAndAwardAchievements };
