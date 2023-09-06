import { AppError } from "../Errors";
import { RealEstateCreate, RealEstateRead } from "../Interfaces";
import { RealEstate } from "../entities";
import { addressRepo, categoriesRepo, realEstateRepo } from "../repositories";

const createRealEstate = async (
  payload: RealEstateCreate
): Promise<RealEstate> => {
  const existingAddress = await addressRepo.findOne({
    where: payload.address,
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }

  const category = await categoriesRepo.findOne({
    where: { id: payload.categoryId },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const newAddress = addressRepo.create(payload.address);
  await addressRepo.save(newAddress);

  const realEstate = realEstateRepo.create({
    value: payload.value,
    size: payload.size,
    address: newAddress,
    category,
  });

  await realEstateRepo.save(realEstate);

  return realEstate;
};

const readRealEstate = async (): Promise<RealEstateRead> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};

export default { createRealEstate, readRealEstate };
