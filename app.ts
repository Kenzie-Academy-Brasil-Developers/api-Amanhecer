import express from 'express';
import userRoutes from './src/routes/userRoutes';
import amanhecerRoutes from './src/routes/amanhecerRoutes';

const app = express();
const PORT = 3001;

app.use('/api/users', userRoutes);
app.use('/api/amanhecer', amanhecerRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
