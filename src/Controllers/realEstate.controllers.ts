import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateServices } from "../Services";
import { realEstateRepo } from "../repositories";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstate = await realEstateServices.createRealEstate(
    req.body
  );

  const realEstateWithCategory = await realEstateRepo.findOne({
    where: { id: realEstate.id },
    relations: ["category", "address"],
  });

  return res.status(201).json(realEstateWithCategory);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstateServices.readRealEstate();

  return res.status(200).json(realEstate);
};

export default { create, read };
