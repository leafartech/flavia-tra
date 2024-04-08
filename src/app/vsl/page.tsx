'use client'

import MySwiper from "@/components/MySwiper"
import MySwiper2 from "@/components/MySwiper/testmonials"
import { useEffect, useState } from "react"

export default function Page() {
    const [isVideoPlayed, setIsVideoPlayed] = useState<boolean>(true)
    const [seconds, setSeconds] = useState<number>(0)
    const [videoURL, setVideoURL] = useState<string>('https://www.youtube.com/embed/sn-4EV_yuV8?autoplay=0&si=rBwE6-wPBpuEUYqe')

    // function playVideo() {
    //     setIsVideoPlayed(!isVideoPlayed)
    //     if (isVideoPlayed) {
    //         setVideoURL('https://www.youtube.com/embed/sn-4EV_yuV8?autoplay=1&si=rBwE6-wPBpuEUYqe')
    //     } else {
    //         setVideoURL('https://www.youtube.com/embed/sn-4EV_yuV8?autoplay=0&si=rBwE6-wPBpuEUYqe')
    //     }
    // }

    return (
        <div>
            <header className="min-h-screen sm:py-12 xl:py-2 w-full flex justify-center items-center px-4 grad-2">
                <div className="flex flex-col items-center gap-8 max-w-4xl text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#74062f]">Uma nova forma de se posicionar, comunicar e vender mentorias e serviços no Instagram</h1>
                    <div className="relative w-full">
                        {/* <div className="cursor-pointer absolute top-0 left-0 h-[88%] w-full" onClick={() => playVideo()}></div> */}
                        <iframe id="video" className="rounded sm:w-[856px] sm:h-[500px] w-full h-[256px]" src={videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <a
                        className="uppercase text-white bg-[#74062FDE] sm:max-w-md w-full py-4 rounded text-lg font-bold"
                        href="https://api.whatsapp.com/send?phone=5542998209900&text=Ol%C3%A1%20Rainha%2C%20tudo%20bem%3F%20Tenho%20interesse%20em%20participar%20da%20Comunidade%20Empres%C3%A1ria%207D.%20Como%20funciona%3F"
                    >Quero falar sobre a mentoria</a>
                </div>
            </header>
            <main className="sm:pt-12 pb-16 px-4 grad-2">
                <section className="w-full flex justify-center overflow-hidden">
                    <div className="w-full max-w-4xl flex justify-center overflow-hidden">
                        <MySwiper />
                    </div>
                </section>
                <section className="w-full flex justify-center sm:pt-24 pt-12 overflow-hidden">
                    <div className="w-full max-w-4xl flex justify-center overflow-hidden">
                        <MySwiper2 />
                    </div>
                </section>
            </main>
            <footer className="bg-black py-4 text-center">
                <p className="text-white">Flavia Tramontin© 2023 – Todos os direitos reservados</p>
            </footer>
        </div>
    )
}