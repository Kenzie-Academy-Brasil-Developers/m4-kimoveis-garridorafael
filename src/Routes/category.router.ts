import { Router } from "express";
import {
  checkNameCategoryExists,
  validateAdmin,
  validateBody,
  verifyToken,
  verifyUserPermission,
} from "../Middlewares";
import { categoryCreateSchema } from "../Schemas";
import { categoriesController } from "../Controllers";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody(categoryCreateSchema),
  checkNameCategoryExists,
  categoriesController.create
);

categoryRouter.get("", categoriesController.read);
categoryRouter.get(
  "/:id/realEstate",
  categoriesController.readCategoryRealEstates
);

export default categoryRouter;
