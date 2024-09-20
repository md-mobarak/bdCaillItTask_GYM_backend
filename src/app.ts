



import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/gobalErrorHandler';
import rootRoute from './app/routes';

const app = express();

// Apply CORS
app.use(cors());

// Add middleware to parse JSON and URL-encoded bodies
app.use(express.json());  // Parses application/json
app.use(express.urlencoded({ extended: true }));  // Parses application/x-www-form-urlencoded

// Test if API is working
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Successfully working Express Backend for bdCallingIt Application',
  });
});

// Use routes
app.use('/api/v1', rootRoute);

// Handle global errors
app.use(globalErrorHandler);

// Handle 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: {
      path: req.originalUrl,
      message: 'Not Found',
    },
  });
  next();
});

export default app;
