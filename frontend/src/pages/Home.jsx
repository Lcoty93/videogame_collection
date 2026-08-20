import { useEffect, useState } from "react";

import VideoGameCard from "../components/VideogameCard"

function Home() {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(res => res.json())
        .then(data => setVideogames(data));
    }, [])

    return(
        <>
        <h1>Luke's Videogame Collection:</h1>

            {videogames.map((videogame) => (
                <VideoGameCard key={videogame._id} videogame={videogame}/>
            ))}
        
        </>
    )
    
}

export default Home;