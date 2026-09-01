import { Link } from "react-router-dom";

function VideoGameCard({ videogame }) {
    return(<div className="game-card">
                <h3>{videogame.title}</h3>
                <p>{videogame.console}</p>
                <p>Played: {videogame.played ? "Yes" : "No"}</p>
                <p>{`${videogame.rating}/10`}</p>
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