import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full mt-10 flex justify-center">
      <div className="max-w-[73.5714285714em] w-full flex flex-col items-center gap-3">
        <Image src="/logo.png" alt="logo" width={75.65*1.5} height={70*1.5}/>

        <h1 className="self-start text-xl">Return</h1>

        <CustomInput type="text" placeholder="Email" className=""/>
        <CustomInput type="text" placeholder="Date Received" className=""/>
        <CustomInput type="text" placeholder="Full Name" className=""/>
        <CustomInput type="text" placeholder="Order Number (if order was placed on our official website)" className=""/>
        <CustomInput type="text" placeholder="Tracking Number (if order was placed through Direct)" className=""/>
        <CustomInput type="text" placeholder="Product Name" className=""/>
        <CustomInput type="text" placeholder="Size" className=""/>
        <CustomInput type="text" placeholder="Color" className=""/>
        <CustomInput type="text" placeholder="Return Reason" className=""/>
        <CustomInput type="text" placeholder="Payment Method (card number used for payment)" className=""/>
        <h2 className="self-start text-sm text-[#545454]">
          Make sure the product is in its original condition, the tag and seal on the tag should not be damaged.<br/>
          Otherwise, we will not be able to accept the product and refund the money.<br/>
          Traces of wear, unpleasant odor, and other defects are considered damage to the product's appearance.<br/><br/>

          Funds will be refunded within 5 BUSINESS days from the date of receipt of the return.
        </h2>
        <div className="flex justify-between items-center w-full">
          <Link href={'/shop'}>Return to Shop</Link>
          <Button className="w-[150px] p-7 tracking h-12">Send</Button>
        </div>

      </div>
    </main>
  )
}
