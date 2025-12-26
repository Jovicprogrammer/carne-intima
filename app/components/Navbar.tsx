import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Impact } from "../fonts"

export default function NavbarCI() {

    return (

        <div className="relative ">

            <Image className="absolute w-40 top-0 left-170  hover:motion-safe:animate-pulse hover:transition transition" src="/images/carne-intima-logo.png" alt="logo Carne Íntima" width={500} height={500} ></Image>

            <nav className={`relative top-35 left-0 right-0 mx-2 bg-violent flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-1 -extralight shadow-md shadow-red-950 ${Impact.className}`}>
            
                <div className="flex gap-6 items-center justify-center h-auto text-white">
                    <a href="/" className="hover:bg-white/40 transition p-3">Home</a>
                    <a href="/Cidade" className="hover:bg-white/40 transition p-3">A Cidade</a>
                    <a href="/Pessoas" className="hover:bg-white/40 transition p-3">As pessoas</a>
                    <a href="/Historia" className="hover:bg-white/40 transition p-3">A História</a>
                </div>
            </nav>
        </div>  

    )

}