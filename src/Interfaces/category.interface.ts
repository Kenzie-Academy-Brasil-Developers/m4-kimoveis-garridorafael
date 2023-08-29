import { z } from "zod";
import { categoryCreateSchema } from "../Schemas";
import { Category } from "../Entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRead = Array<Category>;

export { CategoryCreate, CategoryRead }