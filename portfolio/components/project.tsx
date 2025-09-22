"use client"
import { CardBody , CardContainer , CardItem } from "./ui/3d-card"
import Image from "next/image"
import muse from "../public/muse.jpg"
import simple from "../public/simply.jpg"
import sms from "../public/fedena.jpg"
import apple from "../public/appledem.jpg"
import nova from "../public/nova.jpg"
import {FaGithub} from "react-icons/fa"
import Link from "next/link"
function Project() {
  return (
     <section id="service" className="grid place-content-center overflow-x-hidden border rounded-lg w-[100vw] py-10 mt-10">
      <div>
        <h1 className="text-xl md:text-3xl font-semibold text-center mb-6" >Projects</h1>
       <div className="mx-10 px-10 md:font-semibold text-sm md:text-xl">
            <p>A showcase of the applications and experiments I&apos;ve built so far. Each project reflects both my technical growth and my drive to solve real problems with code. Some are complete, others are still evolving, but together they represent my journey toward building impactful technology — from practical tools like school management systems to creative applications like music players. Every line of code is a step toward the bigger innovations I aim to create in the future.</p>
       </div>
       <div className="flex flex-col md:flex-row gap:0 md:gap-4 flex-wrap justify-center items-center ">
        <CardContainer>
          <CardBody className="bg=gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Immersive Music experience with Muse Player
          </CardItem>
            <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         <span className="border bg-green-500 text-black px-6 rounded-lg">Status</span> : <span>Modern UI with playlists and search, next step: audio playback integration.</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
         <Image src={muse} alt="Muse-Player"/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://musestreamio.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           <Link href="https://github.com/Marcel-dev2009"> <FaGithub/></Link>
          </CardItem>
        </div>
          </CardBody>
        </CardContainer> {/* First end */}
        <CardContainer>
          <CardBody className="bg=gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          A powerful showcase of Nigeria&apos;s food with Jevink Restaurant
          </CardItem>
            <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <span className="border bg-green-500 text-black px-6 rounded-lg">Status</span> : <span>Modern UI Site showcasing Nigeria&apos;s finest Meal with Jevinik Restaurant</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
         <Image src={simple} alt="Muse-Player"/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://jevinikly.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           <Link href="https://github.com/Marcel-dev2009"> <FaGithub/></Link>
          </CardItem>
        </div>
          </CardBody>
        </CardContainer> {/* second end */}
        <CardContainer>
          <CardBody className="bg=gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Providing Seamless Student Management 
          </CardItem>
            <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <span className="border bg-green-500 text-black px-6 rounded-lg">Status</span> : <span>Authentication-ready platform for managing students, classes, and records.</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
         <Image src={sms} alt="Command day Secondary School"/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           <Link href="https://github.com/Marcel-dev2009"> <FaGithub/></Link>
          </CardItem>
        </div>
          </CardBody>
        </CardContainer> {/* second end */}
        <CardContainer>
          <CardBody className="bg=gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Tapping into the 3D model with Apple.inc
          </CardItem>
            <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            <span className="border bg-green-500 text-black px-6 rounded-lg">Status</span> : <span>A clone of Apple&apos;s iphone 15 pro landing page</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
         <Image src={apple} alt="Muse-Player"/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://appleinx.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
      <Link href="https://github.com/Marcel-dev2009"> <FaGithub/></Link>
          </CardItem>
        </div>
          </CardBody>
        </CardContainer> {/* second end */}
        <CardContainer>
          <CardBody className="bg=gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         MERN stack Powered E-commerce app 
          </CardItem>
            <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            <span className="border bg-green-500 text-black px-6 rounded-lg">Status</span> : <span>Responsive online store concept with product listings and smooth shopping flow.</span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
         <Image src={nova} alt="Muse-Player"/>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://novashop-xhi.vercel.app/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
       <Link href="https://github.com/Marcel-dev2009"> <FaGithub/></Link>
          </CardItem>
        </div>
          </CardBody>
        </CardContainer> {/* second end */}
       </div>
      </div>
     </section>
  )
}
export default Project