import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"

interface Props {
    title: string;
    value: string;
    price: number;
}


export const CheckoutRadioBoxItem: React.FC<Props> = ({
    title,
    value,
    price
}) => {
    return (
        <div className="flex items-center justify-between  p-[1.1428571429em] border-t first:border-t-0">
            <div className="flex items-center gap-[0.75em]">
                <RadioGroupItem value={value} id={value} />
                <Label htmlFor={value} className="text-[#545454] cursor-pointer">{title}</Label>
            </div>
            <span className="text-[#333333] font-medium">${price}</span>
        </div>         
    )
};