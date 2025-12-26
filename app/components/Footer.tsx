import { Averia, Impact } from "../fonts";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();


export default function FooterCI() {

    return (

        <div className={`flex text-white/60 items-center justify-center h-10 pt-25 pb-10 ${Impact.className}`}>

        <p>Vesquicio. {currentYear}</p>


        </div>


    )
}