import Link from "next/link";
interface Props {
    title: string;
    url: string;
    value: string;
}

export const CheckoutEditBoxItem: React.FC<Props> = ({
    title,  
    url,
    value
}) => {
    return (
            <div className="w-full flex justify-between mt-[0.8571428571em] pt-[0.8571428571em] border-t border-t-[#e6e6e6] first:border-t-0 first:mt-0 first:pt-0">
                <div className="flex flex-1">
                    <div className="flex-grow-0 flex-shrink-[1] basis-[5em] pr-[1.1428571429em] text-[#737373] text-[14px]">{title}</div>
                    <div className="flex-[5] text-[#333333] pr-[1.1428571429em]">
                        <bdo dir="ltr" className="text-[#333333] text-[14px]">
                            {value}
                        </bdo>
                    </div>
                </div>
                <div className="text-[0.8571428571em] max-w-[10em]">
                    <Link href={url} className="text-[#000]">
                        <span>Change</span>
                    </Link>
                </div>
            </div>
        
    )
};