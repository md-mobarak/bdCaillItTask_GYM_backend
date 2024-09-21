import httpStatus from "http-status";

import { Request, Response, NextFunction } from "express";
import catchAsync from "../../../shared/catchAsync";
import UserService from "./service";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../../error/ApiError";
import { userValidation } from "./validation";


class UserController {
  // User registration
  registerUser = catchAsync(async (req: Request, res: Response) => {
    try {
      await   userValidation.register.parseAsync(req);
      const result = await UserService.registerUser(req.body);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User registered successfully",
        data: result,
      });
    } catch (err) {
      return res.status(404).json({
        success: false,
        statusCode: 405,
        message: "User already exists with this email",
        data: err,
      });
    }
  });

  // User login
  loginUser = catchAsync(async (req: Request, res: Response) => {

    try{
        const result = await UserService.loginUser(req.body);
       return sendResponse(res, {
          success: true,
          statusCode: 200,
          message: "User logged in successfully",
          data: result,
        });

    }catch(err){
        return res.status(404).json({
            success: false,
            statusCode: 405,
            message: "somthing went wrong",
            data: err,
          });
    }
 
  });

  // Get profile for authenticated user
  getProfile = catchAsync(async (req: any, res: Response) => {
    // console.log(req.user?.role);

    const result = await UserService.getProfile(req.user.id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Profile retrieved successfully",
      data: result,
    });
  });


// Get all users
getAllUsers = async (req: Request, res: Response) => {
    try {
        // Extract query parameters
        const { search, role, status, page = '1', limit = '10' } = req.query;

        // Convert page and limit to numbers for pagination
        const { users, totalUsers } = await UserService.getAllUsers({
            search: search as string,
            role: role as string,
            status: status as string,
            page: parseInt(page as string, 10),
            limit: parseInt(limit as string, 10),
        });

        return sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Users retrieved successfully',
            data: {
              
                totalUsers,
                currentPage: parseInt(page as string, 10),
                totalPages: Math.ceil(totalUsers / parseInt(limit as string, 10)),
                users,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve users',
            error: error,
        });
    }
};
  // Get user by ID
  getUserById = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.getUserById(req.params.id);
    if (!user) throw new ApiError(404, "User not found");
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User retrieved successfully",
      data: user,
    });
  });

  // Update user
  updateUser = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.updateUser(req.params.id, req.body);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User updated successfully",
      data: user,
    });
  });

  // Delete user
  deleteUser = catchAsync(async (req: Request, res: Response) => {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) throw new ApiError(404, "User not found");
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User deleted successfully",
      data: user,
    });
  });
}

export default new UserController();

// import { Request, Response } from 'express';
// import catchAsync from '../../../shared/catchAsync';
// import UserService from './service';
// import sendResponse from '../../../shared/sendResponse';
// import ApiError from '../../../error/ApiError';

// class UserController {
//     // Create user
//     createUser = catchAsync(async (req: Request, res: Response) => {
//         const user = await UserService.registerUser(req.body);
//         sendResponse(res, { success: true, statusCode: 201, message: 'User created successfully', data: user });
//     });

//     // Get all users
//     getAllUsers = catchAsync(async (req: Request, res: Response) => {
//         const users = await UserService.getAllUsers();
//         sendResponse(res, { success: true, statusCode: 200, message: 'Users retrieved successfully', data: users });
//     });

//     // Get user by ID
//     getUserById = catchAsync(async (req: Request, res: Response) => {
//         const user = await UserService.getUserById(req.params.id);
//         if (!user) throw new ApiError(404, 'User not found');
//         sendResponse(res, { success: true, statusCode: 200, message: 'User retrieved successfully', data: user });
//     });

//     // Update user
//     updateUser = catchAsync(async (req: Request, res: Response) => {
//         const user = await UserService.updateUser(req.params.id, req.body);
//         sendResponse(res, { success: true, statusCode: 200, message: 'User updated successfully', data: user });
//     });

//     // Delete user
//     deleteUser = catchAsync(async (req: Request, res: Response) => {
//         const user = await UserService.deleteUser(req.params.id);
//         if (!user) throw new ApiError(404, 'User not found');
//         sendResponse(res, { success: true, statusCode: 200, message: 'User deleted successfully', data: user });
//     });
// }

// export default new UserController();
