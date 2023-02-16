import { FastifyReply, FastifyRequest } from 'fastify';
import { server } from '../../app';
import { verifyPassword } from '../../utils/hash';
import { CreateUserInput, LoginInput } from './users.schema';
import {
  createUser,
  findUserByEmail,
  findUserById,
  findUsers,
} from './users.service';

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createUser(body);

    return reply.code(201).send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send(error);
  }
}

export async function loginHandler(
  request: FastifyRequest<{
    Body: LoginInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;
  
  const user = await findUserByEmail(body.email);

  if (!user)
    return reply.code(401).send({
      message: 'Invalid email or password',
    });

  const isCorrectPassword = verifyPassword({
    candidatePassword: body.password,
    salt: user.salt,
    hash: user.password,
  });

  if (isCorrectPassword) {
    const { password, salt, createdAt, ...payload } = user;

    const accessToken = server.jwt.sign(
      { ...payload },
      { expiresIn: 7 * 24 * 60 * 60 }
    );
    return reply.code(200).send({
      accessToken,
    });
  }

  return reply.code(401).send({
    message: 'Invalid email or password',
  });
}

export async function getUsersHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const users = await findUsers();

  return users;
}

export async function getCurrentUserHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const user = await findUserById(request.user.id);

  return user;
}
