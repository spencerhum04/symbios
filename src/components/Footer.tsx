import logo from "../assets/logo.png"

export default function Footer() {
    return (
        <div className="w-full px-6 py-4">
            <div className="bg-neutral-800 text-white rounded-xl">
                <div className="flex flex-row items-center justify-between p-6">
                    <img src={logo} className="h-5" />
                    <div className="text-xs text-center">Copyright 2025 Symbios Bio-Suite. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}