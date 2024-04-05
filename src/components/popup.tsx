import { XCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
import React, { FormEvent, SetStateAction } from "react"

interface PopupProps {
    status: boolean
    handleStatus: React.Dispatch<SetStateAction<boolean>>
}

export default function Popup({ handleStatus, status }: PopupProps) {
    const router = useRouter()
    function formSubmited(e: FormEvent) {
        e.preventDefault()
        router.push('/obrigado')
    }
    return (
        <div className={`absolute top-0 left-0 h-screen w-full flex items-center justify-center ${status ? 'opacity-100 z-50' : 'opacity-0 -z-50'}`}>
            <div
                onClick={() => handleStatus(!status)}
                className="absolute top-0 left-0 h-screen w-full bg-black/80"
            ></div>
            <form onSubmit={(e) => formSubmited(e)} className="relative w-full max-w-xl flex flex-col gap-6 z-50 sm:rounded-lg py-6 sm:spy-12 px-4 sm:px-24 bg-[#fff6ed]">
                <XCircleIcon onClick={() => handleStatus(!status)} className="text-my absolute right-4 top-4 h-10 w-10 cursor-pointer" />
                <h2 className="text-my text-2xl sm:text-3xl font-bold text-left sm:text-center pe-8">Preencha os campos abaixo para receber a aula</h2>
                <div className="flex flex-col gap-3">
                    <input className="inpt" type="text" placeholder="Nome" />
                    <input className="inpt" type="email" placeholder="Seu melhor email" />
                    <input className="inpt" type="phone" placeholder="(XX) 9 9999-9999" />
                    <input className="inpt" type="text" placeholder="Qual é o área/nicho do seu negócio ?" />
                    <input className="inpt" type="text" placeholder="Qual é a sua maior dificuldade hoje?" />
                    <input className="inpt" type="text" placeholder="Qual seu faturamento hoje? " />
                    <input className="inpt" type="text" placeholder="Quantas pessoas você tem na equipe?" />
                    <button
                        className="bg-[#0daa4f] rounded text-white py-2 text-center sm:max-w-sm w-full text-lg font-semibold"
                    >Quero acessar a aula
                    </button>
                </div>
            </form>
        </div>
    )
}