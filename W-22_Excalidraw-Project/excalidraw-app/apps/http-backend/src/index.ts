import { middleware } from "./middleware";
import { JWT_TOKEN } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";
import bcrypt from "bcrypt";
import cors from "cors";
import {
  CreateUserSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import jwt from "jsonwebtoken";
import express from "express";
const app = express();

app.use(express.json());
app.use(cors());

// ============================= //
// ========== SignUp =========== //
// ============================= //
app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }

  const { email, password, name } = parsedData.data;

  // Check if user already exists
  const existingUser = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    res.json({ message: "User already exist" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  if (!hashedPassword) {
    res.json({ message: "Error while hashing password" });
    return;
  }

  // Create new user

  try {
    const user = await prismaClient.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        name: name,
      },
    });

    const userId = user.id;
    res.json({
      message: "User created successfully",
      userId: user.id,
      email: email.toLowerCase(),
      hashedPassword: hashedPassword,
    });
  } catch (e) {
    console.log(e);
    res.json({ message: "Error while creating new User" });
    return;
  }
});

// ============================= //
// ========== SignUp =========== //
// ============================= //

app.post("/signin", async (req, res) => {
  const parsedData = SignInSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }

  try {
    const { email, password } = parsedData.data;

    const user = await prismaClient.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      res.json({ message: "User not found, please sign up" });
      return;
    }
    // Check if password is correct
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      res.json({ message: "Invalid password" });
      return;
    }

    const token = jwt.sign({ userId: user?.id }, JWT_TOKEN);

    res.json({ userId: user.id, token: token });
  } catch (e) {
    console.log(e);
    res.json({ message: "Error while signing in" });
    return;
  }
});

app.post("/room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({ message: "Invalid Inputs" });
    return;
  }
  try {
    const { name } = parsedData.data;
    // @ts-ignore
    const userId = req.userId;

    // Check if room already exists
    const existingRoom = await prismaClient.room.findUnique({
      where: {
        slug: name,
      },
    });

    if (existingRoom) {
      res.json({ message: "Room already exist" });
      return;
    }

    // Create new room

    const room = await prismaClient.room.create({
      data: {
        slug: name,
        adminId: userId,
      },
    });
    res.json({
      message: "Room created successfully",
      roomName: room.slug,
      roomId: room.id,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while creating room" });
    return;
  }
});

app.get("/chats/:roomId", async (req, res) => {
  const roomId = Number(req.params.roomId);

  if (!roomId) {
    res.json({ message: "Invalid roomId" });
    return;
  }
  try {
    const messages = await prismaClient.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });
    console.log(messages);
    res.json({
      message: "Fetched messages",
      messages: messages,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error while fetching messages" });
    return;
  }
});

app.get("/room/:slug", async (req, res) => {
  const slug = req.params.slug;
  const room = await prismaClient.room.findFirst({
    where: {
      slug,
    },
  });

  res.json({
    message: "Fetched room",
    room: room,
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
