import { getProfileSchema } from "../validators/user.validator.js";
import { validator } from "../services/common.service.js";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../util/ApiResponse.util.js";
import Omit from "../util/Omit.util.js";
import {
  updateProfileSchema,
  getProfileSchema,
} from "../validators/user.validator.js";

const getUserProfile = asyncHandler(async (req, res) => {
  // steps
  // 1. get user id from req.params.userID
  // 2. check if user exists in the database
  // 3. if user exists, getUser
  // 4. omit password from response
  // 5. return user

  const { userId } = validator(getProfileSchema, req.params);
  const user = await User.findById(userId);
  if (!user) {
    throw ApiError.notFound("User not found", {
      userId,
    });
  }
  const returnUser = Omit(user.toJSON(), ["password"]);
  return res
    .status(200)
    .json(new ApiResponse(returnUser, "User profile fetched successfully"));
});

const updateUserProfile = asyncHandler(async (req, res) => {
  // steps
  // 1. get user id from req.params.userID
  // 2. check if user exists in the database
  // 3. if user exists, updateUser
  // 4. return updated user

  const { userId } = validator(getProfileSchema, req.params);
  const { profile } = validator(updateProfileSchema, req.body);
  const user = await User.findById(userId);
  if (!user) throw ApiError.notFound("User not found", { userId });
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { ...profile },
    {
      new: true,
    }
  );
  if (!updatedUser) throw ApiError.notFound("User not found", { userId });
  return res
    .status(200)
    .json(new ApiResponse(updatedUser, "User profile updated successfully"));
});

export { getUserProfile, updateUserProfile };
