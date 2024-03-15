import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express, { Application, Router } from 'express';
import {userRoutes} from "./routes/userRoutes";
import { contactRouter } from "./routes/contactRoutes";
import swaggerRouter from "./swagger";


export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/contact', contactRouter);

app.use('/docs', swaggerRouter)

