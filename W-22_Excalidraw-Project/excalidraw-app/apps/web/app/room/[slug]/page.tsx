import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom } from "../../../components/ChatRoom";
interface paramsType{
    params:{
        slug:string
    }
}

async function getRoomId(slug:string){
    try {
        const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
        return response.data.room.id;

        } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching data:', error.response || error.message);
        } else {
            console.error('Error fetching data:', error);
        }
      }
      
  // response has data, data has room, room has id
  // so after response.data use your folder base routing path
}

export default async function ChatRoom1({params}:paramsType){
    const slug = (await params).slug;
    const roomId = await getRoomId(slug);
    if (!roomId) {
        return (
            <div>
                <h1>Room not found</h1>
            </div>
        )
    }

    return <>
        <ChatRoom id={roomId}/>   
    </>
}