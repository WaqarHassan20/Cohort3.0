import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({ port: 8080 });

let numberOfClients = 0;

interface uesrs {
  socket: WebSocket;
  room: string;
}

let allSockets: uesrs[] = [];

ws.on("connection", (socket) => {
  numberOfClients++;
  console.log("User Connected # is : ", numberOfClients);

  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket: socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type === "chat") {
      // Alternative approach to find the room //
      // const currentUserRoom = allSockets.find((s) => s.socket == socket)?.room;

      let currentUserRoom = null;
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].socket == socket) {
          currentUserRoom = allSockets[i].room;
        }
      }

      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room == currentUserRoom) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });

  socket.on("disconnect", () => {
    allSockets.filter((s) => {
      s.socket !== socket;
    });
  });
});

// import { WebSocketServer, WebSocket } from "ws";

// const ws = new WebSocketServer({ port: 8080 });

// let numberOfClients = 0;

// let allSockets: WebSocket[] = [];

// ws.on("connection", (socket) => {
//   numberOfClients++;

//   console.log("User Connected # is : ", numberOfClients);

//   allSockets.push(socket);

//   socket.on("message", (message) => {
//     console.log("Received message : ", message.toString());

//     // for (let i = 0; i < allSockets.length; i++) {
//     //   const s = allSockets[i];
//     //   s.send("Broadcasted Message : " + message.toString());
//     // }

//     allSockets.forEach((s) => {
//       s.send("Broadcasted Message : " + message.toString());
//     });
//   });
// });
