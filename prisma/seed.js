import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create some users
  const owner = await prisma.user.create({
    data: { name: "John Doe", email: "john@example.com", role: "OWNER", phone: "123" },
  });

  const sitter = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "SITTER",
      phone: "123",
      sitterInfo: {
        create: {
          hourlyRate: 20.0,
          availability: "Mon-Fri, 9am-6pm",
          services: "Pet sitting, walking",
        },
      },
    },
  });

  // Create a pet
  await prisma.pet.create({
    data: { name: "Buddy", type: "DOG", age: 3, ownerId: owner.id },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
