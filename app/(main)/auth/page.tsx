import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow flex items-center mt-4 md:mt-0 md:justify-center flex-col md:flex-row h-full">
      <div className="text-left md:w-[500px] pb-5 mb-5 border-b md:border-b-0 md:border-r px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6">
          Registered customers
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
        If you have an account, sign in with your email address.<br/>                 
        </div>
        <CustomInput type="text" className="mb-3" placeholder="Email"/>
        <CustomInput type="text" className="mb-3" placeholder="Password"/>
        <div className="flex justify-between items-center">
          <Link href={'/forgot'}>Forgot your password?</Link>
          <Button className="w-[150px] p-7 tracking-widest h-12">Sign in</Button>
          
        </div>
        <br/>
        <Link href={'/google-login'}><Button className="w-full p-7 tracking-widest h-12 flex items-center"><img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png" className="w-8"/> Sign in with Google</Button></Link>
      </div>
      
      <div className="text-left md:w-[400px] px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6 ">
          New Customers
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
        Creating an account has many benefits: check out faster, keep more than one address, track orders and more.<br/><br/>                 
        </div>
        
        <Link href={'/register'}><Button className="w-full p-7 tracking-widest h-12">Create an account</Button></Link>
      </div>
    </main> 
  )
}
