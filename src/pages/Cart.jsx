import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart } = useCart();

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
                            className="bg-red-600 px-2 py-1 text-white rounded hover:bg-red-800"
                            onClick={() => removeFromCart(item.id)}
                        >
                            ❌
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
