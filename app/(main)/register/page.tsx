import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow flex items-center justify-center flex-col md:flex-row">
      <div className="flex flex-col md:flex-row">
      <div className="text-left md:w-[500px] pb-5 mb-5 border-b md:border-b-0 md:border-r px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6">
          Personal Information
        </h2>
        <CustomInput type="text" className="mb-3" placeholder="First Name"/>
        <CustomInput type="text" className="mb-3" placeholder="Last Name"/>
        <div className="flex items-center gap-3">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Sign Up for Newsletter</Label>
        </div>
       </div>
      
      <div className="text-left md:w-[400px] px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6 ">
          Sign-in Information
        </h2>
        <CustomInput type="text" className="mb-3" placeholder="Email"/>
        <CustomInput type="text" className="mb-3" placeholder="Password"/>
        <CustomInput type="text" className="mb-3" placeholder="Confirm Password"/>
        <div className="flex items-center gap-3">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember Me</Label>
        </div>
        <br/>
        <Button className="w-full p-7 tracking-widest h-12">Create an account</Button>
      </div>
      </div>
    </main> 
  )
}
