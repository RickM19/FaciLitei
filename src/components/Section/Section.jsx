import React from "react";



export default function Section(props) {
    return (
        <section className={`h-fit min-h-full pt-10 pb-0 px-2 lg:px-10 ${props.className}`}>
            {props.children}
        </section>
    )
}