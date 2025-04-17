import ExpandableCard from "../../../components/ExpandableCard";
import arm from "../../../assets/arm.png";

export default function Display() {
    return (
        <div className="flex flex-col max-w-[1024px] w-full mx-auto gap-18 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl w-full font-medium pr-6">Engineered for modern product teams</div>
            <div className="flex flex-row items-center gap-2 justify-between overflow-x-auto scrollbar-hide">
                <ExpandableCard image={arm} title={"Purpose-built for product development"} />
                <ExpandableCard image={arm} title={"Designed to move fast"} />
                <ExpandableCard image={arm} title={"Crafted to perfection"} />
            </div>
        </div>
    )
}