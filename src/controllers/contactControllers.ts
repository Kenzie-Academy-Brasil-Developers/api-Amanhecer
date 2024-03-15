import { Request, Response } from "express";
import { contactCreateService, contactRemoveService, contactUpdateService, getAllContactsService  } from "../services/contactService";


export const createContactController = async (req: Request, res: Response) => {

    const userId = res.locals.userId;

    const newContact = await contactCreateService(req.body, userId);

    return res.status(201).json(newContact);
};

export const getAllContactsController = async (_req: Request, res: Response) => {
    const userId = res.locals.userId;
    const contacts = await getAllContactsService(userId);
    return res.status(200).json(contacts);
  };
  
  

export const contactUpdate = async (req: Request, res: Response) => {
    const { email } = req.params;
    console.log(email);
    
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

