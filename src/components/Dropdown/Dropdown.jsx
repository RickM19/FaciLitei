import React from "react";
import DropdownItem from "./DropdownItem";

const ulStyle = "absolute top-full overflow-hidden w-52 h-fit hidden bg-slate-950 rounded-lg  left-1/2 -translate-x-1/2  group-hover:block  border-t-4 shadow-lg"

export default function Dropdown() {
    return (
        <ul className={ulStyle}>

            <DropdownItem name="Geometria Analítica" path="/cursos/GeoAnalitica"/>
            <DropdownItem name="Calculo I e II"  path="/cursos/CalcIeII"/>
            <DropdownItem name="Matemática Discreta" path="/cursos/MatDiscreta"/>
            <DropdownItem name="Calculo Númerico" path="/cursos/CalcNum"/>
            <DropdownItem name="Algebra Linear" path="/cursos/AlgebraLinear"/>

        </ul>
    )
}