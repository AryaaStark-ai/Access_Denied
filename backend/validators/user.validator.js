import zod from "zod";
import { idSchema } from "./common.validator";

const userProfileSchema = zod.object({
  username: zod.string().min(3).max(20).optional(),
  email: zod.string().email().optional(),
  roles: zod.enum(["student", "instructor"]).optional(),
});

const getProfileSchema = zod.object({
  userId: idSchema,
});

export { userProfileSchema, getProfileSchema };
