import { object, ref, string, type InferType } from "yup";

// Validate with yup

const MIN_NAME = 3;
const MIN_PASSWORD = 6;

export const registerSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  name: string().min(MIN_NAME, `Name must be at least ${MIN_NAME} characters`).required("Name is required"),
  password: string().min(
    MIN_PASSWORD,
    `Password must be at least ${MIN_PASSWORD} characters`
  ).required("Password is required"),
  confirmPassword: string().oneOf([ref("password")], "Password does not match").required("Confirm Password is required"),
});

export const loginSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(
    MIN_PASSWORD,
    `Password must be at least ${MIN_PASSWORD} characters`
  ).required("Password is required"),
});

export type RegisterFields = InferType<typeof registerSchema>;
export type LoginFields = InferType<typeof loginSchema>;
