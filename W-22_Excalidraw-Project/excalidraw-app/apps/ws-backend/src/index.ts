import { WebSocket, WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";
const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_TOKEN);
    if (typeof decoded == "string") {
      return null;
    }

    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}

interface User {
  userId: string;
  rooms: string[];
  ws: WebSocket;
}

const users: User[] = [];

wss.on("connection", function connection(ws, request) {
  console.log("WS is connected to port 8080");
  const url = request.url;
  const params = new URLSearchParams(url?.split("?")[1]);
  const token = params.get("token") ?? "";

  const userId = checkUser(token);
  if (!userId) {
    ws.close();
    return;
  }

  users.push({
    userId,
    rooms: [],
    ws,
  });

  ws.on("message", async function message(data) {
    // This code first parses incoming data into a JavaScript object using TypeScript type assertions (data as unknown as string) and JSON.parse. It then checks the type of the parsed data. If the type is "join_room", it finds the user from the users array using their WebSocket (ws) and, if found, adds the roomId to that user’s rooms array.

    const parsedData = JSON.parse(data as unknown as string);
    if (parsedData.type === "join_room") {
      const user = users.find((u) => u.ws === ws);
      if (!user) return;
      user?.rooms.push(parsedData.roomId);
    }

    // If the type is "leave_room", it again finds the user and filters their rooms array to keep only the room that matches parsedData.room — though logically, it should keep rooms not equal to parsedData.room to remove that room.

    if (parsedData.type === "leave_room") {
      const user = users.find((u) => u.ws === ws);
      if (!user) return;
      user.rooms = user?.rooms.filter((room) => room === parsedData.room);
    }

    // line no 58
    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      console.log("Chat message received", {
        roomId,
        message,
        userId,
      });

      const chat = await prismaClient.chat.create({
        data: {
          roomId,
          userId,
          message,
        },
      });

      console.log("Chat created", chat);

      // Send the message to all users in the room
      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });
});
