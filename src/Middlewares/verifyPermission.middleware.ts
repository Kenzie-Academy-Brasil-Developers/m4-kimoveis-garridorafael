import { NextFunction, Request, Response } from "express";
import { AppError } from "../Errors";
import { verify } from "jsonwebtoken";

const verifyUserPermission = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const { userId } = req.params;
    const { sub, admin } = res.locals.decoded;
  
    if (admin) return next();
  
    if (userId !== sub) {
      throw new AppError("Insufficient permission", 403);
    }
  
    return next();
  };

  const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | undefined = req.headers.authorization;
    if (!authorization) throw new AppError("Missing bearer token", 401);
  
    const token: string = authorization.split(" ")[1];
    const decoded = verify(token, process.env.SECRET_KEY!);
  
    res.locals = { ...res.locals, decoded };
  
    return next();
  };
  
  const validateAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const { admin } = res.locals.decoded;
    if (!admin) throw new AppError("Insufficient permission", 403);
  
    return next();
  };

  export { verifyUserPermission, verifyToken, validateAdmin }