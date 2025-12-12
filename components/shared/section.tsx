
interface Props {
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<Props> = ({
    title,
    children
}) => {
    return (
       <div className="w-full pt-[2em] ">
        <h2 className="text-[1.2857142857em] leading-[1em]  text-[#333] mb-[1.5em]">{title}</h2>
            {children}
       </div>
    )
};