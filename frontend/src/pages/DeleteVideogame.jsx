import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteVideogame() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const handleDelete = async (e) => {
        e.preventDefault();

        setLoading(true);
        
        await fetch(`/games/${id}`, {
            method: "DELETE",
        });

        setSuccess(true);

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    const handleCancel = () => {
        navigate("/");
    }

    return(<div className="deleteForm">
    <h2>Delete this Videogame?</h2>

            {success && (<p>Videogame deleted successfully!</p>)}
            <div>
                <button onClick={handleDelete} disabled={loading}>Delete</button>
                {` | `}
                <button onClick={handleCancel} disabled={loading}>Cancel</button>
            </div>
    </div>)
}

export default DeleteVideogame;