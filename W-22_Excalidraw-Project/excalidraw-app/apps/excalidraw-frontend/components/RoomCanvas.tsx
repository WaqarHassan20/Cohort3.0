"use client";
import { WS_BACKEND } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}: {roomId:string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(()=>{
        const ws = new WebSocket(`${WS_BACKEND}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMTMzNmZkZC0zZDJiLTQyYzItOTIwMy1kM2MyMDM0NmE2MDUiLCJpYXQiOjE3NDY5NTcxMzh9.8fwDcrpDqM96MX-3W2V3xMV6Oh9tnAT58iq3YFylaZM`)
        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type:"join_room",
                roomId:roomId
            }))
        }

    },[roomId])

    if (!socket) {
        return <div>Connecting to socket server .....</div>
    }

    return <>
    <Canvas roomId={roomId} socket={socket} />
    </>

}

