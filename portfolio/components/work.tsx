"use client"
import gsap from "gsap";
import { useRef } from "react"
import { InfiniteMovingCards } from "./ui/cards";
function Work() { 
   const firstRef = useRef<HTMLDivElement | null>(null);
   const secondRef = useRef<HTMLDivElement | null>(null);
   const thirdRef = useRef<HTMLDivElement | null>(null);
   const testimonials = [
  {
    quote:
      "I&apos;ve watched him grow as a programmer over the years. He’s consistent, hardworking, and always willing to learn new things.",
    name: "CDSS Student",
    title: "Ogechukwu Otitochukwu Blossom",
  },
  {
     quote:
      "Buh you really did a good work there",
    name: "CDSSE Student",
    title: "Nite Blessed Uchechukwu on my Apple Clone site ",
  },
  {
    quote:
      "Every project he shows me gets better than the last. You can tell he’s serious about coding and building real solutions..",
    name: "Godwin Ngozi",
    title: "Full stack developer",
  },
  {
       quote:
      "He built a clean, mobile-friendly website for my restaurant. Even though it was a free project, he worked like a professional and delivered on time.",
    name: "Mr. Charles ",
    title: "Jevinik Staff",
  },
  {
    quote:
      "Nice work and Effort Marcel !",
    name: "Ani Valentine Chukwuebuka on My apple clone",
    title: "Student - [Marist Brothers of the Schools]",
  },
];
  const handleMouseEnter = () => {
    if(firstRef.current){
      gsap.to(firstRef.current , {
        scale : 1.1,
        duration:2,
        ease: "power4.inOut",
        zIndex : 50,
        backgroundColor : "#fff",
      })
    }
  }
  const handleMouseLeave = () => {
    if(firstRef.current){
      gsap.to(firstRef.current , {
        scale : 1.0,
        backgroundColor : "#000",
        duration : 2,
        ease : "power4.out"
      })
    }
  }
  const handleMouseEnter2 = () => {
    if(secondRef.current){
      gsap.to(secondRef.current , {
        scale : 1.1,
        duration:2,
        ease: "power4.inOut",
        zIndex:60,
              backgroundColor : "#fff",
      })
    }
  }
  const handleMouseLeave2 = () => {
    if(secondRef.current){
      gsap.to(secondRef.current , {
        scale : 1.0,
        backgroundColor : "#000",
        duration : 2,
        zIndex : 0,
        ease : "power4.out"
      })
    }
  }
  const handleMouseEnter3 = () => {
    if(thirdRef.current){
      gsap.to(thirdRef.current , {
        scale : 1.1,
        duration:2,
        ease: "power4.inOut",
        zIndex:30,
              backgroundColor : "#fff",
      })
    }
  }
  const handleMouseLeave3 = () => {
    if(thirdRef.current){
      gsap.to(thirdRef.current , {
        scale : 1.0,
        backgroundColor : "#000",
        duration : 2,
        ease : "power4.out"
      })
    }
  }

  return (
    <section className="border rounded-lg  w-[100vw] mt-2 py-10">
    <div>
     <h1 className="text-center font-semibold text-xl md:text-2xl">How I work</h1>
     <p className="text-center text-sm md:text-xl ">I divide my work flow into Three primary stages to ensure maximum output and best user experience [UX]</p>
    </div> 
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-10">

       <div ref={firstRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="border-2  md:w-[25%] bg-black h-[30rem] rounded-br-lg rounded-tl-lg">
         <h4 className=" text-center transform translate-y-[10rem] text-xl font-semibold" >Tap / Hover on the Card</h4>
       <h4 className="text-black  flex justify-center
        transform translate-y-[10rem] font-bold text-xl md:text-2xl 
        "> Planning and Research
       
        </h4 >
      <p className="font-light md:font-semibold text-sm text-black  flex justify-center
        transform translate-y-[12rem] mx-10">I plan tasks into clear steps and research the best approaches before starting. This keeps my workflow focused, efficient, and less prone to mistakes.</p>        
       </div>

       <div ref={secondRef} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}  className="border-2 md:w-[25%] bg-black h-[30rem] rounded-br-lg rounded-tl-lg">
          <h4 className=" text-center transform translate-y-[10rem] text-xl font-semibold" >Tap / Hover on the Card</h4>
        <h4 className="text-black flex justify-center font-bold text-xl md:text-2xl 
        transform translate-y-[10rem]">Designing</h4>
         <p className="font-light md:font-semibold text-sm text-black  flex justify-center
        transform translate-y-[12rem] mx-10">I focus on creating clean, user-friendly layouts that balance function and style, ensuring the final product is both practical and appealing.</p> 
       </div>
       <div ref={thirdRef} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}  className="border-2 md:w-[25%] bg-black h-[30rem] rounded-br-lg rounded-tl-lg">
           <h4 className=" text-center transform translate-y-[10rem] text-xl font-semibold" >Tap / Hover on the Card</h4>
        <h4 className="text-black flex justify-center font-bold text-xl md:text-2xl 
        transform translate-y-[10rem] "> Development</h4>
        <p className="font-light md:font-semibold text-sm text-black  flex justify-center
        transform translate-y-[12rem] mx-10">I build features step by step, then debug and test to catch errors early. Once everything works smoothly, I ship the product with confidence.</p> 
       </div>
    </div>
    <div>
         <h4 className="mt-4 font-bold text-zinc-300 text-xl mx-10">What Clients are saying....</h4>
         <div className="h-[40rem] rounded-md flex flex-col antialiased w-[100vw] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <InfiniteMovingCards items={testimonials} direction="right" speed="slow"/>
         </div>
       </div>
    </section>
  )
}
export default Work