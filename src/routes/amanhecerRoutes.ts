import express from 'express';
import { AmanhecerController } from '../controllers/amanhecerControllers';

const router = express.Router();
const amanhecerController = new AmanhecerController();

// Rota para listar amanheceres
router.get('/', amanhecerController.list);

// Rota para atualizar um amanhecer
router.put('/:id', amanhecerController.update);

// Rota para excluir um amanhecer
router.delete('/:id', amanhecerController.delete);

export default router;

