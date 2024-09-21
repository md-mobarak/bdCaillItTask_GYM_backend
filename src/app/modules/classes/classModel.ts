import mongoose, { Schema } from 'mongoose';
import { IClassSchedule } from './classInterface';
// import { IClassSchedule } from './classScheduleInterface';

const classScheduleSchema: Schema = new Schema(
    {
        trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        className: { type: String, required: true },
        classDescription: { type: String },
        classDate: { type: Date, required: true },
        duration: { type: Number, required: true }, // Duration in minutes
        maxParticipants: { type: Number, required: true },
        participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true }
);

export const ClassSchedule = mongoose.model<IClassSchedule>('ClassSchedule', classScheduleSchema);
