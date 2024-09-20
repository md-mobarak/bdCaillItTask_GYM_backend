

import { authorize } from '../../middlewares/Auth';
import { UserLoginSchema } from './validation';

const router = express.Router();

import express from 'express';
import UserController from './controller';
// import { authorize } from '../../middlewares/Auth';



router.post('/', authorize(['Admin']), UserController.createUser);
router.get('/', authorize(['Admin']), UserController.getAllUsers);
router.get('/:id', authorize(['Admin', 'Trainer', 'Trainee']), UserController.getUserById);
router.put('/:id', authorize(['Admin']), UserController.updateUser);
router.delete('/:id', authorize(['Admin']), UserController.deleteUser);



export  const AuthRouter=router;






