import { z } from "zod";
import { userCreateSchema } from "../Schemas";
import { User } from "../Entities";
import { DeepPartial, Repository } from "typeorm";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = Array<User>;
type UserUpdate = DeepPartial<User>;

type UsersRepo = Repository<User>;

export { UserCreate, UserRead, UserUpdate, UsersRepo };
