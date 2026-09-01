import { useEffect, useState } from "react";

import VideoGameCard from "../components/VideogameCard"

function Home() {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        fetch("/games")
        .then(res => res.json())
        .then(data => setVideogames(data));
    }, [])

    return(
        <>
            <div className="games-container">
            {videogames.map((videogame) => (
                <VideoGameCard key={videogame._id} videogame={videogame}/>
            ))}
            </div>
        </>
    )
    
}

export default Home;