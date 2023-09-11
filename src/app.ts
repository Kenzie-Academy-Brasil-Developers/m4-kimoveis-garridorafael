import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import "dotenv/config";
import { handleErrors } from "./middlewares";
import {
  categoryRouter,
  loginRouter,
  realEstateRouter,
  scheduleRouter,
  userRouter,
} from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);
app.use(handleErrors);

export default app;
