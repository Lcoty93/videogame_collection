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

    const handleApprove = async (suggestionId) => {
        try {
            const response = await fetch(
                `/api/suggestions/${suggestionId}/approve`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            )

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || "Unable to approve suggestion")
            }
            
            setSuggestion((previousSuggestions) => 
                previousSuggestions.filter(
                    (suggestion) => suggestion._id !== suggestionId
                )
            )
        } catch (error) {
            console.error("Approve error:", error);
        }
    }

    const handleDeny = async (suggestionId) => {
        try {
            const response = await fetch(
                `api/suggestions/${suggestionId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    
                }
            )

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || "Unable to deny suggestion");
            }

            setSuggestion((previousSuggestions) => 
                previousSuggestions.filter(
                    (suggestion) => suggestion._id !== suggestionId
                )
            )
        } catch (error) {
            console.error("Deny error:", error);
        }
    }

    return(<div>
            <h1 className="gameSuggestionTitle">Game Suggestions</h1>
            {suggestions.length === 0 && <p className="gameSuggestionTitle">No Suggestions at this time</p>}
            <div className="games-container">
            {suggestions.map((suggestion) => (
                <div className="game-card" key={suggestion._id}>
                    <div className={`${suggestion.console.toLowerCase().replace(/\s+/g, '-')}`}>
                        <h3>{suggestion.title}</h3>
                        <p>{suggestion.console}</p>
                    </div>
                        <p>{suggestion.reason}</p>
                        <p>{suggestion.status}</p>
                        <div>
                            <button 
                            type="button"
                            onClick={(() => handleApprove(suggestion._id))}
                            >Approve</button>
                            {" | "}
                            <button
                            type="button"
                            onClick={(() => handleDeny(suggestion._id))}
                            >Deny</button>
                        </div>
                </div>
            ))}
            </div>
            
    </div>)
}

export default AdminSuggestions;