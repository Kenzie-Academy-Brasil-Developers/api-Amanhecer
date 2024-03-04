import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { User } from "../entities/userEntitie";
import { userLogin } from "../shemas/userShemas";
import jwt from "jsonwebtoken";


export class SessionService {
    async createToken(data: userLogin): Promise<string> {
        const { email, password } = data;
        const userRepository = AppDataSource.getRepository(User);
        const foundUser = await userRepository.findOne({
            where: { email }
        });

        if (!foundUser || !(await compare(password, foundUser.password))) {
            throw new AppError('Credenciais inválidas', 401);
        }

        const token = jwt.sign({ userName: foundUser.name }, process.env.SECRET_KEY!, { expiresIn: '1d', subject: String(foundUser.id)});
        return token;
    }
}