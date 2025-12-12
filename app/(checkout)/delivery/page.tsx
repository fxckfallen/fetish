import { Section } from "@/components/shared/section";
import { CustomInput } from "@/components/shared/custom-input";
import { SectionBlock } from "@/components/shared/section-block";
import CountrySelect from "@/components/shared/country-select";
import { CustomPhoneInput } from "@/components/shared/phone-input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Section title="Contact">
        <CustomInput type="text" className="placeholder:tracking-normal " placeholder="Email" />
      </Section>
      <Section title="Shipping address">
        <CountrySelect />
        <SectionBlock>
          <CustomInput type="text" className="placeholder:tracking-normal " placeholder="First name" />
          <CustomInput type="text" className="placeholder:tracking-normal " placeholder="Last name" />
        </SectionBlock>
        <SectionBlock>
          <CustomInput type="text" className="placeholder:tracking-normal w-[32.33333%]" placeholder="City" />
          <CustomInput type="text" className="placeholder:tracking-normal w-[66.66666%]" placeholder="Street address" />
        </SectionBlock>
        <SectionBlock>
          <CustomInput type="text" className="placeholder:tracking-normal w-[33.33333%]" placeholder="House number" />
          <CustomInput type="text" className="placeholder:tracking-normal w-[33.33333%]" placeholder="Apartment number" />
          <CustomInput type="text" className="placeholder:tracking-normal w-[33.33333%]" placeholder="Zip/Postal code" />
        </SectionBlock>
        <SectionBlock>
          <CustomPhoneInput />
        </SectionBlock>
        <SectionBlock>
          <div className="flex justify-between items-center w-full">
          <Link href={'/shop'}>Return to Shop</Link>
          <Button className="w-[150px] p-7 tracking h-12">Proceed to Shipping</Button>
          
        </div>
        </SectionBlock>
      </Section>
    </div>
  )
}
