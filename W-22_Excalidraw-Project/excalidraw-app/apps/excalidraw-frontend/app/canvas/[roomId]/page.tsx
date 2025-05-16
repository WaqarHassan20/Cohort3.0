"use client";
import { initDraw } from "@/draw";
import { useEffect, useRef } from "react"

export default function Canvas(){

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(()=>{
        if (canvasRef.current)
        {
            const canvas = canvasRef.current;
            initDraw(canvas);
        }
    },[canvasRef])

return <>
    <canvas ref={canvasRef} width={1536} height={745}></canvas>



    </>
}