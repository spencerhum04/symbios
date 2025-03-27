import Member from "../../../components/Member";
import model from "../../../assets/model.png"

export default function() {
    return (
        <div className="px-6 sm:px-32 flex flex-col">
            <div className="flex flex-col text-center flex flex-col gap-6">
                <div className="text-4xl font-medium">Meet the team that makes the magic happen.</div>
                <div className="text-xl">Meet our diverse team of world-class creators, designers, and problem solvers.</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-between pt-12">
                <Member image={model} name={"Logo Man"} title={"CEO"} />
                <Member image={model} name={"Other Man"} title={"CFO"} />
                <Member image={model} name={"Logo Man"} title={"CEO"} />
                <Member image={model} name={"Other Man"} title={"CFO"} />
            </div>
        </div>
    )
}