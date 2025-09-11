import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // User dummy
  await prisma.user.create({
    data: {
      firstName: "Budi",
      lastName: "Santoso",
      email: "budi@example.com",
      password: "hashedpassword123",
      role: "user",
    },
  });

  // Event dummy
  await prisma.event.create({
    data: {
      eventName: "Konser Musik",
      eventDate: new Date("2025-09-20T19:00:00.000Z"),
      venue: "Jakarta Convention Center",
      price: 250000,
      imageUrl: "/uploads/konser.jpg",
    },
  });

  // Seat dummy
  await prisma.seat.createMany({
    data: [
      { rowNum: 1, seatNum: 1, status: "available", eventID: 1 },
      { rowNum: 1, seatNum: 2, status: "available", eventID: 1 },
      { rowNum: 1, seatNum: 3, status: "available", eventID: 1 },
    ],
  });
}

main()
  .then(() => console.log("✅ Seeding selesai"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
