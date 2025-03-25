import Card from "../../../components/Card";
import model from "../../../assets/model.png"

export default function Display() {
    return (
        <div className="flex flex-col items-center gap-6 justify-between sm:flex-row px-6 sm:px-32">
            <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
            <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
            <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
            <Card image={model} title={"Title"} body={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"} />
        </div>
    )
}