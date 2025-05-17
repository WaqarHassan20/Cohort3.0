import { HTTP_BACKEND } from "@/config";
import axios from "axios";

export async function getShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
  console.log(res);
  const messages = res.data.messages;

  const shapes = messages
    .map((x: { message: string }) => {
      try {
        const messageData = JSON.parse(x.message);

        return messageData.shape;
      } catch (err) {
        console.log(err);

        console.warn("Invalid JSON message:", x.message);

        return null;
      }
    })
    .filter(Boolean);

  console.log(shapes);

  return shapes;
}
