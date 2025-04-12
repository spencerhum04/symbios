export default function Hero() {
    return (
        <div className="flex flex-col pt-18 max-w-[1024px] w-full mx-auto">
            <div className="max-w-200 text-4xl sm:text-6xl w-full font-medium">Linear is a purpose-built tool for planning and building products</div>
            <div className="max-w-150 text-xl w-full font-medium">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-black bg-sand hover:bg-white text-sm font-medium rounded-xl px-4 py-2.5">Start building</div>
                <div className="text-sand font-medium px-4">Introducing Sub-Teams</div>
            </div>
        </div>
    );
}
