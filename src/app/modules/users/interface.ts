// export const user_fields_constant = ['name','email','phone','address','location']

// export type IUserResponse ={
//         id: string,
//         name:string,
//         email:string,
//         password?:string,
//         address:string,
//         location:string,
//         avatar:string | null,
//         phone:string,
//         role:string,
//         createAt?:string,
//         updatedAt?:string,
//         vehicleProfiles?:string
// }

export interface IUser {
        name: string;
        email: string;
        password: string;
        role: 'Admin' | 'Trainer' | 'Trainee';
    }
    
    export interface ILoginRequest {
        email: string;
        password: string;
    }
    
    export interface IAuthToken {
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
        };
        token: string;
    }
    