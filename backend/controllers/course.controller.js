import { getProfileSchema } from "../validators/user.validator.js";
import { validator } from "../services/common.service.js";
import Course from "../models/course.model.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../util/ApiResponse.util.js";
import Omit from "../util/Omit.util.js";

const getAllCourses = asyncHandler(async (req, res) => {
  // steps
  // 1. get all courses from the database
  // 2. return all courses

  const courses = await Course.find();
  return res
    .status(200)
    .json(new ApiResponse(courses, "All courses fetched successfully"));
});

const getCourseById = asyncHandler(async (req, res) => {
  // steps
  // 1. get course id from req.params.courseID
  // 2. check if course exists in the database
  // 3. if course exists, getCourse
  // 4. omit password from response
  // 5. return course

  const { courseId } = validator(getProfileSchema, req.params);
  const course = await Course.findById(courseId).lean();
  if (!course) {
    throw ApiError.notFound("Course not found", {
      courseId,
    });
  }
  return res
    .status(200)
    .json(new ApiResponse(course, "Course fetched successfully"));
});

const updateCourseById = asyncHandler(async (req, res) => {
  // steps
  // 1. get course id from req.params.courseID
  // 2. check if course exists in the database
  // 3. if course exists, updateCourse
  // 4. return updated course

  const { courseId } = validator(getProfileSchema, req.params);
  const { course } = validator(getProfileSchema, req.body);
  const courseToUpdate = await Course.findById(courseId);
  if (!courseToUpdate) {
    throw ApiError.notFound("Course not found", {
      courseId,
    });
  }
  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    { ...course },
    {
      new: true,
    }
  );
  if (!updatedCourse) {
    throw ApiError.notFound("Course not found", {
      courseId,
    });
  }
  return res
    .status(200)
    .json(new ApiResponse(updatedCourse, "Course updated successfully"));
});

const deleteCourseById = asyncHandler(async (req, res) => {
  // steps
  // 1. get course id from req.params.courseID
  // 2. check if course exists in the database
  //3. if course exists, deleteCourse
  // 4. return deleted course

  const { courseId } = validator(getProfileSchema, req.params);
  const course = 
};
// const getLessonsByCourseId = asyncHandler(async (req, res) => {};
