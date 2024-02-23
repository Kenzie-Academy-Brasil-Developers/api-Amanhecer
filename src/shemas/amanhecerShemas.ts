import { z } from 'zod';

export const AmanhecerSchema = z.object({
  id: z.number(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
  }),
  message: z.string(),
  created_at: z.string(),
});

export const CreateAmanhecerSchema = z.object({
  user_id: z.number(),
  message: z.string(),
});
