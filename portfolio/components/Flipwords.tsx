import { FlipWords } from "./flip-words";
function Flipwords() {
  const words = ["scalable" , "Beautiful" , "Modern" , "Websites" ,"And" ,  "Apps"]
  return (
     <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build 
        <FlipWords words={words} /> <br />
         With ghjklf
      </div>
    </div>
  )
}
export default Flipwords