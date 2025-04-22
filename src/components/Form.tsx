import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Form() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const navigate = useNavigate();
    
    const ACCESS = "54dd3b91-2f9a-4c9a-8a13-0922f1b19cd3";

    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });

    const [error, setError] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        return formData.email && formData.message;
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (!ACCESS) {
            console.error("ACCESS key is undefined!");
            return;
        }

        if (!isFormValid()) {
            setError("All fields are required!");
            return;
        }

        const form = new FormData(event.target);
        form.append("access_key", ACCESS);

        const object = Object.fromEntries(form);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                navigate("/");
            } else {
                console.error("Submission failed", res);
            }
        } catch (error) {
            console.error("Error during submission", error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <form onSubmit={onSubmit} className="w-full place-items-center sm:place-items-start">
                <div className="flex flex-col gap-y-4 mt-2.5 w-full">
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                        className="font-semibold bg-neutral-600 rounded-lg p-2.5 focus:outline-none"
                        placeholder="Enter email address"
                    />
                    <textarea name="message" value={formData.message} onChange={handleInputChange}
                        className="font-semibold bg-neutral-600 h-40 rounded-lg p-2.5 focus:outline-none"
                        placeholder="Enter your message here"
                    ></textarea>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    {isFormValid() ?
                        (<button type="submit" className="text-sm rounded-lg p-2 focus:outline-none font-medium bg-neutral-600 hover:bg-slate-400 cursor-pointer">
                            Submit Inquiry
                        </button>)
                        :
                        (<button type="submit" className="text-sm rounded-lg p-2 focus:outline-none font-medium bg-neutral-700 cursor-not-allowed" disabled>
                            Submit Inquiry
                        </button>)
                    }
                </div>
            </form>
        </div>
    );
}