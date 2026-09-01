import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideogameInfo() {
     const { id } = useParams();

    const [videogame, setVideogame] = useState(null);

    useEffect(() => {
        const fetchVideogame = async () => {
            const response = await fetch(`/games/${id}`);

            const data = await response.json();

            setVideogame(data);
            
        }

        fetchVideogame();
    }, [id])

    if(!videogame) {
        return <p>Loading...</p>
    }

    return(<div className="game-card">
            <h1 className="detailsTitle">Videogame Details</h1>
            <h3>{videogame.title}</h3>
            <p>{videogame.console}</p>
            <p>Played: {videogame.played ? "Yes" : "No"}</p>
            <p>{`${videogame.rating}/10`}</p>
        </div>)
}

export default VideogameInfo;