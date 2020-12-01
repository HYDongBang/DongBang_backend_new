const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default {
  Query: {
    seeAllClub: async () => {
      prisma.seeAllClub();
    },
  },
};
