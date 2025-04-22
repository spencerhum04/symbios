import logo_icon_white from "../assets/logo-icon-white.png"
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
        <div className="bg-dark w-full h-16 px-6 place-content-center border-t border-neutral-800 text-sm">
            <div className="max-w-[1024px] w-full mx-auto py-16">
                <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-6">
                    <img src={logo_icon_white} className="h-5" />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Company" items={company} />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Product" items={product} />
                    <FooterColumn title="Social" items={social} />
                </div>
            </div>
        </div>
    )
}