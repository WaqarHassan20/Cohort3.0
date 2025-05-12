import axios from "axios";
import { BACKEND_URL } from "../app/config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: string) {
  const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
  console.log("response from backend: ", response.data);
  return response.data.messages;
}


export async function ChatRoom({ id }: { id: string }) {
    try {
      const messages = await getChats(id) || [];
      console.log("messages of room : ", messages);
      return <ChatRoomClient messages={messages} id={id} />;
    } catch (error) {
      console.error("Failed to fetch chats:", error);
      return <div>❌ Failed to load chat room.</div>; // or return null;
    }
  }
  