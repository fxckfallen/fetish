'use client'

import { Section } from "@/components/shared/section";
import { CheckoutEditBox } from "@/components/shared/checkout-edit-box";
import { CheckoutEditBoxItem } from "@/components/shared/checkout-edit-box-item";
import { CheckoutRadioBox } from "@/components/shared/checkout-radio-box";
import { CheckoutRadioBoxItem } from "@/components/shared/checkout-radio-box-item";
import { CustomInput } from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

import { NovaPostSearch } from "@/components/shared/novapost-search";
import { useUser } from "@/hooks/useUser";
export default function Home() {
    const [value, setValue] = useState('novapost');

    const { user } = useUser()

    return (
        <div className="w-full pt-[2em]">
            <CheckoutEditBox>
                <CheckoutEditBoxItem title="Contact" url="/delivery" value="fxckfallen@icloud.com" />
                <CheckoutEditBoxItem title="Ship to" url="/delivery" value="Kiyv, Ukraine" />
            </CheckoutEditBox>
            <Section title="Contact">
                <CheckoutRadioBox defaultValue="novapost" onValueChange={setValue}>
                    {user.country === 'Ukraine' ?
                        <CheckoutRadioBoxItem title="Nova Poshta (Express)" value="novapost" price={10} />
                        :
                        <>
                            <CheckoutRadioBoxItem title="Nova Poshta (Express)" value="novapost" price={50} />
                            <CheckoutRadioBoxItem title="Ukr Poshta (Standard)" value="ukrpost" price={10} />
                        </>
                    }

                </CheckoutRadioBox>
            </Section>
                {value === 'novapost' ?
                    <Section title="Additional Information">
                        {user.country === 'Ukraine' ?
                            <NovaPostSearch city={user.city} />
                         :
                        <div className="flex w-full">
                            <CustomInput type="text" className="placeholder:tracking-normal " placeholder="Enter № and address of NovaPost department"/>
                            <Button className="p-[1.7em] ml-[0.8571428571em] tracking-normal">Save</Button>
                        </div>
                    }

                    </Section>
                    : null
                }
            <div className="flex justify-between items-center w-full mt-[1.5em]">
                <Link href={'/delivery'}>Return to Information</Link>
                <Button className="w-[150px] px-[1.7em] py-[1.4em] tracking-normal h-12">Continue to Payment</Button>
            </div>
        </div>
    )
}


