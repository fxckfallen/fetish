'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";

 const countries = [
  { code: "af", dialCode: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "al", dialCode: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "dz", dialCode: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "as", dialCode: "+1684", flag: "🇦🇸", name: "American Samoa" },
  { code: "ad", dialCode: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "ao", dialCode: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "ai", dialCode: "+1264", flag: "🇦🇮", name: "Anguilla" },
  { code: "aq", dialCode: "+672", flag: "🇦🇶", name: "Antarctica" },
  { code: "ag", dialCode: "+1268", flag: "🇦🇬", name: "Antigua and Barbuda" },
  { code: "ar", dialCode: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "am", dialCode: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "aw", dialCode: "+297", flag: "🇦🇼", name: "Aruba" },
  { code: "au", dialCode: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "at", dialCode: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "az", dialCode: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "bh", dialCode: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "bd", dialCode: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "by", dialCode: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "be", dialCode: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "bz", dialCode: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "bj", dialCode: "+229", flag: "🇧🇯", name: "Benin" },
  { code: "bm", dialCode: "+1441", flag: "🇧🇲", name: "Bermuda" },
  { code: "bt", dialCode: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "bo", dialCode: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "ba", dialCode: "+387", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { code: "bw", dialCode: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "br", dialCode: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "bn", dialCode: "+673", flag: "🇧🇳", name: "Brunei Darussalam" },
  { code: "bg", dialCode: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "kh", dialCode: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "cm", dialCode: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "ca", dialCode: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "td", dialCode: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "cl", dialCode: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "cn", dialCode: "+86", flag: "🇨🇳", name: "China" },
  { code: "co", dialCode: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "cr", dialCode: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "hr", dialCode: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "cy", dialCode: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "cz", dialCode: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "dk", dialCode: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "eg", dialCode: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "ee", dialCode: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "fi", dialCode: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "fr", dialCode: "+33", flag: "🇫🇷", name: "France" },
  { code: "ge", dialCode: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "de", dialCode: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "gr", dialCode: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "hk", dialCode: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "hu", dialCode: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "is", dialCode: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "in", dialCode: "+91", flag: "🇮🇳", name: "India" },
  { code: "id", dialCode: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "ir", dialCode: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "iq", dialCode: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "ie", dialCode: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "il", dialCode: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "it", dialCode: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "jp", dialCode: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "kz", dialCode: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "kr", dialCode: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "kg", dialCode: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "lv", dialCode: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "lt", dialCode: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "lu", dialCode: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "md", dialCode: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "mc", dialCode: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "mn", dialCode: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "ma", dialCode: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "nl", dialCode: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "nz", dialCode: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "ng", dialCode: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "no", dialCode: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "pk", dialCode: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "pl", dialCode: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "pt", dialCode: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "ro", dialCode: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "ru", dialCode: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "sa", dialCode: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "rs", dialCode: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "sg", dialCode: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "sk", dialCode: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "si", dialCode: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "za", dialCode: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "es", dialCode: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "se", dialCode: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "ch", dialCode: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "th", dialCode: "+66", flag: "🇹🇭", name: "Thailand" },
  { code: "tr", dialCode: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "ua", dialCode: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "gb", dialCode: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "us", dialCode: "+1", flag: "🇺🇸", name: "United States" },
  { code: "uz", dialCode: "+998", flag: "🇺🇿", name: "Uzbekistan" },
  { code: "ve", dialCode: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "vn", dialCode: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "ye", dialCode: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "zm", dialCode: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "zw", dialCode: "+263", flag: "🇿🇼", name: "Zimbabwe" }
];

export const CustomPhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "flex items-center w-full overflow-hidden rounded border transition-colors duration-200",
          isFocused ? "border-black" : "border-gray-300"
        )}
      >
        <div className="relative">
          {/* Кастомный текст: Флаг + Код */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-sm z-10 whitespace-nowrap">
            {selectedCountry.flag} {selectedCountry.dialCode}
          </div>

          {/* Прозрачный select — всегда text-transparent */}
          <select
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                countries.find((c) => c.code === e.target.value) || countries[0]
              )
            }
            className="pl-[3.5em] pr-2 py-[0.928571em] bg-white border-r outline-none text-transparent appearance-none max-w-[75px]"
          >
            {countries.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="text-black"
              >
                {country.flag} {country.name} {country.dialCode}
              </option>
            ))}
          </select>
        </div>

        <input
          type="tel"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "flex-1 text-sm px-[0.785714em] leading-[18.2px] py-[0.928571em] focus:outline-none placeholder:text-sm placeholder:text-[#333333] placeholder:opacity-50"
          )}
          placeholder="50 123 4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};