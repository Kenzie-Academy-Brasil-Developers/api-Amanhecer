import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response) {
        console.log(req.body);
        
        // try {
        //     const { name, email, password } = req.body;
        //     const user = await this.userService.createUser({ name, email, password });
        //     return res.json(user);
        // } catch (error) {
        //     return res.status(400).json({ error: error.message });
        // }
    }

    async loginUser(req: Request, res: Response) {
        console.log(req.body);
        
        // try {
        //     const { email, password } = req.body;
        //     const token = await this.userService.loginUser({ email, password });
        //     return res.json({ token });
        // } catch (error) {
        //     return res.status(400).json({ error: error.message });
        // }
    }
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
