
import { usePathname } from "next/navigation";

interface Props {
    url: string;
    children: React.ReactNode
}

export const NavLink: React.FC<Props> = ({
    url,
    children
}) => {
    
    return (
        <li className="mx-3 my-1 whitespace-nowrap">
  <a
    href={url}
    className={`
      relative inline-block 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
      after:scale-x-0 after:origin-center after:bg-current
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    `}
  >
    {children}
  </a>
</li>

    )
};