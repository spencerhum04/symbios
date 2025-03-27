import Display from "./sections/display";
import Hero from "./sections/hero";
import Overview from "./sections/overview";
import Support from "./sections/support";
import Team from "./sections/team";

export default function Landing() {
    return (
        <div className="flex flex-col gap-15 pb-20">
            <Hero />
            <Overview />
            <Display />
            <Team />
            <Support />
        </div>
    )
}