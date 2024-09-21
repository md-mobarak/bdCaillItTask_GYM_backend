


// import { ClassSchedule, IClassSchedule } from './classModel';
// // import { ClassSchedule } from './classModel';
// import ApiError from '../../../error/ApiError';
// import mongoose from 'mongoose';

// class ClassScheduleServices {
//     async createClassSchedule(payload: IClassSchedule): Promise<IClassSchedule> {
//         const existingSchedules = await ClassSchedule.countDocuments({
//             trainerId: payload.trainerId,
//             classDate: payload.classDate,
//         });

//         if (existingSchedules >= 5) {
//             throw new ApiError(400, 'Cannot create more than 5 classes for this trainer on the same day.');
//         }

//         return ClassSchedule.create(payload);
//     }

//     async getAllClassSchedules(): Promise<IClassSchedule[]> {
//         return ClassSchedule.find()
//             .populate('trainerId', 'name email role')
//             .populate('participants', 'name email role');
//     }

//     async getClassSchedulesByTrainer(trainerId: string): Promise<IClassSchedule[]> {
//         return ClassSchedule.find({ trainerId });
//     }

//     async getClassScheduleById(scheduleId: string): Promise<IClassSchedule | null> {
//         return ClassSchedule.findById(scheduleId);
//     }

//     async updateClassSchedule(scheduleId: string, payload: Partial<IClassSchedule>): Promise<IClassSchedule | null> {
//         return ClassSchedule.findByIdAndUpdate(scheduleId, payload, { new: true });
//     }

//     async deleteClassSchedule(scheduleId: string): Promise<IClassSchedule | null> {
//         return ClassSchedule.findByIdAndDelete(scheduleId);
//     }

//     async bookClassSchedule(scheduleId: string, traineeId: mongoose.Schema.Types.ObjectId): Promise<IClassSchedule | null> {
//         const schedule = await this.getClassScheduleById(scheduleId);

//         if (!schedule) {
//             throw new ApiError(404, 'Class schedule not found');
//         }

//         if (schedule.participants.length >= schedule.maxParticipants) {
//             throw new ApiError(400, 'Class schedule is full');
//         }

//         schedule.participants.push(traineeId);
//         return schedule.save();
//     }
// }

// export default new ClassScheduleServices();


import { ClassSchedule, IClassSchedule } from './classModel';
import ApiError from '../../../error/ApiError';
import mongoose from 'mongoose';

class ClassScheduleServices {
    async createClassSchedule(payload: IClassSchedule): Promise<IClassSchedule> {
        const existingSchedules = await ClassSchedule.countDocuments({
            trainerId: payload.trainerId,
            classDate: payload.classDate,
        });

        if (existingSchedules >= 5) {
            throw new ApiError(400, 'Cannot create more than 5 classes for this trainer on the same day.');
        }

        return ClassSchedule.create(payload);
    }

    async getAllClassSchedules(): Promise<IClassSchedule[]> {
        return ClassSchedule.find()
            .populate('trainerId', 'name email role')
            .populate('participants', 'name email role');
    }

    async getClassSchedulesByTrainer(trainerId: string): Promise<IClassSchedule[]> {
        return ClassSchedule.find({ trainerId });
    }

    async getClassScheduleById(scheduleId: string): Promise<IClassSchedule | null> {
        return ClassSchedule.findById(scheduleId);
    }

    async updateClassSchedule(scheduleId: string, payload: Partial<IClassSchedule>): Promise<IClassSchedule | null> {
        return ClassSchedule.findByIdAndUpdate(scheduleId, payload, { new: true });
    }

    async deleteClassSchedule(scheduleId: string): Promise<IClassSchedule | null> {
        return ClassSchedule.findByIdAndDelete(scheduleId);
    }

    async bookClassSchedule(scheduleId: string, traineeId: mongoose.Schema.Types.ObjectId): Promise<IClassSchedule | null> {
        const schedule = await this.getClassScheduleById(scheduleId);

        if (!schedule) {
            throw new ApiError(404, 'Class schedule not found');
        }

        if ((schedule.participants?.length ?? 0) >= schedule.maxParticipants) {
            throw new ApiError(400, 'Class schedule is full');
        }

        schedule.participants = schedule.participants || []; // Ensure participants array is initialized
        schedule.participants.push(traineeId);
        return schedule.save();
    }
}

export default new ClassScheduleServices();
