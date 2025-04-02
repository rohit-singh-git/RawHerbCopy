import products from "../products.json";
import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductList({ searchQuery }) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const filteredProducts = Array.isArray(products) ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6 lg:gap-8 p-6 ml-5 mr-7">
            {loading ? (
                <p className="col-span-3 text-center text-blue-500 text-lg">Loading products...</p>
            ) : error ? (
                <p className="col-span-3 text-center text-red-500 text-lg">{error}</p>
            ) :

                filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-red-500 text-lg">No products found</p>
                )
            }
        </div>
    );
}

export default ProductList;
