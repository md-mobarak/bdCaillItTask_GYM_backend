// import { Request, Response } from 'express';
// import catchAsync from '../../../shared/catchAsync';
// // import BookingService from './service';
// import sendResponse from '../../../shared/sendResponse';
// import ApiError from '../../../error/ApiError';
// import bookingService from './bookingService';

// class BookingController {
//     // Create booking
//     createBooking = catchAsync(async (req: Request, res: Response) => {
//         const booking = await bookingService.createBooking(req.body);
//         sendResponse(res, {
//             success: true,
//             statusCode: 201,
//             message: 'Class booked successfully',
//             data: booking,
//         });
//     });

//     // Get all bookings
//     getAllBookings = catchAsync(async (req: Request, res: Response) => {
//         const bookings = await bookingService.getAllBookings();
//         sendResponse(res, {
//             success: true,
//             statusCode: 200,
//             message: 'Bookings retrieved successfully',
//             data: bookings,
//         });
//     });

//     // Get booking by ID
//     getBookingById = catchAsync(async (req: Request, res: Response) => {
//         const booking = await bookingService.getBookingById(req.params.id);
//         if (!booking) throw new ApiError(404, 'Booking not found');
//         sendResponse(res, {
//             success: true,
//             statusCode: 200,
//             message: 'Booking retrieved successfully',
//             data: booking,
//         });
//     });

//     // Cancel booking
//     cancelBooking = catchAsync(async (req: Request, res: Response) => {
//         const booking = await bookingService.cancelBooking(req.params.id);
//         sendResponse(res, {
//             success: true,
//             statusCode: 200,
//             message: 'Booking cancelled successfully',
//             data: booking,
//         });
//     });
// }

// export default new BookingController();



import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../error/ApiError';
import bookingService from './bookingService';

class BookingController {
    // Create booking
    createBooking = catchAsync(async (req: Request, res: Response) => {
        const booking = await bookingService.createBooking(req.body);
        sendResponse(res, {
            success: true,
            statusCode: 201,
            message: 'Class booked successfully',
            data: booking,
        });
    });

    // Get all bookings
    getAllBookings = catchAsync(async (req:any, res: Response) => {
        const bookings = await bookingService.getAllBookings(req.user);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Bookings retrieved successfully',
            data: bookings,
        });
    });

    // Get booking by ID
    getBookingById = catchAsync(async (req: Request, res: Response) => {
        const booking = await bookingService.getBookingById(req.params.id);
        if (!booking) throw new ApiError(404, 'Booking not found');
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Booking retrieved successfully',
            data: booking,
        });
    });

    // Cancel booking
    cancelBooking = catchAsync(async (req: any, res: Response) => {
        const booking = await bookingService.cancelBooking(req.params.id, req.user);
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Booking cancelled successfully',
            data: booking,
        });
    });
}

export default new BookingController();
