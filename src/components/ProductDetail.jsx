import React from "react";
import { useParams, Link } from "react-router-dom";
// import products from "../products.json";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetail() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://rawherbbackend.onrender.com/api/v1/products")
            .then((response) => {
                // console.log("Api response : ", response.data.message)
                setProducts(response.data.message)
            })
            .catch((error) => {
                console.error("Error fetching products!", error)
            })
    }, [])

    const { addToCart, message } = useCart()

    const { id } = useParams();
    const product = products.find((p) => p._id.toString() === id);

    if (!product) {
        return <h2 className="text-center text-2xl font-bold mt-10">Product not found!</h2>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <img className="w-1/2 md:w-1/5 rounded-lg shadow-lg" src={product.main_image} alt={product.name} />
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-white mt-4 w-96 text-center md:min-w-3/4">{product.long_description}</p>
            <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold mr-10">{new Intl.NumberFormat("en-US", { style: "currency", currency: "INR" }).format(product.price)}</p>
                <button className="bg-green-600 mx-5 ml-10 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-800" onClick={() => { addToCart(product) }}>
                    Add to Cart
                </button>
            </div>
            {message && (
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-sm text-center p-2 rounded-md animate-bounce">
                    {message}
                </div>
            )}
            <Link to="/RawHerbCopy/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Back to Home
            </Link>
        </div>
    );
}

export default ProductDetail;
