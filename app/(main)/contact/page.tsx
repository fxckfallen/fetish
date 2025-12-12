import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center flex-col">
      <div className="text-left w-[300px] sm:w-[500px]">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6">
          Contact us
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
        Усі запити:<br/>
        i.am.your.fetish1@gmail.com<br/><br/>

        Напишіть нам, і ми відповімо вам якомога швидше.                   
        </div>
        
        <CustomInput type="text" className="mb-3" placeholder="Name"/>
        <CustomInput type="text" className="mb-3" placeholder="Email"/>
        <CustomInput type="text" className="mb-3" placeholder="Phone number"/>
        <Textarea className="mb-3 focus:border-black rounded transition-colors duration-200 placeholder:text-sm placeholder:text-black placeholder:tracking-widest" placeholder="Message"/>
        <Button className="w-full tracking-widest">Send</Button>
      </div>
    </main>
  )
}
