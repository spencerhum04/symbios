import logo from "../assets/logo.png"
import FooterColumn from "./FooterColumn"

const product = [
    { name: "Overview" },
    { name: "Features" },
    { name: "Solutions" },
    { name: "Releases   " },
]

const company = [
    { name: "About Us" },
    { name: "News" },
    { name: "Contact" },
]

const social = [
    { name: "LinkedIn" },
    { name: "GitHub" },
]

export default function Footer() {
    return (
        <div className="w-full px-6 py-4">
            <div className="bg-neutral-800 text-white rounded-xl flex flex-col gap-10 px-12 py-10">
                <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6">
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Company" items={company} />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Social" items={social} />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <img src={logo} className="h-5" />
                    <div className="text-neutral-300 text-xs text-end">Copyright 2025 Symbios Bio-Suite. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}