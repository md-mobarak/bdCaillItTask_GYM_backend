import { z } from "zod";

const createDriver = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email format",
      }),
    phone: z.string({
      required_error: "Phone is required",
    }),
    avatar: z.string({
      required_error: "Avatar is required",
    }),
    experience: z.string({
      required_error: "Experience is required",
    }),
    join_date: z.string({
      required_error: "Join_date is required",
    }),
    rating: z.string({
      required_error: "Rating is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
  }),
});

export const driverValidationSchema = {
  createDriver,
};