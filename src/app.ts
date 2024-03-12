import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express, { Application, Router } from 'express';
import {userRoutes} from "./routes/userRoutes";
import { contactRouter } from "./routes/contactRoutes";
import swaggerRouter from "./swagger";
// import swaggerRouter from "./swagger"

export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/contact', contactRouter);

app.use('/docs', swaggerRouter)

// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./');

// const app = express();

// // Adicione a rota para a documentação Swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // Defina suas outras rotas aqui...

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// app.use('/api-docs', swaggerRouter); // Rota para acessar a documentação da API

// app.use('/api-documentation', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))

// app.use(cors({origin: 'http://localhost:5173'})
