import { Request, Response } from "express";
import { contactRemoveService, contactUpdateService, getAllContactsService  } from "../services/contactService"
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";
import { User } from "../entities/userEntitie";
import { AppError } from "../errors/AppError";



export const contactCreate = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const data = req.body;
    
    const { email, name, phone } = data;
    const contactRepository = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);

    try {
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            throw new AppError("The current logged-in user was not found", 404);
        }

        const findContact = await contactRepository.findOne({ where: { email: email, user: { id: user.id } } });
        if (findContact) {
            throw new AppError("Contact already exists", 409);
        }

        const contact = contactRepository.create({
            name,
            email,
            phone,
            user: user,
        });

        await contactRepository.save(contact);

        const responseData = {
            ...contact,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                registrationDate: user.registrationDate,
            },
        };

        return res.status(201).json(responseData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAllContactsController = async (_req: Request, res: Response) => {
    const userId = res.locals.userId;
    const contacts = await getAllContactsService(userId);
    return res.status(200).json(contacts);
  };
  
  

export const contactUpdate = async (req: Request, res: Response) => {
    const { email } = req.params;
    const { name, phone } = req.body;
    
    try {
        const updatedContact = await contactUpdateService(email, { name, phone });
        return res.json(updatedContact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const contactRemove = async (req: Request, res: Response) => {
    const { email } = req.params;

    await contactRemoveService(email);

    return res.status(204).json({ message: "Contact deleted successfully" });
};

