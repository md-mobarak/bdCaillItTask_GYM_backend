import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import TrainerService from './service';
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../error/ApiError';

class TrainerController {
    createTrainer = catchAsync(async (req: Request, res: Response) => {
        const trainer = await TrainerService.createTrainer(req.body);
        sendResponse(res, { success: true, statusCode: 201, message: 'Trainer created successfully', data: trainer });
    });

    getAllTrainers = catchAsync(async (req: Request, res: Response) => {
        const trainers = await TrainerService.getAllTrainers();
        sendResponse(res, { success: true, statusCode: 200, message: 'Trainers retrieved successfully', data: trainers });
    });

    getTrainerById = catchAsync(async (req: Request, res: Response) => {
        const trainer = await TrainerService.getTrainerById(req.params.id);
        if (!trainer) throw new ApiError(404, 'Trainer not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'Trainer retrieved successfully', data: trainer });
    });

    updateTrainer = catchAsync(async (req: Request, res: Response) => {
        const trainer = await TrainerService.updateTrainer(req.params.id, req.body);
        sendResponse(res, { success: true, statusCode: 200, message: 'Trainer updated successfully', data: trainer });
    });

    deleteTrainer = catchAsync(async (req: Request, res: Response) => {
        const trainer = await TrainerService.deleteTrainer(req.params.id);
        if (!trainer) throw new ApiError(404, 'Trainer not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'Trainer deleted successfully', data: trainer });
    });
}

export default new TrainerController();
