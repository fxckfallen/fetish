'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { CustomInput } from "./custom-input";
import { Select } from "./custom-select";
import { SelectOption } from "./select-option";
import { API_URL } from "@/lib/constants";
import logo from '@/public/logo.png'

interface Props {
    city: string;
}

interface Result {
    title: string;
    value: string;
}

export const NovaPostSearch: React.FC<Props> = ({ city }) => {
    const [results, setResults] = useState<Result[]>([]);
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const search = async () => {
        try {
            setSearchActive(true);
            const res = await fetch(API_URL + 'novaposhta', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    city: city,
                    searchValue: searchValue
                 })
            });

            const data = await res.json();
            setResults(data);
            setSearchActive(false);
        } catch (error) {
            alert('Ошибка при получении данных');
            console.error(error);
        }
    };

    return (
        <div>
            <div className="flex w-full">
                <CustomInput type="text" className="placeholder:tracking-normal" placeholder="Department/postamat code" onInput={(e) => setSearchValue(e.target.value)}/>
                <Button className="p-[1.7em] ml-[0.8571428571em] tracking-normal" onClick={search}>
                    Find
                </Button>
            </div>
            
            {searchActive && 
                <div className="flex w-full justify-center my-[1.5em]">
                    <img src={logo.src} className="animate-flicker size-16"/>
                </div>
            }
            
            {results.length > 0 && 
                <Select>
                    {results.map((result, index) => (
                        <SelectOption key={index} title={result.title} value={result.value} />
                    ))}
                </Select>
            }
        </div>
    );
};
