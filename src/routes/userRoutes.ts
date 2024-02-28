import {Router} from 'express';
import { UserController } from '../controllers/userControllers';
// import { validateRequest } from '../middlewares/validateMiddleware';
// import { CreateUserSchema, LoginUserSchema } from '../shemas/userShemas';

export const userRoutes:Router = Router();
const userController = new UserController();

// usersRouter.post('/register', validateRequest(CreateUserSchema), userController.createUser);
userRoutes.post('/register', userController.createUser);
// usersRouter.post('/login', validateRequest(LoginUserSchema), userController.loginUser);

// export default {userRoutes};
