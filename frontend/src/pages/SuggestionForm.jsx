import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SuggestionForm(){
    const [title, setTitle] = useState("");
    const [console, setConsole] = useState("");
    const [reason, setReason] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

            const response = await fetch("/api/suggestions", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify({
                title,
                console,
                reason,
            })
        })

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Unable to submit suggestion.")
        }

        setSuccess(true);

        setTimeout(() => {
            navigate("/");
        }, 1500);


    }

    return(<div className="suggestion">
    <h1>Suggestion Form</h1>
    {success && (<p>Suggestion created successfully!</p>)}
    <form onSubmit={handleSubmit} className="suggestionForm">
        <div className="form-group">
            <label>Title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Console:</label>
            <input type="text"
            required
            value={console}
            onChange={(e) => setConsole(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label className="reason">Reason:</label>
            <textarea  rows={5}
            required
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            />
        </div>

        <button 
        className="formButton"
        type="submit"
        disabled={loading}
        >{loading ? "Creating..." : "Submit"}</button>
    </form>
    
    </div>)
}

export default SuggestionForm;