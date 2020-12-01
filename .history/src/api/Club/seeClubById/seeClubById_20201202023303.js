import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    seeClubById: async (_, { id }) => {
      console.log(id + ": this is id");
      console.log(typeof id + ": this is type");
      return prisma.club.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
