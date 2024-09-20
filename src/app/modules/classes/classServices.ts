// import ClassModel from '../../models'; // Adjust according to your model path

import ClassModel from "./classModel";

export const createClass = async (classData: any) => {
    const newClass = new ClassModel(classData);
    return await newClass.save();
};

export const getAllClasses = async () => {
    return await ClassModel.find().populate('trainerId'); // Populate trainer info if necessary
};

export const getClassById = async (id: string) => {
    return await ClassModel.findById(id).populate('trainerId');
};

export const updateClass = async (id: string, classData: any) => {
    return await ClassModel.findByIdAndUpdate(id, classData, { new: true });
};

export const deleteClass = async (id: string) => {
    return await ClassModel.findByIdAndDelete(id);
};
