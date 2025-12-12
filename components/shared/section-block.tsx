
interface Props {
    children: React.ReactNode;
}

export const SectionBlock: React.FC<Props> = ({
    children
}) => {
    return (
       <div className="w-full flex gap-3 py-[6px]">
            {children}
       </div>
    )
};