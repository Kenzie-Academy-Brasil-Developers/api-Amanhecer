import { AppDataSource } from "../data-source";
import { User } from "../entities/userEntitie";
import { Contact } from "../entities/contact.entities";
import { AppError } from "../errors/AppError";
import { TcontactRequest, TcontactResponse, TcontactsResponse } from "../interfaces/contactIntreface";
import { contactSchema } from "../shemas/contactShemas";
import { FindOneOptions } from "typeorm";

const contactRepository = AppDataSource.getRepository(Contact);
const userRepository = AppDataSource.getRepository(User);

export const contactCreateService = async (data: TcontactRequest, userId: number): Promise<TcontactResponse> => {
    const user = await userRepository.findOne({
        where: { id: userId }
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    const contact = contactRepository.create({
        ...data,
        user: user,
        
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
};

export const getAllContactsService = async (userId: number): Promise<TcontactsResponse[]> => {
    const userRepository = AppDataSource.getRepository(User);
    const contactRepository = AppDataSource.getRepository(Contact);

    const user = await userRepository.findOne({ where: { id: userId } });

    if (!user) {
        throw new AppError("User not found", 404);
    }


    const contacts = await contactRepository.find({ where: { user: { id: user.id } } });

    return contacts.map((contact) => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        registrationDate: contact.registrationDate,
        phone: contact.phone,
    }));
};

export const contactUpdateService = async (email: string, newData: { name: string; phone: string }): Promise<TcontactResponse> => {
    const options: FindOneOptions<Contact> = {
        where: { email },
    };

    let contact = await contactRepository.findOne(options);
    if (!contact) {
        throw new Error("Contact not found");
    }

    contact.name = newData.name;
    contact.phone = newData.phone;

    await contactRepository.save(contact);

    return {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        registrationDate: contact.registrationDate,
    };
};

export const contactRemoveService = async (email: string): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOne({ where: { email } });
    if (!contact) {
        throw new AppError("Contact not found", 404);
    }
    await contactRepository.remove(contact);
};
