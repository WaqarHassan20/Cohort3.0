"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 });
ws.on("connection", (socket) => {
    console.log("Server Started!");
    socket.onmessage = (e) => {
        if (e.data == "ping") {
            socket.send("Yeh hui na baat yeh lay PONG");
        }
        else {
            socket.send("Abay ping type krna hai yrr !");
        }
    };
});
