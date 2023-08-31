import { Router } from "express";
import {
  checkEmailExists,
  checkIdExists,
  validateAdmin,
  validateBody,
  verifyToken,
  verifyUserPermission,
} from "../Middlewares";
import { userCreateSchema, userUpdateSchema } from "../Schemas";
import { userController } from "../Controllers";

const userRouter: Router = Router();

userRouter.post(
  "",
  checkEmailExists,
  validateBody(userCreateSchema),
  userController.create
);
userRouter.get(
  "",
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  userController.read
);
userRouter.patch(
  "/:id",
  checkIdExists,
  checkEmailExists,
  validateBody(userUpdateSchema),
  userController.update
);
userRouter.delete(
  "/:id",
  checkIdExists,
  verifyToken,
  validateAdmin,
  verifyUserPermission,
  userController.remove
);

export default userRouter;
