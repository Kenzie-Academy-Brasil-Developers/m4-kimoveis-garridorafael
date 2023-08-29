import { z } from "zod";
import { scheduleCreateSchema } from "../Schemas";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export { ScheduleCreate };
