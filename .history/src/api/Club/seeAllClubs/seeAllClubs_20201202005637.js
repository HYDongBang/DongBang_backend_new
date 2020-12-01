import { context } from "../../../context";

export default {
  Query: {
    seeAllClubs: async () => {
      return prisma.club.findMany();
    },
  },
};
