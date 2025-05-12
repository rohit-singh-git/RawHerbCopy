import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products.json";
// import products from "../tempProduct.json";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

function ProductDetail() {

    const { id } = useParams();
    const product = products.find((p) => p._id.toString() === id);

    if (!product) {
        return <h2 className="text-center text-2xl font-bold mt-10">Product not found!</h2>;
    }

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        className: "center",
        centerPadding: "0px",
    }

    return (
        <div className="flex flex-col items-center justify-center p-5 overflow-x-hidden">
            <div className="md:w-1/2 grid justify-between grid-cols-1 gap-4 md:gap-6 lg:gap-8 p-6 ml-5 mr-7">
                <Slider {...settings} className="m-2 pb-3">
                    {product.additional_images.map((image, index) => (
                        <div>
                            <img
                                className="w-full h-auto md:max-w-[600px] md:max-h-[450px] object-contain rounded-lg shadow-lg mx-auto"
                                src={image}
                                alt={`Slide ${index}`}
                            />

                        </div>
                    ))}
                </Slider>
            </div>
            <h1 className="text-charcoal-grey text-3xl font-bold mt-4">{product.name}</h1>
            <h2 className="text-charcoal-grey font-bold text-xl mt-4">{product.title}</h2>
            <div className="flex-row items-center text-left bg-gray-400 text-black text-lg mt-4 rounded-3xl p-3 md:w-3/5 shadow-2xl">
                <p className="font-semibold underline text-center">Product Description</p>
                <br />
                <p>{product.long_description[1]}</p>
                <br />
                <p>{product.long_description[2]}</p>
                <br />
                <p>{product.long_description[3]}</p>
                <br />
                <p>{product.long_description[4]}</p>
                <br />
                <p className="font-semibold text-center">{product.long_description[5]}</p>
            </div>

            <ul>
                <li><p className="text-charcoal-grey mt-4 w-180 text-left md:min-w-3/4">{Object.entries(product?.highlight_points).map(([size, price]) => (
                    <div
                        key={size}
                        className="border border-green-400 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-green-700 font-semibold text-lg">{size}</p>
                        <p>{price}</p>

                    </div>
                ))}</p></li>
            </ul>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {Object.entries(product?.size_price).map(([size, price]) => (
                    <div
                        key={size}
                        className="border border-green-400 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-green-700 font-semibold text-lg">{size}</p>
                        <p className="text-charcoal-grey font-bold">
                            {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR"
                            }).format(price)}
                        </p>
                    </div>
                ))}
            </div>

            <Link to="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Back to Home
            </Link>
        </div>
    );
}

export default ProductDetail;
