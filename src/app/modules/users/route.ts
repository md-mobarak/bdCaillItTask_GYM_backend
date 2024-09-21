import express from 'express';

import { authorize } from '../../middlewares/Auth';
import {  register} from './validation';
const router = express.Router();
import UserController from './controller';
import { userValidation } from './validation';

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/users', authorize(['Admin']), UserController.getAllUsers);
router.get('/:id', authorize(['Admin', 'Trainee']), UserController.getUserById);
router.put('/:id', authorize(['Admin','Trainee']), UserController.updateUser);
router.delete('/:id', authorize(['Admin','Trainee']), UserController.deleteUser);



export  const AuthRouter=router;






