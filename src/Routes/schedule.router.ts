import { Router } from "express";
import { scheduleController } from "../Controllers";
import { scheduleCreateSchema } from "../Schemas";
import {
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  validateBody,
  checkUserVisitConflict,
  checkBusinessHoursAndDays,
} from "../Middlewares";

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
