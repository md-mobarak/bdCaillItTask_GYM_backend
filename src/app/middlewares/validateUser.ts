
// // import { Request, Response, NextFunction } from 'express';
// // import { AnyZodObject, ZodEffects } from 'zod';

// // // Validation middleware to handle requests
// // const validateRequest = 
// //   (zodSchema: AnyZodObject | ZodEffects<AnyZodObject>) => 
// //   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
// //     try {
// //       // Parse the request body, query, params, and cookies
// //       await zodSchema.parseAsync({
// //         body: req.body,
// //         query: req.query,
// //         params: req.params,
// //         cookies: req.cookies,
// //       });
// //       next();
// //     } catch (error) {
// //       // If validation fails, send an error response
// //       res.status(400).json({
// //         success: false,
// //         message: "Validation Error",
// //         errors: error, // Zod provides detailed error messages
// //       });
// //     }
// //   };

// // export default validateRequest;


// import { z } from 'zod';
// const register = z.object({
//     body: z.object({
//         name: z.string({
//             required_error: 'Name is required'
//         }),
//         email: z.string({
//             required_error: 'Email is required'
//         }),
//         password: z.string({
//             required_error: 'Password is required'
//         }),
//         phone: z.string({
//             required_error: 'Phone is required'
//         }),
//         address: z.string({
//             required_error: 'Address is required'
//         }),
//         location: z.string({
//             required_error: 'Location is required'
//         })       
//     })
// });

// export const userValidation = {
//     register
// }