import { CategoryCreate, CategoryRead } from "./category.interface";
import { loginCreate, loginReturn } from "./login.interface";
import {
  RealEstateCreate,
  RealEstateRead,
  RealEstateRepo,
} from "./realEstate.interface";
import { ScheduleCreate } from "./schedule.interface";
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
  ScheduleCreate,
  RealEstateCreate,
  RealEstateRead,
  RealEstateRepo,
  loginCreate,
  loginReturn,
};
