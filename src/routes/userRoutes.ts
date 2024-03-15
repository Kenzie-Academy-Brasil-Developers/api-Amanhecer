import { createDataBody } from './../shemas/userShemas';
import { Router } from 'express';
import { createUserController } from './../controllers/userControllers';
import { LoginUserSchema } from '../shemas/userShemas';
import { createTokenController } from '../controllers/sessionController';
import { contactDataIsValidMiddleware } from '../middlewares/contactDataIsValid.middleware';

export const userRoutes: Router = Router();


userRoutes.post('/register', contactDataIsValidMiddleware(createDataBody), createUserController);
userRoutes.post('/login', contactDataIsValidMiddleware(LoginUserSchema), createTokenController);


export default { userRoutes };