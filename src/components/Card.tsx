export default function Card({ image, title, body } : { image: string, title: String, body: String }) {
    return (
        <div className="group w-66 h-88">
            <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
                <img className="h-full w-full rounded-xl object-cover shadow-lg shadow-black/40" src={image} />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-base">{body}</p>
                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                </div>
            </div>
            </div>
        </div>
    )
}