import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(), 
  emailAlternativo: z.string().email(), 
});

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email().array(),
  password: z.string().min(6),
  phone: z.string().array(),
});

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type user = z.infer<typeof UserSchema>
export type userCreate = z.infer<typeof CreateUserSchema>
export type userLogin = z.infer<typeof LoginUserSchema>
