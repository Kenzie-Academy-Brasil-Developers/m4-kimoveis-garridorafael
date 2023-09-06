import { z } from "zod";
import { realEstateCreateSchema, realEstateReturnSchema } from "../Schemas";
import { Address, RealEstate } from "../entities";
import { Repository } from "typeorm";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = Array<RealEstate>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;

type RealEstateRepo = Repository<RealEstate>;
type AddressRepo = Repository<Address>;

export {
  RealEstateCreate,
  RealEstateRead,
  RealEstateRepo,
  AddressRepo,
  RealEstateReturn,
};
