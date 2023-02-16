import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const userCore = {
  email: z.string().email(),
  name: z.string().optional(),
};

const userCoreWithId = {
  ...userCore,
  id: z.string(),
};

const createUserSchema = z.object({
  ...userCore,
  password: z.string(),
});

const createUserResponseSchema = z.object({
  ...userCoreWithId,
});

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const loginResponseSchema = z.object({
  accessToken: z.string(),
});

const userResponseSchema = z.object({
  ...userCoreWithId,
});

const usersResponseSchema = z.array(userResponseSchema);

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginUserSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema,
  loginUserSchema,
  loginResponseSchema,
  userResponseSchema,
  usersResponseSchema,
});
