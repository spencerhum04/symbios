import { useState, useEffect, useRef } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export default function Navbar() {

    const [menu, setMenu] = useState(false);
    const [focus, setFocus] = useState<String>("Home");
    const sideRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Documentation", path: "/documentation" },
        { name: "Resources", path: "/resources" },
        { name: "Contact", path: "/contact" },
    ]

    useEffect(() => {
        const currentItem = tabs.find(item => item.path === location.pathname);
        if (currentItem) setFocus(currentItem.name);
    }, [location]);

    // Handle click
    useEffect(() => {
        // If the sidebar is open and the click is outside of it
        function handleClose(e : Event) {
            if(sideRef.current && !sideRef.current.contains(e.target as Node)) {
                setMenu(false);
            }
        }
        if (menu) {
            document.addEventListener("mousedown", handleClose);
        } else {
            document.removeEventListener("mousedown", handleClose);
        }

        return () => {
            document.removeEventListener("mousedown", handleClose);
        };
    }, [menu]);

    return (
        <div className="bg-neutral-900 w-full h-16 px-6 place-content-center">
            <div className="flex flex-row items-center justify-between max-w-[1024px] w-full mx-auto">
                <div className="flex flex-row items-center justify-between w-full sm:w-25">
                    <img src={logo} className="h-5" />
                    <button className={`sm:hidden w-[16px] h-[12px] rounded-lg flex flex-col justify-between`} onClick={() => {setMenu(true)}}>
                        <span className="w-full h-0.5 bg-white"></span>
                        <span className="w-full h-0.5 bg-white"></span>
                        <span className="w-full h-0.5 bg-white"></span>
                    </button>
                </div>
                <div className="hidden sm:block">
                    <div className="flex flex-row items-center gap-10">
                        {tabs.map(({ name, path }) => (
                            <Link key={name} to={path} className={`text-sm font-medium rounded-sm ${focus === name ? "text-white" : "text-sand"}`} onClick={() => setFocus(name)}>
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-black hidden sm:block bg-sand hover:bg-slate-100 text-sm font-medium rounded-xl px-3 py-2">Get Started</div>
            </div>

            <div ref={sideRef} className={`top-0 left-0 absolute z-10 bg-neutral-900 w-full duration-500 ease-out transition-transform ${menu ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex flex-row items-center justify-between w-full px-6 pt-4">
                    <img src={logo} className="h-5" />
                    <button className={`sm:hidden w-[20px] h-[20px] rounded-lg flex flex-col justify-between`} onClick={() => {setMenu(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                    </button>
                </div>
                <div className="flex flex-col py-6 pr-4">
                    {tabs.map(({ name, path }) => (
                        <Link key={name} to={path} className={`h-16 place-content-center px-6 font-medium rounded-r-full cursor-pointer transition-colors ${focus === name ? "bg-neutral-800" : ""}`} onClick={() => setFocus(name)}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}