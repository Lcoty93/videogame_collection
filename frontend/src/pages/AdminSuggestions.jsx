import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContent";


function AdminSuggestions(){
    const [suggestions, setSuggestion] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        fetch("/api/suggestions", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => setSuggestion(data));
    }, [])

    return(<>
            <h1>Game Suggestions</h1>
            <div className="games-container">
            {suggestions.map((suggestion) => (
                <div>
                    <h3>{suggestion.title}</h3>
                    <p>{suggestion.console}</p>
                    <p>{suggestion.reason}</p>
                </div>
            ))}
            </div>
    </>)
}

export default AdminSuggestions;