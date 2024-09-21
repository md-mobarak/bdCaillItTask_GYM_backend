import express from 'express';
import ClassScheduleController from './classController';
import { authorize } from '../../middlewares/Auth';

const router = express.Router();

// Create class schedule (Trainer)
router.post('/', authorize(['Trainer']), ClassScheduleController.createClassSchedule);

// Get all class schedules (Admin, Trainer)
router.get('/', authorize(['Admin', 'Trainer']), ClassScheduleController.getAllClassSchedules);

// Get class schedules by trainer ID (Trainer)
router.get('/trainer', authorize(['Trainer']), ClassScheduleController.getClassSchedulesByTrainer);

// Get class schedule by ID (Admin, Trainer, Trainee)
router.get('/:id', authorize(['Admin', 'Trainer', 'Trainee']), ClassScheduleController.getClassScheduleById);

// Update class schedule (Trainer)
router.put('/:id', authorize(['Trainer']), ClassScheduleController.updateClassSchedule);

// Delete class schedule (Admin)
router.delete('/:id', authorize(['Admin']), ClassScheduleController.deleteClassSchedule);

export const ClassScheduleRouter = router;
