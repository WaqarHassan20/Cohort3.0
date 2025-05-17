"use client";

import { useEffect, useRef, useState } from 'react'
import { Circle, Pencil, RectangleHorizontalIcon } from 'lucide-react';
import { IconButton } from './IconButton';
import { Game } from '@/draw/Game';


export type tool = "circle" | "pencil" | "rect";

export function Canvas({roomId,socket}: {roomId:string,socket:WebSocket}) {

    const canvasRef = useRef<HTMLCanvasElement>(null) 
    const [selectedTool, setSelectedTool] = useState<tool>("pencil");  
    const [game, setGame] = useState<Game>();  
    
    useEffect(()=>{
        game?.setTool(selectedTool)
    },[selectedTool, game])

    useEffect(()=>{
        if (canvasRef.current)
        {
            const g = new Game(canvasRef.current, roomId,socket);
            setGame(g);
        }
    },[canvasRef, roomId, socket])

    return <div className='h-[100vh] overflow-hidden'>
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
    <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
    </div>
}

function TopBar({selectedTool,setSelectedTool}:
    {selectedTool:tool,setSelectedTool:(s:tool)=>void
}) {
    return (
    <div className='flex gap-2 border-3 border-zinc-700 py-1 px-2 rounded-xl fixed top-6 left-[50%] text-white'>
        <IconButton icon={<Pencil/>} activated={selectedTool === "pencil"} onClick={()=>{setSelectedTool("pencil")}}/>
        <IconButton icon={<RectangleHorizontalIcon/>} activated={selectedTool === "rect"} onClick={()=>{setSelectedTool("rect")}}/>
        <IconButton icon={<Circle/>} activated={selectedTool === "circle"} onClick={()=>{setSelectedTool("circle")}}/>
    </div>
)}