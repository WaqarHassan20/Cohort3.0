import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Server Started!");
  socket.on("message", (e) => {
    if (e.toString() === "ping") socket.send("Yeh hui na baat yeh lay PONG");
    else socket.send("Abay ping type krna hai!");
  });
});
