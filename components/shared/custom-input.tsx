import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    placeholder?: string;
    type?: string;
    ref?: React.Ref<HTMLInputElement>;
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInput: React.FC<Props> = ({
    className,
    placeholder,
    type,
    ref,
    onInput
}) => {
    return (
        <input ref={ref} onInput={onInput} type={type} size={30} className={cn("text-sm px-[0.785714em] leading-[18.2px] py-[0.928571em] w-full focus:border-black transition-colors duration-200 focus:outline-none border rounded placeholder:text-sm placeholder:text-[#333333] placeholder:tracking-widest placeholder:opacity-50", className)}  placeholder={placeholder}/>
        
    )
};