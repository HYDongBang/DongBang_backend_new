import { context } from "../../context";

const prisma = new PrismaClient();

export default {
  Query: {
    seeAllClubs: async () => {
      return prisma.club.findMany();
    },
  },
};
