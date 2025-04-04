import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Display from "./sections/display";
import Hero from "./sections/hero";
import Overview from "./sections/overview";
import Support from "./sections/support";

export default function Landing() {
    return (
        <>
            <div className="w-full fixed z-50 opacity-95">
                <Navbar />
            </div>
            <div className="flex flex-col gap-15 pb-20">
                <Hero />
                <Overview />
                <Display />
                <Support />
            </div>
            <Footer />
        </>
    )
}