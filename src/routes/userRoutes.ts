import express from 'express';
import { UserController } from '../controllers/userControllers';
import { validateRequest } from '../middlewares/validateMiddleware';
import { CreateUserSchema, LoginUserSchema } from '../shemas/userShemas';

const router = express.Router();
const userController = new UserController();

router.post('/register', validateRequest(CreateUserSchema), userController.createUser);
router.post('/login', validateRequest(LoginUserSchema), userController.loginUser);

export default router;
