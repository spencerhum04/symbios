import Member from "../../../components/Member";
import dude from "../../../assets/dude.png"

export default function() {
    return (
        <div className="px-6 sm:px-32">
            <div className="flex flex-col grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
                <Member image={dude} name={"Random Dude"} title={"Chief Executive Officer"} />
                <Member image={dude} name={"Random Dude"} title={"Head of Marketing"} />
                <Member image={dude} name={"Random Dude"} title={"Head of Marketing"} />
                <Member image={dude} name={"Random Dude"} title={"Head of Marketing"} />
                <Member image={dude} name={"Random Dude"} title={"Head of Marketing"} />
            </div>
        </div>
    )
}