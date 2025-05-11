"use client";
import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
interface ChatType{
    messages:string[],
    id:string
}

export function ChatRoomClient({messages,id}:ChatType){

    const [currentMessage,setCurrentMessage] = useState("");
    const [chats,setChats] = useState(messages);
    const {loading,socket} = useSocket();
    console.log("Chats are : ",chats)
    useEffect(()=>{

        if (socket && !loading) {
            socket.send(JSON.stringify({
                type:"join",
                roomId:id
            }))

            socket.onmessage = (event) =>{
                const parsedData = JSON.parse(event.data);
                if (parsedData.type === "chat") {
                    setChats((c) => [...c, {message:parsedData.message}])
                }

            }

        }

    },[socket,loading,id])

    return <>
    
    {chats.map((chat, i) => <div key={i}>{chat.message}</div>)}
  
    <div>
        <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button
            onClick={() => {
            socket?.send(
                JSON.stringify({
                type: "chat",
                roomId: id,
                message: currentMessage,
                })
            );
            setCurrentMessage("");
            }}
        >
            Send message
        </button>
    </div>


    </>

}