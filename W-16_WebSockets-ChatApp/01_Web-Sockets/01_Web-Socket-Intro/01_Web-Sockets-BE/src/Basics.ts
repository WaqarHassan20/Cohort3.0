import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// This is called as event handler //
wss.on("connection", (socket) => {
  console.log("Server Started!");
  socket.send("Welcome to Web Sockets! Server is connected successfully");
  setInterval(() => {
    socket.send(
      "Current price of Bitcoin is $" + Math.floor(Math.random() * 100000)
    );
  }, 3000);

  socket.on("message", (e) => {
    console.log(e.toString());
  });
});

// Example of the backpack website of stock market //
// That I am on the landing page now don't send me the data but keep the connection persistant //
// Methods called were the Subscribe and Unsubscribe //
// First method is send by the client in the form of subscribe and then responses are sent //
// This is in the case of a stock market website. //
