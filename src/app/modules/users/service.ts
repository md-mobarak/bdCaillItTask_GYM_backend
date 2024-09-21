
import ApiError from '../../../error/ApiError';
import { IUser, ILoginRequest, IAuthToken } from './interface';
import User from './userModel';
// import User from './model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import ApiError from '../../error/ApiError';
interface IGetAllUsersParams {
    search?: string;
    role?: string;
    status?: string;
    page?: number;
    limit?: number;
  }
class UserService {
    // User registration
    async registerUser(payload: IUser): Promise<IUser> {
        const { email, password } = payload;

        // const userExists = await User.findOne({ email });
        // if (userExists) {
        //    return throw new ApiError(400, 'User already exists with this email');
        // }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ ...payload, password: hashedPassword });

        return user;
    }

    // User login
    async loginUser(payload: ILoginRequest): Promise<IAuthToken> {
        const { email, password } = payload;
        const user:any = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new ApiError(401, 'Invalid credentials');
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        return {
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
            token,
        };
    }

    // Get profile for authenticated user
    async getProfile(userId: string): Promise<IUser> {
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, 'User not found');
        }
        return user;
    }
   
  // Get all users with filters, search, and pagination
  async getAllUsers({ search, role, status, page = 1, limit = 10 }: IGetAllUsersParams): Promise<{ users: IUser[], totalUsers: number }> {
    const query: any = {};

    // Search by name or email
    if (search) {
        query.$or = [
            { name: { $regex: search, $options: "i" } },  // Case-insensitive search by name
            { email: { $regex: search, $options: "i" } }  // Case-insensitive search by email
        ];
    }

    // Filter by role
    if (role) {
        query.role = role;
    }

    // Filter by status
    if (status) {
        query.status = status;
    }

    // Count total users for pagination
    const totalUsers = await User.countDocuments(query);

    // Fetch users with pagination
    const users = await User.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

    return { users, totalUsers };
}


    // Get user by ID
    async getUserById(userId: string): Promise<IUser | null> {
        return User.findById(userId);
    }

    // Update user
    async updateUser(userId: string, payload: Partial<IUser>): Promise<IUser | null> {
        return User.findByIdAndUpdate(userId, payload, { new: true });
    }

    // Delete user
    async deleteUser(userId: string): Promise<IUser | null> {
        return User.findByIdAndDelete(userId);
    }


}

export default new UserService();


// import ApiError from '../../../error/ApiError';
// import User from './userModel';
// import { IUser, ILoginRequest } from './interface';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// class UserService {
//     // Create a user
//     async createUser(payload: IUser): Promise<IUser> {
//         const { email } = payload;
//         const userExists = await User.findOne({ email });
//         if (userExists) throw new ApiError(400, 'User already exists with this email');
//         const hashedPassword = await bcrypt.hash(payload.password, 10);
//         return User.create({ ...payload, password: hashedPassword });
//     }

//     // Get all users
//     async getAllUsers(): Promise<IUser[]> {
//         return User.find();
//     }

//     // Get user by ID
//     async getUserById(userId: string): Promise<IUser | null> {
//         return User.findById(userId);
//     }

//     // Update user
//     async updateUser(userId: string, payload: Partial<IUser>): Promise<IUser | null> {
//         return User.findByIdAndUpdate(userId, payload, { new: true });
//     }

//     // Delete user
//     async deleteUser(userId: string): Promise<IUser | null> {
//         return User.findByIdAndDelete(userId);
//     }
// }

// export default new UserService();
