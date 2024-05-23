import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cursos from "../pages/Cursos/Cursos";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";



export default function Content(props) {
    return (
        <main className=" text-white h-full w-full lg:snap-y lg:snap-mandatory overflow-y-scroll lg:scroll-smooth scrollbar-thin scrollbar-thumb-slate-950 scrollbar-track-slate-400">
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cursos" element={<Cursos/>} /> 
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </main>
    )
}