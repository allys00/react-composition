import { z } from "zod";

export const LoginValuesSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(50),
});

export type LoginValues = z.infer<typeof LoginValuesSchema>;
