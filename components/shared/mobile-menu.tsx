
import { cn } from "@/lib/utils";
import { Search, User as UserIcon } from "lucide-react";
import { MobileMenuItem } from "./mobile-menu-item";

interface Props {
    opened: boolean
}

export const MobileMenu: React.FC<Props> = ({
    opened
}) => {
    return(
        <div className={cn("fixed w-full items-center  bg-white transition-all duration-300 border-b", opened ? 'top-[calc(70px+2rem)] opacity-100 z-[48]' : 'top-0 opacity-0 z-[-1]')}>
            <MobileMenuItem type="dropdown" title="SHOP">
                <MobileMenuItem type="link" url="/shop" isChild>NEW ARRIVALS</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>ALL</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>TOPS</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>BOTTOM</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>DRESSES</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>SWIM</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>ACCESSORIES</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>SETS</MobileMenuItem>
                <MobileMenuItem type="link" url="/shop" isChild>BODYSUITS</MobileMenuItem>
            </MobileMenuItem>
            <MobileMenuItem type="link" url="/shop">SALES</MobileMenuItem>
            <MobileMenuItem type="link" url="/archive">ARCHIVE</MobileMenuItem>
            <MobileMenuItem type="link" url="/contact">CONTACT</MobileMenuItem>
            <MobileMenuItem type="link" url="/cc">CUSTOMER CARE</MobileMenuItem>
            <div className="flex items-center justify-center mt-[20px] gap-[30px]">
                <svg className="w-[14px] h-[16px] mt-[20px]" viewBox="0 0 9 17">
                  <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                </svg>
                <svg className="w-[14px] h-[16px] mt-[20px]" role="presentation" viewBox="0 0 32 32">
                  <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                </svg>
                <svg className="w-[14px] h-[16px] mt-[20px]" role="presentation" viewBox="0 0 33 32">
                  <path d="M0 25.693q0 1.997 1.318 3.395t3.209 1.398h24.259q1.891 0 3.209-1.398t1.318-3.395V6.387q0-1.997-1.331-3.435t-3.195-1.438H4.528q-1.864 0-3.195 1.438T.002 6.387v19.306zm12.116-3.488V9.876q0-.186.107-.293.08-.027.133-.027l.133.027 11.61 6.178q.107.107.107.266 0 .107-.107.213l-11.61 6.178q-.053.053-.107.053-.107 0-.16-.053-.107-.107-.107-.213z"></path>
                </svg>
                <svg className="w-[14px] h-[16px] mt-[20px]" role="presentation" viewBox="0 0 13 16">
                  <path d="M12.998 6.146A4.055 4.055 0 019.23 4.331v6.245a4.616 4.616 0 11-4.615-4.615c.096 0 .19.008.285.014V8.25c-.095-.012-.188-.029-.285-.029a2.356 2.356 0 000 4.711c1.3 0 2.45-1.025 2.45-2.326L7.089 0h2.176A4.053 4.053 0 0013 3.618v2.528" fill="currentColor"></path>
                </svg>
            </div>
            <p className=" w-full my-[20px] text-[13px] font-semibold text-center tracking-widest">Follow Us</p>
        </div>
    ) 
    
};