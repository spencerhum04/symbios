import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Introduction from "./sections/introduction";
import Team from "./sections/team";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-15 py-20 max-w-[1280px] mx-auto">
                <Introduction />
                <Team />
            </div>
            <Footer />
        </>
    )
}