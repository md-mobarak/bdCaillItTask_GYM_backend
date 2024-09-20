// import ApiError from '../../../error/ApiError';
// import Trainer from './trainerModel';
// import { ITrainer } from './interface';

// class TrainerService {
//     async createTrainer(payload: ITrainer): Promise<ITrainer> {
//         const { email } = payload;
//         const trainerExists = await Trainer.findOne({ email });
//         if (trainerExists) throw new ApiError(400, 'Trainer already exists with this email');
//         return Trainer.create(payload);
//     }

//     async getAllTrainers(): Promise<ITrainer[]> {
//         return Trainer.find();
//     }

//     async getTrainerById(trainerId: string): Promise<ITrainer | null> {
//         return Trainer.findById(trainerId);
//     }

//     async updateTrainer(trainerId: string, payload: Partial<ITrainer>): Promise<ITrainer | null> {
//         return Trainer.findByIdAndUpdate(trainerId, payload, { new: true });
//     }

//     async deleteTrainer(trainerId: string): Promise<ITrainer | null> {
//         return Trainer.findByIdAndDelete(trainerId);
//     }
// }

// export default new TrainerService();
