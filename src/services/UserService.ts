import { User } from './../entities/userEntitie';
// import { DataSource } from 'typeorm';
import { userCreate } from './../shemas/userShemas';
import axios from 'axios';
import { AppDataSource } from '../data-source';


export class UserService {
    async createUser(payload:userCreate) {
        console.log('chequei', payload);
        
        const userRepository = AppDataSource.getRepository(User)

        try{
            const user = await userRepository.create(payload)
            console.log('user', user);
            
            const newUser = await userRepository.save(user)
            return newUser
        }catch (error) {
            throw new Error('Erro ao registrar usuário');
            }

        // try {
        //     const response = await axios.post('/users/register', { payload });
        //     return response;
        // } catch (error) {
        //     throw new Error('Erro ao registrar usuário');
        // }
    }

    async loginUser(email: string, password: string) {
        console.log(email, password);

        try {
            const response = await axios.post('/api/users/login', { email, password });
            return response.data;
        } catch (error) {
            throw new Error('Credenciais inválidas');
        }
    }

    async logoutUser() {
        try {
            // Implementar lógica de logout, se necessário
            return { message: 'Logout bem-sucedido' };
        } catch (error) {
            throw new Error('Erro ao fazer logout');
        }
    }
}
// import axios from 'axios';

// interface UserData {
//     name: string;
//     email: string;
//     password: string;
//     contato: string;
//     emailAlternativo: string;
// }

// export class UserService {
//     async createUser(userData: UserData) {
//         try {
//             const response = await axios.post('/users', userData);
//             return response.data;
//         } catch (error) {
//             throw new Error('Erro ao registrar usuário');
//         }
//     }

//     async loginUser(loginData: { email: string; password: string }) {
//         try {
//             const response = await axios.post('/api/amanhecer/login/', loginData);
//             return response.data;
//         } catch (error) {
//             throw new Error('Credenciais inválidas');
//         }
//     }

//     async logoutUser() {
//         try {
//             // Implementar lógica de logout, se necessário
//             return { message: 'Logout bem-sucedido' };
//         } catch (error) {
//             throw new Error('Erro ao fazer logout');
//         }
//     }
// }
