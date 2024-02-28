import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService = new UserService();

    // constructor() {
    //     this.userService = new UserService();
    // }

    public createUser = async (req: Request, res: Response): Promise<Response> => {
        console.log(req.body);
        const body = req.body
        const newBody = await this.userService.createUser(body)
        return res.json(201).json(newBody);


        // try{
        // }catch (error) {
        //     return res.status(400).json({ error: 'Não funcionou' });
        // }
    }

    // async loginUser(req: Request, res: Response) {
    //     console.log(req.body);
        
    //     try {
    //         const { email, password } = req.body;
    //         const token = await this.userService.loginUser({ email, password });
    //         return res.json({ token });
    //     } catch (error) {
    //         return res.status(400).json({ error: 'Não funcionou' });
    //     }
    // }
}



// import { Request, Response } from 'express';
// import { registerUser, loginUser, UserService } from '../services/UserService'; 

// export class UserController {
//     async createUser(req: Request, res: Response) {
//         try {
//             const { name, email, password } = req.body;
//             const userService = new UserService();
//             const user = await userService.createUser({ name, email, password });
//             return res.json(user);
//         } catch (error) {
//             return res.status(400).json({ error: error.message });
//         }
//     }

//     async loginUser(req: Request, res: Response) {
//         try {
//             const { email, password } = req.body;
//             const userService = new UserService();
//             const token = await userService.loginUser({ email, password });
//             return res.json({ token });
//         } catch (error) {
//             return res.status(400).json({ error: error.message });
//         }
//     }
// }
