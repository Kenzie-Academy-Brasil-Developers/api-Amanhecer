import { hash } from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { User } from '../entities/userEntitie';
import { userCreate, userLogin } from '../shemas/userShemas';
import { AppError } from '../errors/AppError';


export class UserService {
    async createUser(userData: userCreate) {
        const { email, name, password, phones } = userData
        const userRepository = AppDataSource.getRepository(User);
        const findUser = await userRepository.findOne({
            where: {
                email
            }
        })
        if (findUser) {
            throw new AppError("user already exists", 409)
        }
        const hashedPassword = await hash(password, 10)

        const user = userRepository.create({ email, name, password: hashedPassword, phones })

        await userRepository.save(user)

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phones: user.phones,
            registrationDate: user.registrationDate,
        }
    }
}
    



