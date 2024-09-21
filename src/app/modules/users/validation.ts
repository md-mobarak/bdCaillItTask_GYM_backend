


// import * as z from 'zod';

// export const UserRegistrationSchema = z.object({
//     name: z.string().min(1, 'Name is required'),
//     email: z.string().email('Invalid email format'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
//     role: z.enum(['Admin', 'Trainer', 'Trainee']),
// });

// export const UserLoginSchema = z.object({
//     email: z.string().email('Invalid email format'),
//     password: z.string().min(6, 'Password must be at least 6 characters'),
// });


import { z } from 'zod';

export const register = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
        }),
        email: z.string().email({
            message: 'Invalid email address',
        }).nonempty({
            message: 'Email is required',
        }),
        password: z.string().min(6, {
            message: 'Password must be at least 6 characters long',
        }).nonempty({
            message: 'Password is required',
        }),
        role: z.enum(['Admin', 'Trainer', 'Trainee'], {
            required_error: 'Role is required',
        }),
       
    }),
});

export const userValidation = {
    register,
};
