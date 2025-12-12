interface Props {
    children: React.ReactNode;
}

export const CheckoutEditBox: React.FC<Props> = ({
    children
}) => {
    return (
       <div className="w-full flex flex-col rounded-[5px] border py-[0.8571428571em] px-[1.1428571429em]">
            {children}
        </div>
    )
};