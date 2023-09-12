import { NextFunction, Request, Response } from "express";
import { scheduleRepo } from "../repositories";
import { AppError } from "../errors";

const checkUserVisitConflict = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, realEstateId, date, hour } = req.body;

  const userConflictVisits = await scheduleRepo.find({
    where: {
      user: { id: user },
      date,
      hour,
    },
  });

  const realEstateConflictVisits = await scheduleRepo.find({
    where: {
      realEstate: { id: realEstateId },
      date,
      hour,
    },
  });

  if (realEstateConflictVisits.length > 0) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  if (userConflictVisits.length > 0) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  next();
};

const checkBusinessHoursAndDays = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, hour } = req.body;

  const visitDate = new Date(date);
  const visitHour = parseInt(hour.split(":")[0]);

  if (visitHour < 8 || visitHour >= 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (visitDate.getDay() === 0 || visitDate.getDay() === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  next();
};

export { checkBusinessHoursAndDays, checkUserVisitConflict };
