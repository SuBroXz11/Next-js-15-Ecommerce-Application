import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function seedDatabase() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
  console.log("Database seeded with sample users and products.");
}

seedDatabase();
