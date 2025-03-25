import { useEffect, useRef, useState } from "react";

export default function Prompt({ question, answer } : { question: String, answer: String }) {
    
    const [dropdown, setDropdown] = useState(false);
    const [height, setHeight] = useState(0);
    const answerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dropdown && answerRef.current) {
            setHeight(answerRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [dropdown]);

    return (
        <div>
            <div className={`flex flex-row items-center justify-between bg-slate-200 px-6 py-2.5 ${dropdown ? "rounded-t-lg" : "rounded-lg"}`}>
                <div className="text-lg">{question}</div>
                <div className="cursor-pointer" onClick={() => setDropdown(!dropdown)}>caret</div>
            </div>
            <div ref={answerRef} className="bg-slate-100 px-6 rounded-b-lg duration-500 ease-out transition-all overflow-hidden" style={{ height: `${height}px` }}>
                <div className="text-lg py-2.5">{answer}</div>
            </div>
        </div>
    )
}