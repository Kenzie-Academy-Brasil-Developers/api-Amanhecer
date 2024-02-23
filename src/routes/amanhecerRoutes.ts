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



// import express from 'express';
// import { AmanhecerController } from '../controllers/amanhecerControllers';
// import { validateRequest } from '../middlewares/validateMiddleware';
// import { CreateAmanhecerSchema } from '../shemas/amanhecerShemas';

// const router = express.Router();
// const amanhecerController = new AmanhecerController();

// router.post('/', validateRequest(CreateAmanhecerSchema), amanhecerController.createAmanhecer);
// router.get('/', amanhecerController.getAmanhecerList);
// router.get('/:id', amanhecerController.getAmanhecerById);
// router.put('/:id', validateRequest(CreateAmanhecerSchema), amanhecerController.updateAmanhecer);
// router.delete('/:id', amanhecerController.deleteAmanhecer);

// export default router;
