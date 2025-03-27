import Member from "../../../components/Member";
import logo from "../../../assets/logo.png"

export default function() {
    return (
        <div className="px-6 sm:pl-32 flex flex-col overflow-hidden">
            <div>Meet the Team.</div>
            <div className="flex flex-col sm:flex-row gap-8">
                <Member image={logo} name={"Logo Man"} title={"CEO"} />
                <Member image={logo} name={"Other Man"} title={"CFO"} />
                <Member image={logo} name={"Logo Man"} title={"CEO"} />
                <Member image={logo} name={"Other Man"} title={"CFO"} />
                <Member image={logo} name={"Other Man"} title={"CFO"} />
                <Member image={logo} name={"Other Man"} title={"CFO"} />
            </div>
        </div>
    )
}