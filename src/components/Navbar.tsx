import { useState, useEffect, useRef } from "react"
import logo from "../assets/logo.png"

export default function Navbar() {

    const [menu, setMenu] = useState(false);
    const sideRef = useRef<HTMLDivElement>(null);

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
            <div className="flex flex-row gap-x-2 items-center px-6 py-2 h-16">
                <button className={`w-[48px] h-[48px] rounded-lg flex flex-col justify-between px-4 py-4.5`} onClick={() => {setMenu(true)}}>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                </button>
                <img src={logo} className="h-6" />
            </div>
            <div ref={sideRef} className={`top-0 left-0 absolute z-10 bg-slate-100 w-80 h-full duration-500 ease-out transition-transform ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-16 place-content-center border-b border-slate-300 px-6">
                    <img src={logo} className="h-6" />
                </div>
                <div className="flex flex-col py-6 pr-4">
                    <div className="h-12 place-content-center px-6 font-medium rounded-r-full bg-slate-200">Home</div>
                    <div className="h-12 place-content-center px-6 font-medium rounded-r-full">Documentation</div>
                    <div className="h-12 place-content-center px-6 font-medium rounded-r-full">Resources</div>
                </div>
            </div>
        </>
    )
}