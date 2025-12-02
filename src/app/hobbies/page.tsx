import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Hobbies() {

    return (
    <div style ={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
            <Link href="./">
            <Button>Return to Landing Page</Button>
            </Link>
        <Image src="/images/celestegif.gif" layout="fill" alt="celestebg" className="z-[-1]" unoptimized = {true}/>

        <section className="py-10">
            <h1 style={{ fontSize: "35px", color: "yellow"}}><b>Hobbies</b></h1>
            <br/>
            <div style={{color: "white"}}>
            <p>
                My main hobbies are playing video games. <br/>
                I am especially a fan of Platformers and Bullet-Hell style games, with my favorites being Celeste and Deltarune, <br/>
                but I also dabble in some RPGs like Pokemon.
            </p>
            <br/>
            <p>
                I also enjoy reading fictional stories from books, manga, and fanfics. <br/>
                And when I find myself doing nothing, I sometimes spend a few minutes scrolling through social media.
            </p>
            </div>
        </section>
        </div>
    );
}
