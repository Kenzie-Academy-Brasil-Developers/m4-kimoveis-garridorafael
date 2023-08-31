import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import "dotenv/config"
import { handleErrors } from './Middlewares';
import { loginRouter, userRouter } from './Routes';

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use(handleErrors);

export default app;
