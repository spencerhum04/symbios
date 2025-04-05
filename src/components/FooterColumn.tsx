type FooterColumnProps = {
    title: string;
    items: { name: string }[];
};

export default function FooterColumn({ title, items }: FooterColumnProps) {
    return (
        <div className="flex flex-col">
            <div className="text-xs text-neutral-300 mb-2.5">{title}</div>
            <div className="text-xs font-medium flex flex-col gap-1.5">
                {items.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}
