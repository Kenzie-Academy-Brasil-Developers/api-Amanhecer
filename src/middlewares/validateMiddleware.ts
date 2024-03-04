import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema } from 'zod';

export function validateRequest(schema: ZodSchema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      } else {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}

