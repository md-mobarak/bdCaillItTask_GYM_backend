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
