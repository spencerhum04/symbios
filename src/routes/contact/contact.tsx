import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./sections/hero";

export default function Contact() {
    return (
        <>
            <div className="w-full fixed z-50">
                <Navbar />
            </div>
            <div className="flex flex-col gap-40 py-20">
                <div className="px-6 sm:px-0">
                    <Hero />
                </div>
            </div>
            <Footer />
        </>
    )
}