import "reflect-metadata"
import "express-async-errors"
import cors from 'cors'
import express, { Application, Router } from 'express';
import {userRoutes} from "./routes/userRoutes";


// import "dotenv/config";


export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes as Router);
// app.use('/amamnhecer', amanhecerRoutes);

// export default app;

// const app = express();
// const PORT = 3001;
// app.use(cors({origin: 'http://localhost:5173'}))

// // app.use('/users', userRoutes);
// app.use('/', userRoutes);
// app.use('/amanhecer', amanhecerRoutes);

// const swaggerUi = require('swagger-ui-express')
// const swaggerFile = require('./swagger_output.json')
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// require('./endpoints')(app)

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
