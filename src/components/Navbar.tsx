import { useState } from "react"
import logo from "../assets/logo.png"

export default function Navbar() {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className={`flex flex-row gap-x-2 items-center px-6 py-2 ${menu ? "opacity-50" : "opacity-100"}`}>
                <button className={`w-[48px] h-[48px] rounded-lg flex flex-col justify-between px-4 py-4.5`} onClick={() => {setMenu(true)}}>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                </button>
                <img src={logo} className="h-6" />
            </div>
            <div className={`top-0 left-0 absolute z-10 bg-green-200 px-6 py-2 h-full duration-500 ease-out transition-transform ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="w-[48px] h-[48px] rounded-lg flex flex-col justify-between px-4 py-4.5" onClick={() => {setMenu(false)}}>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                    <span className="w-full h-0.5 bg-black"></span>
                </button>
            </div>
        </>
    )
}