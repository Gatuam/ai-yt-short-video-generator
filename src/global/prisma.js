import { PrismaClient } from "../generated/prisma/index.js";

const globalForPrisma = globalThis;

/** @type {import('@prisma/client').PrismaClient} */
/**
 * @type {PrismaClient}
 */
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;