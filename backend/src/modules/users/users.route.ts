import { FastifyInstance } from "fastify";
import { registerUserHandler } from "./users.controller";

async function usersRoutes(server: FastifyInstance) {
  server.post('/create', registerUserHandler)
}

export default usersRoutes