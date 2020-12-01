export default {
  Query: {
    seeAllClub: async (_, args, { prisma }) => {
      prisma.seeAllClub();
    },
  },
};
