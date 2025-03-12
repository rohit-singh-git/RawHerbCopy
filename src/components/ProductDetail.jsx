import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products.json";

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return <h2 className="text-center text-2xl font-bold mt-10">Product not found!</h2>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <img className="w-1/2 rounded-lg shadow-lg" src={product.image} alt={product.name} />
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-white mt-4">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">{new Intl.NumberFormat("en-US", { style: "currency", currency: "INR" }).format(product.price)}</p>
                <button className="bg-green-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-800" onClick={() => { addToCart(product) }}>
                    Add to Cart
                </button>
            </div>
            <Link to="/RawHerbCopy/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Back to Home
            </Link>
        </div>
    );
}

export default ProductDetail;
