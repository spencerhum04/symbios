import Form from "../../../components/Form";
import Prompt from "../../../components/Prompt";

export default function Support() {
    return (
        <div className="flex flex-col px-6 sm:px-32 gap-8 overflow-hidden">
            <div className="text-3xl font-medium text-center sm:text-left">Frequently Asked Questions</div>
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-4 sm:max-w-1/2">
                    <Prompt question={"Question1"} answer={"Answer1"} />
                    <Prompt question={"Question2"} answer={"Answer2 Answer2 Answer2 Answer2 Answer2 Answer2 Answer2 Answer2"} />
                    <Prompt question={"Question3"} answer={"Answer3 Answer3 Answer3 Answer3 Answer3 Answer3 Answer3 Answer3 Answer3 Answer3 Answer3"} />
                    <Prompt question={"Question4"} answer={"Answer4"} />
                    <Prompt question={"Question5"} answer={"Answer5"} />
                </div>
                <div className="flex flex-col gap-6 sm:max-w-1/2 w-full">
                    <div className="flex flex-col gap-1 text-center sm:text-left">
                        <div className="text-2xl font-medium">Get in Touch</div>
                        <div>symbiosbiosuite@gmail.com</div>
                    </div>
                    <Form />
                </div>
            </div>
            
        </div>
    )
}