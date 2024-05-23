import React from "react";
import Section from "../../components/Section/Section";
import books from "../../assets/books.png"

export default function Home() {
    return (
        <>
            <Section className="snap-start bg-homeSection1 bg-cover bg-center flex flex-col items-center gap-10 lg:items-start lg:flex-row lg:gap-0">
                <div className="w-full lg:w-1/3 space-y-4">
                    <small className="pb-2 lg:border-b-2 border-lime-400 tracking-widest text-center text-lime-400 font-bold">
                        POR UM APRENDIZADO SIMPLIFICADO
                    </small>
                    <h1 className="font-bold text-2xl lg:font-extrabold lg:text-4xl text-center lg:text-left">
                        Seja bem-vindo à plataforma FaciLitei
                    </h1>
                    <p className="text-justify">
                        A FaciLitei é uma plataforma que traz um conteúdo 100% gratuito de Matemática
                        para estudantes de nivel superior. Nela você poderá encontrar videoaulas das principais disciplinas
                        de cálculo e usufruir de diversos recursos que irão facilitar o seu aprendizado.
                    </p>
                    
                </div>
                <div className="w-full lg:w-2/3 min-h-60 h-full top-0 flex justify-center lg:pl-40">
                    <img className="relative bottom-0" src={books} alt="" />
                </div>
            </Section>
            <Section className="bg-slate-300 snap-start" >
                Home2
            </Section >
            <Section className="snap-start">
                Home3
            </Section>
            
        </>
    )
}