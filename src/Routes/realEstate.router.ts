import { Router } from "express";
import { realEstateControllers } from "../Controllers";
import {
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody,
  checkNameCategoryExists,
} from "../Middlewares";
import { realEstateCreateSchema } from "../Schemas";

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
