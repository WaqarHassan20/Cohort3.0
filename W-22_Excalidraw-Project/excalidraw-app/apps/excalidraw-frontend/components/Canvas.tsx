"use client";

import { initDraw} from '@/draw';
import { useEffect, useRef, useState } from 'react'
import { Circle, Pencil, RectangleHorizontalIcon } from 'lucide-react';
import { IconButton } from './IconButton';


type Shape = "circle" | "pencil" | "rect";

export function Canvas({roomId,socket}: {roomId:string,socket:WebSocket}) {

    const canvasRef = useRef<HTMLCanvasElement>(null) 
    const [selectedTool, setSelectedTool] = useState<Shape>("pencil");  
    
    useEffect(()=>{
        //@ts-expect-error: Adding selectedTool to the window object for debugging purposes
        window.selectedTool = selectedTool
    },[selectedTool])

    useEffect(()=>{
        if (canvasRef.current)
        {
            initDraw(canvasRef.current, roomId,socket);
        }
    },[canvasRef, roomId, socket])

    return <div className='h-[100vh] overflow-hidden'>
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
    <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
    </div>
}

function TopBar({selectedTool,setSelectedTool}:
    {selectedTool:Shape,setSelectedTool:(s:Shape)=>void
}) {
    return (
    <div className='flex gap-2 border-3 border-zinc-700 py-1 px-2 rounded-xl fixed top-6 left-[50%] text-white'>
        <IconButton icon={<Pencil/>} activated={selectedTool === "pencil"} onClick={()=>{setSelectedTool("pencil")}}/>
        <IconButton icon={<RectangleHorizontalIcon/>} activated={selectedTool === "rect"} onClick={()=>{setSelectedTool("rect")}}/>
        <IconButton icon={<Circle/>} activated={selectedTool === "circle"} onClick={()=>{setSelectedTool("circle")}}/>
    </div>
)}