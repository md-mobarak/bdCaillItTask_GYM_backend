// import { ClassSchedule } from './classScheduleModel';
// import { IClassSchedule } from './classScheduleInterface';
import ApiError from '../../../error/ApiError';
import { IClassSchedule } from './classInterface';
import { ClassSchedule } from './classModel';

class ClassScheduleServices {
    // Create a class schedule (Trainer)
    async createClassSchedule(payload: IClassSchedule): Promise<IClassSchedule> {
        return ClassSchedule.create(payload);
    }

    // Get all class schedules (Admin and Trainer)
    async getAllClassSchedules(): Promise<IClassSchedule[]> {
        return ClassSchedule.find();
    }

    // Get class schedules by trainer ID (Trainer)
    async getClassSchedulesByTrainer(trainerId: string): Promise<IClassSchedule[]> {
        return ClassSchedule.find({ trainerId });
    }

    // Get class schedule by ID (Admin, Trainer, Trainee)
    async getClassScheduleById(scheduleId: string): Promise<IClassSchedule | null> {
        return ClassSchedule.findById(scheduleId);
    }

    // Update class schedule (Trainer)
    async updateClassSchedule(scheduleId: string, payload: Partial<IClassSchedule>): Promise<IClassSchedule | null> {
        return ClassSchedule.findByIdAndUpdate(scheduleId, payload, { new: true });
    }

    // Delete class schedule (Admin)
    async deleteClassSchedule(scheduleId: string): Promise<IClassSchedule | null> {
        return ClassSchedule.findByIdAndDelete(scheduleId);
    }
}

export default new ClassScheduleServices();
