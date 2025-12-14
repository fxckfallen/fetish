import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-grow flex items-center mt-4 md:mt-0 md:justify-center flex-col md:flex-row h-full">
      <div className="flex flex-col text-left md:w-[500px] pb-5 mb-5 border-b md:border-b-0 px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6">
          Forgot your password?
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
          Please enter your email address below to receive a password reset link.
        </div>
        <CustomInput type="text" className="mb-3" placeholder="Email"/>
        <Button className="w-[150px] p-7 tracking-widest h-12 self-end">Reset Password</Button>
      </div>
    </main>
  )
}
