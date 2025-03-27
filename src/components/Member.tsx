export default function Member({ image, name, title } : { image: string, name: String, title: String }) {
    return (
        <div className="w-64 h-74 bg-stone-100 rounded-xl p-10 border border-slate-200">
            <img src={image} className="h-full" />
            <div className="relative">
                <div className="absolute bg-white p-2 w-60">
                    <div>{name}</div>
                    <div>{title}</div>
                </div>
            </div>
        </div>
    )
}