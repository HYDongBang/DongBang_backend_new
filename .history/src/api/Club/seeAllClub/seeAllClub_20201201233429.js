export default {
  Query: {
    seeAllClub: async (_, args, { prisma }) => {
      prisma.Club();
    },
  },
};
