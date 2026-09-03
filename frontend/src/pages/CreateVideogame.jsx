import { useState } from "react";
import { useNavigate } from "react-router-dom";

import VideoGameForm from "../components/VideogameForm";
import { useAuth } from "../context/AuthContent";

function CreateVideogame() {
    const [title, setTitle] = useState("");
    const [console, setConsole] = useState("");
    const [played, setPlayed] = useState(false);
    const [rating, setRating] = useState(0);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();

    const navigate = useNavigate();

        const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        await fetch("/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                console,
                played,
                rating,
            }),
        });

        if(response.status === 401) {
            logout();
            navigate("/admin/login");

            return;
        }


        setSuccess(true);
        setTimeout(() => {
            navigate("/");
        }, 1500);
    };

    return(<div className="CreateForm">
        <h1>Create Videogame</h1>
        {success && (<p>Videogame created successfully!</p>)}

        <VideoGameForm 
            title={title}
            setTitle={setTitle}
            console={console}
            setConsole={setConsole}
            played={played}
            setPlayed={setPlayed}
            rating={rating}
            setRating={setRating}
            handleSubmit={handleSubmit}
            buttonText="Create Videogame"
            loading={loading}
        />
    </div>)
}

export default CreateVideogame;