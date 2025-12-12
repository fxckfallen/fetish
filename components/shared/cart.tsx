import { X } from "lucide-react";
import { CheckoutOffer } from "./checkout-offer";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    onClick?: () => void;
    opened?: boolean
}

export const Cart: React.FC<Props> = ({
    onClick,
    opened
}) => {
    return (
        <div className={cn("fixed h-full w-[80%] md:w-[80%] lg:w-[40%] xl:w-[25%] bg-white border-l right-0 top-0 z-50 transition-all duration-300", opened ? '' : 'xl:right-[-25%] lg:right-[-40%] md:right-[-80%] right-[-80%]')}>
            <header className="flex justify-between items-center m-4">
                My Cart
                <X className="cursor-pointer" onClick={onClick}/>
            </header>
            <div className="flex flex-col gap-[1em] mx-4">
                <CheckoutOffer image="https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg"/>
                <CheckoutOffer image="https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg"/>
                <CheckoutOffer image="https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg"/>
                
            </div>
            <footer
                className="h-[180px] absolute bottom-0 w-full text-black transition-all duration-500 text-sm flex flex-col"
                style={{ transform: opened ? 'translateY(0)' : 'translateY(100%)' }}
                >
                <div className="flex justify-between items-center mx-4 my-2">
                    <p>Subtotal</p>
                    <p>$40</p>
                </div>
                <div className="flex justify-between items-center mx-4 my-2">
                    <p>Shipping</p>
                    <p>Estimated at checkout</p>
                </div>
                <div className="flex justify-between items-center mx-4 my-2">
                    <div className="flex flex-col leading-4 items-start">
                    <h2>Total</h2>
                    <h4>Including taxes</h4>
                    </div>
                    <span className="flex items-center justify-between">
                    USD <span className="text-3xl ml-2">40</span>
                    </span>
                </div>

                {/* Чёрный блок занимает оставшуюся высоту */}
                <Link
                    href="/delivery"
                    className="mx-4 text-white bg-black flex justify-center items-center flex-grow mb-2 rounded-lg z-50"
                    >
                    Proceed To Checkout
                </Link>
            </footer>

        </div>
    )
};