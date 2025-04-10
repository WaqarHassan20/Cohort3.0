// A WebSocket server using ws (no routes, just connections and events)
// websocket-server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");

// A regular Express HTTP server with defined routes
// express-server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.post("/echo", (req, res) => {
  const message = req.body.message;
  res.send({ echo: message });
});

app.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`);
});


// In an Express server, you handle requests through routes like /login, /products, etc. Each route responds to a specific HTTP method like GET, POST, etc. The communication is one-way: the client sends a request, and the server responds once.
// Example: The user sends a POST request to /echo, and the server sends back a response with the echoed message.

// In a WebSocket server, there are no routes. Instead, you listen for events like when a client connects, sends a message, or disconnects. Communication is bidirectional and real-time, so both the server and client can send messages at any time after the connection is established.
// Example: When a client connects, it can keep sending messages, and the server can reply instantly without creating new requests each time.

// So, Express is for standard web APIs or pages, while WebSocket is used when you need continuous, real-time communication, like for chats, multiplayer games, or live dashboards.