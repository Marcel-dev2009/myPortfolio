"use client"
interface Props {
  className? : string;        
}
import { useTheme } from "next-themes"
import { Sun , Moon } from "lucide-react";
import { Button } from "./button";
function Theme({className} : Props) {
   const {theme , setTheme} = useTheme();       
  return (
   <Button variant="outline" size="icon" className={className} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
   <Sun className=" absolute w-10 h-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"/>
   <Moon className=" absolute w-10 h-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 "/>
   </Button>
  )
}
export default Theme