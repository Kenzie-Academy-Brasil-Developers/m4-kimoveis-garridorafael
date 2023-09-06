import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepo } from "../repositories";
import { AppError } from "../Errors";

const checkNameCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (name) {
    const foundCategory: Category | null = await categoriesRepo.findOne({
      where: { name: req.body.name },
    });

    if (foundCategory) {
      throw new AppError("Category already exists", 409);
    }

    res.locals = { ...res.locals, foundCategory };
  }

  return next();
};

export { checkNameCategoryExists };
