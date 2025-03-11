import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

    const {addToCart, message} = useCart()

    return (
        <>
            <div className=" bg-yellow-900 text-white justify-center m-auto mb-5 p-4 rounded-lg w-full md:w-64 shadow-lg">
                <h2 className="text-xl font-bold text-center">{product.name}</h2>
                <div className="bg-white p-4 rounded-lg mt-2">
                    <img
                        src={product.image} // Replace with the correct image path
                        alt={product.name}
                        className="w-full h-70 object-cover rounded-lg"
                    />
                </div>
                <p className="text-white font-medium text-sm flex justify-center m-3">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold">{new Intl.NumberFormat("en-US", { style: "currency", currency: "INR" }).format(product.price)}</p>
                    <button className="bg-green-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-800" onClick={() => {addToCart(product)}}>
                        Add to Cart
                    </button>
                </div>

                {message && (
                    <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-sm text-center p-2 rounded-md animate-bounce">
                        {message}
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductCard;
