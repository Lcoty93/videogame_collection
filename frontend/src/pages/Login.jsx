import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContent";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
            });

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message || "Login failed.");
            }

            login(data.token);

            navigate("/");

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return(<div>
        <h1>Admin Login</h1>
        {error && <p role="alert">{error}</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>username:</label>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
            </div>

            <div>
                <label>password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
            </button>
        </form>
    </div>)
}

export default Login;