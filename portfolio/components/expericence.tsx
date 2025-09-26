"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Type from "./Type"
import { Timeline } from "./ui/Timeline"
import py from "../public/Phyton.jpg"
import ex from "../public/ex.png"
import next from "../public/next.png"
import node from "../public/node.png"
import Ts from "../public/Ts.jpeg"
import mongo from "../public/mongo.png"
import react from "../public/react.png"
import js from "../public/javascript.jpeg"
import cisco from "../public/20250918_224447.jpg"
import Image from "next/image"
function Expericence() {
  useGSAP(() => {
  gsap.to("#text" , {
    y : 0,
    opacity : 1,
    ease : "power1.inOut",
    duration : 2,
  })
  }, []);
  const data = [
    {
     title : "2023",
     content : (
      <div>
       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        During the BECE break on 2023 I actually started out learning Phython but web development caught my attention and then I dived deep to the web with HTML and CSS
       </p>
       <div className="grid grid-cols-2 gap-4">
      <Image src={py} alt="Phyton Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
       </div>
      </div>
     ) 
    },
    {
     title : "2024",
     content : (
      <div>
       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
         I started out making static websites but within me I wanted more.. I wanted to create something better so 
         I learnt Javascript to make my website dynamic and although the programming language had a learning curve 
         it was worth it..
         After learning Javascript I built dynamic project that I&apos;m proud of..
         As I went deeper into Programming I understood that there were frameworks that improves the Developer Experience(DX) and also ones for the backend development of the web app 
         Not a longer than a month a learnt Node.js for backend development of my projects and managing dependecies
         React for client User Interface , express for API creation and mongoDB for managing user database efficently,
          and securely 
       </p>
       <div className="grid grid-cols-2 gap-4">
      <Image src={js} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={node} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={ex} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={mongo} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={react} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={next} alt="JavaScript Programming" width={500} height={500} 
      className="h-20 w-full rounded-lg  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
       </div>
       <p>
        I joined coding competitons both in school and online platforms to enhance my skills and won competitons as well
       </p>
      </div>
     ) 
    },
    {
     title : "2025",
     content : (
      <div>
       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Coding more I just kept stacking skills and won a very signifcant award for myself too
        In the recent Cisco competiton that took place in my school and that gave me to opportunity to learn TypeScript 
        a subset o Javascript
       </p>
       <div className="grid grid-cols-2 gap-4">
      <Image src={cisco} alt="Unites Cisco" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
      <Image src={Ts} alt="TypeScript" width={500} height={500} 
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"/>
       </div>
      </div>
     ) 
    },
  {
      title: "Changelog",
      content: (
        <div>
          <div className="mb-8">
           <p className="text-sm md:text-xl">
            At this point I&apos;ve come to realize that web development is just for programming foundation 
           In the nearest future to come I&apos;ll be pursuing building embedded system with object oriented programming languages that enable robust automation of system 
           </p>
           <p className="mt-10 font-bold text-xl md:text-2xl">
            Thanks For coming this far 
           </p>
          </div>
          </div>
      ),
    },
  ]
  return (
    <section className="grid place-content-center border rounded-lg mx-10 py-10 mt-10">
       <div>
        <h2 id="text" className="text-xl font-semibold md:text-3xl py-4 transform -translate-y-20 opacity-0
        translate-x-2.5">
           Career Timeline
        </h2>
        <div className="absolute left-110">
          <Type/>
        </div>
        <div>
          <Timeline data={data}/>
        </div>
       </div>
    </section>
  )
}
export default Expericence