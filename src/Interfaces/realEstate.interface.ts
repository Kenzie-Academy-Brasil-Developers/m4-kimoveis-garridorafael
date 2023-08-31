import { z } from "zod";
import { realEstateCreateSchema } from "../Schemas";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = Array<RealEstate>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRead, RealEstateRepo };
