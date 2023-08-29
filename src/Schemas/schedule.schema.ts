import z from "zod";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string()
});

const scheduleCreateSchema = scheduleSchema.omit({id: true});

export { scheduleSchema, scheduleCreateSchema }