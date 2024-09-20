

import { Schema, model, Document } from 'mongoose';
import { IClass } from './classInterface';

const ClassSchema = new Schema<IClass>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    trainerId: {
        type: Schema.Types.ObjectId, // Keep this as is
        ref: 'Trainer', // Reference to the Trainer model
        required: true,
    },
    schedule: {
        type: String, // Adjust according to your scheduling needs
        required: true,
    },
}, { timestamps: true });

const ClassModel = model<IClass & Document>('Class', ClassSchema);

export default ClassModel;
