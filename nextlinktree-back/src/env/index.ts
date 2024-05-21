import { z } from "zod";
import "dotenv/config"

const envSchema = z.object({
    PORT: z.string(),
});

export const env = envSchema.parse(process.env);
