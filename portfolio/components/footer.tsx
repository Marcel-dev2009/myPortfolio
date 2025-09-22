"use client"
import index from "../public/index.png"
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { PiFigmaLogoFill,  PiTelegramLogoFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
   <section id="connect">
     <div>
        <h1 className="text-center text-xl font-semibold">So....</h1> <br />
        
        <div className="grid place-content-center">
           <Image src={index} alt="hands" width={150} height={150}/>
          </div>
          <h3 className="text-center text-xl font-semibold">What are you waiting For...</h3>
          <h3 className="mx-10 text-sm md:text-xl font-semibold mt-6">Connect with me to get ur technical problems solved </h3>   <br />
          <div className="flex gap-4 mx-6 justify-between flex-col md:flex-row">
          <div className="flex gap-4 justify-center items-center">
            <BsGithub size={30}/>
          <PiFigmaLogoFill size={30} color="green"/>
          <FaWhatsapp size={30} color="green"/>
          <FaLinkedin size={30} color="blue"/>
          <SiLeetcode size={30} color="orange"/>
          <PiTelegramLogoFill size={30} color="cyan"/>
          </div>
          <div className="text-center">
             @2025 Marcel Somtochukwu
          </div>
          </div>
    </div>     
   </section>
  )
}
export default Footer