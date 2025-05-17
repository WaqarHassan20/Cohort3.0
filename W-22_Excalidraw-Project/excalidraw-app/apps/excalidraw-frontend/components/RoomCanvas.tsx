"use client";
import { WS_BACKEND } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { Loader2 } from "lucide-react";

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
          return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-xl animate-pulse">
                <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                <span className="text-lg font-semibold text-gray-700">
                  Connecting to socket server...
                </span>
              </div>
            </div>
          );
        }

    return <>
    <Canvas roomId={roomId} socket={socket} />
    </>

}

