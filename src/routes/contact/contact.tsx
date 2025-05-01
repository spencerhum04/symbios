import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Hero from "./sections/hero";

export default function Contact() {
    return (
        <>
            <div className="w-full fixed z-50">
                <Navbar />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-10 pt-36 pb-20 max-w-[1024px] mx-auto px-6 sm:px-0">
                <Hero />
                <Form />
            </div>
            <Footer />
        </>
    )
}