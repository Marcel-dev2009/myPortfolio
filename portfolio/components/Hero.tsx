"use client"
import { 
 Navbar,
 NavBody,
 NavItems,
 MobileNav,
 NavbarLogo,
 NavbarButton,
 MobileNavHeader,
 MobileNavToggle,
 MobileNavMenu
 } from "./ui/resizable-navbar";
 import { useState } from "react";


function Hero() {
 const navItems = [
   {
      name : "Home",
      link : "#"     
   },
   {
     name : "About Me",
     link : "#about"     
   },
   {
     name : "Projects",
     link : "#projects"     
   },
   {
     name : "Connnect",
     link : "#connect"     
   }
 ];     
   const [isMobileOpen , setMobileOpen] = useState(false);
  return (
      <>
    <div className="w-full sticky z-50">
     <Navbar className="border-b  py-4 dark:border-b-white/5 rounded-b-lg border-r rounded-r-lg border-b-black/20">
     <NavBody>
       <NavbarLogo/>
       <NavItems items={navItems}/>
       <div className="flex items-center gap-4">
         <NavbarButton variant="secondary" href="/auth">Login</NavbarButton>{/*  You can add ur link */}
         <NavbarButton variant="primary">Book a call</NavbarButton>
       </div>
     </NavBody>  
  {/*    Mobile Navigation */}
      <MobileNav>
          <MobileNavHeader>
          <NavbarLogo/>
          <MobileNavToggle isOpen={isMobileOpen} onClick={() => setMobileOpen(!isMobileOpen)}/>   
          </MobileNavHeader>
          <MobileNavMenu
          isOpen={isMobileOpen}
          onClose={() => setMobileOpen(false)}
          >
           {navItems.map((item , idx) => (
             <a key={`mobile-link-${idx}`}
             href={item.link}
             onClick={() => setMobileOpen(false)}
             className="relative text-neutral-600 dark:text-300"
             >
              <span className="block">{item.name}</span>      
             </a>       
           ))}
           <div className="flex w-full flex-col gap-4">
          <NavbarButton
          onClick={() => setMobileOpen(false)}
          variant="primary"
          className="w-full"
          href="tel:+2349122040914"
          >
            Book a call        
          </NavbarButton>
          
           </div>
          </MobileNavMenu>
      </MobileNav>
     </Navbar>
    </div>
    </>
  )
}
export default Hero

