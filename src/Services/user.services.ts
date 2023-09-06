import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../Interfaces";
import { userReadSchema, userReturnSchema } from "../Schemas";
import { usersRepo } from "../repositories";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = usersRepo.create(payload);
  await usersRepo.save(user);

  return userReturnSchema.parse(user);
};

const readUser = async (): Promise<UserRead> => {
  return userReadSchema.parse(await usersRepo.find());
};

const updateUser = async (
  user: User,
  payload: UserUpdate
): Promise<UserReturn> => {
  user.name = payload.name || user.name;
  user.email = payload.email || user.email;
  user.password = payload.password || user.password;

  await usersRepo.save(user);
  return userReturnSchema.parse(user);
};

const deleteUser = async (user: User): Promise<void> => {
  await usersRepo.softRemove(user);
};

export default { createUser, updateUser, deleteUser, readUser };
