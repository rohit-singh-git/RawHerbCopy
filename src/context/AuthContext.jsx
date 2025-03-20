import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Load user from local storage when app starts
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        // console.log("Loading user from localStorage:", storedUser);
    
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing user data:", error);
                // localStorage.removeItem("user"); // Remove corrupted data
            }
        }
    }, []);
    

    // Login function
    const login = (userData) => {
        // console.log("User logged in:", userData);
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        navigate("/RawHerbCopy/"); // Redirect to homepage after login
    };

    // Logout function
    const logout = () => {
        console.log("User logged out");
        localStorage.removeItem("user"); // Clear user data
        // localStorage.setItem("token", token);

        localStorage.removeItem("token");

        setUser(null); // Reset state
        // delete axios.defaults.headers.common["Authorization"]
        navigate("/RawHerbCopy/login/"); // Redirect to login page
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
