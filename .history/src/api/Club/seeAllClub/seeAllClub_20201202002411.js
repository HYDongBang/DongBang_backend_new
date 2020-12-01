import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    seeAllClub: async () => {
      prisma.club.findMany({
          where: {
              id
          }
      }),
    }
  },
};
