"use client";

import { initDraw} from '@/draw';
import { useEffect, useRef } from 'react'

export function Canvas({roomId,socket}: {roomId:string,socket:WebSocket}) {

    const canvasRef = useRef<HTMLCanvasElement>(null) 
    
    useEffect(()=>{
        if (canvasRef.current)
        {
            initDraw(canvasRef.current, roomId,socket);
        }
    },[canvasRef, roomId, socket])

    return <>
    <canvas ref={canvasRef} width={1536} height={745}></canvas>
    </>
}