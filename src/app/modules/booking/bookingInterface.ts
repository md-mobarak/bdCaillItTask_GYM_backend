// import mongoose, { Schema, Document } from 'mongoose';

// export interface IBooking extends Document {
//     traineeId: mongoose.Schema.Types.ObjectId; // References a Trainee (User with role 'Trainee')
//     scheduleId: mongoose.Schema.Types.ObjectId; // References the scheduled class
//   }

// bookingInterface.ts
import mongoose, { Document } from 'mongoose';

export interface IBooking extends Document {
    traineeId: mongoose.Schema.Types.ObjectId; // References a Trainee (User with role 'Trainee')
    scheduleId: mongoose.Schema.Types.ObjectId; // References the scheduled class
}
