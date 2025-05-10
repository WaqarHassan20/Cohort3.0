import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_TOKEN } from "@repo/backend-common/config";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
  console.log("WS is connected to port 8080");
  const url = request.url;
  const params = new URLSearchParams(url?.split("?")[1]);
  const token = params.get("token") ?? "";

  const decoded = jwt.verify(token, JWT_TOKEN);

  if (typeof decoded == "string") {
    ws.close();
    return;
  }

  if (!decoded || !decoded.userId) {
    ws.close();
    return;
  }

  ws.on("message", function message(data) {
    ws.send("something received : PONG");
  });
});
