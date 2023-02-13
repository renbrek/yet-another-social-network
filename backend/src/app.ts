import fastify from 'fastify';
import usersRouter from './modules/users/users.route';

const server = fastify();

async function main() {
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