import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Checkout() {

    const navigate = useNavigate()
    const { clearCart } = useCart()
    const { user } = useAuth()

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!user) {
            localStorage.setItem("previouspage", window.location.pathname)
            navigate('/RawHerbCopy/login/')
        }
    }, [user, navigate]);

    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Order Placed Successfully!");
        clearCart()

        navigate("/RawHerbCopy/"); // Redirect to home after order
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">🛍 Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-400">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-400">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    {/* City & Zip */}
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-gray-400">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-400">Zip Code</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                    </div>

                    {/* Payment Details */}
                    <h3 className="text-lg font-semibold mt-4">💳 Payment Details</h3>

                    <div>
                        <label className="block text-gray-400">Card Number</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block text-gray-400">Expiry Date</label>
                            <input
                                type="text"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                required
                                placeholder="MM/YY"
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-400">CVV</label>
                            <input
                                type="password"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 hover:bg-blue-700 rounded-lg font-bold text-white"
                    >
                        🛒 Place Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
