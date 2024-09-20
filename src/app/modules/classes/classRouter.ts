// import { Router } from 'express';
// import {
//     createClassHandler,
//     getAllClassesHandler,
//     getClassByIdHandler,
//     updateClassHandler,
//     deleteClassHandler
// } from './controller';
// import validateRequest from '../../middlewares/validateUser';
// import { ClassSchema } from './classZodSchema';
// import { authorize } from '../../middlewares/Auth';
// // import {authorizeRoles }from '../../middlewares/Auth';

// const router = Router();

// router.post('/', validateRequest(ClassSchema), authorize('Admin'), createClassHandler);
// router.get('/', getAllClassesHandler);
// router.get('/:id', getClassByIdHandler);
// router.put('/:id', validateRequest(ClassSchema), authorizeRoles('Admin'), updateClassHandler);
// router.delete('/:id', authorize('Admin'), deleteClassHandler);

// export const classRouter = router;


import { Router } from 'express';

import validateRequest from '../../middlewares/validateUser';
import { ClassSchema } from './classZodSchema';
import { authorize } from '../../middlewares/Auth';
import { createClassHandler, deleteClassHandler, getAllClassesHandler, getClassByIdHandler, updateClassHandler } from './classController';

const router = Router();

router.post('/', validateRequest(ClassSchema), authorize('Admin'), createClassHandler);
router.get('/', getAllClassesHandler);
router.get('/:id', getClassByIdHandler);
router.put('/:id', validateRequest(ClassSchema), authorize('Admin'), updateClassHandler);
router.delete('/:id', authorize('Admin'), deleteClassHandler);

export const classRouter = router;
