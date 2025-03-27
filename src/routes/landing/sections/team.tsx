import Member from "../../../components/Member";
import model from "../../../assets/model.png"

export default function() {
    return (
        <div className="px-6 sm:px-32 flex flex-col">
            <div>Meet the Team.</div>
            <div className="flex flex-col sm:flex-row gap-8 justify-between">
                <Member image={model} name={"Logo Man"} title={"CEO"} />
                <Member image={model} name={"Other Man"} title={"CFO"} />
                <Member image={model} name={"Logo Man"} title={"CEO"} />
                <Member image={model} name={"Other Man"} title={"CFO"} />
            </div>
        </div>
    )
}