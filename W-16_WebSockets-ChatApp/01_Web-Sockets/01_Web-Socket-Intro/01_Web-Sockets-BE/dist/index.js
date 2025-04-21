"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("Server Started!");
    socket.on("message", (e) => {
        if (e.toString() === "ping")
            socket.send("Yeh hui na baat yeh lay : pong");
        else
            socket.send("Abay ping type krna hai!");
    });
});
