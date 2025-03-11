import products from "../products.json";
import ProductCard from "./ProductCard";

function ProductList({ searchQuery }) {
    
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 md:gap-6 lg:gap-8 p-6 ml-5 mr-7">

            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="col-span-3 text-center text-red-500 text-lg">No products found</p>
            )}
        </div>
    );
}

export default ProductList;
