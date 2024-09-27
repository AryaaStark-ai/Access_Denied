import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to LMS API" });
});

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

router.get("/users/:userID", userController.getUserProfile);
router.put("/users/:userID", userController.updateUserProfile);

router.get("/courses", courseController.getAllCourses);
router
  .route("/courses/:courseID")
  .get(courseController.getCourseById)
  .put(courseController.updateCourseById)
  .delete(courseController.deleteCourseById);
router
  .route("/courses/:courseID/lessons")
  .get(courseController.getLessonsByCourseId)
  .post(LessonController.addLessonToCourse);

router
  .route("/courses/:courseID/lessons/:lessonID")
  .get(LessonController.getLessonById)
  .put(LessonController.updateLessonById)
  .delete(LessonController.deleteLessonById)
  .post(LessonController.markLessonAsComplete);

router.get("/leaderboard", LeaderboardController.getLeaderboard);
router.route("/leaderboard/:userID").get(LeaderboardController.getUserRank);

router.route("/achievements").get(AchievementController.getAchievements);

export default router;
