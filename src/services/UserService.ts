import axios from 'axios';

export class UserService {
    async createUser(name: string, email: string, password: string) {
        console.log(name, email, password);
        
        try {
            const response = await axios.post('/api/users/register', { name, email, password });
            return response.data;
        } catch (error) {
            throw new Error('Erro ao registrar usuário');
        }
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
