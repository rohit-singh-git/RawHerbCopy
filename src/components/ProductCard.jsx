import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (
        <>
            <div className=" bg-warm-beige text-charcoal-grey justify-center m-auto mb-5 p-4 rounded-lg w-full md:w-64 shadow-lg">
                <Link to={`/RawHerbCopy/product/${product._id}`}>
                    <h2 className="text-xl font-bold text-center">{product.name}</h2>
                    <div className="bg-white p-4 object-cover rounded-lg mt-2">
                        <img
                            src={product.main_image}
                            alt={product.name}
                            className="w-full h-70 object-cover rounded-lg"
                        />
                    </div>
                    <p className="text-charcoal-grey font-medium text-sm flex justify-center m-3">{product.short_description}</p>
                </Link>
                <div className="flex justify-center items-center mt-4">
                    <p className="text-lg font-bold">{new Intl.NumberFormat("en-US", { style: "currency", currency: "INR" }).format(product.size_price["100gm"])}</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
