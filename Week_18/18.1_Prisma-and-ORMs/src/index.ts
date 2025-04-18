import { PrismaClient } from "../src/generated/prisma";

const client = new PrismaClient();
// {log: ["query"],} this is optioinal to pass to see the raw query running under the hood

import express from "express";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json(users);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await client.user.findFirst({
    where: { id: Number(id) },
    include: { todo: true },
  });

  res.json({ user });
});

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
async function findUser() {
  const user = await client.user.findFirst({
    where: { id: 2 },
    include: { todo: true },
  });
  console.log(user);
}

// createUser();
// updateUser();
// deleteUser();
// findUser();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
