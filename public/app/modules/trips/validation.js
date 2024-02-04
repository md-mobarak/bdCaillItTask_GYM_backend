"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripValidation = void 0;
const zod_1 = require("zod");
const createTrip = zod_1.z.object({
    body: zod_1.z.object({
        start_location: zod_1.z.string({
            required_error: 'Start_location is required'
        }),
        end_location: zod_1.z.string({
            required_error: 'End_location is required'
        }),
        start_time: zod_1.z.string({
            required_error: 'Start_time is required'
        }).transform((value) => new Date(value)),
        end_time: zod_1.z.string({
            required_error: 'End_time is required'
        }).transform((value) => new Date(value)),
        // distance: z.number({
        //     required_error: 'Distance is required'
        // }),
        passenger_count: zod_1.z.number({
            required_error: 'Passenger_count is required'
        }),
        trip_rent: zod_1.z.number({
            required_error: 'Expense is required'
        }),
        vehicle_id: zod_1.z.string({
            required_error: 'Vehicle is required'
        }),
        user_id: zod_1.z.string({
            required_error: 'User is required'
        }),
    })
});
exports.tripValidation = {
    createTrip
};
