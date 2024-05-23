import React from "react";
import { Link } from "react-router-dom";

const liStyle ="px-4 text-center py-2 shadow-lg hover:text-slate-900 w-full hover:bg-slate-400 transition-all hover:font-bold duration-300"

export default function DropdownItem({name, path}) {
    return (
        <li className={liStyle}>
            <Link to={path}>
            {name}
            </Link>
        </li>
    )
}