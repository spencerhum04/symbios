import Prompt from "../../../components/Prompt";

export default function Support() {
    return (
        <div className="flex flex-col px-6 gap-6">
            <div className="text-3xl font-medium text-center">Frequently Asked Questions</div>
            <div className="flex flex-col gap-4">
                <Prompt question={"Question1"} answer={"Answer1"} />
                <Prompt question={"Question2"} answer={"Answer2 Answer2 Answer2 Answer2 Answer2 Answer2 Answer2 Answer2"} />
            </div>
            <div className="text-2xl font-medium text-center">Get in Contact</div>
        </div>
    )
}