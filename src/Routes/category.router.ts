import { Router } from "express";
import {
  checkNameCategoryExists,
  validateAdmin,
  validateBody,
  verifyToken,
  verifyUserPermission,
} from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoriesController } from "../controllers";

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
