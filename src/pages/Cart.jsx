import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate()

    const isAuthenticated = !!localStorage.getItem('userToken')

    const handleCheckout = () => {
        if (isAuthenticated) {
            navigate('/RawHerbCopy/checkout')
        } else {
            navigate('/RawHerbCopy/login')
        }
    }

    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-md w-screen">
            <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
            {cart.length === 0 ? (

                <p className="text-gray-500">Cart is empty</p>

            ) : (
                cart.map((item) => (

                    <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
                        <img src={item.image} alt={item.name} className="w-25 h-25 rounded" />
                        <div className="w-35">
                            <p className="font-semibold">{item.name}</p>
                            <p>Qty: {item.quantity}</p>
                            <p className="text-green-600 font-bold">${item.price * item.quantity}</p>
                        </div>
                        <button
                            className="bg-neutral-800 px-2 py-1 text-white rounded hover:bg-red-800"
                            onClick={() => removeFromCart(item.id)}
                        >
                            ❌
                        </button>
                    </div>

                ))
            )}

            {cart.length > 0 && (
                <button onClick={handleCheckout} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 w-full">Checkout</button>
            )}


        </div>
    );
}

export default Cart;
