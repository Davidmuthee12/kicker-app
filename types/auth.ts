import {
  UseFormRegister,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { z } from "zod";

export const UserSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof UserSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export type FormFieldProps<TFieldValues extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  className?: string;
};

export type ValidFieldNames = "name" | "email" | "password" | "confirmPassword";
