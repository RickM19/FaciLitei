import React from "react";
import { SlArrowDown, SlHome } from "react-icons/sl";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const style = {
    inicio: "flex items-center gap-2 hover:border-b-2 transition p-2 ml-4",
    cursos: "flex items-center gap-1 relative group",
    contato: "bg-white shadow text-slate-900 px-3 py-2 ml-10 w-36 text-center rounded-lg hover:brightness-75 transition-all duration-500 cursor-pointer",
}

export default function LargeMenu(props) {
    
    return (
        <nav>
            <ul className="flex gap-4 mr-10 h-full items-center">
                <li>    
                    <Link to={"/"} className={style.inicio}>
                        <SlHome/>
                        INÍCIO   
                    </Link> 
                </li>
                <li className={style.cursos}>
                    <Link to={"/cursos"} >
                        CURSOS 
                    </Link>

                    <SlArrowDown className="scale-75" />
                    <Dropdown />
                </li>
                <li className="hover:scale-105 transition-all duration-500">
                    <Link to={"/contact"} className={style.contato}>
                        CONTATO
                    </Link>
                </li>
                
            </ul>
        </nav>
        
    )
}