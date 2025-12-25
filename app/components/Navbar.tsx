import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Impact } from "../fonts"

export default function NavbarCI() {

    return (

        <nav className={`fixed top-0 z-500 left-0 right-0 mx-auto bg-violent flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-1 -extralight shadow-md ${Impact.className}`}>

            <div className="flex gap-6 items-center justify-center h-auto text-white">
                <a href="/" className="hover:bg-white/40 transition p-3">Home</a>
                <a href="/Cidade" className="hover:bg-white/40 transition p-3">A Cidade</a>
                {/* <Image className="absolute w-60 left-88 hover:rotate-12 hover:transition transition" src="/images/SlowRisersLogo.webp" alt="logo Slow Risers" width={500} height={500} ></Image> */}
                <a href="/Pessoas" className="hover:bg-white/40 transition p-3">As pessoas</a>
                <a href="/Historia" className="hover:bg-white/40 transition p-3">A História</a>
            </div>
        </nav>  

    )

}