"use client"

import Image from "next/image";
import { InputWithButton } from "./input-with-button";
import { on } from "events";
import { Separator } from "../ui/separator";
import { CheckoutOffer } from "./checkout-offer";
import ProductCarousel from "./product-carousel";

interface Props {
    
}

export const CheckoutTotalSide: React.FC<Props> = ({
    
}) => {
    
    

    return (
        <div className="w-full md:w-[38%] md:border-l pt-[4em] md:pl-[4%] flex flex-col gap-[1.5em]">
            <CheckoutOffer image="https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg"/>
            <Separator />
            <InputWithButton className="" placeholder="Promo code" type="text" buttonText="Apply" required={false}/>
            <Separator />
            <div className="text-[#545454]">
                <div className="flex justify-between items-center my-2">
                        <p>Subtotal</p>
                        <p>$40</p>
                    </div>
                    <div className="flex justify-between items-center  my-2">
                        <p>Shipping</p>
                        <p>Estimated at Next step</p>
                    </div>
            </div>
            <Separator />
             <div className="flex justify-between items-center my-2 text-[#545454] ">
                    <div className="flex flex-col leading-4 items-start">
                    <span className="text-[#333333] text-[1.1428571429em]">Total</span>
                    <span className="text-[#737373] text-[0.8571428571em]">Including taxes</span>
                    </div>
                    <span className="flex items-center justify-between text-[#737373] text-[0.8571428571em]">
                    USD <span className=" ml-2 text-[#333333] text-[1.7142857143em] leading-[1em] tracking-[-0.04em]">40</span>
                    </span>
                </div>
            <ProductCarousel className="w-full"/>
        </div>
    )
};