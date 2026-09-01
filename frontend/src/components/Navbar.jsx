import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="/controller.png" alt="logo" className="logo"/>
                <p>Luke's Videogame Collection</p>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/create">Create Videogame</Link>
            </div>
        </nav>
    )
}

export default Navbar;