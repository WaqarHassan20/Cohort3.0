import { PrismaClient } from "../src/generated/prisma";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Bappa Stunnin",
      password: "HelloBappa",
      age: 50,
      city: "Karachi",
    },
  });
}

async function updateUser() {
  await client.user.update({
    where: { id: 1 },
    data: {
      username: "Bappa Stunnin",
      password: "BappaJani",
      age: 50,
      city: "Karachi",
    },
  });
}

async function deleteUser() {
  await client.user.delete({
    where: { id: 1 },
  });
}

// createUser();
// updateUser();
// deleteUser();
