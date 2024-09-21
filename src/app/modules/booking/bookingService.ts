

import { IBooking } from './bookingInterface';
import { Booking } from './bookingModel';
import ApiError from '../../../error/ApiError';

class BookingService {
    // Create a booking
    async createBooking(payload: IBooking): Promise<IBooking> {
        const bookingExists = await Booking.findOne({
            traineeId: payload.traineeId,
            scheduleId: payload.scheduleId
        });

        if (bookingExists) {
            throw new ApiError(400, 'You have already booked this class');
        }

        // Check if class is full (max 10 trainees)
        const classBookings = await Booking.countDocuments({ scheduleId: payload.scheduleId });
        if (classBookings >= 10) {
            throw new ApiError(400, 'Class schedule is full. Maximum 10 trainees allowed per schedule.');
        }

        return Booking.create(payload);
    }

    // Get all bookings
    async getAllBookings(): Promise<IBooking[]> {
        return Booking.find().populate('traineeId').populate('scheduleId');
    }

    // Get booking by ID
    async getBookingById(bookingId: string): Promise<IBooking | null> {
        return Booking.findById(bookingId).populate('traineeId').populate('scheduleId');
    }

    // Cancel a booking
    async cancelBooking(bookingId: string): Promise<IBooking | null> {
        const booking = await Booking.findById(bookingId);
        if (!booking) throw new ApiError(404, 'Booking not found');
        return Booking.findByIdAndDelete(bookingId);
    }
}

export default new BookingService();
