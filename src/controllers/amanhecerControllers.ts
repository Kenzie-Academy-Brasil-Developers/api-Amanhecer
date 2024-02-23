import { Request, Response } from 'express';
import { AmanhecerService } from '../services/amanhecerService';

const amanhecerService = new AmanhecerService();

export class AmanhecerController {
  async list(req: Request, res: Response) {
    try {
      const amanhecerList = await amanhecerService.list();
      return res.json(amanhecerList);
    } catch (error) {
      console.error(error); // Log o erro para depuração
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { message } = req.body;
      const updatedAmanhecer = await amanhecerService.update(parseInt(id), message);
      return res.json(updatedAmanhecer);
    } catch (error) {
      console.error(error); // Log o erro para depuração
      if (error instanceof Error && error.message) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(400).json({ error: 'Unknown error occurred' });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await amanhecerService.delete(parseInt(id));
      return res.json({ message: 'Amanhecer deleted successfully' });
    } catch (error) {
      console.error(error); // Log o erro para depuração
      if (error instanceof Error && error.message) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(400).json({ error: 'Unknown error occurred' });
      }
    }
  }
}

