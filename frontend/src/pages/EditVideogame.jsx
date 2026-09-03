import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import VideoGameForm from "../components/VideogameForm";

function EditVideogame() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [console, setConsole] = useState("");
    const [played, setPlayed] = useState(false);
    const [rating, setRating] = useState(0);

        useEffect(() => {
        const getVideogame = async () => {
            const response = await fetch(`/games/${id}`);

            const videogame = await response.json();

            setTitle(videogame.title);
            setConsole(videogame.console);
            setPlayed(videogame.played);
            setRating(videogame.rating);
        };

        getVideogame();
    }, [id]);


        const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const token = localStorage.getItem("adminToken");

        await fetch(`/games/${id}`, {
            method: "PUT",
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

    return(<>
        <h1 className="formTitle">Edit Videogame</h1>
        {success && (<p className="formSuccess">Videogame edited successfully!</p>)}

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
            buttonText="Update Videogame"
            loading={loading}
        />
    </>)
}

export default EditVideogame;