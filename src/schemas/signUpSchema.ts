import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "username mustbe atleast 3 characters")
  .max(20, "username must be no more than 20 characters")
  .regex(/^[a-zA-z0-9_]+$/, "Username must not contain any special character");

export const signUpSchemaValidations = z.object({
  uesrname: usernameValidation,
  email: z.string().email({ message: "Please provide a valid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});
