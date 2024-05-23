import React from "react";



import { LuBookOpen } from "react-icons/lu";
import LargeMenu from "./Menus/LargeMenu";
import MobileMenu from "./Menus/MobileMenu";
import { Link } from "react-router-dom";




export default function Header() {
    const {innerWidth: width} = window

    const lgScreen = width >= 1000
    console.log(width, lgScreen)
    return (
        <header className="flex items-center justify-between h-16 w-full fixed z-50 top-0 left-0 p-2 md:p-4 bg-gradient-to-r from-slate-700 to-slate-900  text-white  shadow border-b-2 border-slate-500">
            <Link to={"/"} >
                <div className="flex gap-2 md:gap-4 items-center ml-3 md:ml-10">
                    <LuBookOpen className="w-6 h-6 md:w-12 md:h-12"/>
                    <span className="tracking-wide font-bold md:font-extrabold text-base md:text-xl">FaciLitei</span>
                </div>
            </Link>


            {lgScreen ? <LargeMenu /> : <MobileMenu /> }
 
        </header>
    )
}