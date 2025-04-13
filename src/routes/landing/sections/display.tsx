import ExpandableCard from "../../../components/ExpandableCard";
import arm from "../../../assets/arm.png";

export default function Display() {
    return (
        <div className="flex flex-col max-w-[1024px] w-full mx-auto gap-20 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl w-full font-medium">Engineered for modern product teams</div>
            <div className="flex flex-row items-center justify-between overflow-hidden">
                <ExpandableCard image={arm} title={"Purpose-built for product development"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
                <ExpandableCard image={arm} title={"Designed to move fast"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
                <ExpandableCard image={arm} title={"Crafted to perfection"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
            </div>
        </div>
    )
}