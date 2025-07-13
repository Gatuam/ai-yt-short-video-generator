import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "usernam must be atleast 2 char")
  .max(20, "username must be less than 20 char")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special char");

export const signUpValidation = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "password must be atleast 6 char" }),
});
