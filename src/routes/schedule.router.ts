import { Router } from "express";
import { scheduleController } from "../controllers";
import { scheduleCreateSchema } from "../schemas";
import {
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody,
  checkUserVisitConflict,
  checkBusinessHoursAndDays,
} from "../middlewares";

const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  verifyToken,
  validateBody(scheduleCreateSchema),
  checkBusinessHoursAndDays,
  checkUserVisitConflict,
  scheduleController.create
);
scheduleRouter.get("", scheduleController.read);
scheduleRouter.get(
  "/realEstate/:id",
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  scheduleController.realScheduleRealEstates
);

export default scheduleRouter;
