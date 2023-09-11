import { z } from "zod";
import { loginCreateSchema } from "../schemas";

type loginCreate = z.infer<typeof loginCreateSchema>;
type loginReturn = { token: string };

export { loginCreate, loginReturn }