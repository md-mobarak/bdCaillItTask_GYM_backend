import { Request, Response, NextFunction } from 'express';
import { createClass, getAllClasses, getClassById, updateClass, deleteClass } from './classServices';
import ApiError from '../../../error/ApiError';
// import ApiError from '../../error/ApiError';

export const createClassHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newClass = await createClass(req.body);
        res.status(201).json({ success: true, class: newClass });
    } catch (error) {
        next(error);
    }
};

export const getAllClassesHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classes = await getAllClasses();
        res.status(200).json({ success: true, classes });
    } catch (error) {
        next(error);
    }
};

export const getClassByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classData = await getClassById(req.params.id);
        if (!classData) throw new ApiError(404, 'Class not found');
        res.status(200).json({ success: true, class: classData });
    } catch (error) {
        next(error);
    }
};

export const updateClassHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedClass = await updateClass(req.params.id, req.body);
        res.status(200).json({ success: true, class: updatedClass });
    } catch (error) {
        next(error);
    }
};

export const deleteClassHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteClass(req.params.id);
        res.status(204).json({ success: true, message: 'Class deleted' });
    } catch (error) {
        next(error);
    }
};
