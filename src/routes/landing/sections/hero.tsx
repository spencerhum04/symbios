import "../landing.css";
import mech from "../../../assets/mech.png";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col pt-8 sm:pt-18 max-w-[1024px] w-full mx-auto gap-8 text-center sm:text-left z-10">
                <div className="text-4xl sm:text-6xl w-full font-medium reveal-blur">Redefining the Future of Prosthetics</div>
                <div className="max-w-175 text-xl w-full font-medium reveal-blur reveal-blur-delay-1">Combining biomimicry, soft materials, and 3D printing, our student-driven initiative is making advanced prosthetics more accessible than ever.</div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-black bg-sand hover:bg-white text-sm font-medium rounded-xl px-4 py-2.5 reveal-blur reveal-blur-delay-2">Start building</div>
                    <div className="flex flex-row items-center rounded-xl hover:bg-neutral gap-x-1.5 px-4 py-2.5 reveal-blur reveal-blur-delay-3">
                        <div className="text-stone text-sm font-medium bg-gradient-to-r from-sand to-stone bg-clip-text text-transparent">Browse Our Products</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8a8f98" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block px-10 reveal-blur reveal-blur-delay-4">
                <img src={mech} className="mech-reveal w-full object-cover" />
            </div>
        </>
    );
}
