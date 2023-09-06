import z from "zod";
import { addressCreateSchema, addressSchema } from "./address.schema";
import { scheduleSchema } from "./schedule.schema";
import { categorySchema } from "./category.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  address: addressCreateSchema,
  categoryId: z.number(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const realEstateCategory = realEstateSchema.omit({
  categoryId: true,
});

const realEstateCategoryReturn = realEstateCategory.extend({
  address: addressSchema,
});

const realEstateReturnSchema = realEstateSchema.extend({
  address: addressSchema,
  schedule: scheduleSchema,
  category: categorySchema,
});
const realEstateReadSchema = realEstateReturnSchema.array();

export {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateReadSchema,
  realEstateCategory,
  realEstateCategoryReturn,
};
