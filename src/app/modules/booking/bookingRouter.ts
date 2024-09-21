// import express from 'express';
// // import BookingController from './bookingController';
// import { authorize } from '../../middlewares/Auth';

// const router = express.Router();

// // Trainee can book a class
// router.post('/', authorize(['Trainee']), BookingController.createBooking);

// // Admin and Trainees can view all bookings (Admin can access all, Trainee can view their own)
// router.get('/', authorize(['Admin', 'Trainee']), BookingController.getAllBookings);

// // Get a specific booking (Admin and Trainee can access)
// router.get('/:id', authorize(['Admin', 'Trainee']), BookingController.getBookingById);

// // Trainee can cancel their booking
// router.delete('/:id', authorize(['Trainee']), BookingController.deleteBooking);

// export const BookingRouter = router;


import express from 'express';
import { authorize } from '../../middlewares/Auth';
import bookingController from './bookingController';

const router = express.Router();

router.post('/', authorize(['Trainee']), bookingController.createBooking);
router.get('/', authorize(['Admin', 'Trainee']), bookingController.getAllBookings);
router.get('/:id', authorize(['Admin', 'Trainee']), bookingController.getBookingById);
router.delete('/:id', authorize(['Admin', 'Trainee']), bookingController.cancelBooking);

export const BookingRouter = router;
