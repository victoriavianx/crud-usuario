import { Router } from "express";
import {
  createUser,
  deleteUser,
  listUser,
  profileUser,
  updateUser,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("", createUser);
userRouter.get("", listUser);
userRouter.get("/profile", profileUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
