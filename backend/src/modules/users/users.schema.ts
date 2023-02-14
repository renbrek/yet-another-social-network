import { z } from 'zod';
import {buildJsonSchemas} from 'fastify-zod'

const userCore = {
  email: z.string().email(),
  name: z.string().optional(),
};

const createUserSchema = z.object({
  ...userCore,
  password: z.string(),
});

const createUserResponseSchema = z.object({
  ...userCore,
  id: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const {schemas: userSchemas, $ref} = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema
})