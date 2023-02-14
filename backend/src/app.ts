import fastify from 'fastify';
import usersRouter from './modules/users/users.routes';
import { userSchemas } from './modules/users/users.schema';

const server = fastify();

async function main() {
  for(const schema of userSchemas){
    server.addSchema(schema)
  }

  server.register(usersRouter, {prefix: "api/users"})

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

main();