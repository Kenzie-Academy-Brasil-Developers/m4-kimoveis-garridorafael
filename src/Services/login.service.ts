import { compare } from "bcryptjs";
import { AppError } from "../Errors";
import { usersRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import { loginCreate, loginReturn } from "../Interfaces";

const create = async (payload: loginCreate): Promise<loginReturn> => {
  
    try {
      const user = await usersRepo.findOneBy({ email: payload.email });
  
      if (!user) {
        throw new AppError("Invalid credentials", 401);
      }
  
      const samePassword = await compare(payload.password, user.password);
  
      if (!samePassword) {
        throw new AppError("Invalid credentials", 401);
      }
  
      const token = sign(
        { name: user.name, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
      );
  
      return { token };
    } catch (error) {
      throw new AppError("An error occurred during authentication", 500);
    }
  };

  export default { create }