import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Introduction from "./sections/introduction";
import Team from "./sections/team";

export default function About() {
    return (
        <>
            <div className="w-full fixed z-50">
                <Navbar />
            </div>
            <div className="flex flex-col gap-15 pt-32 pb-20 max-w-[1024px] mx-auto">
                <Introduction />
                <Team />
            </div>
            <Footer />
        </>
    )
}