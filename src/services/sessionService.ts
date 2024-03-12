import { userLogin } from './../shemas/userShemas';
import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { User } from "../entities/userEntitie";
import jwt from "jsonwebtoken";


const createTokenService = async ({ email, password }: userLogin) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
        throw new AppError("Invalid credentials", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, { expiresIn: '1d', subject: String(user.id) });

    return token
}

export { createTokenService }
