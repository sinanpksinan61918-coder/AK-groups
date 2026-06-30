// Database client placeholder for future database integration (e.g., Prisma, Drizzle, or Mongoose).
// Configured to support structured mock queries before database connection is finalized.

export const db = {
  properties: {
    findMany: async () => [],
    findUnique: async (args: { where: { id: string } }) => {
      void args;
      return null;
    },
  },
  bookings: {
    create: async (args: { data: Record<string, unknown> }) => {
      void args;
      return { id: "mock-booking-id", status: "pending" };
    },
    findMany: async () => [],
  },
};
