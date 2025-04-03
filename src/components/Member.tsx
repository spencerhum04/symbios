export default function Member({ image, name, title } : { image: string, name: String, title: String }) {
    return (
        <div className="relative rounded-xl">
            <img src={image} className="rounded-xl w-60" />
            <div className="flex flex-col items-center">
                <div className="absolute bg-white opacity-90 p-2 text-center rounded-lg left-1 right-2 bottom-1">
                    <div className="text-sm font-medium">{name}</div>
                    <div className="text-xs">{title}</div>
                </div>
            </div>
        </div>
    )
}