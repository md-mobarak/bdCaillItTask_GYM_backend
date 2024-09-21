

// import { z } from 'zod';

// export const classScheduleValidation = z.object({
//     body: z.object({
//         trainerId: z.string({
//             required_error: 'Invalid trainer ID format',
//         })
// ,
//         className: z.string({
//             required_error: 'Class name is required',
//         }),
//         classDescription: z.string().optional(),
//         classDate: z.date({
//             required_error: 'Class date is required',
//         }),
//         duration: z.number().min(1, {
//             message: 'Duration must be at least 1 minute',
//         }),
//         maxParticipants: z.number().min(1, {
//             message: 'Max participants must be at least 1',
//         }),
//         participants: z.array(z.string()).optional(), // Optional array of participant IDs
//     }),
// });

// export const classValidation = {
//     classSchedule: classScheduleValidation,
// };


import { z } from 'zod';

export const classScheduleValidation = z.object({
    body: z.object({
        trainerId: z.string({
            required_error: 'Invalid trainer ID format',
        }),
        className: z.string({
            required_error: 'Class name is required',
        }),
        classDescription: z.string().optional(),
        classDate: z.date({
            required_error: 'Class date is required',
        }),
        duration: z.number().min(1, {
            message: 'Duration must be at least 1 minute',
        }),
        maxParticipants: z.number().min(1, {
            message: 'Max participants must be at least 1',
        }),
        participants: z.array(z.string()).optional(), // Optional array of participant IDs
    }),
});

export const classValidation = {
    classSchedule: classScheduleValidation,
};
