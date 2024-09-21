import { Request, Response } from 'express';
import ClassScheduleService from './classServices'; // Make sure this path is correct
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../error/ApiError';

class ClassScheduleController {
    createClassSchedule = async (req: Request, res: Response) => {
        try {
            const result = await ClassScheduleService.createClassSchedule(req.body);
            return sendResponse(res, {
                success: true,
                statusCode: 201,
                message: 'Class schedule created successfully',
                data: result,
            });
        } catch (err: any) {
            return res.status(err.statusCode || 400).json({
                success: false,
                statusCode: err.statusCode || 400,
                message: err.message || 'Failed to create class schedule',
            });
        }
    };

    getAllClassSchedules = async (req: Request, res: Response) => {
        try {
            const result = await ClassScheduleService.getAllClassSchedules();
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Class schedules retrieved successfully',
                data: result,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: 'Failed to retrieve class schedules',
            });
        }
    };

    getClassSchedulesByTrainer = async (req: any, res: Response) => {
        try {
            const result = await ClassScheduleService.getClassSchedulesByTrainer(req.user.id);
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Class schedules retrieved successfully',
                data: result,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: 'Failed to retrieve class schedules',
            });
        }
    };

    getClassScheduleById = async (req: Request, res: Response) => {
        try {
            const result = await ClassScheduleService.getClassScheduleById(req.params.id);
            if (!result) throw new ApiError(404, 'Class schedule not found');
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Class schedule retrieved successfully',
                data: result,
            });
        } catch (err: any) {
            return res.status(err.statusCode || 500).json({
                success: false,
                statusCode: err.statusCode || 500,
                message: err.message || 'Failed to retrieve class schedule',
            });
        }
    };

    updateClassSchedule = async (req: Request, res: Response) => {
        try {
            const result = await ClassScheduleService.updateClassSchedule(req.params.id, req.body);
            if (!result) throw new ApiError(404, 'Class schedule not found');
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Class schedule updated successfully',
                data: result,
            });
        } catch (err: any) {
            return res.status(err.statusCode || 500).json({
                success: false,
                statusCode: err.statusCode || 500,
                message: err.message || 'Failed to update class schedule',
            });
        }
    };

    deleteClassSchedule = async (req: Request, res: Response) => {
        try {
            const result = await ClassScheduleService.deleteClassSchedule(req.params.id);
            if (!result) throw new ApiError(404, 'Class schedule not found');
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Class schedule deleted successfully',
                data: result,
            });
        } catch (err: any) {
            return res.status(err.statusCode || 500).json({
                success: false,
                statusCode: err.statusCode || 500,
                message: err.message || 'Failed to delete class schedule',
            });
        }
    };

    bookClassSchedule = async (req: any, res: Response) => {
        try {
            const result = await ClassScheduleService.bookClassSchedule(req.params.id, req.user.id);
            return sendResponse(res, {
                success: true,
                statusCode: 200,
                message: 'Successfully booked the class schedule',
                data: result,
            });
        } catch (err: any) {
            return res.status(err.statusCode || 500).json({
                success: false,
                statusCode: err.statusCode || 500,
                message: err.message || 'Failed to book class schedule',
            });
        }
    };
}

export default new ClassScheduleController();
