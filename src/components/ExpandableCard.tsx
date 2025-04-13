export default function ExpandableCard({ image, title, body } : { image: string, title: String, body: String }) {
    return (
        <div className="w-84 h-90 bg-black rounded-xl px-6 py-8">
            <div className="flex flex-col items-center justify-between h-full">
                <img src={image} className="opacity-50 hover:opacity-60 h-56" />
                <div className="flex flex-row justify-between items-end gap-x-8 w-full">
                    <div className="text-xl font-medium">{title}</div>
                    <div className="shrink-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#8a8f98" viewBox="0 0 256 256"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}