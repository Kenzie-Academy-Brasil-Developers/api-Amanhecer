import express from 'express';
import "dotenv/config";
import userRoutes from './src/routes/userRoutes';
import amanhecerRoutes from './src/routes/amanhecerRoutes';
import cors from 'cors'
  
const app = express();
const PORT = 3001;
app.use(cors({origin: 'http://localhost:5173'}))

app.use('/api/users', userRoutes);
app.use('/api/amanhecer', amanhecerRoutes);

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
require('./endpoints')(app)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
