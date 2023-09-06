import { compare } from "bcryptjs";
import { AppError } from "../Errors";
import { usersRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import { loginCreate, loginReturn } from "../Interfaces";
import { User } from "../entities";

const createLogin = async ({
  email,
  password,
}: loginCreate): Promise<loginReturn> => {
  const foundUserCredential: User | null = await usersRepo.findOneBy({ email });
  if (!foundUserCredential) throw new AppError("Invalid credentials", 401);

  const samePassword: boolean = await compare(
    password,
    foundUserCredential.password
  );
  if (!samePassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: foundUserCredential.admin },
    process.env.SECRET_KEY!,
    {
      subject: foundUserCredential.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    }
  );

  return { token };
};

export default { createLogin };
