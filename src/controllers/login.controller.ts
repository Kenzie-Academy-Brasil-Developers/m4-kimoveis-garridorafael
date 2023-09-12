import { Request, Response } from "express";
import { loginReturn } from "../interfaces";
import { loginService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: loginReturn = await loginService.createLogin(req.body);

  return res.status(200).json(token);
};

export default { create };
