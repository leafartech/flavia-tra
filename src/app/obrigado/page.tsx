import Image from "next/image";

export default function Page() {
    return (
        <div className="radial w-full h-screen flex justify-center items-center px-4">
            <div className="flex flex-col gap-4 sm:items-center justify-center text-left sm:text-center max-w-md">
                <div className="sm:w-40 w-32">
                    <Image
                        src="/images/logo.png"
                        alt="Flavia Tramontin logo"
                        width={210}
                        height={133}
                    />
                </div>
                <h4 className="text-xl hidden sm:block">Quase lá...</h4>
                <h2 className="text-xl sm:text-2xl font-bold">Agora para receber a sua aula siga esses dois passos simples:</h2>
                <ul className="text-base sm:text-lg flex flex-col gap-1">
                    <li>- Me siga no Instagram @flavia.tramontin</li>
                    <li>- Mande a palavra-chave “AULA01” no meu direct mesmo para receber o material</li>
                </ul>
            </div>
        </div>
    )
}