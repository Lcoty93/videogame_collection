import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(
        localStorage.getItem("adminToken")
    )
    const isAdmin = Boolean(token);

    const login = (newToken) => {
        localStorage.setItem("adminToken", newToken);
        setToken(newToken);
    }

    const logout = () => {
        localStorage.removeItem("adminToken");
        setToken(null);
    }

    return(
        <AuthContext.Provider 
        value={{
            token,
            isAdmin,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error(
            "useAuth must be used inside an AuthProvider"
        )
    }

    return context;
}