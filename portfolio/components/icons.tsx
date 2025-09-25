"use client";
import { BsGithub } from "react-icons/bs";
import { PiFigmaLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogoThin } from "react-icons/pi";
import Link from "next/link"
function Icons() {
  return (
    <>
    <div className="md:block absolute right-0 top-40 hidden border p-6 rounded-md ">
     <div className="flex gap-10 flex-col">
          <Link href="https://github.com/Marcel-dev2009" target="_blank">
<BsGithub size={30} className="hover:scale-50 duration-200 transition-all"/>
          </Link>
          <Link href="https://www.figma.com/" target="_blank">
<PiFigmaLogoLight size={30} fill="pink" className="hover:scale-50 duration-200 transition-all"/>
          </Link>
          <Link href="https://wa.me/+2349122040914" target="_blank">
<FaWhatsapp size={30} fill="green" className="hover:scale-50 duration-200 transition-all"/>
          </Link>
          <Link href="https://www.linkedin.com/in/Izuoba-Somtochukwu/
" target="_blank">
<FaLinkedin size={30} fill="blue" className="hover:scale-50 duration-200 transition-all"/>
          </Link>
          <Link href="https://leetcode.com/u/Marcel29/" target="_blank">
    <SiLeetcode size={30} fill="orange" className="hover:scale-50 duration-200 transition-all"/>
          </Link>
      <Link href="https://t.me/marcench
" target="_blank">
      <PiTelegramLogoThin size={30} fill="cyan" className="hover:scale-50 duration-200 transition-all"/>
      </Link>
     </div>
    </div>
    </>
  )
}
export default Icons