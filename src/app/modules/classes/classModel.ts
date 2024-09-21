

// import mongoose, { Document } from 'mongoose';

// export interface IClassSchedule extends Document {
//     trainerId: mongoose.Schema.Types.ObjectId; // References the Trainer (User with role 'Trainer')
//     className: string;
//     classDescription?: string;
//     classDate: Date;
//     duration: number; // In minutes
//     maxParticipants: number;
//     participants?: mongoose.Schema.Types.ObjectId[]; // List of Trainees
// }

// const classScheduleSchema = new mongoose.Schema<IClassSchedule>(
//     {
//         trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//         className: { type: String, required: true },
//         classDescription: { type: String },
//         classDate: { type: Date, required: true },
//         duration: { type: Number, required: true }, // Duration in minutes
//         maxParticipants: { type: Number, required: true },
//         participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     },
//     { timestamps: true }
// );

// export const ClassSchedule = mongoose.model<IClassSchedule>('ClassSchedule', classScheduleSchema);


import mongoose, { Document } from 'mongoose';

export interface IClassSchedule extends Document {
    trainerId: mongoose.Schema.Types.ObjectId; // References the Trainer (User with role 'Trainer')
    className: string;
    classDescription?: string;
    classDate: Date;
    duration: number; // In minutes
    maxParticipants: number;
    participants?: mongoose.Schema.Types.ObjectId[]; // List of Trainees
}

const classScheduleSchema = new mongoose.Schema<IClassSchedule>(
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
