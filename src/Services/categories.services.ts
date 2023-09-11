import { AppError } from "../errors";
import { CategoryCreate, CategoryRead, CategoryReturn } from "../interfaces";
import { Category } from "../entities";
import { categoriesRepo } from "../repositories";

const createCategory = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoriesRepo.create(payload);
  await categoriesRepo.save(category);

  return category;
};

const readCategories = async (): Promise<CategoryRead> => {
  return await categoriesRepo.find();
};

const readRealEstatesByCategories = async (
  categoryId: number
): Promise<CategoryReturn> => {
  const category = await categoriesRepo.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default { createCategory, readCategories, readRealEstatesByCategories };
