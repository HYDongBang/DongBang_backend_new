const prisma = new PrismaClient();

export default {
  Query: {
    seeAllClub: async (_, args, { prisma }) => {
      prisma.clubs();
    },
  },
};
