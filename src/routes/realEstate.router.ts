import { Router } from "express";
import { realEstateControllers } from "../controllers";
import {
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody,
  checkNameCategoryExists,
} from "../middlewares";
import { realEstateCreateSchema } from "../schemas";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody(realEstateCreateSchema),
  checkNameCategoryExists,
  realEstateControllers.create
);

realEstateRouter.get("", realEstateControllers.read);

export default realEstateRouter;
