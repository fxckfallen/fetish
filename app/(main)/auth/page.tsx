'use client'

import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { authUser, getUser } from "@/lib/dummy_api";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
  const { setUser } = useUser();
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      toast("Please fill in all fields");
      return;
    }

    const res = authUser(email, password);

    if (res.status === 200 && res.token) {
      const currentUser = getUser(res.token);
      setUser(currentUser);
      toast("Signed in successfully!");
      router.push("/my"); // редирект на /my
    } else {
      toast("Invalid email or password");
    }
  };

  return (
    <main className="flex-grow flex items-center mt-4 md:mt-0 md:justify-center flex-col md:flex-row h-full">
      <div className="text-left md:w-[500px] pb-5 mb-5 border-b md:border-b-0 md:border-r px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6">
          Registered customers
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
          If you have an account, sign in with your email address.<br/>
        </div>
        <CustomInput ref={emailRef} type="text" className="mb-3" placeholder="Email"/>
        <CustomInput ref={passwordRef} type="password" className="mb-3" placeholder="Password"/>
        <div className="flex justify-between items-center">
          <Link href={'/forgot'}>Forgot your password?</Link>
          <Button onClick={auth} className="w-[150px] tracking-widest h-12">Sign in</Button>
        </div>
        <br/>
        <Link href={'/google-login'}>
          <Button className="w-full tracking-widest h-12 flex items-center justify-center gap-2">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo-500x281.png" className="w-8"/>
            Sign in with Google
          </Button>
        </Link>
      </div>

      <div className="text-left md:w-[400px] px-6">
        <h2 className="text-[1.2857142857em] leading-[1em] tracking-widest text-[#333] mb-6 ">
          New Customers
        </h2>
        <div className="text-sm leading-6 tracking-widest text-[#545454]">
          Creating an account has many benefits: check out faster, keep more than one address, track orders and more.<br/><br/>
        </div>

        <Link href={'/register'}>
          <Button className="w-full tracking-widest h-12">Create an account</Button>
        </Link>
      </div>
    </main>
  )
}
