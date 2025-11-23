import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {

    return (
        <div style ={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
            <Link href="./">
            <Button>Return to Landing Page</Button>
            </Link>
        <Image src="/images/bg.jpg" layout="fill" alt="background image" className="z-[-1]"/>
        

        <section className="py-10">
            <h1 style={{ fontSize: "35px", color:"gold" }}><b>About Me</b></h1>
            <br/>
            <p style={{color:"orange"}}>
                My name is Mark Edison D. Volante and I am a second-year student at Naga College Foundation in Bachelor of Science in Information Technology.
            </p>
            <p style={{color:"orange"}}>
                I am currently 19 years old, I live on Tigaon, Camarines Sur, and my birthday is on May 9, 2006.
            </p>
            <div style= {{ justifyContent: 'center', gap: '40px', marginTop: '20px', width: '100%', display: 'flex', borderWidth: 'auto' }}>
            <Image 
            src="/images/myself.jpg" 
            alt="myself" 
            width={300} 
            height={300}
            unoptimized={true}
            />
            </div>
            

        </section>
         </div>
    );
}