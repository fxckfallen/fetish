'use client';
import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const SearchBar = () => {
    const [focused, setFocused] = useState(false);
    const [hasText, setHasText] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const path = usePathname();
    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        setFocused(false);
        setHasText(!!inputRef.current?.value);
    };

    return (
        <div className="relative w-full max-w-sm">
            {/* Icon */}
            <Search className={cn("absolute left-2 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none transition-colors duration-300", path === '/' ? '' : 'text-black')} />

            {/* Input field */}
            <input
                ref={inputRef}
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={() => setHasText(!!inputRef.current?.value)}
                className={`
                    ${path === '/' ? 'text-white' : 'text-black'}
                    w-full pl-9 pr-2 pt-3 pb-1 text-base  bg-transparent border-none outline-none
                    placeholder-transparent 
                `}
                placeholder="Search"
            />

            {/* Label that fades out on input */}
            <label
                className={`
                    absolute left-9  -translate-y-1/2 text-gray-400 pointer-events-none
                    transition-all duration-300
                    ${focused ? 'text-sm top-1 translate-y-0' : 'text-base top-1/2'}
                    ${hasText ? 'opacity-0' : 'opacity-100'}
                `}
            >
                Search
            </label>

            {/* Underline animation */}
            <span
                className={`
                    ${path === '/' ? 'bg-white' : 'bg-black'}
                    absolute left-0 bottom-0 h-[2px] w-full 
                    transform origin-left scale-x-0 transition-transform duration-300
                    ${focused ? 'scale-x-100' : ''}
                    
                `}
            />
        </div>
    );
};
