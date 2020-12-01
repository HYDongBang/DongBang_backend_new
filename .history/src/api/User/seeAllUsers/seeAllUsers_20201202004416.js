import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    seeAllUsers: async () => {
      prisma.user.findMany();
    },
  },
};
