import { AppError } from "../errors";
import { ScheduleCreate, ScheduleRead } from "../interfaces";
import { RealEstate, Schedule } from "../entities";
import { realEstateRepo, scheduleRepo } from "../repositories";

const createSchedule = async (payload: ScheduleCreate): Promise<Schedule> => {
  const realEstate = await realEstateRepo.findOne({
    where: { id: payload.realEstateId },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const schedule = scheduleRepo.create({
    date: payload.date,
    hour: payload.hour,
    realEstate: realEstate,
  });

  await scheduleRepo.save(schedule);

  return schedule;
};

const readSchedule = async (): Promise<ScheduleRead> => {
  return await scheduleRepo.find();
};

const readScheduleRealEstates = async (
  realEstateId: number
): Promise<RealEstate> => {
  const schedules = await realEstateRepo.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      schedules: { user: true },
      address: true,
      category: true,
    },
  });
  if (!schedules) throw new AppError("RealEstate not found", 404);

  return schedules;
};

export default { createSchedule, readSchedule, readScheduleRealEstates };
