import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema } from 'zod';

export function validateRequest(schema: ZodSchema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validar o corpo da requisição com o esquema fornecido
      schema.parse(req.body);
      // Se a validação for bem-sucedida, avançar para o próximo middleware
      next();
    } catch (error) {
      // Verificar se o erro é do tipo ZodError
      if (error instanceof ZodError) {
        // Se for, retornar uma resposta de erro com detalhes sobre os campos inválidos
        return res.status(400).json({ error: error.errors });
      } else {
        // Caso contrário, tratar como um erro interno do servidor e retornar uma resposta de erro genérica
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
}



// import { Request, Response, NextFunction } from 'express';
// import { ZodSchema } from 'zod';

// export function validateRequest(schema: ZodSchema<any>) {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.body);
//       next();
//     } catch (error) {
//       return res.status(400).json({ error: error.errors });
//     }
//   };
// }
