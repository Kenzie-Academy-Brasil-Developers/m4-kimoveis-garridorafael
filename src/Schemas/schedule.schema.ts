import z from "zod";
import { userReturnSchema, userSchema } from "./user.schema";
import { realEstateReturnSchema, realEstateSchema } from "./realEstate.schema";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  user: userSchema,
  realEstate: realEstateSchema,
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  user: true,
  realEstate: true,
});
const scheduleReturnSchema = scheduleSchema.extend({
  user: userReturnSchema,
  realEstate: realEstateReturnSchema,
});

export { scheduleSchema, scheduleCreateSchema, scheduleReturnSchema };
