import { Router } from "express";
import {
  createUser,
  deleteUser,
  listUser,
  profileUser,
  updateUser,
} from "../controllers/user.controller";
import schemaValidation from "../middleware/schemaValidation.middleware";
import verifyAuthToken from "../middleware/verifyAuthToken.middleware";
import verifyUserIsAdm from "../middleware/verifyUserIsAdm.middleware";
import userSchema from "../database/schemas/user.schema";

const userRouter = Router();

userRouter.post("", schemaValidation(userSchema), createUser);
userRouter.get("", verifyAuthToken, verifyUserIsAdm, listUser);
userRouter.get("/profile", verifyAuthToken, profileUser);
userRouter.patch("/:id", verifyAuthToken, updateUser);
userRouter.delete("/:id", verifyAuthToken, deleteUser);

export default userRouter;
