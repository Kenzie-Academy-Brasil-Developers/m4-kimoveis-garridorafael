import { User } from "./entities";
import { UsersRepo } from "./Interfaces";
import { AppDataSource } from "./data-source";

const usersRepo: UsersRepo = AppDataSource.getRepository(User);

export { usersRepo }