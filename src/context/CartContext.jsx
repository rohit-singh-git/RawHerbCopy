import { createContext, useState, useContext, useEffect } from "react";

// Create a context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");

    // Load cart from localStorage on page load
    useEffect(() => {
        const items_cart = localStorage.getItem("cart");
        if (items_cart) {
            try {
                setCart(JSON.parse(items_cart));
            } catch (error) {
                console.error("Error parsing cart data:", error);
                setCart([]); // Set empty cart if JSON is invalid
            }
        } else {
            setCart([]); // Default to an empty cart
        }
    }, []);
    

    // Function to add item to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCart = [...prevCart, { ...product, quantity: 1 }];
            }

            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Instant localStorage update
            setMessage(`${product.name} added to cart!`);
            setTimeout(() => setMessage(""), 2000);

            return updatedCart;
        });
    };

    // Function to remove item from cart
    const removeFromCart = (id) => {
        const removedItem = cart.find((item) => item.id === id);

        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Instant localStorage update
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
            {children}
        </CartContext.Provider>
    );
};
