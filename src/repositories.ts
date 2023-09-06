import { Address, Category, RealEstate, Schedule, User } from "./entities";
import {
  AddressRepo,
  CategoriesRepo,
  RealEstateRepo,
  ScheduleRepo,
  UsersRepo,
} from "./Interfaces";
import { AppDataSource } from "./data-source";

const usersRepo: UsersRepo = AppDataSource.getRepository(User);
const categoriesRepo: CategoriesRepo = AppDataSource.getRepository(Category);
const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);
const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

export { usersRepo, categoriesRepo, realEstateRepo, addressRepo, scheduleRepo };
