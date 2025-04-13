import Card from "../../../components/Card";
import model from "../../../assets/model.png"

export default function Display() {
    return (
        <div className="flex flex-col max-w-[1024px] w-full mx-auto gap-8 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl w-full font-medium">Engineered for modern product teams</div>
            <div className="flex flex-row items-center gap-6 justify-between overflow-hidden">
                <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
                <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
                <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
            </div>
        </div>
    )
}