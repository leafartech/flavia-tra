'use client'

import Image from "next/image";
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import Popup from "./popup";

export default function Header() {
    const [popup, setPopup] = useState<boolean>(false)

    return (
        <header className="relative h-screen w-full flex sm:items-center justify-center radial2 pb-4">
            <div className="absolute top-0 left-0 h-full w-full sm:block hidden">
                <Image
                    src="/images/bg1.png"
                    alt="Imagem da Flavia"
                    // width={1920}
                    // height={880}
                    layout="fill"
                    className="object-cover"
                />
            </div>
            <Image
                src="/images/bg2.png"
                alt="Imagem da Flavia"
                // width={1920}
                // height={880}
                layout="fill"
                className="object-cover sm:hidden"
            />
            <div className="absolute left-0 top-0 h-full w-2/3 linear z-10 sm:block hidden"></div>
            <div className="sm:grid z-50 sm:grid-cols-2 sm:gap-12 flex flex-col-reverse sm:px-0 px-4 w-full max-w-6xl">
                <div className="">
                    <div className="flex flex-col sm:justify-start justify-end items-start gap-2 text-left max-w-2xl">
                        <div className="w-40 sm:w-56">
                            <Image
                                src="/images/logo.png"
                                alt="Flavia Tramontin logo"
                                width={210}
                                height={133}
                                className="hidden sm:block"
                            />
                            <Image
                                src="/images/logo2.png"
                                alt="Flavia Tramontin logo"
                                width={210}
                                height={133}
                                className="sm:hidden block"
                            />
                        </div>
                        <div className="my-3 sm:my-6 flex flex-col gap-2">
                            <p className="text-[#e8cfb9] sm:text-my sm:items-center gap-2 text-base hidden sm:flex">
                                <span>Clique no botão abaixo para ter acesso a aula</span>
                                <ArrowDownCircleIcon className="h-5 w-5" />
                            </p>
                            <h1 className="text-[#e8cfb9] sm:text-my text-2xl sm:text-4xl sm:font-extrabold font-bold">Descubra qual foi a estratégia que me fez investir apenas 2 mil em tráfego e faturar R$ 315 mil</h1>
                            <p className="text-[#e8cfb9] sm:text-my sm:text-lg max-w-xl">Em uma aula gratuita você terá acesso à <strong>estratégia que vendeu mais de R$ 300.000</strong> em um lançamento.</p>
                            <p className="text-[#e8cfb9] sm:text-my flex flex-col gap-2 text-base  sm:hidden">
                                <span>Clique no botão abaixo para ter acesso a aula:</span>
                            </p>
                        </div>
                        <button
                            onClick={() => setPopup(!popup)}
                            className="bg-[#0daa4f] rounded text-white py-2 text-center sm:max-w-sm w-full text-lg font-semibold"
                        >Quero baixar a aula</button>
                    </div>
                </div>
                {/* <div className="">
                    <Image
                        src="/images/bg.png"
                        alt="Espaçonave decolando"
                        width={1202}
                        height={1046}
                        // layout="fill"
                        className="rounded-lg"
                    />
                </div> */}
            </div>
            <Popup
                status={popup}
                handleStatus={setPopup}
            />
        </header>
    )
}