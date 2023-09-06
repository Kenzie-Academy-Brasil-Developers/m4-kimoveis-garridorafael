import { z } from "zod";
import { scheduleCreateSchema, scheduleReturnSchema } from "../Schemas";
import { Schedule } from "../entities";
import { Repository } from "typeorm";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleReturnSchema>;
type ScheduleRead = Array<Schedule>;
type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRepo, ScheduleRead, ScheduleReturn };
