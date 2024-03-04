import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService = new UserService();

    public createUser = async (req: Request, res: Response): Promise<Response> => {
        console.log('usuario', req.body); 
        try{
            const body = req.body
            const newBody = await this.userService.createUser(body)
            return res.status(201).json(newBody);
        }catch (error) {
            return res.status(400).json({ error: 'Não funcionou' });
        }
    }
}
