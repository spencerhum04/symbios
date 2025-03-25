import Hero from "./sections/hero";
import Overview from "./sections/overview";
import Support from "./sections/support";

export default function Landing() {
    return (
        <div className="pb-20">
            <Hero />
            <Overview />
            <Support />
        </div>
    )
}