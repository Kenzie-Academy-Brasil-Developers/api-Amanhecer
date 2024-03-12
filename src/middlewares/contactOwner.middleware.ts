import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { Contact } from "../entities/contact.entities";

export const contactOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contactId = parseInt(req.params.id, 10);
    const userId = res.locals.userId;

    const contact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    });

    if (!contact) {
        throw new AppError("Contact not found", 404);
    }

    if (contact.user.id !== userId) {
        throw new AppError("You don't have permissions", 403);
    }

    return next();
};
