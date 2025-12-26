import { Metadata } from "next";
import NavbarCI from "../components/Navbar";
import FooterCI from "../components/Footer";
import { Averia } from "../fonts";

  export const metadata: Metadata = {
    title: "A Cidade - Carne Íntima",
    description: "Conheça os personagens que dão vida a Slow Risers",
  };
  
export default function Cidade() {

    return (

        <div className={` bg-linear-to-b bg-cleary to-cheddar text-blood ${Averia.className}`}>

        <NavbarCI />

        <p className="h-screen pt-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima in sunt debitis facere quasi. Quae doloribus temporibus ipsam cumque natus in error provident, sint hic. Et, ipsam. Tempora, provident blanditiis?
            Harum laborum impedit ipsa nemo voluptate, obcaecati est aut nobis molestias fugit ex ullam maiores tenetur magnam totam enim libero sit necessitatibus ab consequuntur, qui debitis modi quaerat! Animi, nulla?
            Natus doloremque suscipit eum cupiditate temporibus culpa magnam nostrum porro tempora? Adipisci architecto inventore quo quisquam assumenda at, ratione ab neque sequi dicta voluptatum vero quam, tenetur labore similique eius!
            Neque veritatis id architecto nisi excepturi eum ipsum minus laborum labore alias, blanditiis debitis placeat, unde vel adipisci ratione ipsam accusantium modi suscipit possimus eligendi error eveniet doloribus. Dolorum, consequatur?
            Qui ratione fuga repellendus quisquam quia, facilis quod modi nostrum in officiis incidunt, excepturi at velit tempora delectus quo repudiandae quae voluptates molestias aliquid ipsam, totam alias provident beatae. Impedit!
            A incidunt voluptatum laudantium! Beatae, facilis incidunt cum eligendi facere aperiam repellendus porro similique, vero sunt et accusantium omnis deserunt unde sapiente aut architecto illo maxime quo? Provident, aliquam dignissimos.
            Minima, quaerat iusto totam inventore explicabo quam dolor quia voluptate ipsa, nostrum architecto ratione ipsum fugit modi aliquid consectetur odio! Harum nulla facere provident laudantium impedit praesentium adipisci, nisi nemo!
            Iure suscipit asperiores, labore consequuntur eligendi optio excepturi temporibus ipsa velit nesciunt, explicabo facere quam? Nisi suscipit mollitia dolor quia distinctio qui nobis repudiandae, possimus eveniet a repellendus, ut consequatur?
            Facilis magnam, harum iure inventore laboriosam fugit totam vel modi, ut qui deserunt ex tempora eaque nam. Veniam, veritatis velit. Nobis est voluptatum rem vel, exercitationem obcaecati magnam consequuntur veniam?
            Corporis, veniam consequuntur officiis sunt tempora dicta eligendi inventore nostrum nam tempore autem asperiores commodi, quidem cupiditate similique laudantium blanditiis optio aliquam laboriosam iste. Dolorem aperiam aut illum porro dolore?
        </p>
        
        <FooterCI/>

        </div>

    )

}