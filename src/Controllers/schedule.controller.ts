import { Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const schedule: Schedule = await scheduleServices.createSchedule(req.body);
  return res.status(201).json({ message: "Schedule created" });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await scheduleServices.readSchedule();

  return res.status(200).json(realEstate);
};

const realScheduleRealEstates = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const schedules = await scheduleServices.readScheduleRealEstates(id);

  return res.status(200).json(schedules);
};

export default { create, read, realScheduleRealEstates };
