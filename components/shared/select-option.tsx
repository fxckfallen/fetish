
interface Props {
    title: string;
    value: string;
}

export const SelectOption: React.FC<Props> = ({
    title,
    value,
}) => {
    return (
        <option value={value} id={value}>{title}</option>
    )
};