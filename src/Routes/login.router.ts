import { Router } from "express";
import { loginController } from "../Controllers";
import { validateBody } from "../Middlewares";
import { loginCreateSchema } from "../Schemas";

const loginRouter: Router = Router();

loginRouter.post("", validateBody(loginCreateSchema), loginController.create);

export default loginRouter;
