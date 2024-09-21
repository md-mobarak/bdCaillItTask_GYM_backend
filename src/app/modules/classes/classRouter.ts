
import express from 'express';
import ClassScheduleController from './classController';
import { authorize } from '../../middlewares/Auth';

const router = express.Router();

// Create class schedule (Admin)
router.post('/', authorize(['Admin']), ClassScheduleController.createClassSchedule);

// Get all class schedules (Admin, Trainer, Trainee)
router.get('/', authorize(['Admin', 'Trainer', 'Trainee']), ClassScheduleController.getAllClassSchedules);

// Get class schedule by ID (Admin, Trainer, Trainee)
router.get('/:id', authorize(['Admin', 'Trainer', 'Trainee']), ClassScheduleController.getClassScheduleById);

// Book class schedule (Trainee)
// router.post('/book/:id', authorize(['Trainee']), ClassScheduleController.bookClassSchedule);

// Update class schedule (Admin)
router.patch('/:id', authorize(['Admin']), ClassScheduleController.updateClassSchedule);

// Delete class schedule (Admin)
router.delete('/:id', authorize(['Admin']), ClassScheduleController.deleteClassSchedule);

 export const ClassScheduleRouter = router;
