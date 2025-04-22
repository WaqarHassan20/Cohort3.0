// Import the generated Prisma client (this is where your DB models live)
import { PrismaClient } from "../generated/prisma";

// This line checks if there's already a Prisma client
// stored globally (to avoid creating a new one on every hot reload).
// If not, it creates a new PrismaClient instance.

// @ts-ignore

const prisma = globalThis.prisma ?? new PrismaClient();

// In development (non-production), we attach the Prisma client
// to the global object. This prevents creating multiple PrismaClient
// instances during hot reloading, which can cause errors or memory leaks.

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// Export the single Prisma instance for reuse across the app

export default prisma;
