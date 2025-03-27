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
        <>
            <div className="flex flex-row items-center justify-between w-full px-6 sm:px-32 py-2 h-16">
                <div className="flex flex-row gap-x-2 items-center">
                    <button className={`sm:hidden w-[48px] h-[48px] rounded-lg flex flex-col justify-between px-4 py-4.5`} onClick={() => {setMenu(true)}}>
                        <span className="w-full h-0.5 bg-black"></span>
                        <span className="w-full h-0.5 bg-black"></span>
                        <span className="w-full h-0.5 bg-black"></span>
                    </button>
                    <img src={logo} className="h-6" />
                </div>
                <div className="hidden sm:block">
                    <div className="flex flex-row items-center gap-4">
                        <Link to={"/"} className="rounded-sm hover:bg-slate-100 px-4 py-3">Home</Link>
                        <Link to={"/about"} className="rounded-sm hover:bg-slate-100 px-4 py-3">About Us</Link>
                        <button className="rounded-sm hover:bg-slate-100 px-4 py-3">Documentation</button>
                        <button className="rounded-sm hover:bg-slate-100 px-4 py-3">Resources</button>
                    </div>
                </div>
                <div className="hidden sm:block bg-slate-300 hover:bg-slate-400 px-4 py-3 rounded-xl">Get Started</div>
            </div>

            <div ref={sideRef} className={`top-0 left-0 absolute z-10 bg-stone-200 w-80 h-full duration-500 ease-out transition-transform ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-16 place-content-center border-b border-slate-300 px-6">
                    <img src={logo} className="h-6" />
                </div>
                <div className="flex flex-col py-6 pr-4">
                    {tabs.map(({ name, path }) => (
                        <Link key={name} to={path} className={`h-12 place-content-center px-6 font-medium rounded-r-full cursor-pointer transition-colors ${focus === name ? "bg-stone-300" : ""}`} onClick={() => setFocus(name)}>
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}