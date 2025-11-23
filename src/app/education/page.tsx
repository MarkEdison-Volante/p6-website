import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Education() {

    return (
        <div style ={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
            <Link href="./">
            <Button>Return to Landing Page</Button>
            </Link>

        <section className="py-10">
            <h1 style={{ fontSize: "35px"}}><b>Education</b></h1>
            <br/>
            <p>
                During my elementary school days, I graduated from Tigaon North Central School.
            </p>
            <div style= {{ justifyContent: 'center', gap: '40px', marginTop: '20px', width: '100%', display: 'flex', borderWidth: 'auto' }}>
            <Image 
            src="/images/tigaonnorth.jpg" 
            alt="north" 
            width={400} 
            height={250}
            />
            <Image 
            src="/images/tigaonnorthlogo.jpg" 
            alt="northlogo" 
            width={300} 
            height={300}
            />
            </div>
            <br/>
            <br/>
            <p>
                I was also a student at Philippine Science High School - Bicol Region Campus during Junior and Senior High.  
            </p>
            <div style= {{ justifyContent: 'center', gap: '40px', marginTop: '20px', width: '100%', display: 'flex', borderWidth: 'auto' }}>  
            <Image 
            src="/images/pshs.jpg" 
            alt="pshs" 
            width={500} 
            height={300}
            />
            </div>
            <br/>
            <br/>
            <p>
                Right now, I am a BSIT student in my second year of college at Naga College Foundation.    
            </p>
            <div style= {{ justifyContent: 'center', gap: '40px', marginTop: '20px', width: '100%', display: 'flex', borderWidth: 'auto' }}>  
            <Image 
            src="/images/ncf.jpg" 
            alt="ncf" 
            width={500} 
            height={300}
            />
            </div>  
        </section>
        </div>
    );
}