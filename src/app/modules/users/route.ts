import express from 'express';
import { authorize } from '../../middlewares/Auth';
const router = express.Router();
import UserController from './controller';


router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/users', authorize(['Admin']), UserController.getAllUsers);
router.get('/trainers', authorize(['Admin']), UserController.getTrainers);
router.get('/:id', authorize(['Admin', 'Trainee']), UserController.getUserById);
router.put('/:id', authorize(['Admin','Trainee']), UserController.updateUser);
router.delete('/:id', authorize(['Admin','Trainee']), UserController.deleteUser);



export  const AuthRouter=router;






