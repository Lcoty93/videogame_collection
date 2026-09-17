import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContent";

function Navbar() {
    const { isAdmin, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }


    return(
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <img src="/controller.png" alt="logo" className="logo"/>
                </Link>
                <p>Luke's Videogame Collection</p>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                {isAdmin && (
                    <>
                        {" | "}
                        <Link to="/create">Create Videogame</Link>
                        {" | "}
                        <Link to="/adminsuggestion">Suggestions</Link>
                        {" | "}
                        <button type="button" onClick={handleLogout} className="formButton">Logout</button>
                    </>
                )}
                {!isAdmin && (
                    <>
                        <Link to="/suggestion">Suggest</Link>
                        <Link to="/admin/login">Admin</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;