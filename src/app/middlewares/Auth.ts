
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authorize = (roles: string | string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: 'Unauthorized access' });

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
            const userRoles = Array.isArray(roles) ? roles : [roles];

            if (!userRoles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Unauthorized access' });
            }

            req.user = decoded;
            next();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Unauthorized access',
                error: error,
            });

        }
    };
};
