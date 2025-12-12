
interface Props {
    children: React.ReactNode
}

export const Select: React.FC<Props> = ({
    children
}) => {
    return (
        <select className="my-[0.4285714286em] text-sm px-[0.785714em] leading-[18.2px] py-[0.928571em] w-full focus:border-black transition-colors duration-200 focus:outline-none border rounded bg-white">
            {children}
        </select>
    )
};