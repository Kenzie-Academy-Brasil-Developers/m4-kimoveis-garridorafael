import { Router } from "express";
import { loginController } from "../controllers";
import { validateBody } from "../middlewares";
import { loginCreateSchema } from "../schemas";

const loginRouter: Router = Router();

loginRouter.post("", validateBody(loginCreateSchema), loginController.create);

export default loginRouter;
