
import httpStatus from "http-status";
import { Request, Response } from "express";
import UserService from "./service";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../../error/ApiError";
import { userValidation } from "./validation";

class UserController {
  // User registration
  registerUser = async (req: Request, res: Response) => {
    try {
      await userValidation.register.parseAsync(req);
      const result = await UserService.registerUser(req.body);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User registered successfully",
        data: result,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "User registration failed",
        error: err instanceof ApiError ? err.message : err,
      });
    }
  };

  // User login
  loginUser = async (req: Request, res: Response) => {
    try {
      const result = await UserService.loginUser(req.body);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User logged in successfully",
        data: result,
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Login failed",
        error: err instanceof ApiError ? err.message : err,
      });
    }
  };

  // Get profile for authenticated user
  getProfile = async (req: any, res: Response) => {
    try {
      const result = await UserService.getProfile(req.user.id);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Profile retrieved successfully",
        data: result,
      });
    } catch (err) {
      return res.status(404).json({
        success: false,
        message: "Profile retrieval failed",
        error: err instanceof ApiError ? err.message : err,
      });
    }
  };
  // Get profile for authenticated user
  getTrainers = async (req: any, res: Response) => {
    try {
      const result = await UserService.getAllTrainers(req.user.role);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All trainers retrieved successfully",
        data: result,
      });
    } catch (err) {
      return res.status(404).json({
        success: false,
        message: "trainers retrieval failed",
        error: err instanceof ApiError ? err.message : err,
      });
    }
  };

  // Get all users
  getAllUsers = async (req: Request, res: Response) => {
    try {
      const { search, role, status, page = '1', limit = '10' } = req.query;

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
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve users',
        error: err,
      });
    }
  };

  // Get user by ID
  getUserById = async (req: Request, res: Response) => {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) throw new ApiError(404, "User not found");
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User retrieved successfully",
        data: user,
      });
    } catch (err:any) {
      return res.status(err instanceof ApiError ? err.statusCode : 500).json({
        success: false,
        message: err.message,
      });
    }
  };

  // Update user
  updateUser = async (req: Request, res: Response) => {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User updated successfully",
        data: user,
      });
    } catch (err:any) {
      return res.status(err instanceof ApiError ? err.statusCode : 500).json({
        success: false,
        message: err.message,
      });
    }
  };

  // Delete user
  deleteUser = async (req: Request, res: Response) => {
    try {
      const user = await UserService.deleteUser(req.params.id);
      if (!user) throw new ApiError(404, "User not found");
      return sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User deleted successfully",
        data: user,
      });
    } catch (err:any) {
      return res.status(err instanceof ApiError ? err.statusCode : 500).json({
        success: false,
        message: err.message,
      });
    }
  };
}

export default new UserController();
