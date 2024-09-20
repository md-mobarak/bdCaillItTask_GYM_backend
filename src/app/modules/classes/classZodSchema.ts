import * as z from 'zod';

export const ClassSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    trainerId: z.string().min(1, 'Trainer ID is required'),
    schedule: z.string().min(1, 'Schedule is required'), // You can use a more complex schema here
});
