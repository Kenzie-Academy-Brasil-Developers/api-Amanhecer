import { hash } from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { User } from '../entities/userEntitie';
import { userCreate, userResponse } from '../shemas/userShemas';
import { AppError } from '../errors/AppError';

const createUserService = async (data: userCreate): Promise<userResponse> => {
    const { email, name, password, phones } = data
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
        registrationData: user.registrationDate,
    }
}


export { createUserService }
    



