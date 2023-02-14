import { FastifyInstance } from 'fastify';
import { registerUserHandler } from './users.controller';
import { $ref } from './users.schema';

async function usersRoutes(server: FastifyInstance) {
  server.post(
    '/create',
    {
      schema: {
        body: $ref('createUserSchema'),
        response: {
          201: $ref('createUserResponseSchema'),
        },
      },
    },
    registerUserHandler
  );
}

export default usersRoutes;
