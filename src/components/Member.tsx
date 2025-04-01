export default function Member({ image, name, title } : { image: string, name: String, title: String }) {
    return (
        <div className="relative rounded-xl border border-slate-300">
            <img src={image} className="rounded-xl w-48" />
            <div className="flex flex-col items-center">
                <div className="absolute bg-white p-2 text-center rounded-lg left-1 right-1 bottom-1">
                    <div className="text-sm font-medium">{name}</div>
                    <div className="text-xs">{title}</div>
                </div>
            </div>
        </div>
    )
}