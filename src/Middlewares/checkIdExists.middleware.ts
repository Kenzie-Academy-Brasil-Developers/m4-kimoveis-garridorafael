import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepo } from "../repositories";
import { AppError } from "../Errors";

const checkIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundUser: User | null = await usersRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!foundUser) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundUser };

  return next();
};

export { checkIdExists };
