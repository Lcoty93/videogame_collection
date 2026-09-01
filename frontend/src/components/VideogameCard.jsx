import { Link } from "react-router-dom";

function VideoGameCard({ videogame }) {
    return(<div className="game-card">
                <div className={`${videogame.console.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 >{videogame.title}</h3>
                <p>{videogame.console}</p>
                </div>
                <p>Played: {videogame.played ? "Yes" : "No"}</p>
                <p>{`Rating: ${videogame.rating}/10`}</p>
                <div>
                    <Link to={`/games/${videogame._id}`}><button>Info</button></Link>
                    {" | "}
                    <Link to={`/edit/${videogame._id}`}><button>Edit</button></Link>
                    {" | "}
                    <Link to={`/delete/${videogame._id}`}><button>Delete</button></Link>
                </div>
            </div>)
}

export default VideoGameCard;