import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div style ={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
  
    Landing Page with NextJS
    <br/>
    by
    <br/>
    Mark Edison D. Volante

    <></>
    
    <br/>

    <br/>
    <div>
    <Link href="./about">
    <Button>About Me</Button>
    </Link>

    <Link href="./contacts">
    <Button>Contacts</Button>
    </Link>
    
    <Link href="./education">
    <Button>Education</Button>
    </Link>

    <Link href="./hobbies">
    <Button>Hobbies</Button>
    </Link>
    </div>
    
    </div>
  );
  
  
}
