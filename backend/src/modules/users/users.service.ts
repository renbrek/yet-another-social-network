import { hashPassword } from '../../utils/hash';
import prisma from '../../utils/prisma';
import { CreateUserInput } from './users.schema';

export async function createUser(input: CreateUserInput) {
  const { hash, salt } = hashPassword(input.password);

  const user = await prisma.user.create({
    data: {
      ...input,
      password: hash,
      salt,
    },
  });

  return user;
}
