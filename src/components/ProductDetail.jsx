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
            <h1 className=" text-beige text-3xl font-bold mt-4">{product.name}</h1>
            <h2 className="text-beige font-bold text-xl mt-4">{product.title}</h2>
            <div className="flex-row items-center text-left bg-gray-300 text-gray-500 text-lg mt-4 rounded-3xl p-4 md:w-3/5 shadow-2xl">
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

            <ul className="">
                <li><p className=" bg-beige text-gray-900 mt-4 w-180 text-left md:min-w-3/4 rounded-xl p-1">{Object.entries(product?.highlight_points).map(([index, point]) => (
                    <div
                        key={index}
                        className="border border-olive-green-dark rounded-lg p-4 m-2 flex flex-col items-center shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <p className="font-semibold text-lg">{index}</p>
                        <p>{point}</p>

                    </div>
                ))}</p></li>
            </ul>
            {product.size_price && (Object.keys(product.size_price).length === 1 ? (
                <div className=" bg-beige grid grid-cols-1 gap-4 mt-6 rounded-lg">
                    {Object.entries(product?.size_price).map(([size, price]) => (
                        <div
                            key={size}
                            className="border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <p className="text-olive-green-dark font-semibold text-lg">{size}</p>
                            <p className="text-gray-700 font-bold">
                                {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR"
                                }).format(price)}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (<div className="grid grid-cols-2 gap-4 mt-6 rounded-lg">
                {Object.entries(product?.size_price).map(([size, price]) => (
                    <div
                        key={size}
                        className="bg-beige border rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-xl transition-shadow"
                    >
                        <p className="text-olive-green-dark font-semibold text-lg">{size}</p>
                        <p className="text-gray-700 font-bold">
                            {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR"
                            }).format(price)}
                        </p>
                    </div>
                ))}
            </div>))}

            <Link to="/" className="mt-6 px-6 py-2 bg-beige text-olive-green-dark rounded-lg hover:bg-olive-green-dark hover:text-beige border-2 border-olive-green-dark hover:border-beige">
                Back to Home
            </Link>
        </div>
    );
}

export default ProductDetail;
