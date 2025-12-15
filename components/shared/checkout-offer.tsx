interface Props {
    className?: string;
    id?: number;
    title?: string;
    price?: number;
    image: string;
    size?: string;
    qty?: number;
}

export const CheckoutOffer: React.FC<Props> = ({
    className,
    id,
    title,
    price,
    image,
    size,
    qty,
}) => {
    return (
        <div className="flex w-full items-center">
            <div className=" aspect-square h-[64.4px] rounded border flex items-center justify-center">
                <img className="h-full" src={image} alt="offer" />
            </div>
            <div className="pl-[1em] w-full flex flex-col justify-center">
                <span className="text-[#333] font-medium">{title}</span>
                <span className="text-[#737373] text-[0.8571428571em]">{size}</span>
            </div>
            <div className=" pl-[1em] w-[100px] flex items-center">
                <span>- {qty} +</span>
            </div>
            <div className="pl-[1em]">
                <span>${price}</span>
            </div>
        </div>
    )
};
