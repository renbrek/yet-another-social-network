import { FastifyInstance } from 'fastify';
import {
  getUsersHandler,
  loginHandler,
  registerUserHandler,
} from './users.controller';
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

  server.post(
    '/login',
    {
      schema: {
        body: $ref('loginUserSchema'),
        response: {
          200: $ref('loginResponseSchema'),
        },
      },
    },
    loginHandler
  );

  server.get(
    '/',
    {
      preHandler: [server.authenticate],
    },
    getUsersHandler
  );
}

export default usersRoutes;
