import { z } from "zod";

// https://ui.shadcn.com/docs/components/form
// https://zod.dev/?id=basic-usage
export const updateProfileSchema = z.object({
    username: z.string().min(2),
    biography: z.string().min(2),
});