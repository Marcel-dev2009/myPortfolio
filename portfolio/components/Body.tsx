"use client";
import Icons from "./icons";
import { Spotlight } from "./ui/spotlight-new";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import Link from "next/link"
import About from "./about";
import Expericence from "./expericence";
import Project from "./project";
import Work from "./work";
import Footer from "./footer";
const words = `A Full Stack Developer`;
function Body() {
  return (
   <>
<section className="overflow-x-hidden">
     <div className="h-[40rem] w-full  bg-grid-white/[0.02] antialiased  relative overflow-hidden border-b border-b-white/20 rounded-b-none">
    <Spotlight/>
     <div className="h-[40vh] absolute transform md:translate-x-[25rem] md:translate-y-[6rem] translate-y-[7rem]">
      <TextHoverEffect text="MARCEL SOMTOCHUKWU" automatic={true} />
     <div>
       <TextGenerateEffect words={words} className="text-3xl -translate-y-20 mx-8 whitespace-nowrap"/>
     </div>
     
    </div>
     <div className="absolute top-[20rem] px-4 transform rotate-60  text-white/5 border-b border-b-white/10 pb-4"> 
     <h2 className="text-7xl hidden md:block">WELCOME</h2> 
   </div>
   </div>  {/* spotlight end */}
     <div className="flex gap-4 justify-center items-center transform -translate-y-50">
       <Button asChild>
        <Link href="#service">
        View My Projects
        </Link>
       </Button>
       <Button variant="outline">
        <Link href="#connect">
        Connect with me
        </Link>
       </Button>
     </div>
    <div className="absolute top-[15rem] left-4 md:left-[20rem] text-3xl">
        <h2 className="font-semibold dark:text-white">Hey There 👋  I&apos;  </h2>  
    </div>
    <div>
    <Icons/> 
    </div>

     <section id="about">
          <About/>
     </section>

     <section className="mb-20">
    <Expericence/>
     </section>
     <section>
      <Project/>
     </section>
     <section>
      <Work/>
     </section>
     <section>
       <Footer/>
     </section>
</section>
  
   </>
  )
}
export default Body