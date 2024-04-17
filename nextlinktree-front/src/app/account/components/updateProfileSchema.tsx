import { z } from "zod";

export const updateProfileSchema = z.object({
    username: z.string().min(2),
    biography: z.string().min(2),
});