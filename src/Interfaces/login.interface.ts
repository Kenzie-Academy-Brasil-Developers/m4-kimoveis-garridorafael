import { z } from "zod";
import { loginCreateSchema } from "../Schemas";

type loginCreate = z.infer<typeof loginCreateSchema>;
type loginReturn = { token: string };

export { loginCreate, loginReturn }