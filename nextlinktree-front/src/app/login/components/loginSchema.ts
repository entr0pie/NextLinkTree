import { z } from "zod";

// https://ui.shadcn.com/docs/components/form
// https://zod.dev/?id=basic-usage
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please insert your email address" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Please insert your password" }),
});
