import { Router } from "express";
import { userLogin } from "../controllers/login.controller";
import schemaValidation from "../middleware/schemaValidation.middleware";
import loginSchema from "../database/schemas/login.schema";

const loginRouter = Router();

loginRouter.post("", schemaValidation(loginSchema), userLogin);

export default loginRouter;
