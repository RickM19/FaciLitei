import React from "react";
import ERROR from '../../assets/e404.svg'
import { Link } from "react-router-dom";
import { LuArrowBigDownDash } from "react-icons/lu";

export default function NotFound() {
    return (
        
       <div className="h-full w-full">
            <div className="flex items-center  justify-center gap-2 md:rounded-3xl flex-col w-screen h-full md:w-full md:h-5/6 p-4 lg:w-3/4 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500 border-slate-100 border-2 shadow-2xl">
            <img src={ERROR} className="w-3/4/2 h-1/2 mb-5 " alt="ERROR404"  />

            <h1 className="font-bold text-xl border-y-4 p-1">OPSSSS!</h1>
            <h2 className="font-extrabold text-center">PÁGINA NÃO ENCONTRADA!</h2>
            <LuArrowBigDownDash className="animate-bounce w-7 h-7"/>

            <Link className="w-11/12 md:w-80 py-2 bg-lime-400 shadow-xl  text-center text-black font-bold tracking-widest rounded-md" to={"/"} >PÁGINA INICIAL</Link>
            </div>
            
       </div>
    )
}