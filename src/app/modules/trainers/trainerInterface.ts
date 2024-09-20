export interface ITrainer {
    id?: string; // Optional, will be set when fetched from the database
    name: string;
    email: string;
    expertise: string;
    role: 'Trainer'; // Static role for trainers
}
