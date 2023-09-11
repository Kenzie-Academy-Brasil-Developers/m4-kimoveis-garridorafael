import { Request, Response } from "express";
import { categoriesServices } from "../services";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoriesServices.createCategory(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const category = await categoriesServices.readCategories();

  return res.status(200).json(category);
};

const readCategoryRealEstates = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const category = await categoriesServices.readRealEstatesByCategories(id);

  return res.status(200).json(category);
};

export default { create, read, readCategoryRealEstates };
