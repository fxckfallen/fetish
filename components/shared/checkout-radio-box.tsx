import { RadioGroup } from "@/components/ui/radio-group"

interface Props {
    children: React.ReactNode;
    defaultValue: string;
    onValueChange?: (value: string) => void
}

export const CheckoutRadioBox: React.FC<Props> = ({
    children,
    defaultValue,
    onValueChange
}) => {
    return (
       <RadioGroup defaultValue={defaultValue} onValueChange={onValueChange}>
                <div className="w-full flex flex-col rounded-[5px] border ">
                    {children}
                </div>
        </RadioGroup>
    )
};