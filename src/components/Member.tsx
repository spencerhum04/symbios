export default function Member({ image, name, title } : { image: string, name: String, title: String }) {
    return (
        <div className="min-w-66 bg-stone-200 p-4 rounded-sm">
            <div className="flex flex-col">
                <img src={image} className="w-66 h-66" />
                <div className="font-semibold mt-4">{name}</div>
                <div className="text-sm">{title}</div>
            </div>
        </div>
    )
}