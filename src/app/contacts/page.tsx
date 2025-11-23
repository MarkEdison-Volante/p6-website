import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Contact() {

    return (
        <div style ={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
            <Link href="./">
            <Button>Return to Landing Page</Button>
            </Link>
        <Image src="/images/contactbg.jpg" layout="fill" alt="contact background image" className="z-[-1]"/>

        <section className="py-10">
            <h1 style={{ fontSize: "35px"}}><b>Contacts</b></h1>
            <br/>
            <p>
                Here are a list of some of my contacts.
            </p>
            <br/>
            <ul>
                <li>Cellphone Number: 09700551644</li>
                <li>Gbox Email: mevolante@gbox.ncf.edu.ph</li>
                <li>Facebook Name: Mark Edison Volante</li>
            </ul>
            <br/>
            
        </section>
        </div>
    );
}