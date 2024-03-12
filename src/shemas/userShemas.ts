import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(), 
  registrationData: z.date(), 
});

export const CreateUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phones: z.string(),
  password: z.string().min(6),
  registrationData: z.date(), 
});

export const userSchemaResponse = CreateUserSchema.omit({ password: true});
export const createDataBody = CreateUserSchema.omit({id:true, registrationData: true})
export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type user = z.infer<typeof UserSchema>
export type userCreate = z.infer<typeof createDataBody>
export type userLogin = z.infer<typeof LoginUserSchema>
export type userResponse = z.infer<typeof userSchemaResponse>