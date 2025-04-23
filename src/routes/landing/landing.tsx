import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Display from "./sections/display";
import Hero from "./sections/hero";
import Overview from "./sections/overview";
import Support from "./sections/support";

export default function Landing() {
    return (
        <>
            <div className="w-full fixed z-50">
                <Navbar />
            </div>
            <div className="flex flex-col gap-40 py-20">
                <div className="px-6 sm:px-0">
                    <Hero />
                </div>
                <div className="pl-6 sm:px-0">
                    <Display />
                </div>
                <div className="px-6 sm:px-0">
                    <Support />
                </div>
            </div>
            <Footer />
        </>
    )
}