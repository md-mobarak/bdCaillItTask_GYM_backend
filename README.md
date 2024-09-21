# Gym Class Scheduling and Membership Management System

![Gym Management System](link_to_your_image) <!-- Add a relevant image link here -->

## Project Overview

The Gym Class Scheduling and Membership Management System is designed to efficiently manage gym operations, catering to three user roles: Admin, Trainer, and Trainee. This system facilitates class scheduling, booking, and profile management, ensuring a smooth experience for both trainers and trainees while maintaining strict adherence to business rules.

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **ORM/ODM:** Prisma/Mongoose
- **Database:** MongoDB/PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)

## Live Hosting Link

Access the live application [here](https://gymbackend.vercel.app/api/v1).

## API Endpoints

### Authentication
- **POST** `https://gymbackend.vercel.app/api/v1/auth/register` - Register a new user
- **POST** `https://gymbackend.vercel.app/api/v1/auth/login` - User login
- **GET** `https://gymbackend.vercel.app/api/v1/auth/users` - Get all users (Admin only)
- **GET** `https://gymbackend.vercel.app/api/v1/auth/trainers` - Get trainers (Admin only)
- **GET** `https://gymbackend.vercel.app/api/v1/auth/:id` - Get user by ID (Admin/Trainee)
- **PUT** `https://gymbackend.vercel.app/api/v1/auth/:id` - Update user (Admin/Trainee)
- **DELETE** `https://gymbackend.vercel.app/api/v1/auth/:id` - Delete user (Admin/Trainee)

### Class Scheduling
- **POST** `https://gymbackend.vercel.app/api/v1/class` - Create a class schedule (Admin only)
- **GET** `https://gymbackend.vercel.app/api/v1/class` - Get all class schedules (Admin, Trainer, Trainee)
- **GET** `https://gymbackend.vercel.app/api/v1/class/:id` - Get class schedule by ID (Admin, Trainer, Trainee)
- **PATCH** `https://gymbackend.vercel.app/api/v1/class/:id` - Update class schedule (Admin only)
- **DELETE** `https://gymbackend.vercel.app/api/v1/class/:id` - Delete class schedule (Admin only)

### Booking
- **POST** `https://gymbackend.vercel.app/api/v1/booking` - Book a class schedule (Trainee only)
- **GET** `https://gymbackend.vercel.app/api/v1/booking` - Get all bookings (Admin, Trainee)
- **GET** `https://gymbackend.vercel.app/api/v1/booking/:id` - Get booking by ID (Admin, Trainee)
- **DELETE** `https://gymbackend.vercel.app/api/v1/booking/:id` - Cancel booking (Trainee only)

## Business Rules

- Admins can create and manage trainers, with a limit of 5 class schedules per day.
- Each class can accommodate up to 10 trainees.
- Trainees can only book classes if slots are available and cannot book more than one class per time slot.
- Proper error handling is implemented for validation errors, unauthorized access, and booking limit violations.

## Database Schema

![Database Schema](link_to_your_relational_diagram) <!-- Add a relational diagram link here -->

## Admin Credentials

- **Email:** admin@example.com
- **Password:** password123

## Instructions to Run Locally

1. Clone the repository:
   ```bash
   git clone https:https://github.com/md-mobarak/bdCaillItTask_GYM_backend
   cd gym-management-backend
   ## npm install
   ## npm start
# Testing Instructions
. Use the admin credentials provided to log in.
. Test key features such as:
. Creating trainers
. Scheduling classes
. Booking classes
. Viewing and managing bookings

