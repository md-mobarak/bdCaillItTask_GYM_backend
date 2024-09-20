/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../../config';
import { ZodError } from 'zod';
import mongoose from 'mongoose';
import { IGenericErrorMessages } from '../../interfaces/error';

import handleZodError from '../../error/handleZodError';
import ApiError from '../../error/ApiError';

const globalErrorHandler: ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === 'development'
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : console.log(`🐱‍🏍 globalErrorHandler ~~`, error);

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages: IGenericErrorMessages[] = [];

  // Zod Validation Error
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  
  // Mongoose Validation Error
  } else if (error instanceof mongoose.Error.ValidationError) {
    statusCode = 400; // Bad Request
    message = 'Validation Error';
    errorMessages = Object.values(error.errors).map((el) => {
      return {
        path: el.path,
        message: el.message,
      };
    });
  
  // Mongoose CastError (e.g., invalid ObjectId)
  } else if (error instanceof mongoose.Error.CastError) {
    statusCode = 400; // Bad Request
    message = `Invalid ${error.path}: ${error.value}`;
    errorMessages = [
      {
        path: error.path,
        message: message,
      },
    ];
  
  // Custom API Error
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  
  // General Error
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
