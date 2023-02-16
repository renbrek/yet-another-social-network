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

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUsers() {
  return prisma.user.findMany();
}
