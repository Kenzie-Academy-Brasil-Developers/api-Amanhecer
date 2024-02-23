import express from 'express';
import userRoutes from './src/routes/userRoutes';
import amanhecerRoutes from './src/routes/amanhecerRoutes';

const app = express();
const PORT = 3001;

// Registrando as rotas
app.use('/api/users', userRoutes);
app.use('/api/amanhecer', amanhecerRoutes);

// Configuração para lidar com requisições JSON
app.use(express.json());

// Configuração para lidar com requisições URL-encoded
app.use(express.urlencoded({ extended: true }));

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
