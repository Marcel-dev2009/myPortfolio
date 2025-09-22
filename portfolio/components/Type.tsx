"use client"
import TypewriterComponent from "typewriter-effect"
export default function Type() {
  return (
    <TypewriterComponent
    options={{
     strings : [
      "Timeline of my Technology Career from 2023 -- Present "
     ] ,
     delay: 100,
     autoStart : true,
     loop : false,
     deleteSpeed : 50    
    }}
    >

    </TypewriterComponent>
  )
}