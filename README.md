# 🏋️ Gym Class Scheduling & Membership Management System (Backend)

This is the backend API for a **Gym Class Scheduling and Membership Management System** built using **Node.js**, **Express.js**, **TypeScript**, and **Mongoose**. The system allows **Admins** to manage trainers and gym class schedules, **Trainers** to view their schedules, and **Trainees** to book classes.

## 🚀 Features

- 🔐 **JWT-based Authentication**: Secure login system with access and refresh tokens.
- 🧑‍💼 **Role-based Access Control**: Admin, Trainer, and Trainee roles with specific permissions.
- 📅 **Class Scheduling**: Admins can create, update, and delete gym class schedules.
- 📝 **Booking System**: Trainees can browse and book available classes.
- 🛡️ **Error Handling & Validation**: Robust error messages and input validation.
- 📊 **Scalable API Design**: Built with a modular architecture to allow for future expansion.
- 🗂 **CRUD Operations**: Fully functional Create, Read, Update, Delete operations for managing users and schedules.

## 🛠️ Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: Ensures type safety and scalability.
- **Mongoose**: MongoDB ODM for database management.
- **MongoDB Atlas**: Cloud-based database for storing user data and schedules.
- **JWT**: JSON Web Tokens for secure authentication.
- **Bcrypt**: Hashing library for secure password management.
- **Dotenv**: For environment variable management.

---

## 📚 API Documentation

### Base URL: `http://localhost:5000/`

### 🔐 Authentication Routes

| Method | Endpoint        | Description                 |
|--------|-----------------|-----------------------------|
| POST   | `/auth/register` | Register a new trainee      |
| POST   | `/auth/login`    | Log in and get JWT tokens   |

### 🧑‍💼 Admin Routes

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/admin/trainers`       | Create a new trainer                 |
| PUT    | `/admin/trainers/:id`   | Update a trainer's details           |
| DELETE | `/admin/trainers/:id`   | Delete a trainer                     |
| POST   | `/admin/schedules`      | Create a new class schedule          |
| GET    | `/admin/schedules`      | View all class schedules             |
| PUT    | `/admin/schedules/:id`  | Update a class schedule              |
| DELETE | `/admin/schedules/:id`  | Delete a class schedule              |

### 🧑‍🏫 Trainer Routes

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/trainer/schedules`    | View assigned schedules              |

### 🧑‍💪 Trainee Routes

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/trainee/schedules`    | View available class schedules       |
| POST   | `/trainee/book`         | Book a class                        |
| DELETE | `/trainee/cancel`       | Cancel a booked class               |

---

## 🛡️ Error Handling

- **400** Bad Request: Occurs when the client sends invalid data or an incomplete request.
- **401** Unauthorized: Returned if the user attempts to access a route without a valid token.
- **403** Forbidden: Returned if the user attempts to access a resource they do not have permission for.
- **404** Not Found: Returned when a requested resource is not found in the system.
- **500** Internal Server Error: Returned for unexpected server errors.

### Example Response (Error)

```json
{
  "error": "Unauthorized access",
  "message": "Invalid token",
  "statusCode": 401
}
##🧰 Tools & Libraries Used
TypeScript: For writing clean, maintainable, and type-safe code.
ESLint: For code quality and consistency.
Prettier: For code formatting.
Nodemon: For automatic server restarts during development.
Ts-node-dev: For running TypeScript directly in Node.js.
Mongoose: For interacting with MongoDB.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
Postman: For testing the REST API during development.

##👤 Author
##Mohammad Mobarak Hossen - Full Stack Developer

For any queries, feel free to reach out at mdmobarakhossen112@gmail.com or Contact +8801825639631.



