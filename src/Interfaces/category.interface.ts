import { z } from "zod";
import { categoryCreateSchema, categoryReturnSchema } from "../Schemas";
import { Category } from "../entities";
import { Repository } from "typeorm";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRead = Array<Category>;
type CategoryReturn = z.infer<typeof categoryReturnSchema>;

type CategoriesRepo = Repository<Category>;

export { CategoryCreate, CategoryRead, CategoriesRepo, CategoryReturn };
