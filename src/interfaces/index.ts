import {
  CategoryCreate,
  CategoryRead,
  CategoriesRepo,
  CategoryReturn,
} from "./category.interface";
import { loginCreate, loginReturn } from "./login.interface";
import {
  RealEstateCreate,
  RealEstateRead,
  RealEstateRepo,
  AddressRepo,
  RealEstateReturn,
} from "./realEstate.interface";
import {
  ScheduleCreate,
  ScheduleRead,
  ScheduleRepo,
  ScheduleReturn,
} from "./schedule.interface";
import {
  UserCreate,
  UserRead,
  UserReturn,
  UserUpdate,
  UsersRepo,
} from "./user.interface";

export {
  UserCreate,
  UserRead,
  UserUpdate,
  UsersRepo,
  UserReturn,
  CategoryCreate,
  CategoryRead,
  CategoryReturn,
  CategoriesRepo,
  ScheduleCreate,
  ScheduleRepo,
  ScheduleRead,
  ScheduleReturn,
  RealEstateCreate,
  RealEstateRead,
  RealEstateRepo,
  RealEstateReturn,
  AddressRepo,
  loginCreate,
  loginReturn,
};
