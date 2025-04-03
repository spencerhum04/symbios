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
                <div className="cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                    {!dropdown ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H134v34a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h34V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z"></path></svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M174,128a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,128Zm56,0A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"></path></svg>
                        )
                    }
                </div>
            </div>
            <div ref={answerRef} className="bg-slate-100 px-6 rounded-b-lg duration-500 ease-out transition-all overflow-hidden" style={{ height: `${height}px` }}>
                <div className="text-lg py-2.5">{answer}</div>
            </div>
        </div>
    )
}