import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepo } from "../repositories";
import { AppError } from "../errors";

const checkEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (email) {
    const foundEmail: User | null = await usersRepo.findOne({
      where: { email: req.body.email },
    });

    if (foundEmail) {
      throw new AppError("Email already exists", 409);
    }

    res.locals = { ...res.locals, foundEmail };
  }

  return next();
};

export { checkEmailExists };
