type FooterColumnProps = {
    title: string;
    items: { name: string }[];
};

export default function FooterColumn({ title, items }: FooterColumnProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-sm font-medium">{title}</div>
            <div className="text-sm text-stone flex flex-col gap-2.5">
                {items.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}
