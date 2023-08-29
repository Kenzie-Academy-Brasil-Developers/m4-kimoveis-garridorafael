import z from "zod";
import { addressReturnSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number(),
  address: addressReturnSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateReturnSchema = realEstateSchema;

export { realEstateSchema, realEstateCreateSchema, realEstateReturnSchema };
