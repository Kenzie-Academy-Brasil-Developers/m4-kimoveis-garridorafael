import { Request, Response } from "express";
import { userServices } from "../Services";
import { UserReturn } from "../Interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.createUser(req.body);

  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const user = await userServices.readUser();

  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;
  const { body } = req;
  const { sub, admin } = res.locals.decoded;

  if (admin || foundUser.id.toString() === sub) {
    const user: UserReturn = await userServices.updateUser(foundUser, body);
    return res.status(200).json(user);
  } else {
    return res.status(403).json({ message: "Insufficient permission" });
  }
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  await userServices.deleteUser(res.locals.foundUser);
  return res.status(204).json();
};

export default { create, update, remove, read };
