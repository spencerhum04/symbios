import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Team from "../landing/sections/team";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-15 py-20">
                <Team />
            </div>
            <Footer />
        </>
    )
}