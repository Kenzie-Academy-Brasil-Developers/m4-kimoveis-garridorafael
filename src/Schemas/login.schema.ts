import { userSchema } from "./user.schema";

const loginCreateSchema = userSchema.pick({ email: true, password: true });

export { loginCreateSchema }