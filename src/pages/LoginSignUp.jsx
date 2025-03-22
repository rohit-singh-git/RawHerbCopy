import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setuserName] = useState("");
    const [fullName, setfullName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLogin && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            let response;
            if (isLogin) {
                // Login request
                response = await axios.post("http://localhost:8000/api/v1/users/login", { email, password });
            } else {
                // Signup request
                response = await axios.post("http://localhost:8000/api/v1/users/register", {
                    email,
                    password,
                    username,
                    fullName
                });
            }

            const userData = response.data; // Assuming the API returns user data
            // const user_Data = userData.data.user
            // console.log("User logged in:", user_Data);
            // console.log("Username:", user_Data.username);
            // console.log("Email:", user_Data.email);
            // console.log("Full Name:", user_Data.fullName);

            login(userData); // Store user info and navigate

        } catch (error) {
            console.error("Authentication error:", error.response?.data || error.message);
            alert("Authentication failed. Please check your credentials.");
        }
    };


    return (
        <div className="w-screen md:w-full flex justify-center items-center min-h-140 md:min-h-screen m-5 bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-white mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    {!isLogin && (
                        <div>
                            <label className="text-white">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 rounded-md bg-gray-700 text-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                value={fullName}
                                onChange={(e) => setfullName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {/* Username Input */}
                    {!isLogin && (
                        <div>
                            <label className="text-white">Username</label>
                            <input
                                type="text"
                                className="w-full p-2 rounded-md bg-gray-700 text-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setuserName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {/* Email Input */}
                    <div>
                        <label className="text-white">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded-md bg-gray-700 text-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label className="text-white">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full p-2 rounded-md bg-gray-700 text-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute rounded-md top-7 bottom-0 right-0 text-white"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Confirm Password (Only for Signup) */}
                    {!isLogin && (
                        <div>
                            <label className="text-white">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full p-2 rounded-md bg-gray-700 text-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {/* Toggle Between Login & Signup */}
                <p className="text-center text-white mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-400 hover:underline"
                    >
                        {isLogin ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
