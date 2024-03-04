import { Phone } from './../entities/phoneEntities';
import { AppDataSource } from '../data-source';
import { Email } from '../entities/emailEntities';
// import { Phone } from '../entities/phoneEntities';
import { User } from '../entities/userEntitie';
import { userCreate, userLogin } from '../shemas/userShemas';
// import { Email } from '../entities/emailEntities';


export class UserService {
    async createUser(userData: userCreate) {
        const userRepository = AppDataSource.getRepository(User);
        const emailRepository = AppDataSource.getRepository(Email);
        const phoneRepository = AppDataSource.getRepository(Phone);

        // Cria um novo usuário com base nos dados fornecidos
        const newUser = userRepository.create(userData);
        console.log('usuario chegou', userData);


        // Salva o novo usuário no banco de dados
        const savedUser = await userRepository.save(newUser);
        console.log('cheguei aqui', savedUser);
        await Promise.all(userData.email.map( async (email) => {
            const newEmail = emailRepository.create({address: email, user: savedUser});
            return await emailRepository.save(newEmail)

        }))

        await Promise.all(userData.phone.map(async (phone) => {
            const newPhone = phoneRepository.create({number: phone, user: savedUser});
            return await phoneRepository.save(newPhone)
        }))


        const user = await userRepository.findOne({ where: { id: savedUser.id }, relations: { emails: true, phones: true } })

        // Retorna o usuário criado
        return user;
        
    }

    async loginUser(loginData: userLogin): Promise<User | null> {
        const { email, password } = loginData;
        const userRepository = AppDataSource.getRepository(User);

        try {
            // Verifica se o usuário existe com base no id, username ou email fornecido
            const user = await userRepository.findOne({ where: [{ email: loginData.email }, [ password]] });

            if (!user) {
                throw new Error('Usuário não encontrado');
            }

            // Retorna o usuário encontrado
            return user;
        } catch (error) {
            throw new Error('Erro ao fazer login: ' + error);
        }
    }

    async logoutUser(): Promise<void> {
       
    }
}
    



