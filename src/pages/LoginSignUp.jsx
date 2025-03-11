import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(isLogin ? "Login Successful!" : "Signup Successful!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-white mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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
