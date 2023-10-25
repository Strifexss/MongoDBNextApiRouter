"use client"
import React from 'react';
import axios from 'axios';

export default function Formulario() {

    function Logar(event: React.FormEvent) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        try {
            axios.get("/api/hello")
            .then(response => {
                console.log(response);
            });
        } catch (error) {
            console.error("Deu Merda:", error);
        }
    }

    return (
        <form className="w-[30rem] h-auto p-6 flex flex-col bg-gray-800 gap-2" 
            onSubmit={Logar}
        >
            <input type="text" className="w-full h-[2rem] px-2" placeholder="Insira o nome"/>
            <button type="submit" className="w-full h-[2rem] bg-blue-700 hover:bg-blue-900">
                <h1 className="text-white font-semibold">
                    Logar
                </h1>
            </button>
        </form>
    );
}