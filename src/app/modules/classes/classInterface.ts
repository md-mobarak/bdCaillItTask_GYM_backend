// import { ObjectId } from 'mongoose';

// export interface IClass {
//     id?: string; // Optional, will be set when fetched from the database
//     title: string;
//     description: string;
//     trainerId: ObjectId; // Change to ObjectId type
//     schedule: string; // This can be adjusted to a more complex type if needed
// }

import { Document, ObjectId } from 'mongoose';

export interface IClass extends Document {
    id?: string; // Optional, will be set when fetched from the database
    title: string;
    description: string;
    trainerId: ObjectId; // Reference to the Trainer's ID
    schedule: string; // This can be adjusted to a more complex type if needed
}
