import axios from 'axios';

export class AmanhecerService {
    async list() {
        try {
            // Lógica para listar os amanheceres do banco de dados
            const response = await axios.get('/api/amanhecer');
            return response.data;
        } catch (error) {
            throw new Error('Failed to list amanheceres');
        }
    }

    async update(id: number, message: string) {
        try {
            // Lógica para atualizar o amanhecer no banco de dados
            const response = await axios.put(`/api/amanhecer/${id}`, { message });
            return response.data;
        } catch (error) {
            throw new Error('Failed to update amanhecer');
        }
    }

    async delete(id: number) {
        try {
            // Lógica para excluir o amanhecer do banco de dados
            await axios.delete(`/api/amanhecer/${id}`);
            return { message: 'Amanhecer deleted successfully' };
        } catch (error) {
            throw new Error('Failed to delete amanhecer');
        }
    }
}
