import { ReactNode } from "react";

export function IconButton({icon,onClick,activated}:{icon:ReactNode,onClick:()=>void,activated:boolean}) {
    return <>
    <div className={`${activated ? "text-white" : "text text-gray-500"} rounded-lg border-0 cursor-pointer bg-black hover:bg-gray-700 p-2`} onClick={onClick} >
        {icon}
    </div>
    </>
}