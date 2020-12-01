import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    clubById: async (_, { id }) => {
      return prisma.club({ id });
    },
  },
};
