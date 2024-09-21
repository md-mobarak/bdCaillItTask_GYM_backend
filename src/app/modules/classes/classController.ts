import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import ClassScheduleService from './classServices'
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../error/ApiError';

class ClassScheduleController {
    // Create class schedule (Trainer)
    createClassSchedule = catchAsync(async (req: Request, res: Response) => {
        const result = await ClassScheduleService.createClassSchedule(req.body);
        sendResponse(res, { success: true, statusCode: 201, message: 'Class schedule created successfully', data: result });
    });

    // Get all class schedules (Admin, Trainer)
    getAllClassSchedules = catchAsync(async (req: Request, res: Response) => {
        const result = await ClassScheduleService.getAllClassSchedules();
        sendResponse(res, { success: true, statusCode: 200, message: 'Class schedules retrieved successfully', data: result });
    });

    // Get class schedules by trainer ID (Trainer)
    getClassSchedulesByTrainer = catchAsync(async (req: any, res: Response) => {
        const result = await ClassScheduleService.getClassSchedulesByTrainer(req.user.id);
        sendResponse(res, { success: true, statusCode: 200, message: 'Class schedules retrieved successfully', data: result });
    });

    // Get class schedule by ID (Admin, Trainer, Trainee)
    getClassScheduleById = catchAsync(async (req: Request, res: Response) => {
        const result = await ClassScheduleService.getClassScheduleById(req.params.id);
        if (!result) throw new ApiError(404, 'Class schedule not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'Class schedule retrieved successfully', data: result });
    });

    // Update class schedule (Trainer)
    updateClassSchedule = catchAsync(async (req: Request, res: Response) => {
        const result = await ClassScheduleService.updateClassSchedule(req.params.id, req.body);
        sendResponse(res, { success: true, statusCode: 200, message: 'Class schedule updated successfully', data: result });
    });

    // Delete class schedule (Admin)
    deleteClassSchedule = catchAsync(async (req: Request, res: Response) => {
        const result = await ClassScheduleService.deleteClassSchedule(req.params.id);
        if (!result) throw new ApiError(404, 'Class schedule not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'Class schedule deleted successfully', data: result });
    });
}

export default new ClassScheduleController();
