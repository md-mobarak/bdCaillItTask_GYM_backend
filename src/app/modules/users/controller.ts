
// import httpStatus from "http-status"


// import { Request, Response, NextFunction } from 'express';
// import catchAsync from "../../../shared/catchAsync";
// import UserService from './service';
// import sendResponse from "../../../shared/sendResponse";
// // import catchAsync from '../../shared/catchAsync';
// // import sendResponse from '../../shared/sendResponse';

// class UserController {
//     // User registration
//     registerUser = catchAsync(async (req: Request, res: Response) => {
//         const result = await UserService.registerUser(req.body);
//         sendResponse(res, {
//             success: true,
//             statusCode: 201,
//             message: 'User registered successfully',
//             data: result,
//         });
//     });

//     // User login
//     loginUser = catchAsync(async (req: Request, res: Response) => {
//         const result = await UserService.loginUser(req.body);
//         sendResponse(res, {
//             success: true,
//             statusCode: 200,
//             message: 'User logged in successfully',
//             data: result,
//         });
//     });

//     // Get profile for authenticated user
//     getProfile = catchAsync(async (req: any, res: Response) => {
//         console.log(req.user?.role);
        
//         const result = await UserService.getProfile(req.user.id);
//         sendResponse(res, {
//             success: true,
//             statusCode: 200,
//             message: 'Profile retrieved successfully',
//             data: result,
//         });
//     });
// }

// export default new UserController();

import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import UserService from './service';
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../error/ApiError';

class UserController {
    // Create user
    createUser = catchAsync(async (req: Request, res: Response) => {
        const user = await UserService.createUser(req.body);
        sendResponse(res, { success: true, statusCode: 201, message: 'User created successfully', data: user });
    });

    // Get all users
    getAllUsers = catchAsync(async (req: Request, res: Response) => {
        const users = await UserService.getAllUsers();
        sendResponse(res, { success: true, statusCode: 200, message: 'Users retrieved successfully', data: users });
    });

    // Get user by ID
    getUserById = catchAsync(async (req: Request, res: Response) => {
        const user = await UserService.getUserById(req.params.id);
        if (!user) throw new ApiError(404, 'User not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'User retrieved successfully', data: user });
    });

    // Update user
    updateUser = catchAsync(async (req: Request, res: Response) => {
        const user = await UserService.updateUser(req.params.id, req.body);
        sendResponse(res, { success: true, statusCode: 200, message: 'User updated successfully', data: user });
    });

    // Delete user
    deleteUser = catchAsync(async (req: Request, res: Response) => {
        const user = await UserService.deleteUser(req.params.id);
        if (!user) throw new ApiError(404, 'User not found');
        sendResponse(res, { success: true, statusCode: 200, message: 'User deleted successfully', data: user });
    });
}

export default new UserController();
