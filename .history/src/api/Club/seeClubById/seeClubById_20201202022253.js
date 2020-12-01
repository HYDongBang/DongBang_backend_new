import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    seeClubById: async (_, args) => {
      return prisma.club.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
};
