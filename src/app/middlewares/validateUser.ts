
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

// Validation middleware to handle requests
const validateRequest = 
  (zodSchema: AnyZodObject | ZodEffects<AnyZodObject>) => 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Parse the request body, query, params, and cookies
      await zodSchema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      next();
    } catch (error) {
      // If validation fails, send an error response
      res.status(400).json({
        success: false,
        message: "Validation Error",
        errors: error, // Zod provides detailed error messages
      });
    }
  };

export default validateRequest;


