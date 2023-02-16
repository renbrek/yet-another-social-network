import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fjwt from '@fastify/jwt';
import usersRoutes from './modules/users/users.routes';
import { userSchemas } from './modules/users/users.schema';

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any
  }
}

function buildServer() {
  const server = Fastify();

  server.register(fjwt, {
    secret: "ntY7RxbZp0K0WsBBG2V5Y6mHI2cMWlkLC9vQk3xD"
  })

  server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        return reply.send(error)
      }
    }
  )

  for (const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(usersRoutes, { prefix: 'api/users' });

  return server;
}

export default buildServer;
