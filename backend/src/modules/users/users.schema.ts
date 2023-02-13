import { z } from "zod";

const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string()
})