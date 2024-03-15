import { date, z } from "zod";


const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(), 
  registrationDate: date(), 
  
})

const contactSchemaRequest = contactSchema.omit({
  id: true,
})

const contactShemaCreate = contactSchema.omit({
  user: true, id:true, created_at: true, registrationDate: true
})

const contactSchemaUpdate = contactSchema.omit({
    id: true,
    registrationDate: true
}).partial()


const contactsSchemaResponse = z.array(contactSchema)

export { contactSchema, contactSchemaRequest, contactShemaCreate, contactSchemaUpdate, contactsSchemaResponse }

