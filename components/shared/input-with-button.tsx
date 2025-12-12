'use client'


import { cn } from "@/lib/utils";
import { CustomInput } from "@/components/shared/custom-input";
import { useState } from "react"

interface Props {
    className?: string;
    placeholder?: string;
    type?: string;
    buttonText?: string;
    required?: boolean;
    onClick?: (value: string) => void
}

export const InputWithButton: React.FC<Props> = ({
    className,
    placeholder,
    type,
    buttonText,
    required,
    onClick
}) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        if (onClick) {
            onClick(value); // Передаем значение в callback-функцию
        }
    };

    return (
        <div className="flex w-full gap-3">
            <CustomInput className="placeholder:tracking-normal" type={type} placeholder={placeholder} onInput={(e) => setValue(e.target.value)} />
            <button className="px-[1.7em] py-[0.928571em] rounded bg-black text-white text-sm leading-[18.2px] disabled:cursor-not-allowed disabled:bg-[#cccccc] transition-all duration-300" onClick={handleClick} disabled={!value}>{buttonText}</button>
        </div>
    )
};