
// import mongoose, { Schema } from 'mongoose';
// import { IBooking } from './bookingInterface';

// export const bookingSchema: Schema = new Schema(
//     {
//         traineeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//         scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule', required: true },
//     },
//     { timestamps: true }
// );

// export const Booking = mongoose.model<IBooking>('Booking', bookingSchema);


import mongoose, { Schema } from 'mongoose';
import { IBooking } from './bookingInterface';

const bookingSchema: Schema = new Schema(
    {
        traineeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassSchedule', required: true },
    },
    { timestamps: true }
);

export const Booking = mongoose.model<IBooking>('Booking', bookingSchema);
