import z from "zod";
import { realEstateCategoryReturn } from "./realEstate.schema";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  realEstate: realEstateCategoryReturn,
});

const categoryCreateSchema = categorySchema.omit({
  id: true,
  realEstate: true,
});
const categoryReturnSchema = categorySchema.extend({
  realEstate: realEstateCategoryReturn.array(),
});

export { categorySchema, categoryCreateSchema, categoryReturnSchema };
