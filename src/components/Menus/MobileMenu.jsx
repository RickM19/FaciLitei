import React from "react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const style = {
    nav: "absolute right-0 top-0 h-screen flex justify-center items-center flex-col overflow-x-hidden transition-all duration-500 bg-slate-900",
    ul: "overflow-x-hidden w-full flex flex-col items-center gap-8 text-lg",
}


export default function MobileMenu(props) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <LuMenu className="h-8 w-8 md:h-10 md:w-10 mr-3 md:mr-8"/>
            </button>
            <nav className={`
            ${style.nav}            
            ${isOpen ? "w-full" : "w-0"}`
            }>
                <button onClick={() => setIsOpen(false)} className="absolute right-0 top-0 m-4">
                    <IoMdClose className="w-8 h-8" />
                </button>
                
                <ul className={style.ul}>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} to={"/cursos"}>Cursos</Link>
                    </li>
                    <li>
                        <Link className="font-bold" onClick={() => setIsOpen(false)} to={"/contact"}>CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </>
        
    )

}