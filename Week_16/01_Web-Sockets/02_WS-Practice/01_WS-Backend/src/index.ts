// Import the WebSocketServer class from the 'ws' library
import { WebSocketServer } from "ws";

// Create a WebSocket server that listens on port 8080
const ws = new WebSocketServer({ port: 8080 });

// When a new client connects to the server
ws.on("connection", (socket) => {
  console.log("Server Started!"); // Log that the server has started on a new connection

  // Handle incoming messages from the connected client
  socket.onmessage = (e) => {
    // If the client sends "ping", respond with a fun message
    if (e.data == "ping") {
      socket.send("Yeh hui na baat yeh lay PONG");
    }
    // For any other message, send a warning/funny reminder
    else {
      socket.send("Abay ping type krna hai yrr !");
    }
  };
});

// This is the explanation of the code above //
// This code sets up a basic WebSocket server using the ws library in Node.js. It listens for incoming WebSocket connections on port 8080. When a client connects, a message "Server Started!" is logged to the console. After the connection is established, the server listens for incoming messages from that specific client. If the message received is exactly "ping", the server responds with a humorous Urdu message: "Yeh hui na baat yeh lay PONG". If the message is anything else, it replies with another funny message: "Abay ping type krna hai yrr !". This demonstrates how to handle WebSocket connections and implement basic conditional message handling in a friendly, desi style.
